import styles from './AnalyticsTracking.module.scss';
import TitleCard from '../../../components/TitleCard/TitleCard';
import { useAddClient } from '../../../context/AddClientContext';
import { ANALYTICS_TRACKING } from '../../../data/PlatformCard';

const AnalyticsTracking = () => {
  const { formData } = useAddClient();
  const selectedTools = ANALYTICS_TRACKING.filter((tools) =>
    formData.analyticsTools.includes(tools.id)
  );

  const hasSelectedTools = selectedTools.length > 0;

  return (
    <TitleCard title='AnalyticsTracking'>
      <p></p>
      <div className={styles.info_grid}>
        <div className={styles.info_row}>
          {!hasSelectedTools ? (
            <div className={styles.no_platforms}>
              <p>No platforms selected </p>
            </div>
          ) : (
            <div className={styles.selected_platforms_container}>
              <label className={styles.tools_label}>Tools</label>
              <div className={styles.selected_platforms_grid}>
                {[...selectedTools].map((tools) => (
                  <div key={tools.id} className={styles.static_platform_card}>
                    <div className={styles.platform_card_static}>
                      <p className={styles.streaming_text}>{tools.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className={styles.info_item}>
            <label className={styles.info_label}>Player Analytics</label>
            <div className={styles.info_value}>
              {formData.playerAnalytics ? 'Enabled' : 'Not specified'}
            </div>
          </div>
        </div>
      </div>
    </TitleCard>
  );
};

export default AnalyticsTracking;
