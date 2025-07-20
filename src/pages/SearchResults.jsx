import React from 'react';
import { useShop } from '../context/ShopContext';
import ProductCard from '../components/ProductCard';

const SearchResults = () => {
  const { searchQuery, searchResults } = useShop();

  if (searchResults.length === 0) {
    return (
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-6">Search Results for "{searchQuery}"</h1>
        <p className="text-gray-600">No products found matching your search.</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">Search Results for "{searchQuery}"</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {searchResults.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default SearchResults;