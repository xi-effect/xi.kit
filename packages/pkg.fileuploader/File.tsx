import { Check, Close } from '@xipkg/icons';
import { cn } from '@xipkg/utils';
import { cva } from 'class-variance-authority';
import { FC } from 'react';
import Spinner from './Spinner';
import Tooltip from './Tooltip';
import { FileProps } from './types';

const containerStyles = cva(
  'flex relative group hover:text-gray-80 hover:bg-gray-5 items-center transition justify-between bg-gray-0 focus-within:bg-gray-5',
  {
    variants: {
      size: {
        medium: 'min-h-[40px] p-3 rounded-lg',
        small: 'h-8 p-2 rounded-md',
      },
    },
  },
);

export const File: FC<FileProps> = ({
  size = 'medium',
  isDeleteIcon = true,
  isPending,
  isSucceeded,
  error,
  name,
  onClick,
  onDeleteClick,
  onAbortRequestClick,
}) => {
  return (
    <div className={containerStyles({ size })}>
      <p
        className={cn(
          'break-all transition truncate pr-2.5',
          !!error ? 'text-red-80' : 'text-gray-90',
          onClick ? 'cursor-pointer' : 'cursor-default',
        )}
        onClick={onClick}
      >
        {error && (
          <>
            <span className="text-gray-100">Выбран файл</span>
            <Tooltip className="hidden group-hover:block" text={error} />
          </>
        )}{' '}
        {name}
      </p>

      <div className="flex [&_svg]:w-full [&_svg]:h-full items-center justify-center w-4 f-4 shrink-0">
        {(!error && isSucceeded && <Check />) ||
          (!error && isPending && (
            <>
              <Spinner className="group-hover:hidden" />
              <button
                className="hidden bg-transparent group-hover:inline-flex"
                onClick={onAbortRequestClick}
              >
                <Close />
              </button>
            </>
          )) ||
          (isDeleteIcon && (
            <button className="inline-flex bg-transparent" onClick={onDeleteClick}>
              <Close />
            </button>
          ))}
      </div>
    </div>
  );
};
