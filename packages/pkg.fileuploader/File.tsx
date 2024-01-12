import { Check, Close } from '@xipkg/icons';
import { cn } from '@xipkg/utils';
import { cva } from 'class-variance-authority';
import { FC } from 'react';
import Spinner from './Spinner';
import Tooltip from './Tooltip';
import { FileProps } from './types';
import { stopDefaultEvents } from './utils';

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
  isPending,
  isSucceeded,
  error,
  name,
  onDeleteClick,
  onAbortRequestClick,
}) => {
  const handleClose = (e: React.MouseEvent<HTMLButtonElement>) => {
		isPending || isSucceeded ? onAbortRequestClick?.() : onDeleteClick?.();
    stopDefaultEvents(e);
  };

  return (
    <div className={containerStyles({ size })}>
      <p
        className={cn(
          'break-all transition truncate pr-2.5',
          !!error ? 'text-red-80' : 'text-gray-90',
        )}
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
        <div className="group-hover:hidden">
          {(isSucceeded && <Check />) || (isPending && <Spinner />)}
        </div>

        {onDeleteClick && (
          <button
            className={cn(
              'inline-flex bg-transparent',
              isPending || (isSucceeded && 'hidden group-hover:inline-flex'),
            )}
            onClick={handleClose}
          >
            <Close />
          </button>
        )}
      </div>
    </div>
  );
};
