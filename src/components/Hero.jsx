import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const heroImages = [
    // Fashion - Women's clothing
    "https://images.unsplash.com/photo-1540221652346-e5dd6b50f3e7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    // Electronics - Headphones
    "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    // Beauty products
    "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    // Home & Kitchen
    "https://images.unsplash.com/photo-1556911220-bff31c812dba?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    // Men's fashion
    "https://images.unsplash.com/photo-1490367532201-b9bc1dc483f6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
  ];
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 3000);
    
    return () => clearInterval(interval);
  }, [heroImages.length]);
  
  // Get the previous index with proper looping
  const getPrevIndex = (current) => {
    return current === 0 ? heroImages.length - 1 : current - 1;
  };
  return (
    <div className="bg-gradient-to-br from-gray-50 to-gray-100 min-h-screen flex items-center">
      <div className="w-full px-2 sm:px-6 lg:px-8 py-12 md:py-16 sm:container sm:mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
          {/* Left content */}
          <div className="w-full lg:w-1/2 space-y-6 text-center lg:text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 leading-tight">
              Elevate Your <span className="text-blue-600">Style</span> With Premium Quality
            </h1>
            
            <p className="text-base sm:text-lg text-gray-600 max-w-lg mx-auto lg:mx-0">
              Discover our curated collection of high-quality products that blend style, comfort, and innovation.
            </p>
            
            <div className="pt-4 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link 
                to="/products" 
                className="px-6 sm:px-8 py-3 bg-blue-600 text-white font-medium rounded-lg shadow-md hover:bg-blue-700 hover:shadow-lg transition-all duration-300 text-center"
              >
                Shop Now
              </Link>
              
              <Link 
                to="/categories" 
                className="px-6 sm:px-8 py-3 bg-white text-blue-600 font-medium rounded-lg shadow-sm border border-gray-200 hover:bg-gray-50 hover:shadow-md transition-all duration-300 flex items-center justify-center"
              >
                Explore <FaArrowRight className="ml-2 text-sm" />
              </Link>
            </div>
          </div>
          
          {/* Right image with floating elements */}
          <div className="w-full lg:w-1/2 relative mt-8 lg:mt-0">
            {/* Decorative elements */}
            <div className="absolute -top-4 -left-4 sm:-top-6 sm:-left-6 w-16 h-16 sm:w-24 sm:h-24 bg-blue-100 rounded-full opacity-70 blur-xl"></div>
            <div className="absolute -bottom-2 -right-2 sm:-bottom-4 sm:-right-4 w-20 h-20 sm:w-32 sm:h-32 bg-purple-100 rounded-full opacity-70 blur-xl"></div>
            
            {/* Main image with animation */}
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-xl">
              <div className="relative w-full h-[300px] sm:h-[400px] lg:h-[450px] overflow-hidden">
                {heroImages.map((image, index) => {
                  // Determine if this is the previous image (for consistent animation)
                  const isPrevious = getPrevIndex(currentImageIndex) === index;
                  
                  return (
                    <img
                      key={index}
                      className={`absolute top-0 left-0 w-full h-full object-cover transition-all duration-1000 ${
                        index === currentImageIndex 
                          ? 'opacity-100 translate-x-0' 
                          : isPrevious 
                            ? 'opacity-0 -translate-x-full' 
                            : 'opacity-0 translate-x-full'
                      }`}
                      src={image}
                      alt={`Fashion Collection ${index + 1}`}
                    />
                  );
                })}
              </div>
            </div>
            
            {/* Floating badge */}
            <div className="absolute top-2 right-2 sm:top-4 sm:right-4 bg-white bg-opacity-90 backdrop-blur-sm rounded-lg shadow-lg py-1 px-2 sm:py-2 sm:px-4 z-20">
              <p className="text-blue-600 font-bold text-xs sm:text-sm">New Collection</p>
            </div>
            
            {/* Image indicators */}
            <div className="absolute bottom-2 sm:bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
              {heroImages.map((_, index) => (
                <button
                  key={index}
                  className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${index === currentImageIndex ? 'bg-blue-600' : 'bg-white bg-opacity-50'}`}
                  onClick={() => setCurrentImageIndex(index)}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;