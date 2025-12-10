// valid values only from 0 to 1000
export const Shades = [
  50, 100, 150, 200, 250, 300, 350, 400, 450, 500, 550, 600, 650, 700, 750, 800,
  850, 900,
] as const;
export type Shade = (typeof Shades)[number];

// oklch
export type ColorBase = { c: number; h: number };

export const PaletteConfig = {
  grey: { c: 0.02, h: 300 },
  purple: { c: 0.15, h: 300 },
  blue: { c: 0.15, h: 235 },
  yellow: { c: 0.15, h: 98 },
  red: { c: 0.15, h: 30 },
  green: { c: 0.15, h: 155 },
} as const;
export type PaletteConfig = typeof PaletteConfig;

export type ColorShade = Record<Shade, string>;
export type Color = keyof typeof PaletteConfig;
export type Palette = Record<Color, ColorShade>;
