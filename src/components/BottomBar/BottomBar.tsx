import styles from './BottomBar.module.scss';
import {
  BottomBarPosition,
  BottomBarState,
} from '../../utlis/enums/bottomBar.enum';
import { IC_CLOCK_ICON, IC_PREVIEW_ICON } from '../../utlis/images';
import Button from '../Button/Button';

type BottomBarProps = {
  onSave: () => void;
  onPreview?: () => void;
  saveText?: string;
  lastSavedText?: string;
  state: BottomBarState;
  position: BottomBarPosition;
};

const BottomBar = ({
  position,
  onSave,
  onPreview,
  saveText,
  lastSavedText,
  state,
}: BottomBarProps) => {
  return (
    <div
      className={`${styles.bottomBarWrapper}  ${
        position === BottomBarPosition.STICKY
          ? styles.bottomBarWrapper_sticky
          : ''
      }`}>
      <div className={styles.bottomBarLeft}>
        <img src={IC_CLOCK_ICON} alt='' />
        <span>Last Saved : {lastSavedText}</span>
      </div>

      <div className={styles.bottomBarRight}>
        {state === BottomBarState.SHOW_WITH_DRAFT_AND_PREVIEW && (
          <button className={styles.previewButton} onClick={onPreview}>
            Preview
            <img src={IC_PREVIEW_ICON} alt='' />
          </button>
        )}
        <Button
          type='button'
          className={styles.saveButton}
          variant='primary'
          onClick={onSave}>
          {saveText}
        </Button>
      </div>
    </div>
  );
};

export default BottomBar;
