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
} from '../utlis/images';

type ManageClientsData = {
  name: string;
  logo: string;
  premium: boolean;
  status: { label: 'Active' | 'Deactivated' | string; value: boolean };
  memberSince: string;
  nextBilling: string;
  platforms: string[];
};

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
