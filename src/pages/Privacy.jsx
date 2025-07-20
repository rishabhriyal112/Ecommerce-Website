import React from 'react';

const Privacy = () => {
  return (
    <div className="bg-white py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Privacy Policy</h1>
          <p className="text-lg text-gray-600">
            Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
          </p>
        </div>
        
        <div className="prose prose-lg max-w-none">
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Introduction</h2>
            <p className="text-gray-600 mb-4">
              CosmosStore ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, 
              and safeguard your information when you visit our website or make a purchase.
            </p>
            <p className="text-gray-600 mb-4">
              Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the site.
            </p>
          </section>
          
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Information We Collect</h2>
            
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Personal Information</h3>
            <p className="text-gray-600 mb-4">
              We may collect personal information that you voluntarily provide to us when you register on the website, 
              express interest in obtaining information about us or our products, or otherwise contact us. This information may include:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-600">
              <li className="mb-2">Name</li>
              <li className="mb-2">Email address</li>
              <li className="mb-2">Mailing address</li>
              <li className="mb-2">Phone number</li>
              <li className="mb-2">Payment information</li>
            </ul>
            
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Automatically Collected Information</h3>
            <p className="text-gray-600 mb-4">
              When you access our website, we may automatically collect certain information about your device, including:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-600">
              <li className="mb-2">IP address</li>
              <li className="mb-2">Browser type</li>
              <li className="mb-2">Operating system</li>
              <li className="mb-2">Referring URLs</li>
              <li className="mb-2">Pages viewed</li>
              <li className="mb-2">Time spent on pages</li>
            </ul>
          </section>
          
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">How We Use Your Information</h2>
            <p className="text-gray-600 mb-4">
              We may use the information we collect for various purposes, including:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-600">
              <li className="mb-2">Providing, maintaining, and improving our website and services</li>
              <li className="mb-2">Processing and fulfilling your orders</li>
              <li className="mb-2">Sending you order confirmations and updates</li>
              <li className="mb-2">Responding to your comments, questions, and requests</li>
              <li className="mb-2">Sending you technical notices and security alerts</li>
              <li className="mb-2">Marketing and promotional purposes (with your consent)</li>
              <li className="mb-2">Analyzing usage patterns and trends</li>
            </ul>
          </section>
          
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Cookies and Tracking Technologies</h2>
            <p className="text-gray-600 mb-4">
              We use cookies and similar tracking technologies to track activity on our website and hold certain information. 
              Cookies are files with a small amount of data that may include an anonymous unique identifier.
            </p>
            <p className="text-gray-600 mb-4">
              You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, 
              if you do not accept cookies, you may not be able to use some portions of our website.
            </p>
          </section>
          
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Data Security</h2>
            <p className="text-gray-600 mb-4">
              We have implemented appropriate technical and organizational security measures designed to protect the security of any personal 
              information we process. However, please also remember that we cannot guarantee that the internet itself is 100% secure.
            </p>
          </section>
          
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Third-Party Disclosure</h2>
            <p className="text-gray-600 mb-4">
              We may share your information with third parties that perform services for us or on our behalf, including payment processing, 
              data analysis, email delivery, hosting services, customer service, and marketing assistance.
            </p>
            <p className="text-gray-600 mb-4">
              We may also disclose your information where required to do so by law or if we believe that such action is necessary to comply with 
              legal processes, protect our rights, or protect the safety of others.
            </p>
          </section>
          
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Your Rights</h2>
            <p className="text-gray-600 mb-4">
              Depending on your location, you may have certain rights regarding your personal information, including:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-600">
              <li className="mb-2">The right to access personal information we hold about you</li>
              <li className="mb-2">The right to request correction of inaccurate information</li>
              <li className="mb-2">The right to request deletion of your information</li>
              <li className="mb-2">The right to opt-out of marketing communications</li>
            </ul>
            <p className="text-gray-600 mb-4">
              To exercise these rights, please contact us at privacy@cosmosstore.com.
            </p>
          </section>
          
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Us</h2>
            <p className="text-gray-600 mb-4">
              If you have questions or concerns about this Privacy Policy, please contact us at:
            </p>
            <p className="text-gray-600">
              CosmosStore<br />
              123 Commerce Street<br />
              Mumbai, MH 400001<br />
              Email: privacy@cosmosstore.com<br />
              Phone: +91 (555) 123-4567
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Privacy;