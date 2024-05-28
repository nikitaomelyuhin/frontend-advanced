export const TextThemes = {
  PRIMARY: 'primary',
  ERROR: 'error',
} as const;

export type TextTheme = UnionType<typeof TextThemes>;

export interface TextProps {
  className?: string;
  title?: string;
  text?: string;
  theme?: TextTheme;
}
