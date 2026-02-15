import { motion } from 'framer-motion'
import { 
  FaHtml5, 
  FaCss3Alt, 
  FaJs, 
  FaReact, 
  FaGithub, 
  FaPython 
} from 'react-icons/fa'
import { 
  SiTailwindcss, 
  SiBootstrap, 
  SiVercel, 
  SiC, 
  SiCplusplus,
  SiGit 
} from 'react-icons/si'
import { fadeIn, staggerContainer } from '../animations/variants'

const Skills = () => {
  const techStack = [
    { icon: FaHtml5, name: 'HTML5', color: 'text-orange-600', delay: 0.1 },
    { icon: FaCss3Alt, name: 'CSS3', color: 'text-blue-600', delay: 0.15 },
    { icon: FaJs, name: 'JavaScript', color: 'text-yellow-500', delay: 0.2 },
    { icon: FaReact, name: 'React', color: 'text-blue-500', delay: 0.25 },
    { icon: SiC, name: 'C', color: 'text-blue-700', delay: 0.3 },
    { icon: SiCplusplus, name: 'C++', color: 'text-blue-800', delay: 0.35 },
    { icon: SiTailwindcss, name: 'Tailwind', color: 'text-cyan-500', delay: 0.4 },
    { icon: SiBootstrap, name: 'Bootstrap', color: 'text-purple-600', delay: 0.45 },
    { icon: SiGit, name: 'Git', color: 'text-orange-500', delay: 0.5 },
    { icon: FaGithub, name: 'GitHub', color: 'text-gray-800 dark:text-white', delay: 0.55 },
    { icon: SiVercel, name: 'Vercel', color: 'text-black dark:text-white', delay: 0.6 },
    { icon: FaPython, name: 'Python', color: 'text-blue-500', delay: 0.65 },
  ]

  return (
    <section id="skills" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
        >
          {/* Section Title */}
          <motion.div variants={fadeIn('up', 0.2)} className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold gradient-text mb-4">
              Me and My Tech Stack
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary-red to-primary-indigo mx-auto rounded-full" />
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Side - Bio */}
            <motion.div variants={fadeIn('right', 0.3)} className="space-y-6">
              <div className="glass-effect rounded-2xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
                  About Me
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                  I'm a Passionate Web Developer & UI/UX Designer with a strong foundation in modern web application development. 
                  Skilled in HTML, CSS, JavaScript, and React, with solid expertise in Data Structures & Algorithms (C++).
                  Built responsive, user-friendly web interfaces with a strong focus on UI/UX, performance optimization, and clean front-end architecture
                </p>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                  Strong problem-solving abilities with a clear understanding of Object-Oriented Programming (OOP) concepts in C++, 
                  including Encapsulation, Abstraction, Inheritance, and Polymorphism. Experienced in writing modular, reusable, 
                  and efficient code following OOP principles.
                </p>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  Hands-on experience working with RESTful APIs, MySQL, and writing optimized SQL queries.
                  AWS Certified with practical knowledge of core AWS services such as EC2, S3, IAM, and cloud fundamentals.

                  Practical experience using Excel for data organization, analysis, and reporting.
                  Foundational understanding of System Design and Low-Level Design (LLD).

                  Quick learner, collaborative team player, and eager to explore modern tools, scalable systems, and innovative design solutions.
                </p>
              </div>
            </motion.div>

            {/* Right Side - Tech Stack Icons */}
            <motion.div
              variants={fadeIn('left', 0.3)}
              className="glass-effect rounded-2xl p-8 shadow-lg"
            >
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-8 text-center">
                Technologies I Work With
              </h3>
              <div className="grid grid-cols-3 sm:grid-cols-4 gap-6">
                {techStack.map((tech, index) => (
                  <motion.div
                    key={index}
                    variants={fadeIn('up', tech.delay)}
                    whileHover={{ 
                      scale: 1.2, 
                      y: -10,
                      rotate: [0, -10, 10, -10, 0],
                      transition: { duration: 0.5 }
                    }}
                    animate={{
                      y: [0, -10, 0],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      delay: tech.delay * 2,
                      ease: 'easeInOut',
                    }}
                    className="flex flex-col items-center justify-center space-y-2 p-4 bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 group cursor-pointer"
                  >
                    <tech.icon className={`text-4xl ${tech.color} group-hover:scale-110 transition-transform duration-300`} />
                    <span className="text-xs font-medium text-gray-700 dark:text-gray-300 text-center">
                      {tech.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Additional Skills Section */}
          <motion.div
            variants={fadeIn('up', 0.4)}
            className="mt-12 glass-effect rounded-2xl p-8 shadow-lg"
          >
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6 text-center">
              What I Bring to the Table
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: 'Responsive Design',
                  description: 'Creating pixel-perfect, mobile-first designs that work seamlessly across all devices.',
                },
                {
                  title: 'Clean Code',
                  description: 'Writing maintainable, scalable code following best practices and modern standards.',
                },
                {
                  title: 'Fast Performance',
                  description: 'Optimizing applications for speed and performance to deliver the best user experience.',
                },
                {
                  title: 'Problem Solving',
                  description: 'Strong analytical skills with a passion for solving complex technical challenges.',
                },
                {
                  title: 'Collaboration',
                  description: 'Excellent team player with great communication skills and agile methodology experience.',
                },
                {
                  title: 'Continuous Learning',
                  description: 'Always staying updated with the latest technologies and industry best practices.',
                },
              ].map((skill, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
                >
                  <h4 className="text-lg font-bold text-primary-red mb-2">
                    {skill.title}
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    {skill.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
