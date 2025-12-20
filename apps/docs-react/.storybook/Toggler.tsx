import React, {useCallback} from "react";
import {useMuffledSettings} from "@muffled-ui/ui-web";
import {useOnDarkModeEvent, useUpdateDarkMode} from "./hooks.ts";

export const Comp: React.FC<{ isDark?: boolean, children: any }> = ({ children, isDark }) => {
  const { theme, setTheme } = useMuffledSettings();
  const handleColorScheme = useCallback((value: any) => {
    setTheme(value ? 'dark' : 'light')
  }, [setTheme])
  useOnDarkModeEvent(handleColorScheme)

  return (
    <div>{children}</div>
  )
}
