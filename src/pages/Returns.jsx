import React from 'react';
import { Link } from 'react-router-dom';

const Returns = () => {
  return (
    <div className="bg-white py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Returns & Exchanges</h1>
          <p className="text-lg text-gray-600">
            Our policy for returns, exchanges, and refunds.
          </p>
        </div>
        
        <div className="prose prose-lg max-w-none">
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Return Policy</h2>
            <p className="text-gray-600 mb-4">
              We want you to be completely satisfied with your purchase. If you're not happy with your order for any reason, 
              you can return it within 30 days of delivery for a full refund or exchange.
            </p>
          </section>
          
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Return Eligibility</h2>
            <p className="text-gray-600 mb-4">
              To be eligible for a return, your item must be:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-600">
              <li className="mb-2">Unused and in the same condition that you received it</li>
              <li className="mb-2">In the original packaging with all tags attached</li>
              <li className="mb-2">Accompanied by the original receipt or proof of purchase</li>
            </ul>
            
            <p className="text-gray-600 mb-4">
              The following items cannot be returned:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-600">
              <li className="mb-2">Gift cards</li>
              <li className="mb-2">Downloadable software products</li>
              <li className="mb-2">Personal care items (for hygiene reasons)</li>
              <li className="mb-2">Items marked as "Final Sale" or "Non-Returnable"</li>
            </ul>
          </section>
          
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Return Process</h2>
            <ol className="list-decimal pl-6 mb-6 text-gray-600">
              <li className="mb-2">
                <span className="font-medium">Initiate a return:</span> Contact our customer service team at support@cosmosstore.com or call +91 (555) 123-4567 to request a return authorization.
              </li>
              <li className="mb-2">
                <span className="font-medium">Package your return:</span> Securely pack the item(s) in the original packaging if possible.
              </li>
              <li className="mb-2">
                <span className="font-medium">Include return form:</span> Fill out the return form that was included with your order or print one from our website.
              </li>
              <li className="mb-2">
                <span className="font-medium">Ship your return:</span> Send your package to the address provided by our customer service team.
              </li>
            </ol>
          </section>
          
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Exchanges</h2>
            <p className="text-gray-600 mb-4">
              If you'd like to exchange an item for a different size, color, or product, please follow the same process as returns.
              In your return form, indicate that you want an exchange and specify the details of the item you'd like instead.
            </p>
            <p className="text-gray-600 mb-4">
              If the exchanged item has a different price, we'll either charge the difference or issue a partial refund as appropriate.
            </p>
          </section>
          
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Refunds</h2>
            <p className="text-gray-600 mb-4">
              Once we receive and inspect your return, we'll send you an email to notify you that we've received your returned item.
              We'll also notify you of the approval or rejection of your refund.
            </p>
            <p className="text-gray-600 mb-4">
              If approved, your refund will be processed, and a credit will automatically be applied to your original method of payment within 5-10 business days.
            </p>
          </section>
          
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Return Shipping</h2>
            <p className="text-gray-600 mb-4">
              You are responsible for paying the shipping costs for returning your item. Shipping costs are non-refundable.
            </p>
            <p className="text-gray-600 mb-4">
              If you receive a refund, the cost of return shipping will be deducted from your refund.
            </p>
          </section>
          
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Damaged or Defective Items</h2>
            <p className="text-gray-600 mb-4">
              If you receive a damaged or defective item, please contact us immediately at support@cosmosstore.com with photos of the damage.
              We'll provide a prepaid shipping label for the return and send a replacement at no additional cost.
            </p>
            <p className="text-gray-600 mb-4">
              If you have any questions about our return policy, please <Link to="/contact" className="text-blue-600 hover:text-blue-800">contact us</Link>.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Returns;