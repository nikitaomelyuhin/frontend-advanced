export const TextThemes = {
  PRIMARY: 'primary',
  ERROR: 'error',
  INVERTED: 'inverted',
} as const;

export type TextTheme = UnionType<typeof TextThemes>;

export const TextAligns = {
  LEFT: 'left',
  CENTER: 'center',
  RIGHT: 'right',
} as const;

export type TextAlign = UnionType<typeof TextAligns>;

export const TextSizes = {
  M: 'm',
  L: 'l',
} as const;

export type TextSize = UnionType<typeof TextSizes>;
export interface TextProps {
  className?: string;
  title?: string;
  text?: string;
  theme?: TextTheme;
  textAlign?: TextAlign;
  size?: TextSize;
}
