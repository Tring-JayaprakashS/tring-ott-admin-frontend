import styles from './MenuList.module.scss';
import Breadcrumb from '../../components/Breadcrumb/Breadcrumb';
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

const MenuList = () => {
  return (
    <div className={styles.appconfig_page}>
      <div className={styles.appconfig_page_head_wrap}>
        <div className={styles.appconfig_page_main}>
          <p className={styles.appconfig_page_main_title}>Add Client</p>
          <Breadcrumb />
        </div>
        <div className={styles.card_wrapper}>
          <ClientDetails />
          <SelectPlatform />
          <CMSIntegration />
          <Language />
          <FeatureSettings />
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
