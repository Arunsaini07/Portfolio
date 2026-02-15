import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'
import { FaPaperPlane } from 'react-icons/fa'
import { fadeIn, staggerContainer } from '../animations/variants'

const Contact = () => {
  const formRef = useRef()
  const [form, setForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [loading, setLoading] = useState(false)
  const [status, setStatus] = useState({ type: '', message: '' })

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm({ ...form, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)
    setStatus({ type: '', message: '' })

    // EmailJS configuration
    // Replace these with your actual EmailJS credentials
    const serviceId = 'service_kdhyqep'
    const templateId = 'template_ucws3do'
    const publicKey = 'GhQi_RB8-SVTv9fmD'

    emailjs
      .send(
        serviceId,
        templateId,
        {
          from_name: form.name,
          to_name: 'Your Name',
          from_email: form.email,
          to_email: 'your.email@example.com',
          subject: form.subject,
          message: form.message,
        },
        publicKey
      )
      .then(
        () => {
          setLoading(false)
          setStatus({
            type: 'success',
            message: 'Thank you! I will get back to you as soon as possible.',
          })
          setForm({
            name: '',
            email: '',
            subject: '',
            message: '',
          })
        },
        (error) => {
          setLoading(false)
          console.error(error)
          setStatus({
            type: 'error',
            message: 'Something went wrong. Please try again later.',
          })
        }
      )
  }

  return (
    <section id="contact" className="py-20 bg-white/50 dark:bg-gray-900/50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
        >
          {/* Section Title */}
          <motion.div variants={fadeIn('up', 0.2)} className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold gradient-text mb-4">
              Contact Me
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-4">
              Questions, Thoughts, Or Just Want To Say Hello?
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-primary-red to-primary-indigo mx-auto rounded-full" />
          </motion.div>

          {/* Contact Form */}
          <motion.div variants={fadeIn('up', 0.3)}>
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="glass-effect rounded-2xl p-8 shadow-2xl space-y-6"
            >
              {/* Name Input */}
              <motion.div variants={fadeIn('up', 0.4)}>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white dark:bg-gray-800 border-2 border-gray-300 dark:border-gray-600 rounded-xl focus:border-primary-red focus:ring-2 focus:ring-primary-red/20 outline-none transition-all duration-300 text-gray-800 dark:text-white"
                  placeholder="Write your name here..."
                />
              </motion.div>

              {/* Email Input */}
              <motion.div variants={fadeIn('up', 0.45)}>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white dark:bg-gray-800 border-2 border-gray-300 dark:border-gray-600 rounded-xl focus:border-primary-red focus:ring-2 focus:ring-primary-red/20 outline-none transition-all duration-300 text-gray-800 dark:text-white"
                  placeholder="abc@example.com"
                />
              </motion.div>

              {/* Subject Input */}
              <motion.div variants={fadeIn('up', 0.5)}>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                >
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  id="subject"
                  value={form.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white dark:bg-gray-800 border-2 border-gray-300 dark:border-gray-600 rounded-xl focus:border-primary-red focus:ring-2 focus:ring-primary-red/20 outline-none transition-all duration-300 text-gray-800 dark:text-white"
                  placeholder="Write your subject here..."
                />
              </motion.div>

              {/* Message Textarea */}
              <motion.div variants={fadeIn('up', 0.55)}>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                >
                  Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows="6"
                  className="w-full px-4 py-3 bg-white dark:bg-gray-800 border-2 border-gray-300 dark:border-gray-600 rounded-xl focus:border-primary-red focus:ring-2 focus:ring-primary-red/20 outline-none transition-all duration-300 text-gray-800 dark:text-white resize-none"
                  placeholder="Your message here..."
                />
              </motion.div>

              {/* Status Message */}
              {status.message && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`p-4 rounded-xl ${
                    status.type === 'success'
                      ? 'bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300'
                      : 'bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-300'
                  }`}
                >
                  {status.message}
                </motion.div>
              )}

              {/* Submit Button */}
              <motion.div variants={fadeIn('up', 0.6)}>
                <motion.button
                  type="submit"
                  disabled={loading}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full btn-primary flex items-center justify-center space-x-2 ${
                    loading ? 'opacity-70 cursor-not-allowed' : ''
                  }`}
                >
                  {loading ? (
                    <>
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                        className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                      />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <FaPaperPlane />
                      <span>Send Message</span>
                    </>
                  )}
                </motion.button>
              </motion.div>
            </form>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact
