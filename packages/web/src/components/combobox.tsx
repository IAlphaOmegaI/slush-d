import { Combobox as ComboboxPrimitive } from "@base-ui-components/react/combobox";
import { CheckIcon, XIcon } from "@zenncore/icons";
import { type ClassList, cn } from "@zenncore/utils";
import type { ComponentProps, JSX } from "react";
import { resolveClassName } from "../utils/helpers/resolve-class-name";

export const Combobox: typeof ComboboxPrimitive.Root = ComboboxPrimitive.Root;
export namespace Combobox {
  export type Props<
    ItemValue,
    SelectedValue = ItemValue,
    Multiple extends boolean | undefined = false,
  > = ComponentProps<
    typeof ComboboxPrimitive.Root<ItemValue, SelectedValue, Multiple>
  >;
  export type State = ComboboxPrimitive.Root.State;
  export type Actions = ComboboxPrimitive.Root.Actions;
  export type ChangeEventDetails = ComboboxPrimitive.Root.ChangeEventDetails;
  export type ChangeEventReason = ComboboxPrimitive.Root.ChangeEventReason;
}

export const ComboboxInput = ({
  className,
  ...props
}: ComboboxInput.Props): JSX.Element => {
  return (
    <ComboboxPrimitive.Input
      className={(state) => {
        return cn(
          "focus:-outline-offset-1 h-10 w-64 rounded-md border border-gray-200 bg-[canvas] pl-3.5 font-normal text-base text-gray-900 focus:outline focus:outline-blue-800",
          resolveClassName(className, state),
        );
      }}
      {...props}
    />
  );
};
export namespace ComboboxInput {
  export type Props = ComponentProps<typeof ComboboxPrimitive.Input>;
  export type State = ComboboxPrimitive.Input.State;
}

export const ComboboxTrigger = ({
  className,
  ...props
}: ComboboxTrigger.Props): JSX.Element => {
  return (
    <ComboboxPrimitive.Trigger
      className={(state) => {
        return cn(
          "flex h-10 w-6 items-center justify-center rounded bg-transparent p-0",
          resolveClassName(className, state),
        );
      }}
      {...props}
    />
  );
};
export namespace ComboboxTrigger {
  export type Props = ComponentProps<typeof ComboboxPrimitive.Trigger>;
  export type State = ComboboxPrimitive.Trigger.State;
}

export const ComboboxIcon: typeof ComboboxPrimitive.Icon =
  ComboboxPrimitive.Icon;
export namespace ComboboxIcon {
  export type Props = ComponentProps<typeof ComboboxPrimitive.Icon>;
  export type State = ComboboxPrimitive.Icon.State;
}

export const ComboboxClear: typeof ComboboxPrimitive.Clear =
  ComboboxPrimitive.Clear;
export namespace ComboboxClear {
  export type Props = ComponentProps<typeof ComboboxPrimitive.Clear>;
  export type State = ComboboxPrimitive.Clear.State;
}

export const ComboboxValue: typeof ComboboxPrimitive.Value =
  ComboboxPrimitive.Value;
export namespace ComboboxValue {
  export type Props = ComponentProps<typeof ComboboxPrimitive.Value>;
}

export const ComboboxChips = ({
  className,
  ...props
}: ComboboxChips.Props): JSX.Element => {
  return (
    <ComboboxPrimitive.Chips
      className={(state) => {
        return cn(
          "focus-within:-outline-offset-1 flex w-64 flex-wrap items-center gap-0.5 rounded-md border border-gray-200 px-1.5 py-1 focus-within:outline-2 focus-within:outline-blue-800 min-[500px]:w-[22rem]",
          className,
          resolveClassName(className, state),
        );
      }}
      {...props}
    />
  );
};
export namespace ComboboxChips {
  export type Props = ComponentProps<typeof ComboboxPrimitive.Chips>;
  export type State = ComboboxPrimitive.Chips.State;
}

export const ComboboxChip = ({
  className,
  ...props
}: ComboboxChip.Props): JSX.Element => {
  return (
    <ComboboxPrimitive.Chip
      className={(state) => {
        return cn(
          "focus-within:-outline-offset-1 flex cursor-default items-center gap-1 rounded-md bg-gray-100 px-1.5 py-[0.2rem] text-gray-900 text-sm outline-none focus-within:bg-blue-800 focus-within:text-gray-50 [@media(hover:hover)]:[&[data-highlighted]]:bg-blue-800 [@media(hover:hover)]:[&[data-highlighted]]:text-gray-50",
          className,
          resolveClassName(className, state),
        );
      }}
      {...props}
    />
  );
};
export namespace ComboboxChip {
  export type Props = ComponentProps<typeof ComboboxPrimitive.Chip>;
  export type State = ComboboxPrimitive.Chip.State;
}

export const ComboboxChipRemove = ({
  children,
  className,
  classList,
  ...props
}: ComboboxChipRemove.Props): JSX.Element => {
  return (
    <ComboboxPrimitive.ChipRemove
      className={(state) => {
        return cn(
          "rounded-md p-1 text-inherit hover:bg-gray-200",
          resolveClassName(className, state),
          resolveClassName(classList?.root, state),
        );
      }}
      {...props}
    >
      {children ?? <XIcon className={classList?.icon} />}
    </ComboboxPrimitive.ChipRemove>
  );
};
export namespace ComboboxChipRemove {
  export type ClassListKey = "root" | "icon";
  export type Props = {
    classList?: ClassList<ClassListKey>;
  } & ComponentProps<typeof ComboboxPrimitive.ChipRemove>;
  export type State = ComboboxPrimitive.ChipRemove.State;
}

export const ComboboxPositioner = ({
  container,
  keepMounted,
  sideOffset = 4,
  className,
  ...props
}: ComboboxPositioner.Props): JSX.Element => {
  return (
    <ComboboxPrimitive.Portal container={container} keepMounted={keepMounted}>
      {/* <ComboboxPrimitive.Backdrop/> */}
      <ComboboxPrimitive.Positioner
        sideOffset={sideOffset}
        className={(state) => {
          return cn("outline-none", resolveClassName(className, state));
        }}
        {...props}
      />
    </ComboboxPrimitive.Portal>
  );
};
export namespace ComboboxPositioner {
  export type Props = ComponentProps<typeof ComboboxPrimitive.Positioner> &
    ComponentProps<typeof ComboboxPrimitive.Portal>;
  export type State = ComboboxPrimitive.Positioner.State;
}

export const ComboboxPopup = ({
  className,
  ...props
}: ComboboxPopup.Props): JSX.Element => {
  return (
    <ComboboxPrimitive.Popup
      className={(state) => {
        return cn(
          "dark:-outline-offset-1 max-h-[min(var(--available-height),23rem)] w-[var(--anchor-width)] max-w-[var(--available-width)] origin-[var(--transform-origin)] scroll-pt-2 scroll-pb-2 overflow-y-auto overscroll-contain rounded-md bg-[canvas] py-2 text-gray-900 shadow-gray-200 shadow-lg outline-1 outline-gray-200 transition-[transform,scale,opacity] data-[side=none]:data-starting-style:scale-100 data-[side=none]:data-starting-style:opacity-100 data-[side=none]:data-ending-style:transition-none data-[side=none]:data-starting-style:transition-none data-ending-style:scale-95 data-starting-style:scale-95 data-ending-style:opacity-0 data-starting-style:opacity-0 dark:shadow-none dark:outline-gray-300",
          resolveClassName(className, state),
        );
      }}
      {...props}
    />
  );
};
export namespace ComboboxPopup {
  export type Props = ComponentProps<typeof ComboboxPrimitive.Popup>;
  export type State = ComboboxPrimitive.Popup.State;
}

export const ComboboxArrow: typeof ComboboxPrimitive.Arrow =
  ComboboxPrimitive.Arrow;
export namespace ComboboxArrow {
  export type Props = ComponentProps<typeof ComboboxPrimitive.Arrow>;
  export type State = ComboboxPrimitive.Arrow.State;
}

export const ComboboxStatus: typeof ComboboxPrimitive.Status =
  ComboboxPrimitive.Status;
export namespace ComboboxStatus {
  export type Props = ComponentProps<typeof ComboboxPrimitive.Status>;
  export type State = ComboboxPrimitive.Status.State;
}

export const ComboboxEmpty = ({
  className,
  ...props
}: ComboboxEmpty.Props): JSX.Element => {
  return (
    <ComboboxPrimitive.Empty
      className={(state) => {
        return cn(
          "px-4 py-2 text-center text-[0.925rem] leading-4 empty:m-0 empty:p-0",
          resolveClassName(className, state),
        );
      }}
      {...props}
    />
  );
};
export namespace ComboboxEmpty {
  export type Props = ComponentProps<typeof ComboboxPrimitive.Empty>;
  export type State = ComboboxPrimitive.Empty.State;
}

export const ComboboxList: typeof ComboboxPrimitive.List =
  ComboboxPrimitive.List;
export namespace ComboboxList {
  export type Props = ComponentProps<typeof ComboboxPrimitive.List>;
  export type State = ComboboxPrimitive.List.State;
}

export const ComboboxRow: typeof ComboboxPrimitive.Row = ComboboxPrimitive.Row;
export namespace ComboboxRow {
  export type Props = ComponentProps<typeof ComboboxPrimitive.Row>;
  export type State = ComboboxPrimitive.Row.State;
}

export const ComboboxItem = ({
  children,
  className,
  classList,
  ...props
}: ComboboxItem.Props): JSX.Element => {
  return (
    <ComboboxPrimitive.Item
      className={(state) => {
        return cn(
          "grid cursor-default select-none grid-cols-[0.75rem_1fr] items-center gap-2 py-2 pr-8 pl-4 text-base leading-4 outline-none data-highlighted:relative data-highlighted:z-0 data-highlighted:text-gray-50 data-highlighted:before:absolute data-highlighted:before:inset-x-2 data-highlighted:before:inset-y-0 data-highlighted:before:z-[-1] data-highlighted:before:rounded-sm data-highlighted:before:bg-gray-900",
          resolveClassName(className, state),
          resolveClassName(classList?.root, state),
        );
      }}
      {...props}
    >
      <ComboboxPrimitive.ItemIndicator
        className={(state) => {
          return cn(
            "col-start-1",
            resolveClassName(classList?.indicator?.root, state),
          );
        }}
      >
        <CheckIcon className={cn("size-3", classList?.indicator?.icon)} />
      </ComboboxPrimitive.ItemIndicator>
      {children}
    </ComboboxPrimitive.Item>
  );
};
export namespace ComboboxItem {
  export type ClassListKey = "root" | { indicator: "root" | "icon" } | "text";
  export type Props = {
    classList?: ClassList<ClassListKey>;
  } & ComponentProps<typeof ComboboxPrimitive.Item>;
  export type State = ComboboxPrimitive.Item.State;
}

export const ComboboxCollection: typeof ComboboxPrimitive.Collection =
  ComboboxPrimitive.Collection;
export namespace ComboboxCollection {
  export type Props = ComponentProps<typeof ComboboxPrimitive.Collection>;
}

export const ComboboxSeparator: typeof ComboboxPrimitive.Separator =
  ComboboxPrimitive.Separator;
export namespace ComboboxSeparator {
  export type Props = ComponentProps<typeof ComboboxPrimitive.Separator>;
  export type State = ComboboxPrimitive.Separator.State;
}

export const ComboboxGroup: typeof ComboboxPrimitive.Group =
  ComboboxPrimitive.Group;
export namespace ComboboxGroup {
  export type Props = ComponentProps<typeof ComboboxPrimitive.Group>;
  export type State = ComboboxPrimitive.Group.State;
}

export const ComboboxGroupLabel: typeof ComboboxPrimitive.GroupLabel =
  ComboboxPrimitive.GroupLabel;
export namespace ComboboxGroupLabel {
  export type Props = ComponentProps<typeof ComboboxPrimitive.GroupLabel>;
  export type State = ComboboxPrimitive.GroupLabel.State;
}

export const useFilter: typeof ComboboxPrimitive.useFilter =
  ComboboxPrimitive.useFilter;
