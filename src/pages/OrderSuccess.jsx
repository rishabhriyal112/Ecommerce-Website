import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaCheckCircle, FaDownload, FaHome, FaShoppingBag } from 'react-icons/fa';

const OrderSuccess = () => {
  const location = useLocation();
  const { orderId, total, address } = location.state || {};

  useEffect(() => {
    // Clear cart after successful order (you can implement this in context)
    // clearCart();
  }, []);

  if (!orderId) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-xl font-semibold text-gray-800">Order not found</h2>
          <Link to="/" className="text-blue-600 hover:text-blue-800 mt-2 inline-block">
            Go to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="w-full px-2 sm:px-6 lg:px-8 py-8 sm:max-w-4xl sm:mx-auto">
        <div className="bg-white rounded-lg shadow-lg p-6 sm:p-8 text-center">
          {/* Success Icon */}
          <div className="flex justify-center mb-6">
            <div className="bg-green-100 rounded-full p-4">
              <FaCheckCircle className="text-green-600 text-4xl sm:text-6xl" />
            </div>
          </div>

          {/* Success Message */}
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-2">
            Order Placed Successfully!
          </h1>
          <p className="text-gray-600 mb-6">
            Thank you for your purchase. Your order has been confirmed and will be delivered soon.
          </p>

          {/* Order Details */}
          <div className="bg-gray-50 rounded-lg p-4 sm:p-6 mb-6 text-left">
            <h2 className="text-lg font-semibold mb-4">Order Details</h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
              <div>
                <p className="text-gray-600">Order ID</p>
                <p className="font-semibold text-lg">{orderId}</p>
              </div>
              <div>
                <p className="text-gray-600">Total Amount</p>
                <p className="font-semibold text-lg text-green-600">₹{total?.toFixed(0)}</p>
              </div>
              <div>
                <p className="text-gray-600">Order Date</p>
                <p className="font-medium">{new Date().toLocaleDateString('en-IN', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}</p>
              </div>
              <div>
                <p className="text-gray-600">Expected Delivery</p>
                <p className="font-medium">{new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toLocaleDateString('en-IN', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}</p>
              </div>
            </div>

            {/* Delivery Address */}
            {address && (
              <div className="mt-6 pt-4 border-t">
                <p className="text-gray-600 mb-2">Delivery Address</p>
                <div className="bg-white p-3 rounded border">
                  <p className="font-medium">{address.name}</p>
                  <p className="text-sm text-gray-600">{address.address}</p>
                  <p className="text-sm text-gray-600">
                    {address.city}, {address.state} - {address.pincode}
                  </p>
                  <p className="text-sm text-gray-600">Phone: {address.phone}</p>
                </div>
              </div>
            )}
          </div>

          {/* Order Status Timeline */}
          <div className="bg-blue-50 rounded-lg p-4 sm:p-6 mb-6">
            <h3 className="font-semibold mb-4 text-left">Order Status</h3>
            <div className="flex items-center justify-between text-xs sm:text-sm">
              <div className="flex flex-col items-center">
                <div className="bg-green-500 text-white rounded-full w-6 h-6 sm:w-8 sm:h-8 flex items-center justify-center mb-2">
                  <FaCheckCircle className="text-xs sm:text-sm" />
                </div>
                <span className="text-center">Order Confirmed</span>
              </div>
              <div className="flex-1 h-0.5 bg-gray-300 mx-2"></div>
              <div className="flex flex-col items-center">
                <div className="bg-gray-300 text-gray-600 rounded-full w-6 h-6 sm:w-8 sm:h-8 flex items-center justify-center mb-2">
                  2
                </div>
                <span className="text-center">Processing</span>
              </div>
              <div className="flex-1 h-0.5 bg-gray-300 mx-2"></div>
              <div className="flex flex-col items-center">
                <div className="bg-gray-300 text-gray-600 rounded-full w-6 h-6 sm:w-8 sm:h-8 flex items-center justify-center mb-2">
                  3
                </div>
                <span className="text-center">Shipped</span>
              </div>
              <div className="flex-1 h-0.5 bg-gray-300 mx-2"></div>
              <div className="flex flex-col items-center">
                <div className="bg-gray-300 text-gray-600 rounded-full w-6 h-6 sm:w-8 sm:h-8 flex items-center justify-center mb-2">
                  4
                </div>
                <span className="text-center">Delivered</span>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="flex items-center justify-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              <FaDownload className="mr-2" />
              Download Invoice
            </button>
            <Link 
              to="/products"
              className="flex items-center justify-center px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <FaShoppingBag className="mr-2" />
              Continue Shopping
            </Link>
            <Link 
              to="/"
              className="flex items-center justify-center px-6 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition-colors"
            >
              <FaHome className="mr-2" />
              Go to Home
            </Link>
          </div>

          {/* Additional Info */}
          <div className="mt-8 pt-6 border-t text-sm text-gray-600">
            <p className="mb-2">
              <strong>Need help?</strong> Contact our customer support at{' '}
              <a href="tel:1800-123-4567" className="text-blue-600 hover:text-blue-800">
                1800-123-4567
              </a>
            </p>
            <p>
              You will receive order updates via SMS and email. Track your order anytime from your account.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderSuccess;