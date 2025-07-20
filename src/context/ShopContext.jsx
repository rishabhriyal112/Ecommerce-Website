import { createContext, useState, useContext, useEffect } from 'react';
import PRODUCTS from '../data/products';

// Use imported products data

const ShopContext = createContext();

export const useShop = () => useContext(ShopContext);

export const ShopProvider = ({ children }) => {
  // User authentication state
  const [user, setUser] = useState(null);
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  // Load data from localStorage on initial render
  useEffect(() => {
    const savedCart = localStorage.getItem('cart');
    const savedWishlist = localStorage.getItem('wishlist');
    const savedUser = localStorage.getItem('user');
    
    if (savedCart) setCart(JSON.parse(savedCart));
    if (savedWishlist) setWishlist(JSON.parse(savedWishlist));
    if (savedUser) setUser(JSON.parse(savedUser));
  }, []);

  // Save data to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
    if (user) localStorage.setItem('user', JSON.stringify(user));
  }, [cart, wishlist, user]);

  // Search functionality
  useEffect(() => {
    if (searchQuery.trim() === '') {
      setSearchResults([]);
      return;
    }
    
    const results = PRODUCTS.filter(product => 
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase())
    );
    
    setSearchResults(results);
  }, [searchQuery]);

  // Add to cart
  const addToCart = (productId) => {
    const product = PRODUCTS.find(p => p.id === productId);
    if (!product) return;
    
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.id === productId);
      
      if (existingItem) {
        return prevCart.map(item => 
          item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  // Remove from cart
  const removeFromCart = (productId) => {
    setCart(prevCart => prevCart.filter(item => item.id !== productId));
  };

  // Update cart quantity
  const updateCartQuantity = (productId, quantity) => {
    if (quantity < 1) return;
    
    setCart(prevCart => 
      prevCart.map(item => 
        item.id === productId ? { ...item, quantity } : item
      )
    );
  };

  // Add to wishlist
  const addToWishlist = (productId) => {
    const product = PRODUCTS.find(p => p.id === productId);
    if (!product) return;
    
    setWishlist(prevWishlist => {
      if (prevWishlist.some(item => item.id === productId)) {
        return prevWishlist;
      }
      return [...prevWishlist, product];
    });
  };

  // Remove from wishlist
  const removeFromWishlist = (productId) => {
    setWishlist(prevWishlist => prevWishlist.filter(item => item.id !== productId));
  };

  // Login
  const login = (email, password) => {
    // In a real app, you would validate credentials against a backend
    // For this prototype, we'll just simulate a successful login
    setUser({ email, name: email.split('@')[0] });
    return true;
  };

  // Register
  const register = (name, email, password) => {
    // In a real app, you would send this data to a backend
    // For this prototype, we'll just simulate a successful registration
    setUser({ email, name });
    return true;
  };

  // Logout
  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  // Get products by category
  const getProductsByCategory = (category) => {
    if (!category || category === 'all' || category === 'All') {
      return PRODUCTS;
    }
    
    // Map UI category names to product category values
    let categoryValue = category.toLowerCase();
    if (categoryValue === 'fashion') {
      return PRODUCTS.filter(product => 
        product.category === 'men' || product.category === 'women'
      );
    } else if (categoryValue === 'home & kitchen') {
      return PRODUCTS.filter(product => 
        product.category === 'home' || product.category === 'kitchen'
      );
    }
    
    return PRODUCTS.filter(product => product.category.toLowerCase() === categoryValue);
  };

  // Get product by ID
  const getProductById = (id) => {
    return PRODUCTS.find(product => product.id === Number(id)) || null;
  };

  const value = {
    products: PRODUCTS,
    cart,
    wishlist,
    user,
    searchQuery,
    searchResults,
    addToCart,
    removeFromCart,
    updateCartQuantity,
    addToWishlist,
    removeFromWishlist,
    login,
    register,
    logout,
    getProductsByCategory,
    getProductById,
    setSearchQuery
  };

  return (
    <ShopContext.Provider value={value}>
      {children}
    </ShopContext.Provider>
  );
};

export default ShopContext;