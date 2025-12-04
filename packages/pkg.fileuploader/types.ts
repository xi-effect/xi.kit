export type SizeType = 'large' | 'medium' | 'small';
export type FileSizeType = 'medium' | 'small';

export type DefaultInputPropsT = Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  'onChange' | 'size'
>;

type ValidationError = string | { titleError: string; subtitleError?: string };

export type FileUploaderProps = {
  size?: SizeType;
  limit?: number;
  onFileError?: (titleError: string, subtitleError?: string) => void;
  enableErrorHandling?: boolean;
  isWarning?: boolean;
  descriptionText?: string;
  onChange: (files: File[]) => void;
  validateBeforeUpload?: (files: File[]) => ValidationError | undefined;
  bytesSizeLimit?: number;
  children?: React.ReactNode;
  fileTypesHint?: string[];
  acceptedFileTypes?: string[];
};

export type FileProps = {
  name: string;
  size?: FileSizeType;
  isPending?: boolean;
  isSucceeded?: boolean;
  error?: string;
  onDeleteClick?: () => void;
  onAbortRequestClick?: () => void;
};
