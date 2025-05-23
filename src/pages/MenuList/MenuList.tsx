import styles from './MenuList.module.scss';
import ClientDetails from '../../sections/AddClient/ClientDetails/ClientDetails';
import SelectPlatform from '../../sections/AddClient/SelectPlatform/SelectPlatform';
import CMSIntegration from '../../sections/AddClient/CMS&Integration/CMSIntegration';
import Language from '../../sections/AddClient/Language/Language';
import FeatureSettings from '../../sections/AddClient/FeatureSettings/FeatureSettings';
import BottomBar from '../../components/BottomBar/BottomBar';
import {
  BottomBarPosition,
  BottomBarState,
} from '../../utlis/enums/bottomBar.enum';
import {
  AddClientProvider,
  useAddClient,
} from '../../context/AddClientContext';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import MenuTitle from '../../components/MenuTitle/MenuTitle';
import { ShowAddButton } from '../../utlis/enums/fileUpload.enum';
import { IC_EDIT_DETAILS } from '../../utlis/images';

const MenuListContent = () => {
  const { saveToFirebase, isSaving, formData, fetchClientById, clearFormData } =
    useAddClient();
  const { clientId } = useParams<{ clientId?: string }>();
  const navigate = useNavigate();
  const [message, setMessage] = useState('');

  const [lastSaved, setLastSaved] = useState('not yet');
  useEffect(() => {
    if (clientId) {
      fetchClientById(clientId);
    } else {
      clearFormData();
    }
  }, [clientId]);
  const handleSave = async () => {
    if (
      !formData.clientName ||
      !formData.contractStartDate ||
      !formData.productionKeyword ||
      !formData.selectedPlatforms.length
    ) {
      setMessage(
        'Please fill in required fields (clientname , contractStartDate,productionKeyword,selectedPlatforms)'
      );
      return;
    }
    try {
      const clientName = await saveToFirebase();
      setLastSaved(new Date().toLocaleTimeString());

      navigate(`../manage-clients/${clientName}`);
    } catch (error) {
      console.error('Error saving data:', error);
    }
  };
  return (
    <div className={styles.appconfig_page}>
      <div className={styles.appconfig_page_head_wrap}>
        <MenuTitle
          title={clientId ? 'EditClient' : 'Add Client'}
          showButtonstate={ShowAddButton.HIDE_BUTTON}
          buttonContent='Edit Details'
          buttonImage={IC_EDIT_DETAILS}
        />
        {message && <p className={styles.success_message}>{message}</p>}
        <div className={styles.card_wrapper}>
          <ClientDetails />
          <SelectPlatform />
          <CMSIntegration />
          <Language />
          <FeatureSettings />
        </div>
      </div>
      <BottomBar
        onSave={handleSave}
        position={BottomBarPosition.STICKY}
        state={BottomBarState.SHOW_ONLY_SAVE}
        lastSavedText={lastSaved}
        saveText={isSaving ? 'Generating...' : 'Generate'}
        isSavedisabled={isSaving}
      />
    </div>
  );
};

const MenuList = () => {
  return (
    <AddClientProvider>
      <MenuListContent />
    </AddClientProvider>
  );
};

export default MenuList;
