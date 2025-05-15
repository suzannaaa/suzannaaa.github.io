import { useState, useEffect } from "react";

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(() =>
    localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <nav className="bg-peach/60 dark:bg-gray-800 text-gray-800 dark:text-white shadow sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <h1 className="font-bold text-xl text-pink-500">Suzanna</h1>
        <div className="space-x-4 text-sm font-medium">
          <a href="#projects" className="hover:text-pink-500">Projects</a>
          <a href="#certifications" className="hover:text-pink-500">Certifications</a>
          {/* <a href="#contact" className="hover:text-pink-500">Contact</a> */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="bg-pink-100 dark:bg-gray-700 px-3 py-1 rounded hover:bg-pink-200"
          >
            {darkMode ? "☀️ Light" : "🌙 Dark"}
          </button>
        </div>
      </div>
    </nav>
  );
}