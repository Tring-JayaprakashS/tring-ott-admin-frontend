import React from 'react';
import styles from './Language.module.scss';
import TitleCard from '../../../components/TitleCard/TitleCard';
import Input from '../../../components/adminInput/Input';
import { CheckboxMultiSelectDropdown } from '../../../components/MultiSelectDropdown/MultiSelectDropdown';
import { Languageoptions } from '../../../data/PlatformCard';
import { useAddClient } from '../../../context/AddClientContext';

const Language = () => {
  const { formData, updateFormData } = useAddClient();

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    updateFormData({ [name]: value });
  };

  const handleLanguageChange = (selectedLanguages: string[]) => {
    updateFormData({ interfaceLanguages: selectedLanguages });
  };
  return (
    <TitleCard title='Language'>
      <div className={styles.client_details_mainwrap_para}>
        <p className={styles.paragraph}>
          Configure the CMS provider and integration settings to streamline
          content management and platform operations
        </p>
      </div>

      <div className={styles.section_language}>
        <div className={styles.select}>
          <CheckboxMultiSelectDropdown
            label='Interface Language'
            selected={formData.interfaceLanguages}
            options={Languageoptions}
            onChange={handleLanguageChange}
            placeholder='-Select-'
          />
        </div>
        <div className={styles.select}>
          <Input
            label='Choose Default Language'
            type='select'
            name='defaultLanguage'
            placeholder='-Select-'
            value={formData.defaultLanguage}
            onChange={handleInputChange}
            options={[
              { value: 'En', label: 'English' },
              { value: 'Ta', label: 'Tamil' },
              { value: 'Hi', label: 'Hindi' },
            ]}
            containerStyles={styles.form_field}
          />
        </div>
      </div>
    </TitleCard>
  );
};

export default Language;
