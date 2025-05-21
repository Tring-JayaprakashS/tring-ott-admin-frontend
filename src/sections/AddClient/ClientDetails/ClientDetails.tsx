import React, { useState } from 'react';
import styles from './ClientDetails.module.scss';
import TitleCard from '../../../components/TitleCard/TitleCard';
import Input from '../../../components/adminInput/Input';
import { IC_CALENDER } from '../../../utlis/images';
import { durationOptions, countryOptions } from '../../../data/PlatformCard';
import { useAddClient } from '../../../context/AddClientContext';
import LogoSelect from '../../../components/LogoSelect/LogoSelect';

const ClientDetails = () => {
  const { formData, updateFormData } = useAddClient();

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    updateFormData({ [name]: value });
  };

  const handleCountryCodeChange = (code: string) => {
    updateFormData({ countryCode: code });
  };

  return (
    <TitleCard title='Client details'>
      <div className={styles.client_details_mainwrap}>
        <div className={styles.client_details_mainwrap_para}>
          <p>
            Fill in the required information to add a new client to the system
          </p>
        </div>
        <div className={styles.client_details_mainwrap_section}>
          <LogoSelect title='' width='full' />
          <div className={styles.section_border}></div>
          <div className={styles.client_details_mainwrap_section_form}>
            <div className={styles.form_row}>
              <Input
                label='Client Name'
                type='text'
                name='clientName'
                placeholder='Enter client name'
                value={formData.clientName}
                containerStyles={styles.form_field}
                onChange={handleInputChange}
              />

              <Input
                label='Email'
                type='email'
                name='email'
                placeholder='Enter email'
                value={formData.email}
                containerStyles={styles.form_field}
                onChange={handleInputChange}
              />

              <Input
                label='Phone Number'
                type='phone'
                name='phoneNumber'
                placeholder='(000) 000-0000'
                value={formData.phoneNumber}
                containerStyles={styles.form_field}
                countryCode={formData.countryCode}
                onChange={handleInputChange}
                onCountryCodeChange={handleCountryCodeChange}
              />
            </div>

            <div className={styles.form_row}>
              <Input
                label='City'
                type='select'
                name='city'
                placeholder='-Select-'
                value={formData.city}
                onChange={handleInputChange}
                options={[
                  { value: 'ny', label: 'New York' },
                  { value: 'la', label: 'Los Angeles' },
                  { value: 'ch', label: 'Chicago' },
                ]}
                containerStyles={styles.form_field}
              />

              <Input
                label='State'
                type='select'
                name='state'
                placeholder='-Select-'
                value={formData.state}
                onChange={handleInputChange}
                options={[
                  { value: 'tn', label: 'Tamil Nadu' },
                  { value: 'De', label: 'Delhi' },
                  { value: 'Ke', label: 'Kerala' },
                ]}
                containerStyles={styles.form_field}
              />

              <Input
                label='Country'
                type='select'
                name='country'
                placeholder='-Select-'
                value={formData.country}
                onChange={handleInputChange}
                options={countryOptions}
                containerStyles={styles.form_field}
              />
            </div>

            <div className={styles.form_row}>
              <Input
                label='Contract Start Date'
                type='date'
                name='contractStartDate'
                placeholder='MM/DD/YYYY'
                iconUrl={IC_CALENDER}
                value={formData.contractStartDate}
                onChange={handleInputChange}
                containerStyles={styles.form_field}
              />

              <Input
                label='Contract Duration'
                type='select'
                name='contractDuration'
                placeholder='-Select-'
                value={formData.contractDuration}
                onChange={handleInputChange}
                options={durationOptions}
                containerStyles={styles.form_field}
              />

              <Input
                label='UAT Release Date'
                type='date'
                name='uatReleaseDate'
                placeholder='MM/DD/YYYY'
                iconUrl={IC_CALENDER}
                value={formData.uatReleaseDate}
                onChange={handleInputChange}
                containerStyles={styles.form_field}
              />
            </div>

            <div className={styles.form_row}>
              <div className={styles.productionReleaseDate}>
                <Input
                  label='Production Release Date'
                  type='date'
                  name='productionKeyword'
                  placeholder='MM/DD/YYYY'
                  value={formData.productionKeyword}
                  onChange={handleInputChange}
                  containerStyles={styles.form_field}
                />
              </div>
              <div className={styles.productionReleaseDate}>
                <Input
                  label='Project Keyword'
                  type='text'
                  name='projectKeyword'
                  placeholder='Add project keyword'
                  value={formData.projectKeyword}
                  onChange={handleInputChange}
                  containerStyles={styles.form_field}
                />
              </div>
              <div className={styles.empty_space}></div>
            </div>
          </div>
        </div>
      </div>
    </TitleCard>
  );
};

export default ClientDetails;
