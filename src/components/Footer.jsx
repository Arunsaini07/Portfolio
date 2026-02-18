import { motion } from 'framer-motion'
import { FaLinkedin, FaGithub, FaEnvelope, FaInstagram, FaHeart } from 'react-icons/fa'

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

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const footerLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ]

  const socialLinks = [
    { icon: FaLinkedin, href: 'https://www.linkedin.com/in/arun8092/', label: 'LinkedIn', color: 'hover:text-blue-500 hover:border-blue-200 dark:hover:border-blue-500/40' },
    { icon: FaGithub, href: 'https://github.com/Arunsaini07', label: 'GitHub', color: 'hover:text-gray-900 dark:hover:text-white hover:border-gray-300 dark:hover:border-white/30' },
    { icon: FaEnvelope, href: 'https://leetcode.com/u/Arun8092/', label: 'Email', color: 'hover:text-rose-500 hover:border-rose-200 dark:hover:border-rose-500/40' },
    { icon: FaInstagram, href: 'https://www.instagram.com/arunsaini__07/', label: 'Instagram', color: 'hover:text-pink-500 hover:border-pink-200 dark:hover:border-pink-500/40' },
  ]

  const scrollToSection = (e, href) => {
    e.preventDefault()
    const element = document.querySelector(href)
    if (element) element.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="relative overflow-hidden bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-white/10">

      {/* Gradient top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-rose-500 to-transparent opacity-50" />

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

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid md:grid-cols-3 gap-10 mb-12">

          {/* Logo + tagline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-5"
          >
            <motion.a
              href="#home"
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-3 group w-fit"
            >
              <div className="relative">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
                  className="absolute inset-0 rounded-xl bg-gradient-to-br from-rose-500 via-pink-500 to-indigo-600 blur-sm opacity-60 group-hover:opacity-100 transition-opacity"
                />
                <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-rose-500 via-pink-500 to-indigo-600 flex items-center justify-center shadow-lg">
                  <span className="text-white font-black text-lg">A</span>
                </div>
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-black text-gray-900 dark:text-white text-lg">Arun</span>
                <span className="text-[10px] font-medium text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-indigo-500 tracking-widest uppercase">Portfolio</span>
              </div>
            </motion.a>

            <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed max-w-xs">
              Passionate web developer creating beautiful and functional digital experiences that make a difference.
            </p>

            {/* Social icons */}
            <div className="flex gap-3">
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
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, type: 'spring', stiffness: 400 }}
                  className={`w-10 h-10 rounded-2xl bg-gray-50 dark:bg-gray-800 border border-gray-100 dark:border-white/10 flex items-center justify-center text-gray-400 dark:text-gray-500 transition-all duration-300 ${color}`}
                >
                  <Icon size={16} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-5"
          >
            <h3 className="text-base font-black text-gray-900 dark:text-white flex items-center gap-2">
              <span className="w-6 h-6 rounded-lg bg-gradient-to-br from-rose-500 to-indigo-600 flex items-center justify-center text-white text-xs">↗</span>
              Quick Links
            </h3>
            <ul className="space-y-2">
              {footerLinks.map((link, i) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.15 + i * 0.07 }}
                >
                  <a
                    href={link.href}
                    onClick={(e) => scrollToSection(e, link.href)}
                    className="group flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 hover:text-rose-500 dark:hover:text-indigo-400 transition-colors duration-300 w-fit"
                  >
                    <motion.span
                      animate={{ x: [0, 3, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.2 }}
                      className="opacity-0 group-hover:opacity-100 transition-opacity text-xs"
                    >
                      →
                    </motion.span>
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Let's Connect CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-5"
          >
            <h3 className="text-base font-black text-gray-900 dark:text-white flex items-center gap-2">
              <span className="w-6 h-6 rounded-lg bg-gradient-to-br from-indigo-500 to-pink-500 flex items-center justify-center text-white text-xs">✦</span>
              Let's Connect
            </h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
              Open to exciting opportunities, collaborations, and creative projects. Let's build something amazing together!
            </p>
            <motion.a
              href="#contact"
              onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }) }}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-white text-sm font-bold relative overflow-hidden shadow-lg shadow-rose-500/20"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-rose-500 to-indigo-600" />
              <motion.span
                animate={{ x: ['-100%', '200%'] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: 'linear', repeatDelay: 1.5 }}
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12"
              />
              <span className="relative z-10">Get In Touch</span>
              <motion.span
                animate={{ x: [0, 4, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="relative z-10"
              >
                →
              </motion.span>
            </motion.a>
          </motion.div>
        </div>

        {/* Bottom bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="pt-8 border-t border-gray-100 dark:border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4"
        >
          <p className="text-xs text-gray-400 dark:text-gray-600 flex items-center gap-1.5">
            <span>© {currentYear} Made with</span>
            <motion.span
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ duration: 0.8, repeat: Infinity, ease: 'easeInOut' }}
            >
              <FaHeart className="text-rose-500" />
            </motion.span>
            <span>by <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-indigo-600 font-bold">Arun Saini</span>. All rights reserved.</span>
          </p>
          <p className="text-xs text-gray-400 dark:text-gray-600">
            Built with React & Tailwind CSS
          </p>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer