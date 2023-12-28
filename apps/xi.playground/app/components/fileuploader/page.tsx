'use client';

import { FileUploader } from '@xipkg/fileuploader';
import { File } from '@xipkg/fileuploader/File';
import { useState } from 'react';

const TestComponents = () => {
  const [files, setFiles] = useState<File[]>([]);
  const [pendings, setPendings] = useState<string[]>([]);
  const [succeeded, setSucceeded] = useState<string[]>([]);
  const [aborted, setAborted] = useState<string[]>([]);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleFilesChange = async (files: File[]) => {
    setAborted([]);
    setErrors({});

    setFiles(files);
    const fileNames = files.map((el) => el.name);
    setPendings(fileNames);

    setTimeout(() => {
      setErrors({ [files[0].name]: 'Что-то пошло не так' });
      setSucceeded(fileNames);
    }, 2000);
  };

  const handleDeleteFile = (fileName: string) => {
    setFiles((p) => p.filter((f) => f.name !== fileName));
  };

  const handleAbort = (name: string) => {
    setPendings((p) => p.filter((el) => el !== name));
    setAborted((p) => [...p, name]);
  };

  return (
    <div className="flex flex-col w-64 gap-4">
      {files.map(({ name }) => (
        <File
          error={errors[name]}
          key={name}
          name={name}
          isPending={pendings.includes(name)}
          isSucceeded={!aborted.includes(name) && succeeded.includes(name)}
          isDeleteIcon
          onDeleteClick={() => handleDeleteFile(name)}
          onAbortRequestClick={() => handleAbort(name)}
        />
      ))}
      <FileUploader onChange={handleFilesChange} size="small" />
      <FileUploader onChange={handleFilesChange} size="medium" />
      <FileUploader onChange={handleFilesChange} multiple />
    </div>
  );
};

export default TestComponents;
