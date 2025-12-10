import { DarkTheme } from "./themes/dark";
import { LightTheme } from "./themes/light";

export const ColorVariantNames = [
  "light",
  "main",
  "dark",
  "text",
  "textMuted",
] as const;
export type ColorVariantName = (typeof ColorVariantNames)[number];

export type ColorVariant = Record<ColorVariantName, string>;

// enum and type for color names
export const ColorRoles = [
  "bg",
  "primary",
  "secondary",
  "accent",
  "disabled",
  "error",
  "success",
  "info",
  "warning",
] as const;
export type ColorRole = (typeof ColorRoles)[number];

export const ThemeCategories = ["light", "dark"] as const;
export type ThemeCategory = (typeof ThemeCategories)[number];

export const ThemeNames = ["light", "dark"] as const;
export type ThemeName = (typeof ThemeNames)[number];

export type ThemeVariant = {
  category: ThemeCategory;
  theme: Record<ColorRole, ColorVariant>;
};

// store all theams
export type Theme = Record<ThemeName, ThemeVariant>;
export const Theme: Theme = {
  light: LightTheme,
  dark: DarkTheme,
};
