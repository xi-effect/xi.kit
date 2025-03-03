'use client';

import { FileUploader } from '@xipkg/fileuploader';
import { File } from '@xipkg/fileuploader';
import { useState } from 'react';

const TestComponents = () => {
  const [files, setFiles] = useState<File[]>([]);
  const [pendings, setPendings] = useState<string[]>([]);
  const [succeeded, setSucceeded] = useState<string[]>([]);
  const [aborted, setAborted] = useState<string[]>([]);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleFilesChangeAsync = async (files: File[]) => {
    setAborted([]);

    setFiles(files);
    const fileNames = files.map((el) => el.name);
    setPendings(fileNames);

    setTimeout(() => {
      const succeeded = fileNames.filter((el) => Math.random() > 0.5);
      setPendings([]);
      setErrors(
        fileNames.reduce(
          (acc, next) => ({
            ...acc,
            [next]: succeeded.includes(next) ? '' : 'Что-то пошло не так',
          }),
          {},
        ),
      );
      setSucceeded(succeeded);
    }, 2000);
  };

  const handleFilesChange = async (files: File[]) => {
    setFiles(files);
  };

  const handleDeleteFile = (fileName: string) => {
    setFiles((p) => p.filter((f) => f.name !== fileName));
    setErrors((p) => ({ ...p, [fileName]: '' }));
  };

  const handleAbort = (name: string) => {
    console.log('abort :>> ', name);
    setPendings((p) => p.filter((el) => el !== name));
    setSucceeded((p) => p.filter((el) => el !== name));
    setAborted((p) => [...p, name]);
  };

  const firstFileName = files[0]?.name;

  const validateFiles = (files: File[]) => {
    return `У файла ${files[0].name} неверный формат`;
  };

  return (
    <div className="flex flex-col gap-4 w-80">
      <h2>Files</h2>
      <div>
        {files.map(({ name }) => (
          <File
            error={errors[name]}
            key={name}
            name={name}
            isPending={pendings.includes(name)}
            isSucceeded={!aborted.includes(name) && succeeded.includes(name)}
            onDeleteClick={() => handleDeleteFile(name)}
            onAbortRequestClick={() => handleAbort(name)}
          />
        ))}
      </div>
      <h2>Sync</h2>
      <FileUploader disabled onChange={handleFilesChange} size="small" accept="image/*" />
      <FileUploader onChange={handleFilesChange} size="medium" accept="image/*" />
      <FileUploader onChange={handleFilesChange} multiple accept="image/*" />
      <h2>Sync Single</h2>
      <FileUploader onChange={handleFilesChange} size="small" accept="image/*">
        {firstFileName && (
          <File
            name={firstFileName}
            onDeleteClick={() => handleDeleteFile(firstFileName)}
            onAbortRequestClick={() => handleAbort(firstFileName)}
          />
        )}
      </FileUploader>
      <h2>Async Single</h2>
      <FileUploader onChange={handleFilesChangeAsync} size="small" accept="image/*">
        {firstFileName && (
          <File
            error={errors[firstFileName]}
            name={firstFileName}
            isPending={pendings.includes(firstFileName)}
            isSucceeded={!aborted.includes(firstFileName) && succeeded.includes(firstFileName)}
            onDeleteClick={() => handleDeleteFile(firstFileName)}
            onAbortRequestClick={() => handleAbort(firstFileName)}
          />
        )}
      </FileUploader>
      <h2>Async</h2>
      <FileUploader onChange={handleFilesChangeAsync} size="small" accept="image/*" />
      <h2>Async Multiple</h2>
      <FileUploader
        onChange={handleFilesChangeAsync}
        multiple
        accept=".jpg, .jpeg, .png, .webp, .gif"
        size="large"
        fileTypesHint={['jpg', 'jpeg', 'png', 'webp', 'gif']}
      />
      <h2>With validate error</h2>
      <FileUploader
        onChange={handleFilesChangeAsync}
        multiple
        accept=".png, .jpg"
        validateBeforeUpload={validateFiles}
      />
    </div>
  );
};

export default TestComponents;
