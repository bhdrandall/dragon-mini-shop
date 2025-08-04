import { notFound } from 'next/navigation';
import { prisma } from '@/lib/db';

interface ProductPageProps {
  params: { id: string };
}

export async function generateStaticParams() {
  const products = await prisma.product.findMany({
    select: { id: true }
  });
  return products.map(product => ({ id: product.id }));
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { id } = params;
  const product = await prisma.product.findUnique({
    where: { id },
  });
  if (!product) {
    notFound();
  }
  return (
    <main className="container mx-auto py-12">
      <div className="max-w-3xl mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
        {product.imageUrl ? (
          <img src={product.imageUrl} alt={product.name} className="w-full h-96 object-cover" />
        ) : (
          <div className="w-full h-96 flex items-center justify-center bg-gray-200 dark:bg-gray-700 text-gray-500">
            No Image Available
          </div>
        )}
        <div className="p-8">
          <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
          <p className="text-gray-600 dark:text-gray-300 mb-4">{product.description}</p>
          <p className="text-2xl font-bold text-indigo-600 dark:text-indigo-400 mb-6">${product.price.toFixed(2)}</p>
          <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
            Add to Cart
          </button>
        </div>
      </div>
    </main>
  );
}
