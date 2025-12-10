import { Palette } from "../../../../static/palette/palette";
import { ThemeVariant } from "../config";
// 50 100 150 900 800 / 100 150 200 750 650
export const LightTheme: ThemeVariant = {
  category: "light",
  theme: {
    bg: {
      light: Palette.grey[50],
      main: Palette.grey[100],
      dark: Palette.grey[150],
      text: Palette.grey[900],
      textMuted: Palette.grey[850],
    },
    primary: {
      light: Palette.purple[200],
      main: Palette.purple[250],
      dark: Palette.purple[300],
      text: Palette.purple[800],
      textMuted: Palette.purple[750],
    },
    secondary: {
      light: Palette.blue[200],
      main: Palette.blue[250],
      dark: Palette.blue[300],
      text: Palette.blue[800],
      textMuted: Palette.blue[750],
    },
    accent: {
      light: Palette.yellow[200],
      main: Palette.yellow[250],
      dark: Palette.yellow[300],
      text: Palette.yellow[800],
      textMuted: Palette.yellow[750],
    },
    disabled: {
      light: Palette.grey[200],
      main: Palette.grey[250],
      dark: Palette.grey[300],
      text: Palette.grey[800],
      textMuted: Palette.grey[750],
    },
    error: {
      light: Palette.red[200],
      main: Palette.red[250],
      dark: Palette.red[300],
      text: Palette.red[800],
      textMuted: Palette.red[750],
    },
    warning: {
      light: Palette.yellow[200],
      main: Palette.yellow[250],
      dark: Palette.yellow[300],
      text: Palette.yellow[800],
      textMuted: Palette.yellow[750],
    },
    success: {
      light: Palette.green[200],
      main: Palette.green[250],
      dark: Palette.green[300],
      text: Palette.green[800],
      textMuted: Palette.green[750],
    },
    info: {
      light: Palette.blue[200],
      main: Palette.blue[250],
      dark: Palette.blue[300],
      text: Palette.blue[800],
      textMuted: Palette.blue[750],
    },
  },
} as const;
