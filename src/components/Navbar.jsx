import { useState, useEffect } from 'react'

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'Projects', href: '#projects' },
  { label: 'Capabilities', href: '#skills' },
  { label: 'Contact', href: '#contact' },
]

const Navbar = ({ darkMode, onToggleTheme }) => {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-200 ${
        scrolled
          ? 'bg-alabaster-50/95 dark:bg-obsidian-950/95 border-b border-zinc-200 dark:border-zinc-800'
          : 'bg-alabaster-50/80 dark:bg-obsidian-950/80 border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between gap-8">
        {/* Zone 1: Single-element Brand Wordmark */}
        <a
          href="#home"
          className="font-display text-lg font-bold tracking-tight text-zinc-900 dark:text-zinc-100 whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-copper-500 rounded-sm"
        >
          Arun Saini
        </a>

        {/* Zone 2: Concise single-line navigation links + theme switch to the right of Contact */}
        <nav aria-label="Primary" className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 border-b border-transparent hover:border-copper-500 py-1 transition-colors duration-150 whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-copper-500 rounded-sm"
            >
              {link.label}
            </a>
          ))}
          <button
            type="button"
            onClick={onToggleTheme}
            aria-label={darkMode ? 'Switch to light theme' : 'Switch to dark theme'}
            className="inline-flex items-center px-3.5 py-1.5 rounded-lg bg-white/90 dark:bg-obsidian-900/90 border border-zinc-300 dark:border-zinc-700 text-xs font-semibold text-zinc-700 dark:text-zinc-200 hover:border-copper-500 transition-colors duration-150 whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-copper-500"
          >
            {darkMode ? 'Light Mode' : 'Dark Mode'}
          </button>
        </nav>

        {/* Zone 3: Single Primary Action */}
        <div className="flex items-center gap-3 shrink-0">
          <a
            href="#contact"
            className="hidden md:inline-flex items-center justify-center px-4 py-2 text-xs font-semibold rounded-lg bg-zinc-900 text-zinc-50 hover:bg-copper-600 dark:bg-zinc-100 dark:text-zinc-950 dark:hover:bg-copper-400 transition-colors duration-150 whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-copper-500"
          >
            Get in Touch
          </a>

          <button
            type="button"
            aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((prev) => !prev)}
            className="md:hidden w-11 h-11 inline-flex flex-col items-center justify-center gap-1.5 rounded-lg border border-zinc-200 dark:border-zinc-800 text-zinc-900 dark:text-zinc-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-copper-500"
          >
            <span
              className={`w-5 h-0.5 bg-current transition-transform duration-150 ${
                menuOpen ? 'rotate-45 translate-y-2' : ''
              }`}
            />
            <span
              className={`w-5 h-0.5 bg-current transition-opacity duration-150 ${
                menuOpen ? 'opacity-0' : ''
              }`}
            />
            <span
              className={`w-5 h-0.5 bg-current transition-transform duration-150 ${
                menuOpen ? '-rotate-45 -translate-y-2' : ''
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Navigation */}
      {menuOpen && (
        <div className="md:hidden bg-alabaster-50 dark:bg-obsidian-950 border-b border-zinc-200 dark:border-zinc-800 px-6 py-4">
          <nav aria-label="Mobile" className="flex flex-col gap-2">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="py-2.5 text-sm font-medium text-zinc-700 dark:text-zinc-300 hover:text-copper-500 border-b border-zinc-100 dark:border-zinc-900 last:border-b-0"
              >
                {link.label}
              </a>
            ))}
            <button
              type="button"
              onClick={() => {
                onToggleTheme?.()
                setMenuOpen(false)
              }}
              aria-label={darkMode ? 'Switch to light theme' : 'Switch to dark theme'}
              className="mt-2 inline-flex items-center justify-center px-4 py-2 text-xs font-semibold rounded-lg bg-white/90 dark:bg-obsidian-900/90 border border-zinc-300 dark:border-zinc-700 text-zinc-700 dark:text-zinc-200"
            >
              {darkMode ? 'Light Mode' : 'Dark Mode'}
            </button>
            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="mt-2 inline-flex items-center justify-center px-4 py-2.5 text-sm font-semibold rounded-lg bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-950"
            >
              Get in Touch
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}

export default Navbar