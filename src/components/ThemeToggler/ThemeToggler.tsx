import { useEffect, useState } from 'react'
import cl from "./ThemeToggler.module.scss"

const ThemeToggler = () => {
  const storedTheme = localStorage.getItem("theme");
  const prefersDark = window.matchMedia?.("(prefers-color-scheme: dark)").matches;
  const defaultDark = storedTheme === "dark" || (storedTheme === null && prefersDark);

  const [theme, setTheme] = useState(defaultDark ? "dark" : "light");

  const setDark = () => {
    localStorage.setItem("theme", "dark");
    document.documentElement.setAttribute("data-theme", "dark");
    setTheme("dark");
  }

  const setLight = () => {
    localStorage.setItem("theme", "light");
    document.documentElement.setAttribute("data-theme", "light");
    setTheme("light");
  }

  const toggleTheme = () => {
    if (theme === "dark") {
      setLight();
    } else {
      setDark();
    }
  };

  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  useEffect(() => {
    if (defaultDark) {
      setDark();
    }
  }, [defaultDark]);

  return (
    <button className={cl.toggler} onClick={toggleTheme}>
      <div className={theme === "dark" ? cl.dark : cl.light} />
    </button>
  );
}

export default ThemeToggler;
