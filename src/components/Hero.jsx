import { useState, useEffect, useRef } from 'react'
import { motion, useMotionValue, useSpring, AnimatePresence } from 'framer-motion'
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'

// Typewriter hook
const useTypewriter = (words, speed = 80, pause = 1800) => {
  const [index, setIndex] = useState(0)
  const [subIndex, setSubIndex] = useState(0)
  const [deleting, setDeleting] = useState(false)
  const [text, setText] = useState('')

  useEffect(() => {
    if (subIndex === words[index].length + 1 && !deleting) {
      const timeout = setTimeout(() => setDeleting(true), pause)
      return () => clearTimeout(timeout)
    }
    if (subIndex === 0 && deleting) {
      setDeleting(false)
      setIndex((prev) => (prev + 1) % words.length)
      return
    }
    const timeout = setTimeout(() => {
      setText(words[index].substring(0, subIndex))
      setSubIndex((prev) => prev + (deleting ? -1 : 1))
    }, deleting ? speed / 2 : speed)
    return () => clearTimeout(timeout)
  }, [subIndex, index, deleting, words, speed, pause])

  return text
}

// Floating particles component
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
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.size,
            height: p.size,
            backgroundColor: p.color,
          }}
          animate={{
            y: [0, -40, 0],
            x: [0, Math.random() * 30 - 15, 0],
            opacity: [0.2, 0.6, 0.2],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  )
}

const Hero = () => {
  const roles = ['Frontend Developer', 'UI/UX Designer', 'React Specialist', 'Problem Solver']
  const typedRole = useTypewriter(roles)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const springX = useSpring(mouseX, { stiffness: 50, damping: 20 })
  const springY = useSpring(mouseY, { stiffness: 50, damping: 20 })

  const socialLinks = [
    { icon: FaLinkedin, href: 'https://www.linkedin.com/in/arun8092/', label: 'LinkedIn', color: 'hover:text-blue-600' },
    { icon: FaGithub, href: 'https://github.com/Arunsaini07', label: 'GitHub', color: 'hover:text-gray-900 dark:hover:text-white' },
    { icon: MdEmail, href: 'https://leetcode.com/u/Arun8092/', label: 'Email', color: 'hover:text-rose-500' },
    { icon: FaInstagram, href: 'https://www.instagram.com/arunsaini__07/', label: 'Instagram', color: 'hover:text-pink-500' },
  ]

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    mouseX.set(((e.clientX - rect.left) / rect.width - 0.5) * 20)
    mouseY.set(((e.clientY - rect.top) / rect.height - 0.5) * 20)
  }

  // Stagger animation variants
  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.12, delayChildren: 0.3 } },
  }
  const item = {
    hidden: { opacity: 0, y: 40, filter: 'blur(8px)' },
    show: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
  }

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-gray-50 dark:bg-gray-950"
      onMouseMove={handleMouseMove}
    >
      {/* Animated background gradient orbs */}
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

      <div className="relative max-w-7xl mx-auto px-6 w-full pt-24 pb-16">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left Content */}
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="space-y-8"
          >
            {/* Badge */}
            <motion.div variants={item}>
              <motion.span
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-rose-500/10 to-indigo-500/10 border border-rose-500/20 dark:border-indigo-500/30 text-sm font-semibold text-rose-600 dark:text-indigo-400"
              >
                <span className="w-2 h-2 rounded-full bg-rose-500 animate-pulse" />
                Available for work
              </motion.span>
            </motion.div>

            {/* Heading */}
            <motion.div variants={item} className="space-y-2">
              <p className="text-lg font-medium text-gray-500 dark:text-gray-400 tracking-wide">
                Hi there! I'm
              </p>
              <h1 className="text-6xl sm:text-7xl font-black leading-none tracking-tight">
                <span className="text-gray-900 dark:text-white">Arun </span>
                <br />
              </h1>
            </motion.div>

            {/* Animated role */}
            <motion.div variants={item} className="flex items-center gap-3">
              <div className="w-8 h-0.5 bg-gradient-to-r from-rose-500 to-indigo-500 rounded-full" />
              <p className="text-xl font-bold text-gray-700 dark:text-gray-200 min-w-[220px]">
                I am a{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-indigo-600">
                  {typedRole}
                </span>
                <motion.span
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{ duration: 0.8, repeat: Infinity }}
                  className="text-rose-500 ml-0.5"
                >
                  |
                </motion.span>
              </p>
            </motion.div>

            {/* Description */}
            <motion.p
              variants={item}
              className="text-gray-500 dark:text-gray-400 text-base leading-relaxed max-w-md"
            >
              Passionate about crafting beautiful, responsive, and user-friendly web applications. 
              I turn ideas into reality through clean code and modern design principles.
            </motion.p>

            {/* Social Links */}
            <motion.div variants={item} className="flex items-center gap-3">
              {socialLinks.map(({ icon: Icon, href, label, color }, i) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  whileHover={{ scale: 1.2, y: -4 }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}

                  transition={{ delay: 0.8 + i * 0.1, type: 'spring', stiffness: 400 }}
                  className={`w-11 h-11 rounded-2xl bg-white dark:bg-gray-800 shadow-md border border-gray-100 dark:border-white/10 flex items-center justify-center text-gray-500 dark:text-gray-400 ${color} transition-all duration-300 hover:shadow-lg hover:border-transparent`}
                >
                  <Icon size={20} />
                </motion.a>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div variants={item} className="flex flex-wrap gap-4">
              <motion.a
                href="https://drive.google.com/file/d/1TTZyNGN8-lvkIPYlMwcxXWGaNu8EUEc_/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="relative inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl text-white font-bold text-sm overflow-hidden group shadow-lg shadow-rose-500/25"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-rose-500 to-indigo-600" />
                <motion.span
                  animate={{ x: ['-100%', '200%'] }}
                  transition={{ duration: 2.5, repeat: Infinity, ease: 'linear', repeatDelay: 1 }}
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent skew-x-12"
                />
                <span className="relative z-10 flex items-center gap-2">
                  <span>↓</span>
                  Download Resume
                </span>
              </motion.a>

              <motion.a
                href="#projects"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl text-gray-700 dark:text-gray-200 font-bold text-sm bg-white dark:bg-gray-800 border border-gray-200 dark:border-white/10 shadow-md hover:shadow-lg hover:border-rose-200 dark:hover:border-indigo-500/30 transition-all duration-300"
              >
                View Projects
                <motion.span
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  →
                </motion.span>
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right Side – Floating Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, x: 60 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="relative flex items-center justify-center"
          >
            {/* Outer glow ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              className="absolute w-[340px] h-[340px] rounded-full border-2 border-dashed border-rose-300/40 dark:border-rose-500/20"
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
              className="absolute w-[290px] h-[290px] rounded-full border-2 border-dashed border-indigo-300/40 dark:border-indigo-500/20"
            />

            {/* Floating dots around image */}
            {[0, 60, 120, 180, 240, 300].map((deg, i) => (
              <motion.div
                key={i}
                animate={{ scale: [1, 1.4, 1], opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
                style={{
                  position: 'absolute',
                  left: `calc(50% + ${Math.cos((deg * Math.PI) / 180) * 155}px)`,
                  top: `calc(50% + ${Math.sin((deg * Math.PI) / 180) * 155}px)`,
                  transform: 'translate(-50%, -50%)',
                }}
                className={`w-3 h-3 rounded-full ${i % 2 === 0 ? 'bg-rose-400' : 'bg-indigo-400'}`}
              />
            ))}

            {/* Image container */}
            <motion.div
              style={{ rotateX: springY, rotateY: springX }}
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="relative w-64 h-72 rounded-3xl overflow-hidden shadow-2xl"
            >
              {/* Gradient border effect */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-rose-400 via-pink-500 to-indigo-600 p-0.5">
                <div className="w-full h-full rounded-3xl bg-gray-200 dark:bg-gray-800 overflow-hidden">
                  <img
                    src="profile.jpeg"
                    alt="Arun Saini"
                    className="w-full h-full object-cover object-top"
                    onError={(e) => {
                      e.target.style.display = 'none'
                      e.target.parentElement.style.background =
                        'linear-gradient(135deg, #f43f5e20, #6366f120)'
                    }}
                  />
                </div>
              </div>

              {/* Shimmer overlay */}
              <motion.div
                animate={{ x: ['-100%', '200%'] }}
                transition={{ duration: 3, repeat: Infinity, repeatDelay: 2, ease: 'linear' }}
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12 pointer-events-none"
              />
            </motion.div>

            {/* Floating badge - Experience */}
            <motion.div
              initial={{ opacity: 0, scale: 0, x: 40 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ delay: 1.2, type: 'spring', stiffness: 300 }}
              whileHover={{ scale: 1.05 }}
              className="absolute -right-4 top-8 bg-white dark:bg-gray-800 rounded-2xl px-4 py-3 shadow-xl border border-gray-100 dark:border-white/10"
            >
              <p className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-indigo-600">6+</p>
              <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 leading-tight">Months<br/>Experience</p>
            </motion.div>

            {/* Floating badge - Projects */}
            <motion.div
              initial={{ opacity: 0, scale: 0, x: -40 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ delay: 1.4, type: 'spring', stiffness: 300 }}
              whileHover={{ scale: 1.05 }}
              className="absolute -left-4 bottom-12 bg-white dark:bg-gray-800 rounded-2xl px-4 py-3 shadow-xl border border-gray-100 dark:border-white/10"
            >
              <p className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-indigo-600">3+</p>
              <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 leading-tight">Projects<br/>Completed</p>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-xs font-medium text-gray-400 dark:text-gray-600 tracking-widest uppercase">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-5 h-8 rounded-full border-2 border-gray-300 dark:border-gray-700 flex items-start justify-center pt-1.5"
          >
            <div className="w-1 h-2 rounded-full bg-gradient-to-b from-rose-500 to-indigo-500" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero