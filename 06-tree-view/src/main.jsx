import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import TreeView from "./TreeView.jsx";
import { menus } from "./data/menus";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <TreeView menus={menus} />
  </StrictMode>
);
