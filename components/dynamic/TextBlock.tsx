import React from 'react';
import { TextBlockData } from '@/lib/component-types';

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
    <div className="py-8">
      <div className="container mx-auto px-4">
        <div 
          className={`prose prose-lg dark:prose-invert mx-auto ${textAlignClass[data.textAlign]}`}
          style={containerStyle}
          dangerouslySetInnerHTML={{ __html: data.content }}
        />
      </div>
    </div>
  );
}
