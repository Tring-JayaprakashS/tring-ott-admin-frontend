import React from 'react';
import styles from './Language.module.scss';
import TitleCard from '../../../components/TitleCard/TitleCard';
import { useAddClient } from '../../../context/AddClientContext';
import { Languageoptions } from '../../../data/PlatformCard';

const Language = () => {
  const { formData } = useAddClient();
  const selectedLanguage = Languageoptions.filter((langauge) =>
    formData.interfaceLanguages.includes(langauge.id)
  );
  return (
    <TitleCard title='Language'>
      <p></p>
      <div className={styles.info_grid}>
        <div className={styles.info_row}>
          <div className={styles.info_item}>
            <label className={styles.info_label}>Interface Languages</label>
            <div className={styles.info_value}>
              {selectedLanguage.length > 0
                ? selectedLanguage.map((lang) => lang.name).join(',')
                : 'Not specified'}
            </div>
          </div>

          <div className={styles.info_item}>
            <label className={styles.info_label}>
              Choosen Default Language
            </label>
            <div className={styles.info_value}>
              {formData.defaultLanguage || 'Not specified'}
            </div>
          </div>
        </div>
      </div>
    </TitleCard>
  );
};

export default Language;
