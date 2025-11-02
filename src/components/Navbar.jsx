import { useState, useEffect } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("home");

  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "dark"
  );

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "projects", "contact"];
      const scrollY = window.scrollY + 150;

      sections.forEach((id) => {
        const section = document.getElementById(id);
        if (
          section &&
          scrollY >= section.offsetTop &&
          scrollY < section.offsetTop + section.offsetHeight
        ) {
          setActive(id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className="fixed w-[90%] left-1/2 -translate-x-1/2 top-6 px-4 sm:px-6 py-3 flex justify-between items-center 
      bg-white/50 dark:bg-blue-900/50 backdrop-blur-md rounded-3xl shadow-xl z-50 
      border border-gray-300 dark:border-blue-700 transition-colors duration-300"
    >
      <h1 className="flex items-center gap-2 text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-500">
      
        Sahdev Puran
      </h1>

      <div className="hidden md:flex items-center gap-8 font-medium">
        <ul className="flex gap-8">
          {["home", "about", "projects", "contact"].map((item) => (
            <li key={item}>
              <a
                href={`#${item}`}
                className={`relative transition-all duration-300 ${
                  active === item
                    ? "text-blue-500 dark:text-blue-400"
                    : "text-gray-700 dark:text-gray-300"
                } hover:text-blue-500 dark:hover:text-blue-400`}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
                <span
                  className={`absolute left-0 -bottom-1 w-full h-0.5 bg-blue-500 dark:bg-blue-400 transform origin-left transition-transform duration-300 ${
                    active === item ? "scale-x-100" : "scale-x-0"
                  }`}
                ></span>
              </a>
            </li>
          ))}
        </ul>

        <button
          onClick={handleThemeSwitch}
          className="p-2 rounded-full bg-gray-200 dark:bg-blue-800 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-blue-700 transition-colors"
        >
          {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
        </button>
      </div>

      <div className="flex md:hidden items-center gap-4">
        <button
          onClick={handleThemeSwitch}
          className="p-2 rounded-full bg-gray-200 dark:bg-blue-800 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-blue-700 transition-colors"
        >
          {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
        </button>

        <button
          className="text-gray-800 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div
          className="absolute top-16 left-0 w-full bg-white/90 dark:bg-blue-900/90 backdrop-blur-md 
          border-t border-gray-300 dark:border-blue-700 shadow-lg md:hidden"
        >
          <ul className="flex flex-col items-center gap-6 py-6 font-medium">
            {["home", "about", "projects", "contact"].map((item) => (
              <li key={item}>
                <a
                  href={`#${item}`}
                  onClick={() => setIsOpen(false)}
                  className={`text-lg transition duration-300 ${
                    active === item
                      ? "text-blue-500 dark:text-blue-400"
                      : "text-gray-700 dark:text-gray-300"
                  } hover:text-blue-500 dark:hover:text-blue-400`}
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
