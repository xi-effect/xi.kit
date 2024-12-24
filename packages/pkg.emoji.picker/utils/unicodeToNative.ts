export const unicodeToNative = (unicode: string) => {
  return unicode
    .split('-')
    .map((u: string) => String.fromCodePoint(parseInt(u, 16)))
    .join('');
};
