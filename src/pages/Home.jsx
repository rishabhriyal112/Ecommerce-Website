import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import ProductCard from '../components/ProductCard';
import { FaArrowRight, FaStar, FaQuoteLeft } from 'react-icons/fa';
import { useShop } from '../context/ShopContext';

// Mock data for categories
const categories = [
  {
    id: 1,
    name: 'Electronics',
    image: 'https://images.unsplash.com/photo-1498049794561-7780e7231661?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1350&q=80'
  },
  {
    id: 2,
    name: 'Fashion',
    image: 'https://images.unsplash.com/photo-1445205170230-053b83016050?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1350&q=80'
  },
  {
    id: 3,
    name: 'Home & Kitchen',
    image: 'https://images.unsplash.com/photo-1556911220-bff31c812dba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1350&q=80'
  },
  {
    id: 4,
    name: 'Beauty',
    image: 'https://images.unsplash.com/photo-1571781926291-c477ebfd024b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1350&q=80'
  }
];

const Home = () => {
  const { products } = useShop();
  
  // Get featured products (first 4)
  const featuredProducts = products.slice(0, 4);

  // Testimonials data
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Fashion Enthusiast",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      quote: "The quality of products I received exceeded my expectations. The customer service was exceptional and delivery was prompt."
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Tech Reviewer",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      quote: "I've purchased electronics from many online stores, but the selection and prices here are unmatched. Definitely my go-to shop now."
    },
    {
      id: 3,
      name: "Emma Rodriguez",
      role: "Interior Designer",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      quote: "The home decor items are unique and of excellent quality. My clients are always impressed when I recommend products from this store."
    }
  ];

  return (
    <div className="bg-white">
      <Hero />
      
      {/* Featured Products */}
      <section id="featured" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 md:mb-0">
              <span className="inline-block pb-2 border-b-2 border-blue-500">Featured Products</span>
            </h2>
            <Link to="/products" className="flex items-center text-blue-600 hover:text-blue-800 transition-colors duration-300">
              View All <FaArrowRight className="ml-2" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
      
      {/* Value Proposition */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Shop With Us</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">We're committed to providing the best shopping experience</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="bg-white p-8 rounded-lg shadow-sm text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Quality Products</h3>
              <p className="text-gray-600">We carefully select every product to ensure quality and durability.</p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-sm text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Fast Delivery</h3>
              <p className="text-gray-600">Get your products delivered to your doorstep quickly and securely.</p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-sm text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Secure Payment</h3>
              <p className="text-gray-600">Multiple secure payment options for your convenience and safety.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Categories */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">
            <span className="inline-block pb-2 border-b-2 border-blue-500">Shop by Category</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto text-center mb-12">Browse our wide selection of products by category</p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {categories.map(category => (
              <Link to={`/products?category=${category.name.toLowerCase()}`} key={category.id}>
                <div className="relative rounded-xl overflow-hidden group shadow-md hover:shadow-xl transition-shadow duration-300">
                  <img 
                    src={category.image} 
                    alt={category.name} 
                    className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent flex items-end justify-center p-6">
                    <h3 className="text-white text-xl font-bold">{category.name}</h3>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              <span className="inline-block pb-2 border-b-2 border-blue-500">What Our Customers Say</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">Don't just take our word for it</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map(testimonial => (
              <div key={testimonial.id} className="bg-white p-8 rounded-lg shadow-sm relative">
                <FaQuoteLeft className="text-blue-100 text-4xl absolute top-4 left-4" />
                <div className="flex items-center mb-6">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-lg">{testimonial.name}</h4>
                    <p className="text-gray-600 text-sm">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-600 relative z-10">"{testimonial.quote}"</p>
                <div className="flex mt-4">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className="text-yellow-400" />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Newsletter */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Stay Updated</h2>
            <p className="text-gray-700 mb-8 max-w-2xl mx-auto text-lg">
              Subscribe to our newsletter for exclusive offers, new arrivals, and insider-only discounts.
            </p>
            
            <form className="max-w-md mx-auto flex shadow-lg">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-grow px-6 py-4 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-300 border-gray-200 border"
              />
              <button
                type="submit"
                className="bg-blue-600 text-white px-8 py-4 rounded-r-md hover:bg-blue-700 focus:outline-none transition-colors duration-300"
              >
                Subscribe
              </button>
            </form>
            <p className="text-gray-500 text-sm mt-4">We respect your privacy. Unsubscribe at any time.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;