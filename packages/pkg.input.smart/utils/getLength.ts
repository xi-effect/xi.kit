export const getLength = (token: any) => {
  if (typeof token === 'string') {
    return token.length; // Если токен — строка, возвращаем его длину
  } else if (typeof token.content === 'string') {
    return token.content.length; // Если содержимое токена — строка, возвращаем его длину
  } else if (Array.isArray(token.content)) {
    // Если содержимое токена — массив, суммируем длины всех его элементов
    return token.content.reduce((length: number, t: any) => length + getLength(t), 0);
  }
  return 0; // Если токен не является строкой или массивом, возвращаем 0
};
