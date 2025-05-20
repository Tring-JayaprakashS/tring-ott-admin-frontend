import { useEffect, useState } from 'react';
import ManageClientsCard from '../../components/ManagClients/ManageClientsCard/ManageClientsCard';
import MenuTitle from '../../components/MenuTitle/MenuTitle';
import { Clients } from '../../data/ManageClients';
import { ShowAddButton } from '../../utlis/enums/fileUpload.enum';
import styles from './ManageClients.module.scss';
import FilterSection from '../../sections/ManagClients/FilterSection/FilterSection';
import { IC_INFO_ICON } from '../../utlis/images';
import DeleteSection from '../../sections/ManagClients/DeleteSection/DeleteSection';
import ClientDropdown from '../../components/ManagClients/ClientDropdown/ClientDropdown';
import { useNavigate } from 'react-router-dom';
import { ClientFilterFormData } from '../../utlis/types/manageClientsType';

const ManageClients = () => {
  const [clientData, setClientData] = useState(Clients);
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [isDeletePopupVisible, setIsDeletePopupVisible] = useState(false);
  const [activeDropdownIndex, setActiveDropdownIndex] = useState<number | null>(
    null
  );
  const [deleteIndex, setDeleteIndex] = useState<number | null>(null);

  const [filteredClients, setFilteredClients] = useState(Clients);

  const [formData, setFormData] = useState<ClientFilterFormData>({
    subscription: '',
    status: '',
    platforms: [],
    memberSinceFrom: '',
    memberSinceTo: '',
    billingDateFrom: '',
    billingDateTo: '',
  });

  const navigator = useNavigate();

  const handleDropdownToggle = (index: number) => {
    setActiveDropdownIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const togglePopup = () => {
    setIsPopupVisible(!isPopupVisible);
  };

  const handleDeactivateClient = (index: number) => {
    setClientData(
      clientData.map((data, i) =>
        i === index
          ? {
              ...data,
              status: {
                label: 'Deactivate',
                value: false,
              },
            }
          : data
      )
    );
    setActiveDropdownIndex(null);
  };
  const handleActivateClient = (index: number) => {
    setClientData(
      clientData.map((data, i) =>
        i === index
          ? {
              ...data,
              status: {
                label: 'Active',
                value: true,
              },
            }
          : data
      )
    );
    setActiveDropdownIndex(null);
  };

  const handleDeleteClient = (index: number) => {
    setActiveDropdownIndex(null);
    setDeleteIndex(index);
    setIsDeletePopupVisible(true);
  };

  const handleDeletePermanently = (index: number) => {
    const updatedData = clientData.filter((_, i) => i !== index);
    setClientData(updatedData);
    setIsDeletePopupVisible(false);
    setDeleteIndex(null);
  };

  const filterClients = () => {
    const {
      subscription,
      status,
      platforms,
      memberSinceFrom,
      memberSinceTo,
      billingDateFrom,
      billingDateTo,
    } = formData;

    const result = clientData.filter((client) => {
      if (subscription) {
        const isPremium = subscription === 'Premium';
        if (client.premium !== isPremium) return false;
      }

      if (status && client.status.label.toLowerCase() !== status.toLowerCase())
        return false;

      if (
        platforms.length > 0 &&
        !platforms.some((p) => client.platforms.includes(p))
      )
        return false;

      if (
        memberSinceFrom &&
        new Date(client.memberSince) < new Date(memberSinceFrom)
      )
        return false;
      if (
        memberSinceTo &&
        new Date(client.memberSince) > new Date(memberSinceTo)
      )
        return false;

      if (
        billingDateFrom &&
        new Date(client.memberSince) < new Date(billingDateFrom)
      )
        return false;
      if (
        billingDateTo &&
        new Date(client.memberSince) > new Date(billingDateTo)
      )
        return false;

      return true;
    });

    setFilteredClients(result);
  };

  useEffect(() => {
    filterClients();
  }, [formData, clientData]);

  return (
    <>
      <div className={styles.ManagClients_page}>
        <div className={styles.ManagClients_page_head_wrap}>
          <MenuTitle
            showFilterButton={true}
            showButtonstate={ShowAddButton.SHOW_BUTTON}
            subTitle='Configure client access, permissions, and platform availability for OTT deployments'
            title='Manage Clients'
            buttonContent='Add Clients'
            onFilterClick={togglePopup}
            onClick={() => {
              navigator('add-clients');
            }}
          />
          <div className={styles.ManagClients_container}>
            {filteredClients.map((client, index) => (
              <div key={index} className={styles.ManagClients_card_wrapper}>
                <ManageClientsCard
                  {...client}
                  onDropdownToggle={() => handleDropdownToggle(index)}
                />
                {activeDropdownIndex === index && (
                  <ClientDropdown
                    clientData={client}
                    onDeactivate={() => handleDeactivateClient(index)}
                    onActivate={() => handleActivateClient(index)}
                    onDelete={() => handleDeleteClient(index)}
                    clickOutSide={() => setActiveDropdownIndex(null)}
                  />
                )}
              </div>
            ))}
          </div>
          <FilterSection
            isVisible={isPopupVisible}
            onClose={togglePopup}
            title='Filter'
            setFormData={setFormData}
            formData={formData}
          />
          <DeleteSection
            icon={IC_INFO_ICON}
            isVisible={isDeletePopupVisible}
            onClose={() => setIsDeletePopupVisible(false)}
            deletePermanent={() => {
              if (deleteIndex !== null) {
                handleDeletePermanently(deleteIndex);
              }
            }}
          />
        </div>
      </div>
    </>
  );
};

export default ManageClients;
