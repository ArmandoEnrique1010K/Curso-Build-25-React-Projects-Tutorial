import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import FoodRecipeApp from "./FoodRecipeApp.jsx";
import { GlobalContext } from "./context/GlobalContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <GlobalContext>
        <FoodRecipeApp />
      </GlobalContext>
    </BrowserRouter>
  </StrictMode>
);
