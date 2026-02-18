import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const [menuOpen, setMenuOpen] = useState(false)
  const [hoveredLink, setHoveredLink] = useState(null)
  const [darkMode, setDarkMode] = useState(false)

  const navLinks = ['Home', 'Projects', 'Skills', 'Contact']

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [darkMode])

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'py-3'
            : 'py-5'
        }`}
      >
        {/* Background blur layer */}
        <motion.div
          animate={{
            opacity: scrolled ? 1 : 0,
          }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0 bg-white/70 dark:bg-gray-950/80 backdrop-blur-xl border-b border-white/20 dark:border-white/10 shadow-lg shadow-black/5"
        />

        <div className="relative max-w-7xl mx-auto px-6 flex items-center justify-between">

          {/* Logo */}
          <motion.a
            href="#home"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-3 group"
          >
            <div className="relative">
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-0 rounded-xl bg-gradient-to-br from-rose-500 via-pink-500 to-indigo-600 blur-sm opacity-70 group-hover:opacity-100 transition-opacity"
              />
              <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-rose-500 via-pink-500 to-indigo-600 flex items-center justify-center shadow-lg">
                <span className="text-white font-black text-lg tracking-tight">A</span>
              </div>
            </div>
            <div className="flex flex-col leading-none">
              <span className="font-black text-gray-900 dark:text-white text-lg tracking-tight">Arun</span>
              <span className="text-[10px] font-medium text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-indigo-500 tracking-widest uppercase">Portfolio</span>
            </div>
          </motion.a>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link, i) => (
              <motion.a
                key={link}
                href={`#${link.toLowerCase()}`}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * i + 0.3, duration: 0.5 }}
                onHoverStart={() => setHoveredLink(link)}
                onHoverEnd={() => setHoveredLink(null)}
                onClick={() => setActiveSection(link.toLowerCase())}
                className="relative px-5 py-2.5 text-sm font-semibold text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-200 rounded-xl group"
              >
                {/* Hover background */}
                <AnimatePresence>
                  {hoveredLink === link && (
                    <motion.span
                      layoutId="navHover"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      transition={{ duration: 0.2 }}
                      className="absolute inset-0 bg-gray-100 dark:bg-white/10 rounded-xl"
                    />
                  )}
                </AnimatePresence>

                {/* Active indicator */}
                {activeSection === link.toLowerCase() && (
                  <motion.span
                    layoutId="navActive"
                    className="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-gradient-to-r from-rose-500 to-indigo-500"
                  />
                )}

                <span className="relative z-10">{link}</span>
              </motion.a>
            ))}
          </div>

          {/* Right Side */}
          <div className="flex items-center gap-3">
            {/* Dark mode toggle */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setDarkMode(!darkMode)}
              className="relative w-12 h-6 rounded-full bg-gray-200 dark:bg-indigo-900 transition-colors duration-300 flex items-center px-1"
            >
              <motion.div
                animate={{ x: darkMode ? 24 : 0 }}
                transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                className="w-4 h-4 rounded-full bg-white shadow-md flex items-center justify-center text-[8px]"
              >
                {darkMode ? '🌙' : '☀️'}
              </motion.div>
            </motion.button>

            {/* CTA Button */}
            <motion.a
              href="#contact"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.7, duration: 0.4 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="hidden md:flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold text-white relative overflow-hidden group"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-rose-500 to-indigo-600" />
              <motion.span
                animate={{ x: ['100%', '-100%'] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12"
              />
              <span className="relative z-10">Let's Talk</span>
              <span className="relative z-10 text-xs">→</span>
            </motion.a>

            {/* Mobile menu button */}
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden w-10 h-10 rounded-xl bg-gray-100 dark:bg-white/10 flex flex-col items-center justify-center gap-1.5"
            >
              <motion.span
                animate={{ rotate: menuOpen ? 45 : 0, y: menuOpen ? 6 : 0 }}
                className="w-5 h-0.5 bg-gray-800 dark:bg-white rounded-full block"
              />
              <motion.span
                animate={{ opacity: menuOpen ? 0 : 1, scaleX: menuOpen ? 0 : 1 }}
                className="w-5 h-0.5 bg-gray-800 dark:bg-white rounded-full block"
              />
              <motion.span
                animate={{ rotate: menuOpen ? -45 : 0, y: menuOpen ? -6 : 0 }}
                className="w-5 h-0.5 bg-gray-800 dark:bg-white rounded-full block"
              />
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="fixed top-20 left-4 right-4 z-40 bg-white/90 dark:bg-gray-900/95 backdrop-blur-2xl rounded-2xl shadow-2xl border border-white/30 dark:border-white/10 p-4 md:hidden"
          >
            {navLinks.map((link, i) => (
              <motion.a
                key={link}
                href={`#${link.toLowerCase()}`}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.07 }}
                onClick={() => setMenuOpen(false)}
                className="flex items-center justify-between px-4 py-3.5 rounded-xl text-gray-700 dark:text-gray-200 font-semibold hover:bg-gray-100 dark:hover:bg-white/10 transition-colors group"
              >
                <span>{link}</span>
                <motion.span
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.2 }}
                  className="text-rose-500 opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  →
                </motion.span>
              </motion.a>
            ))}
            <div className="mt-3 pt-3 border-t border-gray-100 dark:border-white/10">
              <a
                href="#contact"
                className="flex items-center justify-center gap-2 w-full py-3 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-rose-500 to-indigo-600"
                onClick={() => setMenuOpen(false)}
              >
                Let's Talk →
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Navbar