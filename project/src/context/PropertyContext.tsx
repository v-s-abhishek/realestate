import React, { createContext, useContext, useState, useEffect } from 'react';
import type { Property } from '../types/property';
import { useSupabaseStatus } from '../lib/hooks/useSupabaseStatus';
import * as propertyApi from '../lib/api/properties';

interface PropertyContextType {
  properties: Property[];
  loading: boolean;
  error: string | null;
  addProperty: (property: Omit<Property, 'id' | 'created_at'>) => Promise<void>;
  deleteProperty: (id: string) => Promise<void>;
  updateProperty: (id: string, property: Partial<Property>) => Promise<void>;
}

const PropertyContext = createContext<PropertyContextType | undefined>(undefined);

export function PropertyProvider({ children }: { children: React.ReactNode }) {
  const [properties, setProperties] = useState<Property[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { isConnected, error: connectionError } = useSupabaseStatus();

  useEffect(() => {
    if (isConnected) {
      fetchProperties();
    }
  }, [isConnected]);

  async function fetchProperties() {
    try {
      const data = await propertyApi.fetchProperties();
      setProperties(data);
      setError(null);
    } catch (err) {
      console.error('Error fetching properties:', err);
      setError('Failed to fetch properties. Please ensure you are connected to Supabase.');
    } finally {
      setLoading(false);
    }
  }

  async function addProperty(property: Omit<Property, 'id' | 'created_at'>) {
    try {
      const newProperty = await propertyApi.addProperty(property);
      setProperties(prev => [newProperty, ...prev]);
    } catch (err) {
      console.error('Error adding property:', err);
      throw new Error('Failed to add property');
    }
  }

  async function deleteProperty(id: string) {
    try {
      await propertyApi.deleteProperty(id);
      setProperties(prev => prev.filter(property => property.id !== id));
    } catch (err) {
      console.error('Error deleting property:', err);
      throw new Error('Failed to delete property');
    }
  }

  async function updateProperty(id: string, updates: Partial<Property>) {
    try {
      const updatedProperty = await propertyApi.updateProperty(id, updates);
      setProperties(prev => prev.map(property => 
        property.id === id ? { ...property, ...updatedProperty } : property
      ));
    } catch (err) {
      console.error('Error updating property:', err);
      throw new Error('Failed to update property');
    }
  }

  if (connectionError) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Connection Error</h2>
          <p className="text-gray-600 mb-4">{connectionError}</p>
          <button 
            onClick={() => window.location.reload()}
            className="bg-orange-800 text-white px-6 py-2 rounded-md hover:bg-orange-700"
          >
            Retry Connection
          </button>
        </div>
      </div>
    );
  }

  return (
    <PropertyContext.Provider value={{ 
      properties, 
      loading, 
      error,
      addProperty, 
      deleteProperty, 
      updateProperty 
    }}>
      {children}
    </PropertyContext.Provider>
  );
}

export function useProperties() {
  const context = useContext(PropertyContext);
  if (context === undefined) {
    throw new Error('useProperties must be used within a PropertyProvider');
  }
  return context;
}