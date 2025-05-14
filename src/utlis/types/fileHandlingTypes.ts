import { FileUploaderSize } from '../enums/fileUpload.enum';

export type FileUploaderProps = {
  fileInput: React.RefObject<HTMLInputElement | null>;
  handleFileChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleDragOver: (e: React.DragEvent<HTMLDivElement>) => void;
  handleDrop: (e: React.DragEvent<HTMLDivElement>) => void;
  openFileSelector: () => void;
  state: FileUploaderSize;
  fileType: string;
};
