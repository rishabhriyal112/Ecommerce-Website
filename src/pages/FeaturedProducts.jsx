import React from 'react';
import { Link } from 'react-router-dom';
import { useShop } from '../context/ShopContext';
import ProductCard from '../components/ProductCard';
import { FaArrowLeft } from 'react-icons/fa';

const FeaturedProducts = () => {
  const { products } = useShop();
  
  // Filter products with high ratings (4.5+) as featured
  const featuredProducts = products.filter(product => product.rating >= 4.5);

  return (
    <div className="bg-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Featured Products</h1>
          <Link to="/products" className="text-blue-600 hover:text-blue-800 flex items-center">
            <FaArrowLeft className="mr-2" /> Back to All Products
          </Link>
        </div>
        
        {featuredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No featured products available at the moment.</p>
            <Link to="/products" className="mt-4 inline-block px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
              Browse All Products
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default FeaturedProducts;