import type { Metadata } from "next";
import { Inter, Montserrat } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from './providers';
import ThemeToggle from "@/components/ThemeToggle";
import SkipToContent from "@/components/SkipToContent";
import React from 'react';
import Link from 'next/link';

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter',
});

const montserrat = Montserrat({ 
  subsets: ["latin"], 
  weight: ["400", "500", "600", "700"],
  variable: '--font-montserrat',
});

export const metadata: Metadata = {
  title: "Dragon Miniatures - Premium 3D Printed Miniatures & Terrain",
  description: "High-quality 3D printed miniatures and terrain for tabletop gaming. Custom orders available for your D&D, Warhammer, and other tabletop RPG needs.",
  keywords: ["3D printed miniatures", "tabletop gaming", "D&D miniatures", "Warhammer terrain", "custom miniatures", "3D printing service"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html 
      lang="en" 
      suppressHydrationWarning
      className={`${inter.variable} ${montserrat.variable}`}
      data-theme="light"
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link 
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" 
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen bg-white dark:bg-dark text-gray-900 dark:text-gray-100 transition-colors duration-200">
        <ThemeProvider>
          <SkipToContent />
          
          <header className="sticky top-0 z-30 w-full bg-white/80 dark:bg-dark/90 backdrop-blur shadow-md border-b border-indigo-100 dark:border-dark-light transition-all duration-300">
            <nav className="container mx-auto flex items-center justify-between py-4 px-4 md:px-0">
              <div className="flex items-center">
                <Link 
                  href="/" 
                  className="text-2xl font-extrabold tracking-tight text-indigo-700 dark:text-indigo-400 drop-shadow-sm select-none hover:text-indigo-900 dark:hover:text-indigo-300 transition-colors duration-200 font-montserrat flex items-center" 
                  aria-label="Home"
                >
                  <span className="text-3xl mr-1">🐉</span>
                  <span>Dragon Miniatures</span>
                </Link>
              </div>
              <ul className="hidden md:flex items-center gap-6 text-base font-medium">
                <li>
                  <Link 
                    href="/shop" 
                    className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all duration-200 px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-300 dark:focus:ring-indigo-600 focus:ring-offset-2 dark:focus:ring-offset-gray-900 aria-[current=page]:text-indigo-700 dark:aria-[current=page]:text-indigo-400 aria-[current=page]:font-semibold hover:bg-gray-100 dark:hover:bg-gray-800"
                    aria-current={typeof window !== 'undefined' && window.location.pathname.startsWith('/shop') ? 'page' : undefined}
                  >
                    Shop
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/custom-orders" 
                    className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all duration-200 px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-300 dark:focus:ring-indigo-600 focus:ring-offset-2 dark:focus:ring-offset-gray-900 aria-[current=page]:text-indigo-700 dark:aria-[current=page]:text-indigo-400 aria-[current=page]:font-semibold hover:bg-gray-100 dark:hover:bg-gray-800"
                    aria-current={typeof window !== 'undefined' && window.location.pathname === '/custom-orders' ? 'page' : undefined}
                  >
                    Custom Orders
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/blog" 
                    className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all duration-200 px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-300 dark:focus:ring-indigo-600 focus:ring-offset-2 dark:focus:ring-offset-gray-900 aria-[current=page]:text-indigo-700 dark:aria-[current=page]:text-indigo-400 aria-[current=page]:font-semibold hover:bg-gray-100 dark:hover:bg-gray-800"
                    aria-current={typeof window !== 'undefined' && window.location.pathname.startsWith('/blog') ? 'page' : undefined}
                  >
                    Blog
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/about" 
                    className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all duration-200 px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-300 dark:focus:ring-indigo-600 focus:ring-offset-2 dark:focus:ring-offset-gray-900 aria-[current=page]:text-indigo-700 dark:aria-[current=page]:text-indigo-400 aria-[current=page]:font-semibold hover:bg-gray-100 dark:hover:bg-gray-800"
                    aria-current={typeof window !== 'undefined' && window.location.pathname === '/about' ? 'page' : undefined}
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/faq" 
                    className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all duration-200 px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-300 dark:focus:ring-indigo-600 focus:ring-offset-2 dark:focus:ring-offset-gray-900 aria-[current=page]:text-indigo-700 dark:aria-[current=page]:text-indigo-400 aria-[current=page]:font-semibold hover:bg-gray-100 dark:hover:bg-gray-800"
                    aria-current={typeof window !== 'undefined' && window.location.pathname === '/faq' ? 'page' : undefined}
                  >
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/contact" 
                    className="ml-4 inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors duration-200"
                  >
                    Contact Us
                  </Link>
                </li>
              </ul>
            </nav>
          </header>
          
          <main id="main-content" className="flex flex-col items-center justify-center min-h-[80vh] px-2 sm:px-4 w-full transition-all duration-300 focus:outline-none" tabIndex={-1}>
            {children}
            <ThemeToggle />
          </main>
          
          <footer className="w-full bg-white/70 dark:bg-gray-900/70 backdrop-blur border-t border-indigo-100 dark:border-gray-800 py-8 text-center text-sm text-gray-500 dark:text-gray-400 font-medium tracking-wide shadow-inner transition-colors duration-300">
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-left mb-8">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Shop</h3>
                  <ul className="space-y-2">
                    <li><Link href="/shop/miniatures" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Miniatures</Link></li>
                    <li><Link href="/shop/terrain" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Terrain</Link></li>
                    <li><Link href="/shop/warhammer" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Warhammer</Link></li>
                    <li><Link href="/shop/bundles" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Bundles</Link></li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Support</h3>
                  <ul className="space-y-2">
                    <li><Link href="/faq" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">FAQs</Link></li>
                    <li><Link href="/shipping" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Shipping & Returns</Link></li>
                    <li><Link href="/privacy" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Privacy Policy</Link></li>
                    <li><Link href="/terms" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Terms of Service</Link></li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Company</h3>
                  <ul className="space-y-2">
                    <li><Link href="/about" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">About Us</Link></li>
                    <li><Link href="/blog" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Blog</Link></li>
                    <li><Link href="/custom-orders" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Custom Orders</Link></li>
                    <li><Link href="/contact" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Contact Us</Link></li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Connect With Us</h3>
                  <div className="flex space-x-4 mb-4">
                    <a href="#" className="text-gray-500 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                      <span className="sr-only">Facebook</span>
                      <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                      </svg>
                    </a>
                    <a href="#" className="text-gray-500 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                      <span className="sr-only">Instagram</span>
                      <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.415-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.976.045-1.505.207-1.858.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.976.207 1.505.344 1.858.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                      </svg>
                    </a>
                    <a href="#" className="text-gray-500 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                      <span className="sr-only">Twitter</span>
                      <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                      </svg>
                    </a>
                    <a href="#" className="text-gray-500 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                      <span className="sr-only">Discord</span>
                      <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M20.317 4.37a19.791 19.791 0 00-4.885-1.515.074.074 0 00-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 00-5.487 0 12.64 12.64 0 00-.617-1.25.077.077 0 00-.079-.037A19.736 19.736 0 003.677 4.37a.07.07 0 00-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 00.031.057 19.9 19.9 0 005.993 3.03.078.078 0 00.084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 00-.041-.106 13.107 13.107 0 01-1.872-.892.077.077 0 01-.008-.128 10.2 10.2 0 00.372-.292.074.074 0 01.077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 01.078.01c.12.098.246.198.373.292a.077.077 0 01-.006.127 12.299 12.299 0 01-1.873.892.077.077 0 00-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 00.084.028 19.839 19.839 0 006.002-3.03.077.077 0 00.032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 00-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.942-2.419 2.157-2.419 1.21 0 2.176 1.09 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.943-2.419 2.157-2.419 1.21 0 2.176 1.09 2.157 2.42 0 1.333-.951 2.418-2.157 2.418z" />
                      </svg>
                    </a>
                  </div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Join our community for the latest updates and exclusive offers.
                  </p>
                </div>
              </div>
              <div className="border-t border-gray-200 dark:border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center">
                <div className="flex items-center justify-center md:justify-start mb-4 md:mb-0">
                  <span className="text-2xl mr-2">🐉</span>
                  <span className="font-bold text-gray-900 dark:text-white">Dragon Miniatures</span>
                </div>
                <div className="flex items-center space-x-6">
                  <span>© {new Date().getFullYear()} Dragon Miniatures. All rights reserved.</span>
                  <a 
                    href="mailto:contact@dragonminiatures.com" 
                    className="text-indigo-600 dark:text-indigo-400 hover:underline transition-colors duration-200"
                  >
                    contact@dragonminiatures.com
                  </a>
                  <a 
                    href="https://github.com/bhdrandall" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-500 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-300 dark:focus:ring-indigo-600 focus:ring-offset-2 dark:focus:ring-offset-gray-900 rounded-full p-1"
                    aria-label="GitHub profile"
                  >
                    <span className="sr-only">GitHub</span>
                    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                    </svg>
                  </a>
                  <a 
                    href="https://www.linkedin.com/in/ben-randall-605ab5295/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-500 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-300 dark:focus:ring-indigo-600 focus:ring-offset-2 dark:focus:ring-offset-gray-900 rounded-full p-1"
                    aria-label="LinkedIn profile"
                  >
                    <span className="sr-only">LinkedIn</span>
                    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </footer>
        </ThemeProvider>
      </body>
    </html>
  );
}
