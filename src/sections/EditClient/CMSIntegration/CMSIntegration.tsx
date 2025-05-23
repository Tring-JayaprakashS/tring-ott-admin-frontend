import React from 'react';
import styles from './CMSIntegration.module.scss';
import TitleCard from '../../../components/TitleCard/TitleCard';
import { useAddClient } from '../../../context/AddClientContext';

const CMSIntegration = () => {
  const { formData } = useAddClient();
  return (
    <TitleCard title='CMS & Integration'>
      <p></p>
      <div className={styles.info_grid}>
        <div className={styles.info_row}>
          <div className={styles.info_item}>
            <label className={styles.info_label}>Media Provider</label>
            <div className={styles.info_value}>
              {formData.mediaProvider || 'Not specified'}
            </div>
          </div>

          <div className={styles.info_item}>
            <label className={styles.info_label}>Config Name</label>
            <div className={styles.info_value}>
              {formData.configName || 'Not specified'}
            </div>
          </div>

          <div className={styles.info_item}>
            <label className={styles.info_label}>Config ID</label>
            <div className={styles.info_value}>
              {formData.configId || 'Not specified'}
            </div>
          </div>
          <div className={styles.info_item}></div>
          <div className={styles.info_item}></div>
        </div>

        <div className={styles.info_row}>
          <div className={styles.info_item}>
            <label className={styles.info_label}>Authentication Provider</label>
            <div className={styles.info_value}>
              {formData.authenticationProvider || 'Not specified'}
            </div>
          </div>

          <div className={styles.info_item}>
            <label className={styles.info_label}>Client ID</label>
            <div className={styles.info_value}>
              {formData.clientId || 'Not specified'}
            </div>
          </div>
          <div className={styles.info_item}>
            <label className={styles.info_label}>Grant Type</label>
            <div className={styles.info_value}>
              {formData.grantType || 'Not specified'}
            </div>
          </div>
          <div className={styles.info_item}>
            <label className={styles.info_label}>Password</label>
            <div className={styles.info_value}>
              {formData.password || 'Not specified'}
            </div>
          </div>
          <div className={styles.info_item}>
            <label className={styles.info_label}>Merchant ID</label>
            <div className={styles.info_value}>
              {formData.merchantId || 'Not specified'}
            </div>
          </div>
        </div>
      </div>
    </TitleCard>
  );
};

export default CMSIntegration;
