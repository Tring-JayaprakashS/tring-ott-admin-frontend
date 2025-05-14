import React from 'react';
import { IC_APPCONFIG_LOGO } from '../../utlis/images';
import styles from './FileUpload.module.scss';
import { FileUploaderSize } from '../../utlis/enums/fileUpload.enum';
import { FileUploaderProps } from '../../utlis/types/fileHandlingTypes';

const FileUploader: React.FC<FileUploaderProps> = ({
  fileInput,
  handleFileChange,
  handleDragOver,
  handleDrop,
  openFileSelector,
  state,
  fileType,
}) => {
  return (
    <div
      className={styles.fileuploader_container}
      onClick={openFileSelector}
      onDragOver={handleDragOver}
      onDrop={handleDrop}>
      <input
        type='file'
        accept={fileType}
        ref={fileInput}
        onChange={handleFileChange}
        className={styles.fileuploader_input}
      />

      <div className={styles.fileuploader_icon_container}>
        <img
          src={IC_APPCONFIG_LOGO}
          alt='image'
          className={styles.fileuploader_logo}
        />
      </div>
      <div className={styles.fileuploader_text}>
        <span>Drag & Drop </span>
        <span className={styles.fileuploader_drop}>file here or</span>
        <span className={styles.fileuploader_highlight}> Browse</span>
        <p className={styles.fileuploader_filetypes}>
          File types: {fileType.replace(/\./g, '').toUpperCase()}
        </p>
        {state === FileUploaderSize.SHOW_SIZE && (
          <p className={styles.fileuploader_fileSize}>File size: Maximum 2MB</p>
        )}
      </div>
    </div>
  );
};

export default FileUploader;
