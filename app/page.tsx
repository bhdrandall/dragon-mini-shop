import { Montserrat } from "next/font/google";

const montserrat = Montserrat({ subsets: ["latin"], weight: ["700"] });

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-indigo-900 to-purple-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className={`${montserrat.className} text-4xl md:text-5xl font-bold mb-6`}>
            Dragon Miniatures 3D Printing Shop
          </h1>
          <p className="text-xl text-indigo-100 max-w-3xl mx-auto">
            Premium 3D printed miniatures and terrain for tabletop games like D&D, Warhammer, and more.
          </p>
        </div>
      </section>
      {/* Features Section */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl shadow text-center">
              <h2 className="text-2xl font-bold mb-2 text-indigo-700 dark:text-indigo-300">High Detail Prints</h2>
              <p className="text-gray-700 dark:text-gray-300">State-of-the-art resin printers for crisp, detailed miniatures every time.</p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl shadow text-center">
              <h2 className="text-2xl font-bold mb-2 text-indigo-700 dark:text-indigo-300">Custom Orders</h2>
              <p className="text-gray-700 dark:text-gray-300">Get your unique character, monster, or terrain piece designed and printed to your specs.</p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl shadow text-center">
              <h2 className="text-2xl font-bold mb-2 text-indigo-700 dark:text-indigo-300">Fast Shipping</h2>
              <p className="text-gray-700 dark:text-gray-300">Quick turnaround and secure packaging to get your minis to your table fast.</p>
            </div>
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="py-16 bg-indigo-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Upgrade Your Game?</h2>
          <p className="text-xl text-indigo-100 mb-8 max-w-2xl mx-auto">
            Explore our shop for the latest miniatures, or request a custom order today!
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="/shop" className="px-8 py-3 bg-white text-indigo-700 font-bold rounded-lg hover:bg-gray-100 transition-colors duration-200">Shop Now</a>
            <a href="/custom-orders" className="px-8 py-3 border-2 border-white text-white font-bold rounded-lg hover:bg-white/10 transition-colors duration-200">Custom Orders</a>
          </div>
        </div>
      </section>
    </div>
  );
}
