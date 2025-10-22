import type { EmptyObject } from "@zenncore/utils/types";
import type { ComponentType } from "react";
import type { core } from "zod";
import type { CustomFieldConfigHelper } from "../field";
import type { RefinedProps } from "./props";

export type InterfaceValue<
  FieldValidator extends core.$ZodType,
  FieldProps extends EmptyObject,
> = {
  validator: FieldValidator;
  props: FieldProps;
};

export type GenericInterface = Record<
  string,
  InterfaceValue<core.$ZodType, EmptyObject>
>;

type CustomFieldHelper = CustomFieldConfigHelper<
  never,
  RefinedProps<never>,
  ComponentType<RefinedProps<never>>
>;

export type FullInterface<Interface extends GenericInterface> = Interface & {
  custom: {
    validator: CustomFieldHelper["Validator"];
    props: CustomFieldHelper["Props"];
  };
};
