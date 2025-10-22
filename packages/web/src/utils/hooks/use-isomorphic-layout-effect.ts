import { useEffect, useLayoutEffect } from "react";

export const useIsomorphicLayoutEffect: (
  effect: React.EffectCallback,
  deps?: React.DependencyList,
) => void = typeof window !== "undefined" ? useLayoutEffect : useEffect;
