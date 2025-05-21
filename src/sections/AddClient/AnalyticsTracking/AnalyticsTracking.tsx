import React, { useState } from 'react';
import styles from './AnalyticsTracking.module.scss';
import TitleCard from '../../../components/TitleCard/TitleCard';
import PlatformCard from '../../../components/platformCard/PlatformCard';
import { ANALYTICS_TRACKING } from '../../../data/PlatformCard';
import { PlatformCardVariant } from '../../../utlis/enums/platformCard.enum';

const AnalyticsTracking = () => {
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
    <TitleCard title='Analytics & Tracking'>
      <div className={styles.analytics_section_para}>
        <p>Tools</p>
      </div>
      <div className={styles.analytics_section_buttons}>
        {ANALYTICS_TRACKING.map((platform) => (
          <div key={platform.id}>
            <PlatformCard
              variant={PlatformCardVariant.MEDIUM}
              isImage={false}
              text={platform.text}
              platformId={platform.id}
              isSelected={isSelected(platform.id)}
              onClick={handleSelect}
            />
          </div>
        ))}
      </div>
      <div className={styles.checkbox}>
        <div className={styles.checkbox_image}>
          <input type='checkbox' className={styles.checkbox_input} />
        </div>
        <div className={styles.checkbox_label}>
          <p>Player analytics</p>
        </div>
      </div>
    </TitleCard>
  );
};

export default AnalyticsTracking;
