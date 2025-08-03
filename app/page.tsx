import Link from 'next/link';
import Image from 'next/image';
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({ subsets: ["latin"], weight: ["700"] });

// Mock data for featured products
const featuredProducts = [
  {
    id: 1,
    name: 'Ancient Dragon',
    category: 'Miniatures',
    price: 24.99,
    image: '/dragon-mini.jpg',
    isNew: true
  },
  {
    id: 2,
    name: 'Dungeon Tiles Set',
    category: 'Terrain',
    price: 34.99,
    image: '/dungeon-tiles.jpg',
    isNew: false
  },
  {
    id: 3,
    name: 'Space Marine Squad',
    category: 'Warhammer',
    price: 29.99,
    image: '/space-marines.jpg',
    isNew: true
  }
];

// Mock testimonials
const testimonials = [
  {
    id: 1,
    name: 'Sarah K.',
    role: 'Dungeon Master',
    content: 'The quality of these miniatures is outstanding! They print perfectly and look amazing on the table.',
    rating: 5
  },
  {
    id: 2,
    name: 'Mike T.',
    role: 'Wargamer',
    content: 'Finally found a shop that understands the needs of tabletop gamers. The terrain pieces are incredibly detailed.',
    rating: 5
  }
];

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-indigo-900 to-purple-900 text-white py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className={`${montserrat.className} text-4xl md:text-6xl font-bold mb-6`}>
              Epic 3D Printed Minis for Tabletop Legends
            </h1>
            <p className="text-xl md:text-2xl text-indigo-100 mb-8">
              High-quality, detailed miniatures and terrain for D&D, Warhammer, and your favorite tabletop games
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link 
                href="/shop" 
                className="px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-lg transition-colors duration-200"
              >
                Shop Now
              </Link>
              <Link 
                href="/custom-orders" 
                className="px-8 py-4 bg-transparent border-2 border-white hover:bg-white/10 text-white font-bold rounded-lg transition-colors duration-200"
              >
                Request Custom Order
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Shop by Category</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Link href="/shop/miniatures" className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300">
              <div className="h-64 bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center">
                <span className="text-white text-2xl font-bold group-hover:scale-110 transition-transform duration-300">Miniatures</span>
              </div>
            </Link>
            <Link href="/shop/terrain" className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300">
              <div className="h-64 bg-gradient-to-br from-green-500 to-teal-600 flex items-center justify-center">
                <span className="text-white text-2xl font-bold group-hover:scale-110 transition-transform duration-300">Terrain & Tiles</span>
              </div>
            </Link>
            <Link href="/shop/warhammer" className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300">
              <div className="h-64 bg-gradient-to-br from-red-500 to-pink-600 flex items-center justify-center">
                <span className="text-white text-2xl font-bold group-hover:scale-110 transition-transform duration-300">Warhammer</span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">Featured Products</h2>
          <p className="text-center text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto">Discover our latest and most popular miniatures and terrain pieces</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <div key={product.id} className="bg-white dark:bg-gray-700 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
                <div className="h-64 bg-gray-200 dark:bg-gray-600 relative">
                  {product.isNew && (
                    <span className="absolute top-4 right-4 bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                      NEW
                    </span>
                  )}
                </div>
                <div className="p-6">
                  <span className="text-sm text-indigo-600 dark:text-indigo-400 font-medium">{product.category}</span>
                  <h3 className="text-xl font-bold mt-1 mb-2">{product.name}</h3>
                  <div className="flex justify-between items-center mt-4">
                    <span className="text-2xl font-bold">${product.price.toFixed(2)}</span>
                    <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg transition-colors duration-200">
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link 
              href="/shop" 
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700"
            >
              View All Products
              <svg className="ml-2 -mr-1 w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">What Our Customers Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg 
                      key={i} 
                      className={`w-5 h-5 ${i < testimonial.rating ? 'text-yellow-400' : 'text-gray-300'}`} 
                      fill="currentColor" 
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-700 dark:text-gray-300 mb-4">"{testimonial.content}"</p>
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-indigo-100 dark:bg-indigo-900 flex items-center justify-center text-indigo-600 dark:text-indigo-300 font-bold">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div className="ml-3">
                    <p className="font-medium">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-indigo-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Next Adventure?</h2>
          <p className="text-xl text-indigo-100 mb-8 max-w-2xl mx-auto">
            Browse our collection of premium 3D printed miniatures and terrain to bring your tabletop games to life.
          </p>
          <Link 
            href="/shop" 
            className="inline-block px-8 py-3 bg-white text-indigo-700 font-bold rounded-lg hover:bg-gray-100 transition-colors duration-200"
          >
            Shop Now
          </Link>
        </div>
      </section>
    </div>
  );
}