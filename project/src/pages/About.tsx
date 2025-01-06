import React from 'react';
import Heritage from '../components/about/Heritage';
import Stats from '../components/about/Stats';
import Values from '../components/about/Values';

export default function About() {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">About Wealth Aspire Real Estate</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Building dreams and creating wealth through exceptional real estate services since 1970
          </p>
        </div>

        <Heritage />
        <Stats />
        <Values />
      </div>
    </div>
  );
}