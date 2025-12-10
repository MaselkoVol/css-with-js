import { ValueOf } from "../../../utils";

// variables definition

export const Breakpoint = {
  xs: "480px",
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1280px",
} as const;
export type Breakpoint = ValueOf<typeof Breakpoint>;

export const ContainerWidth = {
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1280px",
  prose: "65ch",
} as const;
export type ContainerWidth = ValueOf<typeof ContainerWidth>;

export const IconSize = {
  sm: "0.875rem",
  md: "1rem",
  lg: "1.25rem",
  xl: "1.5rem",
} as const;
export type IconSize = ValueOf<typeof IconSize>;

export const FontFamily = {
  sans: 'system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
  mono: "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace",
} as const;
export type FontFamily = ValueOf<typeof FontFamily>;

export const FontWeight = {
  normal: "400",
  medium: "500",
  bold: "700",
} as const;
export type FontWeight = ValueOf<typeof FontWeight>;

export const Spacing = {
  "1": "0.25rem",
  "2": "0.5rem",
  "4": "1rem",
  "8": "2rem",
  "12": "3rem",
  "16": "4rem",
  "20": "5rem",
  "24": "6rem",
} as const;
export type Spacing = ValueOf<typeof Spacing>;

export const BorderWidth = {
  "1": "1px",
  "2": "2px",
  "4": "4px",
  "8": "8px",
} as const;
export type BorderWidth = ValueOf<typeof BorderWidth>;

export const FontSize = {
  xs: "0.75rem",
  sm: "0.875rem",
  md: "1rem",
  lg: "1.125rem",
  xl: "1.25rem",
  "2xl": "1.5rem",
  "3xl": "1.875rem",
} as const;
export type FontSize = ValueOf<typeof FontSize>;

export const LineHeight = {
  none: "1",
  tight: "1.25",
  normal: "1.5",
  loose: "2",
} as const;
export type LineHeight = ValueOf<typeof LineHeight>;

export const BorderRadius = {
  sm: "0.125rem",
  md: "0.25rem",
  lg: "0.5rem",
  xl: "1rem",
  full: "9999px",
} as const;
export type BorderRadius = ValueOf<typeof BorderRadius>;

export const Transparency = {
  "95": "0.05",
  "90": "0.1",
  "80": "0.2",
  "60": "0.4",
  "40": "0.6",
  "20": "0.8",
} as const;
export type Transparency = ValueOf<typeof Transparency>;

export const Layer = {
  "10": "100",
  "20": "200",
  "30": "300",
  "40": "400",
  "50": "500",
  auto: "auto",
} as const;
export type Layer = ValueOf<typeof Layer>;

// Connect variables to the system

export const Variable = {
  containerWidth: ContainerWidth,
  iconSize: IconSize,
  spacing: Spacing,
  borderWidth: BorderWidth,
  borderRadius: BorderRadius,
  transparency: Transparency,
  breakpoint: Breakpoint,
  fontSize: FontSize,
  fontWeight: FontWeight,
  lineHeight: LineHeight,
  layer: Layer,
  fontFamily: FontFamily,
};

export type VariableName = keyof typeof Variable;
export type VariableMapping = Record<VariableName, string>;

// Map variables with scss prefixes

export const VariableMapping: VariableMapping = {
  containerWidth: "cw",
  iconSize: "is",
  spacing: "s",
  borderWidth: "b",
  borderRadius: "br",
  transparency: "t",
  breakpoint: "bp",
  fontSize: "fs",
  fontWeight: "fw",
  lineHeight: "lh",
  layer: "l",
  fontFamily: "ff",
} as const;
