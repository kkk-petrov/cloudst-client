import { createContext, useContext, useEffect, useState } from "react";

interface IThemeContext {
  theme: "light" | "dark";
  defaultDark: boolean;
  setDark: () => void;
  setLight: () => void;
  toggleTheme: () => void;
}

interface Props {
  children: React.ReactNode;
}

const ThemeContext = createContext<IThemeContext>({
  theme: "dark",
  defaultDark: true,
  setDark: () => { },
  setLight: () => { },
  toggleTheme: () => { },
});

export const ThemeProvider = ({ children }: Props) => {
  const storedTheme = localStorage.getItem("theme");
  const prefersDark = window.matchMedia?.(
    "(prefers-color-scheme: dark)",
  ).matches;
  const defaultDark =
    storedTheme === "dark" || (storedTheme === null && prefersDark);

  const [theme, setTheme] = useState<"light" | "dark">(
    defaultDark ? "dark" : "light",
  );

  const setDark = () => {
    localStorage.setItem("theme", "dark");
    document.documentElement.setAttribute("data-theme", "dark");
    setTheme("dark");
  };

  const setLight = () => {
    localStorage.setItem("theme", "light");
    document.documentElement.setAttribute("data-theme", "light");
    setTheme("light");
  };

  const toggleTheme = () => {
    if (theme === "dark") {
      setLight();
    } else {
      setDark();
    }
  };

  useEffect(() => {
    console.log(defaultDark, theme);
    if (defaultDark) {
      setDark();
    }
  }, [defaultDark]);

  return (
    <ThemeContext.Provider
      value={{ theme, defaultDark, setDark, setLight, toggleTheme }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
