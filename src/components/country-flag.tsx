"use client";

import { useEffect, useState } from "react";

export const CountryFlag = ({ code }: { code: string }) => {
  const [useFallback, setUseFallback] = useState(false);

  useEffect(() => {
    let isMounted = true;

    const testImage = new Image();

    testImage.onload = () => {
      if (isMounted) setUseFallback(false);
    };
    testImage.onerror = () => {
      if (isMounted) setUseFallback(true);
    };
    testImage.src = `https://flagcdn.com/${code.toLowerCase()}.svg`;

    return () => {
      isMounted = false;
      testImage.onload = null;
      testImage.onerror = null;
    };
  }, [code]);

  if (useFallback) {
    return (
      <div className="flex h-4 w-6 items-center justify-center bg-gray-100 text-xs font-semibold">
        {code.toUpperCase()}
      </div>
    );
  }

  return (
    <div className="h-4 w-6 overflow-hidden">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={`https://flagcdn.com/${code.toLowerCase()}.svg`}
        alt={`${code} flag`}
        className="h-full w-full object-cover"
        onError={() => setUseFallback(true)}
      />
    </div>
  );
};
