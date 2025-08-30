import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import RandomColor from "./RandomColor";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RandomColor />
  </StrictMode>
);
