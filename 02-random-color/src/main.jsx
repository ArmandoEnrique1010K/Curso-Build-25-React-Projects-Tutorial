import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

// Punto de entrada a la aplicación
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
