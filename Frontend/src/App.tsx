import { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Navbar } from './components/Navbar/Navbar';
import { Home } from './pages/Home/Home';
import { DarkModeProvider, useDarkMode } from './context/DarkModeContext';
import { Blog } from './pages/Blog/Blog';
import { Post } from './pages/Post/Post';




const AppContent = () => {
  const { darkMode } = useDarkMode();

  useEffect(() => {
    // Aplica o elimina la clase 'dark' en el <html> según el estado de darkMode
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog/>} />
        <Route path="/blog/:slug" element={<Post />} />
      </Routes>
    </div>
  );
};

const App = () => {
  return (
    <DarkModeProvider>
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </DarkModeProvider>
  );
};

export default App;  