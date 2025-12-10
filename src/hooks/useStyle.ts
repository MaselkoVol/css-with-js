import { useMemo } from "react";

export function useStyle(styles: Record<string, string>) {
  const memoStyles = useMemo(() => styles, []);
  return memoStyles;
}
