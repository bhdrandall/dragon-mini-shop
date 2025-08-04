import React from 'react';
import { ImageBlockData } from '@/lib/component-types';
import { Container } from './Container';

interface ImageBlockProps {
  data: ImageBlockData;
}

export function ImageBlock({ data }: ImageBlockProps) {
  const alignmentClass = {
    left: 'justify-start',
    center: 'justify-center',
    right: 'justify-end'
  };

  const imageStyle = {
    width: data.width || 'auto',
    height: data.height || 'auto',
    objectFit: data.objectFit
  };

  return (
    <section className="py-16 bg-white dark:bg-gray-900">
      <Container maxWidth="6xl">
        <div className={`flex ${alignmentClass[data.alignment]}`}>
          <div className="max-w-full">
            <img
              src={data.imageUrl}
              alt={data.alt}
              className="rounded-lg shadow-lg"
              style={imageStyle}
            />
            {data.caption && (
              <p className="text-center text-gray-600 dark:text-gray-400 mt-2 text-sm">
                {data.caption}
              </p>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}
