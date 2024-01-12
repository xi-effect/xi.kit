export const validateFile = (file: File, extensions: string[]) => {
  const fileExt = file.name.split('.').pop();
  if (!fileExt) return;
  return extensions.includes(fileExt);
};

export const validateSize = (files: File[], limitBytes: number) => {
  const totalSize = files.reduce((acc, file) => acc + file.size, 0);
  return totalSize <= limitBytes;
};

export const stopDefaultEvents = <T extends React.UIEvent>(e: T) => {
  e.stopPropagation();
  e.preventDefault();
};
