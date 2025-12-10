import { ThemeMode } from "../contexts/theme/theme-context";

export type LocalStorageVariable = "theme";

export function getStoredThemeOrDefault(): ThemeMode {
  const theme = localStorage.getItem("theme");
  if (!theme) return "system";
  return theme as ThemeMode;
}
