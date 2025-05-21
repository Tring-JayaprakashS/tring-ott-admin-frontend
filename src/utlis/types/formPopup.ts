import { ClientFilterFormData } from './manageClientsType';

export type PopupProps = {
  children: React.ReactNode;
  isVisible: boolean;
  onClose: () => void;
  title?: string;
  formData: ClientFilterFormData;
  save: (e: React.FormEvent) => void;
  discard: () => void;
};
export type FilterSectionProps = {
  isVisible: boolean;
  onClose: () => void;
  title?: string;
  setFormData: React.Dispatch<React.SetStateAction<ClientFilterFormData>>;
  formData: ClientFilterFormData;
};

export type InformationProps = {
  children?: React.ReactNode;
  onClose: () => void;
  title?: string;
  isVisible: boolean;
};
