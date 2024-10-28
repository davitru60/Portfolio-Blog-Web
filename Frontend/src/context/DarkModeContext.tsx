import { createContext, useContext, useEffect, useState, ReactNode } from 'react';

// Definir los tipos para el contexto
interface DarkModeContextType {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

// Crear el contexto con un valor predeterminado
const DarkModeContext = createContext<DarkModeContextType | undefined>(undefined);

// Proveedor del contexto
export const DarkModeProvider = ({ children }: { children: ReactNode }) => {
  const [darkMode, setDarkMode] = useState<boolean>(false);

  // Cargar la preferencia de modo oscuro desde localStorage
  useEffect(() => {
    // Aplicar la clase al body según el modo
    if (darkMode) {
      document.body.classList.add('bg-zinc-900', 'text-white');
      document.body.classList.remove('bg-white', 'text-black');
    } else {
      document.body.classList.add('bg-white', 'text-black');
      document.body.classList.remove('bg-zinc-900', 'text-white');
    }
  }, [darkMode]);

  // Guardar la preferencia de modo oscuro en localStorage
  useEffect(() => {
    localStorage.setItem('darkMode', String(darkMode));
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev);
  };

  return (
    <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
};

// Custom hook para usar el contexto
// eslint-disable-next-line react-refresh/only-export-components
export const useDarkMode = () => {
  const context = useContext(DarkModeContext);
  if (!context) {
    throw new Error('useDarkMode must be used within a DarkModeProvider');
  }
  return context;
};
