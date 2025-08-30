import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import ScrollToTopAndBottom from "./ScrollToTopAndBottom.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ScrollToTopAndBottom />
  </StrictMode>
);
