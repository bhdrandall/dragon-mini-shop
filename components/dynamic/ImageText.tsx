import React from 'react';
import { ImageTextData } from '@/lib/component-types';

interface ImageTextProps {
  data: ImageTextData;
}

export function ImageText({ data }: ImageTextProps) {
  const isImageLeft = data.layout === 'image-left';
  const isImageRight = data.layout === 'image-right';
  const isImageTop = data.layout === 'image-top';

  const imageStyle = {
    width: data.imageWidth || '100%'
  };

  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        <div className={`flex flex-col ${isImageTop ? '' : 'md:flex-row'} ${isImageRight ? 'md:flex-row-reverse' : ''} items-center gap-8`}>
          <div className={`${isImageTop ? 'w-full' : 'md:w-1/2'}`}>
            <img
              src={data.imageUrl}
              alt={data.alt}
              className="rounded-lg shadow-lg w-full h-auto object-cover"
              style={imageStyle}
            />
          </div>
          <div className={`${isImageTop ? 'w-full' : 'md:w-1/2'}`}>
            <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
              {data.title}
            </h2>
            <div 
              className="prose prose-lg dark:prose-invert"
              dangerouslySetInnerHTML={{ __html: data.content }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
