import {useEffect, useState} from "react";
import { addons } from 'storybook/preview-api';
import { DARK_MODE_EVENT_NAME, UPDATE_DARK_MODE_EVENT_NAME } from '@vueless/storybook-dark-mode';
import { Listener } from "storybook/internal/channels";

const channel = addons.getChannel()

export function useOnDarkModeEvent(callback: Listener) {
  useEffect(function () {
    channel.on(DARK_MODE_EVENT_NAME, callback)
    return () => channel.off(DARK_MODE_EVENT_NAME, callback)
  })
}

export function useIsDarkMode() {
  const [isDarkMode, setIsDarkMode] = useState()
  useOnDarkModeEvent(setIsDarkMode)
  return isDarkMode
}

export function useUpdateDarkMode(theme: string) {
  useEffect(() => {
    channel.emit(UPDATE_DARK_MODE_EVENT_NAME);
  }, [theme])
}
