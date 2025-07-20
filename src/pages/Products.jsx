import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { FaFilter, FaTimes } from 'react-icons/fa';
import { useShop } from '../context/ShopContext';
import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';



const Products = () => {
  const { products: allProducts, getProductsByCategory, addToCart, addToWishlist } = useShop();
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [priceRange, setPriceRange] = useState(60000);
  const [sortBy, setSortBy] = useState('featured');
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const location = useLocation();
  
  // Get category from URL query parameter
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const categoryParam = params.get('category');
    
    if (categoryParam) {
      // Format category name for display
      let formattedCategory;
      if (categoryParam === 'men' || categoryParam === 'women') {
        formattedCategory = 'Fashion';
      } else if (categoryParam === 'home' || categoryParam === 'kitchen') {
        formattedCategory = 'Home & Kitchen';
      } else {
        formattedCategory = categoryParam.charAt(0).toUpperCase() + categoryParam.slice(1);
      }
      
      setSelectedCategory(formattedCategory);
      const filteredProducts = getProductsByCategory(categoryParam);
      setProducts(filteredProducts.filter(product => product.price <= priceRange));
    } else {
      setProducts(allProducts.filter(product => product.price <= priceRange));
    }
  }, [location.search, allProducts, getProductsByCategory, priceRange]);
  
  const categories = ['All', 'Electronics', 'Men', 'Women', 'Beauty', 'Home & Kitchen'];
  
  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    if (category === 'All') {
      setProducts(allProducts.filter(product => product.price <= priceRange));
    } else {
      // Get products for the selected category
      const categoryProducts = getProductsByCategory(category);
      setProducts(categoryProducts.filter(product => product.price <= priceRange));
    }
  };
  
  const handlePriceChange = (e) => {
    const value = parseInt(e.target.value);
    setPriceRange(value);
    
    if (selectedCategory === 'All') {
      setProducts(allProducts.filter(product => product.price <= value));
    } else {
      setProducts(allProducts.filter(product => 
        product.category === selectedCategory && product.price <= value
      ));
    }
  };
  
  const handleSortChange = (e) => {
    const value = e.target.value;
    setSortBy(value);
    
    let sortedProducts = [...products];
    
    switch (value) {
      case 'price-low':
        sortedProducts.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        sortedProducts.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        sortedProducts.sort((a, b) => b.rating - a.rating);
        break;
      default:
        // Default sorting (featured)
        sortedProducts = selectedCategory === 'All' 
          ? allProducts.filter(product => product.price <= priceRange)
          : allProducts.filter(product => 
              product.category === selectedCategory && product.price <= priceRange
            );
    }
    
    setProducts(sortedProducts);
  };
  
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">All Products</h1>
        
        {/* Mobile filter button */}
        <div className="lg:hidden mb-4">
          <button
            onClick={() => setIsFilterOpen(!isFilterOpen)}
            className="flex items-center justify-center w-full py-2 px-4 border border-gray-300 rounded-md bg-white text-gray-700 hover:bg-gray-50"
          >
            {isFilterOpen ? (
              <>
                <FaTimes className="mr-2" /> Close Filters
              </>
            ) : (
              <>
                <FaFilter className="mr-2" /> Filter Products
              </>
            )}
          </button>
        </div>
        
        <div className="flex flex-col lg:flex-row">
          {/* Filters - Desktop always visible, mobile conditional */}
          <div className={`w-full lg:w-1/4 lg:pr-8 ${isFilterOpen ? 'block' : 'hidden lg:block'}`}>
            <div className="bg-gray-50 p-4 rounded-lg sticky top-4">
              <h2 className="text-lg font-medium text-gray-900 mb-4">Filters</h2>
              
              {/* Categories */}
              <div className="mb-6">
                <h3 className="text-sm font-medium text-gray-900 mb-2">Categories</h3>
                <div className="space-y-2">
                  {categories.map(category => (
                    <div key={category} className="flex items-center">
                      <input
                        id={`category-${category}`}
                        name="category"
                        type="radio"
                        checked={selectedCategory === category}
                        onChange={() => handleCategoryChange(category)}
                        className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                      />
                      <label htmlFor={`category-${category}`} className="ml-3 text-sm text-gray-600">
                        {category}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Price Range */}
              <div>
                <h3 className="text-sm font-medium text-gray-900 mb-2">Price Range</h3>
                <div className="mt-2">
                  <input
                    type="range"
                    min="0"
                    max="60000"
                    value={priceRange}
                    onChange={handlePriceChange}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                  />
                  <div className="flex justify-between mt-2">
                    <span className="text-sm text-gray-600">₹0</span>
                    <span className="text-sm text-gray-600">Up to ₹{priceRange}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Product Grid */}
          <div className="w-full lg:w-3/4 mt-6 lg:mt-0">
            {/* Sort dropdown */}
            <div className="flex justify-end mb-4">
              <select
                value={sortBy}
                onChange={handleSortChange}
                className="block w-48 pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
              >
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
              </select>
            </div>
            
            {/* Products */}
            {products.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {products.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-gray-500 text-lg">No products found matching your criteria.</p>
                <button
                  onClick={() => {
                    setSelectedCategory('All');
                    setPriceRange(60000);
                    setProducts(allProducts);
                  }}
                  className="mt-4 inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  Reset Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;