import React from 'react';
import Link from 'next/link';
import { BreadcrumbData } from '@/lib/component-types';
import { Container } from './Container';

interface BreadcrumbProps {
  data: BreadcrumbData;
}

export function Breadcrumb({ data }: BreadcrumbProps) {
  return (
    <nav className="py-4">
      <Container maxWidth="6xl">
        <ol className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
          {data.items.map((item, index) => (
            <li key={index} className="flex items-center">
              {index > 0 && (
                <span className="mx-2 text-gray-400">/</span>
              )}
              {item.href ? (
                <Link 
                  href={item.href}
                  className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                >
                  {item.label}
                </Link>
              ) : (
                <span className="text-gray-900 dark:text-white font-medium">
                  {item.label}
                </span>
              )}
            </li>
          ))}
        </ol>
      </Container>
    </nav>
  );
}
