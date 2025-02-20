import { FC } from 'react';
import * as react_jsx_runtime from 'react/jsx-runtime';

type SizeType = 'large' | 'medium' | 'small';
type FileSizeType = 'medium' | 'small';
type DefaultInputPropsT = Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange' | 'size'>;
type FileUploaderProps = {
    withError?: boolean;
    withLargeError?: boolean;
    size?: SizeType;
    limit?: number;
    isWarning?: boolean;
    descriptionText?: string;
    onChange: (files: File[]) => void;
    validateBeforeUpload?: (files: File[]) => string | undefined;
    bytesSizeLimit?: number;
    children?: React.ReactNode;
    fileTypesHint?: string[];
};
type FileProps = {
    name: string;
    size?: FileSizeType;
    isPending?: boolean;
    isSucceeded?: boolean;
    error?: string;
    onDeleteClick?: () => void;
    onAbortRequestClick?: () => void;
};

declare const File$1: FC<FileProps>;

declare const FileUploader: ({ withError, withLargeError, size, descriptionText, disabled, isWarning, onChange, limit, bytesSizeLimit, children, multiple, validateBeforeUpload, fileTypesHint, ...inputProps }: FileUploaderProps & DefaultInputPropsT) => react_jsx_runtime.JSX.Element;

export { File$1 as File, FileUploader, type FileUploaderProps };
