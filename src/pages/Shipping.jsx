import React from 'react';

const Shipping = () => {
  return (
    <div className="bg-white py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Shipping Policy</h1>
          <p className="text-lg text-gray-600">
            Information about our shipping methods, timeframes, and costs.
          </p>
        </div>
        
        <div className="prose prose-lg max-w-none">
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Processing Time</h2>
            <p className="text-gray-600 mb-4">
              All orders are processed within 1-2 business days (excluding weekends and holidays) after receiving your order confirmation email. 
              You will receive another notification when your order has shipped.
            </p>
          </section>
          
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Shipping Methods & Timeframes</h2>
            
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Domestic Shipping</h3>
            <ul className="list-disc pl-6 mb-6 text-gray-600">
              <li className="mb-2">
                <span className="font-medium">Standard Shipping:</span> 3-5 business days (Free on orders over ₹5,000)
              </li>
              <li className="mb-2">
                <span className="font-medium">Express Shipping:</span> 2-3 business days (₹799)
              </li>
              <li className="mb-2">
                <span className="font-medium">Next Day Delivery:</span> Next business day if ordered before 12pm IST (₹1,599)
              </li>
            </ul>
            
            <h3 className="text-xl font-semibold text-gray-900 mb-2">International Shipping</h3>
            <ul className="list-disc pl-6 mb-6 text-gray-600">
              <li className="mb-2">
                <span className="font-medium">Standard International:</span> 7-14 business days (₹1,199)
              </li>
              <li className="mb-2">
                <span className="font-medium">Express International:</span> 3-5 business days (₹2,399)
              </li>
            </ul>
            
            <p className="text-gray-600 mb-4">
              Please note that these timeframes are estimates and not guarantees. Delivery times may vary, especially during peak periods.
            </p>
          </section>
          
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Shipping Costs</h2>
            <p className="text-gray-600 mb-4">
              Shipping costs are calculated based on the weight of your order, the shipping method you select, and your location.
              You can see the exact shipping cost during checkout before completing your purchase.
            </p>
            <p className="text-gray-600 mb-4">
              <span className="font-medium">Free Shipping:</span> We offer free standard shipping on all domestic orders over ₹5,000.
            </p>
          </section>
          
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">International Orders</h2>
            <p className="text-gray-600 mb-4">
              We ship to most countries worldwide. Please note that international orders may be subject to import duties, taxes, and customs fees
              which are the responsibility of the recipient. These charges vary by country and are not included in our shipping costs.
            </p>
            <p className="text-gray-600 mb-4">
              International orders may experience delays due to customs processing which is beyond our control.
            </p>
          </section>
          
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Order Tracking</h2>
            <p className="text-gray-600 mb-4">
              Once your order ships, you will receive a shipping confirmation email with a tracking number.
              You can use this tracking number on our website or the carrier's website to track your package.
            </p>
          </section>
          
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Us</h2>
            <p className="text-gray-600 mb-4">
              If you have any questions about our shipping policy, please contact our customer service team at
              support@cosmosstore.com or call us at +91 (555) 123-4567.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Shipping;