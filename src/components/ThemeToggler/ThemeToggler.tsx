import cl from "./ThemeToggler.module.scss"
import { useState, useEffect } from 'react'

const ThemeToggler = () => {
  const [mounted, setMounted] = useState(false)
  const [theme, setTheme] = useState("dark" || "light")

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  const toggleTheme = () => {
    console.log(theme)
    const newTheme = theme === 'dark' ? 'light' : 'dark'
    console.log(newTheme)
    setTheme(newTheme)
  }


  return (
    <button className={cl.toggler} onClick={toggleTheme}>
      <div className={theme === "dark" ? cl.dark : cl.light}>
      </div>
    </button>
  )
}

export default ThemeToggler
