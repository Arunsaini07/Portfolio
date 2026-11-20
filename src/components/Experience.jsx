import { useRef } from 'react'
import { motion, useScroll, useSpring, useTransform } from 'framer-motion'
import { EXPERIENCES, EDUCATION_AND_ACHIEVEMENT } from '../utils/portfolioData'

const ExperienceCard = ({ item, index }) => {
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

  const cardRotateX = useTransform(smoothProgress, [0, 1], [10, 0])
  const cardScale = useTransform(smoothProgress, [0, 1], [0.96, 1])
  const cardY = useTransform(smoothProgress, [0, 1], [index % 2 === 0 ? 28 : 44, 0])

  return (
    <motion.article
      ref={cardRef}
      style={{
        perspective: '1200px',
        rotateX: cardRotateX,
        scale: cardScale,
        y: cardY,
      }}
      className="relative will-change-transform"
    >
      <div className="h-full flex flex-col justify-between p-6 sm:p-8 rounded-2xl border border-zinc-200 dark:border-zinc-800 hover:border-copper-500/60 dark:hover:border-copper-400/60 bg-white/95 dark:bg-obsidian-900/90 shadow-sm transition-colors duration-200 space-y-6">
        <div className="space-y-5">
          {/* Top Metadata Row */}
          <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-zinc-200/80 dark:border-zinc-800/80">
            <div className="flex items-center gap-3">
              <span className="font-mono text-xs font-semibold text-copper-600 dark:text-copper-400 tabular-nums">
                {item.index}
              </span>
              <span className="text-zinc-300 dark:text-zinc-700" aria-hidden="true">
                /
              </span>
              <span className="text-xs font-semibold text-zinc-600 dark:text-zinc-400">
                {item.type} <span aria-hidden="true">·</span> {item.duration}
              </span>
            </div>
            <span className="font-mono text-xs text-zinc-500 dark:text-zinc-400 tabular-nums">
              {item.period}
            </span>
          </div>

          {/* Company & Role Header */}
          <div className="space-y-1.5">
            <h3 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
              {item.company}
            </h3>
            <p className="text-sm sm:text-base font-semibold text-copper-600 dark:text-copper-400">
              {item.role}
            </p>
          </div>

          {/* Internship Responsibilities & Impact */}
          <ul className="space-y-3">
            {item.highlights.map((point) => (
              <li
                key={point}
                className="flex items-start gap-3 text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed"
              >
                <span className="text-copper-500 font-bold mt-0.5 shrink-0" aria-hidden="true">
                  —
                </span>
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Tools & Technologies Used */}
        <div className="pt-4 border-t border-zinc-200/80 dark:border-zinc-800/80 flex items-center justify-between gap-4">
          <span className="text-xs font-medium text-zinc-500 dark:text-zinc-400 shrink-0">
            Tools
          </span>
          <p className="font-mono text-xs text-zinc-700 dark:text-zinc-300 text-right">
            {item.stack.join(' · ')}
          </p>
        </div>
      </div>
    </motion.article>
  )
}

const Experience = () => {
  const { education, achievement } = EDUCATION_AND_ACHIEVEMENT

  return (
    <section
      id="experience"
      className="relative py-20 lg:py-24 border-t border-zinc-200/70 dark:border-zinc-800/70"
    >
      <div className="max-w-7xl mx-auto px-6 space-y-12">
        {/* Section Heading */}
        <div className="max-w-2xl space-y-2">
          <p className="text-xs font-medium tracking-wide text-copper-600 dark:text-copper-400">
            Experience &amp; Background
          </p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 text-balance">
            Industry internships and academic rigor.
          </h2>
          <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-300">
            Applied data analysis, visualization, and reporting across real business datasets alongside B.Tech Computer Science Engineering.
          </p>
        </div>

        {/* 2-Column Internship Experience Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {EXPERIENCES.map((item, index) => (
            <ExperienceCard key={item.id} item={item} index={index} />
          ))}
        </div>

        {/* Education & Key Achievement Architectural Strip */}
        <div className="grid lg:grid-cols-2 gap-8 pt-2">
          <div className="p-6 sm:p-7 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white/95 dark:bg-obsidian-900/90 flex flex-col justify-between gap-4">
            <div className="flex items-center justify-between gap-4">
              <p className="text-xs font-medium text-copper-600 dark:text-copper-400">Education</p>
              <span className="font-mono text-xs text-zinc-500 dark:text-zinc-400 tabular-nums">
                {education.period}
              </span>
            </div>
            <div>
              <h3 className="font-display text-lg sm:text-xl font-bold text-zinc-900 dark:text-zinc-100">
                {education.degree}
              </h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-1">
                {education.institution}
              </p>
            </div>
          </div>

          <div className="p-6 sm:p-7 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white/95 dark:bg-obsidian-900/90 flex flex-col justify-between gap-4">
            <div className="flex items-center justify-between gap-4">
              <p className="text-xs font-medium text-copper-600 dark:text-copper-400">
                Key Achievement · {achievement.badge}
              </p>
              <span className="font-mono text-xs text-zinc-500 dark:text-zinc-400 tabular-nums">
                {achievement.year}
              </span>
            </div>
            <div>
              <h3 className="font-display text-lg sm:text-xl font-bold text-zinc-900 dark:text-zinc-100">
                {achievement.title}
              </h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-1 leading-relaxed">
                {achievement.detail}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
