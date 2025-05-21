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
import { useState } from 'react';
import MenuTitle from '../../components/MenuTitle/MenuTitle';
import { ShowAddButton } from '../../utlis/enums/fileUpload.enum';
import { IC_EDIT_DETAILS } from '../../utlis/images';

const MenuListContent = () => {
  const { saveToFirebase, isSaving } = useAddClient();
  const [isEdit, setIsEdit] = useState(false);
  const [isGenerated, setIsGenerated] = useState(true);
  const [lastSaved, setLastSaved] = useState('not yet');
  const handleSave = async () => {
    await saveToFirebase();
    setLastSaved(new Date().toLocaleTimeString());
    setIsEdit(true);
    setIsGenerated(false);
  };
  return (
    <div className={styles.appconfig_page}>
      <div className={styles.appconfig_page_head_wrap}>
        <MenuTitle
          title='Add Client'
          showButtonstate={
            isEdit ? ShowAddButton.SHOW_BUTTON : ShowAddButton.HIDE_BUTTON
          }
          buttonContent='Edit Details'
          buttonImage={IC_EDIT_DETAILS}
        />
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
        state={
          isGenerated
            ? BottomBarState.SHOW_ONLY_SAVE
            : BottomBarState.HIDE_BOTTOM_BAR
        }
        lastSavedText={lastSaved}
        saveText={isSaving ? 'Generating...' : 'Generate'}
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
