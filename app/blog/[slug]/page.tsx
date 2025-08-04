import { prisma } from '@/lib/db';
import { notFound } from 'next/navigation';
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({ subsets: ["latin"], weight: ["700"] });

interface BlogPostPageProps {
  params: { slug: string };
}

export async function generateStaticParams() {
  const posts = await prisma.blogPost.findMany({
    where: { isPublished: true },
    select: { slug: true },
  });
  return posts.map(post => ({ slug: post.slug }));
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const post = await prisma.blogPost.findUnique({
    where: { slug: params.slug },
    select: {
      title: true,
      content: true,
      createdAt: true,
      excerpt: true,
    },
  });

  if (!post) return notFound();

  return (
    <div className="min-h-screen bg-background text-foreground">
      <section className="relative bg-gradient-to-r from-indigo-900 to-purple-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className={`${montserrat.className} text-4xl md:text-5xl font-bold mb-6`}>
            {post.title}
          </h1>
          <p className="text-xl text-indigo-100 max-w-3xl mx-auto mb-4">{post.excerpt}</p>
          <p className="text-sm text-indigo-200">{new Date(post.createdAt).toLocaleDateString()}</p>
        </div>
      </section>
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="max-w-3xl prose dark:prose-invert">
          <div dangerouslySetInnerHTML={{ __html: post.content }} />
          <div className="mt-12">
            <a
              href="/blog"
              className="inline-flex items-center px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg shadow transition-colors"
            >
              <span className="mr-2">←</span> Back to Blog
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
