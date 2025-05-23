import styles from './EditDetails.module.scss';
import MenuTitle from '../../components/MenuTitle/MenuTitle';
import { ShowAddButton } from '../../utlis/enums/fileUpload.enum';
import { IC_EDIT_DETAILS } from '../../utlis/images';
import ClientDetails from '../../sections/EditClient/ClientDetails/ClientDetails';
import SelectPltaform from '../../sections/EditClient/SelectPlatform/SelectPltaform';
import CMSIntegration from '../../sections/EditClient/CMSIntegration/CMSIntegration';
import Language from '../../sections/EditClient/Language/Language';
import FeatureSetting from '../../sections/EditClient/FeatureSetting/FeatureSetting';
import {
  AddClientProvider,
  useAddClient,
} from '../../context/AddClientContext';
import { useParams, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const EditDetailsContent = () => {
  const { clientId } = useParams<{ clientId: string }>();
  const { fetchClientById } = useAddClient();
  useEffect(() => {
    if (clientId) {
      fetchClientById(clientId);
    }
  }, [clientId, fetchClientById]);
  const navigate = useNavigate();

  return (
    <div className={styles.appconfig_page}>
      <div className={styles.appconfig_page_head_wrap}>
        <MenuTitle
          title={`${clientId}`}
          showButtonstate={ShowAddButton.SHOW_BUTTON}
          buttonContent='Edit Details'
          buttonImage={IC_EDIT_DETAILS}
          onClick={() => {
            navigate(`/home/manage-clients/edit-client/${clientId}`);
          }}
        />

        <div className={styles.card_wrapper}>
          <ClientDetails />
          <SelectPltaform />
          <CMSIntegration />
          <Language />
          <FeatureSetting />
        </div>
      </div>
    </div>
  );
};

const EditDetails = () => {
  return (
    <AddClientProvider>
      <EditDetailsContent />
    </AddClientProvider>
  );
};

export default EditDetails;
