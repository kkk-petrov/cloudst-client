"use client"

import cl from "./themeToggler.module.scss"
import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'

const ThemeToggler = () => {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark'
    setTheme(newTheme)
    console.log("Changing theme to", newTheme)
    console.log(theme)
  }


  return (
    <button className={cl.toggler} onClick={toggleTheme}>
      <div className={theme == "dark" ? cl.dark : cl.light}>
      </div>
    </button>
  )
}

export default ThemeToggler
