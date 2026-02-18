import { motion } from 'framer-motion'
import { 
  FaHtml5, 
  FaCss3Alt, 
  FaJs, 
  FaReact, 
  FaGithub, 
  FaPython, 
  FaAws,
  FaNodeJs,
  FaFigma,
} from 'react-icons/fa'
import { 
  SiTailwindcss, 
  SiBootstrap, 
  SiC, 
  SiCplusplus,
  SiGit,
  SiMongodb,
  SiMysql,
  SiNextdotjs,
  SiCanva,
  SiAdobe,
  SiMicrosoftexcel
} from 'react-icons/si'
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

const Skills = () => {
  const techStack = [
    { icon: FaHtml5, name: 'HTML5', color: 'text-orange-500', delay: 0.1 },
    { icon: FaCss3Alt, name: 'CSS3', color: 'text-blue-500', delay: 0.15 },
    { icon: FaJs, name: 'JavaScript', color: 'text-yellow-500', delay: 0.2 },
    { icon: FaReact, name: 'React', color: 'text-cyan-400', delay: 0.25 },
    { icon: SiNextdotjs, name: 'Next.js', color: 'text-gray-800 dark:text-white', delay: 0.3 },
    { icon: FaNodeJs, name: 'Node.js', color: 'text-green-500', delay: 0.35 },
    { icon: SiC, name: 'C', color: 'text-blue-600', delay: 0.4 },
    { icon: SiCplusplus, name: 'C++', color: 'text-blue-700', delay: 0.45 },
    { icon: SiTailwindcss, name: 'Tailwind', color: 'text-cyan-500', delay: 0.5 },
    { icon: SiBootstrap, name: 'Bootstrap', color: 'text-purple-500', delay: 0.55 },
    { icon: SiGit, name: 'Git', color: 'text-orange-500', delay: 0.6 },
    { icon: FaGithub, name: 'GitHub', color: 'text-gray-700 dark:text-gray-300', delay: 0.65 },
    { icon: FaAws, name: 'AWS', color: 'text-orange-400', delay: 0.7 },
    { icon: FaPython, name: 'Python', color: 'text-blue-400', delay: 0.75 },
    { icon: SiMysql, name: 'MySQL', color: 'text-blue-500', delay: 0.8 },
    { icon: SiMongodb, name: 'MongoDB', color: 'text-green-500', delay: 0.85 },
    { icon: FaFigma, name: 'Figma', color: 'text-pink-500', delay: 0.9 },
    { icon: SiCanva, name: 'Canva', color: 'text-cyan-400', delay: 0.95 },
    { icon: SiAdobe, name: 'Adobe', color: 'text-red-500', delay: 1.0 },
    { icon: SiMicrosoftexcel, name: 'Excel', color: 'text-green-600', delay: 1.05 },
  ]

  const softSkills = [
    { title: 'Responsive Design', description: 'Creating pixel-perfect, mobile-first designs that work seamlessly across all devices.', icon: '🎨' },
    { title: 'Clean Code', description: 'Writing maintainable, scalable code following best practices and modern standards.', icon: '✨' },
    { title: 'Fast Performance', description: 'Optimizing applications for speed and performance to deliver the best user experience.', icon: '⚡' },
    { title: 'Problem Solving', description: 'Strong analytical skills with a passion for solving complex technical challenges.', icon: '🧩' },
    { title: 'Collaboration', description: 'Excellent team player with great communication skills and agile methodology experience.', icon: '🤝' },
    { title: 'Continuous Learning', description: 'Always staying updated with the latest technologies and industry best practices.', icon: '🚀' },
  ]

  return (
    <section id="skills" className="py-24 relative overflow-hidden">

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
              <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse" />
              My Arsenal
            </motion.span>
            <h2 className="text-5xl sm:text-6xl font-black gradient-text mb-4">
              Me and My Tech Stack
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-rose-500 to-indigo-600 mx-auto rounded-full" />
          </motion.div>

          {/* About + Tech Grid */}
          <div className="grid md:grid-cols-2 gap-10 items-start">

            {/* Left - About Me */}
            <motion.div variants={fadeIn('right', 0.3)}>
              <div className="relative bg-white dark:bg-gray-800/60 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-gray-100 dark:border-white/10 overflow-hidden h-full">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-rose-500 to-indigo-600 rounded-t-3xl" />
                <div className="absolute bottom-4 right-6 text-8xl font-black text-gray-50 dark:text-white/5 select-none pointer-events-none leading-none">Me</div>

                <h3 className="text-2xl font-black text-gray-900 dark:text-white mb-6 flex items-center gap-3">
                  <span className="w-8 h-8 rounded-xl bg-gradient-to-br from-rose-500 to-indigo-600 flex items-center justify-center text-white text-sm">✦</span>
                  About Me
                </h3>

                <div className="space-y-4 relative z-10">
                  <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">
                    Passionate Web Developer & UI/UX Designer with expertise in HTML, CSS, JavaScript, React, and DSA (C++), possessing strong problem-solving skills and a solid understanding of OOP concepts (Encapsulation, Abstraction, Inheritance, Polymorphism). I focus on building responsive, user-friendly, and high-performance applications with clean architecture, modular design, reusable components, and optimized, maintainable code.
                  </p>
                  <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">
                    Hands-on experience with RESTful APIs, MySQL, MongoDB, and writing optimized SQL queries. Familiar with cloud platforms like AWS (EC2, S3, IAM), along with practical usage of Excel for data organization, reporting, and analysis. Also possess foundational knowledge of System Design and Low-Level Design (LLD).
                  </p>
                  <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">
                    Proficient in AI tools with strong knowledge and practical experience using them efficiently to solve problems, automate workflows, and enhance overall development productivity.
                  </p>
                  <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">
                    Passionate about creating impactful digital experiences, collaborating on innovative projects, and contributing to meaningful products that solve real-world problems.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Right - Tech Stack Icons */}
            <motion.div variants={fadeIn('left', 0.3)}>
              <div className="relative bg-white dark:bg-gray-800/60 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-gray-100 dark:border-white/10 overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-600 to-rose-500 rounded-t-3xl" />

                <h3 className="text-2xl font-black text-gray-900 dark:text-white mb-8 flex items-center gap-3">
                  <span className="w-8 h-8 rounded-xl bg-gradient-to-br from-indigo-500 to-rose-500 flex items-center justify-center text-white text-sm">⚡</span>
                  Technologies I Work With
                </h3>

                <div className="grid grid-cols-4 sm:grid-cols-5 gap-3">
                  {techStack.map((tech, index) => (
                    <motion.div
                      key={index}
                      variants={fadeIn('up', tech.delay)}
                      whileHover={{ scale: 1.15, y: -6, transition: { duration: 0.2 } }}
                      animate={{ y: [0, -6, 0] }}
                      transition={{ duration: 3, repeat: Infinity, delay: tech.delay * 2, ease: 'easeInOut' }}
                      className="flex flex-col items-center justify-center gap-1.5 p-3 bg-gray-50 dark:bg-gray-700/50 border border-gray-100 dark:border-white/10 rounded-2xl hover:border-rose-200 dark:hover:border-indigo-500/40 hover:shadow-lg hover:bg-white dark:hover:bg-gray-700 transition-all duration-300 cursor-pointer"
                    >
                      <tech.icon className={`text-3xl ${tech.color}`} />
                      <span className="text-[10px] font-semibold text-gray-500 dark:text-gray-400 text-center leading-tight">
                        {tech.name}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Soft Skills */}
          <motion.div variants={fadeIn('up', 0.5)} className="mt-12">
            <div className="relative bg-white dark:bg-gray-800/60 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-gray-100 dark:border-white/10 overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-rose-500 via-pink-500 to-indigo-600 rounded-t-3xl" />

              <h3 className="text-2xl font-black text-gray-900 dark:text-white mb-8 text-center flex items-center justify-center gap-3">
                <span className="w-8 h-8 rounded-xl bg-gradient-to-br from-pink-500 to-indigo-600 flex items-center justify-center text-white text-sm">🎯</span>
                What I Bring to the Table
              </h3>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {softSkills.map((skill, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.03, y: -4 }}
                    transition={{ duration: 0.2 }}
                    className="p-5 bg-gray-50 dark:bg-gray-700/50 border border-gray-100 dark:border-white/10 rounded-2xl hover:border-rose-200 dark:hover:border-indigo-500/40 hover:shadow-lg hover:bg-white dark:hover:bg-gray-700 transition-all duration-300"
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-2xl">{skill.icon}</span>
                      <h4 className="text-base font-black text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-indigo-600">
                        {skill.title}
                      </h4>
                    </div>
                    <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                      {skill.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  )
}

export default Skills