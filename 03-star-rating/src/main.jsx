import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import StarRating from "./StarRating";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <StarRating noOfStars={10} />
  </StrictMode>
);
