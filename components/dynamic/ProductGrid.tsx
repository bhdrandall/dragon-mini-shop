import React from 'react';
import { ProductGridData } from '@/lib/component-types';
import { ProductCard } from './ProductCard';

interface ProductGridProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  products: any[];
  title?: string;
  columns?: number;
  showFilters?: boolean;
}

export function ProductGrid({ products, title, columns = 3, showFilters = false }: ProductGridProps) {
  const gridClasses = {
    2: 'grid-cols-1 md:grid-cols-2',
    3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4'
  };

  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        {title && (
          <h2 className="text-3xl font-bold mb-8 text-center text-gray-900 dark:text-white">
            {title}
          </h2>
        )}
        {showFilters && (
          <div className="mb-8 flex justify-center">
            <div className="flex gap-2 flex-wrap">
              <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg">All</button>
              <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300">Miniatures</button>
              <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300">Terrain</button>
              <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300">Custom</button>
            </div>
          </div>
        )}
        <div className={`grid ${gridClasses[columns as 2 | 3 | 4]} gap-6`}>
          {products && products.length > 0 ? (
            products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))
          ) : (
            <div className="col-span-full text-center text-gray-500">No products found.</div>
          )}
        </div>
      </div>
    </div>
  );
}
