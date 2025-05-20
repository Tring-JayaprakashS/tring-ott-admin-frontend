import { Link, useLocation } from 'react-router-dom';

import { menu, others } from '../../data/sidebar';
import {
  IC_APP_LOGO,
  IC_APP_MINI_LOGO,
  IC_DOUBLE_DROP_ARROW,
  IC_DROP_ARROW,
  IC_LOGOUT,
  IC_MENU_ICON,
} from '../../utlis/images';
import styles from './Sidebar.module.scss';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAUth } from '../../context/Authcontext';

const Sidebar = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { logout } = useAUth();

  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [openSubMenu, setOpenSubMenu] = useState<string | null>(null);

  useEffect(() => {
    const matchingItem = menu.find((item) =>
      item.children?.some((child) =>
        pathname.includes(child.path.replace(/\s+/g, '-'))
      )
    );
    if (matchingItem) {
      setOpenSubMenu(matchingItem.list);
    }
  }, [pathname]);

  useEffect(() => {
    const handleResize = () => {
      setSidebarOpen(window.innerWidth >= 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const isActive = (route: string) => {
    const normalizedRoute = route.replace(/\s+/g, '-').toLowerCase();

    const fullPath = pathname.replace(/^\//, '').toLowerCase();

    return fullPath === normalizedRoute || fullPath.includes(normalizedRoute);
  };

  const handleSubmit = () => {
    logout();
    navigate('/sigin');
  };

  return (
    <aside
      className={`${styles.section_main} ${sidebarOpen ? styles.section_main_expanded : styles.section_main_collapsed}`}>
      <div className={`${styles.section_main_logo_div} `}>
        {sidebarOpen ? (
          <>
            <div className={styles.section_main_logo_img}>
              <img src={IC_APP_LOGO} alt='App Logo' />
            </div>
          </>
        ) : (
          <div className={styles.section_main_logo_img_mini}>
            <img src={IC_APP_MINI_LOGO} alt='App Logo' />
            <p
              className={`${styles.section_main_powered} ${sidebarOpen ? styles.section_main_powered_open : styles.section_main_powered_mini}`}>
              Powered by Tring play
            </p>
          </div>
        )}

        <button
          onClick={() => setSidebarOpen((prev) => !prev)}
          className={styles.section_main_toggle_btn}>
          <img
            src={IC_MENU_ICON}
            alt='menu'
            title='menu'
            className={styles.section_main_menu_icon}
          />
        </button>
      </div>

      <ul className={styles.section_main_menuItem}>
        <p
          className={`  ${sidebarOpen ? styles.section_main_menu_title : styles.section_main_menu_title_mini}`}>
          Menu
        </p>

        {menu
          .filter((item) => item.show)
          .map((item) => (
            <li key={item.list} className={styles.section_main_menu_list}>
              <div
                title={item.list}
                className={`
                  ${styles.section_main_link} 
                  ${sidebarOpen ? styles['section_main_link--with-padding'] : styles['section_main_link--centered']} 
                  ${isActive(item.list) ? styles.section_main_link_active : styles.section_main_link_inactive}
                `}
                onClick={() => {
                  const anyChildActive = item.children?.some((child) =>
                    pathname.includes(
                      child.path.toLowerCase().replace(/\s+/g, '-')
                    )
                  );

                  if (openSubMenu === item.list && anyChildActive) {
                    setOpenSubMenu(null);
                  } else {
                    setOpenSubMenu(item.list);
                  }

                  if (!anyChildActive) {
                    navigate(item.list.toLowerCase().replace(/\s+/g, '-'));
                  }
                }}>
                <img
                  src={
                    isActive(item.list) && item.activeLogo
                      ? item.activeLogo
                      : item.logo
                  }
                  alt={item.list}
                  className={styles.section_main_icon}
                />
                {sidebarOpen && (
                  <span className={styles.section_main_list}>{item.list}</span>
                )}
                {item.children && sidebarOpen && (
                  <img
                    className={styles.section_main_dropdown_icon}
                    src={
                      openSubMenu === item.list
                        ? IC_DOUBLE_DROP_ARROW
                        : IC_DROP_ARROW
                    }
                    alt={item.list}
                  />
                )}
              </div>

              {item.children &&
                item.children.some((child) => child.show) &&
                openSubMenu === item.list &&
                sidebarOpen && (
                  <ul>
                    {item.children.map((child) => {
                      if (!child.show) return null;

                      const childIsActive = isActive(child.path);
                      return (
                        <li key={child.label} title={child.label}>
                          <Link
                            to={child.path.replace(/\s+/g, '-')}
                            className={styles.section_main_child_link}>
                            <span
                              className={styles.section_main_child_indicator}>
                              {childIsActive && (
                                <span
                                  className={styles.section_main_child_dot}
                                />
                              )}
                            </span>
                            <span
                              className={
                                childIsActive
                                  ? styles.section_main_child_lable
                                  : ''
                              }>
                              {child.label}
                            </span>
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                )}
            </li>
          ))}
        {others.some((item) => item.show) && (
          <>
            <p
              className={`pt-3 ${sidebarOpen ? styles.section_main_button : styles.section_main_menu_title_mini}`}>
              Others
            </p>
          </>
        )}

        {others
          .filter((item) => item.show)
          .map((item) => (
            <li key={item.list}>
              <div
                title={item.list}
                className={`
                  ${styles.section_main_link}  
                  ${sidebarOpen ? styles['section_main_link--with-padding'] : styles['section_main_link--centered']} 
                  ${isActive(item.list) ? styles.section_main_link_active : styles.section_main_link_inactive}
                `}
                onClick={() => {
                  const anyChildActive = item.children?.some((child) =>
                    pathname.includes(child.path.replace(/\s+/g, ''))
                  );

                  if (openSubMenu === item.list && anyChildActive) {
                    setOpenSubMenu(null);
                  } else {
                    setOpenSubMenu(item.list);
                  }

                  if (!anyChildActive) {
                    navigate(item.list.replace(/\s+/g, ''));
                  }
                }}>
                <img
                  src={item.logo}
                  alt={item.list}
                  className={styles.section_main_icon}
                />
                {sidebarOpen && (
                  <span className={styles.section_main_list}>{item.list}</span>
                )}
              </div>
            </li>
          ))}
        <li>
          <div
            className={styles.section_main_logout}
            onClick={handleSubmit}
            title='logout'>
            <img src={IC_LOGOUT} alt='logout' />
            {sidebarOpen && <span>Logout</span>}
          </div>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
