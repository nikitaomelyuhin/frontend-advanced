import { HTMLAttributes, ReactNode } from 'react';

export enum ButtonThemes {
  CLEAR = 'clear',
  OUTLINE = 'outline',
  OUTLINE_DANGER = 'outline-danger',
  BACKGROUND = 'background',
  BACKGROUND_INVERTED = 'backgroundInverted',
}

export enum ButtonSize {
  M = 'size_m',
  L = 'size_l',
  XL = 'size_xl',
}

export interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme: ButtonThemes;
  square?: boolean;
  disabled?: boolean;
  size?: ButtonSize;
  children: ReactNode;
}
