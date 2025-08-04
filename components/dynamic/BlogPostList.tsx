import React from 'react';
import Link from 'next/link';
import { BlogPostListData } from '@/lib/component-types';
import { Container } from './Container';

interface BlogPostListProps {
  data: BlogPostListData;
}

export function BlogPostList({ data }: BlogPostListProps) {
  // Mock blog posts - in real implementation, this would fetch from database
  const mockPosts = Array.from({ length: data.limit || 3 }, (_, i) => ({
    id: `post-${i + 1}`,
    title: `Blog Post ${i + 1}`,
    slug: `blog-post-${i + 1}`,
    excerpt: 'This is a sample blog post excerpt that gives readers a preview of the content...',
    imageUrl: '/api/placeholder/400/250',
    createdAt: new Date(Date.now() - i * 24 * 60 * 60 * 1000).toISOString()
  }));

  return (
    <div className="py-12">
      <Container maxWidth="6xl">
        {data.title && (
          <h2 className="text-3xl font-bold mb-8 text-center text-gray-900 dark:text-white">
            {data.title}
          </h2>
        )}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mockPosts.map((post) => (
            <article key={post.id} className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
              {data.showImage && (
                <div className="aspect-video bg-gray-200 dark:bg-gray-700">
                  <div className="w-full h-full flex items-center justify-center text-gray-500">
                    Blog Image
                  </div>
                </div>
              )}
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                  <Link href={`/blog/${post.slug}`} className="hover:text-indigo-600 dark:hover:text-indigo-400">
                    {post.title}
                  </Link>
                </h3>
                {data.showDate && (
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">
                    {new Date(post.createdAt).toLocaleDateString()}
                  </p>
                )}
                {data.showExcerpt && (
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {post.excerpt}
                  </p>
                )}
                <Link 
                  href={`/blog/${post.slug}`}
                  className="text-indigo-600 dark:text-indigo-400 hover:underline"
                >
                  Read More →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </div>
  );
}
