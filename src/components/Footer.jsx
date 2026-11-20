import { PROFILE } from '../utils/portfolioData'

const Footer = ({ darkMode, onToggleTheme }) => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-alabaster-50 dark:bg-obsidian-950 border-t border-zinc-200 dark:border-zinc-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
        <div className="space-y-1">
          <a
            href="#home"
            className="font-display text-base font-bold text-zinc-900 dark:text-zinc-100"
          >
            {PROFILE.name}
          </a>
          <p className="text-xs text-zinc-500 dark:text-zinc-400">
            © {currentYear} {PROFILE.name}. All rights reserved.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-6 text-xs font-medium text-zinc-600 dark:text-zinc-400">
          <a href="#home" className="hover:text-copper-500 transition-colors">
            Home
          </a>
          <a href="#projects" className="hover:text-copper-500 transition-colors">
            Projects
          </a>
          <a href="#skills" className="hover:text-copper-500 transition-colors">
            Capabilities
          </a>
          <a href="#contact" className="hover:text-copper-500 transition-colors">
            Contact
          </a>
          <button
            type="button"
            onClick={onToggleTheme}
            className="px-3 py-1.5 rounded-md border border-zinc-300 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300 hover:border-copper-500 transition-colors whitespace-nowrap shrink-0"
          >
            {darkMode ? 'Light Theme' : 'Dark Theme'}
          </button>
        </div>
      </div>
    </footer>
  )
}

export default Footer