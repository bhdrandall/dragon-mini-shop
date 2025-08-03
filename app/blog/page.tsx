import { Montserrat } from "next/font/google";
import Link from "next/link";
import Image from "next/image";

const montserrat = Montserrat({ subsets: ["latin"], weight: ["700"] });

// Sample blog posts data
const blogPosts = [
  {
    id: 1,
    title: "The Art of Painting Miniatures: A Beginner's Guide",
    excerpt: "Learn the essential techniques and tools needed to bring your miniatures to life with professional-looking paint jobs.",
    date: "May 15, 2023",
    readTime: "8 min read",
    category: "Painting Tips",
    image: "/images/blog/painting-miniatures.jpg",
    slug: "painting-miniatures-guide"
  },
  {
    id: 2,
    title: "Top 10 Must-Have Miniatures for D&D Campaigns",
    excerpt: "Discover the most versatile and useful miniatures that will enhance your Dungeons & Dragons gaming experience.",
    date: "April 28, 2023",
    readTime: "6 min read",
    category: "Gaming",
    image: "/images/blog/dnd-miniatures.jpg",
    slug: "top-10-dnd-miniatures"
  },
  {
    id: 3,
    title: "3D Printing Resin vs. FDM: Which is Better for Miniatures?",
    excerpt: "Compare the pros and cons of resin and FDM 3D printing technologies for creating highly detailed miniatures.",
    date: "April 10, 2023",
    readTime: "10 min read",
    category: "3D Printing",
    image: "/images/blog/resin-vs-fdm.jpg",
    slug: "resin-vs-fdm-miniatures"
  },
  {
    id: 4,
    title: "How to Build Stunning Terrain for Tabletop Games",
    excerpt: "Step-by-step guide to creating immersive and detailed terrain pieces for your tabletop gaming sessions.",
    date: "March 22, 2023",
    readTime: "12 min read",
    category: "Terrain Building",
    image: "/images/blog/terrain-building.jpg",
    slug: "terrain-building-guide"
  },
  {
    id: 5,
    title: "The Evolution of Warhammer Miniatures: A Visual History",
    excerpt: "Take a journey through the history of Warhammer miniatures and see how they've evolved over the decades.",
    date: "March 5, 2023",
    readTime: "15 min read",
    category: "Warhammer",
    image: "/images/blog/warhammer-evolution.jpg",
    slug: "warhammer-miniatures-history"
  },
  {
    id: 6,
    title: "Essential Tools for Miniature Assembly and Conversion",
    excerpt: "Discover the must-have tools that will make assembling and customizing your miniatures a breeze.",
    date: "February 18, 2023",
    readTime: "7 min read",
    category: "Tutorials",
    image: "/images/blog/miniature-tools.jpg",
    slug: "miniature-tools-guide"
  }
];

const categories = [
  { name: "All", count: 12 },
  { name: "Painting Tips", count: 4 },
  { name: "3D Printing", count: 3 },
  { name: "Gaming", count: 3 },
  { name: "Tutorials", count: 5 },
  { name: "Warhammer", count: 2 },
  { name: "Terrain Building", count: 3 },
];

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-indigo-900 to-purple-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className={`${montserrat.className} text-4xl md:text-5xl font-bold mb-6`}>
            Dragon Miniatures Blog
          </h1>
          <p className="text-xl text-indigo-100 max-w-3xl mx-auto">
            Tips, tutorials, and inspiration for miniature painting, 3D printing, and tabletop gaming
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Blog Posts */}
            <div className="lg:w-2/3">
              <div className="grid md:grid-cols-2 gap-8">
                {blogPosts.map((post) => (
                  <article key={post.id} className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
                    <div className="aspect-w-16 aspect-h-9 bg-gray-200 dark:bg-gray-700 relative">
                      <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                        <span>Image: {post.image.split('/').pop()}</span>
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-2">
                        <span>{post.date}</span>
                        <span className="mx-2">•</span>
                        <span>{post.readTime}</span>
                      </div>
                      <span className="inline-block px-3 py-1 text-xs font-semibold bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200 rounded-full mb-3">
                        {post.category}
                      </span>
                      <h2 className="text-xl font-bold mb-2 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                        <Link href={`/blog/${post.slug}`}>
                          {post.title}
                        </Link>
                      </h2>
                      <p className="text-gray-600 dark:text-gray-300 mb-4">
                        {post.excerpt}
                      </p>
                      <Link 
                        href={`/blog/${post.slug}`}
                        className="inline-flex items-center text-indigo-600 dark:text-indigo-400 font-medium hover:text-indigo-800 dark:hover:text-indigo-300 transition-colors"
                      >
                        Read more
                        <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>
                    </div>
                  </article>
                ))}
              </div>
              
              {/* Pagination */}
              <div className="mt-12 flex justify-center">
                <nav className="flex items-center space-x-1">
                  <button className="px-3 py-1 rounded-md bg-indigo-600 text-white">1</button>
                  <button className="px-3 py-1 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700">2</button>
                  <button className="px-3 py-1 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700">3</button>
                  <span className="px-2">...</span>
                  <button className="px-3 py-1 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700">Next</button>
                </nav>
              </div>
            </div>
            
            {/* Sidebar */}
            <div className="lg:w-1/3">
              {/* Search */}
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md mb-8">
                <h3 className="text-lg font-semibold mb-4">Search</h3>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search articles..."
                    className="w-full px-4 py-2 pl-10 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:text-white"
                  />
                  <svg className="w-5 h-5 text-gray-400 absolute left-3 top-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
              </div>
              
              {/* Categories */}
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md mb-8">
                <h3 className="text-lg font-semibold mb-4">Categories</h3>
                <ul className="space-y-2">
                  {categories.map((category, index) => (
                    <li key={index}>
                      <a 
                        href="#" 
                        className="flex justify-between items-center py-2 px-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                      >
                        <span>{category.name}</span>
                        <span className="bg-gray-100 dark:bg-gray-700 text-xs font-medium px-2 py-0.5 rounded-full">
                          {category.count}
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Popular Posts */}
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md">
                <h3 className="text-lg font-semibold mb-4">Popular Posts</h3>
                <div className="space-y-4">
                  {blogPosts.slice(0, 3).map((post) => (
                    <div key={`popular-${post.id}`} className="flex items-start space-x-3">
                      <div className="flex-shrink-0 w-16 h-16 bg-gray-200 dark:bg-gray-700 rounded-md overflow-hidden">
                        <div className="w-full h-full flex items-center justify-center text-gray-400 text-xs">
                          Image
                        </div>
                      </div>
                      <div>
                        <h4 className="font-medium text-sm hover:text-indigo-600 dark:hover:text-indigo-400">
                          <Link href={`/blog/${post.slug}`}>
                            {post.title.split(' ').slice(0, 5).join(' ')}...
                          </Link>
                        </h4>
                        <span className="text-xs text-gray-500 dark:text-gray-400">{post.date}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Newsletter CTA */}
      <section className="bg-indigo-700 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-4">Subscribe to Our Newsletter</h2>
          <p className="text-xl text-indigo-100 mb-8 max-w-3xl mx-auto">
            Get the latest tutorials, painting tips, and exclusive offers delivered to your inbox.
          </p>
          <div className="max-w-md mx-auto flex">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-grow px-4 py-3 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-gray-900"
            />
            <button className="bg-indigo-900 hover:bg-indigo-800 px-6 py-3 rounded-r-lg font-medium transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
