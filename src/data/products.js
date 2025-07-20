// Electronics products
const ELECTRONICS = [
  {
    id: 1,
    name: 'Wireless Headphones',
    price: 2999,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
    category: 'electronics',
    description: 'High-quality wireless headphones with noise cancellation.',
    rating: 4.5,
    discount: 10,
    features: ['Active Noise Cancellation', 'Bluetooth 5.0', '30-hour Battery Life'],
    colors: ['Black', 'White', 'Blue']
  },
  {
    id: 2,
    name: 'Smart Watch',
    price: 5999,
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
    category: 'electronics',
    description: 'Smart watch with health monitoring features.',
    rating: 4.2,
    discount: 0
  },
  {
    id: 6,
    name: 'Smartphone',
    price: 19999,
    image: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
    category: 'electronics',
    description: 'Latest smartphone with advanced features.',
    rating: 4.6,
    discount: 5
  },
  {
    id: 9,
    name: 'Laptop',
    price: 29999,
    image: 'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
    category: 'electronics',
    description: 'Powerful laptop for work and entertainment.',
    rating: 4.7,
    discount: 8
  },
  {
    id: 10,
    name: 'Bluetooth Speaker',
    price: 1499,
    image: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
    category: 'electronics',
    description: 'Portable speaker with premium sound quality.',
    rating: 4.3,
    discount: 15
  },
  {
    id: 11,
    name: 'Digital Camera',
    price: 14999,
    image: 'https://images.unsplash.com/photo-1502920917128-1aa500764cbd?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
    category: 'electronics',
    description: 'Professional digital camera for stunning photography.',
    rating: 4.8,
    discount: 0
  },
  {
    id: 12,
    name: 'Gaming Console',
    price: 18999,
    image: 'https://images.unsplash.com/photo-1605901309584-818e25960a8f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
    category: 'electronics',
    description: 'Next-generation gaming console for immersive gameplay.',
    rating: 4.9,
    discount: 0
  },
  {
    id: 13,
    name: 'Wireless Earbuds',
    price: 3999,
    image: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
    category: 'electronics',
    description: 'True wireless earbuds with exceptional sound quality.',
    rating: 4.4,
    discount: 10
  }
];

// Men's Fashion products
const MEN = [
  {
    id: 3,
    name: 'Men\'s Jacket',
    price: 2499,
    image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
    category: 'men',
    description: 'Stylish jacket for men, perfect for fall weather.',
    rating: 4.7,
    discount: 15
  },
  {
    id: 7,
    name: 'Men\'s Sneakers',
    price: 1999,
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
    category: 'men',
    description: 'Comfortable sneakers for everyday wear.',
    rating: 4.4,
    discount: 0
  },
  {
    id: 16,
    name: 'Men\'s Formal Shirt',
    price: 2999,
    image: 'https://images.unsplash.com/photo-1598033129183-c4f50c736f10?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
    category: 'men',
    description: 'Classic formal shirt for professional settings.',
    rating: 4.3,
    discount: 0
  },
  {
    id: 17,
    name: 'Men\'s Jeans',
    price: 3499,
    image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
    category: 'men',
    description: 'Comfortable and stylish jeans for casual wear.',
    rating: 4.5,
    discount: 10
  },
  {
    id: 18,
    name: 'Men\'s Watch',
    price: 2999,
    image: 'https://images.unsplash.com/photo-1614164185128-e4ec99c436d7?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
    category: 'men',
    description: 'Elegant watch for men with premium build quality.',
    rating: 4.6,
    discount: 5
  },
  {
    id: 19,
    name: 'Men\'s Sunglasses',
    price: 2499,
    image: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
    category: 'men',
    description: 'Stylish sunglasses with UV protection.',
    rating: 4.2,
    discount: 0
  },
  {
    id: 20,
    name: 'Men\'s Wallet',
    price: 1999,
    image: 'https://images.unsplash.com/photo-1627123424574-724758594e93?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
    category: 'men',
    description: 'Genuine leather wallet with multiple card slots.',
    rating: 4.4,
    discount: 0
  }
];

// Women's Fashion products
const WOMEN = [
  {
    id: 4,
    name: 'Women\'s Dress',
    price: 1999,
    image: 'https://images.unsplash.com/photo-1496747611176-843222e1e57c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
    category: 'women',
    description: 'Elegant dress for women, suitable for various occasions.',
    rating: 4.3,
    discount: 0
  },
  {
    id: 8,
    name: 'Women\'s Handbag',
    price: 1799,
    image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
    category: 'women',
    description: 'Stylish handbag with multiple compartments.',
    rating: 4.1,
    discount: 10
  },
  {
    id: 23,
    name: 'Women\'s Blouse',
    price: 2499,
    image: 'https://images.unsplash.com/photo-1554568218-0f1715e72254?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
    category: 'women',
    description: 'Elegant blouse for formal and casual occasions.',
    rating: 4.4,
    discount: 5
  },
  {
    id: 24,
    name: 'Women\'s Heels',
    price: 3999,
    image: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
    category: 'women',
    description: 'Stylish heels for formal occasions.',
    rating: 4.2,
    discount: 0
  },
  {
    id: 25,
    name: 'Women\'s Sunglasses',
    price: 2299,
    image: 'https://images.unsplash.com/photo-1577803645773-f96470509666?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
    category: 'women',
    description: 'Fashionable sunglasses with UV protection.',
    rating: 4.3,
    discount: 0
  },
  {
    id: 26,
    name: 'Women\'s Scarf',
    price: 1499,
    image: 'https://images.unsplash.com/photo-1520903920243-00d872a2d1c9?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
    category: 'women',
    description: 'Soft and stylish scarf for all seasons.',
    rating: 4.5,
    discount: 0
  },
  {
    id: 27,
    name: 'Women\'s Watch',
    price: 2499,
    image: 'https://images.unsplash.com/photo-1549972574-8e3e1ed6a347?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
    category: 'women',
    description: 'Elegant watch for women with premium build quality.',
    rating: 4.6,
    discount: 5
  },
  {
    id: 28,
    name: 'Women\'s Jeans',
    price: 3299,
    image: 'https://images.unsplash.com/photo-1475178626620-a4d074967452?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
    category: 'women',
    description: 'Comfortable and stylish jeans for everyday wear.',
    rating: 4.4,
    discount: 10
  }
];

// Beauty products
const BEAUTY = [
  {
    id: 5,
    name: 'Skincare Set',
    price: 1499,
    image: 'https://images.unsplash.com/photo-1571781926291-c477ebfd024b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
    category: 'beauty',
    description: 'Complete skincare set for daily routine.',
    rating: 4.8,
    discount: 20
  },
  {
    id: 29,
    name: 'Makeup Palette',
    price: 2999,
    image: 'https://images.unsplash.com/photo-1522338242992-e1a54906a8da?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
    category: 'beauty',
    description: 'Professional makeup palette with various shades.',
    rating: 4.7,
    discount: 10
  },
  {
    id: 30,
    name: 'Perfume',
    price: 1299,
    image: 'https://images.unsplash.com/photo-1592914610354-fd354ea45e48?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
    category: 'beauty',
    description: 'Luxurious fragrance for everyday elegance.',
    rating: 4.6,
    discount: 0
  },
  {
    id: 31,
    name: 'Hair Care Set',
    price: 2499,
    image: 'https://images.unsplash.com/photo-1556227834-09f1de7a7d14?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
    category: 'beauty',
    description: 'Complete hair care set for healthy and shiny hair.',
    rating: 4.5,
    discount: 15
  },
  {
    id: 32,
    name: 'Facial Mask Set',
    price: 1999,
    image: 'https://images.unsplash.com/photo-1567721913486-6585f069b332?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
    category: 'beauty',
    description: 'Set of facial masks for different skin concerns.',
    rating: 4.4,
    discount: 0
  },
  {
    id: 33,
    name: 'Makeup Brushes',
    price: 1799,
    image: 'https://images.unsplash.com/photo-1515688594390-b649af70d282?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
    category: 'beauty',
    description: 'Professional makeup brush set for flawless application.',
    rating: 4.3,
    discount: 0
  },
  {
    id: 34,
    name: 'Nail Polish Set',
    price: 1299,
    image: 'https://images.unsplash.com/photo-1571290274554-6a2eaa771e5f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
    category: 'beauty',
    description: 'Set of trendy nail polish colors.',
    rating: 4.2,
    discount: 5
  },
  {
    id: 35,
    name: 'Lipstick Collection',
    price: 2499,
    image: 'https://images.unsplash.com/photo-1586495777744-4413f21062fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
    category: 'beauty',
    description: 'Collection of premium lipsticks in various shades.',
    rating: 4.7,
    discount: 10
  }
];

// Home & Kitchen products
const HOME = [
  {
    id: 36,
    name: 'Coffee Maker',
    price: 1999,
    image: 'https://images.unsplash.com/photo-1572119865084-43c285814d63?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
    category: 'home',
    description: 'Premium coffee maker for perfect brews every time.',
    rating: 4.6,
    discount: 10
  },
  {
    id: 37,
    name: 'Bedding Set',
    price: 4999,
    image: 'https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
    category: 'home',
    description: 'Luxurious bedding set for ultimate comfort.',
    rating: 4.7,
    discount: 15
  },
  {
    id: 38,
    name: 'Kitchen Knife Set',
    price: 3999,
    image: 'https://images.unsplash.com/photo-1566454825481-9c31a7588f1c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
    category: 'kitchen',
    description: 'Professional kitchen knife set for cooking enthusiasts.',
    rating: 4.8,
    discount: 0
  },
  {
    id: 39,
    name: 'Table Lamp',
    price: 2499,
    image: 'https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
    category: 'home',
    description: 'Modern table lamp for ambient lighting.',
    rating: 4.3,
    discount: 0
  },
  {
    id: 40,
    name: 'Cookware Set',
    price: 2999,
    image: 'https://images.unsplash.com/photo-1584284766755-6c7381fe01c0?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
    category: 'kitchen',
    description: 'Complete cookware set for all your cooking needs.',
    rating: 4.7,
    discount: 10
  },
  {
    id: 41,
    name: 'Throw Pillows',
    price: 1499,
    image: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
    category: 'home',
    description: 'Decorative throw pillows for your living space.',
    rating: 4.4,
    discount: 0
  },
  {
    id: 42,
    name: 'Blender',
    price: 3499,
    image: 'https://images.unsplash.com/photo-1590794056226-79ef3a8147e1?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
    category: 'kitchen',
    description: 'Powerful blender for smoothies and food preparation.',
    rating: 4.6,
    discount: 5
  },
  {
    id: 43,
    name: 'Area Rug',
    price: 4999,
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
    category: 'home',
    description: 'Stylish area rug to enhance your living space.',
    rating: 4.5,
    discount: 15
  }
];

// Combine all products
const PRODUCTS = [
  ...ELECTRONICS,
  ...MEN,
  ...WOMEN,
  ...BEAUTY,
  ...HOME
];

export default PRODUCTS;