import {
  IC_ANDRIOD_TV,
  IC_LG_TV,
  IC_VIZIO_TV,
  IMG_VIVA_LOGO,
  IC_APPLE_TV,
  IC_ROKU_TV,
  IMG_LIZSIT_LOGO,
  IMG_MINNO_LOGO,
  IMG_CHECK_LOGO,
  IMG_ESTANTE_LOGO,
  IMG_KSL_LOGO,
  IC_DEACTIVATE_ICON,
  IC_CIRCLE_ICON,
  IC_DELETE_ICON,
  IC_PREVIEW_ICON,
  IC_SAMSUNG,
  IC_WEB,
  IC_APPLE_WEB,
  IC_ANDROID_WEB,
} from '../utlis/images';
import {
  LinkItem,
  ManageClientsData,
  platformsOption,
} from '../utlis/types/manageClientsType';

const Clients: ManageClientsData[] = [
  {
    name: 'Viva Tv',
    logo: IMG_VIVA_LOGO,
    premium: true,
    status: { label: 'Active', value: true },
    memberSince: '01/15/2020',
    nextBilling: '01/15/2024',
    platforms: [
      {
        id: 'android_tv',
        image: IC_ANDRIOD_TV,
        alt: 'Android TV logo',
      },
      {
        id: 'samsung',
        image: IC_SAMSUNG,
        alt: 'Samsung logo',
      },
      {
        id: 'lg_tv',
        image: IC_LG_TV,
        alt: 'LG TV logo',
      },
      {
        id: 'vizio_tv',
        image: IC_VIZIO_TV,
        alt: 'Vizio TV logo',
      },
      {
        id: 'web',
        image: IC_WEB,
        alt: 'Web logo',
      },
      {
        id: 'apple_web',
        image: IC_APPLE_WEB,
        alt: 'Apple Web logo',
      },
      {
        id: 'android_web',
        image: IC_ANDROID_WEB,
        alt: 'Android Web logo',
      },
    ],
  },
  {
    name: 'Izsit',
    logo: IMG_LIZSIT_LOGO,
    premium: true,
    status: { label: 'Active', value: true },
    memberSince: '06/21/2022',
    nextBilling: '06/21/2024',
    platforms: [
      {
        id: 'apple_tv',
        image: IC_APPLE_TV,
        alt: 'Apple TV logo',
      },
      {
        id: 'roku_tv',
        image: IC_ROKU_TV,
        alt: 'Roku TV logo',
      },
      {
        id: 'lg_tv',
        image: IC_LG_TV,
        alt: 'LG TV logo',
      },
      {
        id: 'vizio_tv',
        image: IC_VIZIO_TV,
        alt: 'Vizio TV logo',
      },
      {
        id: 'web',
        image: IC_WEB,
        alt: 'Web logo',
      },
      {
        id: 'apple_web',
        image: IC_APPLE_WEB,
        alt: 'Apple Web logo',
      },
      {
        id: 'android_web',
        image: IC_ANDROID_WEB,
        alt: 'Android Web logo',
      },
    ],
  },
  {
    name: 'Minno',
    logo: IMG_MINNO_LOGO,
    premium: false,
    status: { label: 'Active', value: true },
    memberSince: '11/03/2023',
    nextBilling: '11/03/2024',
    platforms: [
      {
        id: 'apple_tv',
        image: IC_APPLE_TV,
        alt: 'Apple TV logo',
      },
      {
        id: 'roku_tv',
        image: IC_ROKU_TV,
        alt: 'Roku TV logo',
      },
      {
        id: 'android_tv',
        image: IC_ANDRIOD_TV,
        alt: 'Android TV logo',
      },
      {
        id: 'samsung',
        image: IC_SAMSUNG,
        alt: 'Samsung logo',
      },
      {
        id: 'web',
        image: IC_WEB,
        alt: 'Web logo',
      },
      {
        id: 'apple_web',
        image: IC_APPLE_WEB,
        alt: 'Apple Web logo',
      },
      {
        id: 'android_web',
        image: IC_ANDROID_WEB,
        alt: 'Android Web logo',
      },
    ],
  },
  {
    name: 'Chek+',
    logo: IMG_CHECK_LOGO,
    premium: true,
    status: { label: 'Deactivated', value: false },
    memberSince: '02/10/2024',
    nextBilling: '07/10/2024',
    platforms: [
      {
        id: 'apple_tv',
        image: IC_APPLE_TV,
        alt: 'Apple TV logo',
      },
      {
        id: 'roku_tv',
        image: IC_ROKU_TV,
        alt: 'Roku TV logo',
      },
      {
        id: 'android_tv',
        image: IC_ANDRIOD_TV,
        alt: 'Android TV logo',
      },
      {
        id: 'samsung',
        image: IC_SAMSUNG,
        alt: 'Samsung logo',
      },
      {
        id: 'lg_tv',
        image: IC_LG_TV,
        alt: 'LG TV logo',
      },
      {
        id: 'vizio_tv',
        image: IC_VIZIO_TV,
        alt: 'Vizio TV logo',
      },
      {
        id: 'android_web',
        image: IC_ANDROID_WEB,
        alt: 'Android Web logo',
      },
    ],
  },
  {
    name: 'Estante',
    logo: IMG_ESTANTE_LOGO,
    premium: false,
    status: { label: 'Active', value: true },
    memberSince: '05/01/2021',
    nextBilling: '05/01/2025',
    platforms: [
      {
        id: 'apple_tv',
        image: IC_APPLE_TV,
        alt: 'Apple TV logo',
      },
      {
        id: 'roku_tv',
        image: IC_ROKU_TV,
        alt: 'Roku TV logo',
      },
      {
        id: 'android_tv',
        image: IC_ANDRIOD_TV,
        alt: 'Android TV logo',
      },
      {
        id: 'samsung',
        image: IC_SAMSUNG,
        alt: 'Samsung logo',
      },
      {
        id: 'lg_tv',
        image: IC_LG_TV,
        alt: 'LG TV logo',
      },
      {
        id: 'vizio_tv',
        image: IC_VIZIO_TV,
        alt: 'Vizio TV logo',
      },
      {
        id: 'web',
        image: IC_WEB,
        alt: 'Web logo',
      },
    ],
  },
  {
    name: 'KSL+',
    logo: IMG_KSL_LOGO,
    premium: true,
    status: { label: 'Deactivated', value: false },
    memberSince: '12/31/2022',
    nextBilling: '12/31/2023',
    platforms: [
      {
        id: 'apple_tv',
        image: IC_APPLE_TV,
        alt: 'Apple TV logo',
      },
      {
        id: 'roku_tv',
        image: IC_ROKU_TV,
        alt: 'Roku TV logo',
      },
      {
        id: 'android_tv',
        image: IC_ANDRIOD_TV,
        alt: 'Android TV logo',
      },
      {
        id: 'samsung',
        image: IC_SAMSUNG,
        alt: 'Samsung logo',
      },
      {
        id: 'lg_tv',
        image: IC_LG_TV,
        alt: 'LG TV logo',
      },
      {
        id: 'apple_web',
        image: IC_APPLE_WEB,
        alt: 'Apple Web logo',
      },
      {
        id: 'android_web',
        image: IC_ANDROID_WEB,
        alt: 'Android Web logo',
      },
    ],
  },
];

export { Clients };

export const accessOptions = [
  { id: 'premium', name: 'Premium' },
  { id: 'not-premium', name: 'Not Premium' },
];

export const statusOptions = [
  { id: 'active', name: 'Active' },
  { id: 'deactivated', name: 'Deactivated' },
];

export const actionItemsData = [
  { id: 4, label: 'Deactivate', icon: IC_DEACTIVATE_ICON },
  { id: 4, label: 'Activate', icon: IC_CIRCLE_ICON },
  { id: 5, label: 'Delete', icon: IC_DELETE_ICON },
];

export const linkItems: LinkItem[] = [
  { id: 1, label: 'Web', icon: IC_PREVIEW_ICON, url: 'https://web.com' },
  {
    id: 2,
    label: 'Mobile',
    icon: IC_PREVIEW_ICON,
    url: 'https://mobile.com',
  },
  { id: 3, label: 'Tv', icon: IC_PREVIEW_ICON, url: 'https://tv.com' },
];

export const filterPlatfrom: platformsOption[] = [
  {
    id: 'apple_tv',
    image: IC_APPLE_TV,
    alt: 'Apple TV logo',
  },
  {
    id: 'roku_tv',
    image: IC_ROKU_TV,
    alt: 'Roku TV logo',
  },
  {
    id: 'android_tv',
    image: IC_ANDRIOD_TV,
    alt: 'Android TV logo',
  },
  {
    id: 'samsung',
    image: IC_SAMSUNG,
    alt: 'Samsung logo',
  },
  {
    id: 'lg_tv',
    image: IC_LG_TV,
    alt: 'LG TV logo',
  },
  {
    id: 'vizio_tv',
    image: IC_VIZIO_TV,
    alt: 'Vizio TV logo',
  },
  {
    id: 'web',
    image: IC_WEB,
    alt: 'Web logo',
  },
  {
    id: 'apple_web',
    image: IC_APPLE_WEB,
    alt: 'Apple Web logo',
  },
  {
    id: 'android_web',
    image: IC_ANDROID_WEB,
    alt: 'Android Web logo',
  },
];
