import React from 'react';
import { FAQSectionData } from '@/lib/component-types';
import { FAQItem } from './FAQItem';
import { Container } from './Container';

interface FAQSectionProps {
  data: FAQSectionData;
}

export function FAQSection({ data }: FAQSectionProps) {
  return (
    <div className="py-12">
      <Container maxWidth="6xl">
        {data.title && (
          <h2 className="text-3xl font-bold mb-8 text-center text-gray-900 dark:text-white">
            {data.title}
          </h2>
        )}
        <div className="space-y-4">
          {data.items.map((item, index) => (
            <FAQItem key={index} data={item} />
          ))}
        </div>
      </Container>
    </div>
  );
}
