"use client";

import { cn } from "@zenncore/utils";
import {
  type UseInViewOptions,
  type UseScrollOptions,
  useInView,
  useScroll,
} from "motion/react";
import { createContext, type RefObject, useContext, useRef } from "react";
import { useElementDimensions } from "@/hooks/use-element-dimensions";

export type ContainerContext = RefObject<HTMLDivElement | null> | null;
export const ContainerContext = createContext<ContainerContext>(null);

export const ContainerProvider = ({
  children,
  className,
}: ContainerProvider.Props) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const dimensions = useElementDimensions(ref);

  return (
    <ContainerContext.Provider value={ref}>
      <div
        ref={ref}
        className={cn(
          "no-scrollbar relative overflow-y-auto overflow-x-hidden",
          className,
        )}
        id="container"
        style={
          {
            "--container-height": `${dimensions?.height}px`,
            "--container-width": `${dimensions?.width}px`,
          } as React.CSSProperties
        }
      >
        {children}
      </div>
    </ContainerContext.Provider>
  );
};

export namespace ContainerProvider {
  export type Props = {
    children: React.ReactNode;
    className?: string;
  };
}

export const useContainer = () => {
  const container = useContext(ContainerContext);
  if (!container) throw new Error("Container not found");

  return container;
};

export const useContainedScroll = (props: UseScrollOptions) => {
  const container = useContainer();

  return useScroll({ container, ...props });
};

export const useContainedInView = (
  ref: RefObject<Element | null>,
  props: UseInViewOptions,
) => {
  const container = useContainer();

  return useInView(ref, { root: container, ...props });
};
