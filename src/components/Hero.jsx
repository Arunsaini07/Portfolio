import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'
import { FaLinkedin, FaGithub, FaEnvelope, FaInstagram, FaDownload } from 'react-icons/fa'
import { fadeIn, staggerContainer } from '../animations/variants'

const Hero = () => {
  const socialLinks = [
    { icon: FaLinkedin, href: 'https://linkedin.com', color: 'hover:text-blue-600' },
    { icon: FaGithub, href: 'https://github.com', color: 'hover:text-gray-800 dark:hover:text-white' },
    { icon: FaEnvelope, href: 'mailto:your.email@example.com', color: 'hover:text-red-500' },
    { icon: FaInstagram, href: 'https://instagram.com', color: 'hover:text-pink-600' },
  ]

  return (
    <section id="home" className="min-h-screen flex items-center pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          {/* Left Side - Text Content */}
          <motion.div variants={fadeIn('right', 0.2)} className="space-y-6">
            <motion.h1
              variants={fadeIn('up', 0.3)}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-800 dark:text-white"
            >
              Hi! I am{' '}
              <span className="gradient-text">Arun Saini</span>
            </motion.h1>

            <motion.div variants={fadeIn('up', 0.4)} className="text-2xl sm:text-3xl font-semibold text-primary-indigo dark:text-blue-400">
              <TypeAnimation
                sequence={[
                  'I am a Web Developer',
                  2000,
                  'I am a Frontend Developer',
                  2000,
                  'I am a React Developer',
                  2000,
                  'I am a UI/UX Enthusiast',
                  2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </motion.div>

            <motion.p
              variants={fadeIn('up', 0.5)}
              className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed"
            >
              Passionate about creating beautiful, responsive, and user-friendly web applications. 
              I love turning ideas into reality through clean code and modern design principles.
            </motion.p>

            {/* Social Icons */}
            <motion.div
              variants={fadeIn('up', 0.6)}
              className="flex space-x-4"
            >
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
            </motion.div>

            {/* Download CV Button */}
            <motion.div variants={fadeIn('up', 0.7)}>
              <motion.a
                href="https://drive.google.com/drive/folders/1pC_gCmExRvOhhifFDU8DAS4sAFgrlaV7"
                download
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center space-x-2 btn-primary"
              >
                <FaDownload />
                <span>Download Resume</span>
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right Side - Profile Image */}
          <motion.div
            variants={fadeIn('left', 0.2)}
            className="relative flex justify-center items-center"
          >
            <motion.div
              animate={{
                y: [0, -20, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="relative"
            >
              {/* Decorative Shapes */}
              <motion.div
                animate={{
                  rotate: 360,
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: 'linear',
                }}
                className="absolute -top-4 -left-4 w-24 h-24 bg-primary-red/20 rounded-full blur-xl"
              />
              <motion.div
                animate={{
                  rotate: -360,
                }}
                transition={{
                  duration: 15,
                  repeat: Infinity,
                  ease: 'linear',
                }}
                className="absolute -bottom-4 -right-4 w-32 h-32 bg-primary-indigo/20 rounded-full blur-xl"
              />

              {/* Profile Image Card */}
              <div className="relative glass-effect rounded-3xl p-2 shadow-2xl">
                <div className="w-64 h-64 sm:w-80 sm:h-80 bg-gradient-to-br from-primary-red to-primary-indigo rounded-3xl overflow-hidden">
                  {/* Replace with your actual image */}
                  {/* <div className="w-full h-full flex items-center justify-center text-white text-6xl font-bold">
                    YN
                  </div> */}
                  {/* Uncomment and use this when you have an image */}
                  <img 
                    src="/profile.jpeg"
                    alt="Profile" 
                    className="w-full h-full object-cover"
                    //className="w-48 border-2 border-red-500"
                    //className="w-full h-full object-cover"
                  /> 
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
