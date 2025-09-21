import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("home");

  // Active section scroll detection
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "projects", "contact"];
      const scrollY = window.scrollY + 150;

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
    <nav className="fixed w-[90%] left-1/2 -translate-x-1/2 top-6 px-6 py-3 flex justify-between items-center 
      bg-purple-900/50 backdrop-blur-md rounded-3xl shadow-xl z-50 border border-purple-700">
      
      {/* Logo */}
      <h1 className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400">
        Sahdev Puran
      </h1>

      {/* Desktop Menu */}
      <ul className="hidden md:flex gap-8 font-medium">
        {["home", "about", "projects", "contact"].map((item) => (
          <li key={item}>
            <a
              href={`#${item}`}
              className={`relative transition-all duration-300 ${
                active === item ? "text-pink-400" : "text-gray-300"
              } hover:text-pink-400`}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
              <span
                className={`absolute left-0 -bottom-1 w-full h-0.5 bg-pink-400 transform origin-left transition-transform duration-300 ${
                  active === item ? "scale-x-100" : "scale-x-0"
                }`}
              ></span>
            </a>
          </li>
        ))}
      </ul>

      {/* Mobile Menu Button */}
      <button className="md:hidden text-gray-300 hover:text-pink-400 transition" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-purple-900/90 backdrop-blur-md border-t border-purple-700 shadow-lg md:hidden">
          <ul className="flex flex-col items-center gap-6 py-6 font-medium">
            {["home", "about", "projects", "contact"].map((item) => (
              <li key={item}>
                <a
                  href={`#${item}`}
                  onClick={() => setIsOpen(false)}
                  className={`text-lg transition duration-300 ${
                    active === item ? "text-pink-400" : "text-gray-300"
                  } hover:text-pink-400`}
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
