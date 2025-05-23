import styles from './AnalyticsTracking.module.scss';
import TitleCard from '../../../components/TitleCard/TitleCard';
import PlatformCard from '../../../components/platformCard/PlatformCard';
import { ANALYTICS_TRACKING } from '../../../data/PlatformCard';
import { useAddClient } from '../../../context/AddClientContext';
import { PlatformCardVariant } from '../../../utlis/enums/platformCard.enum';

const AnalyticsTracking = () => {
  const { formData, updateFormData } = useAddClient();

  const handleStreamingSelect = (platformId: string) => {
    const currentSelected = [...formData.primaryStreamingFeature];
    if (currentSelected.includes(platformId)) {
      const updated = currentSelected.filter((id) => id !== platformId);
      updateFormData({ primaryStreamingFeature: updated });
    } else {
      updateFormData({
        primaryStreamingFeature: [...currentSelected, platformId],
      });
    }
  };
  const isStreamingSelected = (platformId: string): boolean => {
    return formData.primaryStreamingFeature.includes(platformId);
  };
  const handleCheckboxSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    updateFormData({ [name]: checked });
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
              isSelected={isStreamingSelected(platform.id)}
              onClick={handleStreamingSelect}
            />
          </div>
        ))}
      </div>
      <div className={styles.checkbox}>
        <div className={styles.checkbox_image}>
          <input
            type='checkbox'
            checked={formData.playerAnalytics}
            onChange={(e) => handleCheckboxSelect(e)}
            name='playerAnalytics'
            className={styles.checkbox_input}
          />
        </div>
        <div className={styles.checkbox_label}>
          <p>Player analytics</p>
        </div>
      </div>
    </TitleCard>
  );
};

export default AnalyticsTracking;
