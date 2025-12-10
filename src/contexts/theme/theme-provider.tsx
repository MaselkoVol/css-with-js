import React, { useEffect, useState } from "react";
import ThemeContext, { ThemeMode } from "./theme-context";
import { getStoredThemeOrDefault } from "../../utils/local-storage";
import { useMediaQuery } from "usehooks-ts";
import { setTheme } from "../../utils/design/dynamic/theme/utils";

type Props = {
  children: React.ReactNode;
};

const ThemeProvider = ({ children }: Props) => {
  const [themeMode, setThemeMode] = useState<ThemeMode>(
    getStoredThemeOrDefault
  );

  // save new theme mode into local storage
  useEffect(() => {
    localStorage.setItem("theme", themeMode);
  }, [themeMode]);

  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  // set up theme
  useEffect(() => {
    if (themeMode !== "system") {
      setTheme(themeMode);
    } else if (prefersDarkMode) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, [prefersDarkMode, themeMode]);

  return (
    <ThemeContext.Provider value={{ themeMode, setThemeMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
