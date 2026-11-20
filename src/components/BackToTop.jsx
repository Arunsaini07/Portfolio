import { useState, useEffect } from 'react'

const BackToTop = () => {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  if (!visible) return null

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="Back to top"
      className="fixed bottom-6 right-6 z-40 w-11 h-11 rounded-lg bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-950 border border-zinc-700 dark:border-zinc-300 shadow-lg hover:bg-copper-600 dark:hover:bg-copper-400 transition-colors duration-150 flex items-center justify-center text-sm font-bold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-copper-500"
    >
      ↑
    </button>
  )
}

export default BackToTop
