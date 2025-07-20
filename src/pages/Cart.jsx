import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaTrash, FaArrowLeft, FaShoppingCart } from 'react-icons/fa';
import { useShop } from '../context/ShopContext';



const Cart = () => {
  const { cart, removeFromCart, updateCartQuantity } = useShop();
  const [promoCode, setPromoCode] = useState('');
  const [promoApplied, setPromoApplied] = useState(false);
  
  // Calculate prices
  const subtotal = cart.reduce((total, item) => {
    const itemPrice = item.discount > 0 
      ? item.price - (item.price * item.discount / 100) 
      : item.price;
    return total + (itemPrice * item.quantity);
  }, 0);
  
  const shipping = subtotal > 5000 ? 0 : 499;
  const discount = promoApplied ? subtotal * 0.1 : 0;
  const total = subtotal + shipping - discount;
  
  const handleQuantityChange = (id, newQuantity) => {
    updateCartQuantity(id, newQuantity);
  };
  
  const handleRemoveItem = (id) => {
    removeFromCart(id);
  };
  
  const handleApplyPromo = () => {
    if (promoCode.toLowerCase() === 'discount10') {
      setPromoApplied(true);
    } else {
      alert('Invalid promo code');
    }
  };
  
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Your Shopping Cart</h1>
        
        {cart.length > 0 ? (
          <div className="flex flex-col lg:flex-row lg:space-x-8">
            {/* Cart Items */}
            <div className="lg:w-2/3">
              <div className="bg-white rounded-lg shadow overflow-hidden mb-6">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Product
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Price
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Quantity
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Total
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {cart.map(item => {
                      const itemPrice = item.discount > 0 
                        ? item.price - (item.price * item.discount / 100) 
                        : item.price;
                      const itemTotal = itemPrice * item.quantity;
                      
                      return (
                        <tr key={item.id}>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex items-center">
                              <div className="flex-shrink-0 h-16 w-16">
                                <img 
                                  src={item.image} 
                                  alt={item.name} 
                                  className="h-16 w-16 object-cover rounded"
                                />
                              </div>
                              <div className="ml-4">
                                <Link 
                                  to={`/products/${item.id}`}
                                  className="text-sm font-medium text-gray-900 hover:text-blue-600"
                                >
                                  {item.name}
                                </Link>
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            {item.discount > 0 ? (
                              <div>
                                <span className="text-sm font-medium text-gray-900">
                                  ₹{itemPrice.toFixed(0)}
                                </span>
                                <span className="block text-xs text-gray-500 line-through">
                                  ₹{item.price.toFixed(0)}
                                </span>
                              </div>
                            ) : (
                              <span className="text-sm font-medium text-gray-900">
                                ₹{item.price.toFixed(0)}
                              </span>
                            )}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex items-center">
                              <button 
                                onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                                className="px-2 py-1 border border-gray-300 rounded-l-md bg-gray-50 text-gray-600 hover:bg-gray-100"
                              >
                                -
                              </button>
                              <input
                                type="number"
                                min="1"
                                value={item.quantity}
                                onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value))}
                                className="w-12 border-t border-b border-gray-300 text-center focus:outline-none focus:ring-0 focus:border-gray-300"
                              />
                              <button 
                                onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                                className="px-2 py-1 border border-gray-300 rounded-r-md bg-gray-50 text-gray-600 hover:bg-gray-100"
                              >
                                +
                              </button>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                            ₹{itemTotal.toFixed(0)}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                            <button 
                              onClick={() => handleRemoveItem(item.id)}
                              className="text-red-600 hover:text-red-900"
                            >
                              <FaTrash />
                            </button>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
              
              <div className="flex justify-between items-center">
                <Link 
                  to="/products" 
                  className="inline-flex items-center text-blue-600 hover:text-blue-800"
                >
                  <FaArrowLeft className="mr-2" />
                  Continue Shopping
                </Link>
                
                <button 
                  onClick={() => cart.forEach(item => removeFromCart(item.id))}
                  className="text-red-600 hover:text-red-800"
                >
                  Clear Cart
                </button>
              </div>
            </div>
            
            {/* Order Summary */}
            <div className="lg:w-1/3 mt-8 lg:mt-0">
              <div className="bg-gray-50 rounded-lg p-6 shadow">
                <h2 className="text-lg font-medium text-gray-900 mb-4">Order Summary</h2>
                
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Subtotal</span>
                    <span className="text-gray-900 font-medium">₹{subtotal.toFixed(0)}</span>
                  </div>
                  
                  <div className="flex justify-between">
                    <span className="text-gray-600">Shipping</span>
                    <span className="text-gray-900 font-medium">
                      {shipping === 0 ? 'Free' : `₹${shipping.toFixed(0)}`}
                    </span>
                  </div>
                  
                  {promoApplied && (
                    <div className="flex justify-between text-green-600">
                      <span>Discount (10%)</span>
                      <span>-₹{discount.toFixed(0)}</span>
                    </div>
                  )}
                  
                  <div className="border-t border-gray-200 pt-4 flex justify-between">
                    <span className="text-lg font-bold text-gray-900">Total</span>
                    <span className="text-lg font-bold text-gray-900">₹{total.toFixed(0)}</span>
                  </div>
                </div>
                
                {/* Promo Code */}
                <div className="mt-6">
                  <label htmlFor="promo" className="block text-sm font-medium text-gray-700 mb-1">
                    Promo Code
                  </label>
                  <div className="flex">
                    <input
                      type="text"
                      id="promo"
                      value={promoCode}
                      onChange={(e) => setPromoCode(e.target.value)}
                      placeholder="Enter code"
                      className="flex-grow px-4 py-2 border rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      disabled={promoApplied}
                    />
                    <button
                      onClick={handleApplyPromo}
                      className="bg-gray-800 text-white px-4 py-2 rounded-r-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500"
                      disabled={promoApplied}
                    >
                      Apply
                    </button>
                  </div>
                  {promoApplied && (
                    <p className="text-green-600 text-sm mt-1">Promo code applied successfully!</p>
                  )}
                  <p className="text-gray-500 text-xs mt-1">Try "DISCOUNT10" for 10% off</p>
                </div>
                
                {/* Checkout Button */}
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-md mt-6 font-medium">
                  Proceed to Checkout
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="flex justify-center mb-4">
              <FaShoppingCart className="text-gray-400 text-6xl" />
            </div>
            <h2 className="text-2xl font-medium text-gray-900 mb-2">Your cart is empty</h2>
            <p className="text-gray-600 mb-6">Looks like you haven't added any products to your cart yet.</p>
            <Link 
              to="/products" 
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
            >
              Start Shopping
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;