import {
  type Options as BaseOptions,
  defineConfig,
  type UserConfigFn,
} from "tsdown";

type Options = {
  preserveDirectives?: boolean;
} & BaseOptions;

//TODO: find better names
export type TsdownOptions = Omit<Options, "config" | "filter">;
export type TsdownOptionsArray = Omit<Options, "config" | "filter">[];

export type TsdownConfig = TsdownOptions | TsdownOptionsArray;

// export type TsdownOptions = Omit<Options, "config" | "filter">;
// export type TsdownMultiOptions = Omit<Options, "config" | "filter">[];

// export type TsdownConfig = TsdownOptions | TsdownMultiOptions;

const mergeOptions = (
  { preserveDirectives, ...options }: Options,
  defaultOptions: BaseOptions,
): BaseOptions => {
  return {
    ...defaultOptions,
    ...options,

    outputOptions: {
      ...defaultOptions.outputOptions,
      preserveModules: preserveDirectives,
      ...options.outputOptions,
    },
  };
};

export const createTsdownConfig = (
  options: TsdownConfig = {},
): UserConfigFn => {
  return defineConfig((flagOptions) => {
    const defaultOptions = {
      entry: ["./src/**/index.ts"],
      dts: true,
      external: ["react"],

      // production build options
      minify: !flagOptions.watch,
      sourcemap: !flagOptions.watch,

      ...flagOptions,
    } satisfies BaseOptions;

    return Array.isArray(options)
      ? options.map((options) => mergeOptions(options, defaultOptions))
      : mergeOptions(options, defaultOptions);
  });
};
