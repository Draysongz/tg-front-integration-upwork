import { useState, useEffect } from 'react';
import axios from 'axios';

// Custom Hook for handling user login
export const useUserLogin = (initData: string, referralCode?: string) => {
  const [userData, setUserData] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    if (!initData) return;

    const loginUser = async () => {
      setLoading(true);
      try {
        const response = await axios.post('https://c653-102-88-63-182.ngrok-free.app/api/auth/login', {
          initData,
          referralCode,
        });
        setUserData(response.data);
        setError(null);
      } catch (err) {
        setError('Login failed');
      } finally {
        setLoading(false);
      }
    };

    loginUser();
  }, [initData, referralCode]);

  return { userData, error, loading };
};

// Custom Hook for fetching user streak data
export const useUserStreak = (userId: string) => {
  const [streakData, setStreakData] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchStreakData = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`/api/streaks/${userId}`);
        setStreakData(response.data);
        setError(null);
      } catch (err) {
        setError('Failed to fetch streak data');
      } finally {
        setLoading(false);
      }
    };

    if (userId) {
      fetchStreakData();
    }
  }, [userId]);

  return { streakData, loading, error };
};
