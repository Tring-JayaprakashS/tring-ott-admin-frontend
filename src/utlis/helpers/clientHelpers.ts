import { fetchAllClients } from '../../firebase/manageClients/getClientsDetails';

import { deleteClient } from '../../firebase/manageClients/deleteClient';
import {
  ClientFilterFormData,
  ManageClientsData,
} from '../types/manageClientsType';
import { transformClientData } from './transformClientData';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { updateClientStatus } from '../../firebase/manageClients/updateClientStatus';

export const clientHelpers = () => {
  const [clientData, setClientData] = useState<ManageClientsData[]>([]);
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [isDeletePopupVisible, setIsDeletePopupVisible] = useState(false);
  const [activeDropdownIndex, setActiveDropdownIndex] = useState<number | null>(
    null
  );
  const [deleteIndex, setDeleteIndex] = useState<string | null>(null);

  const [filteredClients, setFilteredClients] = useState<ManageClientsData[]>(
    []
  );

  const [formData, setFormData] = useState<ClientFilterFormData>({
    subscription: '',
    status: '',
    platforms: [],
    memberSinceFrom: '',
    memberSinceTo: '',
    billingDateFrom: '',
    billingDateTo: '',
  });

  const navigator = useNavigate();
  const handleDropdownToggle = (index: number) => {
    setActiveDropdownIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const togglePopup = () => {
    setIsPopupVisible(!isPopupVisible);
  };

  const handleToggleClientStatus = async (
    index: number,
    clientId: string,
    status: 'Active' | 'Deactivate'
  ) => {
    try {
      await updateClientStatus(clientId, status);

      setClientData((prevData) =>
        prevData.map((data, i) =>
          i === index
            ? {
                ...data,
                status: {
                  label: status,
                  value: status === 'Active',
                },
              }
            : data
        )
      );

      setActiveDropdownIndex(null);
    } catch (error) {
      console.error(`Failed to ${status.toLowerCase()} client:`, error);
    }
  };

  const handleDeleteClient = (id: string) => {
    setActiveDropdownIndex(null);
    setDeleteIndex(id);
    setIsDeletePopupVisible(true);
  };

  const handleDeletePermanently = async (clientId: string) => {
    try {
      await deleteClient(clientId);

      const updatedData = clientData.filter((client) => client.id !== clientId);
      setClientData(updatedData);

      setIsDeletePopupVisible(false);
      setDeleteIndex(null);
    } catch (error) {
      console.error('Failed to delete client:', error);
    }
  };

  const filterClients = () => {
    const {
      subscription,
      status,
      platforms,
      memberSinceFrom,
      memberSinceTo,
      billingDateFrom,
      billingDateTo,
    } = formData;

    const result = clientData.filter((client) => {
      if (subscription) {
        const isPremium = subscription === 'Premium';
        if (client.premium !== isPremium) return false;
      }

      if (status && client.status.label.toLowerCase() !== status.toLowerCase())
        return false;

      if (
        platforms.length > 0 &&
        !platforms.some((selectedId) =>
          client.platforms.some((p) => p.id === selectedId)
        )
      ) {
        return false;
      }

      if (
        memberSinceFrom &&
        new Date(client.memberSince) < new Date(memberSinceFrom)
      )
        return false;
      if (
        memberSinceTo &&
        new Date(client.memberSince) > new Date(memberSinceTo)
      )
        return false;

      if (
        billingDateFrom &&
        new Date(client.nextBilling) < new Date(billingDateFrom)
      ) {
        return false;
      }
      if (
        billingDateTo &&
        new Date(client.nextBilling) > new Date(billingDateTo)
      )
        return false;

      return true;
    });

    setFilteredClients(result);
  };

  useEffect(() => {
    filterClients();
  }, [formData, clientData]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadClients = async () => {
      try {
        const rawClients = await fetchAllClients();
        const transformed = rawClients.map(transformClientData);
        setClientData(transformed);
        setFilteredClients(transformed);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    loadClients();
  }, []);

  return {
    togglePopup,
    navigator,
    filteredClients,
    handleDropdownToggle,
    activeDropdownIndex,
    handleToggleClientStatus,
    handleDeleteClient,
    setActiveDropdownIndex,
    isPopupVisible,
    setFormData,
    formData,
    isDeletePopupVisible,
    setIsDeletePopupVisible,
    deleteIndex,
    handleDeletePermanently,
    loading,
  };
};
