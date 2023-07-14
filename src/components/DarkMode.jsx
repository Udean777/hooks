import { useEffect, useState } from "react";
import { FaSun, FaMoon } from "react-icons/fa6";

export default function DarkMode() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const isDarkMode = localStorage.getItem("darkmode") === "true";
    setDarkMode(isDarkMode);
    document.documentElement.classList.toggle("dark", isDarkMode);
  }, []);

  const Toggle = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    localStorage.setItem("darkmode", newDarkMode);
    document.documentElement.classList.toggle("dark", newDarkMode);
  };
  return (
    <div>
      <button onClick={Toggle}>
        {darkMode ? <FaSun size={25} /> : <FaMoon size={25} />}
      </button>
    </div>
  );
}
