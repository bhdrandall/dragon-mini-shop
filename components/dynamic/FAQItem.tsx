"use client";
import React, { useState } from 'react';
import { FAQItemData } from '@/lib/component-types';

interface FAQItemProps {
  data: FAQItemData;
}

export function FAQItem({ data }: FAQItemProps) {
  const [isExpanded, setIsExpanded] = useState(data.isExpanded || false);

  return (
    <div className="border border-gray-200 dark:border-gray-700 rounded-lg mb-4">
      <button
        className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
          {data.question}
        </h3>
        <span className="text-2xl text-gray-500">
          {isExpanded ? '−' : '+'}
        </span>
      </button>
      {isExpanded && (
        <div className="px-6 pb-4">
          <div 
            className="prose dark:prose-invert"
            dangerouslySetInnerHTML={{ __html: data.answer }}
          />
        </div>
      )}
    </div>
  );
}
