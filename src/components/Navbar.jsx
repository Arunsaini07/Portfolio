import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { HiMenu, HiX, HiSun, HiMoon } from 'react-icons/hi'

const Navbar = ({ darkMode, toggleDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ]

  const scrollToSection = (e, href) => {
    e.preventDefault()
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsOpen(false)
    }
  }

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeInOut' }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'glass-effect shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
<motion.div
  whileHover={{ scale: 1.05 }}
  className="flex items-center"
>
  <a
    href="#home"
    onClick={(e) => scrollToSection(e, '#home')}
    className="flex items-center gap-3 group"
  >
    <div 
      className="logo-icon w-12 h-12 bg-gradient-to-br from-primary-red via-purple-600 to-primary-indigo rounded-xl flex items-center justify-center text-white shadow-lg"
      style={{
        position: 'relative',
        fontSize: '1.5rem',
        fontWeight: 800,
        letterSpacing: '-0.02em',
        transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
        overflow: 'hidden'
      }}
    >
      A
    </div>
    <span 
      className="logo-text text-2xl font-bold bg-gradient-to-r from-primary-red via-purple-600 to-primary-indigo bg-clip-text text-transparent"
      style={{
        fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
        fontWeight: 700,
        letterSpacing: '-0.03em',
        position: 'relative',
        transition: 'all 0.3s ease',
        backgroundSize: '200% auto',
        animation: 'shimmer 3s linear infinite'
      }}
    >
      Arun
    </span>
  </a>
</motion.div>
          {/* Logo
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="flex items-center"
          >
            <a
              href="#home"
              onClick={(e) => scrollToSection(e, '#home')}
              className="text-2xl font-bold gradient-text"
            >
              <div className="w-10 h-10 bg-gradient-to-r from-primary-red to-primary-indigo rounded-lg flex items-center justify-center text-white">
                A
              </div>
              
            </a>
          </motion.div> */}

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.1 }}
                className="text-gray-800 dark:text-gray-200 hover:text-primary-red dark:hover:text-primary-red transition-colors duration-300 font-medium"
              >
                {link.name}
              </motion.a>
            ))}
            
            {/* Dark Mode Toggle */}
            <motion.button
              whileHover={{ scale: 1.1, rotate: 180 }}
              whileTap={{ scale: 0.9 }}
              onClick={toggleDarkMode}
              className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-yellow-300 transition-colors duration-300"
            >
              {darkMode ? <HiSun size={20} /> : <HiMoon size={20} />}
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={toggleDarkMode}
              className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-yellow-300"
            >
              {darkMode ? <HiSun size={20} /> : <HiMoon size={20} />}
            </motion.button>
            
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-800 dark:text-gray-200"
            >
              {isOpen ? <HiX size={28} /> : <HiMenu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={false}
        animate={isOpen ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        className="md:hidden overflow-hidden glass-effect"
      >
        <div className="px-4 pt-2 pb-4 space-y-2">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => scrollToSection(e, link.href)}
              className="block py-2 text-gray-800 dark:text-gray-200 hover:text-primary-red dark:hover:text-primary-red transition-colors duration-300 font-medium"
            >
              {link.name}
            </a>
          ))}
        </div>
      </motion.div>
    </motion.nav>
  )
}

export default Navbar