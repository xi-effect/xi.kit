/**
 * Converts the keys of an object from `snake_case` to `camelCase`.
 * Optionally, allows overriding key names using a conversion rules object.
 *
 * @template T - The type of the input object.
 *
 * @param dict - The object whose keys should be converted.
 * @param conversionRules - An optional mapping of original keys to custom key names.
 *                          If a key matches in this object, its name will be replaced
 *                          by the corresponding value.
 *                          Example: `{ old_key: "newKey" }`
 *
 * @returns A new object with the keys converted to `camelCase`, or replaced
 *          by custom key names from `conversionRules`.
 *
 * @example
 * ```typescript
 * const snakeCaseObject = {
 *   first_name: "John",
 *   last_name: "Doe",
 *   age: 30,
 * };
 *
 * const conversionRules = {
 *   last_name: "surname",
 * };
 *
 * const camelCaseObject = convertSnakeToCamelCase(snakeCaseObject, conversionRules);
 * console.log(camelCaseObject);
 * // Output: { firstName: "John", surname: "Doe", age: 30 }
 * ```
 */
export const convertSnakeToCamelCase = <T extends Record<string, any>>(
  dict: T,
  conversionRules?: Record<string, string>,
): Record<string, any> => {
  const toCamelCase = (str: string): string =>
    str.replace(/_([a-z])/g, (_, char) => char.toUpperCase());

  const result: Record<string, any> = {};

  for (const key in dict) {
    if (Object.prototype.hasOwnProperty.call(dict, key)) {
      const newKey =
        conversionRules && conversionRules[key] ? conversionRules[key] : toCamelCase(key);
      result[newKey] = dict[key];
    }
  }

  return result;
};

// Utility type to convert snake_case to camelCase at type level
export type CamelCase<S extends string> = S extends `${infer P1}_${infer P2}${infer P3}`
  ? `${P1}${Capitalize<P2>}${CamelCase<P3>}`
  : S;
