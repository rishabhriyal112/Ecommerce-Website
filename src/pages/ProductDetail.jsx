import { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { FaStar, FaRegStar, FaStarHalfAlt, FaArrowLeft, FaShoppingCart, FaHeart } from 'react-icons/fa';
import { useShop } from '../context/ShopContext';
import ProductCard from '../components/ProductCard';



// Function to render stars based on rating
const renderStars = (rating) => {
  const stars = [];
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;
  
  // Add full stars
  for (let i = 0; i < fullStars; i++) {
    stars.push(<FaStar key={`star-${i}`} className="text-yellow-400" />);
  }
  
  // Add half star if needed
  if (hasHalfStar) {
    stars.push(<FaStarHalfAlt key="half-star" className="text-yellow-400" />);
  }
  
  // Add empty stars
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
  for (let i = 0; i < emptyStars; i++) {
    stars.push(<FaRegStar key={`empty-star-${i}`} className="text-yellow-400" />);
  }
  
  return stars;
};

const ProductDetail = () => {
  const { id } = useParams();
  const { getProductById, getProductsByCategory, addToCart, addToWishlist } = useShop();
  const [product, setProduct] = useState(null);
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState(null);
  const [relatedProducts, setRelatedProducts] = useState([]);
  const navigate = useNavigate();
  
  useEffect(() => {
    const productData = getProductById(parseInt(id));
    if (!productData) {
      navigate('/products');
      return;
    }
    
    setProduct(productData);
    if (productData.colors) {
      setSelectedColor(productData.colors[0]);
    }
    
    // Get related products
    const related = getProductsByCategory(productData.category)
      .filter(p => p.id !== productData.id)
      .slice(0, 4);
    setRelatedProducts(related);
  }, [id, getProductById, getProductsByCategory, navigate]);
  

  
  const handleQuantityChange = (e) => {
    const value = parseInt(e.target.value);
    if (value > 0) {
      setQuantity(value);
    }
  };
  
  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  
  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };
  
  if (!product) {
    return <div className="p-8 text-center">Loading...</div>;
  }
  
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <nav className="flex items-center text-sm text-gray-500 mb-8">
          <Link to="/" className="hover:text-gray-900">Home</Link>
          <span className="mx-2">/</span>
          <Link to="/products" className="hover:text-gray-900">Products</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-900">{product.name}</span>
        </nav>
        
        <div className="flex flex-col lg:flex-row -mx-4">
          {/* Product Images */}
          <div className="lg:w-1/2 px-4 mb-8 lg:mb-0">
            <div className="mb-4">
              <img 
                src={product.images ? product.images[selectedImage] : product.image} 
                alt={product.name} 
                className="w-full h-96 object-contain rounded-lg"
              />
            </div>
            
            {product.images && (
              <div className="flex space-x-4 overflow-x-auto pb-2">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`w-20 h-20 rounded-md overflow-hidden flex-shrink-0 ${
                      selectedImage === index ? 'ring-2 ring-blue-500' : 'ring-1 ring-gray-200'
                    }`}
                  >
                    <img 
                      src={image} 
                      alt={`${product.name} - Image ${index + 1}`} 
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>
          
          {/* Product Info */}
          <div className="lg:w-1/2 px-4">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">{product.name}</h1>
            
            <div className="flex items-center mb-4">
              <div className="flex mr-2">
                {renderStars(product.rating)}
              </div>
              <span className="text-gray-500">({product.rating} rating)</span>
            </div>
            
            <div className="mb-6">
              {product.discount > 0 ? (
                <div className="flex items-center">
                  <span className="text-3xl font-bold text-gray-900">
                    ₹{(product.price - (product.price * product.discount / 100)).toFixed(0)}
                  </span>
                  <span className="text-xl text-gray-500 line-through ml-3">
                    ₹{product.price.toFixed(0)}
                  </span>
                  <span className="ml-3 bg-red-100 text-red-800 text-sm font-medium px-2 py-0.5 rounded">
                    {product.discount}% OFF
                  </span>
                </div>
              ) : (
                <span className="text-3xl font-bold text-gray-900">₹{product.price.toFixed(0)}</span>
              )}
            </div>
            
            <div className="mb-6">
              <p className="text-gray-700">{product.description}</p>
            </div>
            
            {/* Color Selection */}
            {product.colors && (
              <div className="mb-6">
                <h3 className="text-sm font-medium text-gray-900 mb-2">Color</h3>
                <div className="flex space-x-3">
                  {product.colors.map(color => (
                    <button
                      key={color}
                      onClick={() => setSelectedColor(color)}
                      className={`px-3 py-1 border rounded-full ${
                        selectedColor === color 
                          ? 'border-blue-500 bg-blue-50 text-blue-700' 
                          : 'border-gray-300 text-gray-700'
                      }`}
                    >
                      {color}
                    </button>
                  ))}
                </div>
              </div>
            )}
            
            {/* Quantity */}
            <div className="mb-6">
              <h3 className="text-sm font-medium text-gray-900 mb-2">Quantity</h3>
              <div className="flex">
                <button 
                  onClick={decreaseQuantity}
                  className="px-3 py-1 border border-gray-300 rounded-l-md bg-gray-50 text-gray-600 hover:bg-gray-100"
                >
                  -
                </button>
                <input
                  type="number"
                  min="1"
                  value={quantity}
                  onChange={handleQuantityChange}
                  className="w-16 border-t border-b border-gray-300 text-center focus:outline-none focus:ring-0 focus:border-gray-300"
                />
                <button 
                  onClick={increaseQuantity}
                  className="px-3 py-1 border border-gray-300 rounded-r-md bg-gray-50 text-gray-600 hover:bg-gray-100"
                >
                  +
                </button>
              </div>
            </div>
            
            {/* Features */}
            {product.features && (
              <div className="mb-6">
                <h3 className="text-sm font-medium text-gray-900 mb-2">Key Features</h3>
                <ul className="list-disc pl-5 space-y-1 text-gray-700">
                  {product.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>
            )}
            
            {/* Add to Cart */}
            <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3">
              <button 
                onClick={() => {
                  for (let i = 0; i < quantity; i++) {
                    addToCart(product.id);
                  }
                }}
                className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-md flex items-center justify-center"
              >
                <FaShoppingCart className="mr-2" />
                Add to Cart
              </button>
              <button 
                onClick={() => addToWishlist(product.id)}
                className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-800 py-3 px-6 rounded-md flex items-center justify-center"
              >
                <FaHeart className="mr-2" />
                Add to Wishlist
              </button>
            </div>
          </div>
        </div>
        
        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Products</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map(relatedProduct => (
                <ProductCard key={relatedProduct.id} product={relatedProduct} />
              ))}
            </div>
          </div>
        )}
        
        {/* Back to Products */}
        <div className="mt-12">
          <Link 
            to="/products" 
            className="inline-flex items-center text-blue-600 hover:text-blue-800"
          >
            <FaArrowLeft className="mr-2" />
            Back to All Products
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;