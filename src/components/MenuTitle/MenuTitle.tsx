import { ShowAddButton } from '../../utlis/enums/fileUpload.enum';
import { IC_ADD_ICON, IC_FILTER } from '../../utlis/images';
import { MenuTitleProps } from '../../utlis/types/pageTitle';
import Breadcrumb from '../Breadcrumb/Breadcrumb';
import Button from '../Button/Button';
import styles from './MenuTitle.module.scss';

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
        {subTitle ? (
          <div className={styles.menutitle_subtitle_div}>
            <p className={styles.menutitle_subtitle}>{subTitle}</p>
          </div>
        ) : (
          <div className={styles.menutitle_subtitle_div}>
            <Breadcrumb />
          </div>
        )}
      </div>
      <div className={styles.menutitle_actions}>
        {showFilterButton && (
          <Button
            onClick={onFilterClick}
            type='button'
            variant='transparent'
            className={styles.menutitle_filter}>
            <img src={IC_FILTER} alt='filter' />
            <span className={styles.menutitle_filter_text}>Filter</span>
          </Button>
        )}
        {showButtonstate === ShowAddButton.SHOW_BUTTON && (
          <Button type='button' onClick={onClick} variant='primary'>
            <img src={IC_ADD_ICON} alt='adduser' />
            <span className={styles.menutitle_button_text}>
              {buttonContent}
            </span>
          </Button>
        )}
      </div>
    </div>
  );
};

export default MenuTitle;
