import { useEffect, useState } from "react";
import { featureFlagsDataServiceCall } from "../services/featureFlagDataServiceCall";

export const useFeatureFlag = () => {
    const [loading, setLoading] = useState(false);
    const [enabledFlags, setEnabledFlags] = useState({});
  
    async function fetchFeatureFlags() {
      try {
        setLoading(true);
        //original service call
        const response = await featureFlagsDataServiceCall();
        setEnabledFlags(response);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
        throw new Error(error);
      }
    }
  
    useEffect(() => {
      fetchFeatureFlags();
    }, []);

    return {
        loading,
        enabledFlags
    }
};