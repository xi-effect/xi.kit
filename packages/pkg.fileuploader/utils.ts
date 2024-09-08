export const validateFile = (file: File, extensions: string[]) => {
  const extTypes = extensions.map((ext) => ext.slice(1));

  const fileExt = file.name.split('.').pop()?.toLowerCase();
  if (!fileExt) return;
  return extTypes.includes(fileExt);
};

export const validateSize = (files: File[], limitBytes: number) => {
  const totalSize = files.reduce((acc, file) => acc + file.size, 0);
  return totalSize <= limitBytes;
};

export const stopDefaultEvents = <T extends React.UIEvent>(e: T) => {
  e.stopPropagation();
  e.preventDefault();
};
