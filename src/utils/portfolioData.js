export const PROFILE = {
  name: 'Arun Saini',
  firstName: 'Arun',
  roles: [
    'Frontend Developer',
    'UI/UX Designer',
    'React Specialist',
    '3D Web Builder',
  ],
  headline: 'Crafting spatial web experiences & resilient interfaces.',
  summary:
    'Frontend developer and UI/UX designer focused on React, interactive 3D architecture, and clean full-stack product execution.',
  availability: 'Open for select frontend & full-stack roles',
  location: 'India · Remote Ready',
  email: 'arunsaini8092@gmail.com',
  resumeUrl:
    'https://drive.google.com/file/d/1RMgtDMQbGzgLnwAi9NLZxcjyvUW3tJy9/view?usp=drive_link',
  portraitSrc: 'profile.jpeg',
  fallbackPortraitSrc: 'profile1.jpeg',
  metrics: [
    { value: '6+', label: 'Months Experience', detail: 'Production web & UI engineering' },
    { value: '3+', label: 'Projects Shipped', detail: 'Full-stack & interactive builds' },
    { value: '20+', label: 'Core Technologies', detail: 'Frontend, cloud, SQL & design' },
  ],
  socials: [
    {
      id: 'linkedin',
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/arun8092/',
      handle: '/in/arun8092',
    },
    {
      id: 'github',
      label: 'GitHub',
      href: 'https://github.com/Arunsaini07',
      handle: '@Arunsaini07',
    },
    {
      id: 'leetcode',
      label: 'LeetCode',
      href: 'https://leetcode.com/u/Arun8092/',
      handle: 'Arun8092',
    },
    {
      id: 'instagram',
      label: 'Instagram',
      href: 'https://www.instagram.com/arunsaini__07/',
      handle: '@arunsaini__07',
    },
  ],
}

export const PROJECTS = [
  {
    id: 'faculty-hiring-portal',
    index: '01',
    title: 'Faculty Hiring Portal',
    category: 'Full-Stack',
    year: '2025',
    summary:
      'Full-stack recruitment platform digitizing university faculty hiring workflows with online applications, document verification, approval tracking, and compliance checks.',
    architecture:
      'Built modular multi-stage candidate workflows, automated document validation queues, and role-based review pipelines to replace manual spreadsheet tracking.',
    highlights: [
      'Multi-step candidate submission and credential audit trail',
      'Department approval routing with compliance status tracking',
      'Responsive administrative dashboard engineered with Tailwind CSS',
    ],
    image: 'faculty.png',
    techStack: ['React', 'Tailwind CSS', 'JavaScript'],
    liveLink: 'https://footprint-demo.com',
    githubLink: 'https://github.com/Arunsaini07',
  },
  {
    id: 'labour-hub',
    index: '02',
    title: 'LabourHub',
    category: 'Frontend & UI',
    year: '2025',
    summary:
      'Two-sided workforce marketplace connecting skilled laborers with local employers through fast registration, job discovery, and streamlined hiring workflows.',
    architecture:
      'Designed clear high-contrast onboarding flows for workers and employers, pairing structured job cards with accessible mobile-first navigation.',
    highlights: [
      'Dual-role discovery flow for workers and hiring contractors',
      'Fast, accessible listing cards designed for low-bandwidth screens',
      'Component-driven UI built in React with clean CSS layout architecture',
    ],
    image: 'labour.png',
    techStack: ['React', 'CSS3', 'HTML5'],
    liveLink: 'https://eduadi-demo.com',
    githubLink: 'https://github.com/Arunsaini07',
  },
]

export const PROJECT_CATEGORIES = ['All', 'Full-Stack', 'Frontend & UI']

export const TECH_STACK = [
  { name: 'HTML5', domain: 'Frontend', level: 'Core' },
  { name: 'CSS3', domain: 'Frontend', level: 'Core' },
  { name: 'JavaScript', domain: 'Frontend', level: 'Core' },
  { name: 'React', domain: 'Frontend', level: 'Core' },
  { name: 'Next.js', domain: 'Frontend', level: 'Proficient' },
  { name: 'Tailwind CSS', domain: 'Frontend', level: 'Core' },
  { name: 'Bootstrap', domain: 'Frontend', level: 'Proficient' },
  { name: 'Three.js', domain: 'Frontend', level: 'Interactive 3D' },
  { name: 'Node.js', domain: 'Backend & Data', level: 'Proficient' },
  { name: 'Python', domain: 'Backend & Data', level: 'Proficient' },
  { name: 'C', domain: 'Backend & Data', level: 'Foundational' },
  { name: 'C++ (DSA)', domain: 'Backend & Data', level: 'Core' },
  { name: 'MySQL', domain: 'Backend & Data', level: 'Proficient' },
  { name: 'MongoDB', domain: 'Backend & Data', level: 'Proficient' },
  { name: 'AWS (EC2, S3, IAM)', domain: 'Cloud & Design', level: 'Cloud' },
  { name: 'Git', domain: 'Cloud & Design', level: 'Workflow' },
  { name: 'GitHub', domain: 'Cloud & Design', level: 'Workflow' },
  { name: 'Figma', domain: 'Cloud & Design', level: 'UI/UX' },
  { name: 'Adobe', domain: 'Cloud & Design', level: 'Visual' },
  { name: 'Canva', domain: 'Cloud & Design', level: 'Visual' },
  { name: 'Excel', domain: 'Cloud & Design', level: 'Analysis' },
]

export const SKILL_DOMAINS = ['All', 'Frontend', 'Backend & Data', 'Cloud & Design']

export const CAPABILITIES = [
  {
    index: '01',
    title: 'Responsive Interface Systems',
    description:
      'Pixel-accurate, mobile-first layouts engineered with clean visual hierarchy and consistent spatial rhythm across viewports.',
  },
  {
    index: '02',
    title: 'Modular React Architecture',
    description:
      'Reusable component boundaries, decoupled state logic, and maintainable patterns grounded in OOP and LLD principles.',
  },
  {
    index: '03',
    title: 'Runtime Performance',
    description:
      'Optimized rendering pipelines, GPU-composited motion, and lightweight asset delivery for crisp interactive responsiveness.',
  },
  {
    index: '04',
    title: 'DSA & Analytical Rigor',
    description:
      'Structured problem-solving in C++ and JavaScript paired with optimized SQL querying and RESTful API integration.',
  },
  {
    index: '05',
    title: 'Cross-Functional Delivery',
    description:
      'Clear engineering communication, Git collaboration, and rapid prototyping from Figma wireframes to production code.',
  },
  {
    index: '06',
    title: 'AI-Assisted Workflows',
    description:
      'Practical command of modern AI engineering tools to accelerate debugging, automation, and product iteration.',
  },
]

export function filterProjects(projects, category) {
  if (!category || category === 'All') {
    return projects
  }
  return projects.filter((project) => project.category === category)
}

export function filterSkillsByDomain(skills, domain) {
  if (!domain || domain === 'All') {
    return skills
  }
  return skills.filter((skill) => skill.domain === domain)
}

export function computeNormalizedTilt(offsetX, offsetY, width, height, maxDeg = 7) {
  if (!width || !height || width <= 0 || height <= 0) {
    return { rotateX: 0, rotateY: 0 }
  }
  const nx = Math.max(-1, Math.min(1, (offsetX / width) * 2 - 1))
  const ny = Math.max(-1, Math.min(1, (offsetY / height) * 2 - 1))
  return {
    rotateX: Number((-ny * maxDeg).toFixed(2)),
    rotateY: Number((nx * maxDeg).toFixed(2)),
  }
}

export function computeScrollProgress(scrollY, scrollHeight, viewportHeight) {
  const maxScroll = Math.max(scrollHeight - viewportHeight, 0)
  if (maxScroll <= 0) return 0
  return Math.max(0, Math.min(1, scrollY / maxScroll))
}

const CAMERA_WAYPOINTS = [
  { t: 0.0, pos: [2.8, 1.4, 11.5], lookAt: [0.6, 0.2, 0.0] },
  { t: 0.35, pos: [-2.6, 0.6, 7.2], lookAt: [0.0, 0.0, -3.2] },
  { t: 0.7, pos: [2.4, -0.4, 2.2], lookAt: [-0.4, -0.3, -7.8] },
  { t: 1.0, pos: [0.0, 0.8, -3.5], lookAt: [0.0, 0.1, -14.0] },
]

export function computeScrollCameraState(progress) {
  const p = Math.max(0, Math.min(1, Number(progress) || 0))
  let i = 0
  while (i < CAMERA_WAYPOINTS.length - 2 && p > CAMERA_WAYPOINTS[i + 1].t) {
    i++
  }
  const start = CAMERA_WAYPOINTS[i]
  const end = CAMERA_WAYPOINTS[i + 1]
  const span = Math.max(end.t - start.t, 0.0001)
  const localT = Math.max(0, Math.min(1, (p - start.t) / span))
  // Smoothstep easing for cinematic scroll camera glide
  const ease = localT * localT * (3 - 2 * localT)

  return {
    position: [
      start.pos[0] + (end.pos[0] - start.pos[0]) * ease,
      start.pos[1] + (end.pos[1] - start.pos[1]) * ease,
      start.pos[2] + (end.pos[2] - start.pos[2]) * ease,
    ],
    lookAt: [
      start.lookAt[0] + (end.lookAt[0] - start.lookAt[0]) * ease,
      start.lookAt[1] + (end.lookAt[1] - start.lookAt[1]) * ease,
      start.lookAt[2] + (end.lookAt[2] - start.lookAt[2]) * ease,
    ],
  }
}

export function validateContactForm({ name, email, subject, message }) {
  const errors = {}
  const trimmedName = (name || '').trim()
  const trimmedEmail = (email || '').trim()
  const trimmedSubject = (subject || '').trim()
  const trimmedMessage = (message || '').trim()

  if (trimmedName.length < 2) {
    errors.name = 'Please enter your name (at least 2 characters).'
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedEmail)) {
    errors.email = 'Please enter a valid email address.'
  }
  if (trimmedSubject.length < 3) {
    errors.subject = 'Please enter a short subject (at least 3 characters).'
  }
  if (trimmedMessage.length < 10) {
    errors.message = 'Please include a message of at least 10 characters.'
  }

  return {
    valid: Object.keys(errors).length === 0,
    errors,
  }
}
