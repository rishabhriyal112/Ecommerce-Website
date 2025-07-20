import React from 'react';

const Cookies = () => {
  return (
    <div className="bg-white py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Cookie Policy</h1>
          <p className="text-lg text-gray-600">
            Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
          </p>
        </div>
        
        <div className="prose prose-lg max-w-none">
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">What Are Cookies</h2>
            <p className="text-gray-600 mb-4">
              Cookies are small text files that are placed on your computer or mobile device when you visit a website. 
              They are widely used to make websites work more efficiently and provide information to the website owners.
            </p>
            <p className="text-gray-600 mb-4">
              Cookies allow a website to recognize your device and remember if you've been to the website before. 
              They are used for various purposes including enabling certain features, remembering your preferences, 
              analyzing how the website is used, and personalizing content.
            </p>
          </section>
          
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">How We Use Cookies</h2>
            <p className="text-gray-600 mb-4">
              We use cookies for several purposes, including:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-600">
              <li className="mb-2">
                <span className="font-medium">Essential cookies:</span> These cookies are necessary for the website to function properly. 
                They enable core functionality such as security, network management, and account access. You may disable these by changing 
                your browser settings, but this may affect how the website functions.
              </li>
              <li className="mb-2">
                <span className="font-medium">Analytical/performance cookies:</span> These cookies allow us to recognize and count the number 
                of visitors and see how visitors move around our website when they are using it. This helps us improve the way our website works, 
                for example, by ensuring that users are finding what they are looking for easily.
              </li>
              <li className="mb-2">
                <span className="font-medium">Functionality cookies:</span> These cookies are used to recognize you when you return to our website. 
                This enables us to personalize our content for you, greet you by name, and remember your preferences (for example, your choice of 
                language or region).
              </li>
              <li className="mb-2">
                <span className="font-medium">Targeting cookies:</span> These cookies record your visit to our website, the pages you have visited, 
                and the links you have followed. We will use this information to make our website and the advertising displayed on it more relevant 
                to your interests. We may also share this information with third parties for this purpose.
              </li>
            </ul>
          </section>
          
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Third-Party Cookies</h2>
            <p className="text-gray-600 mb-4">
              In addition to our own cookies, we may also use various third-party cookies to report usage statistics of the website, 
              deliver advertisements on and through the website, and so on.
            </p>
            <p className="text-gray-600 mb-4">
              These third-party services include but are not limited to:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-600">
              <li className="mb-2">Google Analytics</li>
              <li className="mb-2">Facebook Pixel</li>
              <li className="mb-2">Payment processors</li>
              <li className="mb-2">Advertising networks</li>
            </ul>
            <p className="text-gray-600 mb-4">
              Each of these services may place their own cookies and have their own privacy policies. We encourage you to review their policies.
            </p>
          </section>
          
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Managing Cookies</h2>
            <p className="text-gray-600 mb-4">
              Most web browsers allow you to control cookies through their settings preferences. However, if you limit the ability of websites 
              to set cookies, you may worsen your overall user experience, since it will no longer be personalized to you.
            </p>
            <p className="text-gray-600 mb-4">
              To manage cookies in different browsers, please consult the documentation for your specific browser:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-600">
              <li className="mb-2">
                <a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
                  Google Chrome
                </a>
              </li>
              <li className="mb-2">
                <a href="https://support.mozilla.org/en-US/kb/enhanced-tracking-protection-firefox-desktop" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
                  Mozilla Firefox
                </a>
              </li>
              <li className="mb-2">
                <a href="https://support.apple.com/guide/safari/manage-cookies-and-website-data-sfri11471/mac" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
                  Safari
                </a>
              </li>
              <li className="mb-2">
                <a href="https://support.microsoft.com/en-us/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
                  Microsoft Edge
                </a>
              </li>
            </ul>
          </section>
          
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Cookie Consent</h2>
            <p className="text-gray-600 mb-4">
              When you first visit our website, we will ask for your consent to use cookies. You can choose to accept or decline cookies. 
              If you choose to decline cookies, some features of the website may not function properly.
            </p>
            <p className="text-gray-600 mb-4">
              You can change your cookie preferences at any time by clicking on the "Cookie Settings" link in the footer of our website.
            </p>
          </section>
          
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Changes to This Cookie Policy</h2>
            <p className="text-gray-600 mb-4">
              We may update our Cookie Policy from time to time. We will notify you of any changes by posting the new Cookie Policy on this page 
              and updating the "Last updated" date at the top.
            </p>
            <p className="text-gray-600 mb-4">
              You are advised to review this Cookie Policy periodically for any changes. Changes to this Cookie Policy are effective when they 
              are posted on this page.
            </p>
            <p className="text-gray-600 mb-4">
              If you have any questions about our Cookie Policy, please contact us at privacy@cosmosstore.com.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Cookies;