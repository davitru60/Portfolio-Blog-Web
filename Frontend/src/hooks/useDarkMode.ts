import { useEffect, useState } from "react";

export const useDarkMode = () => {
  const [theme, setTheme] = useState(()=>{
    // Detectar la preferencia del sistema en el cliente (navegador)
    if(window.matchMedia('(prefers-color-scheme: dark)').matches){
      return "dark"
    }
    return "light"
  });

  useEffect(() => {
    if (theme == "dark") {
      document.querySelector("html")?.classList.add("dark");
    } else {
      document.querySelector("html")?.classList.remove("dark");
    }
  }, [theme]);

  const toggleDarkMode = () => {
    setTheme(prevTheme => prevTheme == "light" ? "dark" : "light");
  };

  return { theme, toggleDarkMode };
};
