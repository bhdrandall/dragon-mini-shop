import Link from 'next/link';
import { Montserrat } from "next/font/google";
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
import { ProductCard } from '@/components/dynamic/ProductCard';

type Product = {
  id: string;
  name: string;
  description?: string | null;
  price: number;
  imageUrl?: string | null;
};

type Type = { category: string };

const montserrat = Montserrat({ subsets: ["latin"], weight: ["700"] });

export default async function ShopPage() {
  // Fetch all unique product types from the database
  const types: Type[] = await prisma.product.findMany({
    select: { category: true },
    distinct: ['category'],
  });
  // Fetch latest 4 available products as featured
  const featuredProducts: Product[] = await prisma.product.findMany({
    where: { isAvailable: true },
    orderBy: { createdAt: 'desc' },
    take: 4,
  });

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

        {/* Product Types Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mb-16">
          {types.map((type) => (
            <div key={type.category} className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300">
              <Link href={`/shop/${type.category}`}>
                <div className="h-64 bg-gray-200 dark:bg-gray-700 relative flex items-center justify-center">
                  <span className="text-3xl font-bold text-gray-800 dark:text-white capitalize">{type.category.replace(/-/g, ' ')}</span>
                </div>
              </Link>
            </div>
          ))}
        </div>

        {/* Featured Products Section */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-6">Featured Products</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {featuredProducts.length > 0 ? (
              featuredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))
            ) : (
              <div className="col-span-full text-center text-gray-500">No featured products found.</div>
            )}
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
