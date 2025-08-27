import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useShop } from '../context/ShopContext';
import { FaShoppingCart, FaSearch, FaHeart, FaUser, FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [showCategories, setShowCategories] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const { cart, wishlist, user, logout, searchQuery, setSearchQuery } = useShop();
  const navigate = useNavigate();
  
  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate('/search');
    }
  };
  
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="w-full px-2 sm:px-4 py-3 sm:container sm:mx-auto">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img src="/logo.jpg" alt="CosmosStore" className="h-8 md:h-10 mr-2" />
            <span className="text-lg md:text-xl font-bold text-gray-800">CosmosStore</span>
          </Link>
          
          {/* Mobile menu button */}
          <button 
            onClick={() => setShowMobileMenu(!showMobileMenu)}
            className="md:hidden text-gray-700 hover:text-blue-500"
          >
            {showMobileMenu ? <FaTimes size={20} /> : <FaBars size={20} />}
          </button>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
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
            <form onSubmit={handleSearch} className="relative">
              <input 
                type="text" 
                placeholder="Search" 
                className="border rounded-full py-2 px-4 pl-10 w-48"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button type="submit" className="absolute left-3 top-3 text-gray-400">
                <FaSearch />
              </button>
            </form>
            
            {/* Wishlist */}
            <Link to="/wishlist" className="p-2 text-gray-700 hover:text-blue-500 relative">
              <FaHeart />
              {wishlist.length > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white rounded-full w-4 h-4 flex items-center justify-center text-xs">
                  {wishlist.length}
                </span>
              )}
            </Link>
            
            {/* Cart */}
            <Link to="/cart" className="p-2 text-gray-700 hover:text-blue-500 relative">
              <FaShoppingCart />
              {cart.length > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white rounded-full w-4 h-4 flex items-center justify-center text-xs">
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
                    <FaUser className="mr-1" /> <span className="hidden lg:inline">{user.name}</span> ▼
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
                <div className="flex space-x-2">
                  <Link to="/login" className="px-3 py-2 text-gray-700 hover:text-blue-500">Login</Link>
                  <Link to="/signup" className="px-3 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Signup</Link>
                </div>
              )}
            </div>
          </div>
        </div>
        
        {/* Mobile Navigation */}
        {showMobileMenu && (
          <div className="md:hidden mt-4 pb-4 border-t">
            <div className="flex flex-col space-y-2 pt-4">
              <Link to="/" className="px-3 py-2 text-gray-700 hover:text-blue-500" onClick={() => setShowMobileMenu(false)}>Home</Link>
              <Link to="/products" className="px-3 py-2 text-gray-700 hover:text-blue-500" onClick={() => setShowMobileMenu(false)}>Shop</Link>
              
              {/* Mobile Search */}
              <form onSubmit={handleSearch} className="relative px-3 py-2">
                <input 
                  type="text" 
                  placeholder="Search products..." 
                  className="border rounded-full py-2 px-4 pl-10 w-full"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button type="submit" className="absolute left-6 top-5 text-gray-400">
                  <FaSearch />
                </button>
              </form>
              
              {/* Mobile Categories */}
              <div className="px-3">
                <button 
                  onClick={() => setShowCategories(!showCategories)}
                  className="py-2 text-gray-700 hover:text-blue-500 w-full text-left"
                >
                  Categories ▼
                </button>
                {showCategories && (
                  <div className="ml-4 mt-2 space-y-1">
                    <Link to="/products?category=electronics" className="block py-1 text-gray-600 hover:text-blue-500" onClick={() => setShowMobileMenu(false)}>Electronics</Link>
                    <Link to="/products?category=men" className="block py-1 text-gray-600 hover:text-blue-500" onClick={() => setShowMobileMenu(false)}>Men</Link>
                    <Link to="/products?category=women" className="block py-1 text-gray-600 hover:text-blue-500" onClick={() => setShowMobileMenu(false)}>Women</Link>
                    <Link to="/products?category=beauty" className="block py-1 text-gray-600 hover:text-blue-500" onClick={() => setShowMobileMenu(false)}>Beauty</Link>
                    <Link to="/products?category=home" className="block py-1 text-gray-600 hover:text-blue-500" onClick={() => setShowMobileMenu(false)}>Home & Kitchen</Link>
                  </div>
                )}
              </div>
              
              {/* Mobile Icons */}
              <div className="flex justify-around px-3 py-2 border-t mt-2 pt-4">
                <Link to="/wishlist" className="flex flex-col items-center text-gray-700 hover:text-blue-500" onClick={() => setShowMobileMenu(false)}>
                  <div className="relative">
                    <FaHeart />
                    {wishlist.length > 0 && (
                      <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-4 h-4 flex items-center justify-center text-xs">
                        {wishlist.length}
                      </span>
                    )}
                  </div>
                  <span className="text-xs mt-1">Wishlist</span>
                </Link>
                
                <Link to="/cart" className="flex flex-col items-center text-gray-700 hover:text-blue-500" onClick={() => setShowMobileMenu(false)}>
                  <div className="relative">
                    <FaShoppingCart />
                    {cart.length > 0 && (
                      <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-4 h-4 flex items-center justify-center text-xs">
                        {cart.reduce((total, item) => total + item.quantity, 0)}
                      </span>
                    )}
                  </div>
                  <span className="text-xs mt-1">Cart</span>
                </Link>
                
                {user ? (
                  <button 
                    onClick={() => {
                      logout();
                      setShowMobileMenu(false);
                    }}
                    className="flex flex-col items-center text-red-500 hover:text-red-600"
                  >
                    <FaUser />
                    <span className="text-xs mt-1">Logout</span>
                  </button>
                ) : (
                  <Link to="/login" className="flex flex-col items-center text-gray-700 hover:text-blue-500" onClick={() => setShowMobileMenu(false)}>
                    <FaUser />
                    <span className="text-xs mt-1">Login</span>
                  </Link>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
