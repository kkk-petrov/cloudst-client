import cl from "./ThemeToggler.module.scss";
import { useTheme } from "@/context/ThemeContext";

const ThemeToggler = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button className={cl.toggler} onClick={toggleTheme}>
      <div className={theme === "dark" ? cl.dark : cl.light} />
    </button>
  );
};

export default ThemeToggler;
