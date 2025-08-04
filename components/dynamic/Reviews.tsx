import React from 'react';
import { ReviewsData } from '@/lib/component-types';
import { Container } from './Container';

interface ReviewsProps {
  data: ReviewsData;
}

export function Reviews({ data }: ReviewsProps) {
  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900">
      <Container maxWidth="6xl">
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
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.reviews.map((review, index) => (
            <div 
              key={index}
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-200"
            >
              <div className="flex items-center mb-4">
                {review.avatarUrl && (
                  <img 
                    src={review.avatarUrl} 
                    alt={review.customerName}
                    className="w-12 h-12 rounded-full mr-4 object-cover"
                  />
                )}
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">
                    {review.customerName}
                  </h3>
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className={`w-4 h-4 ${
                          i < review.rating 
                            ? 'text-yellow-400' 
                            : 'text-gray-300 dark:text-gray-600'
                        }`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
              
              <blockquote className="text-gray-700 dark:text-gray-300 italic mb-4">
                "{review.comment}"
              </blockquote>
              
              {review.productName && (
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Purchased: {review.productName}
                </p>
              )}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
} 