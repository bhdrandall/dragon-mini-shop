import React from 'react';
import { ImageTextData } from '@/lib/component-types';
import { Container } from './Container';

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
    <section className="py-16 bg-white dark:bg-gray-900">
      <Container maxWidth="6xl">
        <div className={`flex flex-col ${isImageTop ? '' : 'lg:flex-row'} ${isImageRight ? 'lg:flex-row-reverse' : ''} items-center gap-12`}>
          <div className={`${isImageTop ? 'w-full' : 'lg:w-1/2'}`}>
            <div className="relative">
              <img
                src={data.imageUrl}
                alt={data.alt}
                className="rounded-2xl shadow-2xl w-full h-auto object-cover"
                style={imageStyle}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
            </div>
          </div>
          <div className={`${isImageTop ? 'w-full' : 'lg:w-1/2'}`}>
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white leading-tight">
                {data.title}
              </h2>
              <div 
                className="prose prose-lg dark:prose-invert prose-indigo max-w-none"
                dangerouslySetInnerHTML={{ __html: data.content }}
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
