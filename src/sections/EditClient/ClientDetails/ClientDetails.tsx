import styles from './ClientDetails.module.scss';

import TitleCard from '../../../components/TitleCard/TitleCard';
import { useAddClient } from '../../../context/AddClientContext';

const ClientDetails = () => {
  const { formData } = useAddClient();
  return (
    <TitleCard title='Client Details'>
      <p></p>
      <div className={styles.client_details_view}>
        <div className={styles.client_details_view_content}>
          <div className={styles.logo_section}>
            <div className={styles.logo_container}>
              {formData.clientLogoURL ? (
                <img
                  src={formData.clientLogoURL}
                  alt='Client Logo'
                  className={styles.client_logo}
                />
              ) : (
                <div className={styles.logo_placeholder}>
                  <span>No Logo</span>
                </div>
              )}
            </div>
          </div>
          <div className={styles.info_grid}>
            <div className={styles.info_row}>
              <div className={styles.info_item}>
                <label className={styles.info_label}>Client name</label>
                <div className={styles.info_value}>
                  {formData.clientName || 'Not specified'}
                </div>
              </div>

              <div className={styles.info_item}>
                <label className={styles.info_label}>Email</label>
                <div className={styles.info_value}>
                  {formData.email || 'Not specified'}
                </div>
              </div>

              <div className={styles.info_item}>
                <label className={styles.info_label}>
                  Client Contact Number
                </label>
                <div className={styles.info_value}>
                  {formData.phoneNumber
                    ? `(${formData.countryCode}) ${formData.phoneNumber}`
                    : 'Not specified'}
                </div>
              </div>
              <div className={styles.info_item}>
                <label className={styles.info_label}>City</label>
                <div className={styles.info_value}>
                  {formData.city || 'Not specified'}
                </div>
              </div>
            </div>

            <div className={styles.info_row}>
              <div className={styles.info_item}>
                <label className={styles.info_label}>State</label>
                <div className={styles.info_value}>
                  {formData.state || 'Not specified'}
                </div>
              </div>

              <div className={styles.info_item}>
                <label className={styles.info_label}>Country</label>
                <div className={styles.info_value}>
                  {formData.country || 'Not specified'}
                </div>
              </div>
              <div className={styles.info_item}>
                <label className={styles.info_label}>
                  Contract Start Datee
                </label>
                <div className={styles.info_value}>
                  {formData.contractStartDate || 'Not specified'}
                </div>
              </div>
              <div className={styles.info_item}>
                <label className={styles.info_label}>Contract Duration</label>
                <div className={styles.info_value}>
                  {formData.contractDuration || 'Not specified'}
                </div>
              </div>
            </div>

            <div className={styles.info_row}>
              <div className={styles.info_item}>
                <label className={styles.info_label}>UAT Release Date</label>
                <div className={styles.info_value}>
                  {formData.uatReleaseDate || 'Not specified'}
                </div>
              </div>
              <div className={styles.info_item}>
                <label className={styles.info_label}>
                  Production Release Date
                </label>
                <div className={styles.info_value}>
                  {formData.productionKeyword || 'Not specified'}
                </div>
              </div>
              <div className={styles.info_item}>
                <label className={styles.info_label}>Project Keywords</label>
                <div className={styles.info_value}>
                  {formData.projectKeyword || 'Not specified'}
                </div>
              </div>
              <div className={styles.info_item}></div>
            </div>
          </div>
        </div>
      </div>
    </TitleCard>
  );
};

export default ClientDetails;
