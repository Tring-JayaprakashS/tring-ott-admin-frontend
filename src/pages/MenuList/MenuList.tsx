import styles from './MenuList.module.scss';
import TitleCard from '../../components/TitleCard/TitleCard';
import Breadcrumb from '../../components/Breadcrumb/Breadcrumb';
import FileUploader from '../../components/FileUpload/FileUpload';
import { FileHandling } from '../../utlis/helpers/FileHandling';
import { FileUploaderSize } from '../../utlis/enums/fileUpload.enum';
import Input from '../../components/adminInput/Input';
import React, { useState } from 'react';
import BottomBar from '../../components/BottomBar/BottomBar';
import {
  BottomBarPosition,
  BottomBarState,
} from '../../utlis/enums/bottomBar.enum';

const MenuList = () => {
  const {
    fileInput,

    handleFileChange,
    openFileSelector,

    handleDragOver,
    handleDrop,
  } = FileHandling();
  const [clientForm, setClientForm] = useState({
    clientName: '',
    email: '',
    phoneNumber: '',
    city: '',
    state: '',
    country: '',
    contractStartDate: '',
    contractDuration: '',
    uatReleaseDate: '',
    productionReleaseDate: '',
    projectKeyword: '',
    countryCode: '+1',
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

  const handleCountryCodeChange = (code: string) => {
    setClientForm((prev) => ({
      ...prev,
      countryCode: code,
    }));
  };

  const durationOptions = [
    { value: '3months', label: '3 Months' },
    { value: '6months', label: '6 Months' },
    { value: '1year', label: '1 Year' },
    { value: '2years', label: '2 Years' },
  ];

  const countryOptions = [
    { value: 'us', label: 'United States' },
    { value: 'ca', label: 'Canada' },
    { value: 'uk', label: 'United Kingdom' },
    { value: 'au', label: 'Australia' },
  ];

  return (
    <div className={styles.appconfig_page}>
      <div className={styles.appconfig_page_head_wrap}>
        <div className={styles.appconfig_page_main}>
          <p className={styles.appconfig_page_main_title}>Add Client</p>
          <Breadcrumb />
        </div>
        <div className={styles.card_wrapper}>
          <TitleCard title='Client details'>
            <div className={styles.client_details_mainwrap}>
              <div className={styles.client_details_mainwrap_para}>
                <p>
                  Fill in the required information to add a new client to the
                  system
                </p>
              </div>
              <div className={styles.client_details_mainwrap_section}>
                <div className={styles.client_details_mainwrap_section_img}>
                  <FileUploader
                    fileInput={fileInput}
                    handleFileChange={handleFileChange}
                    handleDragOver={handleDragOver}
                    handleDrop={handleDrop}
                    openFileSelector={openFileSelector}
                    state={FileUploaderSize.SHOW_SIZE}
                    fileType='.png, .svg'
                  />
                </div>
                <div className={styles.client_details_mainwrap_section_form}>
                  <div className={styles.form_row}>
                    <Input
                      label='Client Name'
                      type='text'
                      name='clientName'
                      placeholder='Enter client name'
                      value={clientForm.clientName}
                      containerStyles={styles.form_field}
                      onChange={handleInputChange}
                    />

                    <Input
                      label='Email'
                      type='email'
                      name='email'
                      placeholder='Enter email'
                      value={clientForm.email}
                      containerStyles={styles.form_field}
                      onChange={handleInputChange}
                    />

                    <Input
                      label='Phone Number'
                      type='phone'
                      name='phoneNumber'
                      placeholder='(000) 000-0000'
                      value={clientForm.phoneNumber}
                      containerStyles={styles.form_field}
                      countryCode={clientForm.countryCode}
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
                      value={clientForm.city}
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
                      name='city'
                      placeholder='-Select-'
                      value={clientForm.state}
                      onChange={handleInputChange}
                      options={[
                        { value: 'tn', label: 'Tamil Nadu' },
                        { value: 'D', label: 'Delhi' },
                        { value: 'k', label: 'Kerala' },
                      ]}
                      containerStyles={styles.form_field}
                    />

                    <Input
                      label='Country'
                      type='select'
                      name='country'
                      placeholder='-Select-'
                      value={clientForm.country}
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
                      value={clientForm.contractStartDate}
                      onChange={handleInputChange}
                      containerStyles={styles.form_field}
                    />

                    <Input
                      label='Contract Duration'
                      type='select'
                      name='contractDuration'
                      placeholder='-Select-'
                      value={clientForm.contractDuration}
                      onChange={handleInputChange}
                      options={durationOptions}
                      containerStyles={styles.form_field}
                    />

                    <Input
                      label='UAT Release Date'
                      type='date'
                      name='uatReleaseDate'
                      placeholder='MM/DD/YYYY'
                      value={clientForm.uatReleaseDate}
                      onChange={handleInputChange}
                      containerStyles={styles.form_field}
                    />
                  </div>

                  <div className={styles.form_row}>
                    <Input
                      label='Production Release Date'
                      type='date'
                      name='productionReleaseDate'
                      placeholder='MM/DD/YYYY'
                      value={clientForm.productionReleaseDate}
                      onChange={handleInputChange}
                      containerStyles={styles.form_field}
                    />

                    <Input
                      label='Project Keyword'
                      type='text'
                      name='projectKeyword'
                      placeholder='Add project keyword'
                      value={clientForm.projectKeyword}
                      onChange={handleInputChange}
                      containerStyles={styles.form_field}
                    />
                    <div className={styles.empty_space}></div>
                  </div>
                </div>
              </div>
            </div>
          </TitleCard>
          <TitleCard title='Select Platform'>
            <div className={styles.client_details_mainwrap_para}>
              <p className={styles.paragraph}>
                The client's OTT service will be available exclusively on the
                selected platforms
              </p>
            </div>
          </TitleCard>
          <TitleCard title='CMS & Integration'>
            <div className={styles.client_details_mainwrap_para}>
              <p className={styles.paragraph}>
                Configure the CMS provider and integration settings to
                streamline content management and platform operations
              </p>
            </div>
            <div
              className={
                styles.client_details_mainwrap_section_form_cliIntegration
              }>
              <div className={styles.cliIntegration_first_row}>
                <Input
                  label='Media Provider'
                  type='select'
                  name='Media Provider'
                  placeholder='-Select-'
                  value={clientForm.city}
                  onChange={handleInputChange}
                  options={[
                    { value: 'wa', label: 'Whatsapp' },
                    { value: 'fb', label: 'FaceBook' },
                    { value: 'N', label: 'Netflix' },
                  ]}
                  containerStyles={styles.form_field}
                  inputStyles={styles.input_field}
                  width='360px'
                  height='44px'
                />

                <div className={styles.empty_space}></div>
              </div>

              <div className={styles.cliIntegration_second_row}>
                <Input
                  label='Authentication Provider'
                  type='select'
                  name='Authentication Provider'
                  placeholder='-Select-'
                  value={clientForm.city}
                  onChange={handleInputChange}
                  options={[
                    { value: 's', label: 'Security' },
                    { value: 'at', label: 'Authentication' },
                    { value: 'ac', label: 'Authorization' },
                  ]}
                  containerStyles={styles.form_field}
                  width='360px'
                  height='44px'
                />

                <div className={styles.empty_space}></div>
              </div>
            </div>
          </TitleCard>
          <TitleCard title='Language'>
            <div className={styles.client_details_mainwrap_para}>
              <p className={styles.paragraph}>
                Configure the CMS provider and integration settings to
                streamline content management and platform operations
              </p>
            </div>

            <div className={styles.section_language}>
              <Input
                label='Media Provider'
                type='select'
                name='Media Provider'
                placeholder='-Select-'
                value={clientForm.city}
                onChange={handleInputChange}
                options={[
                  { value: 'wa', label: 'Whatsapp' },
                  { value: 'fb', label: 'FaceBook' },
                  { value: 'N', label: 'Netflix' },
                ]}
                containerStyles={styles.form_field}
                inputStyles={styles.input_field}
                width='360px'
                height='44px'
              />

              <Input
                label='Authentication Provider'
                type='select'
                name='Authentication Provider'
                placeholder='-Select-'
                value={clientForm.city}
                onChange={handleInputChange}
                options={[
                  { value: 's', label: 'Security' },
                  { value: 'at', label: 'Authentication' },
                  { value: 'ac', label: 'Authorization' },
                ]}
                containerStyles={styles.form_field}
                width='360px'
                height='44px'
              />
            </div>
          </TitleCard>
        </div>
      </div>
      <BottomBar
        onSave={() => {}}
        position={BottomBarPosition.STICKY}
        state={BottomBarState.SHOW_ONLY_SAVE}
        lastSavedText='not yet'
        saveText='Generate'
      />
    </div>
  );
};

export default MenuList;
