import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useShop } from '../context/ShopContext';
import { FaMapMarkerAlt, FaCreditCard, FaCheck, FaEdit } from 'react-icons/fa';

const Checkout = () => {
  const { cart, user } = useShop();
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const [orderPlaced, setOrderPlaced] = useState(false);

  // Address state
  const [addresses, setAddresses] = useState([
    {
      id: 1,
      name: user?.name || 'John Doe',
      phone: '9876543210',
      address: '123 Main Street, Apartment 4B',
      city: 'Mumbai',
      state: 'Maharashtra',
      pincode: '400001',
      type: 'Home',
      isDefault: true
    }
  ]);
  const [selectedAddress, setSelectedAddress] = useState(1);
  const [showAddressForm, setShowAddressForm] = useState(false);
  const [newAddress, setNewAddress] = useState({
    name: '', phone: '', address: '', city: '', state: '', pincode: '', type: 'Home'
  });

  // Payment state
  const [paymentMethod, setPaymentMethod] = useState('cod');
  const [cardDetails, setCardDetails] = useState({
    number: '', expiry: '', cvv: '', name: ''
  });

  // Calculate totals
  const subtotal = cart.reduce((total, item) => {
    const itemPrice = item.discount > 0 ? item.price - (item.price * item.discount / 100) : item.price;
    return total + (itemPrice * item.quantity);
  }, 0);
  const shipping = subtotal > 5000 ? 0 : 499;
  const total = subtotal + shipping;

  const handleAddAddress = () => {
    const address = {
      id: addresses.length + 1,
      ...newAddress,
      isDefault: addresses.length === 0
    };
    setAddresses([...addresses, address]);
    setSelectedAddress(address.id);
    setShowAddressForm(false);
    setNewAddress({ name: '', phone: '', address: '', city: '', state: '', pincode: '', type: 'Home' });
  };

  const handlePlaceOrder = () => {
    setOrderPlaced(true);
    setTimeout(() => {
      navigate('/order-success', { 
        state: { 
          orderId: 'ORD' + Date.now(),
          total: total,
          address: addresses.find(addr => addr.id === selectedAddress)
        }
      });
    }, 2000);
  };

  if (cart.length === 0) {
    navigate('/cart');
    return null;
  }

  if (orderPlaced) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <h2 className="text-xl font-semibold text-gray-800">Placing your order...</h2>
          <p className="text-gray-600 mt-2">Please wait while we process your order</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="w-full px-2 sm:px-6 lg:px-8 py-8 sm:max-w-7xl sm:mx-auto">
        {/* Progress Steps */}
        <div className="mb-8">
          <div className="flex items-center justify-center space-x-4 sm:space-x-8">
            {[
              { step: 1, title: 'Address', icon: FaMapMarkerAlt },
              { step: 2, title: 'Payment', icon: FaCreditCard },
              { step: 3, title: 'Review', icon: FaCheck }
            ].map(({ step, title, icon: Icon }) => (
              <div key={step} className="flex items-center">
                <div className={`flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-full ${
                  currentStep >= step ? 'bg-blue-600 text-white' : 'bg-gray-300 text-gray-600'
                }`}>
                  <Icon className="text-sm sm:text-base" />
                </div>
                <span className={`ml-2 text-sm sm:text-base font-medium ${
                  currentStep >= step ? 'text-blue-600' : 'text-gray-500'
                }`}>
                  {title}
                </span>
                {step < 3 && <div className="w-8 sm:w-16 h-0.5 bg-gray-300 ml-4"></div>}
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Content */}
          <div className="lg:w-2/3">
            {/* Step 1: Address */}
            {currentStep === 1 && (
              <div className="bg-white rounded-lg shadow p-4 sm:p-6">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-xl font-semibold">Delivery Address</h2>
                  <button
                    onClick={() => setShowAddressForm(true)}
                    className="text-blue-600 hover:text-blue-800 text-sm font-medium"
                  >
                    + Add New Address
                  </button>
                </div>

                {/* Address List */}
                <div className="space-y-4">
                  {addresses.map(address => (
                    <div key={address.id} className={`border rounded-lg p-4 cursor-pointer transition-colors ${
                      selectedAddress === address.id ? 'border-blue-500 bg-blue-50' : 'border-gray-200 hover:border-gray-300'
                    }`} onClick={() => setSelectedAddress(address.id)}>
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-2">
                            <input
                              type="radio"
                              checked={selectedAddress === address.id}
                              onChange={() => setSelectedAddress(address.id)}
                              className="text-blue-600"
                            />
                            <span className="font-medium">{address.name}</span>
                            <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">{address.type}</span>
                            {address.isDefault && (
                              <span className="bg-green-100 text-green-600 px-2 py-1 rounded text-xs">Default</span>
                            )}
                          </div>
                          <p className="text-gray-600 text-sm">{address.address}</p>
                          <p className="text-gray-600 text-sm">{address.city}, {address.state} - {address.pincode}</p>
                          <p className="text-gray-600 text-sm">Phone: {address.phone}</p>
                        </div>
                        <button className="text-blue-600 hover:text-blue-800 p-1">
                          <FaEdit />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Add Address Form */}
                {showAddressForm && (
                  <div className="mt-6 border-t pt-6">
                    <h3 className="text-lg font-medium mb-4">Add New Address</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <input
                        type="text"
                        placeholder="Full Name"
                        value={newAddress.name}
                        onChange={(e) => setNewAddress({...newAddress, name: e.target.value})}
                        className="border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                      <input
                        type="tel"
                        placeholder="Phone Number"
                        value={newAddress.phone}
                        onChange={(e) => setNewAddress({...newAddress, phone: e.target.value})}
                        className="border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                      <input
                        type="text"
                        placeholder="Address"
                        value={newAddress.address}
                        onChange={(e) => setNewAddress({...newAddress, address: e.target.value})}
                        className="sm:col-span-2 border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                      <input
                        type="text"
                        placeholder="City"
                        value={newAddress.city}
                        onChange={(e) => setNewAddress({...newAddress, city: e.target.value})}
                        className="border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                      <input
                        type="text"
                        placeholder="State"
                        value={newAddress.state}
                        onChange={(e) => setNewAddress({...newAddress, state: e.target.value})}
                        className="border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                      <input
                        type="text"
                        placeholder="Pincode"
                        value={newAddress.pincode}
                        onChange={(e) => setNewAddress({...newAddress, pincode: e.target.value})}
                        className="border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                      <select
                        value={newAddress.type}
                        onChange={(e) => setNewAddress({...newAddress, type: e.target.value})}
                        className="border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      >
                        <option value="Home">Home</option>
                        <option value="Office">Office</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                    <div className="flex space-x-4 mt-4">
                      <button
                        onClick={handleAddAddress}
                        className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
                      >
                        Save Address
                      </button>
                      <button
                        onClick={() => setShowAddressForm(false)}
                        className="border border-gray-300 px-4 py-2 rounded-md hover:bg-gray-50"
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                )}

                <button
                  onClick={() => setCurrentStep(2)}
                  className="w-full mt-6 bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 font-medium"
                >
                  Continue to Payment
                </button>
              </div>
            )}

            {/* Step 2: Payment */}
            {currentStep === 2 && (
              <div className="bg-white rounded-lg shadow p-4 sm:p-6">
                <h2 className="text-xl font-semibold mb-6">Payment Method</h2>

                <div className="space-y-4">
                  {/* Cash on Delivery */}
                  <div className={`border rounded-lg p-4 cursor-pointer ${
                    paymentMethod === 'cod' ? 'border-blue-500 bg-blue-50' : 'border-gray-200'
                  }`} onClick={() => setPaymentMethod('cod')}>
                    <div className="flex items-center">
                      <input
                        type="radio"
                        checked={paymentMethod === 'cod'}
                        onChange={() => setPaymentMethod('cod')}
                        className="text-blue-600"
                      />
                      <span className="ml-3 font-medium">Cash on Delivery</span>
                    </div>
                    <p className="text-gray-600 text-sm mt-2 ml-6">Pay when your order is delivered</p>
                  </div>

                  {/* Credit/Debit Card */}
                  <div className={`border rounded-lg p-4 cursor-pointer ${
                    paymentMethod === 'card' ? 'border-blue-500 bg-blue-50' : 'border-gray-200'
                  }`} onClick={() => setPaymentMethod('card')}>
                    <div className="flex items-center">
                      <input
                        type="radio"
                        checked={paymentMethod === 'card'}
                        onChange={() => setPaymentMethod('card')}
                        className="text-blue-600"
                      />
                      <span className="ml-3 font-medium">Credit/Debit Card</span>
                    </div>
                    
                    {paymentMethod === 'card' && (
                      <div className="mt-4 ml-6 space-y-3">
                        <input
                          type="text"
                          placeholder="Card Number"
                          value={cardDetails.number}
                          onChange={(e) => setCardDetails({...cardDetails, number: e.target.value})}
                          className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <div className="grid grid-cols-2 gap-3">
                          <input
                            type="text"
                            placeholder="MM/YY"
                            value={cardDetails.expiry}
                            onChange={(e) => setCardDetails({...cardDetails, expiry: e.target.value})}
                            className="border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                          />
                          <input
                            type="text"
                            placeholder="CVV"
                            value={cardDetails.cvv}
                            onChange={(e) => setCardDetails({...cardDetails, cvv: e.target.value})}
                            className="border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                          />
                        </div>
                        <input
                          type="text"
                          placeholder="Cardholder Name"
                          value={cardDetails.name}
                          onChange={(e) => setCardDetails({...cardDetails, name: e.target.value})}
                          className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      </div>
                    )}
                  </div>

                  {/* UPI */}
                  <div className={`border rounded-lg p-4 cursor-pointer ${
                    paymentMethod === 'upi' ? 'border-blue-500 bg-blue-50' : 'border-gray-200'
                  }`} onClick={() => setPaymentMethod('upi')}>
                    <div className="flex items-center">
                      <input
                        type="radio"
                        checked={paymentMethod === 'upi'}
                        onChange={() => setPaymentMethod('upi')}
                        className="text-blue-600"
                      />
                      <span className="ml-3 font-medium">UPI Payment</span>
                    </div>
                    <p className="text-gray-600 text-sm mt-2 ml-6">Pay using Google Pay, PhonePe, Paytm & more</p>
                  </div>
                </div>

                <div className="flex space-x-4 mt-6">
                  <button
                    onClick={() => setCurrentStep(1)}
                    className="flex-1 border border-gray-300 py-3 rounded-md hover:bg-gray-50 font-medium"
                  >
                    Back
                  </button>
                  <button
                    onClick={() => setCurrentStep(3)}
                    className="flex-1 bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 font-medium"
                  >
                    Review Order
                  </button>
                </div>
              </div>
            )}

            {/* Step 3: Review */}
            {currentStep === 3 && (
              <div className="bg-white rounded-lg shadow p-4 sm:p-6">
                <h2 className="text-xl font-semibold mb-6">Review Your Order</h2>

                {/* Selected Address */}
                <div className="mb-6">
                  <h3 className="font-medium mb-2">Delivery Address</h3>
                  {addresses.find(addr => addr.id === selectedAddress) && (
                    <div className="bg-gray-50 p-3 rounded-md">
                      <p className="font-medium">{addresses.find(addr => addr.id === selectedAddress).name}</p>
                      <p className="text-sm text-gray-600">{addresses.find(addr => addr.id === selectedAddress).address}</p>
                      <p className="text-sm text-gray-600">
                        {addresses.find(addr => addr.id === selectedAddress).city}, {addresses.find(addr => addr.id === selectedAddress).state} - {addresses.find(addr => addr.id === selectedAddress).pincode}
                      </p>
                    </div>
                  )}
                </div>

                {/* Payment Method */}
                <div className="mb-6">
                  <h3 className="font-medium mb-2">Payment Method</h3>
                  <div className="bg-gray-50 p-3 rounded-md">
                    <p className="text-sm">
                      {paymentMethod === 'cod' && 'Cash on Delivery'}
                      {paymentMethod === 'card' && 'Credit/Debit Card'}
                      {paymentMethod === 'upi' && 'UPI Payment'}
                    </p>
                  </div>
                </div>

                {/* Order Items */}
                <div className="mb-6">
                  <h3 className="font-medium mb-2">Order Items</h3>
                  <div className="space-y-3">
                    {cart.map(item => (
                      <div key={item.id} className="flex items-center space-x-3 bg-gray-50 p-3 rounded-md">
                        <img src={item.image} alt={item.name} className="h-12 w-12 object-cover rounded" />
                        <div className="flex-1">
                          <p className="font-medium text-sm">{item.name}</p>
                          <p className="text-gray-600 text-xs">Qty: {item.quantity}</p>
                        </div>
                        <p className="font-medium">₹{((item.discount > 0 ? item.price - (item.price * item.discount / 100) : item.price) * item.quantity).toFixed(0)}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex space-x-4">
                  <button
                    onClick={() => setCurrentStep(2)}
                    className="flex-1 border border-gray-300 py-3 rounded-md hover:bg-gray-50 font-medium"
                  >
                    Back
                  </button>
                  <button
                    onClick={handlePlaceOrder}
                    className="flex-1 bg-green-600 text-white py-3 rounded-md hover:bg-green-700 font-medium"
                  >
                    Place Order
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Order Summary Sidebar */}
          <div className="lg:w-1/3">
            <div className="bg-white rounded-lg shadow p-4 sm:p-6 sticky top-4">
              <h3 className="text-lg font-semibold mb-4">Order Summary</h3>
              
              <div className="space-y-3 mb-4">
                <div className="flex justify-between text-sm">
                  <span>Subtotal ({cart.length} items)</span>
                  <span>₹{subtotal.toFixed(0)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Shipping</span>
                  <span>{shipping === 0 ? 'Free' : `₹${shipping}`}</span>
                </div>
                <div className="border-t pt-3 flex justify-between font-semibold">
                  <span>Total</span>
                  <span>₹{total.toFixed(0)}</span>
                </div>
              </div>

              <div className="text-xs text-gray-600 mb-4">
                <p>• Free shipping on orders above ₹5000</p>
                <p>• 7-day return policy</p>
                <p>• Secure payment</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;