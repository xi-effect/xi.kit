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
        'border-gray-10 bg-gray-0 hover:bg-gray-10 relative flex h-[4.5rem] max-w-[377px] items-center rounded-lg border transition',
        className,
      )}
    >
      <Link
        href={url}
        download={name}
        className="text-decoration-none flex w-full items-center gap-2 py-2 pl-3 pr-[14px]"
      >
        <div className="relative flex h-12 w-12 shrink-0 items-center justify-center">
          {!icon ? <FileIcon /> : <Image src={icon} alt={name} className="rounded" fill />}
        </div>

        <div className="flex grow flex-col overflow-hidden text-left">
          <p className="truncate font-medium leading-[22px] text-gray-100">{name}</p>
          <p className="text-gray-80 mt-0.5 text-sm leading-[20px]">{formatBytesSize(size)}</p>
        </div>
        {onDelete && (
          <button
            onClick={(e) => {
              e.preventDefault();
              onDelete(name);
            }}
            className="hover:bg-gray-0 rounded-full bg-transparent p-1 transition"
          >
            <Close />
          </button>
        )}
      </Link>
    </div>
  );
};
