import { useEffect, useState } from "react";

export function useCurrentUrl() {
  const [currentUrl, setCurrentUrl] = useState<string>("/");

  const pathname =
    typeof window !== "undefined" ? window.location.pathname : "";

  useEffect(() => {
    if (typeof window !== "undefined") {
      setCurrentUrl(window.location.href);
    }
  }, [pathname]);

  return currentUrl;
}
