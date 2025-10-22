/** biome-ignore-all lint/correctness/useExhaustiveDependencies: it's a ref */
import { type RefObject, useCallback, useLayoutEffect, useState } from "react";

export type Dimensions = {
  width: number;
  height: number;
};

export const useElementDimensions = (ref: RefObject<HTMLElement | null>) => {
  const [dimensions, setDimensions] = useState<Dimensions | null>(null);

  const handleDimensions = useCallback(() => {
    const element = ref.current;
    if (!element) return;

    const bbox = element.getBoundingClientRect();
    setDimensions({ width: bbox.width, height: bbox.height });
  }, []);

  useLayoutEffect(() => {
    if (!ref.current) return;

    const element = ref.current;

    handleDimensions();
    const observer = new ResizeObserver(handleDimensions);

    observer.observe(element);

    return () => observer.disconnect();
  }, [handleDimensions]);

  return dimensions;
};
