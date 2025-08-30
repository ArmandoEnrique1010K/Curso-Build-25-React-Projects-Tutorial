import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import SearchAutocompleteWithApi from "./SearchAutocompleteWithApi.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <SearchAutocompleteWithApi />
  </StrictMode>
);
