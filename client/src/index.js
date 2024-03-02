import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ReactDOM from "react-dom";
import Index from "./components/Index.jsx";
import Panel from "./components/Panel.jsx";
import Projects from "./components/Projects.jsx";
import About from "./components/About.jsx";
import Login from "./components/Login.jsx";
import 'react-slideshow-image/dist/styles.css'
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Index />,
  },
  {
    path: "/panel",
    element: <Panel/>
  },
  {
    path: "/projects",
    element: <Projects/>
  },
  {
    path: "/about",
    element: <About/>
  },
  {
    path: "/login",
    element: <Login/>
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
