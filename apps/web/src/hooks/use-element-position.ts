"use client";

import { useEffect, useState } from "react";

type Position = {
  x: number;
  y: number;
};

export namespace UseElementPosition {
  export type Options = {
    initial?: Position;
    relativeTo?: "viewport" | "parent";
  };
}

export const useElementPosition = (
  ref: React.RefObject<HTMLElement | null>,
  {
    initial = {
      x: 0,
      y: 0,
    },
    relativeTo = "parent",
  }: UseElementPosition.Options = {},
) => {
  const [position, setPosition] = useState<Position>(initial);

  useEffect(() => {
    if (!ref.current) return;
    setPosition({
      x:
        relativeTo === "parent"
          ? ref.current.offsetLeft
          : ref.current.getBoundingClientRect().x,
      y:
        relativeTo === "parent"
          ? ref.current.offsetTop
          : window.scrollY + ref.current.getBoundingClientRect().y,
    });
  }, [relativeTo, ref.current]);

  return position;
};
