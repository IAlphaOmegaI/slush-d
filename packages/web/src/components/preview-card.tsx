import { PreviewCard as PreviewCardPrimitive } from "@base-ui-components/react/preview-card";
import { type ClassList, cn } from "@zenncore/utils";
import type { ComponentProps, JSX } from "react";
import { resolveClassName } from "../utils/helpers/resolve-class-name";

export const PreviewCard: typeof PreviewCardPrimitive.Root =
  PreviewCardPrimitive.Root;
export namespace PreviewCard {
  export type Props = ComponentProps<typeof PreviewCardPrimitive.Root>;
  export type State = PreviewCardPrimitive.Root.State;
  export type Actions = PreviewCardPrimitive.Root.Actions;
  export type ChangeEventDetails = PreviewCardPrimitive.Root.ChangeEventDetails;
  export type ChangeEventReason = PreviewCardPrimitive.Root.ChangeEventReason;
}

export const PreviewCardTrigger = ({
  className,
  ...props
}: PreviewCardTrigger.Props): JSX.Element => {
  return (
    <PreviewCardPrimitive.Trigger
      className={(state) => {
        return cn(
          "focus-visible:-outline-offset-1 flex select-none items-center justify-center rounded-md border border-gray-200 bg-gray-50 px-2 text-gray-900 hover:bg-gray-100 focus-visible:outline-2 focus-visible:outline-blue-800 active:bg-gray-100 data-popup-open:bg-gray-100",
          resolveClassName(className, state),
        );
      }}
      {...props}
    />
  );
};
export namespace PreviewCardTrigger {
  export type Props = ComponentProps<typeof PreviewCardPrimitive.Trigger>;
  export type State = PreviewCardPrimitive.Trigger.State;
}

export const PreviewCardPositioner = ({
  container,
  keepMounted,
  sideOffset = 8,
  ...props
}: PreviewCardPositioner.Props): JSX.Element => {
  return (
    <PreviewCardPrimitive.Portal
      container={container}
      keepMounted={keepMounted}
    >
      {/* <PreviewCardPrimitive.Backdrop /> */}
      <PreviewCardPrimitive.Positioner sideOffset={sideOffset} {...props} />
    </PreviewCardPrimitive.Portal>
  );
};
export namespace PreviewCardPositioner {
  export type Props = ComponentProps<typeof PreviewCardPrimitive.Positioner> &
    ComponentProps<typeof PreviewCardPrimitive.Portal>;
  export type State = PreviewCardPrimitive.Positioner.State;
}

export const PreviewCardPopup = ({
  className,
  ...props
}: PreviewCardPopup.Props): JSX.Element => {
  return (
    <PreviewCardPrimitive.Popup
      className={(state) => {
        return cn(
          "dark:-outline-offset-1 flex w-[240px] origin-[var(--transform-origin)] flex-col gap-2 rounded-lg bg-[canvas] p-2 shadow-gray-200 shadow-lg outline-1 outline-gray-200 transition-[transform,scale,opacity] data-ending-style:scale-90 data-starting-style:scale-90 data-ending-style:opacity-0 data-starting-style:opacity-0 dark:shadow-none dark:outline-gray-300",
          resolveClassName(className, state),
        );
      }}
      {...props}
    />
  );
};
export namespace PreviewCardPopup {
  export type Props = ComponentProps<typeof PreviewCardPrimitive.Popup>;
  export type State = PreviewCardPrimitive.Popup.State;
}

export const PreviewCardArrow = ({
  className,
  classList,
  ...props
}: PreviewCardArrow.Props): JSX.Element => {
  return (
    <PreviewCardPrimitive.Arrow
      className={(state) => {
        return cn(
          "data-[side=right]:-rotate-90 data-[side=bottom]:top-[-8px] data-[side=left]:right-[-13px] data-[side=top]:bottom-[-8px] data-[side=right]:left-[-13px] data-[side=left]:rotate-90 data-[side=top]:rotate-180",
          resolveClassName(className, state),
          resolveClassName(classList?.root, state),
        );
      }}
      {...props}
    >
      <PreviewCardArrowSvg className={classList?.arrow} />
    </PreviewCardPrimitive.Arrow>
  );
};
export namespace PreviewCardArrow {
  export type ClassListKey = "root" | "arrow";
  export type Props = {
    classList?: ClassList<ClassListKey>;
  } & ComponentProps<typeof PreviewCardPrimitive.Arrow>;
  export type State = PreviewCardPrimitive.Arrow.State;
}

const PreviewCardArrowSvg = (props: ComponentProps<"svg">) => {
  return (
    <svg width="20" height="10" viewBox="0 0 20 10" fill="none" {...props}>
      <path
        d="M9.66437 2.60207L4.80758 6.97318C4.07308 7.63423 3.11989 8 2.13172 8H0V10H20V8H18.5349C17.5468 8 16.5936 7.63423 15.8591 6.97318L11.0023 2.60207C10.622 2.2598 10.0447 2.25979 9.66437 2.60207Z"
        className="fill-[canvas]"
      />
      <path
        d="M8.99542 1.85876C9.75604 1.17425 10.9106 1.17422 11.6713 1.85878L16.5281 6.22989C17.0789 6.72568 17.7938 7.00001 18.5349 7.00001L15.89 7L11.0023 2.60207C10.622 2.2598 10.0447 2.2598 9.66436 2.60207L4.77734 7L2.13171 7.00001C2.87284 7.00001 3.58774 6.72568 4.13861 6.22989L8.99542 1.85876Z"
        className="fill-gray-200 dark:fill-none"
      />
      <path
        d="M10.3333 3.34539L5.47654 7.71648C4.55842 8.54279 3.36693 9 2.13172 9H0V8H2.13172C3.11989 8 4.07308 7.63423 4.80758 6.97318L9.66437 2.60207C10.0447 2.25979 10.622 2.2598 11.0023 2.60207L15.8591 6.97318C16.5936 7.63423 17.5468 8 18.5349 8H20V9H18.5349C17.2998 9 16.1083 8.54278 15.1901 7.71648L10.3333 3.34539Z"
        className="dark:fill-gray-300"
      />
    </svg>
  );
};
