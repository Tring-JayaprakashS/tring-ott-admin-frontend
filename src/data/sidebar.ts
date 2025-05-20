import {
  IC_DASHBOARD,
  IC_APP_CONFIG,
  IC_SETTINGS,
  IC_THREE_USERS,
  IC_IMAGE_ICON,
  IC_PLATFROM_ICON,
  IC_PLAYLIST_ICON,
  IC_RELEASE_NOTES_ICON,
  IC_HELP_ICON,
  IC_DASHBOARD_ACTIVE_ICON,
  IC_THREE_USERS_ACTIVE,
  IC_PLATFROM_ACTIVE_ICON,
  IC_APP_CONFIG_ACTIVE,
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
  { list: 'MenuList', logo: IC_SETTINGS, show: true },
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

  {
    list: 'Manage Users',
    logo: IC_THREE_USERS,

    activeLogo: IC_THREE_USERS_ACTIVE,
    show: false,
  },
  { list: 'Media Library', logo: IC_IMAGE_ICON, show: false },
  {
    list: 'Platforms',
    logo: IC_PLATFROM_ICON,

    activeLogo: IC_PLATFROM_ACTIVE_ICON,
    show: false,
  },
  { list: 'Playlists', logo: IC_PLAYLIST_ICON, show: false },
  {
    list: 'App Configuration',
    logo: IC_APP_CONFIG,
    activeLogo: IC_APP_CONFIG_ACTIVE,
    show: false,
    children: [
      { label: 'Branding', path: 'AppConfiguration/Branding', show: true },
      { label: 'Menu Items', path: 'AppConfiguration/MenuItems', show: true },
      {
        label: 'Page & Features',
        path: 'AppConfiguration/PageFeatures',
        show: false,
      },
    ],
  },
  { list: 'Release Notes', logo: IC_RELEASE_NOTES_ICON, show: false },
];

export const others: SidebarItem[] = [
  {
    list: 'Help & Support',
    logo: IC_HELP_ICON,
    show: true,
  },
  { list: 'Settings', logo: IC_SETTINGS, show: true },
];
