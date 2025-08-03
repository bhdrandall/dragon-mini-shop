import type { Metadata } from "next";
import { Inter, Montserrat } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from './providers';
import ThemeToggle from "@/components/ThemeToggle";
import SkipToContent from "@/components/SkipToContent";
import Link from "next/link";

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
  title: "Benjamin Randall - Senior Software Engineer",
  description: "Personal portfolio of Benjamin Randall, a Senior Software Engineer specializing in modern web development.",
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
              <Link 
                href="/" 
                className="text-2xl font-extrabold tracking-tight text-blue-700 dark:text-orange-500 drop-shadow-sm select-none hover:text-blue-900 dark:hover:text-orange-400 transition-colors duration-200 font-montserrat" 
                aria-label="Home"
              >
                Benjamin Randall
              </Link>
              <ul className="flex gap-6 text-base font-medium">
                <li>
                  <Link 
                    href="/about" 
                    className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-orange-400 transition-all duration-200 px-2 py-1 rounded focus:outline-none focus:ring-2 focus:ring-blue-300 dark:focus:ring-orange-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900 aria-[current=page]:text-blue-700 dark:aria-[current=page]:text-orange-400 aria-[current=page]:font-semibold"
                    aria-current={typeof window !== 'undefined' && window.location.pathname === '/about' ? 'page' : undefined}
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/contact" 
                    className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-orange-400 transition-all duration-200 px-2 py-1 rounded focus:outline-none focus:ring-2 focus:ring-blue-300 dark:focus:ring-orange-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900 aria-[current=page]:text-blue-700 dark:aria-[current=page]:text-orange-400 aria-[current=page]:font-semibold"
                    aria-current={typeof window !== 'undefined' && window.location.pathname === '/contact' ? 'page' : undefined}
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </nav>
          </header>
          
          <main id="main-content" className="flex flex-col items-center justify-center min-h-[80vh] px-2 sm:px-4 w-full transition-all duration-300 focus:outline-none" tabIndex={-1}>
            {children}
            <ThemeToggle />
          </main>
          
          <footer className="w-full bg-white/70 dark:bg-gray-900/70 backdrop-blur border-t border-indigo-100 dark:border-gray-800 py-3 text-center text-sm text-gray-500 dark:text-gray-400 font-medium tracking-wide shadow-inner sticky bottom-0 z-10 transition-colors duration-300">
            <div className="container mx-auto px-4">
              <div className="flex items-center justify-center gap-4">
                <span>© {new Date().getFullYear()} Benjamin Randall</span>
                <span className="text-gray-400">•</span>
                <a 
                  href="mailto:bhdrandall@gmail.com" 
                  className="text-indigo-600 dark:text-indigo-400 hover:underline transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-300 dark:focus:ring-indigo-600 focus:ring-offset-2 dark:focus:ring-offset-gray-900 rounded"
                >
                  Email
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
          </footer>
        </ThemeProvider>
      </body>
    </html>
  );
}
