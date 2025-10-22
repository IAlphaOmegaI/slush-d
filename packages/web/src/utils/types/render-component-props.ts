import type { useRender } from "@base-ui-components/react";
import type {
  EmptyObject,
  Prettify,
  StrictOmit,
  StrictOverride,
} from "@zenncore/utils/types";
import type { ElementType } from "react";
import type { State } from "./component-state";

export type RenderComponentProps<
  T extends ElementType,
  S extends State = EmptyObject, // extends State | undefined = undefined
  // biome-ignore lint/suspicious/noExplicitAny: any for Component.Props to work
  C extends Record<string, any> = EmptyObject,
> = Prettify<
  StrictOverride<
    useRender.ComponentProps<T, S>,
    StrictOmit<C, "render" | "className"> & {
      className?:
        | string
        | (EmptyObject extends S ? never : (state: S) => string);
      //   className?: string | (S extends State ? (state: S) => string : never);
    }
  >
>;
