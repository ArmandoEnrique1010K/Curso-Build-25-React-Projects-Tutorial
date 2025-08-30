import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import GithubProfileFinder from "./GithubProfileFinder.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <GithubProfileFinder />
  </StrictMode>
);
