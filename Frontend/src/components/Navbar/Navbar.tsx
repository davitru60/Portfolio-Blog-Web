import { useState } from "react";
import { Link } from "react-router-dom";
import { FaSun, FaMoon } from "react-icons/fa"; 
import { useDarkMode } from "../../context/DarkModeContext";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { darkMode, toggleDarkMode } = useDarkMode(); 

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const ulStyles = "mt-4 space-y-2";
  let icon;

  // Determine which icon to show based on darkMode state
  if (darkMode) {
    icon = <FaSun className="w-6 h-6 text-yellow-500" />;
  } else {
    icon = <FaMoon className="w-6 h-6 text-black" />;
  }

  return (
    <nav className="p-4 shadow-md bg-white dark:bg-black">
      <div className="flex justify-between items-center">
        <div className="text-2xl font-bold text-black dark:text-white">
          Logo
        </div>
        <button
          className="block md:hidden text-black dark:text-white focus:outline-none"
          onClick={toggleMenu}
        >
          <svg
            className="w-6 h-6"
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
        <ul className="hidden md:flex space-x-6">
          <li>
            <Link to="/" className="text-black dark:text-white hover:text-gray-300 dark:hover:text-gray-400 transition duration-300">
              Inicio
            </Link>
          </li>
          <li>
            <Link to="/projects" className="text-black dark:text-white hover:text-gray-300 dark:hover:text-gray-400 transition duration-300">
              Proyectos
            </Link>
          </li>
          <li>
            <Link to="/blog" className="text-black dark:text-white hover:text-gray-300 dark:hover:text-gray-400 transition duration-300">
              Blog
            </Link>
          </li>
          <li>
            <Link to="/about" className="text-black dark:text-white hover:text-gray-300 dark:hover:text-gray-400 transition duration-300">
              Sobre
            </Link>
          </li>
        </ul>
        <button
          onClick={toggleDarkMode}
          className="ml-4 focus:outline-none text-black dark:text-white"
        >
          {icon}
        </button>
      </div>
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? "max-h-40" : "max-h-0"}`}
      >
        <ul className={ulStyles}>
          <li>
            <Link to="/" className="text-black dark:text-white hover:text-gray-300 dark:hover:text-gray-400 transition duration-300">
              Inicio
            </Link>
          </li>
          <li>
            <Link to="/projects" className="text-black dark:text-white hover:text-gray-300 dark:hover:text-gray-400 transition duration-300">
              Proyectos
            </Link>
          </li>
          <li>
            <Link to="/blog" className="text-black dark:text-white hover:text-gray-300 dark:hover:text-gray-400 transition duration-300">
              Blog
            </Link>
          </li>
          <li>
            <Link to="/about" className="text-black dark:text-white hover:text-gray-300 dark:hover:text-gray-400 transition duration-300">
              Sobre
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export { Navbar };
