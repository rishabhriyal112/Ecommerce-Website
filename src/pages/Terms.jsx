import React from 'react';

const Terms = () => {
  return (
    <div className="bg-white py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Terms of Service</h1>
          <p className="text-lg text-gray-600">
            Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
          </p>
        </div>
        
        <div className="prose prose-lg max-w-none">
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Introduction</h2>
            <p className="text-gray-600 mb-4">
              Welcome to CosmosStore. These Terms of Service ("Terms") govern your use of our website and the services offered by CosmosStore 
              ("we", "us", or "our"). By accessing or using our website, you agree to be bound by these Terms.
            </p>
            <p className="text-gray-600 mb-4">
              Please read these Terms carefully before using our website. If you do not agree to these Terms, you may not access or use our website.
            </p>
          </section>
          
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Account Registration</h2>
            <p className="text-gray-600 mb-4">
              To access certain features of our website, you may be required to register for an account. You agree to provide accurate, current, 
              and complete information during the registration process and to update such information to keep it accurate, current, and complete.
            </p>
            <p className="text-gray-600 mb-4">
              You are responsible for safeguarding your password and for all activities that occur under your account. You agree to notify us 
              immediately of any unauthorized use of your account.
            </p>
          </section>
          
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Products and Purchases</h2>
            <p className="text-gray-600 mb-4">
              All product descriptions, including pricing and availability, are subject to change at any time without notice. We reserve the right 
              to modify or discontinue any product or service without notice.
            </p>
            <p className="text-gray-600 mb-4">
              We make every effort to display as accurately as possible the colors and images of our products. We cannot guarantee that your 
              computer monitor's display of any color will be accurate.
            </p>
            <p className="text-gray-600 mb-4">
              We reserve the right to refuse any order you place with us. We may, in our sole discretion, limit or cancel quantities purchased 
              per person, per household, or per order.
            </p>
          </section>
          
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Pricing and Payment</h2>
            <p className="text-gray-600 mb-4">
              All prices are shown in US dollars and do not include taxes and shipping costs, which are added at checkout.
            </p>
            <p className="text-gray-600 mb-4">
              We reserve the right to correct any errors or mistakes in pricing, even if we have already requested or received payment.
            </p>
            <p className="text-gray-600 mb-4">
              Payment must be received prior to the acceptance of an order. We accept major credit cards, PayPal, and other payment methods 
              as indicated during checkout.
            </p>
          </section>
          
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Intellectual Property</h2>
            <p className="text-gray-600 mb-4">
              The content on our website, including text, graphics, logos, images, and software, is the property of ShopEase or its content 
              suppliers and is protected by United States and international copyright laws.
            </p>
            <p className="text-gray-600 mb-4">
              You may not reproduce, distribute, modify, create derivative works of, publicly display, publicly perform, republish, download, 
              store, or transmit any of the material on our website without our prior written consent.
            </p>
          </section>
          
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">User Content</h2>
            <p className="text-gray-600 mb-4">
              By posting, uploading, or submitting any content to our website (such as product reviews or comments), you grant us a non-exclusive, 
              royalty-free, perpetual, irrevocable, and fully sublicensable right to use, reproduce, modify, adapt, publish, translate, create 
              derivative works from, distribute, and display such content throughout the world in any media.
            </p>
            <p className="text-gray-600 mb-4">
              You represent and warrant that you own or control all rights to the content you post, that the content is accurate, and that use 
              of the content does not violate these Terms and will not cause injury to any person or entity.
            </p>
          </section>
          
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Limitation of Liability</h2>
            <p className="text-gray-600 mb-4">
              In no event shall ShopEase, its officers, directors, employees, or agents, be liable to you for any direct, indirect, incidental, 
              special, punitive, or consequential damages whatsoever resulting from any (i) errors, mistakes, or inaccuracies of content; 
              (ii) personal injury or property damage related to your use of our website; (iii) any unauthorized access to or use of our servers 
              and/or any personal information stored therein; (iv) any interruption or cessation of transmission to or from our website; 
              (v) any bugs, viruses, trojan horses, or the like, which may be transmitted to or through our website by any third party; and/or 
              (vi) any errors or omissions in any content or for any loss or damage of any kind incurred as a result of your use of any content 
              posted, emailed, transmitted, or otherwise made available via our website.
            </p>
          </section>
          
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Indemnification</h2>
            <p className="text-gray-600 mb-4">
              You agree to defend, indemnify, and hold harmless ShopEase, its officers, directors, employees, and agents, from and against any 
              and all claims, damages, obligations, losses, liabilities, costs or debt, and expenses (including but not limited to attorney's fees) 
              arising from: (i) your use of and access to our website; (ii) your violation of any term of these Terms; (iii) your violation of any 
              third party right, including without limitation any copyright, property, or privacy right; or (iv) any claim that your content caused 
              damage to a third party.
            </p>
          </section>
          
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Changes to Terms</h2>
            <p className="text-gray-600 mb-4">
              We reserve the right to modify or replace these Terms at any time. If a revision is material, we will provide at least 30 days' 
              notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.
            </p>
            <p className="text-gray-600 mb-4">
              By continuing to access or use our website after any revisions become effective, you agree to be bound by the revised terms. 
              If you do not agree to the new terms, you are no longer authorized to use our website.
            </p>
            <p className="text-gray-600 mb-4">
              If you have any questions about these Terms, please contact us at legal@cosmosstore.com.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Terms;