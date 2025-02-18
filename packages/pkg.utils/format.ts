import { plural } from './index';

const FILE_SIZES = ['байт', 'Кб', 'Мб', 'Гб', 'Тб'];
const pluralByteForms = ['байт', 'байта', 'байтов'];
// coefficient bytes to Kb
const k = 1024;
export const formatBytesSize = (size: number): string => {
  const n: number = Math.floor(Math.log10(size) / Math.log10(k));
  const formattedSizeNum: number = Math.ceil(size / k ** n);
  const formattedSize: string = `${formattedSizeNum} ${
    !n ? plural(pluralByteForms, size) : FILE_SIZES[n]
  }`;
  return formattedSize;
};
