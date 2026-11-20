import * as THREE from 'three'
import {
  detectSoftwareGl,
  createStudioRenderer,
  setupStudioEnvironment,
  createLoopScheduler,
  disposeSceneResources,
} from './webglUtils.js'
import { computeScrollProgress, computeScrollCameraState } from '../utils/portfolioData.js'

const _mat4 = new THREE.Matrix4()
const _quat = new THREE.Quaternion()
const _pos = new THREE.Vector3()
const _scale = new THREE.Vector3(1, 1, 1)
const _euler = new THREE.Euler()
const _lookTarget = new THREE.Vector3()

const WORLD_PALETTES = {
  dark: {
    bg: 0x09090b,
    fog: 0x09090b,
    ribbon: 0x333844,
    copper: 0xd97736,
    prism: 0x262630,
    wire: 0x52525b,
    gridMain: 0x27272a,
    gridSub: 0x18181b,
  },
  light: {
    bg: 0xf6f5f2,
    fog: 0xf6f5f2,
    ribbon: 0x9ca3af,
    copper: 0xc25d1d,
    prism: 0xd6d3cd,
    wire: 0xa8a29e,
    gridMain: 0xd4d0c7,
    gridSub: 0xe5e2da,
  },
}

export function mountScrollWorld(container, { initialTheme = 'dark' } = {}) {
  const isSoftwareGl = detectSoftwareGl()
  const prefersReducedMotion =
    typeof window !== 'undefined' &&
    window.matchMedia?.('(prefers-reduced-motion: reduce)').matches

  const palette = WORLD_PALETTES[initialTheme] || WORLD_PALETTES.dark

  const scene = new THREE.Scene()
  scene.background = new THREE.Color(palette.bg)
  scene.fog = new THREE.FogExp2(palette.fog, 0.068)

  const width = Math.max(container.clientWidth || window.innerWidth || 1, 1)
  const height = Math.max(container.clientHeight || window.innerHeight || 1, 1)
  const camera = new THREE.PerspectiveCamera(42, width / height, 0.1, 80)

  let renderer
  try {
    renderer = createStudioRenderer(container, isSoftwareGl)
  } catch {
    return { setTheme() {}, dispose() {} }
  }

  renderer.domElement.style.display = 'block'
  renderer.domElement.style.width = '100%'
  renderer.domElement.style.height = '100%'
  renderer.domElement.style.transform = 'translateZ(0)'
  renderer.domElement.style.willChange = 'transform'
  container.style.contain = 'strict'
  container.appendChild(renderer.domElement)

  const envTarget = setupStudioEnvironment(renderer, scene)

  // Three-point + warm copper studio rig
  const hemi = new THREE.HemisphereLight(0xdbeafe, 0x18181b, 0.85)
  scene.add(hemi)

  const keyLight = new THREE.DirectionalLight(0xfff1e0, 2.0)
  keyLight.position.set(6, 8, 6)
  scene.add(keyLight)

  const rimLight = new THREE.DirectionalLight(0x93c5fd, 1.2)
  rimLight.position.set(-6, 4, -8)
  scene.add(rimLight)

  const scrollPointLight = new THREE.PointLight(0xd97736, 2.6, 20, 1.8)
  scrollPointLight.position.set(2, 1.5, 4)
  scene.add(scrollPointLight)

  // Materials (fast PBR MeshStandardMaterial with RoomEnvironment IBL for 60fps fillrate)
  const ribbonMat = new THREE.MeshStandardMaterial({
    color: palette.ribbon,
    metalness: 0.88,
    roughness: 0.26,
  })

  const copperMat = new THREE.MeshStandardMaterial({
    color: palette.copper,
    metalness: 0.94,
    roughness: 0.18,
  })

  const prismMat = new THREE.MeshStandardMaterial({
    color: palette.prism,
    metalness: 0.65,
    roughness: 0.34,
  })

  const wireMat = new THREE.MeshBasicMaterial({
    color: palette.wire,
    wireframe: true,
    transparent: true,
    opacity: 0.32,
  })

  // 1. Continuous Spatial Ribbon Spine running along Z (-19.5 to +8)
  const curvePoints = [
    new THREE.Vector3(-4.6, -2.1, 8.0),
    new THREE.Vector3(3.8, -0.8, 3.0),
    new THREE.Vector3(-3.4, -1.0, -2.5),
    new THREE.Vector3(3.2, 0.9, -8.5),
    new THREE.Vector3(-2.6, -0.3, -14.0),
    new THREE.Vector3(0.4, 1.2, -19.5),
  ]
  const ribbonCurve = new THREE.CatmullRomCurve3(curvePoints)
  const ribbonGeo = new THREE.TubeGeometry(ribbonCurve, 72, 0.085, 10, false)
  const ribbonMesh = new THREE.Mesh(ribbonGeo, copperMat)
  scene.add(ribbonMesh)

  const secondaryCurve = new THREE.CatmullRomCurve3(
    curvePoints.map((p, idx) => new THREE.Vector3(-p.x * 0.88, p.y + (idx % 2 === 0 ? 1.5 : -1.2), p.z))
  )
  const secondaryRibbon = new THREE.Mesh(
    new THREE.TubeGeometry(secondaryCurve, 64, 0.045, 8, false),
    ribbonMat
  )
  scene.add(secondaryRibbon)

  // 2. Monumental Architectural Rings positioned along the scroll corridor
  const sharedInnerWireGeo = new THREE.IcosahedronGeometry(1, 0)
  const corridorRings = [
    { x: 1.15, y: -0.25, z: 4.5, r: 2.75, tube: 0.045, rx: 0.45, ry: 0.25, mat: ribbonMat },
    { x: -0.35, y: 0.0, z: -1.5, r: 2.65, tube: 0.055, rx: -0.35, ry: -0.3, mat: copperMat },
    { x: 0.25, y: 0.15, z: -7.5, r: 3.3, tube: 0.04, rx: 0.5, ry: 0.4, mat: ribbonMat },
    { x: 0.0, y: 0.0, z: -13.5, r: 2.8, tube: 0.05, rx: -0.25, ry: 0.25, mat: copperMat },
  ].map((cfg) => {
    const group = new THREE.Group()
    group.position.set(cfg.x, cfg.y, cfg.z)
    group.rotation.set(cfg.rx, cfg.ry, 0)
    const ring = new THREE.Mesh(new THREE.TorusGeometry(cfg.r, cfg.tube, 12, 56), cfg.mat)
    const innerWire = new THREE.Mesh(sharedInnerWireGeo, wireMat)
    innerWire.scale.setScalar(cfg.r * 0.42)
    group.add(ring, innerWire)
    scene.add(group)
    return group
  })

  // 3. Instanced Architectural Prisms arranged along a 3D depth helix
  const PRISM_COUNT = 44
  const prismGeo = new THREE.OctahedronGeometry(0.22, 0)
  const prismInstances = new THREE.InstancedMesh(prismGeo, prismMat, PRISM_COUNT)
  const prismBaseData = []
  for (let i = 0; i < PRISM_COUNT; i++) {
    const t = i / PRISM_COUNT
    const angle = t * Math.PI * 6
    const radius = 2.8 + (i % 4) * 0.9
    const x = Math.cos(angle) * radius
    const y = Math.sin(angle) * (radius * 0.55)
    const z = 8 - t * 26
    const s = 0.55 + (i % 5) * 0.22
    prismBaseData.push({ x, y, z, angle, s })
    _pos.set(x, y, z)
    _euler.set(angle * 0.5, angle, 0)
    _quat.setFromEuler(_euler)
    _scale.set(s, s, s)
    _mat4.compose(_pos, _quat, _scale)
    prismInstances.setMatrixAt(i, _mat4)
  }
  prismInstances.instanceMatrix.needsUpdate = true
  prismInstances.computeBoundingSphere()
  scene.add(prismInstances)

  // 4. Subtle Architectural Floor Grid Horizon
  const gridHelper = new THREE.GridHelper(50, 40, palette.gridMain, palette.gridSub)
  gridHelper.position.set(0, -3.6, -5)
  gridHelper.material.transparent = true
  gridHelper.material.opacity = 0.55
  scene.add(gridHelper)

  // Cached document dimensions (avoids synchronous layout reflow during scroll)
  let cachedScrollHeight = document.documentElement.scrollHeight
  let cachedViewportHeight = window.innerHeight || 1

  let targetScroll = computeScrollProgress(
    window.scrollY,
    cachedScrollHeight,
    cachedViewportHeight
  )
  let smoothScroll = targetScroll
  let pointerX = 0
  let pointerY = 0
  let smoothPX = 0
  let smoothPY = 0

  const initialCam = computeScrollCameraState(smoothScroll)
  camera.position.set(...initialCam.position)
  _lookTarget.set(...initialCam.lookAt)
  camera.lookAt(_lookTarget)

  const syncScrollTarget = () => {
    targetScroll = computeScrollProgress(
      window.scrollY,
      cachedScrollHeight,
      cachedViewportHeight
    )
  }

  const onScroll = () => {
    syncScrollTarget()
  }
  window.addEventListener('scroll', onScroll, { passive: true })

  let docResizeObserver = null
  if (typeof ResizeObserver !== 'undefined') {
    docResizeObserver = new ResizeObserver(() => {
      cachedScrollHeight = document.documentElement.scrollHeight
      cachedViewportHeight = window.innerHeight || 1
      syncScrollTarget()
    })
    docResizeObserver.observe(document.documentElement)
  }

  const onPointerMove = (e) => {
    const w = cachedViewportHeight > 0 ? window.innerWidth || 1 : 1
    const h = cachedViewportHeight || 1
    pointerX = (e.clientX / w - 0.5) * 2
    pointerY = (e.clientY / h - 0.5) * 2
  }
  window.addEventListener('pointermove', onPointerMove, { passive: true })

  const startTime = performance.now()
  let lastTime = startTime

  function renderFrame() {
    const now = performance.now()
    const delta = Math.min((now - lastTime) / 1000, 0.1)
    const elapsed = (now - startTime) / 1000
    lastTime = now

    // Responsive yet silky exponential damping
    smoothScroll = THREE.MathUtils.damp(smoothScroll, targetScroll, 8.5, delta)
    smoothPX = THREE.MathUtils.damp(smoothPX, pointerX, 5.0, delta)
    smoothPY = THREE.MathUtils.damp(smoothPY, pointerY, 5.0, delta)

    const camState = computeScrollCameraState(smoothScroll)

    camera.position.set(
      camState.position[0] + smoothPX * 0.45,
      camState.position[1] - smoothPY * 0.28,
      camState.position[2]
    )
    _lookTarget.set(
      camState.lookAt[0] + smoothPX * 0.18,
      camState.lookAt[1] - smoothPY * 0.12,
      camState.lookAt[2]
    )
    camera.lookAt(_lookTarget)

    // Move warm copper point light along scroll corridor
    scrollPointLight.position.set(
      Math.sin(smoothScroll * Math.PI * 2) * 3.5,
      1.2,
      camera.position.z - 4.5
    )

    // Scroll-coupled + continuous ambient kinetic rotation on rings
    corridorRings.forEach((group, idx) => {
      const dir = idx % 2 === 0 ? 1 : -1
      const idleSpin = prefersReducedMotion ? 0 : elapsed * 0.14 * dir
      group.rotation.z = smoothScroll * Math.PI * 2.2 * dir + idleSpin
      group.rotation.y = (idx * 0.35 + smoothScroll * 1.6) * dir
    })

    // Gentle scroll-reactive rotation on helix prisms (only if not reduced motion)
    if (!prefersReducedMotion) {
      prismInstances.rotation.z = smoothScroll * 0.45 + elapsed * 0.025
    } else {
      prismInstances.rotation.z = smoothScroll * 0.45
    }

    renderer.render(scene, camera)
  }

  if (!isSoftwareGl) {
    renderer.compile(scene, camera)
  }

  const scheduler = createLoopScheduler(renderer, isSoftwareGl, renderFrame)
  scheduler.start()

  const onResize = () => {
    const w = Math.max(container.clientWidth || window.innerWidth || 1, 1)
    const h = Math.max(container.clientHeight || window.innerHeight || 1, 1)
    cachedScrollHeight = document.documentElement.scrollHeight
    cachedViewportHeight = h
    camera.aspect = w / h
    camera.updateProjectionMatrix()
    renderer.setSize(w, h)
    syncScrollTarget()
    scheduler.renderOnce()
  }
  window.addEventListener('resize', onResize)

  const onContextLost = (e) => {
    e.preventDefault()
    scheduler.pause()
  }
  const onContextRestored = () => {
    scheduler.start()
  }
  renderer.domElement.addEventListener('webglcontextlost', onContextLost)
  renderer.domElement.addEventListener('webglcontextrestored', onContextRestored)

  return {
    setTheme(nextTheme) {
      const p = WORLD_PALETTES[nextTheme] || WORLD_PALETTES.dark
      scene.background.setHex(p.bg)
      scene.fog.color.setHex(p.fog)
      ribbonMat.color.setHex(p.ribbon)
      copperMat.color.setHex(p.copper)
      prismMat.color.setHex(p.prism)
      wireMat.color.setHex(p.wire)
      gridHelper.material.opacity = nextTheme === 'light' ? 0.38 : 0.55
      scheduler.renderOnce()
    },
    dispose() {
      scheduler.dispose()
      docResizeObserver?.disconnect()
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('pointermove', onPointerMove)
      window.removeEventListener('resize', onResize)
      renderer.domElement.removeEventListener('webglcontextlost', onContextLost)
      renderer.domElement.removeEventListener('webglcontextrestored', onContextRestored)
      disposeSceneResources(scene, envTarget)
      renderer.dispose()
      if (renderer.domElement.parentNode === container) {
        container.removeChild(renderer.domElement)
      }
    },
  }
}
