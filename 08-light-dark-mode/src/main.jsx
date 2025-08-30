import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import LightDarkMode from "./LightDarkMode.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <LightDarkMode />
  </StrictMode>
);
