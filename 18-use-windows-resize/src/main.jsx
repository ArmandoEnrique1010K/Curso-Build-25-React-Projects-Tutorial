import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import UseWindowResizeTest from "./UseWindowResizeTest.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <UseWindowResizeTest />
  </StrictMode>
);
