import React from 'react';
import styles from './CMSIntegration.module.scss';
import TitleCard from '../../../components/TitleCard/TitleCard';
import Input from '../../../components/adminInput/Input';
import {
  AuthenticationProvideroptions,
  mediaPlayeroptions,
  grantTypeoptions,
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

          <Input
            label='Config Name'
            type='text'
            name='configName'
            placeholder='Enter config name'
            value={formData.configName}
            containerStyles={styles.form_field}
            onChange={handleInputChange}
          />

          <Input
            label='Config ID'
            type='text'
            name='configId'
            placeholder='Enter config ID'
            value={formData.configId}
            containerStyles={styles.form_field}
            onChange={handleInputChange}
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

          <Input
            label='Client ID'
            type='text'
            name='clientId'
            placeholder='Enter client ID'
            value={formData.clientId}
            containerStyles={styles.form_field}
            onChange={handleInputChange}
          />

          <Input
            label='Merchant ID'
            type='text'
            name='merchantId'
            placeholder='Enter merchant Id'
            value={formData.merchantId}
            containerStyles={styles.form_field}
            onChange={handleInputChange}
          />
        </div>

        <div className={styles.cliIntegration_row}>
          <Input
            label='Password'
            type='password'
            name='password'
            placeholder='Enter password'
            value={formData.password}
            onChange={handleInputChange}
            containerStyles={styles.form_field}
            showToogle={true}
          />

          <Input
            label='Grant Type'
            type='select'
            name='grantType'
            placeholder='-Select-'
            value={formData.grantType}
            onChange={handleInputChange}
            options={grantTypeoptions}
            containerStyles={styles.form_field}
            inputStyles={styles.input_field}
          />
          <div className={styles.empty_space}></div>
        </div>
      </div>
    </TitleCard>
  );
};

export default CMSIntegration;
