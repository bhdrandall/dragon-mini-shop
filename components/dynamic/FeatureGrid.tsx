import React from 'react';
import { FeatureGridData } from '@/lib/component-types';
import { FeatureCard } from './FeatureCard';

interface FeatureGridProps {
  data: FeatureGridData;
}

export function FeatureGrid({ data }: FeatureGridProps) {
  const gridClasses = {
    1: 'grid-cols-1',
    2: 'grid-cols-1 md:grid-cols-2',
    3: 'grid-cols-1 md:grid-cols-3',
    4: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4'
  };

  return (
    <section className="py-16 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        {(data.title || data.subtitle) && (
          <div className="text-center mb-12">
            {data.title && (
              <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
                {data.title}
              </h2>
            )}
            {data.subtitle && (
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                {data.subtitle}
              </p>
            )}
          </div>
        )}
        <div className={`grid ${gridClasses[data.columns]} gap-8`}>
          {data.cards.map((card, index) => (
            <FeatureCard key={index} data={card} />
          ))}
        </div>
      </div>
    </section>
  );
}
