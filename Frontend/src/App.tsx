import { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Navbar } from './components/Navbar/Navbar';
import { Home } from './pages/Home/Home';
import { DarkModeProvider, useDarkMode } from './context/DarkModeContext';
import { Blog } from './pages/Blog/Blog';
import { Post } from './pages/Post/Post';
import { About } from './pages/About/About';

const AppContent = () => {
  const { darkMode } = useDarkMode();

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<Post />} />
        <Route path="/about" element={<About />} />
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
