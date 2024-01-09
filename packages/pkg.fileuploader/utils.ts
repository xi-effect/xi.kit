export const validateFile = (file: File, extensions: string[]) => {
  const fileExt = file.name.split('.').pop();
  if (!fileExt) return;
  return extensions.includes(fileExt);
};

export const validateSize = (files: File[], limitBytes: number) => {
  const totalSize = files.reduce((acc, file) => acc + file.size, 0);
  return totalSize <= limitBytes;
};

export const formatFileSize = (bytes: number) => {
  const KILOBYTES = 1024;
  const MEGABYTES = KILOBYTES * 1024;

  if (bytes < MEGABYTES) {
    return (bytes / KILOBYTES).toFixed(2) + ' Кб';
  } else {
    return (bytes / MEGABYTES).toFixed(2) + ' Мб';
  }
};

export const stopDefaultEvents = <T extends React.UIEvent>(e: T) => {
  e.stopPropagation();
  e.preventDefault();
};
