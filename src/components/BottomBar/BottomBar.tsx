import styles from './BottomBar.module.scss';
import {
  BottomBarPosition,
  BottomBarState,
} from '../../utlis/enums/bottomBar.enum';
import { IC_CLOCK_ICON, IC_PREVIEW_ICON } from '../../utlis/images';
import Button from '../Button/Button';
import { BottomBarProps } from '../../utlis/types/bottomBar';

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
        position === BottomBarPosition.STICKY && styles.bottomBarWrapper_sticky
      }
      ${state === BottomBarState.HIDE_BOTTOM_BAR && styles.bottomBarWrapper_display_none}`}>
      <div className={styles.bottomBarLeft}>
        <img src={IC_CLOCK_ICON} alt='' />
        <span>Last Saved : {lastSavedText}</span>
      </div>

      <div className={styles.bottomBarRight}>
        {state === BottomBarState.SHOW_WITH_DRAFT_AND_PREVIEW && (
          <Button
            variant='transparent'
            className={styles.previewButton}
            onClick={onPreview}>
            Preview
            <img src={IC_PREVIEW_ICON} alt='' />
          </Button>
        )}
        <Button type='button' onClick={onSave}>
          {saveText}
        </Button>
      </div>
    </div>
  );
};

export default BottomBar;
