import React from 'react';
import { GalleryData } from '@/lib/component-types';

interface GalleryProps {
  data: GalleryData;
}

export function Gallery({ data }: GalleryProps) {
  const gridClasses = {
    2: 'grid-cols-1 md:grid-cols-2',
    3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4'
  };

  const spacingClasses = {
    tight: 'gap-2',
    normal: 'gap-4',
    loose: 'gap-8'
  };

  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        {data.title && (
          <h2 className="text-3xl font-bold mb-8 text-center text-gray-900 dark:text-white">
            {data.title}
          </h2>
        )}
        <div className={`grid ${gridClasses[data.columns]} ${spacingClasses[data.spacing]}`}>
          {data.images.map((image, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-lg shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                <img
                  src={image.url}
                  alt={image.alt}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {image.caption && (
                  <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-2">
                    <p className="text-sm">{image.caption}</p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
