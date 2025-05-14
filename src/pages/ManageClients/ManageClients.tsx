import ManageClientsCard from '../../components/ManagClients/ManageClientsCard/ManageClientsCard';
import MenuTitle from '../../components/MenuTitle/MenuTitle';
import { Clients } from '../../data/ManageClients';
import { ShowAddButton } from '../../utlis/enums/fileUpload.enum';
import styles from './ManageClients.module.scss';
const ManageClients = () => {
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
          />
          <div className={styles.ManagClients_container}>
            {Clients.map(
              (
                {
                  name,
                  logo,
                  premium,
                  status,
                  memberSince,
                  nextBilling,
                  platforms,
                },
                index
              ) => (
                <ManageClientsCard
                  key={index}
                  name={name}
                  logo={logo}
                  premium={premium}
                  status={status}
                  memberSince={memberSince}
                  nextBilling={nextBilling}
                  platforms={platforms}
                />
              )
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default ManageClients;
