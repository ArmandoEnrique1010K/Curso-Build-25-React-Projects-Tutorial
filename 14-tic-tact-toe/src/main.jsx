import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import TicTacToe from "./TicTacToe.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <TicTacToe />
  </StrictMode>
);
