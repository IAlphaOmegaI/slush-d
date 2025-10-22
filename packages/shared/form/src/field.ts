import type { ClassList } from "@zenncore/utils";
import type { Override } from "@zenncore/utils/types";
import type { ComponentType } from "react";
import type { z } from "zod";
import type { GenericInterface } from "./types/interface";
import type { GenericProps, InferredProps, RefinedProps } from "./types/props";
import type { GenericShape } from "./types/shape";
import type {
  GenericValidator,
  InferredValidator,
  InferredValueValidator,
} from "./validator";

export type GenericFieldConfig = InferredFieldConfig<
  GenericInterface,
  GenericShape<GenericInterface>,
  GenericValidator,
  GenericProps
>;

export type InferredFieldConfig<
  Interface extends GenericInterface,
  Shape extends GenericShape<Interface>,
  Validator extends InferredValidator<Interface, Shape>,
  Props extends InferredProps<Interface, Shape>,
> = Override<
  Omit<Props, "onChange" | "onBlur" | "classList">,
  {
    shape: Shape;

    validator: Validator;
    defaultValue?: z.infer<Validator> | undefined;

    placeholder?: string;
    label?: string;
    description?: string;

    classList?: ClassList<
      // @ts-expect-error
      | "root"
      | "label"
      | "description"
      | "error"
      | "field"
      | {
          control: "classList" extends keyof Props ? Props["classList"] : never;
        }
    >;
  }
>;

export const field = <
  Interface extends GenericInterface,
  Shape extends GenericShape<Interface>,
  Validator extends InferredValidator<Interface, Shape>,
  Props extends InferredProps<Interface> = InferredProps<Interface>,
>(
  config: InferredFieldConfig<Interface, Shape, Validator, Props>,
): InferredFieldConfig<Interface, Shape, Validator, Props> => config;

export type CustomFieldConfigHelper<
  Value,
  Props extends RefinedProps<Value>,
  Component extends ComponentType<Props>,
> = {
  Shape: "custom";
  Validator: InferredValueValidator<NonNullable<Props["value"]>>;
  Props: Props & {
    Component: Component;
  };
};
