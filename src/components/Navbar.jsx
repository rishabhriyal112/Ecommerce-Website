import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useShop } from '../context/ShopContext';
import { FaShoppingCart, FaSearch, FaHeart, FaUser } from 'react-icons/fa';

const Navbar = () => {
  const [showCategories, setShowCategories] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);
  const { cart, wishlist, user, logout, searchQuery, setSearchQuery } = useShop();
  const navigate = useNavigate();
  
  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate('/search');
    }
  };
  
  return (
    <nav className="bg-white shadow-md p-4">
      <div className="container mx-auto flex flex-wrap justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img src="/logo.jpg" alt="CosmosStore" className="h-10 mr-2" />
          <span className="text-xl font-bold text-gray-800">CosmosStore</span>
        </Link>
        
        {/* Navigation Links */}
        <div className="flex items-center space-x-1 md:space-x-4">
          <Link to="/" className="px-3 py-2 text-gray-700 hover:text-blue-500">Home</Link>
          
          <div className="relative">
            <button 
              onClick={() => setShowCategories(!showCategories)}
              className="px-3 py-2 text-gray-700 hover:text-blue-500"
            >
              Categories ▼
            </button>
            {showCategories && (
              <div className="absolute z-10 bg-white border shadow-lg rounded mt-1 w-48">
                <Link to="/products?category=electronics" className="block px-4 py-2 hover:bg-gray-100">Electronics</Link>
                <Link to="/products?category=men" className="block px-4 py-2 hover:bg-gray-100">Men</Link>
                <Link to="/products?category=women" className="block px-4 py-2 hover:bg-gray-100">Women</Link>
                <Link to="/products?category=beauty" className="block px-4 py-2 hover:bg-gray-100">Beauty</Link>
                <Link to="/products?category=home" className="block px-4 py-2 hover:bg-gray-100">Home & Kitchen</Link>
              </div>
            )}
          </div>
          
          <Link to="/products" className="px-3 py-2 text-gray-700 hover:text-blue-500 font-medium">Shop</Link>
          
          {/* Search */}
          <form onSubmit={handleSearch} className="relative mx-2">
            <input 
              type="text" 
              placeholder="Search" 
              className="border rounded-full py-1 px-3 pl-8"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button type="submit" className="absolute left-3 top-2 text-gray-400">
              <FaSearch />
            </button>
          </form>
          
          {/* Wishlist */}
          <Link to="/wishlist" className="px-3 py-2 text-gray-700 hover:text-blue-500 relative">
            <FaHeart />
            {wishlist.length > 0 && (
              <span className="absolute top-0 right-0 bg-red-500 text-white rounded-full w-4 h-4 flex items-center justify-center text-xs">
                {wishlist.length}
              </span>
            )}
          </Link>
          
          {/* Cart */}
          <Link to="/cart" className="px-3 py-2 text-gray-700 hover:text-blue-500 relative">
            <FaShoppingCart />
            {cart.length > 0 && (
              <span className="absolute top-0 right-0 bg-red-500 text-white rounded-full w-4 h-4 flex items-center justify-center text-xs">
                {cart.reduce((total, item) => total + item.quantity, 0)}
              </span>
            )}
          </Link>
          
          {/* User Account */}
          <div className="relative">
            {user ? (
              <>
                <button 
                  onClick={() => setShowUserMenu(!showUserMenu)}
                  className="px-3 py-2 text-gray-700 hover:text-blue-500 flex items-center"
                >
                  <FaUser className="mr-1" /> {user.name} ▼
                </button>
                {showUserMenu && (
                  <div className="absolute right-0 z-10 bg-white border shadow-lg rounded mt-1 w-48">
                    <button 
                      onClick={() => {
                        logout();
                        setShowUserMenu(false);
                      }}
                      className="block w-full text-left px-4 py-2 hover:bg-gray-100 text-red-500"
                    >
                      Logout
                    </button>
                  </div>
                )}
              </>
            ) : (
              <div className="flex">
                <Link to="/login" className="px-3 py-2 text-gray-700 hover:text-blue-500">Login</Link>
                <Link to="/signup" className="px-3 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Signup</Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
