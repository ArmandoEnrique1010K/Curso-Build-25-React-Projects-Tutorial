import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import FeatureFlags from "./FeatureFlags.jsx";
import { FeatureFlagProvider } from "./context/FeatureFlagProvider";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <FeatureFlagProvider>
      <FeatureFlags />
    </FeatureFlagProvider>
  </StrictMode>
);
