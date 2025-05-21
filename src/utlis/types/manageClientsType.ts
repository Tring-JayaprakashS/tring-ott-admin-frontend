import { string } from 'zod';

export type Option = {
  id: string;
  name: string;
};

export type AccessDropDownProps = {
  label: string;
  selectedValue: string;
  placeholder: string;
  options: Option[];
  onSelect: (option: Option) => void;
};

export type LinkItem = {
  id: number;
  label: string;
  icon: string;
  url: string;
};

export type ClientDropdownProps = {
  onDeactivate: () => void;
  onDelete: () => void;
  onActivate: () => void;
  clickOutSide: React.Dispatch<React.SetStateAction<number | null>>;
  clientData: ManageClientsData;
};

export type PlatformCardProps = {
  name: string;
  logo?: string;
  premium: boolean;
  status: {
    label: 'Active' | 'Inactive' | string;
    value: boolean;
  };
  platforms: platformsOption[];
  memberSince: string;
  nextBilling: string;
  onDropdownToggle: () => void;
};

export type ManageUsersData = {
  icon: string;
  name: string;
  subscription: string;
  status: string;
  email: string;
  assignedOn: string;
};

export type ClientFilterFormData = {
  subscription: string;
  status: string;
  platforms: string[];
  memberSinceFrom: string;
  memberSinceTo: string;
  billingDateFrom: string;
  billingDateTo: string;
};

export type platformsOption = {
  id: string;
  image: string;
  alt: string;
};

export type ManageClientsData = {
  name: string;
  logo: string;
  premium: boolean;
  status: { label: 'Active' | 'Deactivated' | string; value: boolean };
  memberSince: string;
  nextBilling: string;
  platforms: platformsOption[];
};

export type DeletePopupProps = {
  isVisible: boolean;
  onClose: () => void;
  deletePermanent: () => void;
  icon: string;
};
