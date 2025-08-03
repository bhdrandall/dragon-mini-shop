import Link from 'next/link';
import { Montserrat } from "next/font/google";
import ProfileImage from '@/components/ProfileImage';

const montserrat = Montserrat({ subsets: ["latin"], weight: ["700"] });

export default function Home() {
  return (
    <section className="w-full min-h-screen bg-background text-foreground px-4 py-20">
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Left Column - Profile */}
        <div className="md:w-1/3 flex flex-col items-center md:items-end text-center md:text-right">
          <ProfileImage />
          <h1 className={`${montserrat.className} text-4xl font-bold bg-gradient-to-r from-primary to-primary/90 dark:from-orange-500 dark:to-orange-600 bg-clip-text text-transparent`}>
            Benjamin Randall
          </h1>
          <p className="text-primary dark:text-orange-500 font-medium mt-2">Full-Stack Developer</p>
        </div>
        
        {/* Right Column - Content */}
        <div className="md:w-2/3 space-y-6">
          <p className="text-foreground/90 text-lg leading-relaxed">
            I&apos;m a passionate software engineer with expertise in building modern web applications. With expertise across the entire development stack, I bring ideas to life through clean, maintainable code and 
            thoughtful user experiences.
          </p>
          
          <p className="text-foreground/80 leading-relaxed">
            My approach combines technical excellence with creative problem-solving, always keeping the end user in mind. 
            I&apos;m currently working as a Senior Software Engineer at smartimpact, and methodologies to stay at the forefront of web development.
          </p>
          
          <div className="flex flex-wrap gap-4 pt-4">
            <Link 
              href="/about" 
              className="px-6 py-2.5 rounded-lg bg-gradient-to-r from-primary to-primary/90 dark:from-orange-500 dark:to-orange-600 text-primary-foreground font-medium hover:opacity-90 transition-opacity duration-200"
            >
              Learn More About Me
            </Link>
            <Link 
              href="/contact" 
              className="px-6 py-2.5 rounded-lg border border-border text-foreground font-medium hover:bg-accent hover:text-accent-foreground transition-colors duration-200"
            >
              Get In Touch
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}