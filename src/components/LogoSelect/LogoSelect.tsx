import TitleCard from '../TitleCard/TitleCard';
import { FileHandling } from '../../utlis/helpers/FileHandling';
import FileUploader from '../FileUpload/FileUpload';
import { FileUploaderSize } from '../../utlis/enums/fileUpload.enum';
import styles from './LogoSelect.module.scss';
import { useEffect } from 'react';
import { IC_DOWNLOAD_LOGO } from '../../utlis/images';
import { useAddClient } from '../../context/AddClientContext';

type LogoSelectProps = {
  width?: string;
  title: string;
};
const LogoSelect = ({ title, width }: LogoSelectProps) => {
  const { formData, updateFormData } = useAddClient();
  const {
    fileInput,
    uploadURL,
    handleOriginalFileChange,
    openFileSelector,
    handleDragOver,
    handleOriginalDrop,
  } = FileHandling();

  useEffect(() => {
    if (uploadURL) {
      updateFormData({ clientLogoURL: uploadURL });
    }
  }, [uploadURL]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleOriginalFileChange(e);
    if (e.target.files && e.target.files[0]) {
      updateFormData({ clientLogo: e.target.files[0] });
    }
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    handleOriginalDrop(e);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      updateFormData({ clientLogo: e.dataTransfer.files[0] });
    }
  };

  return (
    <TitleCard title={title} width={width} height='min-h-[346px]'>
      <div
        className={` ${styles.logo_container} ${formData.clientLogoURL && styles.logo_container_img_background} `}>
        {!formData.clientLogoURL ? (
          <FileUploader
            fileInput={fileInput}
            handleFileChange={handleFileChange}
            handleDragOver={handleDragOver}
            handleDrop={handleDrop}
            openFileSelector={openFileSelector}
            state={FileUploaderSize.SHOW_SIZE}
            fileType='.png'
          />
        ) : (
          <>
            <img
              src={formData.clientLogoURL}
              alt=''
              className={styles.logo_container_prev_img}
            />
            <div
              onClick={openFileSelector}
              className={styles.logo_container_file_change}>
              <input
                type='file'
                accept='.jpg,.svg'
                ref={fileInput}
                onChange={handleOriginalFileChange}
                className={styles.logo_container_file_change_input}
              />
              <button className={styles.logo_replace_icon_container}>
                <img src={IC_DOWNLOAD_LOGO} alt='' />
              </button>
            </div>
          </>
        )}
      </div>
    </TitleCard>
  );
};

export default LogoSelect;
