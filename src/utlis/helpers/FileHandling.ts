import { useState, useRef, ChangeEvent } from 'react';

interface UploadedFile {
  name: string;
  size: string;
  fromURL?: boolean;
}

export const FileHandling = () => {
  const [uploadFile, setUploadFile] = useState<UploadedFile | null>(null);
  const [uploadURL, setUploadURL] = useState<string>('');
  const fileInput = useRef<HTMLInputElement>(null);

  const MAX_FILE_SIZE = 2 * 1024 * 1024;

  const handleOriginalFileChange = (
    event: ChangeEvent<HTMLInputElement>
  ): void => {
    const file: any = event.target.files?.[0];

    if (!file) return;

    if (file.size > MAX_FILE_SIZE) {
      alert('File size exceeds 2MB limit');
      return;
    }

    setUploadFile({
      name: file.name,
      size: getFileSize(file.size),
    });
    const fileURL = URL.createObjectURL(file);

    setUploadURL(fileURL);
  };

  const getFileSize = (bytes: number): string => {
    if (bytes < 1024) return bytes + 'B';
    if (bytes < 1024 * 1024) return Math.round(bytes / 1024) + 'kB';
    return Math.round(bytes / (1024 * 1024)) + 'MB';
  };

  const handleURLUpload = (): void => {
    if (!uploadURL) {
      alert('Please enter a URL');
      return;
    }

    const fileName = uploadURL.split('/').pop() || 'file-from-url';

    setUploadFile({
      name: fileName,
      size: 'Unknown size',
      fromURL: true,
    });

    setUploadURL('');
  };

  const openFileSelector = (): void => {
    if (fileInput.current) {
      fileInput.current.click();
    }
  };

  const removeFile = (): void => {
    setUploadFile(null);
    setUploadURL('');
    if (fileInput?.current?.value) {
      fileInput.current.value = '';
    }
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>): void => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleOriginalDrop = (e: React.DragEvent<HTMLDivElement>): void => {
    e.preventDefault();

    const file = e.dataTransfer.files?.[0];
    if (!file) return;

    if (file.size > MAX_FILE_SIZE) {
      alert('File size exceeds 2MB limit');
      return;
    }

    setUploadFile({
      name: file.name,
      size: getFileSize(file.size),
    });
    const fileURL = URL.createObjectURL(file);

    setUploadURL(fileURL);
  };

  return {
    uploadFile,
    uploadURL,
    fileInput,
    setUploadURL,
    setUploadFile,
    handleOriginalFileChange,
    handleURLUpload,
    openFileSelector,
    removeFile,
    getFileSize,
    handleDragOver,
    handleOriginalDrop,
  };
};
