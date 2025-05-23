import React, { createContext, useContext, useState, ReactNode } from 'react';

export interface AddClientData {
  clientName: string;
  email: string;
  phoneNumber: string;
  city: string;
  state: string;
  country: string;
  contractStartDate: string;
  contractDuration: string;
  uatReleaseDate: string;
  productionKeyword: string;
  projectKeyword: string;
  countryCode: string;
  clientLogo: File | null;
  clientLogoURL: string;

  selectedPlatforms: string[];
  mediaProvider: string;
  authenticationProvider: string;

  interfaceLanguages: string[];
  defaultLanguage: string;

  primaryStreamingFeature: string[];
  advertisement: boolean;
  tools: string;
  adDeliveryProvider: string;
  subscription: boolean;
  subscriptionPlatforms: string[];

  analyticsTools: string[];
  playerAnalytics: boolean;
}

interface AddFormContextType {
  formData: AddClientData;
  updateFormData: (data: Partial<AddClientData>) => void;
  saveToFirebase: () => Promise<void>;
  isSaving: boolean;
  error: string | null;
}

const InitialFormData: AddClientData = {
  clientName: '',
  email: '',
  phoneNumber: '',
  city: '',
  state: '',
  country: '',
  contractStartDate: '',
  contractDuration: '',
  uatReleaseDate: '',
  productionKeyword: '',
  projectKeyword: '',
  countryCode: '+1',
  clientLogo: null,
  clientLogoURL: '',

  selectedPlatforms: [],
  mediaProvider: '',
  authenticationProvider: '',

  interfaceLanguages: [],
  defaultLanguage: '',

  primaryStreamingFeature: [],
  advertisement: false,
  tools: '',
  adDeliveryProvider: '',
  subscription: false,
  subscriptionPlatforms: [],

  analyticsTools: [],
  playerAnalytics: false,
};

const AddClientContext = createContext<AddFormContextType | undefined>(
  undefined
);

export const AddClientProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [formData, setFormData] = useState<AddClientData>(InitialFormData);
  const [isSaving, setIsSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const updateFormData = (data: Partial<AddClientData>) => {
    setFormData((prev) => ({ ...prev, ...data }));
  };

  const saveToFirebase = async () => {
    try {
      setIsSaving(true);
      setError(null);

      // let clientData = { ...formData };

      // const { clientLogo, ...dataToSave } = clientData;

      // const clientDocRef = await addDoc(collection(db, 'clients'), {
      //   ...dataToSave,
      //   createdAt: serverTimestamp(),
      // });

      setFormData(InitialFormData);
    } catch (err) {
      console.error('Error saving client data', err);
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <AddClientContext.Provider
      value={{ formData, updateFormData, saveToFirebase, isSaving, error }}>
      {children}
    </AddClientContext.Provider>
  );
};

export const useAddClient = () => {
  const context = useContext(AddClientContext);
  if (context === undefined) {
    throw new Error('useClientForm must be used within a ClientFormProvider');
  }
  return context;
};
