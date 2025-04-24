'use client'; // Add this if using event handlers or state eventually

import React from 'react';
import { FaSearch } from 'react-icons/fa';

const FlightSearchForm: React.FC = () => {
  // Basic handler to prevent default form submission for now
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Search submitted (placeholder)');
    // Add actual search logic here later
  };

  return (
    <section className="mb-12 art-deco-border rounded-none">
      <h2 className="text-3xl font-heading text-yellow-400 mb-6 text-center">Find Your Next Journey</h2>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-4 items-end">
          {/* From Input */}
          <div className="lg:col-span-1">
            <label htmlFor="origin" className="block text-sm font-medium text-gray-300 mb-1">From</label>
            <input type="text" id="origin" name="origin" placeholder="Salt Lake City" className="w-full art-deco-input" />
          </div>
          {/* To Input */}
          <div className="lg:col-span-1">
            <label htmlFor="destination" className="block text-sm font-medium text-gray-300 mb-1">To</label>
            <input type="text" id="destination" name="destination" placeholder="Where to?" className="w-full art-deco-input" />
          </div>
          {/* Date Inputs */}
          <div className="lg:col-span-2 grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="departure-date" className="block text-sm font-medium text-gray-300 mb-1">Depart</label>
              <input type="date" id="departure-date" name="departure-date" className="w-full art-deco-input" />
            </div>
            <div>
              <label htmlFor="return-date" className="block text-sm font-medium text-gray-300 mb-1">Return</label>
              <input type="date" id="return-date" name="return-date" className="w-full art-deco-input" />
            </div>
          </div>
          {/* Passengers Select */}
          <div>
            <label htmlFor="passengers" className="block text-sm font-medium text-gray-300 mb-1">Passengers</label>
            <select id="passengers" name="passengers" className="w-full art-deco-input appearance-none">
              <option>1 Adult</option>
              <option>2 Adults</option>
              <option>1 Adult, 1 Child</option>
              {/* Add more options as needed */}
            </select>
            {/* Consider adding a custom dropdown arrow if needed due to appearance-none */}
          </div>
        </div>
        {/* Submit Button */}
        <div className="text-center mt-6">
          <button type="submit" className="art-deco-button inline-flex items-center">
            <FaSearch className="mr-2" />
            Search Flights
          </button>
        </div>
      </form>
    </section>
  );
};

export default FlightSearchForm; 