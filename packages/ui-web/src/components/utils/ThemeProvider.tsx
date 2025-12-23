import React, { createContext, useContext, useEffect, useState } from 'react';
import '../styled.css';

const LocalStorageKey = '@muffled-ui/settings';

export type ProvidedTheme = 'light' | 'dark' | 'system';

export type ThemeProviderProps = {
  theme?: ProvidedTheme;
  children?: React.ReactNode;
};

export type SettingsCtx = {
  theme: ProvidedTheme;
  setTheme: (theme: ProvidedTheme) => void;
  toggleTheme: () => void;
};

export const SettingsContext = createContext<SettingsCtx | undefined>(undefined);

export const useMuffledSettings = () => {
  let context = useContext(SettingsContext);

  if (context === undefined) {
    throw new Error('useMuffledSettings must be used within a MuffledUI provider');
  }

  return context;
};

export const MuffledUI: React.FC<ThemeProviderProps> = ({ children }) => {
  let [theme, setThemeKey] = useState<ProvidedTheme>(() => {
    if (localStorage.getItem(LocalStorageKey) !== null) {
      return JSON.parse(localStorage.getItem(LocalStorageKey) || '')?.theme;
    }
    return 'system';
  });

  useEffect(() => {
    const root = window.document.documentElement;

    root.classList.remove('light', 'dark');

    if (theme === 'system') {
      const systemTheme = window.matchMedia('(prefers-color-scheme: dark)')
        .matches
        ? 'dark'
        : 'light';

      root.classList.add(systemTheme);
      return;
    }
    console.log(root);
    root.classList.add(theme);
  }, [theme]);

  const setTheme =  (t: ProvidedTheme) => {
    localStorage.setItem(LocalStorageKey, JSON.stringify({ theme: t }));
    setThemeKey(t);
  };

  return (
    <SettingsContext.Provider value={{
      theme: theme as ProvidedTheme,
      setTheme: setTheme,
      toggleTheme: () => setTheme(theme === 'dark' ? 'light' : 'dark'),
    }}>
      {children}
  </SettingsContext.Provider>
  );
};

