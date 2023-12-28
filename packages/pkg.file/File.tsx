import { Close, File as FileIcon } from '@xipkg/icons';
import { cn } from '@xipkg/utils';
import Image from 'next/image';
import Link from 'next/link';

export type FileProps = {
  /* File name */
  name: string;
  /* File url */
  url: string;
  /* File size in bytes */
  size: number;
  /* File icon (screenshot/image) url */
  icon?: string;
  className?: string;
  onDelete: (name: string) => void;
};

const FILE_SIZES = ['байт', 'Кб', 'Мб', 'Гб', 'Тб'];
// format byte word in right form
// 1, 5, 6... байт (standart form)
// 2, 3, 4 байта (changed form)
const formatByteWord = (size: number): string => {
  const lastDigit: number = size % 10;
  /* Size ends with one of this digits => change form */
  const changeFormNums: number[] = [2, 3, 4];
  if (changeFormNums.includes(lastDigit)) {
    return 'байта';
  }
  return 'байт';
};
// coefficient bytes to Kb
const k = 1000;
const formatSize = (size: number): string => {
  const n: number = Math.floor(Math.log10(size) / Math.log10(k));
  const formattedSizeNum: number = Math.ceil(size / k ** n);
  const formattedSize: string = `${formattedSizeNum} ${!n ? formatByteWord(size) : FILE_SIZES[n]}`;
  return formattedSize;
};

export const File = ({ name, url, size, icon, onDelete, className }: FileProps) => {
  return (
    <div
      className={cn(
        'relative max-w-[377px] items-center flex h-[4.5rem] border border-gray-10 rounded-[8px] transition bg-gray-0 hover:bg-gray-10',
        className,
      )}
    >
      <Link
        href={url}
        download={name}
        className="w-full py-2 pr-[14px] pl-3 text-decoration-none flex items-center gap-2"
      >
        <div className="flex items-center justify-center w-12 h-12 shrink-0">
          {(!icon && (
            <div className="max-w-[48px] max-h-12 h-full w-full">
              <FileIcon />
            </div>
          )) || (
            <div className="max-w-[48px] max-h-12">
              <Image
                src={icon || ''}
                alt={name}
                className="rounded w-full h-full max-h-[inherit]"
                width={0}
                height={0}
              />
            </div>
          )}
        </div>

        <div className="flex flex-col overflow-hidden text-left grow">
          <p className="font-medium leading-[22px] text-gray-100 truncate">{name}</p>
          <p className="text-sm leading-[20px] mt-0.5 text-gray-80">{formatSize(size)}</p>
        </div>
        <button
          onClick={() => onDelete(name)}
          className="p-1 transition bg-transparent rounded-full hover:bg-gray-0"
        >
          <Close />
        </button>
      </Link>
    </div>
  );
};
