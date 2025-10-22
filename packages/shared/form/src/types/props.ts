import type { FullInterface, GenericInterface } from "./interface";
import type { GenericShape } from "./shape";

export type InferredProps<
  Interface extends GenericInterface,
  Shape extends GenericShape<Interface> = GenericShape<Interface>,
> = FullInterface<Interface>[Shape]["props"];

export type GenericProps = {
  value?: unknown;
  onChange?: (value: unknown) => void;
  defaultValue?: unknown;
};

export type RefinedProps<Value> = {
  value?: Value;
  onChange?: (value: Value) => void;
  defaultValue?: Value;
};

// export type Props<Value = unknown> = {
//   value?: Value;
//   onChange?: (value: Value) => void;
//   defaultValue?: Value;
// };
