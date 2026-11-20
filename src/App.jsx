import { useState, useEffect, useRef } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Footer from './components/Footer'
import BackToTop from './components/BackToTop'
import { mountScrollWorld } from './three/ScrollWorldCanvas'

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    try {
      const saved = localStorage.getItem('theme')
      return saved ? saved === 'dark' : true
    } catch {
      return true
    }
  })

  const worldMountRef = useRef(null)
  const worldApiRef = useRef(null)

  useEffect(() => {
    const container = worldMountRef.current
    if (!container) return
    const api = mountScrollWorld(container, {
      initialTheme: darkMode ? 'dark' : 'light',
    })
    worldApiRef.current = api

    return () => {
      api?.dispose?.()
      worldApiRef.current = null
    }
  }, [])

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
    worldApiRef.current?.setTheme?.(darkMode ? 'dark' : 'light')
    try {
      localStorage.setItem('theme', darkMode ? 'dark' : 'light')
    } catch {
      // ignore storage errors
    }
  }, [darkMode])

  const toggleDarkMode = () => setDarkMode((prev) => !prev)

  return (
    <div className="relative min-h-screen bg-alabaster-50 text-zinc-900 dark:bg-obsidian-950 dark:text-zinc-100 transition-colors duration-300">
      {/* Full-viewport fixed scroll-driven Three.js 3D world */}
      <div
        ref={worldMountRef}
        data-testid="scroll-3d-world"
        aria-hidden="true"
        className="fixed inset-0 z-0 pointer-events-none"
      />

      {/* Foreground interactive portfolio layers */}
      <div className="relative z-10">
        <Navbar darkMode={darkMode} onToggleTheme={toggleDarkMode} />
        <main>
          <Hero />
          <Projects />
          <Skills />
          <Contact />
        </main>
        <Footer darkMode={darkMode} onToggleTheme={toggleDarkMode} />
        <BackToTop />
      </div>
    </div>
  )
}

export default App
