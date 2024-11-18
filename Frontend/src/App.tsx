import { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Navbar } from './components/Navbar/Navbar';
import { HomePage } from './pages/Home/HomePage';
import { DarkModeProvider, useDarkMode } from './context/DarkModeContext';
import { BlogPage } from './pages/Blog/BlogPage';
import { PostContent } from './pages/Blog/PostContent';
import { About } from './pages/About/About';
import { ProjectPage } from './pages/Projects/ProjectPage';
import { ProjectContent } from './pages/Projects/ProjectContent';

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
        <Route path="/" element={<HomePage />} />
        <Route path="/projects" element={<ProjectPage/>} />
        <Route path="/projects/:slug" element={<ProjectContent/>} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/:slug" element={<PostContent />} />
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
