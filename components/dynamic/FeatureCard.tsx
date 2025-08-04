import React from 'react';
import Link from 'next/link';
import { FeatureCardData } from '@/lib/component-types';

interface FeatureCardProps {
  data: FeatureCardData;
}

export function FeatureCard({ data }: FeatureCardProps) {
  const cardStyle = {
    color: data.textColor || undefined
  };

  const CardContent = () => (
    <div 
      className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl shadow text-center hover:shadow-lg transition-shadow duration-200"
      style={cardStyle}
    >
      {data.imageUrl && (
        <div className="mb-4">
          <img 
            src={data.imageUrl} 
            alt={data.title}
            className="w-16 h-16 mx-auto rounded-lg object-cover"
          />
        </div>
      )}
      {data.icon && !data.imageUrl && (
        <div className="mb-4">
          <div className="w-16 h-16 mx-auto bg-indigo-100 dark:bg-indigo-900 rounded-lg flex items-center justify-center">
            <span className="text-2xl">{data.icon}</span>
          </div>
        </div>
      )}
      <h3 className="text-2xl font-bold mb-2 text-indigo-700 dark:text-indigo-300">
        {data.title}
      </h3>
      <p className="text-gray-700 dark:text-gray-300">
        {data.description}
      </p>
    </div>
  );

  if (data.linkUrl) {
    return (
      <Link href={data.linkUrl} className="block">
        <CardContent />
      </Link>
    );
  }

  return <CardContent />;
}
