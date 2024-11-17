import { createContext, useContext, useEffect, useState, ReactNode } from 'react';

// Definir el tipo para el contexto
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
    const storedDarkMode = localStorage.getItem('darkMode');
    if (storedDarkMode) {
      setDarkMode(JSON.parse(storedDarkMode));
    }
  }, []);

  // Aplicar el modo oscuro al body y guardar la preferencia
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
  }, [darkMode]);

  const toggleDarkMode = () => setDarkMode(prev => !prev);

  return (
    <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
};

// Custom hook para usar el contexto
export const useDarkMode = () => {
  const context = useContext(DarkModeContext);
  if (!context) {
    throw new Error('useDarkMode must be used within a DarkModeProvider');
  }
  return context;
};
