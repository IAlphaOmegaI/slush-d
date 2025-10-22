import { useEffect, useState } from "react";

export const useMediaQuery = (query: string): boolean => {
  const [value, setValue] = useState(false);

  useEffect(() => {
    // Check if we're in a browser environment
    if (typeof window === "undefined" || !window.matchMedia) {
      return;
    }

    const onChange = (event: MediaQueryListEvent) => setValue(event.matches);

    const result = window.matchMedia(query);
    result.addEventListener("change", onChange);
    setValue(result.matches);

    return () => result.removeEventListener("change", onChange);
  }, [query]);

  return value;
};
