import { Upload } from '@xipkg/icons';
import { formatBytesSize, plural } from '@xipkg/utils';
import { cva } from 'class-variance-authority';
import { ChangeEvent, DragEvent, useId, useRef, useState } from 'react';
import { FileUploaderProps, DefaultInputPropsT } from './types';
import { stopDefaultEvents, validateSize } from './utils';

const containerStyles = cva(
  'flex group items-center rounded-lg border border-dashed border-gray-40 bg-gray-0 dark:border-gray-60 dark:bg-gray-100 transition-[outline_shadow] px-2 max-w-[500px] gap-3 focus-within:border-solid focus-within:border-gray-80 dark:focus-within:border-gray-40',
  {
    variants: {
      size: {
        large:
          'h-[92px] p-6 justify-center flex-col gap-2 border-brand-60 bg-brand-0 hover:border-brand-80 dark:border-brand-40 dark:bg-brand-20 dark:hover:border-brand-60',
        medium:
          'min-h-[48px] pt-3 pb-[14px] [&_svg]:w-6 [&_svg]:h-6 px-3 hover:bg-gray-5 dark:hover:bg-gray-90 hover:border-transparent',
        small:
          'min-h-[32px] pt-[5px] pb-[7px] [&_svg]:w-4 [&_svg]:h-4 px-2 rounded-md hover:bg-gray-5 dark:hover:bg-gray-90 hover:border-transparent',
      },
      isDragOver: {
        true: 'shadow-[0px_0px_0px_4px_var(--xi-brand-80)] outline-offset-4 outline-4 outline-brand-20 outline border-transparent dark:shadow-[0px_0px_0px_4px_var(--xi-brand-60)] dark:outline-brand-40',
      },
      isWarning: {
        true: 'ring-2 ring-orange-80 dark:ring-orange-40 !border-transparent',
      },
      isDisabled: {
        true: 'bg-gray-10 dark:bg-gray-90 pointer-events-none border-gray-30 dark:border-gray-70',
      },
    },
  },
);

const titleStyles = cva('text-sm text-center', {
  variants: {
    isDragOver: {
      true: 'pointer-events-none',
    },
    isDisabled: {
      true: '!text-gray-30 dark:!text-gray-60 [&_span]:text-gray-30 dark:[&_span]:text-gray-60',
    },
    size: {
      large:
        'text-brand-60 group-hover:text-brand-80 dark:text-brand-40 dark:group-hover:text-brand-60 font-medium',
      medium:
        'text-base text-gray-80 group-hover:text-gray-100 dark:text-gray-40 dark:group-hover:text-gray-20',
      small:
        'text-gray-80 group-hover:text-gray-100 dark:text-gray-40 dark:group-hover:text-gray-20',
    },
  },
});

const DEFAULT_SIZE_LIMIT = 6 * 1024 * 1024; // 6 MB

const pluralFiles = ['файла', 'файлов', 'файлов'];

export const FileUploader = ({
  size = 'medium',
  descriptionText,
  disabled,
  isWarning,
  onChange,
  onFileError,
  enableErrorHandling = true,
  limit = 3,
  bytesSizeLimit = DEFAULT_SIZE_LIMIT,
  children,
  validateBeforeUpload,
  fileTypesHint,
  acceptedFileTypes,
  ...inputProps
}: FileUploaderProps & DefaultInputPropsT) => {
  const [isDragOver, setIsDragOver] = useState(false);

  const inputRef = useRef<HTMLInputElement>(null);
  const dragDeph = useRef(0);

  const id = useId();

  const isLarge = size === 'large';
  const formatedSizeLimit = formatBytesSize(bytesSizeLimit);

  const handleError = (fileList: File[]): boolean => {
    if (!enableErrorHandling || !onFileError) {
      return false;
    }

    if (fileList.length > limit) {
      onFileError(
        `Можно отправить не более ${limit} ${plural(
          pluralFiles,
          limit,
        )} общим объёмом до ${formatedSizeLimit}`,
      );
      return true;
    }

    if (acceptedFileTypes && acceptedFileTypes.length > 0) {
      const invalidTypeFile = fileList.find((file) => {
        const fileType = file.type.toLowerCase();
        const fileName = file.name.toLowerCase();

        return !acceptedFileTypes.some((acceptedType) => {
          const normalizedAcceptedType = acceptedType.toLowerCase().trim();

          if (fileType === normalizedAcceptedType) {
            return true;
          }

          if (normalizedAcceptedType.endsWith('/') && fileType.startsWith(normalizedAcceptedType)) {
            return true;
          }

          if (normalizedAcceptedType.startsWith('.')) {
            return fileName.endsWith(normalizedAcceptedType);
          }

          if (fileName.endsWith(`.${normalizedAcceptedType}`)) {
            return true;
          }

          return false;
        });
      });

      if (invalidTypeFile) {
        const displayTypes = acceptedFileTypes
          .map((type) => {
            if (type.startsWith('.')) {
              return type.toUpperCase();
            }
            if (type.includes('/')) {
              return type.split('/')[1]?.toUpperCase() || type.toUpperCase();
            }
            return type.toUpperCase();
          })
          .join(', ');

        onFileError(`Неподдерживаемый формат файла. Разрешены: ${displayTypes}`);
        return true;
      }
    }

    if (validateBeforeUpload) {
      const validationError = validateBeforeUpload(fileList);
      if (validationError) {
        if(typeof validationError === 'string'){
          onFileError(validationError);
        }else{
          onFileError(validationError.titleError, validationError.subtitleError);
        }
        
        return true;
      }
    }

    return false;
  };

  const handleDrop = (e: DragEvent<HTMLDivElement>) => {
    stopDefaultEvents(e);
    setIsDragOver(false);
    handleFilesChange(e.dataTransfer.files);
  };

  const handleFilesChange = (files?: FileList | null) => {
    if (!files || files.length == 0) return;

    const fileList = [...files];
    if (handleError(fileList)) {
      return;
    }

    onChange(fileList);
    if (inputRef.current) inputRef.current.value = '';
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    handleFilesChange(e.target.files);
  };

  const handleDragEnter = (_e: React.DragEvent<HTMLDivElement>) => {
    dragDeph.current++;
    setIsDragOver(true);
  };

  const handleDragLeave = (_e: React.DragEvent<HTMLDivElement>) => {
    dragDeph.current--;
    if (dragDeph.current === 0) {
      setIsDragOver(false);
    }
  };

  const fileInput = (
    <input
      id={id}
      onChange={handleChange}
      ref={inputRef}
      type="file"
      className="sr-only"
      disabled={disabled}
      {...inputProps}
    />
  );

  return (
    <div>
      <label htmlFor={id} className={disabled ? '' : 'cursor-pointer'}>
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
              isWarning,
              size,
            })}
            onDrop={handleDrop}
            onDragEnter={handleDragEnter}
            onDragOver={stopDefaultEvents}
            onDragLeave={handleDragLeave}
          >
            {fileInput}
            <p className={titleStyles({ isDragOver, size, isDisabled: disabled })}>
              {isLarge ? (
                'Перетащите сюда или выберите файл'
              ) : (
                <>
                  <span className="text-gray-90 dark:text-gray-20 dark:group-hover:text-gray-0 group-hover:text-gray-100">
                    Выберите файл
                  </span>{' '}
                  или перетащите сюда
                </>
              )}
            </p>

            {isLarge && fileTypesHint && (
              <p className="group-hover:text-brand-60 dark:group-hover:text-brand-40 text-brand-40 dark:text-brand-60 text-center text-xs">
                {descriptionText ||
                  `${fileTypesHint.map((el) => el.toUpperCase()).join(', ')} до ${formatedSizeLimit}`}
              </p>
            )}

            {!isLarge && <Upload className="text-gray-60 dark:text-gray-40 ml-auto" />}
          </div>
        )}
      </label>
    </div>
  );
};
