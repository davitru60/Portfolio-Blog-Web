import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaSun, FaMoon } from "react-icons/fa";
import { useDarkMode } from "../../context/DarkModeContext";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { darkMode, toggleDarkMode } = useDarkMode();
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const ulStyles = "mt-4 space-y-2";
  let icon;

  if (darkMode) {
    icon = <FaSun className="h-6 w-6 text-yellow-500" />;
  } else {
    icon = <FaMoon className="h-6 w-6 text-black" />;
  }

  // Effect to close the menu when screen size changes
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false); // Close the menu on wider screens
      }
    };

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);
    return () => {
      // Cleanup the event listener on unmount
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Effect to close the menu when the route changes
  useEffect(() => {
    setIsOpen(false); // Close the menu when the route changes
  }, [location]);

  return (
    <nav className="fixed left-0 right-0 top-0 z-50 bg-white p-4 dark:bg-zinc-900">
      <div className="flex items-center justify-between md:justify-between">
        <div className="text-2xl font-bold text-black dark:text-white">
          Logo
        </div>
        <div className="hidden space-x-6 md:flex">
          <Link
            to="/"
            className="text-black transition duration-300 hover:text-gray-300 dark:text-white dark:hover:text-gray-400"
          >
            Inicio
          </Link>
          <Link
            to="/projects"
            className="text-black transition duration-300 hover:text-gray-300 dark:text-white dark:hover:text-gray-400"
          >
            Proyectos
          </Link>
          <Link
            to="/blog"
            className="text-black transition duration-300 hover:text-gray-300 dark:text-white dark:hover:text-gray-400"
          >
            Blog
          </Link>
          <Link
            to="/about"
            className="text-black transition duration-300 hover:text-gray-300 dark:text-white dark:hover:text-gray-400"
          >
            Sobre
          </Link>
        </div>
        <div className="flex items-center md:hidden">
          <button
            className="block text-black focus:outline-none dark:text-white"
            onClick={toggleMenu}
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
          <button
            onClick={toggleDarkMode}
            className="ml-4 text-black focus:outline-none dark:text-white"
          >
            {icon}
          </button>
        </div>
        <div className="hidden items-center md:flex">
          <button
            onClick={toggleDarkMode}
            className="ml-4 text-black focus:outline-none dark:text-white"
          >
            {icon}
          </button>
        </div>
      </div>

      {/* Menú hamburguesa */}
      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out md:hidden ${
          isOpen ? "max-h-screen" : "max-h-0"
        }`}
      >
        <ul
          className={`flex flex-col items-center justify-center ${ulStyles} space-y-4`}
        >
          <li>
            <Link
              to="/"
              className="text-lg text-black transition duration-300 hover:text-gray-300 dark:text-white dark:hover:text-gray-400"
            >
              Inicio
            </Link>
          </li>
          <li>
            <Link
              to="/projects"
              className="text-lg text-black transition duration-300 hover:text-gray-300 dark:text-white dark:hover:text-gray-400"
            >
              Proyectos
            </Link>
          </li>
          <li>
            <Link
              to="/blog"
              className="text-lg text-black transition duration-300 hover:text-gray-300 dark:text-white dark:hover:text-gray-400"
            >
              Blog
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="text-lg text-black transition duration-300 hover:text-gray-300 dark:text-white dark:hover:text-gray-400"
            >
              Sobre
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export { Navbar };
