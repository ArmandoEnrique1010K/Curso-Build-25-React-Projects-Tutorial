import { useFeatureFlag } from "../hooks/useFeatureFlag";
import { FeatureFlagContext } from "./FeatureFlagContext";

export function FeatureFlagProvider({ children }) {
  const { loading, enabledFlags } = useFeatureFlag();

  return (
    <FeatureFlagContext.Provider value={{ loading, enabledFlags }}>
      {children}
    </FeatureFlagContext.Provider>
  );
}

export default FeatureFlagProvider;
