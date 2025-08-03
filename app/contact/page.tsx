import Link from 'next/link';
import { Montserrat } from "next/font/google";
const montserrat = Montserrat({ subsets: ["latin"], weight: ["700"] });

export default function Contact() {
  return (
    <section className="w-full bg-background text-foreground px-4 py-16">
      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row items-center gap-8 mb-16">
          <div className="md:w-1/3 flex flex-col items-center md:items-end text-center md:text-right">
            <div className="w-40 h-40 rounded-full bg-gradient-to-r from-primary to-primary/80 flex items-center justify-center mb-6">
              <svg width="80" height="80" viewBox="0 0 24 24" fill="none" className="text-primary-foreground">
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" fill="currentColor"/>
              </svg>
            </div>
            <h1 className={`${montserrat.className} text-4xl font-bold bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent`}>
              Get In Touch
            </h1>
            <p className="text-primary font-medium mt-2">Let&apos;s work together</p>
          </div>
          
          <div className="md:w-2/3 space-y-6">
            <p className="text-foreground/80 text-lg leading-relaxed">
              <p className="text-foreground/70">I&apos;m always open to discussing new projects, creative ideas or opportunities to be part of your visions.</p> 
              Feel free to reach out through any of the following channels.
            </p>
            
            <div className="space-y-4">
              <div className="bg-card p-6 rounded-xl shadow-sm border border-border">
                <h2 className="text-xl font-bold text-foreground mb-4">Contact Information</h2>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent flex items-center justify-center text-primary">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                      </svg>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-sm font-medium text-foreground/70">Email</h3>
                      <a href="mailto:bhdrandall@gmail.com" className="text-primary hover:underline">bhdrandall@gmail.com</a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent flex items-center justify-center text-primary">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                      </svg>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-semibold text-foreground">Let&apos;s Connect</h3>
                      <a href="tel:07761866603" className="text-primary hover:underline">07761 866603</a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent flex items-center justify-center text-primary">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-sm font-medium text-foreground/70">Location</h3>
                      <p className="text-foreground/80">Cardiff, United Kingdom</p>
                    </div>
                  </div>
                  
                  <div className="pt-2">
                    <p className="text-sm text-foreground/60">References available on request.</p>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-4 pt-2">
                <Link 
                  href="/" 
                  className="px-6 py-2.5 rounded-lg border border-border text-foreground font-medium hover:bg-accent hover:text-accent-foreground transition-colors duration-200 flex items-center"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                  </svg>
                  Back to Home
                </Link>
                <Link 
                  href="/about" 
                  className="px-6 py-2.5 rounded-lg bg-gradient-to-r from-primary to-primary/80 text-primary-foreground font-medium hover:opacity-90 transition-opacity duration-200 flex items-center"
                >
                  <span>About Me</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
        
        {/* Social Links */}
        <div className="max-w-2xl mx-auto mt-12 pt-8 border-t border-border">
          <h2 className="text-xl font-bold text-center text-foreground mb-6">Connect With Me</h2>
          <div className="flex justify-center space-x-6">
            <a href="https://github.com/bhdrandall" target="_blank" rel="noopener noreferrer" className="text-foreground/70 hover:text-primary transition-colors duration-200">
              <span className="sr-only">GitHub</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.268 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.027 2.747-1.027.546 1.377.202 2.398.1 2.651.64.699 1.028 1.595 1.028 2.688 0 3.848-2.339 4.685-4.566 4.943.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
            </a>
            <a href="https://www.linkedin.com/in/ben-randall-605ab5295/" target="_blank" rel="noopener noreferrer" className="text-foreground/70 hover:text-primary transition-colors duration-200">
              <span className="sr-only">LinkedIn</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
