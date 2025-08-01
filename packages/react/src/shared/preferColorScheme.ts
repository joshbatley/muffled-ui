import { ProvidedTheme } from '../utils';

export const InheritedTheme: ProvidedTheme = window.matchMedia('(prefers-color-scheme: light)').matches ? 'Light' : 'Dark';
