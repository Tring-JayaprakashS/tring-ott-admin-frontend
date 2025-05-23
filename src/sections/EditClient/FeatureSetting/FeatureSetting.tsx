import styles from './FeatureSetting.module.scss';
import TitleCard from '../../../components/TitleCard/TitleCard';
import { useAddClient } from '../../../context/AddClientContext';
import AnalyticsTracking from '../AnalyticsTracking/AnalyticsTracking';
import {
  platformsoptions,
  PRIMARY_STREAMING_FEATURE,
} from '../../../data/PlatformCard';

const FeatureSetting = () => {
  const { formData } = useAddClient();

  const selectedfeature = PRIMARY_STREAMING_FEATURE.filter((streaming) =>
    formData.primaryStreamingFeature.includes(streaming.id)
  );

  const subscription = platformsoptions.filter((subscrip) =>
    formData.subscriptionPlatforms.includes(subscrip.id)
  );
  const hasSelectedStreaming = selectedfeature.length > 0;
  return (
    <TitleCard title='Feature Settings'>
      {!hasSelectedStreaming ? (
        <div className={styles.no_platforms}>
          <p>No platforms selected</p>
        </div>
      ) : (
        <div className={styles.selected_platforms_container}>
          <div className={styles.client_details_mainwrap_para}>
            <p className={styles.paragraph}>Primary Streaming Feature</p>
          </div>
          <div className={styles.selected_platforms_grid}>
            {[...selectedfeature].map((streaming) => (
              <div key={streaming.id} className={styles.static_platform_card}>
                <div className={styles.platform_card_static}>
                  <p className={styles.streaming_text}>{streaming.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
      <div className={styles.border}></div>

      <div className={styles.info_grid}>
        <div className={styles.client_details_mainwrap_primary_streaming}>
          <p className={styles.paragraph}>
            Monetization & Access Control & Enable Subscription Button{' '}
          </p>
        </div>
        <div className={styles.info_row}>
          <div className={styles.info_item}>
            <label className={styles.info_label}>Ad Delivery Method</label>
            <div className={styles.info_value}>
              {formData.tools || 'Not specified'}
            </div>
          </div>

          <div className={styles.info_item}>
            <label className={styles.info_label}>Ad Delivery Provider</label>
            <div className={styles.info_value}>
              {formData.adDeliveryProvider || 'Not specified'}
            </div>
          </div>

          <div className={styles.info_item}>
            <label className={styles.info_label}>
              Enable Subscription Button
            </label>
            <div className={styles.info_value}>
              {subscription.length > 0
                ? subscription.map((subs) => subs.name).join(',')
                : 'Not specified'}
            </div>
          </div>
          <div className={styles.info_item}></div>
          <div className={styles.info_item}></div>
        </div>
      </div>
      <div className={styles.border}></div>
      <AnalyticsTracking />
    </TitleCard>
  );
};

export default FeatureSetting;
