import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import CustomModalPopUp from "./CustomModalPopUp.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CustomModalPopUp />
  </StrictMode>
);
