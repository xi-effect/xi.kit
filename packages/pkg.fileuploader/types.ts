export type SizeType = 'large' | 'medium' | 'small';
export type FileSizeType = 'medium' | 'small';

export type DefaultInputPropsT = Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  'onChange' | 'size'
>;

export type FileUploaderProps = {
  withError?: boolean;
  withLargeError?: boolean;
  size?: SizeType;
  limit?: number;
  isError?: (error: string | undefined) => void;
  isWarning?: boolean;
  descriptionText?: string;
  onChange: (files: File[]) => void;
  validateBeforeUpload?: (files: File[]) => string | undefined;
  bytesSizeLimit?: number;
  children?: React.ReactNode;
  fileTypesHint?: string[];
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
