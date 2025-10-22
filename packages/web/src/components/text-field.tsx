"use client";

import { Input as InputPrimitive } from "@base-ui-components/react/input";
import { mergeProps } from "@base-ui-components/react/merge-props";
import { useRender } from "@base-ui-components/react/use-render";
import { EyeClosedIcon, EyeIcon } from "@zenncore/icons";
import { type ClassList, cn } from "@zenncore/utils";
import { useControlled, useEventCallback } from "@zenncore/utils/hooks";
import {
  type ComponentProps,
  createContext,
  type JSX,
  type RefObject,
  use,
  useEffect,
  useId,
  useMemo,
  useRef,
} from "react";
import { resolveClassName } from "../utils/helpers/resolve-class-name";
import type { RenderComponentProps } from "../utils/types/render-component-props";

// const rootVariants = cva(
//   "flex h-10 w-full items-center justify-between gap-2 overflow-hidden rounded-md border border-accent-foreground px-2",
//   {
//     variants: {
//       variant: {
//         border: "",
//       },
//     },
//   },
// );
// const inputVariants = cva(
//   "h-full min-w-0 flex-1 border-0 bg-transparent placeholder:text-foreground-dimmed/40 focus-visible:outline-0",
//   {
//     variants: {
//       variant: {
//         border:
//           "!size-[calc(100%-var(--spacing))] flex rounded-md px-3 py-2 text-foreground text-sm shadow-input transition duration-500 file:border-0 file:bg-transparent file:font-medium file:text-sm placeholder:text-neutral-400 focus-visible:outline-0 focus-visible:ring-2 focus-visible:ring-neutral-400 disabled:cursor-not-allowed disabled:opacity-50 group-hover/input:shadow-none dark:placeholder-neutral-600 dark:shadow-[0px_0px_1px_1px_var(--neutral-700)] dark:focus-visible:ring-neutral-600",
//       },
//     },
//   },
// );

type InputFocusState = {
  clickTriggered: boolean;
  selectionStart: number | null;
  selectionEnd: number | null;
};

type TextFieldContext = {
  id: string;
  // name?: string;
  type: "text" | "email" | "password";
  value: string;
  setValue: (value: string) => void;
  setMasked: (masked: boolean) => void;
  disabled: boolean;
  inputRef: RefObject<HTMLInputElement | null>;
  focusState: RefObject<InputFocusState>;
  // variant?: VariantProps<typeof inputVariants>["variant"];
} & TextField.State;

const TextFieldRootContext = createContext<TextFieldContext | null>(null);

const useTextFieldRootContext = () => {
  const context = use(TextFieldRootContext);

  if (context === undefined || context === null) {
    throw new Error(
      "zenncore: TextFieldRootContext is missing. TextField parts must be placed within <TextField>.",
    );
  }

  return context;
};

const INITIAL_FOCUS_STATE: InputFocusState = {
  clickTriggered: false,
  selectionStart: null,
  selectionEnd: null,
};

export const TextField = ({
  render,
  name,
  id: inheritedID,
  value: inheritedValue,
  defaultValue = "",
  disabled = false,
  // variant,
  onValueChange,
  className,
  ...props
}: TextField.Props): JSX.Element => {
  //TODO: add field state to TextField (dirty, invalid, touched, etc. ) => useFieldRootContext

  const maskedProps =
    props.type === "password"
      ? {
          masked: props.masked,
          defaultMasked: props.defaultMasked ?? true,
          onMaskChange: props.onMaskChange,
        }
      : {
          masked: false,
          defaultMasked: false,
          onMaskChange: undefined,
        };

  const { type = "text", ...elementProps } = (() => {
    if (props.type !== "password") return props;

    // biome-ignore lint/correctness/noUnusedVariables: mask props are destructured to not be passed to the div
    const { masked, defaultMasked, onMaskChange, ...rest } = props;

    return {
      ...rest,
    };
  })();

  const [value, setValue] = useControlled({
    controlled: inheritedValue,
    default: defaultValue,
    name: "TextField",
  });
  const [masked, setMasked] = useControlled({
    controlled: maskedProps.masked,
    default: maskedProps.defaultMasked,
    name: "TextField",
    state: "masked",
  });
  const id = useId();
  const inputRef = useRef<HTMLInputElement>(null);
  const focusState = useRef<InputFocusState>(INITIAL_FOCUS_STATE);

  const handleValueChange = useEventCallback((updatedValue: string) => {
    setValue(updatedValue);
    onValueChange?.(updatedValue);
  });

  const handleMaskedChange = useEventCallback((updatedMasked: boolean) => {
    setMasked(updatedMasked);
    maskedProps.onMaskChange?.(updatedMasked);
  });

  const contextValue: TextFieldContext = useMemo(
    () => ({
      name,
      id: inheritedID ?? `zenncore-${id}`,
      type,
      value,
      setValue: handleValueChange,
      // variant,
      masked,
      setMasked: handleMaskedChange,
      disabled,
      inputRef,
      focusState,
    }),
    [
      id,
      inheritedID,
      name,
      type,
      value,
      handleValueChange,
      masked,
      handleMaskedChange,
      disabled,
    ],
  );

  const state: TextField.State = useMemo(
    () => ({ masked, disabled }),
    [masked, disabled],
  );

  const element = useRender({
    defaultTagName: "div",
    render,
    props: mergeProps<"div">(elementProps, {
      className: cn(
        "flex h-10 w-full items-center justify-between gap-2 overflow-hidden rounded-md border border-accent-foreground px-2",
        disabled && "cursor-not-allowed opacity-50",
        resolveClassName(className, state),
      ),
      // ...(masked ? { "data-masked": "" } : {}),
      //  ...{
      //     [`data-${masked? "masked" : "unmasked"}`]: "",
      //    }
    }),
    state,
  });

  return (
    <TextFieldRootContext value={contextValue}>{element}</TextFieldRootContext>
  );
};

export namespace TextField {
  export type Props = {
    name?: string;
    disabled?: boolean;
  } & RenderComponentProps<
    // & VariantProps<typeof inputVariants>
    "div",
    State,
    {
      value?: string;
      defaultValue?: string;
      onValueChange?: (value: string) => void;
    } & (
      | { type?: "text" | "email" }
      | {
          type: "password";
          masked?: boolean;
          defaultMasked?: boolean;
          onMaskChange?: (masked: boolean) => void;
        }
    )
  >;
  export type State = { masked: boolean; disabled: boolean };
}

const inputTypeProps: Record<
  TextFieldContext["type"],
  ComponentProps<typeof InputPrimitive>
> = {
  text: {},
  email: {
    type: "email",
    autoComplete: "email",
    autoCapitalize: "off",
    inputMode: "email",
    spellCheck: "false",
  },
  password: {
    type: "password",
    autoComplete: "current-password",
    autoCapitalize: "off",
    spellCheck: "false",
  },
};

export const TextFieldInput = ({
  render = <InputPrimitive />,
  id: inheritedID,
  disabled: inheritedDisabled = false,
  className,
  ...props
}: TextFieldInput.Props): JSX.Element => {
  const {
    id,
    type,
    value,
    setValue,
    masked,
    setMasked,
    disabled: rootDisabled,
    inputRef,
    focusState,
  } = useTextFieldRootContext();

  const disabled = rootDisabled || inheritedDisabled;

  const state: TextField.State = useMemo(
    () => ({ masked, disabled }),
    [masked, disabled],
  );

  useEffect(() => {
    const form = inputRef.current?.form;

    if (type !== "password" || !form) return;

    const abortController = new AbortController();

    form.addEventListener(
      "submit",
      () => {
        // always reset the visibility on submit regardless of whether the
        // default action is prevented
        setMasked(true);
      },
      {
        signal: abortController.signal,
      },
    );
    form.addEventListener(
      "reset",
      (event) => {
        if (event.defaultPrevented) return;

        setMasked(true);
      },
      {
        signal: abortController.signal,
      },
    );

    return abortController.abort;
  }, [type, setMasked]);

  const element = useRender({
    render,
    ref: inputRef,
    props: mergeProps<typeof InputPrimitive>(inputTypeProps[type], props, {
      id: inheritedID ?? id,
      type: type === "password" ? (masked ? "password" : "text") : type,
      value,
      disabled,
      "aria-roledescription": "Text field",
      onValueChange: setValue,
      onBlur: (event) => {
        if (type !== "password") return;

        // get the cursor position
        const { selectionStart, selectionEnd } = event.currentTarget;
        focusState.current.selectionStart = selectionStart;
        focusState.current.selectionEnd = selectionEnd;
      },
      //TODO className: (inputState)=> resolveClassName(className,{...state,...inputState})
      className: cn(
        "h-full min-w-0 flex-1 border-0 bg-transparent text-foreground placeholder:text-foreground-dimmed/40 focus-visible:outline-0",
        // inputVariants({ variant })
        resolveClassName(className, state),
      ),
    }),
    state,
  });

  return element;
};
export namespace TextFieldInput {
  export type Props = RenderComponentProps<
    "input",
    TextField.State, //TODO: implement InputPrimitive.State
    InputPrimitive.Props
  >;
}

export const TextFieldMaskToggle = ({
  render,
  type = "button",
  children,
  disabled: inheritedDisabled = false,
  "aria-label": ariaLabel,
  className,
  classList,
  ...props
}: TextFieldMaskToggle.Props): JSX.Element | null => {
  const {
    id,
    type: fieldType,
    masked,
    setMasked,
    disabled: rootDisabled,
    inputRef,
    focusState,
  } = useTextFieldRootContext();

  const disabled = rootDisabled || inheritedDisabled;

  const state: TextField.State = useMemo(
    () => ({ masked, disabled }),
    [masked, disabled],
  );

  const element = useRender({
    enabled: fieldType === "password",
    defaultTagName: "button",
    render: render,
    props: mergeProps<"button">(props, {
      children:
        children ??
        (masked ? (
          <EyeIcon className={cn("size-5", classList?.icon)} />
        ) : (
          <EyeClosedIcon className={cn("size-5", classList?.icon)} />
        )),
      type,
      disabled,
      "aria-controls": id,
      "aria-label": ariaLabel ?? `${masked ? "Show" : "Hide"} password`,
      "aria-pressed": masked,
      onPointerDown: () => {
        if (fieldType !== "password") return;

        focusState.current.clickTriggered = true;
      },
      onPointerCancel: () => {
        if (fieldType !== "password") return;

        // reset the ref on cancellation, regardless of whether the user has
        // called preventDefault on the event
        focusState.current = INITIAL_FOCUS_STATE;
      },
      onPointerUp: () => {
        if (fieldType !== "password") return;

        // if click handler hasn't been called at this point, it may have been
        // intercepted, in which case we still want to reset our internal state
        setTimeout(() => {
          focusState.current = INITIAL_FOCUS_STATE;
        }, 50);
      },
      onClick: (event) => {
        setMasked(!masked);

        if (fieldType !== "password") return;

        if (event.defaultPrevented || !focusState.current.clickTriggered) {
          focusState.current = INITIAL_FOCUS_STATE;
          return;
        }

        const input = inputRef.current;
        if (!input) return;

        const { selectionStart, selectionEnd } = focusState.current;
        input.focus();

        if (selectionStart !== null || selectionEnd !== null) {
          // wait a tick so that focus has settled, then restore select position
          requestAnimationFrame(() => {
            // make sure the input still has focus (developer may have
            // programmatically moved focus elsewhere)
            if (input.ownerDocument.activeElement === input) {
              input.selectionStart = selectionStart;
              input.selectionEnd = selectionEnd;
            }
          });
        }
      },
      className: cn(resolveClassName(className, state), classList?.root),
    }),
    state,
  });

  return element;
};
export namespace TextFieldMaskToggle {
  export type ClassListKey = "root" | "icon";
  export type Props = {
    classList?: ClassList<ClassListKey>;
  } & RenderComponentProps<"button", TextField.State>;
}
