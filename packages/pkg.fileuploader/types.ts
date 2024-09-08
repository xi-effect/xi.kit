export type SizeType = 'large' | 'medium' | 'small';
export type FileSizeType = 'medium' | 'small';

export type FileUploaderProps = {
  withError?: boolean;
  withLargeError?: boolean;
  size?: SizeType;
  multiple?: boolean;
  limit?: number;
  isWarning?: boolean;
  disabled?: boolean;
  descriptionText?: string;
  onChange: (files: File[]) => void;
  extensions: string[];
  bytesSizeLimit?: number;
  children?: React.ReactNode;
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
