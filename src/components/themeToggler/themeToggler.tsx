"client"

import cl from "./themeToggler.module.scss"
import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'

const ThemeToggler = () => {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()
  console.log(useTheme())

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted && !theme) {
    return null
  }

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark'
    setTheme('light')
    console.log("Changing theme to", newTheme)
  }


  return (
    <button className={cl.toggler} onClick={toggleTheme}>
      <div className={theme == "dark" ? cl.dark : cl.light}>
      </div>
    </button>
  )
}

export default ThemeToggler
