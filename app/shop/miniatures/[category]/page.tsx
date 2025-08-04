import { notFound } from 'next/navigation';
import { prisma } from '@/lib/db';
import { ProductGrid } from '@/components/dynamic/ProductGrid';

interface CategoryPageProps {
  params: { category: string };
}

export async function generateStaticParams() {
  // Fetch all unique miniature categories from the database
  const categories = await prisma.product.findMany({
    where: { category: 'miniatures' },
    select: { category: true },
    distinct: ['category'],
  });
  return categories.map((cat) => ({ category: cat.category }));
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { category } = params;
  // Fetch all products in this miniature category
  const products = await prisma.product.findMany({
    where: { category },
    orderBy: { name: 'asc' },
  });
  if (!products || products.length === 0) {
    notFound();
  }
  return (
    <main className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6 capitalize">{category.replace(/-/g, ' ')} Miniatures</h1>
      <ProductGrid products={products} />
    </main>
  );
}
