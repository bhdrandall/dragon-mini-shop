import Link from 'next/link';
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({ subsets: ["latin"], weight: ["700"] });

// Mock categories data
const categories = [
  {
    id: 'miniatures',
    name: 'Miniatures',
    description: 'Detailed character and creature miniatures for your tabletop adventures',
    image: '/miniatures-category.jpg',
    subcategories: [
      { name: 'Fantasy Heroes', slug: 'fantasy-heroes' },
      { name: 'Monsters & Creatures', slug: 'monsters-creatures' },
      { name: 'NPCs & Civilians', slug: 'npcs-civilians' },
    ]
  },
  {
    id: 'terrain',
    name: 'Terrain & Tiles',
    description: 'Beautifully crafted terrain pieces and modular tiles for immersive gameplay',
    image: '/terrain-category.jpg',
    subcategories: [
      { name: 'Dungeon Tiles', slug: 'dungeon-tiles' },
      { name: 'Scatter Terrain', slug: 'scatter-terrain' },
      { name: 'Buildings & Structures', slug: 'buildings-structures' },
    ]
  },
  {
    id: 'warhammer',
    name: 'Warhammer',
    description: 'Compatible miniatures and terrain for Warhammer 40k and Age of Sigmar',
    image: '/warhammer-category.jpg',
    subcategories: [
      { name: 'Sci-fi Infantry', slug: 'scifi-infantry' },
      { name: 'Vehicles & Mechs', slug: 'vehicles-mechs' },
      { name: 'Battle Terrain', slug: 'battle-terrain' },
    ]
  },
  {
    id: 'bundles',
    name: 'Bundles & STL Packs',
    description: 'Save with our curated collections and digital STL files',
    image: '/bundles-category.jpg',
    subcategories: [
      { name: 'Starter Sets', slug: 'starter-sets' },
      { name: 'Campaign Packs', slug: 'campaign-packs' },
      { name: 'STL Files', slug: 'stl-files' },
    ]
  },
];

export default function ShopPage() {
  return (
    <div className="min-h-screen bg-background text-foreground py-12">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className={`${montserrat.className} text-4xl md:text-5xl font-bold mb-4`}>
            Shop Our Collection
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Discover our premium selection of 3D printed miniatures and terrain for all your tabletop gaming needs.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mb-16">
          {categories.map((category) => (
            <div key={category.id} className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300">
              <Link href={`/shop/${category.id}`}>
                <div className="h-64 bg-gray-200 dark:bg-gray-700 relative">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent z-10 flex items-end p-6">
                    <div>
                      <h2 className="text-2xl font-bold text-white mb-1">{category.name}</h2>
                      <p className="text-gray-200">{category.description}</p>
                    </div>
                  </div>
                </div>
              </Link>
              
              {/* Subcategories */}
              <div className="bg-white dark:bg-gray-800 p-4">
                <h3 className="font-medium text-gray-900 dark:text-white mb-2">Popular in {category.name}:</h3>
                <div className="flex flex-wrap gap-2">
                  {category.subcategories.map((subcategory) => (
                    <Link 
                      key={subcategory.slug} 
                      href={`/shop/${category.id}?category=${subcategory.slug}`}
                      className="text-sm px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                    >
                      {subcategory.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Featured Products Section */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-6">Featured Products</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[1, 2, 3, 4].map((id) => (
              <div key={id} className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                <div className="h-48 bg-gray-200 dark:bg-gray-700 relative">
                  <span className="absolute top-2 right-2 bg-orange-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                    NEW
                  </span>
                </div>
                <div className="p-4">
                  <h3 className="font-bold mb-1">Product {id}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">Category Name</p>
                  <div className="flex justify-between items-center">
                    <span className="font-bold">$24.99</span>
                    <button className="text-sm bg-indigo-600 hover:bg-indigo-700 text-white px-3 py-1 rounded">
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* About Section */}
        <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-md">
          <h2 className="text-2xl font-bold mb-4">Why Choose Our Miniatures?</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <h3 className="font-bold text-lg mb-2">Premium Quality</h3>
              <p className="text-gray-600 dark:text-gray-300">Each miniature is carefully printed with high-resolution resin for exceptional detail.</p>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-2">Fast Shipping</h3>
              <p className="text-gray-600 dark:text-gray-300">Orders ship within 1-2 business days with worldwide delivery options.</p>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-2">Satisfaction Guaranteed</h3>
              <p className="text-gray-600 dark:text-gray-300">Not happy? We offer a 30-day money-back guarantee on all purchases.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
