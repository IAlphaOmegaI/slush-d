import type { GenericValidator, ReducedValidator } from "../validator";
import type { FullInterface, GenericInterface } from "./interface";

export type GenericShape<Interface extends GenericInterface> =
  keyof FullInterface<Interface>;

export type InferredValidatorShape<
  Interface extends GenericInterface,
  Validator extends GenericValidator,
> = {
  [K in keyof FullInterface<Interface>]: Interface[K]["validator"] extends ReducedValidator<Validator>
    ? K
    : never;
}[keyof Interface];
