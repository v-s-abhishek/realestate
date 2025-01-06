import React from 'react';
import Hero from '../components/Hero';
import FeaturedProperties from '../components/FeaturedProperties';
import ListingForm from '../components/ListingForm';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Hero />
      <FeaturedProperties />
      <ListingForm />
    </div>
  );
}