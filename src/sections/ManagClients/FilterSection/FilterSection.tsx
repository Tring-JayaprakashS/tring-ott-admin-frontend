import React, { useState } from 'react';
import FormPopup from '../../../components/Popups/FormPopup/FormPopup';
import { AccessDropDown } from '../../../components/AccessDropDown/AccessDropDown';
import { UserFormData } from '../../../utlis/helpers/schema';
import { FilterSectionProps } from '../../../utlis/types/formPopup';
import { ClientFilterFormData } from '../../../utlis/types/manageClientsType';
import { accessOptions, statusOptions } from '../../../data/ManageClients';

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
  const [formErrors, setFormErrors] = useState<
    Partial<Record<keyof UserFormData, string>>
  >({});

  const addUser = (e: React.FormEvent) => {
    e.preventDefault();
    setFormData(Data);
  };

  const clearFormData = () => {
    setData({
      subscription: '',
      status: '',
      platforms: [],
      memberSinceFrom: '',
      memberSinceTo: '',
      billingDateFrom: '',
      billingDateTo: '',
    });
    onClose();
  };

  const handleSelect =
    (field: keyof ClientFilterFormData) =>
    (selectedOption: { id: string; name: string }) => {
      setData((prevData) => ({
        ...prevData,
        [field]: selectedOption.name,
      }));
      setFormErrors((prevError) => ({
        ...prevError,
        [field]: undefined,
      }));
    };

  return (
    <>
      <FormPopup
        isVisible={isVisible}
        onClose={clearFormData}
        title={title}
        formData={Data}
        save={addUser}>
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
      </FormPopup>
    </>
  );
};

export default FilterSection;
