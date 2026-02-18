import { useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import emailjs from '@emailjs/browser'
import { FaPaperPlane, FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import { fadeIn, staggerContainer } from '../animations/variants'

// Floating particles — exact same as Hero
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

const Contact = () => {
  const formRef = useRef()
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [loading, setLoading] = useState(false)
  const [status, setStatus] = useState({ type: '', message: '' })
  const [focusedField, setFocusedField] = useState(null)

  const socialLinks = [
    { icon: FaLinkedin, href: 'https://www.linkedin.com/in/arun8092/', label: 'LinkedIn', color: 'hover:text-blue-500 hover:border-blue-200 dark:hover:border-blue-500/40' },
    { icon: FaGithub, href: 'https://github.com/Arunsaini07', label: 'GitHub', color: 'hover:text-gray-900 dark:hover:text-white hover:border-gray-300 dark:hover:border-white/30' },
    { icon: MdEmail, href: 'mailto:arun@example.com', label: 'Email', color: 'hover:text-rose-500 hover:border-rose-200 dark:hover:border-rose-500/40' },
    { icon: FaInstagram, href: 'https://www.instagram.com/arunsaini__07/', label: 'Instagram', color: 'hover:text-pink-500 hover:border-pink-200 dark:hover:border-pink-500/40' },
  ]

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm({ ...form, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)
    setStatus({ type: '', message: '' })

    const serviceId = 'service_kdhyqep'
    const templateId = 'template_ucws3do'
    const publicKey = 'GhQi_RB8-SVTv9fmD'

    emailjs
      .send(serviceId, templateId, {
        from_name: form.name,
        from_email: form.email,
        subject: form.subject,
        message: form.message,
      }, publicKey)
      .then(() => {
        setLoading(false)
        setStatus({ type: 'success', message: 'Thank you! I will get back to you as soon as possible.' })
        setForm({ name: '', email: '', subject: '', message: '' })
      }, (error) => {
        setLoading(false)
        console.error(error)
        setStatus({ type: 'error', message: 'Something went wrong. Please try again later.' })
      })
  }

  const inputClass = (field) => `
    w-full px-5 py-3.5 rounded-2xl text-sm font-medium outline-none transition-all duration-300
    bg-gray-50 dark:bg-gray-700/50
    border-2 ${focusedField === field
      ? 'border-rose-400 dark:border-indigo-400 shadow-lg shadow-rose-500/10 dark:shadow-indigo-500/10 bg-white dark:bg-gray-700'
      : 'border-gray-100 dark:border-white/10 hover:border-rose-200 dark:hover:border-indigo-500/30'
    }
    text-gray-800 dark:text-white placeholder-gray-400 dark:placeholder-gray-500
  `

  const fields = [
    { id: 'name', label: 'Your Name', type: 'text', placeholder: 'Write your name here...', icon: '👤' },
    { id: 'email', label: 'Your Email', type: 'email', placeholder: 'abc@example.com', icon: '✉️' },
    { id: 'subject', label: 'Subject', type: 'text', placeholder: 'Write your subject here...', icon: '📌' },
  ]

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-gray-50 dark:bg-gray-950">

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

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
        >

          {/* Section Title */}
          <motion.div variants={fadeIn('up', 0.2)} className="text-center mb-16">
            <motion.span
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-rose-500/10 to-indigo-500/10 border border-rose-500/20 dark:border-indigo-500/30 text-sm font-semibold text-rose-600 dark:text-indigo-400 mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-rose-500 animate-pulse" />
              Get In Touch
            </motion.span>
            <h2 className="text-5xl sm:text-6xl font-black gradient-text mb-4">
              Contact Me
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-rose-500 to-indigo-600 mx-auto rounded-full mb-6" />
            <p className="text-gray-500 dark:text-gray-400 text-base max-w-md mx-auto">
              Questions, thoughts, or just want to say hello? I'd love to hear from you.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-5 gap-8 items-start">

            {/* Left — Info Panel */}
            <motion.div
              variants={fadeIn('right', 0.3)}
              className="lg:col-span-2 space-y-5"
            >
              {/* Info card */}
              <div className="relative bg-white dark:bg-gray-800/60 backdrop-blur-sm rounded-3xl p-7 shadow-lg border border-gray-100 dark:border-white/10 overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-rose-500 to-indigo-600 rounded-t-3xl" />
                <div className="absolute bottom-3 right-4 text-6xl font-black text-gray-50 dark:text-white/5 select-none pointer-events-none leading-none">Hi!</div>

                <h3 className="text-xl font-black text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                  <span className="w-7 h-7 rounded-xl bg-gradient-to-br from-rose-500 to-indigo-600 flex items-center justify-center text-white text-xs">✦</span>
                  Let's Talk
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                  I'm currently open to new opportunities, collaborations, and interesting projects. Whether you have a question or just want to say hi — my inbox is always open!
                </p>
              </div>

              {/* Social links card */}
              <div className="relative bg-white dark:bg-gray-800/60 backdrop-blur-sm rounded-3xl p-7 shadow-lg border border-gray-100 dark:border-white/10 overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-600 to-rose-500 rounded-t-3xl" />

                <h3 className="text-base font-black text-gray-900 dark:text-white mb-5 flex items-center gap-2">
                  <span className="w-7 h-7 rounded-xl bg-gradient-to-br from-indigo-500 to-pink-500 flex items-center justify-center text-white text-xs">↗</span>
                  Find Me On
                </h3>

                <div className="space-y-3">
                  {socialLinks.map(({ icon: Icon, href, label, color }, i) => (
                    <motion.a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + i * 0.08 }}
                      whileHover={{ x: 6, scale: 1.02 }}
                      className={`flex items-center gap-3 p-3 rounded-2xl bg-gray-50 dark:bg-gray-700/50 border border-gray-100 dark:border-white/10 text-gray-500 dark:text-gray-400 transition-all duration-300 group ${color}`}
                    >
                      <div className="w-8 h-8 rounded-xl bg-white dark:bg-gray-600 shadow-sm flex items-center justify-center flex-shrink-0 group-hover:shadow-md transition-shadow">
                        <Icon size={15} />
                      </div>
                      <span className="text-sm font-semibold">{label}</span>
                      <motion.span
                        animate={{ x: [0, 3, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.2 }}
                        className="ml-auto text-xs opacity-0 group-hover:opacity-100 transition-opacity"
                      >
                        →
                      </motion.span>
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Right — Form */}
            <motion.div variants={fadeIn('left', 0.3)} className="lg:col-span-3">
              <div className="relative bg-white dark:bg-gray-800/60 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-gray-100 dark:border-white/10 overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-rose-500 via-pink-500 to-indigo-600 rounded-t-3xl" />

                <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">

                  {/* Name, Email, Subject */}
                  {fields.map(({ id, label, type, placeholder, icon }) => (
                    <div key={id}>
                      <label htmlFor={id} className="flex items-center gap-1.5 text-xs font-bold text-gray-600 dark:text-gray-300 mb-2 uppercase tracking-wider">
                        <span>{icon}</span> {label}
                      </label>
                      <input
                        type={type}
                        name={id}
                        id={id}
                        value={form[id]}
                        onChange={handleChange}
                        onFocus={() => setFocusedField(id)}
                        onBlur={() => setFocusedField(null)}
                        required
                        className={inputClass(id)}
                        placeholder={placeholder}
                      />
                    </div>
                  ))}

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="flex items-center gap-1.5 text-xs font-bold text-gray-600 dark:text-gray-300 mb-2 uppercase tracking-wider">
                      <span>💬</span> Message
                    </label>
                    <textarea
                      name="message"
                      id="message"
                      value={form.message}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('message')}
                      onBlur={() => setFocusedField(null)}
                      required
                      rows="5"
                      className={inputClass('message') + ' resize-none'}
                      placeholder="Your message here..."
                    />
                  </div>

                  {/* Status Message */}
                  <AnimatePresence>
                    {status.message && (
                      <motion.div
                        initial={{ opacity: 0, y: -10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -10, scale: 0.95 }}
                        className={`p-4 rounded-2xl text-sm font-semibold flex items-center gap-2 ${
                          status.type === 'success'
                            ? 'bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-400 border border-green-200 dark:border-green-500/30'
                            : 'bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-400 border border-red-200 dark:border-red-500/30'
                        }`}
                      >
                        <span>{status.type === 'success' ? '✅' : '❌'}</span>
                        {status.message}
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Submit Button */}
                  <motion.button
                    type="submit"
                    disabled={loading}
                    whileHover={{ scale: loading ? 1 : 1.02 }}
                    whileTap={{ scale: loading ? 1 : 0.98 }}
                    className={`w-full py-4 rounded-2xl text-white font-black text-sm relative overflow-hidden shadow-lg shadow-rose-500/20 ${loading ? 'opacity-70 cursor-not-allowed' : ''}`}
                  >
                    <span className="absolute inset-0 bg-gradient-to-r from-rose-500 to-indigo-600" />
                    {/* Shimmer */}
                    {!loading && (
                      <motion.span
                        animate={{ x: ['-100%', '200%'] }}
                        transition={{ duration: 2.5, repeat: Infinity, ease: 'linear', repeatDelay: 1 }}
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12"
                      />
                    )}
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      {loading ? (
                        <>
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                            className="w-4 h-4 border-2 border-white border-t-transparent rounded-full"
                          />
                          Sending...
                        </>
                      ) : (
                        <>
                          <FaPaperPlane className="text-xs" />
                          Send Message
                          <motion.span
                            animate={{ x: [0, 4, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                          >
                            →
                          </motion.span>
                        </>
                      )}
                    </span>
                  </motion.button>

                </form>
              </div>
            </motion.div>
          </div>

        </motion.div>
      </div>
    </section>
  )
}

export default Contact