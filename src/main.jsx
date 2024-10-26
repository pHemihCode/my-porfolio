import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Projects from "./pages/Projects.jsx";
import Services from "./pages/Services.jsx";
import Contact from "./pages/Contact.jsx";
import NavBar from "./components/NavBar";
import { AnimatePresence } from "framer-motion";
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<NavBar />}>
      <Route index element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/services" element={<Services />} />
      <Route path="/contact" element={<Contact />} />
    </Route>
  )
);
ReactDOM.createRoot(document.getElementById("root")).render(
  <AnimatePresence>
    <RouterProvider router={router}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </RouterProvider>
  </AnimatePresence>
);
