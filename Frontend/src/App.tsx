import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Navbar } from "./components/Navbar/Navbar";
import { HomePage } from "./pages/Home/HomePage";
import { BlogPage } from "./pages/Blog/BlogPage";
import { PostContent } from "./pages/Blog/PostContent";
import { AboutPage } from "./pages/About/AboutPage";
import { ProjectPage } from "./pages/Projects/ProjectPage";
import { ProjectContent } from "./pages/Projects/ProjectContent";


const AppContent = () => {
  return (
    <div className="min-h-screen bg-white text-black dark:bg-black dark:text-white">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects" element={<ProjectPage />} />
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
