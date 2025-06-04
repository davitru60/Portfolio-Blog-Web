import { useEffect } from "react";
import { Route, Routes, ScrollRestoration, useLocation } from "react-router-dom";
import "./App.css";
import { AboutPage } from "./pages/About/AboutPage";
import { BlogList } from "./pages/Blog/BlogHashnode/BlogList";
import { HashnodePostContent } from "./pages/Blog/BlogHashnode/HashnodePostContent";
import { HomePage } from "./pages/Home/HomePage";
import { ProjectContent } from "./pages/Projects/ProjectContent";
import { ProjectsPage } from "./pages/Projects/ProjectsPage";
import { Footer } from "./shared/components/layout/Footer/Footer";
import { Navbar } from "./shared/components/ui/Navbar/Navbar";


const usePageTitle = () => {
  const location = useLocation();

  useEffect(() => {
    const pathName = location.pathname.split("/")[1] || "Home";
    document.title = `${pathName.charAt(0).toUpperCase() + pathName.slice(1)} - David Trujillo`;
  }, [location]);

  return null;

};



const App = () => {
  usePageTitle(); 


  return (
    <div className="min-h-screen bg-white text-black dark:bg-black dark:text-white">
      <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/projects/:slug" element={<ProjectContent />} />
          <Route path="/blog" element={<BlogList />} />
          <Route path="/blog/:slug" element={<HashnodePostContent />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
        <ScrollRestoration />
      <Footer />
    </div>
  );
};

export default App;
