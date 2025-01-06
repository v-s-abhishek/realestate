import { supabase } from '../supabase';
import type { Property } from '../../types/property';

export async function fetchProperties() {
  try {
    const { data, error } = await supabase
      .from('properties')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) throw error;
    return data || [];
  } catch (error) {
    console.error('Error fetching properties:', error);
    throw new Error('Failed to fetch properties. Please ensure you are connected to Supabase.');
  }
}

export async function addProperty(property: Omit<Property, 'id' | 'created_at'>) {
  try {
    const { data, error } = await supabase
      .from('properties')
      .insert([property])
      .select()
      .single();

    if (error) throw error;
    return data;
  } catch (error) {
    console.error('Error adding property:', error);
    throw new Error('Failed to add property. Please try again.');
  }
}

export async function updateProperty(id: string, updates: Partial<Property>) {
  try {
    const { data, error } = await supabase
      .from('properties')
      .update(updates)
      .eq('id', id)
      .select()
      .single();

    if (error) throw error;
    return data;
  } catch (error) {
    console.error('Error updating property:', error);
    throw new Error('Failed to update property. Please try again.');
  }
}

export async function deleteProperty(id: string) {
  try {
    const { error } = await supabase
      .from('properties')
      .delete()
      .eq('id', id);

    if (error) throw error;
  } catch (error) {
    console.error('Error deleting property:', error);
    throw new Error('Failed to delete property. Please try again.');
  }
}