import { IC_CROWN_ICON, IC_THREE_DOT } from '../../../utlis/images';
import { PlatformCardProps } from '../../../utlis/types/manageClientsType';
import styles from './ManageClientsCard.module.scss';

export default function ManageClientsCard({
  name,
  logo,
  premium,
  status,
  platforms,
  memberSince,
  nextBilling,
  onDropdownToggle,
}: PlatformCardProps) {
  return (
    <div className={styles.card}>
      <div className={styles.card_cuntent_wrap}>
        <div className={styles.header}>
          <div className={styles.client}>
            {logo && (
              <div className={styles.logoWrapper}>
                <img src={logo} alt={`${name} logo`} className={styles.logo} />
                {premium && (
                  <img
                    src={IC_CROWN_ICON}
                    alt='Crown'
                    className={styles.crown}
                  />
                )}
              </div>
            )}
            <span className={styles.name}>{name}</span>
          </div>

          <div className={styles.rightSection}>
            <div
              className={`${styles.status} ${
                status.value ? styles.status_active : styles.status_inactive
              }`}>
              <span
                className={`${styles.status_dot} ${
                  status.value
                    ? styles.status_dot_active
                    : styles.status_dot_inactive
                }`}
              />
              <span className={styles.status_content}>{status.label}</span>
            </div>
            <img
              src={IC_THREE_DOT}
              alt='options'
              className={styles.menu}
              onClick={() => onDropdownToggle()}
            />
          </div>
        </div>

        <div className={styles.platforms}>
          {platforms.map((icon, index) => (
            <div key={index} className={styles.platform_wrap}>
              <img key={index} src={icon} alt={`platform-${index}`} />
            </div>
          ))}
        </div>
      </div>

      <div className={styles.footer}>
        <div className={styles.footerItem}>
          <p className={styles.label}>Member Since:</p>
          <p className={styles.value}>{memberSince}</p>
        </div>
        <div className={styles.footerItem_right}>
          <p className={styles.label_right}>Next Billing Date:</p>
          <p className={styles.value_right}>{nextBilling}</p>
        </div>
      </div>
    </div>
  );
}
