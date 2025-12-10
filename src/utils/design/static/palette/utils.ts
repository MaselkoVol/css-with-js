import {
  ColorBase,
  ColorShade,
  Palette,
  PaletteConfig,
  Shades,
} from "./config";

const MAX_SHADE = 1000;
const MIN_SHADE = 0;
const SHADE_LIGHTNESS_RATIO = 10;

// converts shades into oklch lightness
function convertIntoLightness(shade: number) {
  if (shade > MAX_SHADE) shade = MAX_SHADE;
  if (shade < MIN_SHADE) shade = MIN_SHADE;
  const lightness = (MAX_SHADE - shade) / SHADE_LIGHTNESS_RATIO;
  return Math.round(lightness);
}

// converts h and c into pallete of shades
function convertIntoColorShade(base: ColorBase) {
  const res: Record<string, string> = {};
  for (const shade of Shades) {
    const l = convertIntoLightness(shade);
    res[shade] = `oklch(${l}% ${base.c} ${base.h})`;
  }
  return res as ColorShade;
}

// converts primitive base colors into set of palettes
export function convertIntoPalette(paletteConfig: PaletteConfig) {
  const res: Record<string, ColorShade> = {};
  for (const [color, base] of Object.entries(paletteConfig)) {
    res[color] = convertIntoColorShade(base);
  }
  return res as Palette;
}
