import { Tabs as TabsPrimitive } from "@base-ui-components/react/tabs";
import { cn } from "@zenncore/utils";
import type { ComponentProps, JSX } from "react";
import { resolveClassName } from "../utils/helpers/resolve-class-name";

export const Tabs = ({ className, ...props }: Tabs.Props): JSX.Element => {
  return (
    <TabsPrimitive.Root
      className={(state) => {
        return cn(
          "rounded-md border border-gray-200",
          resolveClassName(className, state),
        );
      }}
      {...props}
    />
  );
};
export namespace Tabs {
  export type Props = ComponentProps<typeof TabsPrimitive.Root>;
  export type State = TabsPrimitive.Root.State;
  export type Orientation = TabsPrimitive.Root.Orientation;
}

export const TabsList = ({
  className,
  ...props
}: TabsList.Props): JSX.Element => {
  return (
    <TabsPrimitive.List
      className={(state) => {
        return cn(
          "relative z-0 flex gap-1 px-1 shadow-[inset_0_-1px] shadow-gray-200",
          resolveClassName(className, state),
        );
      }}
      {...props}
    />
  );
};
export namespace TabsList {
  export type Props = ComponentProps<typeof TabsPrimitive.List>;
  export type State = TabsPrimitive.List.State;
}

export const Tab = ({ className, ...props }: Tab.Props): JSX.Element => {
  return (
    <TabsPrimitive.Tab
      className={(state) => {
        return cn(
          "before:-outline-offset-1 flex h-8 select-none items-center justify-center border-0 px-2 font-medium text-gray-600 text-sm outline-0 before:inset-x-0 before:inset-y-1 before:rounded-sm before:outline-blue-800 hover:text-gray-900 focus-visible:relative focus-visible:before:absolute focus-visible:before:outline-2 data-selected:text-gray-900",
          resolveClassName(className, state),
        );
      }}
      {...props}
    />
  );
};
export namespace Tab {
  export type Props = ComponentProps<typeof TabsPrimitive.Tab>;
  export type State = TabsPrimitive.Tab.State;
  export type ActivationDirection = TabsPrimitive.Tab.ActivationDirection;
  export type Metadata = TabsPrimitive.Tab.Metadata;
  export type Position = TabsPrimitive.Tab.Position;
  export type Size = TabsPrimitive.Tab.Size;
  export type Value = TabsPrimitive.Tab.Value;
}

export const TabsIndicator = ({
  className,
  ...props
}: TabsIndicator.Props): JSX.Element => {
  return (
    <TabsPrimitive.Indicator
      className={(state) => {
        return cn(
          "-translate-y-1/2 absolute top-1/2 left-0 z-[-1] h-6 w-[var(--active-tab-width)] translate-x-[var(--active-tab-left)] rounded-sm bg-gray-100 transition-all duration-200 ease-in-out",
          resolveClassName(className, state),
        );
      }}
      {...props}
    />
  );
};
export namespace TabsIndicator {
  export type Props = ComponentProps<typeof TabsPrimitive.Indicator>;
  export type State = TabsPrimitive.Indicator.State;
}

export const TabsPanel = ({
  className,
  ...props
}: TabsPanel.Props): JSX.Element => {
  return (
    <TabsPrimitive.Panel
      className={(state) => {
        return cn(
          "-outline-offset-1 relative flex h-32 items-center justify-center outline-blue-800 focus-visible:rounded-md focus-visible:outline-2",
          resolveClassName(className, state),
        );
      }}
      {...props}
    />
  );
};
export namespace TabsPanel {
  export type Props = ComponentProps<typeof TabsPrimitive.Panel>;
  export type State = TabsPrimitive.Panel.State;
  export type Metadata = TabsPrimitive.Panel.Metadata;
}
