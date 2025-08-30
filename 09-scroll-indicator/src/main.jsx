import { createRoot } from "react-dom/client";
import ScrollIndicator from "./ScrollIndicator.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <ScrollIndicator url={"https://dummyjson.com/products?limit=100"} />
);
