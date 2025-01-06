import { useState, useEffect } from 'react';
import { supabase } from '../supabase';

export function useSupabaseStatus() {
  const [isConnected, setIsConnected] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    checkConnection();
  }, []);

  async function checkConnection() {
    try {
      const { data, error } = await supabase.from('properties').select('count');
      if (error) throw error;
      setIsConnected(true);
      setError(null);
    } catch (err) {
      setIsConnected(false);
      setError('Unable to connect to database. Please check your connection.');
    }
  }

  return { isConnected, error, retry: checkConnection };
}