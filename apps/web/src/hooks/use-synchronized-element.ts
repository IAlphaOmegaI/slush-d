"use client";

import { useEffect, useRef, useState } from "react";
import { useViewportTracker } from "./use-viewport-tracker";

export namespace UseSynchronizedElement {
  export type Options = {
    // Offset to apply to the synchronized element's position
    offset?: { x?: number; y?: number };
    // Whether to sync X position as well (defaults to false, only Y)
    syncX?: boolean;
    // Custom positioning logic
    transform?: (position: { x: number; y: number; isVisible: boolean }) => {
      x: number;
      y: number;
    };
    // Viewport tracker options
    trackerOptions?: Parameters<typeof useViewportTracker>[1];
  };

  export type SynchronizedElementData<
    TSource extends HTMLElement = HTMLElement,
    TSync extends HTMLElement = HTMLElement,
  > = {
    // Position for the synchronized element
    position: { x: number; y: number };
    // Whether the source element is visible
    isVisible: boolean;
    // Visibility ratio of the source element
    visibilityRatio: number;
    // Ref for the source element (the one being tracked)
    sourceRef: React.RefObject<TSource | null>;
    // Ref for the synchronized element (the one that follows)
    syncRef: React.RefObject<TSync | null>;
  };
}

export const useSynchronizedElement = <
  TSource extends HTMLElement = HTMLElement,
  TSync extends HTMLElement = HTMLElement,
>(
  options: UseSynchronizedElement.Options = {},
): UseSynchronizedElement.SynchronizedElementData<TSource, TSync> => {
  const {
    offset = { x: 0, y: 0 },
    syncX = false,
    transform,
    trackerOptions = {},
  } = options;

  const sourceRef = useRef<TSource>(null);
  const syncRef = useRef<TSync>(null);

  // Track the source element's position and visibility
  const tracked = useViewportTracker(sourceRef, trackerOptions);

  const [syncPosition, setSyncPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (!tracked.isVisible) return;

    let newPosition = {
      x: syncX ? tracked.x + (offset.x || 0) : 0,
      y: tracked.y + (offset.y || 0),
    };

    // Apply custom transform if provided
    if (transform) {
      newPosition = transform({
        x: tracked.x,
        y: tracked.y,
        isVisible: tracked.isVisible,
      });
    }

    setSyncPosition(newPosition);
  }, [tracked, offset, syncX, transform]);

  return {
    position: syncPosition,
    isVisible: tracked.isVisible,
    visibilityRatio: tracked.visibilityRatio,
    sourceRef,
    syncRef,
  };
};
