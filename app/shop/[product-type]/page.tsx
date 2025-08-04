import { notFound } from 'next/navigation';
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
import { ProductGrid } from '@/components/dynamic/ProductGrid';



export async function generateStaticParams() {
  // Fetch all unique product types from the database
  const types = await prisma.product.findMany({
    select: { category: true },
    distinct: ['category'],
  });
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return types.map((t: any) => ({ 'product-type': t.category }));
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default async function ProductTypePage(props: any) {
  const { params } = await props;
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
