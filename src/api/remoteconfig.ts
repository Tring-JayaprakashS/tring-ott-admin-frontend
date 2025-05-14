import axios from 'axios';
import { getAuth } from 'firebase/auth';

const BASE_URL =
  import.meta.env.VITE_TRING_PLAY_BASE_URL || 'http://localhost:5001/api';

export const updateRemoteConfig = async (
  themeColors: Record<string, string>
) => {
  try {
    const auth = getAuth();
    const user = auth.currentUser;

    if (!user) throw new Error('User not authenticated');

    const token = await user.getIdToken();

    const payload = {
      theme_colors: themeColors,
    };

    const response = await axios.post(
      `${BASE_URL}/remote-config/theme`,
      payload,
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      }
    );

    return response.data;
  } catch (error: any) {
    console.error('Error updating remote config theme:', error);
    if (error.response) {
      console.error('Response data:', error.response.data);
      console.error('Response status:', error.response.status);
    }
    throw error;
  }
};

export const fetchRemoteConfig = async () => {
  try {
    const auth = getAuth();
    const user = auth.currentUser;

    if (!user) throw new Error('User not authenticated');

    const token = await user.getIdToken();

    const response = await axios.get(`${BASE_URL}/remote-config`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response.data;
  } catch (error: any) {
    console.error('Error fetching remote config:', error);
    if (error.response) {
      console.error('Response data:', error.response.data);
      console.error('Response status:', error.response.status);
    }
    throw error;
  }
};
