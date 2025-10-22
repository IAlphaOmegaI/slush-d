"use client";

import { useCallback, useEffect, useRef, useState } from "react";

type ViewportPosition = {
  x: number;
  y: number;
  isVisible: boolean;
  visibilityRatio: number;
};

export namespace UseViewportTracker {
  export type Options = {
    // Threshold for when element is considered visible (0-1)
    threshold?: number | number[];
    // Root margin for intersection observer
    rootMargin?: string;
    // Root element for intersection observer (defaults to viewport)
    root?: Element | null;
    // Whether to track position continuously while visible
    trackPosition?: boolean;
  };
}

export const useViewportTracker = <T extends HTMLElement = HTMLElement>(
  ref: React.RefObject<T | null>,
  options: UseViewportTracker.Options = {},
) => {
  const {
    threshold = 0,
    rootMargin = "0px",
    root = null,
    trackPosition = true,
  } = options;

  const [position, setPosition] = useState<ViewportPosition>({
    x: 0,
    y: 0,
    isVisible: false,
    visibilityRatio: 0,
  });

  const observerRef = useRef<IntersectionObserver | null>(null);
  const rafRef = useRef<number | null>(null);

  const updatePosition = useCallback(() => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const scrollY = window.scrollY || document.documentElement.scrollTop;
    const scrollX = window.scrollX || document.documentElement.scrollLeft;

    setPosition((prev) => ({
      ...prev,
      x: rect.left + scrollX,
      y: rect.top + scrollY,
    }));
  }, [ref]);

  const startPositionTracking = useCallback(() => {
    if (!trackPosition) return;

    const track = () => {
      updatePosition();
      rafRef.current = requestAnimationFrame(track);
    };

    track();
  }, [updatePosition, trackPosition]);

  const stopPositionTracking = useCallback(() => {
    if (rafRef.current) {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
    }
  }, []);

  useEffect(() => {
    if (!ref.current) return;

    const element = ref.current;

    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const isVisible = entry.isIntersecting;
          const visibilityRatio = entry.intersectionRatio;

          setPosition((prev) => ({
            ...prev,
            isVisible,
            visibilityRatio,
          }));

          if (isVisible) {
            updatePosition();
            startPositionTracking();
          } else {
            stopPositionTracking();
          }
        });
      },
      {
        threshold,
        rootMargin,
        root,
      },
    );

    observerRef.current.observe(element);

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
      stopPositionTracking();
    };
  }, [
    ref,
    threshold,
    rootMargin,
    root,
    updatePosition,
    startPositionTracking,
    stopPositionTracking,
  ]);

  return position;
};
