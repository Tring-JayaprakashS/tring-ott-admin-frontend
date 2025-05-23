import React from 'react';
import styles from './SelectPlatform.module.scss';
import TitleCard from '../../../components/TitleCard/TitleCard';
import PlatformCard from '../../../components/platformCard/PlatformCard';
import { TV_PLATFORMS, WEB_MOBILE_PLATFORMS } from '../../../data/PlatformCard';
import { useAddClient } from '../../../context/AddClientContext';
import { PlatformCardVariant } from '../../../utlis/enums/platformCard.enum';

const SelectPlatform: React.FC = () => {
  const { formData, updateFormData } = useAddClient();

  const handleSelect = (platformId: string) => {
    const currentSelected = [...formData.selectedPlatforms];
    if (currentSelected.includes(platformId)) {
      const updated = currentSelected.filter((id) => id !== platformId);
      updateFormData({ selectedPlatforms: updated });
    } else {
      updateFormData({ selectedPlatforms: [...currentSelected, platformId] });
    }
  };
  const isSelected = (platformId: string): boolean => {
    return formData.selectedPlatforms.includes(platformId);
  };
  return (
    <TitleCard title='Select Platform'>
      <div className={styles.client_details_mainwrap_para}>
        <p className={styles.paragraph}>
          The client's OTT service will be available exclusively on the selected
          platforms
        </p>
      </div>
      <div className={styles.select_platform_section}>
        <div className={styles.select_platform_section_tv}>
          <p>TV</p>
          <div className={styles.select_platform_section_tv_button}>
            {TV_PLATFORMS.map((platform) => (
              <div key={platform.id}>
                <PlatformCard
                  variant={PlatformCardVariant.MEDIUM}
                  isImage={true}
                  imagesrc={platform.image}
                  imageAlt={platform.alt}
                  onClick={handleSelect}
                  platformId={platform.id}
                  isSelected={isSelected(platform.id)}
                />
              </div>
            ))}
          </div>
        </div>
        <div className={styles.select_platform_section_web}>
          <p>Web & Mobile</p>
          <div className={styles.select_platform_section_web_button}>
            {WEB_MOBILE_PLATFORMS.map((platform) => (
              <div key={platform.id}>
                <PlatformCard
                  variant={PlatformCardVariant.MEDIUM}
                  isImage={true}
                  imagesrc={platform.image}
                  imageAlt={platform.alt}
                  onClick={handleSelect}
                  platformId={platform.id}
                  isSelected={isSelected(platform.id)}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </TitleCard>
  );
};

export default SelectPlatform;
