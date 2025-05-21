import React, { useState } from 'react';
import styles from './FeatureSetting.module.scss';
import TitleCard from '../../../components/TitleCard/TitleCard';
import PlatformCard from '../../../components/platformCard/PlatformCard';
import Input from '../../../components/adminInput/Input';
import { PRIMARY_STREAMING_FEATURE } from '../../../data/PlatformCard';
import AnalyticsTracking from '../AnalyticsTracking/AnalyticsTracking';
import { PlatformCardVariant } from '../../../utlis/enums/platformCard.enum';

const FeatureSettings = () => {
  const [clientForm, setClientForm] = useState({
    tools: '',
    adDeliveryProvider: '',
    ChoosePlatform: '',
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

  const [selectedPlatforms, setSelectedPlatforms] = useState<string[]>([]);
  const handleSelect = (platformId: string) => {
    setSelectedPlatforms((prevSelected) => {
      if (prevSelected.includes(platformId)) {
        return prevSelected.filter((id) => id !== platformId);
      } else {
        return [...prevSelected, platformId];
      }
    });
  };
  const isSelected = (platformId: string): boolean => {
    return selectedPlatforms.includes(platformId);
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
                isSelected={isSelected(platform.id)}
                onClick={handleSelect}
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
            <input type='checkbox' className={styles.checkbox_input} />
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
              value={clientForm.tools}
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
              value={clientForm.adDeliveryProvider}
              containerStyles={styles.form_field}
              onChange={handleInputChange}
              width='360px'
              height='44px'
            />
          </div>
        </div>
        <div className={styles.checkbox}>
          <div className={styles.checkbox_image}>
            <input type='checkbox' className={styles.checkbox_input} />
          </div>
          <div className={styles.checkbox_label}>
            <p>Subscription</p>
          </div>
        </div>
        <div>
          <div className={styles.select}>
            <Input
              label='Choose Platform'
              type='select'
              name='ChoosePlatform'
              placeholder='-Select-'
              value={clientForm.ChoosePlatform}
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
        </div>
        <div className={styles.feature_setting_section_border}></div>
      </div>
      <AnalyticsTracking />
    </TitleCard>
  );
};

export default FeatureSettings;
