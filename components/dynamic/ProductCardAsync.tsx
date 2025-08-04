import React from 'react';
import { ProductCard } from './ProductCard';
import { ProductService } from '@/lib/page-service';
import type { ProductCardData } from '@/lib/component-types';

interface ProductCardAsyncProps {
  data: ProductCardData;
}

export async function ProductCardAsync({ data }: ProductCardAsyncProps) {
  // Fetch the actual product by productId
  const product = await ProductService.getProductById(data.productId);
  if (!product) return null;

  return <ProductCard product={product} />;
}
