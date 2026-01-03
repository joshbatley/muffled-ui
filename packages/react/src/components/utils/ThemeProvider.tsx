import React, { createContext, useContext, useEffect, useState } from 'react'

const LocalStorageKey = '@muffled-ui/settings'

export type ProvidedTheme = 'light' | 'dark' | 'system'

export type ThemeProviderProps = {
  defaultTheme?: ProvidedTheme
  children?: React.ReactNode
}

export type SettingsCtx = {
  theme: ProvidedTheme
  setTheme: (theme: ProvidedTheme) => void
  toggleTheme: () => void
}

export const SettingsContext = createContext<SettingsCtx | undefined>(undefined)

export const useMuffledSettings = () => {
  const context = useContext(SettingsContext)

  if (context === undefined) {
    throw new Error('useMuffledSettings must be used within a MuffledUI provider')
  }

  return context
}

export const MuffledUI: React.FC<ThemeProviderProps> = ({ children, defaultTheme }) => {
  const [theme, setThemeKey] = useState<ProvidedTheme>(() => {
    if (localStorage.getItem(LocalStorageKey) !== null) {
      return JSON.parse(localStorage.getItem(LocalStorageKey) || '')?.theme
    }
    return defaultTheme ? defaultTheme : 'system'
  })

  const setTheme = (t: ProvidedTheme) => {
    localStorage.setItem(LocalStorageKey, JSON.stringify({ theme: t }))
    setThemeKey(t)
  }

  useEffect(() => {
    const root = window.document.documentElement

    root.classList.remove('light', 'dark')

    if (theme === 'system') {
      const systemTheme = window.matchMedia('(prefers-color-scheme: dark)')
        .matches
        ? 'dark'
        : 'light'

      root.classList.add(systemTheme)
      setTheme(systemTheme)
      return
    }
    setTheme(theme)
    root.classList.add(theme)
  }, [theme])

  return (
    <SettingsContext.Provider value={{
      theme: theme as ProvidedTheme,
      setTheme: setTheme,
      toggleTheme: () => setTheme(theme === 'dark' ? 'light' : 'dark'),
    }}
    >
      {children}
    </SettingsContext.Provider>
  )
}
