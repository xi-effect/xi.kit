import { Upload } from '@xipkg/icons';
import { cva } from 'class-variance-authority';
import { ChangeEvent, DragEvent, useId, useRef, useState } from 'react';
import { FileUploaderProps } from './types';
import { formatFileSize, stopDefaultEvents, validateFile, validateSize } from './utils';

const containerStyles = cva(
  'w-full flex group items-center rounded-lg border border-dashed border-gray-40 bg-gray-0 transition px-2 max-w-[500px] gap-3 focus-within:border-solid focus-within:border-gray-80',
  {
    variants: {
      size: {
        large:
          'h-[92px] p-6 justify-center flex-col gap-2 border-brand-60 bg-brand-0 hover:border-brand-80',
        medium:
          'min-h-[48px] pt-3 pb-[14px] [&_svg]:w-6 [&_svg]:h-6 px-3 hover:bg-gray-5 hover:border-transparent',
        small:
          'min-h-[32px] pt-[5px] pb-[7px] [&_svg]:w-4 [&_svg]:h-4 px-2 rounded-md hover:bg-gray-5 hover:border-transparent',
      },
      isDragOver: {
        true: 'shadow-[0px_0px_0px_4px_#B4BDFF] border-4 border-brand-80 !border-solid',
      },
      isError: {
        true: 'border-2 !border-red-60 !border-solid',
      },
      isWarning: {
        true: 'border-2 !border-orange-80 !border-solid',
      },
      isDisabled: {
        true: 'border-gray-40 bg-gray-10 pointer-events-none border-2',
      },
    },
  },
);

const titleStyles = cva('text-sm text-center', {
  variants: {
    isDragOver: {
      true: 'pointer-events-none',
    },
    size: {
      large: 'text-brand-60 group-hover:text-brand-80 font-medium',
      medium: 'text-base text-gray-80 group-hover:text-gray-100',
      small: 'text-gray-80 group-hover:text-gray-100',
    },
  },
});

export const DEFAULT_EXTENSIONS = ['jpg', 'gif', 'png', 'pdf', 'zip'] as const;
const DEFAULT_SIZE_LIMIT = 6 * 1024 * 1024; // 6 MB

export const FileUploader = ({
  size = 'large',
  descriptionText,
  multiple,
  disabled,
  isWarning,
  onChange,
  limit = 3,
  bytesSizeLimit = DEFAULT_SIZE_LIMIT,
  extensions = DEFAULT_EXTENSIONS as any,
  children,
}: FileUploaderProps) => {
  const [isDragOver, setIsDragOver] = useState(false);
  const [error, setError] = useState('');

  const inputRef = useRef<HTMLInputElement>(null);
  const dragDeph = useRef(0);

  const id = useId();

  const isLarge = size === 'large';
  const formatedSizeLimit = formatFileSize(bytesSizeLimit);

  const handleDrop = (e: DragEvent<HTMLDivElement>) => {
    stopDefaultEvents(e);
    setIsDragOver(false);
    handleFilesChange(e.dataTransfer.files);
  };

  const handleFilesChange = (files?: FileList | null) => {
    setError('');
    if (!files || files.length == 0) return;

    const fileList = [...files];
    if (
      fileList.length > limit ||
      fileList.some((file) => !validateFile(file, extensions)) ||
      !validateSize(fileList, bytesSizeLimit)
    ) {
      return setError(
        `Можно отправить не более ${limit} файлов с расширением ${extensions.join(
          ', ',
        )} общим объёмом до ${formatedSizeLimit}`,
      );
    }

    onChange(fileList);
    if (inputRef.current) inputRef.current.value = '';
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    handleFilesChange(e.target.files);
  };

  const handleDragEnter = (e: React.DragEvent<HTMLDivElement>) => {
    dragDeph.current++;
    setIsDragOver(true);
  };

  const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    dragDeph.current--;
    if (dragDeph.current === 0) {
      setIsDragOver(false);
    }
  };

  const fileInput = (
    <input
      id={id}
      accept="image/*"
      onChange={handleChange}
      multiple={multiple}
      ref={inputRef}
      type="file"
      className="sr-only"
      disabled={disabled}
    />
  );

  return (
    <div>
      <label htmlFor={id} className="cursor-pointer">
        {children ? (
          <>
            {children}
            {fileInput}
          </>
        ) : (
          <div
            className={containerStyles({
              isDisabled: disabled,
              isDragOver,
              isError: !!error,
              isWarning,
              size,
            })}
            onDrop={handleDrop}
            onDragEnter={handleDragEnter}
            onDragOver={stopDefaultEvents}
            onDragLeave={handleDragLeave}
          >
            {fileInput}
            <p className={titleStyles({ isDragOver, size })}>
              {isLarge ? (
                'Перетащите сюда или выберите файл'
              ) : (
                <>
                  <span className="text-gray-90 group-hover:text-gray-100">Выберите файл</span> или
                  перетащите сюда
                </>
              )}
            </p>

            {isLarge && (
              <p className="text-xs group-hover:text-brand-60 text-brand-40">
                {descriptionText ||
                  `${extensions.map((el) => el.toUpperCase()).join(', ')} до ${formatedSizeLimit}`}
              </p>
            )}

            {!isLarge && <Upload className="ml-auto" />}
          </div>
        )}
      </label>
      {error && <p className="mt-4 text-sm leading-5 text-gray-100">{error}</p>}
    </div>
  );
};
