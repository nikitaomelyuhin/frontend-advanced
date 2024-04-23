import { HTMLAttributes } from 'react';

export enum ButtonThemes {
    CLEAR = 'clear',
    OUTLINE = 'outline',
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
    size?: ButtonSize;
}
