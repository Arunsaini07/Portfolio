import { useState, useRef } from 'react'
import { motion, useScroll, useSpring, useTransform } from 'framer-motion'
import emailjs from '@emailjs/browser'
import { FaGithub, FaLinkedin, FaInstagram, FaPaperPlane } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import { SiLeetcode } from 'react-icons/si'
import { PROFILE, validateContactForm } from '../utils/portfolioData'

const SOCIAL_ICONS = {
  linkedin: FaLinkedin,
  github: FaGithub,
  leetcode: SiLeetcode,
  instagram: FaInstagram,
}

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [fieldErrors, setFieldErrors] = useState({})
  const [loading, setLoading] = useState(false)
  const [status, setStatus] = useState({ type: '', message: '' })
  const sectionRef = useRef(null)

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'center center'],
  })

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 26,
    mass: 0.25,
  })

  const formRotateX = useTransform(smoothProgress, [0, 1], [8, 0])
  const formY = useTransform(smoothProgress, [0, 1], [28, 0])

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
    if (fieldErrors[name]) {
      setFieldErrors((prev) => ({ ...prev, [name]: '' }))
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setStatus({ type: '', message: '' })

    const validation = validateContactForm(form)
    if (!validation.valid) {
      setFieldErrors(validation.errors)
      return
    }

    setFieldErrors({})
    setLoading(true)

    const serviceId = 'service_kdhyqep'
    const templateId = 'template_ucws3do'
    const publicKey = 'GhQi_RB8-SVTv9fmD'

    emailjs
      .send(
        serviceId,
        templateId,
        {
          from_name: form.name.trim(),
          from_email: form.email.trim(),
          subject: form.subject.trim(),
          message: `${form.message.trim()} — ${form.name.trim()} (${form.email.trim()})`,
        },
        publicKey
      )
      .then(
        () => {
          setLoading(false)
          setStatus({
            type: 'success',
            message: 'Message sent. Thank you for reaching out — I will respond shortly.',
          })
          setForm({ name: '', email: '', subject: '', message: '' })
        },
        (error) => {
          setLoading(false)
          console.error(error)
          setStatus({
            type: 'error',
            message: `Delivery failed. Please email me directly at ${PROFILE.email}.`,
          })
        }
      )
  }

  const inputBase =
    'w-full px-4 py-3 rounded-lg text-sm bg-alabaster-50 dark:bg-obsidian-950 border border-zinc-300 dark:border-zinc-700 text-zinc-900 dark:text-zinc-100 placeholder-zinc-400 dark:placeholder-zinc-500 focus:outline-none focus:border-copper-500 dark:focus:border-copper-400 transition-colors duration-150'

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative py-20 lg:py-24 border-t border-zinc-200/70 dark:border-zinc-800/70"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          {/* Left Inquiry Info & Direct Channels */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-3">
              <p className="text-xs font-medium tracking-wide text-copper-600 dark:text-copper-400">
                Contact
              </p>
              <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 text-balance">
                Start a conversation.
              </h2>
              <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-300 leading-relaxed">
                Available for frontend engineering roles, interactive 3D web builds, and full-stack
                product collaborations.
              </p>
            </div>

            <div className="pt-6 border-t border-zinc-200/80 dark:border-zinc-800/80 space-y-4">
              <p className="text-xs font-semibold text-zinc-500 dark:text-zinc-400">
                Direct Email
              </p>
              <a
                href={`mailto:${PROFILE.email}`}
                className="flex items-center justify-between p-4 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white/95 dark:bg-obsidian-900/90 hover:border-copper-500 dark:hover:border-copper-400 transition-colors duration-150 group"
              >
                <span className="inline-flex items-center gap-3 text-sm font-medium text-zinc-900 dark:text-zinc-100">
                  <MdEmail size={18} className="text-copper-500" aria-hidden="true" />
                  <span>{PROFILE.email}</span>
                </span>
                <span className="text-xs text-zinc-400 group-hover:text-copper-500 transition-colors">
                  →
                </span>
              </a>
            </div>

            <div className="space-y-3">
              <p className="text-xs font-semibold text-zinc-500 dark:text-zinc-400">
                Profiles
              </p>
              <div className="divide-y divide-zinc-200 dark:divide-zinc-800 border border-zinc-200 dark:border-zinc-800 rounded-xl bg-white/95 dark:bg-obsidian-900/90 overflow-hidden">
                {PROFILE.socials.map((social) => {
                  const Icon = SOCIAL_ICONS[social.id]
                  return (
                    <a
                      key={social.id}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between px-4 py-3 text-sm hover:bg-alabaster-50 dark:hover:bg-obsidian-850 transition-colors duration-150"
                    >
                      <span className="inline-flex items-center gap-3 font-medium text-zinc-800 dark:text-zinc-200">
                        {Icon && <Icon size={15} className="text-zinc-500" aria-hidden="true" />}
                        <span>{social.label}</span>
                      </span>
                      <span className="text-xs font-mono text-zinc-500 dark:text-zinc-400">
                        {social.handle}
                      </span>
                    </a>
                  )
                })}
              </div>
            </div>
          </div>

          {/* Right Architectural Inquiry Form with Scroll 3D Elevation */}
          <motion.div
            style={{
              perspective: '1200px',
              rotateX: formRotateX,
              y: formY,
            }}
            className="lg:col-span-7 will-change-transform"
          >
            <form
              noValidate
              onSubmit={handleSubmit}
              className="p-6 sm:p-8 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white/95 dark:bg-obsidian-900/90 space-y-5"
            >
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label
                    htmlFor="contact-name"
                    className="block text-xs font-semibold text-zinc-700 dark:text-zinc-300 mb-2"
                  >
                    Your Name
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Arun Saini"
                    aria-invalid={Boolean(fieldErrors.name)}
                    className={inputBase}
                  />
                  {fieldErrors.name && (
                    <p className="mt-1.5 text-xs text-red-600 dark:text-red-400">
                      Error: {fieldErrors.name}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="contact-email"
                    className="block text-xs font-semibold text-zinc-700 dark:text-zinc-300 mb-2"
                  >
                    Email Address
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="name@company.com"
                    aria-invalid={Boolean(fieldErrors.email)}
                    className={inputBase}
                  />
                  {fieldErrors.email && (
                    <p className="mt-1.5 text-xs text-red-600 dark:text-red-400">
                      Error: {fieldErrors.email}
                    </p>
                  )}
                </div>
              </div>

              <div>
                <label
                  htmlFor="contact-subject"
                  className="block text-xs font-semibold text-zinc-700 dark:text-zinc-300 mb-2"
                >
                  Subject
                </label>
                <input
                  id="contact-subject"
                  name="subject"
                  type="text"
                  value={form.subject}
                  onChange={handleChange}
                  placeholder="Frontend collaboration or role inquiry"
                  aria-invalid={Boolean(fieldErrors.subject)}
                  className={inputBase}
                />
                {fieldErrors.subject && (
                  <p className="mt-1.5 text-xs text-red-600 dark:text-red-400">
                    Error: {fieldErrors.subject}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="contact-message"
                  className="block text-xs font-semibold text-zinc-700 dark:text-zinc-300 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Share project scope, timeline, or role details..."
                  aria-invalid={Boolean(fieldErrors.message)}
                  className={`${inputBase} resize-none`}
                />
                {fieldErrors.message && (
                  <p className="mt-1.5 text-xs text-red-600 dark:text-red-400">
                    Error: {fieldErrors.message}
                  </p>
                )}
              </div>

              {status.message && (
                <div
                  role="status"
                  className={`p-4 rounded-lg text-sm font-medium border ${
                    status.type === 'success'
                      ? 'bg-emerald-50 dark:bg-emerald-950/40 text-emerald-800 dark:text-emerald-300 border-emerald-200 dark:border-emerald-800'
                      : 'bg-red-50 dark:bg-red-950/40 text-red-800 dark:text-red-300 border-red-200 dark:border-red-800'
                  }`}
                >
                  <span className="font-semibold">
                    {status.type === 'success' ? 'Sent: ' : 'Notice: '}
                  </span>
                  {status.message}
                </div>
              )}

              <div className="pt-2 flex items-center justify-between gap-4">
                <p className="text-xs text-zinc-500 dark:text-zinc-400">
                  Delivered directly via EmailJS.
                </p>
                <button
                  type="submit"
                  disabled={loading}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-zinc-900 text-zinc-50 hover:bg-copper-600 dark:bg-copper-500 dark:text-obsidian-950 dark:hover:bg-copper-400 text-sm font-semibold transition-colors duration-150 disabled:opacity-60 disabled:cursor-not-allowed whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-copper-500"
                >
                  <FaPaperPlane size={12} aria-hidden="true" />
                  <span>{loading ? 'Sending...' : 'Send Message'}</span>
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact