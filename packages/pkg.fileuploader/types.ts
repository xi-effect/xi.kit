import { DEFAULT_EXTENSIONS } from './FileUploader';

export type SizeType = 'large' | 'medium' | 'small';
export type FileSizeType = 'medium' | 'small';

export type FileUploaderProps = {
  size?: SizeType;
  fileName?: string | null;
  multiple?: boolean;
  limit?: number;
  isWarning?: boolean;
  isPending?: boolean;
  isSucceeded?: boolean;
  disabled?: boolean;
  descriptionText?: string;
  onChange: (files: File[]) => void;
  onDeleteClick?: () => void;
  onAbortRequestClick?: () => void;
  extensions?: ((typeof DEFAULT_EXTENSIONS)[number] & string)[];
  bytesSizeLimit?: number;
};

export type FileProps = {
  name: string;
  size?: FileSizeType;
  isDeleteIcon?: boolean;
  isPending?: boolean;
  isSucceeded?: boolean;
  error?: string;
  onClick?: () => void;
  onDeleteClick?: () => void;
  onAbortRequestClick?: () => void;
};
