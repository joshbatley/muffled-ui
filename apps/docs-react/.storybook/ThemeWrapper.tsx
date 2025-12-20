import {useIsDarkMode} from "./hooks.ts";
import {MuffledUI} from "@muffled-ui/ui-web";
import {Comp} from "./Toggler.tsx";
import React from "react";

export const ThemeWrapper = (Story: () => unknown) => {
  const isDark = useIsDarkMode();
  console.log(isDark ?? false);
  return (
    <MuffledUI>
      <Comp isDark={isDark ?? false}>
      {Story()}
      </Comp>
    </MuffledUI>
  )
}
