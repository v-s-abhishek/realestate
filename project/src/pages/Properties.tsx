import React, { useState, useEffect } from 'react';
import { useProperties } from '../context/PropertyContext';
import { Plus } from 'lucide-react';
import PropertyFilters from '../components/properties/PropertyFilters';
import PropertyGrid from '../components/properties/PropertyGrid';
import ListingForm from '../components/ListingForm';
import { useSearchParams } from 'react-router-dom';

export default function Properties() {
  const { properties } = useProperties();
  const [searchParams] = useSearchParams();
  const [showListingForm, setShowListingForm] = useState(false);
  const [filters, setFilters] = useState({
    type: searchParams.get('type') || '',
    minPrice: '',
    maxPrice: '',
    beds: ''
  });

  useEffect(() => {
    const type = searchParams.get('type');
    const location = searchParams.get('location');
    if (type) {
      setFilters(prev => ({ ...prev, type }));
    }
  }, [searchParams]);

  const filteredProperties = properties.filter(property => {
    if (filters.type && property.type !== filters.type) return false;
    if (filters.minPrice && parseInt(property.price.replace(/[^0-9]/g, '')) < parseInt(filters.minPrice)) return false;
    if (filters.maxPrice && parseInt(property.price.replace(/[^0-9]/g, '')) > parseInt(filters.maxPrice)) return false;
    if (filters.beds && property.beds !== parseInt(filters.beds)) return false;
    
    const location = searchParams.get('location');
    if (location && !property.location.toLowerCase().includes(location.toLowerCase())) return false;
    
    return true;
  });

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-4xl font-bold text-gray-800 mb-2">Our Properties</h1>
            <p className="text-gray-600">Find your perfect property from our exclusive listings</p>
          </div>
          <button
            onClick={() => setShowListingForm(true)}
            className="flex items-center gap-2 bg-orange-800 text-white px-6 py-3 rounded-lg hover:bg-orange-700 transition-colors"
          >
            <Plus size={20} />
            Add Property
          </button>
        </div>

        <PropertyFilters filters={filters} onChange={setFilters} />
        <PropertyGrid properties={filteredProperties} />

        {showListingForm && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
              <div className="p-6">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl font-bold text-gray-800">Add New Property</h2>
                  <button
                    onClick={() => setShowListingForm(false)}
                    className="text-gray-500 hover:text-gray-700"
                  >
                    ✕
                  </button>
                </div>
                <ListingForm onSuccess={() => setShowListingForm(false)} />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}