import React from 'react';
import { ProductGrid } from './ProductGrid';
import { ProductService } from '@/lib/page-service';
import type { ProductGridData } from '@/lib/component-types';

interface ProductGridAsyncProps {
  data: ProductGridData;
}

export async function ProductGridAsync({ data }: ProductGridAsyncProps) {
  let products = [];
  if (data.category) {
    products = await ProductService.getProductsByCategory(data.category);
  } else {
    products = await ProductService.getAllProducts();
  }
  if (data.limit && products.length > data.limit) {
    products = products.slice(0, data.limit);
  }
  return (
    <ProductGrid
      products={products}
      title={data.title}
      columns={data.columns}
      showFilters={data.showFilters}
    />
  );
}
