import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaReact, FaHtml5, FaCss3Alt, FaJs, FaGithub, FaExternalLinkAlt } from 'react-icons/fa'
import { SiTailwindcss } from 'react-icons/si'
import { fadeIn, staggerContainer } from '../animations/variants'

// Floating particles — same as Hero
const Particles = () => {
  const particles = Array.from({ length: 30 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 4 + 2,
    duration: Math.random() * 6 + 4,
    delay: Math.random() * 4,
    color: i % 3 === 0 ? '#f43f5e' : i % 3 === 1 ? '#6366f1' : '#8b5cf6',
  }))
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full opacity-30"
          style={{ left: `${p.x}%`, top: `${p.y}%`, width: p.size, height: p.size, backgroundColor: p.color }}
          animate={{ y: [0, -40, 0], x: [0, Math.random() * 30 - 15, 0], opacity: [0.2, 0.6, 0.2], scale: [1, 1.5, 1] }}
          transition={{ duration: p.duration, repeat: Infinity, delay: p.delay, ease: 'easeInOut' }}
        />
      ))}
    </div>
  )
}

const Projects = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null)

  const projects = [
    {
      title: 'Faculty Hiring Portal',
      description:
        'Developed a full-stack web application to digitize and automate faculty hiring workflows, including online applications, document verification, approval tracking, and compliance checks.',
      image: 'faculty.png',
      techStack: [
        { icon: FaReact, name: 'React', color: 'text-blue-500' },
        { icon: SiTailwindcss, name: 'Tailwind', color: 'text-cyan-500' },
        { icon: FaJs, name: 'JavaScript', color: 'text-yellow-500' },
      ],
      liveLink: 'https://footprint-demo.com',
      githubLink: 'https://github.com/yourusername/footprint',
      gradient: 'from-rose-500 to-indigo-600',
      accentColor: 'rose',
      number: '01',
    },
    {
      title: 'LabourHub',
      description:
        'LabourHub connects laborers with job providers. Workers can register and apply for jobs, while employers can post listings and hire suitable candidates.',
      image: 'labour.png',
      techStack: [
        { icon: FaReact, name: 'React', color: 'text-blue-500' },
        { icon: FaCss3Alt, name: 'CSS3', color: 'text-blue-600' },
        { icon: FaHtml5, name: 'HTML5', color: 'text-orange-600' },
      ],
      liveLink: 'https://eduadi-demo.com',
      githubLink: 'https://github.com/yourusername/eduadi',
      gradient: 'from-indigo-500 to-pink-500',
      accentColor: 'indigo',
      number: '02',
    },
  ]

  return (
    <section id="projects" className="py-24 bg-white/50 dark:bg-gray-900/50 relative overflow-hidden">

      {/* Background — exact same as Hero */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={{ x: [0, 60, 0], y: [0, -40, 0], scale: [1, 1.2, 1] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -top-32 -left-32 w-96 h-96 bg-rose-400/20 dark:bg-rose-500/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ x: [0, -40, 0], y: [0, 60, 0], scale: [1.2, 1, 1.2] }}
          transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
          className="absolute -bottom-32 -right-32 w-[500px] h-[500px] bg-indigo-400/20 dark:bg-indigo-500/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ x: [0, 30, 0], y: [0, 30, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-violet-400/10 dark:bg-violet-500/5 rounded-full blur-3xl"
        />
      </div>
      <Particles />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
        >

          {/* Section Title */}
          <motion.div variants={fadeIn('up', 0.2)} className="text-center mb-20">
            <motion.span
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-rose-500/10 to-indigo-500/10 border border-rose-500/20 dark:border-indigo-500/30 text-sm font-semibold text-rose-600 dark:text-indigo-400 mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-rose-500 animate-pulse" />
              My Work
            </motion.span>
            <h2 className="text-5xl sm:text-6xl font-black gradient-text mb-4">
              Projects
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-rose-500 to-indigo-600 mx-auto rounded-full" />
            <p className="mt-6 text-gray-500 dark:text-gray-400 max-w-xl mx-auto text-base">
              A selection of things I've built — from full-stack apps to polished UI experiences.
            </p>
          </motion.div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                variants={fadeIn('up', index * 0.2)}
                onHoverStart={() => setHoveredIndex(index)}
                onHoverEnd={() => setHoveredIndex(null)}
                whileHover={{ y: -8 }}
                className="group relative bg-white dark:bg-gray-800/60 backdrop-blur-sm rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl border border-gray-100 dark:border-white/10 hover:border-rose-200 dark:hover:border-indigo-500/30 transition-all duration-500"
              >
                {/* Project number watermark */}
                <div className="absolute top-4 right-5 text-7xl font-black text-gray-100 dark:text-white/5 select-none pointer-events-none z-0 leading-none">
                  {project.number}
                </div>

                {/* Gradient top bar */}
                <div className={`h-1 w-full bg-gradient-to-r ${project.gradient}`} />

                {/* Image area */}
                <div className="relative h-56 overflow-hidden">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    animate={{ scale: hoveredIndex === index ? 1.08 : 1 }}
                    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    className="w-full h-full object-cover"
                  />

                  {/* Gradient overlay always present, intensifies on hover */}
                  <motion.div
                    animate={{ opacity: hoveredIndex === index ? 1 : 0.4 }}
                    transition={{ duration: 0.3 }}
                    className={`absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent`}
                  />

                  {/* Action buttons — slide up on hover */}
                  <AnimatePresence>
                    {hoveredIndex === index && (
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 20 }}
                        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                        className="absolute bottom-5 left-0 right-0 flex justify-center gap-4 px-6"
                      >
                        <motion.a
                          href={project.liveLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold text-white relative overflow-hidden"
                        >
                          <span className={`absolute inset-0 bg-gradient-to-r ${project.gradient}`} />
                          <motion.span
                            animate={{ x: ['-100%', '200%'] }}
                            transition={{ duration: 2, repeat: Infinity, ease: 'linear', repeatDelay: 1 }}
                            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12"
                          />
                          <FaExternalLinkAlt className="relative z-10 text-xs" />
                          <span className="relative z-10">Visit App</span>
                        </motion.a>

                        <motion.a
                          href={project.githubLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 text-sm font-bold text-white hover:bg-white/20 transition-colors"
                        >
                          <FaGithub className="text-sm" />
                          <span>GitHub</span>
                        </motion.a>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Content */}
                <div className="relative z-10 p-7 space-y-4">
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="text-2xl font-black text-gray-900 dark:text-white leading-tight">
                      {project.title}
                    </h3>
                    {/* Arrow icon */}
                    <motion.div
                      animate={{ x: hoveredIndex === index ? 4 : 0, opacity: hoveredIndex === index ? 1 : 0.4 }}
                      transition={{ duration: 0.3 }}
                      className={`flex-shrink-0 w-9 h-9 rounded-xl bg-gradient-to-br ${project.gradient} flex items-center justify-center text-white text-sm shadow-lg`}
                    >
                      →
                    </motion.div>
                  </div>

                  <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tech stack pills */}
                  <div className="flex flex-wrap gap-2 pt-1">
                    {project.techStack.map((tech, techIndex) => (
                      <motion.div
                        key={techIndex}
                        whileHover={{ scale: 1.1, y: -2 }}
                        className={`flex items-center gap-1.5 px-3 py-1.5 bg-gray-50 dark:bg-gray-700/60 border border-gray-100 dark:border-white/10 rounded-xl text-xs font-semibold`}
                      >
                        <tech.icon className={`text-sm ${tech.color}`} />
                        <span className="text-gray-600 dark:text-gray-300">{tech.name}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom CTA */}
          <motion.div
            variants={fadeIn('up', 0.5)}
            className="mt-16 text-center"
          >
            <p className="text-gray-500 dark:text-gray-400 mb-6 text-sm">Want to see more of my work?</p>
            <motion.a
              href="https://github.com/Arunsaini07"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl text-white font-bold relative overflow-hidden group shadow-lg shadow-rose-500/20"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-rose-500 to-indigo-600" />
              <motion.span
                animate={{ x: ['-100%', '200%'] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: 'linear', repeatDelay: 1.5 }}
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12"
              />
              <FaGithub className="relative z-10 text-lg" />
              <span className="relative z-10">View All on GitHub</span>
              <motion.span
                animate={{ x: [0, 4, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="relative z-10"
              >
                →
              </motion.span>
            </motion.a>
          </motion.div>

        </motion.div>
      </div>
    </section>
  )
}

export default Projects