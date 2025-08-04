import type { Metadata } from "next";
import { Inter, Montserrat } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from './providers';
import ThemeToggle from "@/components/ThemeToggle";
import SkipToContent from "@/components/SkipToContent";
import React from 'react';
import Link from 'next/link';
import { FaInstagram, FaEtsy, FaYoutube } from 'react-icons/fa';

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
                    <a href="https://www.instagram.com/welshdragonminis/" target="_blank" rel="noopener" className="text-gray-500 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                      <span className="sr-only">Instagram</span>
                      <FaInstagram className="h-6 w-6" />
                    </a>
                    <a href="https://www.etsy.com/shop/DragonMiniShop/edit?ref=edit_trust_header" target="_blank" rel="noopener" className="text-gray-500 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                      <span className="sr-only">Etsy</span>
                      <FaEtsy className="h-6 w-6" />
                    </a>
                    <a href="https://www.youtube.com/@WelshDragonMinis" target="_blank" rel="noopener" className="text-gray-500 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                      <span className="sr-only">YouTube</span>
                      <FaYoutube className="h-6 w-6" />
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
                </div>
              </div>
            </div>
          </footer>
        </ThemeProvider>
      </body>
    </html>
  );
}
