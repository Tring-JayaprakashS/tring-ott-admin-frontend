import { ShowAddButton } from '../enums/fileUpload.enum';

export type MenuTitleProps = {
  title: string;
  subTitle?: string;
  showButtonstate: ShowAddButton;
  buttonContent?: string;
  onClick?: () => void;
  showFilterButton?: boolean;
  onFilterClick?: () => void;
  buttonImage?: string;
};
