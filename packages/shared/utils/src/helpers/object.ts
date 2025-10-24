import { isPlainObject } from "es-toolkit/predicate";
import type { EmptyObject, Prettify } from "../types";

export type ValueOf<T> = T[keyof T];

export type PropertyAccessor<T extends EmptyObject> =
  | keyof T
  | ValueOf<{
      [K in keyof T as T[K] extends Record<string, unknown>
        ? K
        : // @ts-ignore: this is fine
          never]: `${K}.${PropertyAccessor<T[K]>}`;
    }>;

export type PropertyValue<
  T extends EmptyObject,
  K extends PropertyAccessor<T>
> = K extends keyof T
  ? T[K]
  : K extends `${infer K}.${infer R}`
  ? // @ts-ignore: this is fine
    PropertyValue<T[K], R>
  : never;

export const access = <T extends EmptyObject, A extends PropertyAccessor<T>>(
  accessee: T,
  accessor: A
): PropertyValue<T, A> => {
  const [key, ...rest] = accessor.toString().split(".");
  if (rest.length === 0) return accessee[key as keyof T] as PropertyValue<T, A>;
  // @ts-expect-error: this is fine
  return access(accessee[key as keyof T], rest);
};

export type IsOptional<T, K extends keyof T> = {} extends Pick<T, K>
  ? true
  : false;

export type Primitive = string | number | boolean | null | undefined;
// Helper type to check if a type is a plain object (not array, null, or primitive)
export type IsPlainObject<T> = T extends Record<string, any>
  ? T extends readonly any[]
    ? false
    : T extends Primitive
    ? false
    : true
  : false;

export type Merge<
  T extends Record<string, any>,
  U extends Record<string, any>
> = {
  [K in keyof T | keyof U]: K extends keyof U
    ? K extends keyof T
      ? IsPlainObject<T[K]> extends true
        ? IsPlainObject<U[K]> extends true
          ? Merge<T[K], U[K]> // Recursive merge for objects
          : U[K] // Overwrite with non-object
        : IsOptional<U, K> extends true
        ? IsOptional<T, K> extends true
          ? NonNullable<T[K]> | NonNullable<U[K]> | undefined
          : T[K] | NonNullable<U[K]>
        : U[K] // Overwrite with non-object
      : U[K] // New property
    : K extends keyof T
    ? T[K] // Keep existing property
    : never;
};

// Type for merging multiple objects
type MergeMultiple<T extends readonly Record<string, any>[]> =
  T extends readonly [infer First extends Record<string, any>, ...infer Rest]
    ? Rest["length"] extends 0
      ? First
      : // @ts-ignore: this is fine
        Prettify<Merge<First, MergeMultiple<Rest>>>
    : EmptyObject;

// Improved merge function with better typing
export const merge = <T extends Record<string, any>[]>(
  ...sources: T
): Prettify<MergeMultiple<T>> => {
  if (sources.length === 0) return {} as MergeMultiple<T>;

  const target = structuredClone(sources[0]) as Record<string, any>;

  if (!isPlainObject(target)) return {} as MergeMultiple<T>;

  for (const source of sources.slice(1)) {
    if (!isPlainObject(source)) continue;

    for (const key in source) {
      if (!Object.hasOwn(source, key)) continue;

      if (isPlainObject(target[key]) && isPlainObject(source[key])) {
        // Both target and source have nested objects for this key, recurse
        target[key] = merge(target[key] || {}, source[key]);
      } else {
        // Otherwise, overwrite or add the property
        target[key] = source[key];
      }
    }
  }

  return target as MergeMultiple<T>;
};

export { isPlainObject };
