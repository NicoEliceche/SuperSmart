import { tokens } from './tokens';

export const theme = {
  color: tokens.color,
  radius: tokens.radius,
  typography: tokens.typography,
  spacing: tokens.spacing,
  layout: tokens.layout,
  shadow: tokens.shadow,
  breakpoints: tokens.breakpoints,
} as const;

export type Theme = typeof theme;
