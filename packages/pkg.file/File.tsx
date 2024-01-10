import { Close, File as FileIcon } from '@xipkg/icons';
import { cn, formatBytesSize } from '@xipkg/utils';
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
  onDelete?: (name: string) => void;
};

export const File = ({ name, url, size, icon, onDelete, className }: FileProps) => {
  return (
    <div
      className={cn(
        'relative max-w-[377px] items-center flex h-[4.5rem] border border-gray-10 rounded-lg transition bg-gray-0 hover:bg-gray-10',
        className,
      )}
    >
      <Link
        href={url}
        download={name}
        className="w-full py-2 pr-[14px] pl-3 text-decoration-none flex items-center gap-2"
      >
        <div className="relative flex items-center justify-center w-12 h-12 shrink-0">
          {!icon ? <FileIcon /> : <Image src={icon} alt={name} className="rounded" fill />}
        </div>

        <div className="flex flex-col overflow-hidden text-left grow">
          <p className="font-medium leading-[22px] text-gray-100 truncate">{name}</p>
          <p className="text-sm leading-[20px] mt-0.5 text-gray-80">{formatBytesSize(size)}</p>
        </div>
        {onDelete && (
          <button
            onClick={(e) => {
              e.preventDefault();
              onDelete(name);
            }}
            className="p-1 transition bg-transparent rounded-full hover:bg-gray-0"
          >
            <Close />
          </button>
        )}
      </Link>
    </div>
  );
};
