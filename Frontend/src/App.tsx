import { useEffect } from "react";
import { Route, Routes, ScrollRestoration, useLocation } from "react-router-dom";
import "./App.css";
import { AboutPage } from "./pages/About/AboutPage";
import { PostContent } from "./pages/Blog/BlogContentful/PostContent";
import { BlogListTest } from "./pages/Blog/BlogHashnode/BlogListTest";
import { HomePage } from "./pages/Home/HomePage";
import { ProjectContent } from "./pages/Projects/ProjectContent";
import { ProjectsPage } from "./pages/Projects/ProjectsPage";
import { Footer } from "./shared/components/layout/Footer/Footer";
import { Navbar } from "./shared/components/ui/Navbar/Navbar";
import { BlogPageTest } from "./pages/Blog/BlogContentful/BlogPageTest";
import { HashnodePostContent } from "./pages/Blog/BlogHashnode/HashnodePostContent";
import { BlogList } from "./pages/Blog/BlogHashnode/BlogList";


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
