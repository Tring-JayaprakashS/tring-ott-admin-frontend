import {
  IC_ANDRIOD_TV,
  IC_ANDROID_WEB,
  IC_APPLE_TV,
  IC_APPLE_WEB,
  IC_LG_TV,
  IC_ROKU_TV,
  IC_SAMSUNG,
  IC_VIZIO_TV,
  IC_WEB,
} from '../images';

const PLATFORM_ICON_MAP: Record<string, { image: string; alt: string }> = {
  apple_tv: { image: IC_APPLE_TV, alt: 'Apple TV logo' },
  roku_tv: { image: IC_ROKU_TV, alt: 'Roku TV logo' },
  android_tv: { image: IC_ANDRIOD_TV, alt: 'Android TV logo' },
  samsung: { image: IC_SAMSUNG, alt: 'Samsung logo' },
  lg_tv: { image: IC_LG_TV, alt: 'LG TV logo' },
  vizio_tv: { image: IC_VIZIO_TV, alt: 'Vizio TV logo' },
  web: { image: IC_WEB, alt: 'Web logo' },
  apple_web: { image: IC_APPLE_WEB, alt: 'Apple Web logo' },
  android_web: { image: IC_ANDROID_WEB, alt: 'Android Web logo' },
};

export interface TransformedClient {
  id: string;
  name: string;
  logo: string;
  premium: boolean;
  status: { label: string; value: boolean };
  memberSince: string;
  nextBilling: string;
  platforms: { id: string; image: string; alt: string }[];
}

export const transformClientData = (rawClient: any): TransformedClient => {
  const formatDateWithLeadingZeros = (dateStr: string) => {
    const d = new Date(dateStr);
    if (isNaN(d.getTime())) return 'N/A';

    const mm = String(d.getMonth() + 1).padStart(2, '0');
    const dd = String(d.getDate()).padStart(2, '0');
    const yyyy = d.getFullYear();

    return `${mm}/${dd}/${yyyy}`;
  };

  const memberSince = formatDateWithLeadingZeros(
    rawClient.contractStartDate?.trim() || ''
  );
  const nextBilling = formatDateWithLeadingZeros(
    rawClient.productionKeyword?.trim() || ''
  );

  const platforms =
    rawClient.selectedPlatforms?.map((platformId: string) => ({
      id: platformId,
      image: PLATFORM_ICON_MAP[platformId]?.image || '',
      alt: PLATFORM_ICON_MAP[platformId]?.alt || '',
    })) || [];

  return {
    id: rawClient.id || '',
    name: rawClient.clientName || 'Unnamed Client',
    logo: rawClient.clientLogoURL || '',
    premium: rawClient.subscription || false,
    status: {
      label: rawClient.state === 'Active' ? 'Active' : 'Deactivated',
      value: rawClient.state === 'Active' ? true : false,
    },
    memberSince,
    nextBilling,
    platforms,
  };
};
