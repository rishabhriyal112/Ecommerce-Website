import React from 'react';
import { Link } from 'react-router-dom';
import { useShop } from '../context/ShopContext';

const Categories = () => {
  const { getProductsByCategory } = useShop();
  
  // Categories with images
  const categories = [
    {
      id: 1,
      name: 'Men',
      image: 'https://images.unsplash.com/photo-1505022610485-0249ba5b3675?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
      count: getProductsByCategory('men').length
    },
    {
      id: 2,
      name: 'Women',
      image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
      count: getProductsByCategory('women').length
    },
    {
      id: 3,
      name: 'Electronics',
      image: 'https://images.unsplash.com/photo-1498049794561-7780e7231661?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
      count: getProductsByCategory('electronics').length
    },
    {
      id: 4,
      name: 'Beauty',
      image: 'https://images.unsplash.com/photo-1571781926291-c477ebfd024b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
      count: getProductsByCategory('beauty').length
    }
  ];

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">Shop by Category</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {categories.map(category => (
          <Link 
            key={category.id} 
            to={`/products?category=${category.name.toLowerCase()}`}
            className="block relative rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
          >
            <img 
              src={category.image} 
              alt={category.name} 
              className="w-full h-64 object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-center justify-center text-white">
              <h2 className="text-2xl font-bold">{category.name}</h2>
              <p className="mt-2">{category.count} Products</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Categories;