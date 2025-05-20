import { BottomBarPosition, BottomBarState } from '../enums/bottomBar.enum';

export type BottomBarProps = {
  onSave: () => void;
  onPreview?: () => void;
  saveText?: string;
  lastSavedText?: string;
  state: BottomBarState;
  position: BottomBarPosition;
};
