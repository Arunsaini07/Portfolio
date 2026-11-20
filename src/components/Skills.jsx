import { useState, useRef } from 'react'
import { motion, useScroll, useSpring, useTransform } from 'framer-motion'
import {
  TECH_STACK,
  SKILL_DOMAINS,
  CAPABILITIES,
  CERTIFICATIONS,
  filterSkillsByDomain,
} from '../utils/portfolioData'

const Skills = () => {
  const [activeDomain, setActiveDomain] = useState('All')
  const sectionRef = useRef(null)

  const filteredSkills = filterSkillsByDomain(TECH_STACK, activeDomain)

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'center center'],
  })

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 26,
    mass: 0.25,
  })

  const gridRotateX = useTransform(smoothProgress, [0, 1], [8, 0])
  const gridY = useTransform(smoothProgress, [0, 1], [32, 0])
  const gridScale = useTransform(smoothProgress, [0, 1], [0.96, 1])

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="relative py-20 lg:py-24 border-t border-zinc-200/70 dark:border-zinc-800/70"
    >
      <div className="max-w-7xl mx-auto px-6 space-y-16">
        {/* Top Heading */}
        <div className="max-w-2xl space-y-2">
          <p className="text-xs font-medium tracking-wide text-copper-600 dark:text-copper-400">
            Capabilities &amp; Stack
          </p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 text-balance">
            Engineering depth across frontend, systems, and design.
          </h2>
        </div>

        {/* Full-Width About + Interactive Tech Matrix (No boxed 3D widget) */}
        <motion.div
          style={{
            perspective: '1200px',
            rotateX: gridRotateX,
            y: gridY,
            scale: gridScale,
          }}
          className="grid lg:grid-cols-12 gap-10 items-start p-6 sm:p-8 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white/95 dark:bg-obsidian-900/90 will-change-transform"
        >
          {/* Left Bio */}
          <div className="lg:col-span-5 space-y-4">
            <h3 className="font-display text-xl font-bold text-zinc-900 dark:text-zinc-100">
              About Arun
            </h3>
            <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 leading-relaxed">
              Computer Science &amp; Engineering undergraduate at KIET Group of Institutions (AKTU)
              and Data Analyst Intern at Mnivesh &amp; InAmigos. Focused on React.js, Next.js,
              UI/UX design, and Data Structures &amp; Algorithms in C++.
            </p>
            <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 leading-relaxed">
              Experienced across Python, SQL, Power BI, Tableau, AWS (EC2, S3, IAM), MySQL,
              MongoDB, and AI-assisted workflows using Claude, GitHub Copilot, and Stitch.
            </p>
          </div>

          {/* Right Domain Filterable Tech Grid */}
          <div className="lg:col-span-7 space-y-5 lg:border-l lg:border-zinc-200 dark:lg:border-zinc-800 lg:pl-10">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <h3 className="font-display text-lg font-bold text-zinc-900 dark:text-zinc-100">
                Technologies
              </h3>

              <div
                role="group"
                aria-label="Filter technologies by domain"
                className="inline-flex flex-wrap items-center gap-1 p-1 rounded-lg bg-alabaster-100 dark:bg-obsidian-950 border border-zinc-200 dark:border-zinc-800"
              >
                {SKILL_DOMAINS.map((domain) => (
                  <button
                    key={domain}
                    type="button"
                    onClick={() => setActiveDomain(domain)}
                    aria-pressed={activeDomain === domain}
                    className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors duration-150 whitespace-nowrap shrink-0 ${
                      activeDomain === domain
                        ? 'bg-zinc-900 text-white dark:bg-copper-500 dark:text-obsidian-950'
                        : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100'
                    }`}
                  >
                    {domain}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-6 gap-y-3">
              {filteredSkills.map((skill) => (
                <div
                  key={skill.name}
                  className="flex items-baseline justify-between py-2 border-b border-zinc-200/80 dark:border-zinc-800/80"
                >
                  <span className="text-sm font-medium text-zinc-800 dark:text-zinc-200">
                    {skill.name}
                  </span>
                  <span className="text-xs text-zinc-500 dark:text-zinc-500">{skill.level}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* 6 Engineering Capabilities Grid */}
        <div className="pt-4">
          <h3 className="font-display text-xl font-bold text-zinc-900 dark:text-zinc-100 mb-8">
            Core Engineering Principles
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {CAPABILITIES.map((cap) => (
              <div
                key={cap.index}
                className="p-6 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white/95 dark:bg-obsidian-900/90 space-y-2.5"
              >
                <p className="font-mono text-xs text-copper-600 dark:text-copper-400 tabular-nums">
                  {cap.index}
                </p>
                <h4 className="font-display text-lg font-semibold text-zinc-900 dark:text-zinc-100">
                  {cap.title}
                </h4>
                <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  {cap.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications Grid */}
        <div className="pt-4">
          <div className="flex items-baseline justify-between gap-4 mb-8">
            <h3 className="font-display text-xl font-bold text-zinc-900 dark:text-zinc-100">
              Certifications
            </h3>
            <span className="font-mono text-xs text-zinc-500 dark:text-zinc-400 tabular-nums">
              {CERTIFICATIONS.length} Verified Credentials
            </span>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {CERTIFICATIONS.map((cert) => (
              <div
                key={cert.title}
                className="p-5 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white/95 dark:bg-obsidian-900/90 flex flex-col justify-between gap-3"
              >
                <div className="flex items-center justify-between gap-3">
                  <span className="font-mono text-xs text-copper-600 dark:text-copper-400 tabular-nums">
                    {cert.index}
                  </span>
                  <span className="font-mono text-xs text-zinc-500 dark:text-zinc-400 tabular-nums">
                    {cert.year}
                  </span>
                </div>
                <div>
                  <h4 className="font-display text-base font-semibold text-zinc-900 dark:text-zinc-100 leading-snug">
                    {cert.title}
                  </h4>
                  <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1">{cert.issuer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills