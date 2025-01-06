import { createClient } from '@supabase/supabase-js';
import type { Database } from '../types/supabase';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables. Please click "Connect to Supabase" button to set up the connection.');
}

export const supabase = createClient<Database>(supabaseUrl, supabaseAnonKey, {
  auth: {
    persistSession: true,
    autoRefreshToken: true
  }
});

// Helper to check connection
export async function checkSupabaseConnection() {
  try {
    const { data, error } = await supabase.from('properties').select('count');
    if (error) throw error;
    return true;
  } catch (err) {
    console.error('Supabase connection error:', err);
    return false;
  }
}