import { Montserrat } from "next/font/google";
import { prisma } from '@/lib/db';

const montserrat = Montserrat({ subsets: ["latin"], weight: ["700"] });

export default async function BlogPage() {
  const posts = await prisma.blogPost.findMany({
    where: { isPublished: true },
    orderBy: { createdAt: 'desc' },
    select: {
      title: true,
      slug: true,
      excerpt: true,
      createdAt: true,
    },
  });

  return (
    <div className="min-h-screen bg-background text-foreground">
      <section className="relative bg-gradient-to-r from-indigo-900 to-purple-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className={`${montserrat.className} text-4xl md:text-5xl font-bold mb-6`}>
            Blog &amp; Articles
          </h1>
          <p className="text-xl text-indigo-100 max-w-3xl mx-auto">
            Tips, stories, and news from the world of 3D printing and tabletop gaming.
          </p>
        </div>
      </section>
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="grid md:grid-cols-2 gap-8">
            {posts.map((post) => (
              <a
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="block bg-gray-50 dark:bg-gray-800 p-6 rounded-xl shadow hover:shadow-lg transition-shadow"
              >
                <h2 className="text-2xl font-bold mb-2 text-indigo-700 dark:text-indigo-300">{post.title}</h2>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">{new Date(post.createdAt).toLocaleDateString()}</p>
                <p className="text-gray-700 dark:text-gray-300 mb-4">{post.excerpt}</p>
                <span className="text-indigo-600 dark:text-indigo-400 font-semibold">Read More &rarr;</span>
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
