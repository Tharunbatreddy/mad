import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import ContactMe from "./Components/ContactMe.jsx";
import Games from "./Components/Games/Games.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/ContactMe" element={<ContactMe />} />
        <Route path="/Games" element={<Games />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
