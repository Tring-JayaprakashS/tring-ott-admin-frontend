import {
  IC_APPLE_TV,
  IC_ROKU_TV,
  IC_ANDRIOD_TV,
  IC_SAMSUNG,
  IC_LG_TV,
  IC_VIZIO_TV,
  IC_WEB,
  IC_APPLE_WEB,
  IC_ANDROID_WEB,
} from '../utlis/images';

export const TV_PLATFORMS = [
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
];

export const WEB_MOBILE_PLATFORMS = [
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

export const PRIMARY_STREAMING_FEATURE = [
  {
    id: 'Onboarding_Screen',
    text: 'Onboarding Screen',
    width: '177px',
  },
  {
    id: 'Guest_Mode',
    text: 'Guest Mode',
    width: '',
  },
  {
    id: 'Guest_streaming',
    text: 'Guest streaming',
    width: '158px',
  },
  {
    id: 'Authentication',
    text: 'Authentication',
    width: '',
  },
  {
    id: 'Social_Login',
    text: 'Social Login',
    width: '',
  },
  {
    id: 'Social_Login_Provider',
    text: 'Social Login Provider',
    width: '191px',
  },
  {
    id: 'Search',
    text: 'Search',
    width: '90px',
  },
  {
    id: 'Favourite',
    text: 'Favourite',
    width: '105px',
  },
  {
    id: 'Continue_Watching',
    text: 'Continue Watching',
    width: '176px',
  },

  {
    id: 'Recommend_Content_Enabled',
    text: 'Recommend Content Enabled',
    width: '270px',
  },
  {
    id: 'Download',
    text: 'Download',
    width: '111px',
  },
];

export const ANALYTICS_TRACKING = [
  {
    id: 'Firebase',
    text: 'Firebase',
  },
  {
    id: 'Adobe',
    text: 'Adobe',
  },
  {
    id: 'AppsFlyer',
    text: 'AppsFlyer',
  },
  {
    id: 'Google',
    text: 'Google',
  },
];

export const durationOptions = [
  { value: '3months', label: '3 Months' },
  { value: '6months', label: '6 Months' },
  { value: '1year', label: '1 Year' },
  { value: '2years', label: '2 Years' },
];

export const countryOptions = [
  { value: 'us', label: 'United States' },
  { value: 'ca', label: 'Canada' },
  { value: 'uk', label: 'United Kingdom' },
  { value: 'au', label: 'Australia' },
];

export const AuthenticationProvideroptions = [
  { value: 'Cn', label: 'Cognito' },
  { value: 'Ip', label: 'In Player' },
  { value: 'CB', label: 'Custom Backend' },
];

export const mediaPlayeroptions = [
  { value: 'wh', label: 'Whatsapp' },
  { value: 'fa', label: 'FaceBook' },
  { value: 'Ne', label: 'Netflix' },
];

export const platformsoptions = [
  { id: 'appletv', name: 'Apple TV' },
  { id: 'roku', name: 'Roku' },
  { id: 'androidtv', name: 'Android TV' },
  { id: 'samsung', name: 'Samsung' },
  { id: 'lg', name: 'LG' },
  { id: 'vizio', name: 'Vizio' },
  { id: 'web', name: 'Web' },
  { id: 'ios', name: 'iOS Mobile' },
  { id: 'android', name: 'Android Mobile' },
];

export const Languageoptions = [
  { id: 'english', name: 'English' },
  {
    id: 'tamil',
    name: 'Tamil',
  },
  {
    id: 'hindi',
    name: 'Hindi',
  },
  {
    id: 'Malayalam',
    name: 'Malayalam',
  },
  {
    id: 'telugu',
    name: 'Telugu',
  },
  {
    id: 'kannadam',
    name: 'Kannada',
  },
];
