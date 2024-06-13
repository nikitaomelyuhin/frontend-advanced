export const AvatarSizes = {
  MD: 'md',
  SM: 'sm',
  LG: 'lg',
} as const;

export type AvatarSize = UnionType<typeof AvatarSizes>;
