import { Montserrat } from "next/font/google";

const montserrat = Montserrat({ subsets: ["latin"], weight: ["700"] });

const posts = [
  {
    title: "Painting Tips: Getting Started with Miniatures",
    date: "2024-03-01",
    excerpt: "Learn the basics of painting your first miniatures, from priming to finishing touches.",
    slug: "painting-tips-getting-started"
  },
  {
    title: "Choosing the Right Resin for Your Prints",
    date: "2024-03-10",
    excerpt: "A guide to resin types and how they affect print quality and painting.",
    slug: "choosing-right-resin"
  },
  {
    title: "How 3D Printing is Changing Tabletop Gaming",
    date: "2024-03-20",
    excerpt: "Explore how affordable 3D printing is making custom miniatures accessible to everyone.",
    slug: "3d-printing-tabletop-gaming"
  }
];

export default function BlogPage() {
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
            {posts.map((post, index) => (
              <a
                key={index}
                href={`/blog/${post.slug}`}
                className="block bg-gray-50 dark:bg-gray-800 p-6 rounded-xl shadow hover:shadow-lg transition-shadow"
              >
                <h2 className="text-2xl font-bold mb-2 text-indigo-700 dark:text-indigo-300">{post.title}</h2>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">{new Date(post.date).toLocaleDateString()}</p>
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
