import test from 'node:test'
import assert from 'node:assert/strict'
import {
  PROJECTS,
  TECH_STACK,
  filterProjects,
  filterSkillsByDomain,
  computeNormalizedTilt,
  computeScrollProgress,
  computeScrollCameraState,
  validateContactForm,
} from './portfolioData.js'

test('filterProjects returns all projects for All and narrows by category', () => {
  assert.equal(filterProjects(PROJECTS, 'All').length, PROJECTS.length)
  const fullStack = filterProjects(PROJECTS, 'Full-Stack')
  assert.equal(fullStack.length, 1)
  assert.equal(fullStack[0].id, 'faculty-hiring-portal')

  const frontend = filterProjects(PROJECTS, 'Frontend & UI')
  assert.equal(frontend.length, 1)
  assert.equal(frontend[0].id, 'labour-hub')
})

test('filterSkillsByDomain filters accurately across domains', () => {
  assert.equal(filterSkillsByDomain(TECH_STACK, 'All').length, TECH_STACK.length)
  const frontend = filterSkillsByDomain(TECH_STACK, 'Frontend')
  assert.ok(frontend.length > 0)
  assert.ok(frontend.every((s) => s.domain === 'Frontend'))

  const backend = filterSkillsByDomain(TECH_STACK, 'Backend & Data')
  assert.ok(backend.some((s) => s.name === 'MongoDB'))
})

test('computeNormalizedTilt clamps coordinates and computes opposing axes', () => {
  assert.deepEqual(computeNormalizedTilt(100, 100, 200, 200, 8), {
    rotateX: 0,
    rotateY: 0,
  })
  assert.deepEqual(computeNormalizedTilt(200, 0, 200, 200, 8), {
    rotateX: 8,
    rotateY: 8,
  })
  assert.deepEqual(computeNormalizedTilt(0, 200, 200, 200, 8), {
    rotateX: -8,
    rotateY: -8,
  })
  assert.deepEqual(computeNormalizedTilt(50, 50, 0, 200, 8), {
    rotateX: 0,
    rotateY: 0,
  })
})

test('computeScrollProgress clamps normalized scroll ratio between 0 and 1', () => {
  assert.equal(computeScrollProgress(0, 3000, 900), 0)
  assert.equal(computeScrollProgress(1050, 3000, 900), 0.5)
  assert.equal(computeScrollProgress(3000, 3000, 900), 1)
  assert.equal(computeScrollProgress(100, 800, 900), 0)
})

test('computeScrollCameraState moves smoothly along Z trajectory as scroll increases', () => {
  const start = computeScrollCameraState(0)
  const mid = computeScrollCameraState(0.5)
  const end = computeScrollCameraState(1)

  assert.ok(start.position[2] > mid.position[2])
  assert.ok(mid.position[2] > end.position[2])
  assert.ok(start.lookAt[2] > end.lookAt[2])
})

test('validateContactForm catches invalid fields and accepts valid submissions', () => {
  const invalid = validateContactForm({
    name: 'A',
    email: 'not-an-email',
    subject: 'Hi',
    message: 'Short',
  })
  assert.equal(invalid.valid, false)
  assert.ok(invalid.errors.name)
  assert.ok(invalid.errors.email)
  assert.ok(invalid.errors.subject)
  assert.ok(invalid.errors.message)

  const valid = validateContactForm({
    name: 'Arun Saini',
    email: 'arun@example.com',
    subject: 'Project Inquiry',
    message: 'Hello, I would like to collaborate on a web build.',
  })
  assert.equal(valid.valid, true)
  assert.deepEqual(valid.errors, {})
})
