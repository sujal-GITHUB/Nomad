import React, { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { motion } from "framer-motion";

const DarkModeToggle: React.FC = () => {
  const [darkMode, setDarkMode] = useState<boolean>(false);

  useEffect(() => {
    // Check localStorage or system preference on page load
    const isDark =
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches);

    setDarkMode(isDark);
    document.documentElement.classList.toggle("dark", isDark);
  }, []);

  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    document.documentElement.classList.toggle("dark", newMode);
    localStorage.theme = newMode ? "dark" : "light";
  };

  return (
    <motion.button
      onClick={toggleDarkMode}
      className="cursor-pointer rounded-full transition-all duration-300"
      aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
      initial={{ scale: 1 }}
      whileHover={{ scale: 1.1, transition: { duration: 0.2, ease: "easeOut" } }}
      whileTap={{ scale: 0.9, transition: { duration: 0.15, ease: "easeInOut" } }}
    >
      {darkMode ? <Sun size={22} className="text-indigo-600" /> : <Moon size={22} className="text-gray-900 dark:text-white" />}
    </motion.button>
  );
};

export default DarkModeToggle;
