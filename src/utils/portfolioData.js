export const PROFILE = {
  name: 'Arun Saini',
  firstName: 'Arun',
  roles: [
    'Frontend Developer',
    'Data Analyst',
    'UI/UX Designer',
    'React & Next.js Builder',
  ],
  headline: 'Crafting spatial web experiences & resilient interfaces.',
  summary:
    'B.Tech CSE undergraduate (KIET Group of Institutions) and Data Analyst Intern at Mnivesh & InAmigos—combining React, interactive 3D interfaces, and Python, SQL & Power BI analytics.',
  availability: 'Open for frontend, full-stack & data analyst roles',
  location: 'Ghaziabad, India · Remote Ready',
  email: 'arunsaini8092@gmail.com',
  phone: '+91 9897179694',
  resumeUrl: 'assets/aistudio/Resume_5d586941.pdf',
  portraitSrc: 'profile.jpeg',
  fallbackPortraitSrc: 'profile1.jpeg',
  metrics: [
    {
      value: '2',
      label: 'Data Analyst Internships',
      detail: 'Mnivesh & InAmigos (2026)',
    },
    {
      value: '4',
      label: 'Featured Projects',
      detail: 'Full-stack web, UI & analytics',
    },
    {
      value: '6',
      label: 'Industry Certifications',
      detail: 'AWS, Oracle, MongoDB & Python',
    },
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

export const EXPERIENCES = [
  {
    id: 'mnivesh',
    index: '01',
    company: 'Mnivesh',
    role: 'Data Analyst Intern',
    type: 'Internship',
    period: 'Jul 23, 2026 – Oct 23, 2026',
    duration: '3 Months',
    stack: ['Python', 'Excel', 'Power BI', 'Tableau'],
    highlights: [
      'Organized and analyzed datasets to identify patterns, trends, and key performance insights.',
      'Prepared analysis outputs and interactive dashboards to support business reporting and decision-making.',
    ],
  },
  {
    id: 'inamigos',
    index: '02',
    company: 'InAmigos',
    role: 'Data Analyst Intern',
    type: 'Internship',
    period: 'Jan 1, 2026 – Jan 28, 2026',
    duration: '1 Month',
    stack: ['Python', 'Excel', 'Power BI'],
    highlights: [
      'Supported data collection, data cleaning, and analysis to turn raw operational data into actionable insights.',
      'Created structured reports and visualizations to communicate trends and guide data-driven decision-making.',
    ],
  },
]

export const EDUCATION_AND_ACHIEVEMENT = {
  education: {
    degree: 'Bachelor of Technology in Computer Science Engineering',
    institution: 'KIET Group of Institutions, Ghaziabad (AKTU)',
    period: 'Aug 2023 – May 2027',
  },
  achievement: {
    title: 'SIH (Smart India Hackathon – Institute Level)',
    badge: 'Internal Finalist',
    year: '2025',
    detail:
      'Secured 67th rank among 600 participating teams in the Smart India Hackathon internal hackathon conducted at the institute level.',
  },
}

export const CERTIFICATIONS = [
  {
    index: '01',
    title: 'AWS Certified Cloud Practitioner',
    issuer: 'Amazon Web Services',
    year: '2026',
  },
  {
    index: '02',
    title: 'Ultimate Job-Ready AI-Powered Data Analytics',
    issuer: 'Data & AI Analytics Track',
    year: '2026',
  },
  {
    index: '03',
    title: 'Oracle Database Foundations Certification',
    issuer: 'Oracle',
    year: '2025',
  },
  {
    index: '04',
    title: 'MongoDB Certification',
    issuer: 'MongoDB',
    year: '2025',
  },
  {
    index: '05',
    title: 'Python Certification',
    issuer: 'Core Programming',
    year: '2025',
  },
  {
    index: '06',
    title: 'Infosys Certification',
    issuer: 'Infosys',
    year: '2025',
  },
]

export const PROJECTS = [
  {
    id: 'faculty-recruitment-system',
    index: '01',
    title: 'Faculty Recruitment Management System',
    category: 'Full-Stack',
    year: '2026',
    summary:
      'Full-stack faculty recruitment platform streamlining applications, credential verification, multi-stage approvals, and compliance workflows.',
    architecture:
      'Implemented role-based authentication, structured administrative dashboards, automated notifications, and end-to-end CRUD pipelines backed by relational SQL schemas.',
    highlights: [
      'Role-based authentication across applicants, reviewers, and department heads',
      'Application, document verification, approval tracking, and compliance workflows',
      'Relational database integration with MySQL / PostgreSQL and responsive React UI',
    ],
    image: 'faculty.png',
    techStack: ['React', 'MySQL', 'PostgreSQL'],
    liveLink: 'https://footprint-demo.com',
    githubLink: 'https://github.com/Arunsaini07',
  },
  {
    id: 'labour-hub',
    index: '02',
    title: 'Labour Hub',
    category: 'Full-Stack',
    year: '2026',
    summary:
      'Two-sided workforce platform connecting skilled workers and employers with fast onboarding, job discovery, and candidate management.',
    architecture:
      'Engineered with Next.js and React over MySQL for low-latency job search, employer posting workflows, application tracking, and secure session handling.',
    highlights: [
      'Registration, job search, applications, postings, and candidate management flows',
      'Responsive mobile-first UI designed for fast interaction across devices',
      'Secure authentication and normalized MySQL database integration',
    ],
    image: 'labour.png',
    techStack: ['Next.js', 'React', 'MySQL'],
    liveLink: 'https://eduadi-demo.com',
    githubLink: 'https://github.com/Arunsaini07',
  },
  {
    id: 'gurgaon-real-estate-analysis',
    index: '03',
    title: 'Gurgaon Real Estate Market Analysis',
    category: 'Data & Analytics',
    year: '2026',
    summary:
      'End-to-end real estate analytics project uncovering pricing distributions, locality demand trends, and investment indicators across Gurgaon.',
    architecture:
      'Combined Python data preprocessing and SQL querying with Excel modeling and interactive Power BI dashboards to surface pricing anomalies and growth corridors.',
    highlights: [
      'Cleaned and normalized raw property listings using Python and SQL',
      'Evaluated pricing per sq. ft., property mix, and regional demand trends',
      'Built interactive Power BI executive reports to support investment decisions',
    ],
    image: null,
    deliverables: ['Pricing & Demand Trends', 'Data Cleaning Pipeline', 'Interactive Power BI'],
    techStack: ['Python', 'Excel', 'SQL', 'Power BI'],
    liveLink: 'https://github.com/Arunsaini07',
    githubLink: 'https://github.com/Arunsaini07',
  },
  {
    id: 'ai-web-dev-workflow',
    index: '04',
    title: 'AI-Assisted Web Development Workflow',
    category: 'Frontend & AI',
    year: '2026',
    summary:
      'Modern AI-augmented frontend engineering workflow uniting React, Claude, GitHub Copilot, and Stitch for rapid UI design and production delivery.',
    architecture:
      'Integrated prompt-driven UI wireframing in Stitch with assisted component authoring, debugging, and technical documentation in React.',
    highlights: [
      'Combined Claude, GitHub Copilot, and Stitch for UI design and React implementation',
      'Accelerated code generation, debugging, documentation, and rapid prototyping',
      'Improved delivery velocity while maintaining responsive, clean interface standards',
    ],
    image: null,
    deliverables: ['UI Prototyping (Stitch)', 'Assisted React Delivery', 'Automated Docs & Debug'],
    techStack: ['React', 'Claude', 'GitHub Copilot', 'Stitch'],
    liveLink: 'https://github.com/Arunsaini07',
    githubLink: 'https://github.com/Arunsaini07',
  },
]

export const PROJECT_CATEGORIES = ['All', 'Full-Stack', 'Data & Analytics', 'Frontend & AI']

export const TECH_STACK = [
  { name: 'React.js', domain: 'Frontend & UI', level: 'Core' },
  { name: 'Next.js', domain: 'Frontend & UI', level: 'Proficient' },
  { name: 'JavaScript', domain: 'Frontend & UI', level: 'Core' },
  { name: 'Tailwind CSS', domain: 'Frontend & UI', level: 'Core' },
  { name: 'Three.js', domain: 'Frontend & UI', level: 'Interactive 3D' },
  { name: 'Figma', domain: 'Frontend & UI', level: 'UI/UX' },
  { name: 'Stitch', domain: 'Frontend & UI', level: 'UI Design' },
  { name: 'Canva', domain: 'Frontend & UI', level: 'Visual' },
  { name: 'Responsive Web Design', domain: 'Frontend & UI', level: 'Core' },

  { name: 'Python', domain: 'Data & AI', level: 'Core' },
  { name: 'Power BI', domain: 'Data & AI', level: 'Analytics' },
  { name: 'Tableau', domain: 'Data & AI', level: 'Analytics' },
  { name: 'Excel', domain: 'Data & AI', level: 'Analytics' },
  { name: 'Apache Spark', domain: 'Data & AI', level: 'Big Data' },
  { name: 'Apache Flink', domain: 'Data & AI', level: 'Streaming' },
  { name: 'Machine Learning', domain: 'Data & AI', level: 'Applied' },
  { name: 'Deep Learning', domain: 'Data & AI', level: 'Foundational' },
  { name: 'Neural Networks', domain: 'Data & AI', level: 'Foundational' },

  { name: 'Node.js', domain: 'Backend & Cloud', level: 'Proficient' },
  { name: 'SQL', domain: 'Backend & Cloud', level: 'Core' },
  { name: 'MySQL', domain: 'Backend & Cloud', level: 'Core' },
  { name: 'PostgreSQL', domain: 'Backend & Cloud', level: 'Proficient' },
  { name: 'MongoDB', domain: 'Backend & Cloud', level: 'Proficient' },
  { name: 'AWS (EC2, S3, IAM)', domain: 'Backend & Cloud', level: 'Certified' },
  { name: 'RESTful APIs', domain: 'Backend & Cloud', level: 'Core' },

  { name: 'C++ (DSA)', domain: 'Tools & Core', level: 'Core' },
  { name: 'C', domain: 'Tools & Core', level: 'Foundational' },
  { name: 'System Design', domain: 'Tools & Core', level: 'Core' },
  { name: 'Low-Level Design', domain: 'Tools & Core', level: 'Core' },
  { name: 'Claude', domain: 'Tools & Core', level: 'AI Workflow' },
  { name: 'GitHub Copilot', domain: 'Tools & Core', level: 'AI Workflow' },
  { name: 'Replit AI', domain: 'Tools & Core', level: 'AI Workflow' },
  { name: 'Git & GitHub', domain: 'Tools & Core', level: 'Version Control' },
]

export const SKILL_DOMAINS = [
  'All',
  'Frontend & UI',
  'Data & AI',
  'Backend & Cloud',
  'Tools & Core',
]

export const CAPABILITIES = [
  {
    index: '01',
    title: 'Data Analytics & BI Reporting',
    description:
      'Transforming raw datasets into clean, decision-ready dashboards and insights using Python, SQL, Excel, Power BI, and Tableau.',
  },
  {
    index: '02',
    title: 'Modular React & Next.js Apps',
    description:
      'Building full-stack web interfaces with role-based access, clean component boundaries, and maintainable OOP & LLD patterns.',
  },
  {
    index: '03',
    title: 'Cloud & Relational Databases',
    description:
      'AWS Certified Cloud Practitioner foundation (EC2, S3, IAM) paired with Oracle, MySQL, PostgreSQL, and MongoDB integration.',
  },
  {
    index: '04',
    title: 'DSA & System Design Rigor',
    description:
      'Structured problem-solving in C++ and Python backed by System Design, RESTful APIs, and distributed processing with Spark & Flink.',
  },
  {
    index: '05',
    title: 'UI/UX & Spatial 3D Craft',
    description:
      'Translating product flows from Figma and Stitch into responsive, interactive Three.js and Tailwind CSS web experiences.',
  },
  {
    index: '06',
    title: 'AI-Assisted Engineering',
    description:
      'Leveraging Claude, GitHub Copilot, and Replit AI to accelerate prototyping, debugging, documentation, and analytics workflows.',
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
