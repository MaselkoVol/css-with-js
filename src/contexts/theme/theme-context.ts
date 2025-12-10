import { createContext } from "react";
import { ThemeName } from "../../utils/design/dynamic/theme/config/config";

export type ThemeMode = ThemeName | "system";

type ThemeContextType = {
  themeMode: ThemeMode;
  setThemeMode: React.Dispatch<React.SetStateAction<ThemeMode>>;
};

const ThemeContext = createContext<ThemeContextType>({
  themeMode: "system",
  setThemeMode: () => {},
});
export default ThemeContext;
