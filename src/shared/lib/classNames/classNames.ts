export type Mods = Record<string, boolean>;

export function classNames(cls: string, mods: Mods = {}, additional: Array<string | undefined> = []) {
  return [
    cls,
    ...additional,
    ...Object.entries(mods)
      .filter(([_, value]) => Boolean(value))
      .map(([className]) => className),
  ].join(' ').trim();
}
