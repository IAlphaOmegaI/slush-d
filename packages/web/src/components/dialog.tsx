import { Dialog as DialogPrimitive } from "@base-ui-components/react/dialog";
import { type ClassList, cn } from "@zenncore/utils";
import type { ComponentProps, JSX } from "react";
import { resolveClassName } from "../utils/helpers/resolve-class-name";

export const Dialog: typeof DialogPrimitive.Root = DialogPrimitive.Root;
export namespace Dialog {
  export type Props = ComponentProps<typeof DialogPrimitive.Root>;
  export type Actions = DialogPrimitive.Root.Actions;
  export type ChangeEventDetails = DialogPrimitive.Root.ChangeEventDetails;
  export type ChangeEventReason = DialogPrimitive.Root.ChangeEventReason;
}

export const DialogTrigger = ({
  className,
  ...props
}: DialogTrigger.Props): JSX.Element => {
  return (
    <DialogPrimitive.Trigger
      className={(state) => {
        return cn(
          "focus-visible:-outline-offset-1 flex h-10 select-none items-center justify-center rounded-md border border-gray-200 bg-gray-50 px-3.5 font-medium text-base text-gray-900 hover:bg-gray-100 focus-visible:outline-2 focus-visible:outline-blue-800 active:bg-gray-100",
          resolveClassName(className, state),
        );
      }}
      {...props}
    />
  );
};
export namespace DialogTrigger {
  export type Props = ComponentProps<typeof DialogPrimitive.Trigger>;
  export type State = DialogPrimitive.Trigger.State;
}

export const DialogPopup = ({
  container,
  keepMounted,
  className,
  classList,
  ...props
}: DialogPopup.Props): JSX.Element => {
  return (
    <DialogPrimitive.Portal container={container} keepMounted={keepMounted}>
      <DialogPrimitive.Backdrop
        className={(state) => {
          return cn(
            "fixed inset-0 bg-black/20 transition-all duration-150 data-ending-style:opacity-0 data-starting-style:opacity-0",
            resolveClassName(classList?.backdrop, state),
          );
        }}
      />
      <DialogPrimitive.Popup
        className={(state) => {
          return cn(
            "-mt-8 -translate-x-1/2 -translate-y-1/2 fixed top-1/2 left-1/2 w-96 max-w-[calc(100vw-3rem)] rounded-lg bg-gray-50 p-6 text-gray-900 outline-1 outline-gray-200 transition-all duration-150 data-ending-style:scale-90 data-starting-style:scale-90 data-ending-style:opacity-0 data-starting-style:opacity-0 dark:outline-gray-300",
            resolveClassName(className, state),
            resolveClassName(classList?.root, state),
          );
        }}
        {...props}
      />
    </DialogPrimitive.Portal>
  );
};
export namespace DialogPopup {
  export type ClassListKey = "root" | "backdrop";
  export type Props = {
    classList?: ClassList<ClassListKey>;
  } & ComponentProps<typeof DialogPrimitive.Popup> &
    ComponentProps<typeof DialogPrimitive.Portal>;
  export type State = DialogPrimitive.Popup.State;
}

export const DialogTitle = ({
  className,
  ...props
}: DialogTitle.Props): JSX.Element => {
  return (
    <DialogPrimitive.Title
      className={(state) => {
        return cn(
          "-mt-1.5 mb-1 font-medium text-lg",
          resolveClassName(className, state),
        );
      }}
      {...props}
    />
  );
};
export namespace DialogTitle {
  export type Props = ComponentProps<typeof DialogPrimitive.Title>;
  export type State = DialogPrimitive.Title.State;
}

export const DialogDescription = ({
  className,
  ...props
}: DialogDescription.Props): JSX.Element => {
  return (
    <DialogPrimitive.Description
      className={(state) => {
        return cn(
          "mb-6 text-base text-foreground-dimmed",
          resolveClassName(className, state),
        );
      }}
      {...props}
    />
  );
};
export namespace DialogDescription {
  export type Props = ComponentProps<typeof DialogPrimitive.Description>;
  export type State = DialogPrimitive.Description.State;
}

export const DialogClose = ({
  className,
  ...props
}: DialogClose.Props): JSX.Element => {
  return (
    <DialogPrimitive.Close
      className={(state) => {
        return cn(
          "focus-visible:-outline-offset-1 flex h-10 select-none items-center justify-center rounded-md border border-gray-200 bg-gray-50 px-3.5 font-medium text-base text-gray-900 hover:bg-gray-100 focus-visible:outline-2 focus-visible:outline-blue-800 active:bg-gray-100",
          resolveClassName(className, state),
        );
      }}
      {...props}
    />
  );
};
export namespace DialogClose {
  export type Props = ComponentProps<typeof DialogPrimitive.Close>;
  export type State = DialogPrimitive.Close.State;
}
