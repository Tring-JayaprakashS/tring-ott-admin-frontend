import {
  IC_DASHBOARD,
  IC_SETTINGS,
  IC_THREE_USERS,
  IC_RELEASE_NOTES_ICON,
  IC_HELP_ICON,
  IC_DASHBOARD_ACTIVE_ICON,
  IC_THREE_USERS_ACTIVE,
  IC_SUBSCRIPITONS,
  IC_CLIENT_LIST,
} from '../utlis/images';

export interface SidebarItem {
  list: string;
  logo: string;
  activeLogo?: string;
  show: boolean;
  children?: {
    label: string;
    path: string;
    show: boolean;
  }[];
}

export const menu: SidebarItem[] = [
  {
    list: 'Dashboard',
    logo: IC_DASHBOARD,
    activeLogo: IC_DASHBOARD_ACTIVE_ICON,
    show: true,
  },
  {
    list: 'Manage Clients',
    logo: IC_THREE_USERS,

    activeLogo: IC_THREE_USERS_ACTIVE,
    show: true,
  },

  {
    list: 'Subscriptions',
    logo: IC_SUBSCRIPITONS,

    activeLogo: IC_SUBSCRIPITONS,
    show: true,
  },
  {
    list: 'Client List',
    logo: IC_CLIENT_LIST,

    activeLogo: IC_CLIENT_LIST,
    show: true,
  },
  {
    list: 'Audit Logs',
    logo: IC_RELEASE_NOTES_ICON,

    activeLogo: IC_RELEASE_NOTES_ICON,
    show: true,
  },
];

export const others: SidebarItem[] = [
  {
    list: 'Help & Support',
    logo: IC_HELP_ICON,
    show: true,
  },
  { list: 'Settings', logo: IC_SETTINGS, show: true },
];
