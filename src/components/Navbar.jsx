import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react"; // 

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("home");

  // Scroll detection for active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "projects", "contact"];
      const scrollY = window.scrollY + 100;

      sections.forEach((id) => {
        const section = document.getElementById(id);
        if (section && scrollY >= section.offsetTop && scrollY < section.offsetTop + section.offsetHeight) {
          setActive(id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed w-full top-0 px-6 md:px-12 py-4 flex justify-between items-center 
      bg-gray-900/60 backdrop-blur-md shadow-lg z-50 border-b border-gray-700">
      
      {/* Logo */}
      <h1 className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
        Portfolio
      </h1>

      {/* Desktop Menu */}
      <ul className="hidden md:flex gap-8 font-medium">
        {["home", "about", "projects", "contact"].map((item) => (
          <li key={item}>
            <a
              href={`#${item}`}
              className={`relative transition duration-300 ${
                active === item ? "text-blue-400" : "text-gray-300"
              } hover:text-blue-400`}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
              {/* underline animation */}
              <span
                className={`absolute left-0 -bottom-1 w-full h-0.5 bg-blue-400 transform origin-left transition-transform duration-300 ${
                  active === item ? "scale-x-100" : "scale-x-0"
                }`}
              ></span>
            </a>
          </li>
        ))}
      </ul>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-gray-300 hover:text-blue-400 transition"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-gray-900/95 backdrop-blur-md border-t border-gray-700 shadow-lg md:hidden">
          <ul className="flex flex-col items-center gap-6 py-6 font-medium">
            {["home", "about", "projects", "contact"].map((item) => (
              <li key={item}>
                <a
                  href={`#${item}`}
                  onClick={() => setIsOpen(false)}
                  className={`text-lg transition duration-300 ${
                    active === item ? "text-blue-400" : "text-gray-300"
                  } hover:text-blue-400`}
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
