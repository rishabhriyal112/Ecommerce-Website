import React from 'react';
import { Link } from 'react-router-dom';
import { FaTrash, FaShoppingCart } from 'react-icons/fa';
import { useShop } from '../context/ShopContext';

const Wishlist = () => {
  const { wishlist, removeFromWishlist, addToCart } = useShop();

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">My Wishlist</h1>
      
      {wishlist.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {wishlist.map(item => (
            <div key={item.id} className="border rounded-lg overflow-hidden">
              <Link to={`/products/${item.id}`}>
                <img src={item.image} alt={item.name} className="w-full h-48 object-cover" />
              </Link>
              <div className="p-4">
                <Link to={`/products/${item.id}`}>
                  <h2 className="text-lg font-semibold hover:text-blue-500">{item.name}</h2>
                </Link>
                <p className="text-gray-700 mb-4">₹{item.price.toFixed(0)}</p>
                <div className="flex justify-between">
                  <button 
                    onClick={() => addToCart(item.id)} 
                    className="bg-blue-500 text-white px-4 py-2 rounded flex items-center"
                  >
                    <FaShoppingCart className="mr-2" /> Add to Cart
                  </button>
                  <button 
                    onClick={() => removeFromWishlist(item.id)} 
                    className="text-red-500 px-4 py-2 rounded border border-red-500 flex items-center"
                  >
                    <FaTrash className="mr-2" /> Remove
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-8">
          <p className="text-gray-500 mb-4">Your wishlist is empty</p>
          <Link to="/products" className="bg-blue-500 text-white px-4 py-2 rounded">
            Continue Shopping
          </Link>
        </div>
      )}
    </div>
  );
};

export default Wishlist;