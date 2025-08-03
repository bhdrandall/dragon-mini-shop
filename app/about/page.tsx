import Link from 'next/link';
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({ subsets: ["latin"], weight: ["700"] });

export default function About() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-indigo-900 to-purple-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className={`${montserrat.className} text-4xl md:text-5xl font-bold mb-6`}>
            Our Story
          </h1>
          <p className="text-xl text-indigo-100 max-w-3xl mx-auto">
            Bringing tabletop worlds to life, one mini at a time
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="md:w-1/3">
                <div className="bg-gray-200 dark:bg-gray-700 rounded-xl aspect-square relative overflow-hidden">
                  {/* Placeholder for workshop image */}
                </div>
              </div>
              <div className="md:w-2/3">
                <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
                <div className="space-y-4 text-gray-700 dark:text-gray-300">
                  <p>
                    At Dragon Miniatures, we believe that the best tabletop adventures are built on imagination, strategy, and most importantly, stunning miniatures that bring your games to life. What started as a passion project in a small home workshop has grown into a dedicated studio where we combine traditional craftsmanship with cutting-edge 3D printing technology.
                  </p>
                  <p>
                    Our mission is simple: to create the highest quality, most detailed miniatures and terrain that help you tell your stories and create unforgettable gaming experiences. Whether you&apos;re a Dungeon Master crafting the perfect encounter, a Warhammer enthusiast expanding your army, or a painter looking for your next masterpiece, we&apos;ve got something special for you.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Process</h2>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Design */}
            <div className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-md">
              <div className="w-16 h-16 bg-indigo-100 dark:bg-indigo-900 rounded-full flex items-center justify-center text-indigo-600 dark:text-indigo-300 text-2xl font-bold mb-4 mx-auto">
                1
              </div>
              <h3 className="text-xl font-bold text-center mb-3">Design</h3>
              <p className="text-gray-600 dark:text-gray-300 text-center">
                We carefully select and design each model for optimal detail and printability, often working with talented 3D artists to create unique pieces.
              </p>
            </div>
            
            {/* Printing */}
            <div className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-md">
              <div className="w-16 h-16 bg-indigo-100 dark:bg-indigo-900 rounded-full flex items-center justify-center text-indigo-600 dark:text-indigo-300 text-2xl font-bold mb-4 mx-auto">
                2
              </div>
              <h3 className="text-xl font-bold text-center mb-3">Printing</h3>
              <p className="text-gray-600 dark:text-gray-300 text-center">
                Using high-resolution resin 3D printers, we produce each miniature with exceptional detail and quality, ensuring every piece meets our high standards.
              </p>
            </div>
            
            {/* Finishing */}
            <div className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-md">
              <div className="w-16 h-16 bg-indigo-100 dark:bg-indigo-900 rounded-full flex items-center justify-center text-indigo-600 dark:text-indigo-300 text-2xl font-bold mb-4 mx-auto">
                3
              </div>
              <h3 className="text-xl font-bold text-center mb-3">Finishing</h3>
              <p className="text-gray-600 dark:text-gray-300 text-center">
                Each piece is carefully cleaned, cured, and inspected before being carefully packaged and shipped to your doorstep, ready for your tabletop adventures.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Meet the Team */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Meet the Team</h2>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Team Member 1 */}
            <div className="text-center">
              <div className="w-48 h-48 rounded-full overflow-hidden mx-auto mb-4 border-4 border-indigo-100 dark:border-indigo-900">
                {/* Placeholder for team member image */}
                <div className="w-full h-full bg-gray-200 dark:bg-gray-700"></div>
              </div>
              <h3 className="text-xl font-bold">Alex Turner</h3>
              <p className="text-indigo-600 dark:text-indigo-400 font-medium mb-2">Founder &amp; Lead Designer</p>
              <p className="text-gray-600 dark:text-gray-300">
                Tabletop gaming enthusiast and 3D printing expert with over a decade of experience in miniature design.
              </p>
            </div>
            
            {/* Team Member 2 */}
            <div className="text-center">
              <div className="w-48 h-48 rounded-full overflow-hidden mx-auto mb-4 border-4 border-indigo-100 dark:border-indigo-900">
                {/* Placeholder for team member image */}
                <div className="w-full h-full bg-gray-200 dark:bg-gray-700"></div>
              </div>
              <h3 className="text-xl font-bold">Jamie Chen</h3>
              <p className="text-indigo-600 dark:text-indigo-400 font-medium mb-2">Production Manager</p>
              <p className="text-gray-600 dark:text-gray-300">
                Ensures every miniature that leaves our workshop meets our exacting standards of quality and detail.
              </p>
            </div>
            
            {/* Team Member 3 */}
            <div className="text-center">
              <div className="w-48 h-48 rounded-full overflow-hidden mx-auto mb-4 border-4 border-indigo-100 dark:border-indigo-900">
                {/* Placeholder for team member image */}
                <div className="w-full h-full bg-gray-200 dark:bg-gray-700"></div>
              </div>
              <h3 className="text-xl font-bold">Morgan Lee</h3>
              <p className="text-indigo-600 dark:text-indigo-400 font-medium mb-2">Customer Experience</p>
              <p className="text-gray-600 dark:text-gray-300">
                Your go-to person for any questions about our products, orders, or custom requests.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-indigo-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Next Adventure?</h2>
          <p className="text-xl text-indigo-100 mb-8 max-w-2xl mx-auto">
            Browse our collection of premium 3D printed miniatures and terrain to bring your tabletop games to life.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              href="/shop" 
              className="px-8 py-3 bg-white text-indigo-700 font-bold rounded-lg hover:bg-gray-100 transition-colors duration-200"
            >
              Shop Now
            </Link>
            <Link 
              href="/contact" 
              className="px-8 py-3 border-2 border-white text-white font-bold rounded-lg hover:bg-white/10 transition-colors duration-200"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
