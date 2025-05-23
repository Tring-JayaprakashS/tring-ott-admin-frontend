import React, { useEffect, useState } from 'react';
import FormPopup from '../../../components/Popups/FormPopup/FormPopup';
import { AccessDropDown } from '../../../components/AccessDropDown/AccessDropDown';
import { FilterSectionProps } from '../../../utlis/types/formPopup';
import { ClientFilterFormData } from '../../../utlis/types/manageClientsType';
import {
  accessOptions,
  filterPlatfrom,
  statusOptions,
} from '../../../data/ManageClients';
import PlatformCard from '../../../components/platformCard/PlatformCard';
import { PlatformCardVariant } from '../../../utlis/enums/platformCard.enum';
import { IC_CALENDER } from '../../../utlis/images';
import Input from '../../../components/adminInput/Input';
import style from './FilterSection.module.scss';

const FilterSection = ({
  title,
  isVisible,
  onClose,
  setFormData,
  formData,
}: FilterSectionProps) => {
  const [Data, setData] = useState<ClientFilterFormData>({
    subscription: '',
    status: '',
    platforms: [],
    memberSinceFrom: '',
    memberSinceTo: '',
    billingDateFrom: '',
    billingDateTo: '',
  });

  const [selectedPlatforms, setSelectedPlatforms] = useState<string[]>([]);
  const isSelected = (platformId: string): boolean => {
    return selectedPlatforms.includes(platformId);
  };

  const addUser = (e: React.FormEvent) => {
    e.preventDefault();
    setFormData({
      ...Data,
      platforms: selectedPlatforms,
    });
  };

  const clearFormData = () => {
    setFormData({
      subscription: '',
      status: '',
      platforms: [],
      memberSinceFrom: '',
      memberSinceTo: '',
      billingDateFrom: '',
      billingDateTo: '',
    });
    setSelectedPlatforms([]);
    onClose();
  };

  useEffect(() => {
    if (isVisible && formData) {
      setData(formData);
      setSelectedPlatforms(formData.platforms || []);
    }
  }, [isVisible, formData]);

  const handleSelect =
    (field: keyof ClientFilterFormData) =>
    (selectedOption: { id: string; name: string }) => {
      setData((prevData) => ({
        ...prevData,
        [field]: selectedOption.name,
      }));
    };

  const handleOptions = (platformId: string) => {
    setSelectedPlatforms((prevSelected) => {
      let updatedPlatforms;
      if (prevSelected.includes(platformId)) {
        updatedPlatforms = prevSelected.filter((id) => id !== platformId);
      } else {
        updatedPlatforms = [...prevSelected, platformId];
      }

      setData((prevData) => ({
        ...prevData,
        platforms: updatedPlatforms,
      }));

      return updatedPlatforms;
    });
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <>
      <FormPopup
        isVisible={isVisible}
        onClose={onClose}
        title={title}
        formData={Data}
        save={addUser}
        discard={clearFormData}>
        <AccessDropDown
          label='Subscription Type'
          selectedValue={Data.subscription}
          placeholder='-Select-'
          options={accessOptions}
          onSelect={handleSelect('subscription')}
        />
        <AccessDropDown
          label='Status'
          selectedValue={Data.status}
          placeholder='-Select-'
          options={statusOptions}
          onSelect={handleSelect('status')}
        />
        <div className={style.platform_wraper}>
          <p className={style.platform_title}>Platforms</p>
          <div className={style.platform_card}>
            {filterPlatfrom.map((platform) => (
              <div key={platform.id}>
                <PlatformCard
                  variant={PlatformCardVariant.MEDIUM}
                  isImage={true}
                  imagesrc={platform.image}
                  imageAlt={platform.alt}
                  onClick={handleOptions}
                  platformId={platform.id}
                  isSelected={isSelected(platform.id)}
                />
              </div>
            ))}
          </div>
        </div>
        <hr className={style.underline} />

        <div className={style.date_wrapper}>
          <div>
            <p className={style.date_title}>Member Since</p>
            <div className={style.date_card}>
              <Input
                label='From'
                type='date'
                name='memberSinceFrom'
                placeholder='MM/DD/YYYY'
                iconUrl={IC_CALENDER}
                value={Data.memberSinceFrom}
                onChange={handleInputChange}
              />
              <Input
                label='To'
                type='date'
                name='memberSinceTo'
                placeholder='MM/DD/YYYY'
                iconUrl={IC_CALENDER}
                value={Data.memberSinceTo}
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div>
            <p className={style.date_title}>Billing Date</p>
            <div className={style.date_card}>
              <Input
                label='From'
                type='date'
                name='billingDateFrom'
                placeholder='MM/DD/YYYY'
                iconUrl={IC_CALENDER}
                value={Data.billingDateFrom}
                onChange={handleInputChange}
              />
              <Input
                label='To'
                type='date'
                name='billingDateTo'
                placeholder='MM/DD/YYYY'
                iconUrl={IC_CALENDER}
                value={Data.billingDateTo}
                onChange={handleInputChange}
              />
            </div>
          </div>
        </div>
      </FormPopup>
    </>
  );
};

export default FilterSection;
