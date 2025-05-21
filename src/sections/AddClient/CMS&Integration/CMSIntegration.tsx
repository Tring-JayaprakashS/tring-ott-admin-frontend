import React, { useState } from 'react';
import styles from './CMSIntegration.module.scss';
import TitleCard from '../../../components/TitleCard/TitleCard';
import Input from '../../../components/adminInput/Input';
import {
  AuthenticationProvideroptions,
  mediaPlayeroptions,
} from '../../../data/PlatformCard';
import { useAddClient } from '../../../context/AddClientContext';

const CMSIntegration = () => {
  const { formData, updateFormData } = useAddClient();

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    updateFormData({ [name]: value });
  };

  return (
    <TitleCard title='CMS & Integration'>
      <div className={styles.client_details_mainwrap_para}>
        <p className={styles.paragraph}>
          Configure the CMS provider and integration settings to streamline
          content management and platform operations
        </p>
      </div>
      <div
        className={styles.client_details_mainwrap_section_form_cliIntegration}>
        <div className={styles.cliIntegration_row}>
          <Input
            label='Media Provider'
            type='select'
            name='mediaProvider'
            placeholder='-Select-'
            value={formData.mediaProvider}
            onChange={handleInputChange}
            options={mediaPlayeroptions}
            containerStyles={styles.form_field}
            inputStyles={styles.input_field}
          />
        </div>

        <div className={styles.cliIntegration_row}>
          <Input
            label='Authentication Provider'
            type='select'
            name='authenticationProvider'
            placeholder='-Select-'
            value={formData.authenticationProvider}
            onChange={handleInputChange}
            options={AuthenticationProvideroptions}
            containerStyles={styles.form_field}
            inputStyles={styles.input_field}
          />
        </div>
      </div>
    </TitleCard>
  );
};

export default CMSIntegration;
