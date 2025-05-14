import { ShowAddButton } from '../../utlis/enums/fileUpload.enum';
import { IC_ADD_ICON, IC_FILTER } from '../../utlis/images';
import styles from './MenuTitle.module.scss';

type MenuTitleProps = {
  title: string;
  subTitle: string;
  showButtonstate: ShowAddButton;
  buttonContent?: string;
  onClick?: () => void;
  showFilterButton?: boolean;
  onFilterClick?: () => void;
};

const MenuTitle = ({
  title,
  subTitle,
  showButtonstate,
  buttonContent,
  onClick,
  showFilterButton,
  onFilterClick,
}: MenuTitleProps) => {
  return (
    <div className={styles.menutitle}>
      <div className=''>
        <h2 className={styles.menutitle_title}>{title}</h2>
        <p className={styles.menutitle_subtitle}>{subTitle}</p>
      </div>
      <div className={styles.menutitle_actions}>
        {showFilterButton && (
          <button className={styles.menutitle_filter} onClick={onFilterClick}>
            <img src={IC_FILTER} alt='filter' />
            <span className={styles.menutitle_filter_text}>Filter</span>
          </button>
        )}
        {showButtonstate === ShowAddButton.SHOW_BUTTON && (
          <button className={styles.menutitle_button} onClick={onClick}>
            <img src={IC_ADD_ICON} alt='adduser' />
            <span className={styles.menutitle_button_text}>
              {buttonContent}
            </span>
          </button>
        )}
      </div>
    </div>
  );
};

export default MenuTitle;
