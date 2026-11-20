import { useState, useEffect, useRef } from 'react'
import { motion, useScroll, useSpring, useTransform } from 'framer-motion'
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa'
import { SiLeetcode } from 'react-icons/si'
import { PROFILE, computeNormalizedTilt } from '../utils/portfolioData'

const SOCIAL_ICONS = {
  linkedin: FaLinkedin,
  github: FaGithub,
  leetcode: SiLeetcode,
  instagram: FaInstagram,
}

const useRoleCycle = (roles, intervalMs = 2600) => {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const id = window.setInterval(() => {
      setIndex((prev) => (prev + 1) % roles.length)
    }, intervalMs)
    return () => window.clearInterval(id)
  }, [roles.length, intervalMs])

  return roles[index]
}

const Hero = () => {
  const activeRole = useRoleCycle(PROFILE.roles)
  const sectionRef = useRef(null)

  const [portraitSrc, setPortraitSrc] = useState(PROFILE.portraitSrc)
  const [portraitFailed, setPortraitFailed] = useState(false)
  const [tilt, setTilt] = useState({ rotateX: 0, rotateY: 0 })
  const [hovered, setHovered] = useState(false)

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  })

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 26,
    mass: 0.25,
  })

  // Scroll-driven 3D parallax & perspective transition as user scrolls past Hero
  const contentY = useTransform(smoothProgress, [0, 1], [0, -48])
  const portraitScale = useTransform(smoothProgress, [0, 1], [1, 0.92])
  const portraitScrollRotateX = useTransform(smoothProgress, [0, 1], [0, 10])
  const portraitScrollY = useTransform(smoothProgress, [0, 1], [0, 36])

  const handlePortraitMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    setTilt(
      computeNormalizedTilt(
        e.clientX - rect.left,
        e.clientY - rect.top,
        rect.width,
        rect.height,
        7
      )
    )
  }

  const resetPortraitTilt = () => {
    setHovered(false)
    setTilt({ rotateX: 0, rotateY: 0 })
  }

  return (
    <section
      id="home"
      ref={sectionRef}
      className="pt-28 pb-16 lg:pt-32 lg:pb-20 relative"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Two-column balanced hero split */}
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-stretch">
          {/* Left Typographic Column */}
          <motion.div
            style={{ y: contentY }}
            className="lg:col-span-7 flex flex-col justify-between py-4 px-2 sm:px-4 -mx-2 sm:-mx-4 rounded-2xl bg-gradient-to-br from-alabaster-50/85 via-alabaster-50/55 to-transparent dark:from-obsidian-950/85 dark:via-obsidian-950/55 dark:to-transparent space-y-8 will-change-transform"
          >
            <div className="space-y-6">
              <p className="text-xs font-medium tracking-wide text-zinc-600 dark:text-zinc-400">
                {PROFILE.availability} <span aria-hidden="true">·</span> {PROFILE.location}
              </p>

              <h1
                className="font-display font-bold tracking-tight text-zinc-900 dark:text-zinc-100 leading-[1.05] text-balance"
                style={{ fontSize: 'clamp(2.5rem, 4.3vw, 4.15rem)' }}
              >
                Crafting spatial web{' '}
                <span className="font-serif italic font-semibold text-copper-600 dark:text-copper-400">
                  experiences
                </span>{' '}
                &amp; resilient interfaces.
              </h1>

              <div className="flex items-center gap-3 pt-1">
                <span className="w-8 h-px bg-copper-500 shrink-0" aria-hidden="true" />
                <p className="text-sm sm:text-base font-medium text-zinc-700 dark:text-zinc-300">
                  {PROFILE.firstName}{' '}
                  <span className="text-zinc-400 dark:text-zinc-600 mx-1.5" aria-hidden="true">
                    /
                  </span>
                  <span className="text-copper-600 dark:text-copper-400 font-semibold">
                    {activeRole}
                  </span>
                </p>
              </div>

              <p className="text-base text-zinc-600 dark:text-zinc-300 leading-relaxed max-w-xl">
                {PROFILE.summary}
              </p>
            </div>

            <div className="space-y-6">
              {/* Actions + Theme Switch */}
              <div className="flex flex-wrap items-center gap-4">
                <a
                  href="#projects"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-zinc-900 text-zinc-50 hover:bg-copper-600 dark:bg-copper-500 dark:text-obsidian-950 dark:hover:bg-copper-400 text-sm font-semibold transition-colors duration-150 whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-copper-500"
                >
                  Explore Projects
                  <span aria-hidden="true">→</span>
                </a>

                <a
                  href={PROFILE.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-white/90 dark:bg-obsidian-900/90 border border-zinc-300 dark:border-zinc-700 text-zinc-800 dark:text-zinc-200 hover:border-copper-500 hover:text-copper-600 dark:hover:border-copper-400 dark:hover:text-copper-400 text-sm font-semibold transition-colors duration-150 whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-copper-500"
                >
                  Download Resume
                </a>
              </div>

              {/* Quiet Social Links Row */}
              <div className="flex flex-wrap items-center gap-5 pt-2">
                {PROFILE.socials.map((social) => {
                  const Icon = SOCIAL_ICONS[social.id]
                  return (
                    <a
                      key={social.id}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      className="inline-flex items-center gap-2 text-xs font-medium text-zinc-600 dark:text-zinc-400 hover:text-copper-600 dark:hover:text-copper-400 transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-copper-500 rounded-sm"
                    >
                      {Icon && <Icon size={15} aria-hidden="true" />}
                      <span>{social.label}</span>
                    </a>
                  )
                })}
              </div>
            </div>
          </motion.div>

          {/* Right Portrait Visual Column with Architectural 3D Showcase Frame */}
          <div
            className="lg:col-span-5 flex items-center justify-center lg:justify-end"
            style={{ perspective: '1200px' }}
          >
            <motion.div
              style={{
                scale: portraitScale,
                y: portraitScrollY,
                rotateX: portraitScrollRotateX,
              }}
              onMouseEnter={() => setHovered(true)}
              onMouseMove={handlePortraitMove}
              onMouseLeave={resetPortraitTilt}
              className="w-full max-w-[420px] mx-auto lg:ml-auto lg:mr-0 will-change-transform"
            >
              <div
                style={{
                  transform: `rotateX(${tilt.rotateX}deg) rotateY(${tilt.rotateY}deg)`,
                  transformStyle: 'preserve-3d',
                  transition: hovered
                    ? 'transform 120ms ease-out'
                    : 'transform 350ms cubic-bezier(0.16, 1, 0.3, 1)',
                }}
                className="relative p-3 sm:p-3.5 rounded-2xl border border-zinc-300/90 dark:border-zinc-700/80 bg-white/95 dark:bg-obsidian-900/95 shadow-2xl"
              >
                {/* Offset Architectural Hairline Backplate */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -inset-2.5 rounded-[22px] border border-copper-500/25 dark:border-copper-400/20 -z-10"
                />

                {/* Corner Registration Ticks */}
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute top-1.5 left-1.5 w-3 h-3 border-t-2 border-l-2 border-copper-500/80 dark:border-copper-400/75 rounded-tl-sm"
                />
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute top-1.5 right-1.5 w-3 h-3 border-t-2 border-r-2 border-copper-500/80 dark:border-copper-400/75 rounded-tr-sm"
                />
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute bottom-1.5 left-1.5 w-3 h-3 border-b-2 border-l-2 border-copper-500/80 dark:border-copper-400/75 rounded-bl-sm"
                />
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute bottom-1.5 right-1.5 w-3 h-3 border-b-2 border-r-2 border-copper-500/80 dark:border-copper-400/75 rounded-br-sm"
                />

                {/* Inner 4:5 Photographic Aperture */}
                <div
                  style={{ transform: 'translateZ(18px)' }}
                  className="relative aspect-[4/5] w-full rounded-xl overflow-hidden border border-zinc-200 dark:border-zinc-800 bg-obsidian-950"
                >
                  {!portraitFailed ? (
                    <img
                      src={portraitSrc}
                      alt="Arun portrait"
                      referrerPolicy="no-referrer"
                      onError={() => {
                        if (portraitSrc === PROFILE.portraitSrc) {
                          setPortraitSrc(PROFILE.fallbackPortraitSrc)
                        } else {
                          setPortraitFailed(true)
                        }
                      }}
                      style={{
                        transform: hovered ? 'scale(1.03)' : 'scale(1)',
                      }}
                      className="w-full h-full object-cover object-[24%_14%] contrast-[1.04] transition-transform duration-500 ease-out"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-obsidian-850 to-obsidian-950">
                      <span className="font-display text-5xl font-bold text-copper-400">AS</span>
                    </div>
                  )}

                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-black/10 ring-1 ring-inset ring-black/15 dark:ring-white/10" />
                </div>

                {/* Structured Editorial Caption Plate */}
                <div className="mt-3.5 pt-3 px-1 border-t border-zinc-200/80 dark:border-zinc-800/80 flex items-center justify-between gap-4">
                  <div>
                    <p className="font-display text-base font-bold text-zinc-900 dark:text-zinc-100 leading-tight">
                      {PROFILE.firstName}
                    </p>
                    <p className="text-xs text-zinc-600 dark:text-zinc-400 mt-0.5">
                      Frontend Developer &amp; UI/UX Designer
                    </p>
                  </div>
                  <div className="flex items-center gap-2 shrink-0">
                    <span className="w-4 h-px bg-copper-500" aria-hidden="true" />
                    <span className="text-xs font-mono text-copper-600 dark:text-copper-400">
                      India
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Full-Width Quantitative Strip Below Hero Split */}
        <div className="mt-12 pt-8 border-t border-zinc-200/80 dark:border-zinc-800/80 grid sm:grid-cols-2 lg:grid-cols-4 gap-6 items-center">
          <div className="space-y-1">
            <p className="text-xs font-medium text-copper-600 dark:text-copper-400">
              Scroll Experience
            </p>
            <p className="font-display text-sm font-semibold text-zinc-900 dark:text-zinc-100">
              Scroll to traverse the 3D space
            </p>
            <p className="text-xs text-zinc-500 dark:text-zinc-400">
              Camera &amp; architecture respond to scroll depth
            </p>
          </div>

          {PROFILE.metrics.map((metric) => (
            <div
              key={metric.label}
              className="sm:border-l sm:border-zinc-200/80 dark:sm:border-zinc-800/80 sm:pl-6"
            >
              <p className="font-display text-2xl font-bold text-zinc-900 dark:text-zinc-100 tabular-nums">
                {metric.value}
              </p>
              <p className="text-xs font-semibold text-zinc-700 dark:text-zinc-300 mt-0.5">
                {metric.label}
              </p>
              <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-0.5">{metric.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Hero