import ManageClientsCard from '../../components/ManagClients/ManageClientsCard/ManageClientsCard';
import MenuTitle from '../../components/MenuTitle/MenuTitle';
import { ShowAddButton } from '../../utlis/enums/fileUpload.enum';
import styles from './ManageClients.module.scss';
import FilterSection from '../../sections/ManagClients/FilterSection/FilterSection';
import { IC_INFO_ICON } from '../../utlis/images';
import DeleteSection from '../../sections/ManagClients/DeleteSection/DeleteSection';
import ClientDropdown from '../../components/ManagClients/ClientDropdown/ClientDropdown';
import { ClientStatus } from '../../utlis/enums/manageClients';
import { clientHelpers } from '../../utlis/helpers/clientHelpers';

const ManageClients = () => {
  const {
    loading,
    togglePopup,
    navigator,
    filteredClients,
    handleDropdownToggle,
    activeDropdownIndex,
    handleToggleClientStatus,
    handleDeleteClient,
    setActiveDropdownIndex,
    isPopupVisible,
    setFormData,
    formData,
    isDeletePopupVisible,
    setIsDeletePopupVisible,
    deleteIndex,
    handleDeletePermanently,
  } = clientHelpers();

  if (loading) return <div>Loading...</div>;

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
                    onDeactivate={() =>
                      handleToggleClientStatus(
                        index,
                        client.id,
                        ClientStatus.Deactivate
                      )
                    }
                    onActivate={() =>
                      handleToggleClientStatus(
                        index,
                        client.id,
                        ClientStatus.Active
                      )
                    }
                    onDelete={() => handleDeleteClient(client.id)}
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
