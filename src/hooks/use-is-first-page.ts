import { useEffect, useState } from "react";

export function useIsFirstPage(): boolean {
  const [isFirstPage, setIsFirstPage] = useState<boolean>(false);

  useEffect(() => {
    setIsFirstPage(!document.referrer);
  }, []);

  return isFirstPage;
}
