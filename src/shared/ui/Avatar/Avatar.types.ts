export const AvatarSizes = {
  XS: 'xs',
  MD: 'md',
  SM: 'sm',
  LG: 'lg',
  XL: 'xl',
} as const;

export type AvatarSize = UnionType<typeof AvatarSizes>;
