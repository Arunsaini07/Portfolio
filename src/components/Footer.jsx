import { motion } from 'framer-motion'
import { FaLinkedin, FaGithub, FaEnvelope, FaInstagram, FaHeart } from 'react-icons/fa'
import { fadeIn } from '../animations/variants'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const footerLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ]

  const socialLinks = [
    { icon: FaLinkedin, href: 'https://www.linkedin.com/in/arun8092/', color: 'hover:text-blue-600' },
    { icon: FaGithub, href: 'https://github.com/Arunsaini07', color: 'hover:text-gray-800 dark:hover:text-white' },
    { icon: FaEnvelope, href: 'https://leetcode.com/u/Arun8092/', color: 'hover:text-red-500' },
    { icon: FaInstagram, href: 'https://www.instagram.com/arunsaini__07/', color: 'hover:text-pink-600' },
  ]

  const scrollToSection = (e, href) => {
    e.preventDefault()
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Logo and Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-r from-primary-red to-primary-indigo rounded-lg flex items-center justify-center text-white font-bold text-xl">
                A
              </div>
              <span className="text-xl font-bold gradient-text">Portfolio</span>
            </div>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Passionate web developer creating beautiful and functional digital experiences.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-4"
          >
            <h3 className="text-lg font-bold text-gray-800 dark:text-white">Quick Links</h3>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => scrollToSection(e, link.href)}
                    className="text-gray-600 dark:text-gray-400 hover:text-primary-red dark:hover:text-primary-red transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-4"
          >
            <h3 className="text-lg font-bold text-gray-800 dark:text-white">Connect With Me</h3>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, y: -5 }}
                  whileTap={{ scale: 0.9 }}
                  className={`text-2xl text-gray-600 dark:text-gray-400 ${social.color} transition-colors duration-300`}
                >
                  <social.icon />
                </motion.a>
              ))}
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Let's build something amazing together!
            </p>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="pt-8 border-t border-gray-200 dark:border-gray-800 text-center"
        >
          <p className="text-gray-600 dark:text-gray-400 text-sm flex items-center justify-center space-x-1">
            <span>© {currentYear} Made with</span>
            <motion.span
              animate={{
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            >
              <FaHeart className="text-primary-red" />
            </motion.span>
            <span>by Arun. All rights reserved.</span>
          </p>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer
