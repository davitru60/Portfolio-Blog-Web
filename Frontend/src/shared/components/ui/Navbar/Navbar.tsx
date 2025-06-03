import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaSun, FaMoon } from "react-icons/fa";
import { useDarkMode } from "../../../../hooks/useDarkMode";
import Hamburger from "hamburger-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleDarkMode } = useDarkMode();
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const ulStyles = "mt-4 space-y-2";
  let icon;

  if (theme == "dark") {
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
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Effect to close the menu when the route changes
  useEffect(() => {
    setIsOpen(false); // Close the menu when the route changes
  }, [location]);

  const links = [
    { path: "/", label: "Inicio" },
    { path: "/projects", label: "Proyectos" },
    { path: "/blog", label: "Blog" },
    { path: "/about", label: "Sobre" },
  ];

  const menuClasses = `overflow-hidden transition-all duration-500 ease-in-out md:hidden ${isOpen ? " max-h-screen" : "max-h-0"}`;

  return (
    <nav className="fixed left-0 right-0 top-0 z-50 bg-white bg-opacity-60 p-4 py-5 backdrop-blur-md dark:bg-black dark:bg-opacity-60 dark:backdrop-blur-md">
      <div className="flex items-center justify-end md:justify-center">
        <div className="hidden space-x-6 md:flex">
          {links.map(({ path, label }) => {
            const isActive = location.pathname === path;
            const linkClasses = `text-lg font-medium transition duration-300 ${isActive ? "text-blue-500 dark:text-blue-400" : "text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"}`;
            return (
              <Link key={path} to={path} className={linkClasses}>
                {label}
              </Link>
            );
          })}
        </div>
        <div className="flex items-center md:hidden">
          <Hamburger toggle={toggleMenu} toggled={isOpen} size={20}></Hamburger>
          
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
      <div className={menuClasses}>
        <ul
          className={`flex flex-col items-center justify-center ${ulStyles} space-y-4`}
        >
          {links.map(({ path, label }) => {
            const isActive = location.pathname === path;
            const linkClasses = `text-lg text-black transition duration-300 dark:text-white dark:hover:text-gray-400 ${isActive ? "text-blue-500 dark:text-blue-400" : "text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"}`;
            return (
              <Link key={path} to={path} className={linkClasses}>
                {label}
              </Link>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export { Navbar };
