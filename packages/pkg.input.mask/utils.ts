export const dictionary: Record<string | number, RegExp> = {
  9: /\d/,
  S: /[A-Za-z]/,
  U: /[A-Z]/,
  A: /[A-Z0-9]/,
  Я: /[А-я]/,
};

export const mapToArray = (mask = ''): (string | RegExp)[] => {
  return mask.split('').map((char) => {
    return dictionary[char] ? dictionary[char] : char;
  });
};
