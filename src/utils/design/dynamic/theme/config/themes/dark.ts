import { Palette } from "../../../../static/palette/palette";
import { ThemeVariant } from "../config";
// 800 850 900 50 150 / 700 750 800 150 250
export const DarkTheme: ThemeVariant = {
  category: "dark",
  theme: {
    bg: {
      light: Palette.grey[800],
      main: Palette.grey[850],
      dark: Palette.grey[900],
      text: Palette.grey[50],
      textMuted: Palette.grey[100],
    },
    primary: {
      light: Palette.purple[600],
      main: Palette.purple[650],
      dark: Palette.purple[700],
      text: Palette.grey[50],
      textMuted: Palette.purple[50],
    },
    secondary: {
      light: Palette.blue[600],
      main: Palette.blue[650],
      dark: Palette.blue[700],
      text: Palette.grey[50],
      textMuted: Palette.blue[150],
    },
    accent: {
      light: Palette.yellow[600],
      main: Palette.yellow[650],
      dark: Palette.yellow[700],
      text: Palette.grey[50],
      textMuted: Palette.yellow[50],
    },
    error: {
      light: Palette.red[600],
      main: Palette.red[650],
      dark: Palette.red[700],
      text: Palette.red[50],
      textMuted: Palette.red[100],
    },
    warning: {
      light: Palette.yellow[700],
      main: Palette.yellow[750],
      dark: Palette.yellow[800],
      text: Palette.yellow[150],
      textMuted: Palette.yellow[250],
    },
    success: {
      light: Palette.green[700],
      main: Palette.green[750],
      dark: Palette.green[800],
      text: Palette.green[150],
      textMuted: Palette.green[250],
    },
    disabled: {
      light: Palette.grey[700],
      main: Palette.grey[750],
      dark: Palette.grey[800],
      text: Palette.grey[150],
      textMuted: Palette.grey[250],
    },
    info: {
      light: Palette.blue[700],
      main: Palette.blue[750],
      dark: Palette.blue[800],
      text: Palette.blue[150],
      textMuted: Palette.blue[250],
    },
  },
} as const;
