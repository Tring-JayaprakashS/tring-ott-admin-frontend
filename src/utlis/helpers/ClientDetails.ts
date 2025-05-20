import {
  IMG_COUNTRY_CODE,
  IC_ANDROID_WEB,
  IC_APPLE_WEB,
  IC_WEB,
} from '../images';

export const getCountryCodeImage = (code: string) => {
  switch (code) {
    case '+1':
      return IMG_COUNTRY_CODE;
    case '+44':
      return IC_ANDROID_WEB;
    case '+91':
      return IC_APPLE_WEB;
    default:
      return IC_WEB;
  }
};
