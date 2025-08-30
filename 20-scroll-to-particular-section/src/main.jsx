import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import ScrollToSection from "./ScrollToSection.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ScrollToSection />
  </StrictMode>
);
