import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Accordian from "./Accordian";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Accordian />
  </StrictMode>
);
