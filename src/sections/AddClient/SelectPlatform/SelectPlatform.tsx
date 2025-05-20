import React, { useState } from 'react';
import styles from './SelectPlatform.module.scss';
import TitleCard from '../../../components/TitleCard/TitleCard';
import PlatformCard from '../../../components/platformCard/PlatformCard';
import { TV_PLATFORMS, WEB_MOBILE_PLATFORMS } from '../../../data/PlatformCard';

const SelectPlatform: React.FC = () => {
  const [selectedPlatforms, setSelectedPlatforms] = useState<string[]>([]);
  const handleSelect = (platformId: string) => {
    setSelectedPlatforms((prevSelected) => {
      if (prevSelected.includes(platformId)) {
        return prevSelected.filter((id) => id !== platformId);
      } else {
        return [...prevSelected, platformId];
      }
    });
  };
  const isSelected = (platformId: string): boolean => {
    return selectedPlatforms.includes(platformId);
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
                  isImage={true}
                  imagesrc={platform.image}
                  imageAlt={platform.alt}
                  width={platform.width}
                  height={platform.height}
                  imgwidth={platform.imgWidth}
                  imgheight={platform.imgHeight}
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
                  isImage={true}
                  imagesrc={platform.image}
                  imageAlt={platform.alt}
                  width={platform.width}
                  height={platform.height}
                  imgwidth={platform.imgWidth}
                  imgheight={platform.imgHeight}
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
