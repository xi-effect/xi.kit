import { DEFAULT_EXTENSIONS } from './FileUploader';

export type SizeType = 'large' | 'medium' | 'small';
export type FileSizeType = 'medium' | 'small';

export type FileUploaderProps = {
  size?: SizeType;
  multiple?: boolean;
  limit?: number;
  isWarning?: boolean;
  disabled?: boolean;
  descriptionText?: string;
  onChange: (files: File[]) => void;
  extensions?: ((typeof DEFAULT_EXTENSIONS)[number] & string)[];
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
