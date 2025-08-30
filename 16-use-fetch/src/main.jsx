import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import UseFetchHookTest from "./UseFetchHookTest";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <UseFetchHookTest />
  </StrictMode>
);
