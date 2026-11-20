import * as THREE from 'three'
import { RoomEnvironment } from 'three/addons/environments/RoomEnvironment.js'

export function detectSoftwareGl() {
  try {
    const canvas = document.createElement('canvas')
    const gl = canvas.getContext('webgl2')
    if (!gl) return true
    const ext = gl.getExtension('WEBGL_debug_renderer_info')
    const param = ext ? ext.UNMASKED_RENDERER_WEBGL : gl.RENDERER
    const gpu = String(gl.getParameter(param) || '')
    gl.getExtension('WEBGL_lose_context')?.loseContext()
    return /SwiftShader|llvmpipe|softpipe|Software|Basic Render/i.test(gpu)
  } catch {
    return true
  }
}

export function createStudioRenderer(container, isSoftwareGl, { shadows = false } = {}) {
  const width = Math.max(container.clientWidth || 1, 1)
  const height = Math.max(container.clientHeight || 1, 1)

  const renderer = new THREE.WebGLRenderer({
    antialias: !isSoftwareGl,
    powerPreference: 'high-performance',
    alpha: false,
    stencil: false,
  })
  renderer.outputColorSpace = THREE.SRGBColorSpace
  renderer.toneMapping = THREE.ACESFilmicToneMapping
  renderer.toneMappingExposure = 1.1
  renderer.setPixelRatio(isSoftwareGl ? 1 : Math.min(window.devicePixelRatio || 1, 1.5))
  renderer.setSize(width, height)
  renderer.shadowMap.enabled = shadows && !isSoftwareGl
  if (renderer.shadowMap.enabled) {
    renderer.shadowMap.type = THREE.PCFSoftShadowMap
  }

  return renderer
}

export function setupStudioEnvironment(renderer, scene) {
  const pmremGenerator = new THREE.PMREMGenerator(renderer)
  const roomEnv = new RoomEnvironment()
  const envTarget = pmremGenerator.fromScene(roomEnv, 0.04)
  scene.environment = envTarget.texture
  roomEnv.dispose()
  pmremGenerator.dispose()
  return envTarget
}

export function createContactShadowTexture() {
  const size = 256
  const canvas = document.createElement('canvas')
  canvas.width = size
  canvas.height = size
  const ctx = canvas.getContext('2d')
  const grad = ctx.createRadialGradient(
    size / 2,
    size / 2,
    size * 0.04,
    size / 2,
    size / 2,
    size * 0.5
  )
  grad.addColorStop(0, 'rgba(0, 0, 0, 0.55)')
  grad.addColorStop(0.45, 'rgba(0, 0, 0, 0.22)')
  grad.addColorStop(1, 'rgba(0, 0, 0, 0)')
  ctx.fillStyle = grad
  ctx.fillRect(0, 0, size, size)

  const tex = new THREE.CanvasTexture(canvas)
  tex.colorSpace = THREE.SRGBColorSpace
  return tex
}

export function createLoopScheduler(renderer, isSoftwareGl, renderFrame) {
  let frameId = 0
  let stopped = false
  let running = false

  function scheduleNext() {
    if (stopped || !running) return
    if (isSoftwareGl) {
      const gl = renderer.getContext()
      if (gl && typeof gl.fenceSync === 'function') {
        const sync = gl.fenceSync(gl.SYNC_GPU_COMMANDS_COMPLETE, 0)
        gl.flush()
        const poll = () => {
          if (stopped || !running) {
            if (sync) gl.deleteSync(sync)
            return
          }
          const state = sync && gl.getSyncParameter(sync, gl.SYNC_STATUS)
          if (state === gl.UNSIGNALED) {
            frameId = window.setTimeout(poll, 5)
          } else {
            if (sync) gl.deleteSync(sync)
            frameId = window.setTimeout(tick, 80)
          }
        }
        frameId = window.setTimeout(poll, 5)
      } else {
        frameId = window.setTimeout(tick, 80)
      }
    } else {
      frameId = window.requestAnimationFrame(tick)
    }
  }

  function tick() {
    if (stopped || !running) return
    renderFrame()
    scheduleNext()
  }

  return {
    start() {
      if (stopped || running) return
      running = true
      tick()
    },
    pause() {
      running = false
      window.cancelAnimationFrame(frameId)
      window.clearTimeout(frameId)
    },
    renderOnce() {
      if (stopped) return
      renderFrame()
    },
    dispose() {
      stopped = true
      running = false
      window.cancelAnimationFrame(frameId)
      window.clearTimeout(frameId)
    },
  }
}

export function disposeSceneResources(scene, envTarget) {
  scene.traverse((obj) => {
    if (obj.geometry) {
      obj.geometry.dispose()
    }
    if (obj.material) {
      const mats = Array.isArray(obj.material) ? obj.material : [obj.material]
      mats.forEach((mat) => {
        Object.values(mat).forEach((val) => {
          if (val && typeof val.dispose === 'function' && val.isTexture) {
            val.dispose()
          }
        })
        mat.dispose()
      })
    }
  })
  if (envTarget) {
    envTarget.dispose()
  }
}
