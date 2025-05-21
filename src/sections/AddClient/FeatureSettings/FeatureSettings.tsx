import React, { useState } from 'react';
import styles from './FeatureSetting.module.scss';
import TitleCard from '../../../components/TitleCard/TitleCard';
import PlatformCard from '../../../components/platformCard/PlatformCard';
import Input from '../../../components/adminInput/Input';
import {
  PRIMARY_STREAMING_FEATURE,
  platformsoptions,
} from '../../../data/PlatformCard';
import AnalyticsTracking from '../AnalyticsTracking/AnalyticsTracking';
import { CheckboxMultiSelectDropdown } from '../../../components/MultiSelectDropdown/MultiSelectDropdown';
import { useAddClient } from '../../../context/AddClientContext';
import { PlatformCardVariant } from '../../../utlis/enums/platformCard.enum';

const FeatureSettings = () => {
  const { formData, updateFormData } = useAddClient();

  const handleCheckbox = (selectedLanguages: string[]) => {
    updateFormData({ subscriptionPlatforms: selectedLanguages });
  };

  const handleCheckboxSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    updateFormData({ [name]: checked });
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    updateFormData({ [name]: value });
  };

  const handleStreamingSelect = (platformId: string) => {
    const currentSelected = [...formData.primaryStreamingFeature];
    if (currentSelected.includes(platformId)) {
      const updated = currentSelected.filter((id) => id !== platformId);
      updateFormData({ primaryStreamingFeature: updated });
    } else {
      updateFormData({
        primaryStreamingFeature: [...currentSelected, platformId],
      });
    }
  };
  const isStreamingSelected = (platformId: string): boolean => {
    return formData.primaryStreamingFeature.includes(platformId);
  };

  return (
    <TitleCard title='Feature Settings'>
      <div className={styles.client_details_mainwrap_para}>
        <p>
          Fill in the required information to add a new client to the system
        </p>
      </div>
      <div className={styles.feature_setting_section}>
        <div className={styles.feature_setting_section_head}>
          <p>Primary streaming Feature</p>
        </div>
        <div className={styles.feature_setting_section_card}>
          {PRIMARY_STREAMING_FEATURE.map((platform) => (
            <div key={platform.id}>
              <PlatformCard
                variant={PlatformCardVariant.MEDIUM}
                isImage={false}
                text={platform.text}
                platformId={platform.id}
                isSelected={isStreamingSelected(platform.id)}
                onClick={handleStreamingSelect}
              />
            </div>
          ))}
        </div>
        <div className={styles.feature_setting_section_border}></div>
        <div className={styles.feature_setting_section_head}>
          <p>Monetization & Access Control</p>
        </div>
        <div className={styles.checkbox}>
          <div className={styles.checkbox_image}>
            <input
              type='checkbox'
              checked={formData.advertisement}
              onChange={(e) => handleCheckboxSelect(e)}
              name='advertisement'
              className={styles.checkbox_input}
            />
          </div>
          <div className={styles.checkbox_label}>
            <p>Advertisement</p>
          </div>
        </div>
        <div className={styles.feature_setting_section_input}>
          <div className={styles.select}>
            <Input
              label='Tools'
              type='select'
              name='tools'
              placeholder='-Select-'
              value={formData.tools}
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
              label='Ad Delivery Provider'
              type='text'
              name='adDeliveryProvider'
              placeholder='Enter client name'
              value={formData.adDeliveryProvider}
              containerStyles={styles.form_field}
              onChange={handleInputChange}
              width='360px'
              height='44px'
            />
          </div>
        </div>
        <div className={styles.checkbox}>
          <div className={styles.checkbox_image}>
            <input
              type='checkbox'
              checked={formData.subscription}
              onChange={(e) => handleCheckboxSelect(e)}
              name='subscription'
              className={styles.checkbox_input}
            />
          </div>
          <div className={styles.checkbox_label}>
            <p>Subscription</p>
          </div>
        </div>
        <div>
          <div className={styles.select}>
            <CheckboxMultiSelectDropdown
              label='Choose Pltaform'
              selected={formData.subscriptionPlatforms}
              options={platformsoptions}
              onChange={handleCheckbox}
              placeholder='-Select-'
            />
          </div>
        </div>
        <div className={styles.feature_setting_section_border}></div>
      </div>
      <AnalyticsTracking />
    </TitleCard>
  );
};

export default FeatureSettings;
