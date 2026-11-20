import { useState, useEffect, useRef } from 'react'
import { motion, useScroll, useSpring, useTransform } from 'framer-motion'
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa'
import {
  PROJECTS,
  PROJECT_CATEGORIES,
  filterProjects,
  computeNormalizedTilt,
} from '../utils/portfolioData'

const ProjectCard = ({ project, index, onInspect }) => {
  const [tilt, setTilt] = useState({ rotateX: 0, rotateY: 0 })
  const [hovered, setHovered] = useState(false)
  const [imgError, setImgError] = useState(false)
  const cardRef = useRef(null)

  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ['start end', 'center center'],
  })

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 26,
    mass: 0.25,
  })

  const scrollRotateX = useTransform(smoothProgress, [0, 1], [12, 0])
  const scrollScale = useTransform(smoothProgress, [0, 1], [0.95, 1])
  const scrollY = useTransform(smoothProgress, [0, 1], [index % 2 === 0 ? 36 : 56, 0])

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const next = computeNormalizedTilt(
      e.clientX - rect.left,
      e.clientY - rect.top,
      rect.width,
      rect.height,
      6
    )
    setTilt(next)
  }

  const resetTilt = () => {
    setHovered(false)
    setTilt({ rotateX: 0, rotateY: 0 })
  }

  return (
    <motion.article
      ref={cardRef}
      style={{
        perspective: '1200px',
        y: scrollY,
        scale: scrollScale,
        rotateX: scrollRotateX,
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseMove={handleMouseMove}
      onMouseLeave={resetTilt}
      className="group relative will-change-transform"
    >
      <div
        style={{
          transform: `rotateX(${tilt.rotateX}deg) rotateY(${tilt.rotateY}deg)`,
          transition: hovered
            ? 'transform 120ms ease-out'
            : 'transform 350ms cubic-bezier(0.16, 1, 0.3, 1)',
        }}
        className="h-full flex flex-col rounded-2xl border border-zinc-200 dark:border-zinc-800 hover:border-copper-500/60 dark:hover:border-copper-400/60 bg-white/95 dark:bg-obsidian-900/90 overflow-hidden shadow-sm transition-colors duration-200 will-change-transform"
      >
        {/* Visual Preview Container */}
        <div className="relative aspect-[16/10] overflow-hidden bg-alabaster-100 dark:bg-obsidian-850 border-b border-zinc-200 dark:border-zinc-800">
          {!imgError ? (
            <img
              src={project.image}
              alt={`${project.title} interface preview`}
              referrerPolicy="no-referrer"
              onError={() => setImgError(true)}
              style={{
                transform: hovered ? 'scale(1.04)' : 'scale(1)',
              }}
              className="w-full h-full object-cover transition-transform duration-500 ease-out"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center p-6 bg-gradient-to-br from-obsidian-850 to-obsidian-950 text-zinc-300">
              <span className="font-display text-lg font-semibold">{project.title}</span>
            </div>
          )}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
          <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-xs text-zinc-100">
            <span className="font-mono tabular-nums">{project.index}</span>
            <span>{project.year}</span>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6 flex-1 flex flex-col justify-between space-y-6">
          <div className="space-y-3">
            <p className="text-xs font-medium text-zinc-500 dark:text-zinc-400">
              {project.category} <span aria-hidden="true">·</span> {project.techStack.join(' · ')}
            </p>

            <h3 className="font-display text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
              {project.title}
            </h3>

            <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
              {project.summary}
            </p>
          </div>

          <div className="pt-4 border-t border-zinc-100 dark:border-zinc-800 flex flex-wrap items-center justify-between gap-3">
            <button
              type="button"
              onClick={() => onInspect(project)}
              className="inline-flex items-center gap-2 text-sm font-semibold text-zinc-900 dark:text-zinc-100 hover:text-copper-600 dark:hover:text-copper-400 transition-colors duration-150 whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-copper-500 rounded-sm"
            >
              Inspect Case Study
              <span aria-hidden="true">→</span>
            </button>

            <div className="flex items-center gap-4">
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-medium text-zinc-600 dark:text-zinc-400 hover:text-copper-600 dark:hover:text-copper-400 transition-colors duration-150 whitespace-nowrap shrink-0"
              >
                <FaExternalLinkAlt size={11} aria-hidden="true" />
                <span>Live App</span>
              </a>

              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-medium text-zinc-600 dark:text-zinc-400 hover:text-copper-600 dark:hover:text-copper-400 transition-colors duration-150 whitespace-nowrap shrink-0"
              >
                <FaGithub size={13} aria-hidden="true" />
                <span>GitHub</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </motion.article>
  )
}

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('All')
  const [selectedProject, setSelectedProject] = useState(null)

  const visibleProjects = filterProjects(PROJECTS, activeCategory)

  useEffect(() => {
    if (!selectedProject) return
    const onKeyDown = (e) => {
      if (e.key === 'Escape') {
        setSelectedProject(null)
      }
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [selectedProject])

  return (
    <section
      id="projects"
      className="relative py-20 lg:py-24 border-t border-zinc-200/70 dark:border-zinc-800/70"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header + Interactive Filter Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-2 max-w-2xl">
            <p className="text-xs font-medium tracking-wide text-copper-600 dark:text-copper-400">
              Selected Works
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 text-balance">
              Engineered products with spatial depth.
            </h2>
            <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-300">
              Move across each card for 3D perspective inspection or open a full case study breakdown.
            </p>
          </div>

          <div
            role="group"
            aria-label="Filter projects by category"
            className="inline-flex items-center gap-1 p-1 rounded-lg bg-white/90 dark:bg-obsidian-900/90 border border-zinc-200 dark:border-zinc-800 self-start md:self-auto"
          >
            {PROJECT_CATEGORIES.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                aria-pressed={activeCategory === category}
                className={`px-3.5 py-1.5 text-xs font-semibold rounded-md transition-colors duration-150 whitespace-nowrap shrink-0 ${
                  activeCategory === category
                    ? 'bg-zinc-900 text-white dark:bg-copper-500 dark:text-obsidian-950'
                    : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* 2-Column Interactive 3D Card Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {visibleProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              onInspect={setSelectedProject}
            />
          ))}
        </div>

        {/* Quiet Archive Link */}
        <div className="mt-12 pt-8 border-t border-zinc-200/80 dark:border-zinc-800/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="text-sm text-zinc-600 dark:text-zinc-400">
            Additional repositories, algorithmic solutions, and frontend experiments live on GitHub.
          </p>
          <a
            href="https://github.com/Arunsaini07"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-semibold text-zinc-900 dark:text-zinc-100 hover:text-copper-600 dark:hover:text-copper-400 transition-colors duration-150 whitespace-nowrap shrink-0"
          >
            <FaGithub size={15} aria-hidden="true" />
            <span>View All on GitHub</span>
            <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>

      {/* Case Study Lightbox Modal */}
      {selectedProject && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="case-study-title"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/75"
          onClick={() => setSelectedProject(null)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl bg-alabaster-50 dark:bg-obsidian-900 border border-zinc-200 dark:border-zinc-800 shadow-2xl"
          >
            <div className="flex items-center justify-between px-6 py-4 border-b border-zinc-200 dark:border-zinc-800">
              <p className="text-xs font-medium text-zinc-500 dark:text-zinc-400">
                <span className="font-mono tabular-nums">{selectedProject.index}</span>{' '}
                <span aria-hidden="true">·</span> {selectedProject.category}{' '}
                <span aria-hidden="true">·</span> {selectedProject.year}
              </p>
              <button
                type="button"
                onClick={() => setSelectedProject(null)}
                aria-label="Close case study modal"
                className="w-9 h-9 inline-flex items-center justify-center rounded-lg border border-zinc-200 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300 hover:border-copper-500 hover:text-copper-500 transition-colors"
              >
                ✕
              </button>
            </div>

            <div className="p-6 space-y-6">
              <div className="aspect-[16/9] rounded-xl overflow-hidden border border-zinc-200 dark:border-zinc-800 bg-obsidian-950">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="space-y-3">
                <h3
                  id="case-study-title"
                  className="font-display text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-zinc-100"
                >
                  {selectedProject.title}
                </h3>
                <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  {selectedProject.architecture}
                </p>
              </div>

              <div className="space-y-2 pt-2 border-t border-zinc-200 dark:border-zinc-800">
                <h4 className="text-xs font-semibold text-zinc-500 dark:text-zinc-400">
                  Key Implementation Highlights
                </h4>
                <ul className="space-y-2">
                  {selectedProject.highlights.map((item) => (
                    <li
                      key={item}
                      className="text-sm text-zinc-700 dark:text-zinc-300 flex items-start gap-2.5"
                    >
                      <span className="text-copper-500 font-bold" aria-hidden="true">
                        —
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-zinc-200 dark:border-zinc-800">
                <p className="text-xs font-mono text-zinc-500 dark:text-zinc-400">
                  {selectedProject.techStack.join(' · ')}
                </p>
                <div className="flex items-center gap-3">
                  <a
                    href={selectedProject.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-zinc-900 text-white dark:bg-copper-500 dark:text-obsidian-950 text-xs font-semibold hover:opacity-90 transition-opacity whitespace-nowrap shrink-0"
                  >
                    <FaExternalLinkAlt size={11} aria-hidden="true" />
                    <span>Visit App</span>
                  </a>
                  <a
                    href={selectedProject.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-zinc-300 dark:border-zinc-700 text-zinc-800 dark:text-zinc-200 text-xs font-semibold hover:border-copper-500 transition-colors whitespace-nowrap shrink-0"
                  >
                    <FaGithub size={13} aria-hidden="true" />
                    <span>Source Code</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default Projects