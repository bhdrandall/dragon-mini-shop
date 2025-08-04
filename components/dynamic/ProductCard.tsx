import React from 'react';
import Link from 'next/link';
import { ProductCardData } from '@/lib/component-types';

interface ProductCardProps {
  product: {
    id: string;
    name: string;
    description?: string;
    price: number;
    imageUrl?: string;
  };
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
      <div className="aspect-square bg-gray-200 dark:bg-gray-700">
        {product.imageUrl ? (
          <img src={product.imageUrl} alt={product.name} className="w-full h-full object-cover" />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-gray-500">
            No Image
          </div>
        )}
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
        {product.description && (
          <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">
            {product.description}
          </p>
        )}
        <p className="text-xl font-bold text-indigo-600 dark:text-indigo-400 mb-3">
          ${product.price.toFixed(2)}
        </p>
        <Link 
          href={`/shop/product/${product.id}`}
          className="block w-full bg-indigo-600 text-white text-center py-2 rounded-lg hover:bg-indigo-700 transition-colors"
        >
          View Product
        </Link>
      </div>
    </div>
  );
}
