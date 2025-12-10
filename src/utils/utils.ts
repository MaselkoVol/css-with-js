export function convertIntoKebabCase(camelCaseStr: string) {
  return (
    camelCaseStr
      // 1. Handle CamelCase (iconSize -> icon-Size)
      .replace(/([a-z])([A-Z])/g, "$1-$2")
      // 2. Handle Numbers (blue500 -> blue-500 or spacing4 -> spacing-4)
      .replace(/([a-zA-Z])([0-9])/g, "$1-$2")
      // 3. Clean up and lowercase
      .toLowerCase()
  );
}

export type ValueOf<T> = T[keyof T];
