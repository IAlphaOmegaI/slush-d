"use client";

import { Input as InputPrimitive } from "@base-ui-components/react/input";
import { mergeProps } from "@base-ui-components/react/merge-props";
import { useRender } from "@base-ui-components/react/use-render";
import {
  countries,
  formatPhone,
  inferPhoneCountryConfig,
  normalizePhone,
} from "@zenncore/phone";
import { type ClassList, cn } from "@zenncore/utils";
import { useControlled, useEventCallback } from "@zenncore/utils/hooks";
import {
  type ClipboardEvent,
  type ComponentProps,
  type Context,
  createContext,
  type JSX,
  type KeyboardEvent,
  type RefObject,
  use,
  useId,
  useMemo,
  useRef,
} from "react";
import { resolveClassName } from "../utils/helpers/resolve-class-name";
import type { RenderComponentProps } from "../utils/types/render-component-props";
import {
  Combobox,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
  ComboboxPopup,
  ComboboxPositioner,
  ComboboxTrigger,
  ComboboxValue,
} from "./combobox";

type Option = (typeof countries)[number];
export type ISO = Option["iso"];

type PhoneFieldRootContext = {
  id: string;
  // name?: string;
  significantNumber: string;
  countryConfig: Option;
  setSignificantNumber: (significantNumber: string) => void;
  setPhone: (phone: string) => void;
  setCountryConfig: (config: Option) => void;
  inputRef: RefObject<HTMLInputElement | null>;
} & PhoneField.State;
const PhoneFieldRootContext: Context<PhoneFieldRootContext | null> =
  createContext<PhoneFieldRootContext | null>(null);

// base-ui naming convention
export const usePhoneFieldRootContext = (): PhoneFieldRootContext => {
  const context = use(PhoneFieldRootContext);

  if (context === undefined || context === null) {
    throw new Error(
      "zenncore: PhoneFieldRootContext is missing. PhoneField parts must be placed within <PhoneField>.",
    );
  }

  return context;
};

export const PhoneField = ({
  render,
  id: inheritedID,
  value: inheritedValue,
  defaultValue = "",
  defaultCountry = "AL",
  disabled = false,
  onValueChange,
  onCountryChange,
  className,
  ...props
}: PhoneField.Props): JSX.Element => {
  const [value, setValue] = useControlled({
    controlled: inheritedValue,
    default: defaultValue,
    name: "PhoneInput",
  });

  const id = useId();
  const inputRef = useRef<HTMLInputElement>(null);

  const countryConfig = useMemo(() => {
    return (
      //TODO: inferPhoneCountryConfig bundled type is not correct (AL | DE | US)
      inferPhoneCountryConfig(value) ??
      // biome-ignore lint/style/noNonNullAssertion: guaranteed to be in options
      countries.find((country) => country.iso === defaultCountry)!
    );
  }, [value, defaultCountry]);

  const formattedSignificantNumber = useMemo(() => {
    return formatPhone(value, countryConfig.iso)
      .replace(countryConfig.prefix, "")
      .trim();
  }, [value, countryConfig]);

  const handleValueChange = useEventCallback((updatedValue: string) => {
    setValue(updatedValue);
    onValueChange?.(updatedValue);
  });

  const contextValue: PhoneFieldRootContext = useMemo(
    () => ({
      id: inheritedID ?? `zenncore-${id}`,
      significantNumber: formattedSignificantNumber,
      countryConfig,
      disabled,
      inputRef,
      setSignificantNumber: (updatedSignificantNumber: string) => {
        const normalizedNumber = normalizePhone(updatedSignificantNumber);
        //TODO: input shouldn't exceed the maximum length of the country national number
        handleValueChange(`${countryConfig.prefix}${normalizedNumber}`);
      },
      setPhone: (updatedPhone: string) => {
        const normalizedPhone = normalizePhone(updatedPhone);

        const updatedCountryConfig = inferPhoneCountryConfig(normalizedPhone);

        if (!updatedCountryConfig) {
          handleValueChange(`${countryConfig.prefix}${normalizedPhone}`);
          return;
        }

        const updatedSignificantNumber = normalizedPhone.replace(
          updatedCountryConfig.prefix,
          "",
        );

        handleValueChange(
          `${updatedCountryConfig.prefix}${updatedSignificantNumber}`,
        );

        if (countryConfig.iso !== updatedCountryConfig.iso) {
          onCountryChange?.(updatedCountryConfig.iso);
        }
      },
      setCountryConfig: (newCountryConfig: Option) => {
        const updatedValue = (() => {
          console.log({ value, countryConfig, newCountryConfig });
          if (!value) return newCountryConfig.prefix;

          const normalizedValue = normalizePhone(value);

          return normalizedValue.startsWith(countryConfig.prefix)
            ? normalizedValue.replace(
                countryConfig.prefix,
                newCountryConfig.prefix,
              )
            : `${newCountryConfig.prefix}${normalizedValue}`;
        })();

        handleValueChange(updatedValue);

        if (newCountryConfig.iso !== countryConfig.iso) {
          onCountryChange?.(newCountryConfig.iso);
        }
        inputRef.current?.focus();
      },
    }),
    [
      inheritedID,
      id,
      value,
      handleValueChange,
      formattedSignificantNumber,
      countryConfig,
      onCountryChange,
      disabled,
    ],
  );

  const state: PhoneField.State = useMemo(
    () => ({
      disabled,
    }),
    [disabled],
  );

  const element = useRender({
    defaultTagName: "div",
    render,
    props: mergeProps<"div">(props, {
      className: cn(
        "has-[input:focus-visible]:-outline-offset-1 flex items-center gap-2 overflow-hidden rounded-md border border-accent-foreground px-1 py-1 has-[input:focus-visible]:outline-2 has-[input:focus-visible]:outline-blue-800 has-[input:focus:not(:focus-visible)]:outline-0",
        disabled && "cursor-not-allowed opacity-50",
        resolveClassName(className, state),
      ),
    }),
    state,
  });

  return (
    <PhoneFieldRootContext value={contextValue}>
      {element}
    </PhoneFieldRootContext>
  );
};
export namespace PhoneField {
  export type Props = RenderComponentProps<
    "div",
    PhoneField.State,
    {
      value?: string;
      defaultValue?: string;
      defaultCountry?: ISO;
      disabled?: boolean;
      onValueChange?: (value: string) => void;
      onCountryChange?: (country: ISO) => void;
    }
  >;
  //TODO: replace with proper state PhoneFieldState
  export type State = { disabled: boolean };
}

export const PhoneFieldInput = ({
  render = <InputPrimitive />,
  id: inheritedID,
  disabled: inheritedDisabled = false,
  className,
  ...props
}: PhoneFieldInput.Props): JSX.Element => {
  const {
    id,
    significantNumber,
    setSignificantNumber,
    setPhone,
    disabled: rootDisabled,
    inputRef,
  } = usePhoneFieldRootContext();

  const disabled = rootDisabled || inheritedDisabled;

  const handleInputChange = (input: string) => {
    const isEditingPhoneNumber =
      (inputRef.current?.selectionStart ?? 0) < input.length;

    if (isEditingPhoneNumber) {
      const previousCursorPosition = inputRef.current?.selectionStart ?? 0;

      requestAnimationFrame(() => {
        // this ensures that the cursor position is set after the value is updated
        // (like useEffect) but runs even if the value doesn't change
        if (!inputRef.current) return;

        inputRef.current.setSelectionRange(
          previousCursorPosition,
          previousCursorPosition,
        );
      });
    }

    setSignificantNumber(input);
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key !== "Backspace") return;

    const input = event.currentTarget;
    const cursorPosition = input.selectionStart ?? 0;
    const value = input.value;

    if (cursorPosition === 0) return;

    const previousChar = value[cursorPosition - 1];
    const isNonDigit = previousChar && !/\d/.test(previousChar);

    if (isNonDigit) {
      event.preventDefault();
      input.setSelectionRange(cursorPosition - 1, cursorPosition - 1);
    }
  };

  const handleInputPaste = (event: ClipboardEvent<HTMLInputElement>) => {
    if (disabled) return;

    const value = event.clipboardData?.getData("text/plain");

    if (value.trim()) setPhone(value);
  };

  const state: PhoneField.State = useMemo(
    () => ({
      disabled,
    }),
    [disabled],
  );

  const element = useRender({
    render,
    ref: inputRef,
    props: mergeProps<typeof InputPrimitive>(props, {
      id: inheritedID ?? id,
      value: significantNumber,
      type: "tel",
      autoComplete: "tel",
      inputMode: "tel",
      disabled,
      onValueChange: handleInputChange,
      onPaste: handleInputPaste,
      onKeyDown: handleKeyDown,
      className: cn("outline-0", resolveClassName(className, state)),
    }),
    state,
  });

  return element;
};
export namespace PhoneFieldInput {
  export type Props = RenderComponentProps<
    "input",
    PhoneField.State,
    ComponentProps<typeof InputPrimitive>
  >;
}

//TODO: replace Select with Combobox
export const PhoneFieldCountryCombobox = ({
  disabled: inheritedDisabled = false,
  // className,
  classList,
  onOpenChange,
  onValueChange,
  ...props
}: PhoneFieldCountryCombobox.Props): JSX.Element => {
  const {
    countryConfig,
    setCountryConfig,
    disabled: rootDisabled,
    inputRef,
  } = usePhoneFieldRootContext();

  const disabled = rootDisabled || inheritedDisabled;

  return (
    <Combobox
      {...props}
      items={countries}
      value={countryConfig}
      itemToStringValue={(item) => item.iso}
      itemToStringLabel={(item) => `${item.iso}+${item.prefix}`}
      disabled={disabled}
      onOpenChange={(open, event) => {
        if (open && event.reason !== "item-press") return;

        inputRef.current?.setSelectionRange(
          inputRef.current?.value.length ?? 0,
          inputRef.current?.value.length ?? 0,
        );
        inputRef.current?.focus();

        onOpenChange?.(open, event);
      }}
      onValueChange={(value, event) => {
        setCountryConfig(value);

        onValueChange?.(value, event);
      }}
    >
      <ComboboxTrigger
        // title={countryConfig.iso}
        //TODO: extend with PhoneField.State
        className={(state) => {
          return cn(
            "min-w-20 gap-0 rounded-r-none border-0 border-r",
            resolveClassName(classList?.trigger, state),
          );
        }}
      >
        <ComboboxValue>
          {(value: Option) => `${value.flag} ${value.prefix}`}
        </ComboboxValue>
      </ComboboxTrigger>
      <ComboboxPositioner
        className={(state) => {
          return resolveClassName(classList?.positioner, state) ?? "";
        }}
      >
        <ComboboxPopup
          aria-label="Select country code"
          className={(state) => {
            return cn(
              "min-w-50 overflow-y-visible pb-0 [--input-container-height:2.2rem]",
              resolveClassName(classList?.popup, state),
            );
          }}
        >
          <ComboboxInput
            className={
              "mx-auto block h-[var(--input-container-height)] w-[calc(100%-var(--spacing)*4)]"
            }
          />
          <ComboboxEmpty>No countries found</ComboboxEmpty>
          <ComboboxList
            className={(state) => {
              return cn(
                "max-h-[min(calc(15.2rem-var(--input-container-height)),calc(var(--available-height)-var(--input-container-height)))] overflow-y-auto overscroll-contain py-2 empty:p-0",
                resolveClassName(classList?.list, state),
              );
            }}
          >
            {(option: Option) => (
              <ComboboxItem
                key={option.iso}
                value={option}
                className={(state) => {
                  return cn(
                    "group flex",
                    resolveClassName(classList?.item?.root, state),
                  );
                }}
                classList={classList?.item}
              >
                {option.flag} {option.iso} {/* TODO: add classList to span  */}
                <span className="ml-auto text-foreground-dimmed group-data-highlighted:text-white/70">
                  +{option.prefix}
                </span>
              </ComboboxItem>
            )}
          </ComboboxList>
        </ComboboxPopup>
      </ComboboxPositioner>
    </Combobox>
  );
};
export namespace PhoneFieldCountryCombobox {
  export type ClassListKey =
    // | "root"
    | "trigger"
    | "value"
    | "positioner"
    | "popup"
    | "list"
    | {
        item: ComboboxItem.ClassListKey;
      };
  export type Props = {
    disabled?: boolean;
    classList?: ClassList<ClassListKey>;
  } & ComponentProps<typeof Combobox<Option>>;
}

export const PhoneFieldFlag = (): JSX.Element => {
  return <></>;
};
