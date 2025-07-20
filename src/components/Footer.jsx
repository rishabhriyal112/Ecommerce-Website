import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <h3 className="text-xl font-bold mb-6 text-white">CosmosStore</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Your one-stop shop for all your shopping needs. Quality products at affordable prices.
            </p>
            <div className="flex space-x-5">
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                <FaFacebook size={22} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                <FaTwitter size={22} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                <FaInstagram size={22} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                <FaLinkedin size={22} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-6 text-white">Shop</h3>
            <ul className="space-y-4">
              <li><Link to="/products" className="text-gray-300 hover:text-white transition-colors duration-300">All Products</Link></li>
              <li><Link to="/products/featured" className="text-gray-300 hover:text-white transition-colors duration-300">Featured</Link></li>
              <li><Link to="/products/new" className="text-gray-300 hover:text-white transition-colors duration-300">New Arrivals</Link></li>
              <li><Link to="/products/sale" className="text-gray-300 hover:text-white transition-colors duration-300">Sale</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-6 text-white">Customer Service</h3>
            <ul className="space-y-4">
              <li><Link to="/contact" className="text-gray-300 hover:text-white transition-colors duration-300">Contact Us</Link></li>
              <li><Link to="/faq" className="text-gray-300 hover:text-white transition-colors duration-300">FAQs</Link></li>
              <li><Link to="/shipping" className="text-gray-300 hover:text-white transition-colors duration-300">Shipping Policy</Link></li>
              <li><Link to="/returns" className="text-gray-300 hover:text-white transition-colors duration-300">Returns & Exchanges</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-6 text-white">Newsletter</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Subscribe to our newsletter for updates on new products and special offers.
            </p>
            <form className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="px-4 py-3 w-full bg-gray-800 border border-gray-700 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-300"
              />
              <button
                type="submit"
                className="bg-blue-600 text-white px-4 py-3 rounded-r-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-300"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} CosmosStore. All rights reserved.
          </p>
          <div className="flex space-x-8 mt-6 md:mt-0">
            <Link to="/privacy" className="text-gray-400 hover:text-white text-sm transition-colors duration-300">Privacy Policy</Link>
            <Link to="/terms" className="text-gray-400 hover:text-white text-sm transition-colors duration-300">Terms of Service</Link>
            <Link to="/cookies" className="text-gray-400 hover:text-white text-sm transition-colors duration-300">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;