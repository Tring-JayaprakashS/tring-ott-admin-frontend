import React, { useState } from 'react';
import styles from './Language.module.scss';
import TitleCard from '../../../components/TitleCard/TitleCard';
import Input from '../../../components/adminInput/Input';

const Language = () => {
  const [clientForm, setClientForm] = useState({
    InterfaceLanguage: '',
    ChooseDefaultLanguage: '',
  });
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setClientForm((prev) => ({
      ...prev,
      [name]: value,
    }));
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
          <Input
            label='Interface Language'
            type='select'
            name='InterfaceLanguage'
            placeholder='-Select-'
            value={clientForm.InterfaceLanguage}
            onChange={handleInputChange}
            options={[
              { value: 'En', label: 'English' },
              { value: 'Ta', label: 'Tamil' },
              { value: 'Hi', label: 'Hindi' },
            ]}
            containerStyles={styles.form_field}
            inputStyles={styles.input_field}
            width='360px'
            height='44px'
          />
        </div>
        <div className={styles.select}>
          <Input
            label='Choose Default Language'
            type='select'
            name='ChooseDefaultLanguage'
            placeholder='-Select-'
            value={clientForm.ChooseDefaultLanguage}
            onChange={handleInputChange}
            options={[
              { value: 'En', label: 'English' },
              { value: 'Ta', label: 'Tamil' },
              { value: 'Hi', label: 'Hindi' },
            ]}
            containerStyles={styles.form_field}
            width='360px'
            height='44px'
          />
        </div>
      </div>
    </TitleCard>
  );
};

export default Language;
