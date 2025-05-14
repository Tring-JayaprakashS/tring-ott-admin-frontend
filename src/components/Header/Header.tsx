import {
  IC_SEARCH,
  IC_PROFILE_IMAGE,
  IC_BELL,
  IC_DROP_DOWN,
} from '../../utlis/images';
import styles from './Header.module.scss';

const Header = () => {
  return (
    <div className={styles.header_main}>
      <div className={styles.header_left}>
        <h1 className={styles.header_welcome_message}>Good Morning, Jasen!</h1>
        <div className={styles.header_right_content}>
          <div className={styles.header_section_search}>
            <img
              src={IC_SEARCH}
              alt='Search'
              className={styles.header_section_search_img_icon}
            />
            <input
              type='search'
              placeholder='Search'
              className={styles.header_section_search_input}
            />
          </div>

          <div className={styles.header_notification}>
            <img src={IC_BELL} alt='Profile' />
          </div>
          <div className={styles.header_profile_container}>
            <img
              src={IC_PROFILE_IMAGE}
              alt='Profile'
              className={styles.header_profile_logo}
            />
            <div className={styles.header_profile_wrapper}>
              <p className={styles.header_profile_name}>Jasen Hale</p>
              <p className={styles.header_profile_role}>Admin</p>
            </div>
            <img src={IC_DROP_DOWN} alt='' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
