import React from 'react';
import { TextBlockData } from '@/lib/component-types';
import { Container } from './Container';

interface TextBlockProps {
  data: TextBlockData;
}

export function TextBlock({ data }: TextBlockProps) {
  const textAlignClass = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right'
  };

  const containerStyle = {
    backgroundColor: data.backgroundColor || undefined,
    color: data.textColor || undefined,
    maxWidth: data.maxWidth || undefined
  };

  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-800">
      <Container maxWidth="6xl">
        <div 
          className={`prose prose-lg dark:prose-invert prose-indigo mx-auto ${textAlignClass[data.textAlign]}`}
          style={containerStyle}
          dangerouslySetInnerHTML={{ __html: data.content }}
        />
      </Container>
    </section>
  );
}
