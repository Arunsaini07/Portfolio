import test from 'node:test'
import assert from 'node:assert/strict'
import {
  PROJECTS,
  TECH_STACK,
  EXPERIENCES,
  CERTIFICATIONS,
  filterProjects,
  filterSkillsByDomain,
  computeNormalizedTilt,
  computeScrollProgress,
  computeScrollCameraState,
  validateContactForm,
} from './portfolioData.js'

test('resume experiences and certifications contain expected entries', () => {
  assert.equal(EXPERIENCES.length, 2)
  assert.equal(EXPERIENCES[0].company, 'Mnivesh')
  assert.equal(EXPERIENCES[1].company, 'InAmigos')
  assert.equal(CERTIFICATIONS.length, 6)
})

test('filterProjects returns all projects for All and narrows by category', () => {
  const all = filterProjects(PROJECTS, 'All')
  assert.equal(all.length, PROJECTS.length)

  const fullStack = filterProjects(PROJECTS, 'Full-Stack')
  assert.equal(fullStack.length, 2)
  assert.equal(fullStack[0].id, 'faculty-recruitment-system')

  const dataAnalytics = filterProjects(PROJECTS, 'Data & Analytics')
  assert.equal(dataAnalytics.length, 1)
  assert.equal(dataAnalytics[0].id, 'gurgaon-real-estate-analysis')
  assert.equal(
    dataAnalytics[0].directUrl,
    'https://github.com/Arunsaini07/data-analysis-/blob/main/project/main.py'
  )
  assert.equal(
    dataAnalytics[0].githubLink,
    'https://github.com/Arunsaini07/data-analysis-/blob/main/project/main.py'
  )
})

test('filterSkillsByDomain filters accurately across domains', () => {
  const all = filterSkillsByDomain(TECH_STACK, 'All')
  assert.equal(all.length, TECH_STACK.length)

  const frontend = filterSkillsByDomain(TECH_STACK, 'Frontend & UI')
  assert.ok(frontend.length > 0)
  assert.ok(frontend.every((item) => item.domain === 'Frontend & UI'))

  const dataAi = filterSkillsByDomain(TECH_STACK, 'Data & AI')
  assert.ok(dataAi.some((item) => item.name === 'Power BI'))
  assert.ok(dataAi.some((item) => item.name === 'Tableau'))
})

test('computeNormalizedTilt clamps coordinates and computes opposing axes', () => {
  const center = computeNormalizedTilt(100, 50, 200, 100, 8)
  assert.deepEqual(center, { rotateX: 0, rotateY: 0 })

  const topRight = computeNormalizedTilt(200, 0, 200, 100, 8)
  assert.deepEqual(topRight, { rotateX: 8, rotateY: 8 })

  const outOfBounds = computeNormalizedTilt(-50, 500, 200, 100, 6)
  assert.deepEqual(outOfBounds, { rotateX: -6, rotateY: -6 })
})

test('computeScrollProgress clamps normalized scroll ratio between 0 and 1', () => {
  assert.equal(computeScrollProgress(0, 3000, 900), 0)
  assert.equal(computeScrollProgress(1050, 3000, 900), 0.5)
  assert.equal(computeScrollProgress(2500, 3000, 900), 1)
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
    email: 'invalid-email',
    subject: 'Hi',
    message: 'Too short',
  })
  assert.equal(invalid.valid, false)
  assert.ok(invalid.errors.name)
  assert.ok(invalid.errors.email)
  assert.ok(invalid.errors.subject)
  assert.ok(invalid.errors.message)

  const valid = validateContactForm({
    name: 'Arun Saini',
    email: 'arunsaini8092@gmail.com',
    subject: 'Frontend & Data Role',
    message: 'Interested in collaborating on a React and analytics product.',
  })
  assert.equal(valid.valid, true)
  assert.deepEqual(valid.errors, {})
})
