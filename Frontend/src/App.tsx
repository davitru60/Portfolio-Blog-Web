import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { useEffect } from "react";
import "./App.css";
import { Navbar } from "./components/Navbar/Navbar";
import { HomePage } from "./pages/Home/HomePage";
import { BlogPage } from "./pages/Blog/BlogPage";
import { PostContent } from "./pages/Blog/PostContent";
import { AboutPage } from "./pages/About/AboutPage";
import { ProjectsPage } from "./pages/Projects/ProjectsPage";
import { ProjectContent } from "./pages/Projects/ProjectContent";

const AppContent = () => {
  const location = useLocation();

  // Restablecer scroll a la parte superior al cambiar de ruta
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div className="min-h-screen bg-white text-black dark:bg-black dark:text-white">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/projects/:slug" element={<ProjectContent />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/:slug" element={<PostContent />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </div>
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
};

export default App;
