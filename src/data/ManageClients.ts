import {
  IC_ANDRIOD_TV,
  IC_SAMSUNG_TV,
  IC_LG_TV,
  IC_VIZIO_TV,
  IC_WEBSITE,
  IC_IOS,
  IC_ANDRIOD,
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
} from '../utlis/images';
import { LinkItem, ManageClientsData } from '../utlis/types/manageClientsType';

const Clients: ManageClientsData[] = [
  {
    name: 'Viva Tv',
    logo: IMG_VIVA_LOGO,
    premium: true,
    status: { label: 'Active', value: true },
    memberSince: '06/21/2022',
    nextBilling: '06/21/2022',
    platforms: [
      IC_APPLE_TV,
      IC_ROKU_TV,
      IC_ANDRIOD_TV,
      IC_SAMSUNG_TV,
      IC_LG_TV,
      IC_VIZIO_TV,
      IC_WEBSITE,
      IC_IOS,
      IC_ANDRIOD,
    ],
  },
  {
    name: 'Izsit',
    logo: IMG_LIZSIT_LOGO,
    premium: true,
    status: { label: 'Active', value: true },
    memberSince: '06/21/2022',
    nextBilling: '06/21/2022',
    platforms: [
      IC_APPLE_TV,
      IC_ROKU_TV,
      IC_ANDRIOD_TV,
      IC_SAMSUNG_TV,
      IC_LG_TV,
      IC_VIZIO_TV,
      IC_WEBSITE,
      IC_IOS,
      IC_ANDRIOD,
    ],
  },
  {
    name: 'Minno',
    logo: IMG_MINNO_LOGO,
    premium: false,
    status: { label: 'Active', value: true },
    memberSince: '06/21/2022',
    nextBilling: '06/21/2022',
    platforms: [
      IC_APPLE_TV,
      IC_ROKU_TV,
      IC_ANDRIOD_TV,
      IC_SAMSUNG_TV,
      IC_LG_TV,
      IC_VIZIO_TV,
      IC_WEBSITE,
      IC_IOS,
      IC_ANDRIOD,
    ],
  },
  {
    name: 'Chek+',
    logo: IMG_CHECK_LOGO,
    premium: true,
    status: { label: 'Deactivated', value: false },
    memberSince: '06/21/2022',
    nextBilling: '06/21/2022',
    platforms: [
      IC_APPLE_TV,
      IC_ROKU_TV,
      IC_ANDRIOD_TV,
      IC_SAMSUNG_TV,
      IC_LG_TV,
      IC_VIZIO_TV,
      IC_WEBSITE,
      IC_IOS,
      IC_ANDRIOD,
    ],
  },
  {
    name: 'Estante',
    logo: IMG_ESTANTE_LOGO,
    premium: false,
    status: { label: 'Active', value: true },
    memberSince: '06/21/2022',
    nextBilling: '06/21/2022',
    platforms: [
      IC_APPLE_TV,
      IC_ROKU_TV,
      IC_ANDRIOD_TV,
      IC_SAMSUNG_TV,
      IC_LG_TV,
      IC_VIZIO_TV,
      IC_WEBSITE,
      IC_IOS,
      IC_ANDRIOD,
    ],
  },
  {
    name: 'KSL+',
    logo: IMG_KSL_LOGO,
    premium: true,
    status: { label: 'Deactivated', value: false },
    memberSince: '06/21/2022',
    nextBilling: '06/21/2022',
    platforms: [
      IC_APPLE_TV,
      IC_ROKU_TV,
      IC_ANDRIOD_TV,
      IC_SAMSUNG_TV,
      IC_LG_TV,
      IC_VIZIO_TV,
      IC_WEBSITE,
      IC_IOS,
      IC_ANDRIOD,
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
