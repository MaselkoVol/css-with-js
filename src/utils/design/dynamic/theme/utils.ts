import { convertIntoKebabCase } from "../../../utils";
import { setGlobalCssVariable } from "../dynamic";
import {
  ColorRole,
  ColorVariant,
  ColorVariantName,
  ColorVariantNames,
  Theme,
  ThemeCategory,
  ThemeName,
} from "./config/config";

// helper function to transform color and variant into css variable
function getCssVariable(role: ColorRole | "color", variant: ColorVariantName) {
  const rolePascal = convertIntoKebabCase(role);
  const variantPascal = convertIntoKebabCase(variant);
  return `--${rolePascal}-${variantPascal}`;
}

// helper function to set every variants of one color
function setOneColor(role: ColorRole, variant: ColorVariant) {
  for (const [variantName, color] of Object.entries(variant)) {
    const variable = getCssVariable(role, variantName as ColorVariantName);
    setGlobalCssVariable(variable, color);
  }
}

export function setColorScheme(themeCategory: ThemeCategory) {
  document.documentElement.style.colorScheme = themeCategory;
}

// change css variables for current theme
export function setTheme(theme: ThemeName) {
  const themeVariant = Theme[theme];
  setColorScheme(themeVariant.category);
  for (const [colorRole, colorVariant] of Object.entries(themeVariant.theme)) {
    setOneColor(colorRole as ColorRole, colorVariant);
  }
}

// transform color name into ColorVarint object
export function getCssVariables(colorRole: ColorRole) {
  const result: Record<string, string> = {};
  for (const variant of Object.values(ColorVariantNames)) {
    const keyColor = getCssVariable("color", variant);
    const valueColor = getCssVariable(colorRole, variant);
    result[keyColor] = `var(${valueColor})`;
  }
  return result;
}
