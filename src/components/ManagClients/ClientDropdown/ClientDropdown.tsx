import { useEffect, useRef, useState } from 'react';
import styles from './ClientDropdown.module.scss';
import useClickOutside from '../../../hooks/useClickOutside';
import { ClientDropdownProps } from '../../../utlis/types/manageClientsType';
import { actionItemsData, linkItems } from '../../../data/ManageClients';

const ClientDropdown = ({
  onDeactivate,
  onDelete,
  clientData,
  onActivate,
  clickOutSide,
}: ClientDropdownProps) => {
  const [actionItem, setActionItem] = useState(actionItemsData);
  const dropdownRef = useRef<HTMLDivElement>(null);
  useClickOutside(dropdownRef, () => {
    clickOutSide(null);
  });

  useEffect(() => {
    if (clientData.status.value) {
      setActionItem(
        actionItemsData.filter((data) => data.label !== 'Activate')
      );
    } else {
      setActionItem(
        actionItemsData.filter((data) => data.label !== 'Deactivate')
      );
    }
  }, []);

  const handleActionClick = (id: number) => {
    switch (id) {
      case 4:
        if (clientData.status.label === 'Active') {
          onDeactivate();
        } else {
          onActivate();
        }
        break;
      case 5:
        onDelete();
        break;
      default:
        break;
    }
  };

  return (
    <div className={styles.menuItems_menu_dropdown_container} ref={dropdownRef}>
      <div className={styles.menuItems_dropdown_body}>
        {linkItems.map(({ id, label, icon, url }) => (
          <a
            key={id}
            href={url}
            target='_blank'
            rel='noopener noreferrer'
            className={styles.menuItems_dropdown_item_link}>
            <span className={styles.menuItems_dropdown_text_link}>{label}</span>
            <img
              src={icon}
              alt={label}
              className={styles.menuItems_dropdown_image}
            />
          </a>
        ))}

        <hr className={styles.menuItems_dropdown_divider} />

        {actionItem.map(({ id, label, icon }) => (
          <div
            key={`${id}-${label}`}
            className={styles.menuItems_dropdown_item}
            onClick={() => handleActionClick(id)}>
            <>
              <img
                src={icon}
                alt={label}
                className={styles.menuItems_dropdown_image}
              />
              <span className={styles.menuItems_dropdown_text}>{label}</span>
            </>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClientDropdown;
