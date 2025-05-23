import React, { createContext, useContext, useState, ReactNode } from 'react';
import { db, storage } from '../firebase/firebase';
import { serverTimestamp, doc, setDoc, getDoc } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';

export interface AddClientData {
  id?: string;
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
  configName: string;
  configId: string;
  clientId: string;
  merchantId: string;
  password: string;
  grantType: string;

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
  saveToFirebase: () => Promise<string>;
  fetchClientById: (id: string) => Promise<void>;
  isSaving: boolean;
  isLoading: boolean;
  error: string | null;
  uploadLogo: (file: File) => Promise<string>;
  clearFormData: () => void;
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
  configName: '',
  configId: '',
  clientId: '',
  merchantId: '',
  password: '',
  grantType: '',
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
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const updateFormData = (data: Partial<AddClientData>) => {
    setFormData((prev) => ({ ...prev, ...data }));
  };

  const clearFormData = () => {
    setFormData(InitialFormData);
    localStorage.removeItem('addClientFormData');
  };

  const uploadLogo = async (file: File): Promise<string> => {
    try {
      const timestamp = Date.now();
      const fileName = `client-logos/${timestamp}-${file.name}`;
      const storageRef = ref(storage, fileName);

      await uploadBytes(storageRef, file);
      const downloadURL = await getDownloadURL(storageRef);

      updateFormData({
        clientLogo: file,
        clientLogoURL: downloadURL,
      });

      return downloadURL;
    } catch (error) {
      console.error('Error uploading logo:', error);
      throw error;
    }
  };

  const fetchClientById = async (clientId: string) => {
    try {
      setIsLoading(true);
      setError(null);

      const docRef = doc(db, 'clients', clientId);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        const clientData = docSnap.data() as Omit<
          AddClientData,
          'id' | 'clientLogo'
        >;
        setFormData({
          ...clientData,
          id: docSnap.id,
          clientLogo: null,
        });
      } else {
        setError('Client not found');
        console.error('No such document!');
      }
    } catch (err) {
      console.error('Error fetching client data:', err);
      setError('Failed to fetch client data');
    } finally {
      setIsLoading(false);
    }
  };

  const saveToFirebase = async () => {
    try {
      setIsSaving(true);
      setError(null);

      let clientData = { ...formData };

      if (clientData.clientLogo && !clientData.clientLogoURL) {
        try {
          const logoURL = await uploadLogo(clientData.clientLogo);
          clientData.clientLogoURL = logoURL;
        } catch (logoError) {
          console.error('Error uploading logo:', logoError);
        }
      }

      const { clientLogo, ...dataToSave } = clientData;
      const correctClientName = clientData.clientName
        .trim()
        .replace(/[^a-zA-Z0-9\s-_]/g, '')
        .replace(/\s+/g, '_');

      const clientDocRef = doc(db, 'clients', correctClientName);
      const existingDoc = await getDoc(clientDocRef);
      if (existingDoc.exists()) {
        throw new Error(
          `Client with name "${clientData.clientName}" already exists`
        );
      }
      await setDoc(
        clientDocRef,
        {
          ...dataToSave,
          createdAt: serverTimestamp(),
          updatedAt: serverTimestamp(),
        },
        { merge: false }
      );

      updateFormData({ id: correctClientName });
      return correctClientName;
    } catch (err) {
      console.error('Error saving client data', err);
      setError('Failed to save client data');
      throw err;
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <AddClientContext.Provider
      value={{
        formData,
        updateFormData,
        saveToFirebase,
        fetchClientById,
        isSaving,
        isLoading,
        error,
        uploadLogo,
        clearFormData,
      }}>
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
