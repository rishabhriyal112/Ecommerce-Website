import { Link } from 'react-router-dom';
import { FaStar, FaRegStar, FaStarHalfAlt, FaShoppingCart, FaHeart } from 'react-icons/fa';
import { useShop } from '../context/ShopContext';

const ProductCard = ({ product }) => {
  const { addToCart, addToWishlist } = useShop();
  const { id, name, price, image, rating, discount } = product;

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

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:shadow-lg hover:-translate-y-1">
      <Link to={`/products/${id}`}>
        <div className="relative">
          <img 
            src={image} 
            alt={name} 
            className="w-full h-64 object-cover"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80';
            }}
          />
          {discount > 0 && (
            <div className="absolute top-2 right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
              {discount}% OFF
            </div>
          )}
        </div>
      </Link>
      
      <div className="p-4">
        <Link to={`/products/${id}`}>
          <h3 className="text-lg font-medium text-gray-900 mb-1 hover:text-blue-500">{name}</h3>
        </Link>
        
        <div className="flex items-center mb-2">
          {renderStars(rating)}
          <span className="text-gray-500 text-sm ml-1">({rating})</span>
        </div>
        
        <div className="flex items-center justify-between">
          <div>
            {discount > 0 ? (
              <div className="flex items-center">
                <span className="text-lg font-bold text-gray-900">
                  ₹{(price - (price * discount / 100)).toFixed(0)}
                </span>
                <span className="text-sm text-gray-500 line-through ml-2">
                  ₹{price.toFixed(0)}
                </span>
              </div>
            ) : (
              <span className="text-lg font-bold text-gray-900">₹{price.toFixed(0)}</span>
            )}
          </div>
          
          <div className="flex space-x-2">
            <button 
              onClick={() => addToCart(id)} 
              className="bg-blue-500 hover:bg-blue-600 text-white px-2 py-1 rounded-full text-sm"
            >
              <FaShoppingCart />
            </button>
            <button 
              onClick={() => addToWishlist(id)}
              className="text-gray-500 hover:text-red-500"
            >
              <FaHeart />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;