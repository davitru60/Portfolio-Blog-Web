import { useContext } from "react";
import { BlogContext } from "../context/BlogContext";

const useBlog = () =>{
    const context = useContext(BlogContext);
    if (!context) {
      throw new Error("useBlog debe usarse dentro de un BlogProvider");
    }
    return context;
}

export {useBlog}