import { notFound } from 'next/navigation';
import { prisma } from '@/lib/db';
import { ProductGrid } from '@/components/dynamic/ProductGrid';

interface ProductTypePageProps {
  params: { 'product-type': string };
}

export async function generateStaticParams() {
  // Fetch all unique product types from the database
  const types = await prisma.product.findMany({
    select: { category: true },
    distinct: ['category'],
  });
  return types.map((t) => ({ 'product-type': t.category }));
}

export default async function ProductTypePage({ params }: ProductTypePageProps) {
  const awaitedParams = await params;
  const { 'product-type': productType } = awaitedParams;
  // Fetch all products for this type
  const products = await prisma.product.findMany({
    where: { category: productType },
    orderBy: { name: 'asc' },
  });
  if (!products || products.length === 0) {
    notFound();
  }
  return (
    <main className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6 capitalize">{productType.replace(/-/g, ' ')} Products</h1>
      <ProductGrid products={products} />
    </main>
  );
}
