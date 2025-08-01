export type ColorTheme = {
  background: string;
  foreground: string;
  card: string;
  cardForeground: string;
  popover: string;
  popoverForeground: string;
  primary: string;
  primaryForeground: string;
  secondary: string;
  secondaryForeground: string;
  muted: string;
  mutedForeground: string;
  accent: string;
  accentForeground: string;
  destructive: string;
  destructiveForeground: string;
  border: string;
  input: string;
  ring: string;
  offsetBackground: string;
  offsetForeground: string;
  modalBackdrop: string;
};

export const LightThemeColors: ColorTheme = {
  background: 'hsl(0, 0%, 100%)',
  foreground: 'hsl(210, 15%, 20%)',
  card: 'hsl(0, 0%, 100%)',
  cardForeground: 'hsl(210, 15%, 20%)',
  popover: 'hsl(0, 0%, 100%)',
  popoverForeground: 'hsl(210, 15%, 20%)',
  primary: 'hsl(240, 5.9%, 10%)',
  primaryForeground: 'hsl(0, 0%, 98%)',
  secondary: 'hsl(210, 20%, 95%)',
  secondaryForeground: 'hsl(240, 5.9%, 10%)',
  muted: 'hsl(210, 20%, 95%)',
  mutedForeground: 'hsl(210, 10%, 40%)',
  accent: 'hsl(210, 20%, 95%)',
  accentForeground: 'hsl(240, 5.9%, 10%)',
  destructive: 'hsl(0, 84.2%, 60.2%)',
  destructiveForeground: 'hsl(0, 0%, 98%)',
  border: 'hsl(210, 16%, 90%)',
  input: 'hsl(210, 16%, 70%)',
  ring: 'hsl(240, 5.9%, 10%)',
  offsetBackground: 'hsl(0, 0%, 98%)',
  offsetForeground: 'hsl(210, 10%, 35%)',
  modalBackdrop: 'hsla(210, 20%, 82%, 0.40)',
};

export const DarkThemeColors: ColorTheme = {
  background: 'hsl(220, 15%, 10%)',
  foreground: 'hsl(0, 0%, 95%)',
  card: 'hsl(220, 15%, 10%)',
  cardForeground: 'hsl(0, 0%, 95%)',
  popover: 'hsl(220, 15%, 10%)',
  popoverForeground: 'hsl(0, 0%, 95%)',
  primary: 'hsl(0, 0%, 95%)',
  primaryForeground: 'hsl(220, 10%, 20%)',
  secondary: 'hsl(220, 5%, 20%)',
  secondaryForeground: 'hsl(0, 0%, 95%)',
  muted: 'hsl(220, 5%, 20%)',
  mutedForeground: 'hsl(220, 5%, 70%)',
  accent: 'hsl(220, 5%, 20%)',
  accentForeground: 'hsl(0, 0%, 95%)',
  destructive: 'hsl(0, 70%, 45%)',
  destructiveForeground: 'hsl(0, 0%, 95%)',
  border: 'hsl(220, 5%, 20%)',
  input: 'hsl(220, 5%, 40%)',
  ring: 'hsl(220, 5%, 70%)',
  offsetBackground: 'hsl(220, 10%, 15%)',
  offsetForeground: 'hsl(220, 5%, 90%)',
  modalBackdrop: 'rgba(38, 44, 54, 0.4)',
};

