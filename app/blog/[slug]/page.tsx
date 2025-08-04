import { prisma } from '@/lib/db';
import { notFound } from 'next/navigation';
import { Montserrat } from "next/font/google";
import Link from "next/link";

const montserrat = Montserrat({ subsets: ["latin"], weight: ["700"] });



export async function generateStaticParams() {
  const posts = await prisma.blogPost.findMany({
    where: { isPublished: true }
  });
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return posts.map((post: any) => ({ slug: post.slug }));
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default async function BlogPostPage(props: any) {
  const { params } = await props;
  const post = await prisma.blogPost.findUnique({
    where: { slug: params.slug }
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
            <Link
              href="/blog"
              className="inline-flex items-center px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg shadow transition-colors"
            >
              <span className="mr-2">←</span> Back to Blog
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
