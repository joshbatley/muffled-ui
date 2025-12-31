import React, {useCallback } from "react";
import {useMuffledSettings} from "@muffled-ui/react";
import {useOnDarkModeEvent } from "./hooks.ts";


export const Comp: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { theme, setTheme } = useMuffledSettings();
  const handleColorScheme = useCallback((value: boolean) => {
    setTheme(value ? 'dark' : 'light')
  }, [setTheme]);
  useOnDarkModeEvent(handleColorScheme);

  return (
    <div>{children}</div>
  )
}
