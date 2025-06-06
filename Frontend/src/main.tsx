import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider} from "react-router-dom";
import App from "./App";
import "./index.css";
import "./shared/config/i18n"

const router = createBrowserRouter([
  {
    path: "/*",
    element: <App />,
  },
]);



createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} /> 
    
  </StrictMode>
);
