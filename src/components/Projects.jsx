import { motion } from 'framer-motion'
import { FaReact, FaHtml5, FaCss3Alt, FaJs, FaGithub, FaExternalLinkAlt } from 'react-icons/fa'
import { SiTailwindcss, SiVercel } from 'react-icons/si'
import { fadeIn, staggerContainer } from '../animations/variants'

const Projects = () => {
  const projects = [
    {
      title: 'Faculty Hiring Portal',
      description: 'A comprehensive carbon footprint tracker that helps users monitor and reduce their environmental impact. Features real-time calculations, data visualization, and personalized recommendations.',
      image: '/project1.jpg',
      techStack: [
        { icon: FaReact, name: 'React', color: 'text-blue-500' },
        { icon: SiTailwindcss, name: 'Tailwind', color: 'text-cyan-500' },
        { icon: FaJs, name: 'JavaScript', color: 'text-yellow-500' },
      ],
      liveLink: 'https://footprint-demo.com',
      githubLink: 'https://github.com/yourusername/footprint',
      gradient: 'from-green-400 to-blue-500',
    },
    {
      title: 'LabourHub',
      description: 'An innovative learning platform designed to make education accessible and engaging. Includes interactive lessons, progress tracking, and collaborative learning features.',
      image: '/project2.jpg',
      techStack: [
        { icon: FaReact, name: 'React', color: 'text-blue-500' },
        { icon: FaCss3Alt, name: 'CSS3', color: 'text-blue-600' },
        { icon: FaHtml5, name: 'HTML5', color: 'text-orange-600' },
      ],
      liveLink: 'https://eduadi-demo.com',
      githubLink: 'https://github.com/yourusername/eduadi',
      gradient: 'from-purple-400 to-pink-500',
    },
  ]

  return (
    <section id="projects" className="py-20 bg-white/50 dark:bg-gray-900/50">
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
              Projects
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary-red to-primary-indigo mx-auto rounded-full" />
          </motion.div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                variants={fadeIn('up', index * 0.2)}
                whileHover={{ y: -10 }}
                className="group relative glass-effect rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
              >
                {/* Project Image */}
                <div className="relative h-64 overflow-hidden bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-800">
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-80`}
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.5, ease: 'easeInOut' }}
                  />
                  <div className="absolute inset-0 flex items-center justify-center text-white text-6xl font-bold opacity-50">
                    {project.title[0]}
                  </div>
                  {/* Uncomment when you have images */}
                  {/* <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  /> */}
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-8 space-x-4">
                    <motion.a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="px-4 py-2 bg-white text-primary-red rounded-full font-medium flex items-center space-x-2"
                    >
                      <FaExternalLinkAlt />
                      <span>Visit App</span>
                    </motion.a>
                    <motion.a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="px-4 py-2 bg-gray-800 text-white rounded-full font-medium flex items-center space-x-2"
                    >
                      <FaGithub />
                      <span>GitHub</span>
                    </motion.a>
                  </div>
                </div>

                {/* Project Details */}
                <div className="p-6 space-y-4">
                  <h3 className="text-2xl font-bold text-gray-800 dark:text-white group-hover:text-primary-red transition-colors duration-300">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-3">
                    {project.techStack.map((tech, techIndex) => (
                      <motion.div
                        key={techIndex}
                        whileHover={{ scale: 1.1, y: -5 }}
                        className={`flex items-center space-x-2 px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full ${tech.color} text-sm font-medium`}
                      >
                        <tech.icon className="text-lg" />
                        <span className="text-gray-700 dark:text-gray-300">{tech.name}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Animated Border */}
                <motion.div
                  className="absolute inset-0 border-2 border-transparent group-hover:border-primary-red rounded-2xl transition-colors duration-300"
                  initial={false}
                  whileHover={{ borderColor: '#ef4444' }}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
