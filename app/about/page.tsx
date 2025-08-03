import Link from 'next/link';
import { Montserrat } from "next/font/google";
import Image from 'next/image';

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
                    Our mission is simple: to create the highest quality, most detailed miniatures and terrain that help you tell your stories and create unforgettable gaming experiences. Whether you're a Dungeon Master crafting the perfect encounter, a Warhammer enthusiast expanding your army, or a painter looking for your next masterpiece, we've got something special for you.
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
              <p className="text-indigo-600 dark:text-indigo-400 font-medium mb-2">Founder & Lead Designer</p>
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
                <div>
                  <h3 className="text-lg font-semibold text-primary mb-3">Frameworks & Libraries</h3>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1.5 bg-accent text-accent-foreground text-sm rounded-full border border-border">React.js</span>
                    <span className="px-3 py-1.5 bg-accent text-accent-foreground text-sm rounded-full border border-border">Next.js</span>
                    <span className="px-3 py-1.5 bg-accent text-accent-foreground text-sm rounded-full border border-border">Redux Toolkit</span>
                    <span className="px-3 py-1.5 bg-accent text-accent-foreground text-sm rounded-full border border-border">ASP.NET Core</span>
                    <span className="px-3 py-1.5 bg-accent text-accent-foreground text-sm rounded-full border border-border">Entity Framework</span>
                    <span className="px-3 py-1.5 bg-accent text-accent-foreground text-sm rounded-full border border-border">Blazor</span>
                    <span className="px-3 py-1.5 bg-accent text-accent-foreground text-sm rounded-full border border-border">Node.js</span>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-primary mb-3">Technologies & Tools</h3>
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <h4 className="text-sm font-medium text-foreground/80 mb-2">Frontend</h4>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-2 py-1 bg-accent text-accent-foreground text-xs rounded-full">HTML5</span>
                        <span className="px-2 py-1 bg-accent text-accent-foreground text-xs rounded-full">CSS3/SCSS</span>
                        <span className="px-2 py-1 bg-accent text-accent-foreground text-xs rounded-full">Tailwind CSS</span>
                        <span className="px-2 py-1 bg-accent text-accent-foreground text-xs rounded-full">jQuery</span>
                      </div>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-foreground/80 mb-2">Backend</h4>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-2 py-1 bg-accent text-accent-foreground text-xs rounded-full">RESTful APIs</span>
                        <span className="px-2 py-1 bg-accent text-accent-foreground text-xs rounded-full">GraphQL</span>
                        <span className="px-2 py-1 bg-accent text-accent-foreground text-xs rounded-full">Microservices</span>
                        <span className="px-2 py-1 bg-accent text-accent-foreground text-xs rounded-full">Serverless</span>
                      </div>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-foreground/80 mb-2">DevOps</h4>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-2 py-1 bg-accent text-accent-foreground text-xs rounded-full">Docker</span>
                        <span className="px-2 py-1 bg-accent text-accent-foreground text-xs rounded-full">Kubernetes</span>
                        <span className="px-2 py-1 bg-accent text-accent-foreground text-xs rounded-full">Azure DevOps</span>
                        <span className="px-2 py-1 bg-accent text-accent-foreground text-xs rounded-full">GitHub Actions</span>
                      </div>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-foreground/80 mb-2">CMS</h4>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-2 py-1 bg-accent text-accent-foreground text-xs rounded-full">Umbraco</span>
                        <span className="px-2 py-1 bg-accent text-accent-foreground text-xs rounded-full">Kentico</span>
                        <span className="px-2 py-1 bg-accent text-accent-foreground text-xs rounded-full">Strapi</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-primary mb-2">Professional Skills</h3>
                <ul className="space-y-1 text-foreground/90">
                  <li className="flex items-center">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mr-2"></span>
                    Team Leadership & Mentoring
                  </li>
                  <li className="flex items-center">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mr-2"></span>
                    Agile/SCRUM Methodologies
                  </li>
                  <li className="flex items-center">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mr-2"></span>
                    UI/UX Design Collaboration
                  </li>
                  <li className="flex items-center">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mr-2"></span>
                    Technical Documentation
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-foreground pb-2 border-b-2 border-primary">Work Experience</h2>
              <a 
                href="/downloads/Benjamin_Randall_CV.pdf" 
                download
                className="flex items-center text-primary hover:text-primary/80 transition-colors"
                aria-label="Download CV"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
                Download Full CV
              </a>
            </div>
            <div className="space-y-8">
              <div className="relative pl-6 border-l-2 border-primary/50 group hover:border-primary transition-colors">
                <div className="absolute left-0 w-4 h-4 rounded-full bg-primary -translate-x-[9px] group-hover:bg-primary/90 transition-colors"></div>
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start">
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">Senior Software Engineer</h3>
                    <a href="https://smartimpact.co.uk/" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80 font-medium block">
                      smartimpact • 2025–Present
                    </a>
                  </div>
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-accent text-accent-foreground mt-1 sm:mt-0">
                    Remote
                  </span>
                </div>
                <div className="mt-2 space-y-2">
                  <p className="text-foreground/80 text-sm">
                    Leading the development of enterprise-level digital solutions for membership organizations and non-profits. Specializing in Umbraco CMS implementations, member portals, and learning management systems that drive engagement and operational efficiency.
                  </p>
                  <div className="flex flex-wrap gap-2 mt-3">
                    <span className="px-2 py-1 bg-accent text-accent-foreground text-xs rounded-full">Umbraco CMS</span>
                    <span className="px-2 py-1 bg-accent text-accent-foreground text-xs rounded-full">.NET 8</span>
                    <span className="px-2 py-1 bg-accent text-accent-foreground text-xs rounded-full">Dynamics 365</span>
                    <span className="px-2 py-1 bg-accent text-accent-foreground text-xs rounded-full">React/TypeScript</span>
                    <span className="px-2 py-1 bg-accent text-accent-foreground text-xs rounded-full">Azure</span>
                  </div>
                </div>
              </div>

              <div className="relative pl-6 border-l-2 border-primary/50 group hover:border-primary transition-colors">
                <div className="absolute left-0 w-4 h-4 rounded-full bg-primary -translate-x-[9px] group-hover:bg-primary/90 transition-colors"></div>
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start">
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">Full Stack Developer</h3>
                    <a href="https://i3-digital.co.uk" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80 font-medium block">
                      I3Digital • 2023–2024
                    </a>
                  </div>
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-accent text-accent-foreground mt-1 sm:mt-0">
                    Remote
                  </span>
                </div>
                <div className="mt-2 space-y-2">
                  <p className="text-foreground/80 text-sm">
                    Led the migration of 15+ client websites to Umbraco 13, improving performance by 40% and reducing maintenance overhead. Architected and implemented a reusable component library that decreased development time by 30%.
                  </p>
                  <div className="flex flex-wrap gap-2 mt-3">
                    <span className="px-2 py-1 bg-accent text-accent-foreground text-xs rounded-full">.NET 8</span>
                    <span className="px-2 py-1 bg-accent text-accent-foreground text-xs rounded-full">Umbraco 13</span>
                    <span className="px-2 py-1 bg-accent text-accent-foreground text-xs rounded-full">React/TypeScript</span>
                    <span className="px-2 py-1 bg-accent text-accent-foreground text-xs rounded-full">Azure DevOps</span>
                    <span className="px-2 py-1 bg-accent text-accent-foreground text-xs rounded-full">CI/CD</span>
                  </div>
                </div>
              </div>

              <div className="relative pl-6 border-l-2 border-primary/50 group hover:border-primary transition-colors">
                <div className="absolute left-0 w-4 h-4 rounded-full bg-primary -translate-x-[9px] group-hover:bg-primary/90 transition-colors"></div>
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start">
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">Full Stack Developer</h3>
                    <a href="https://selazar.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80 font-medium block">
                      Selazar • 2022–2023
                    </a>
                  </div>
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-accent text-accent-foreground mt-1 sm:mt-0">
                    Hybrid
                  </span>
                </div>
                <div className="mt-2 space-y-2">
                  <p className="text-foreground/80 text-sm">
                    Spearheaded the development of a new React frontend for the logistics platform, resulting in a 50% improvement in user engagement. Modernized legacy codebase, reducing technical debt by 60% and improving test coverage to 85%.
                  </p>
                  <div className="flex flex-wrap gap-2 mt-3">
                    <span className="px-2 py-1 bg-accent text-accent-foreground text-xs rounded-full">React 18</span>
                    <span className="px-2 py-1 bg-accent text-accent-foreground text-xs rounded-full">Redux Toolkit</span>
                    <span className="px-2 py-1 bg-accent text-accent-foreground text-xs rounded-full">.NET Core</span>
                    <span className="px-2 py-1 bg-accent text-accent-foreground text-xs rounded-full">MongoDB</span>
                    <span className="px-2 py-1 bg-accent text-accent-foreground text-xs rounded-full">Azure</span>
                  </div>
                </div>
              </div>

              <div className="relative pl-6 border-l-2 border-primary/50 group hover:border-primary transition-colors">
                <div className="absolute left-0 w-4 h-4 rounded-full bg-primary -translate-x-[9px] group-hover:bg-primary/90 transition-colors"></div>
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start">
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">Full Stack Analyst Software Developer</h3>
                    <a href="https://method4.co.uk" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80 font-medium block">
                      Method4 • 2018–2022
                    </a>
                  </div>
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-accent text-accent-foreground mt-1 sm:mt-0">
                    On-site
                  </span>
                </div>
                <div className="mt-2 space-y-2">
                  <p className="text-foreground/80 text-sm">
                    Led the development of critical public-facing systems for Welsh Government, handling 1M+ monthly users. Mentored 3 junior developers and introduced modern development practices that reduced production issues by 45%.
                  </p>
                  <div className="flex flex-wrap gap-2 mt-3">
                    <span className="px-2 py-1 bg-accent text-accent-foreground text-xs rounded-full">.NET Core</span>
                    <span className="px-2 py-1 bg-accent text-accent-foreground text-xs rounded-full">Angular</span>
                    <span className="px-2 py-1 bg-accent text-accent-foreground text-xs rounded-full">SQL Server</span>
                    <span className="px-2 py-1 bg-accent text-accent-foreground text-xs rounded-full">Azure</span>
                    <span className="px-2 py-1 bg-accent text-accent-foreground text-xs rounded-full">Agile/Scrum</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Education & Interests */}
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-bold text-foreground mb-6 pb-2 border-b border-border">Education</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-foreground">BSc (Hons) Computer Science</h3>
                <p className="text-primary">Aberystwyth University • 2:1</p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground">Level 3 BTEC in IT</h3>
                <p className="text-primary">Isle of Man College • Triple Distinction*</p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground">GCSEs</h3>
                <p className="text-primary">English: A, Maths & Science: B</p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-foreground mb-6 pb-2 border-b border-border">Interests</h2>
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-card p-4 rounded-lg shadow-sm border border-border">
                <h3 className="font-medium text-foreground mb-1">Chess</h3>
                <p className="text-sm text-foreground/70">Competitive online & lifelong player</p>
              </div>
              <div className="bg-card p-4 rounded-lg shadow-sm border border-border">
                <h3 className="font-medium text-foreground mb-1">Programming</h3>
                <p className="text-sm text-foreground/70">Side projects & creative coding</p>
              </div>
              <div className="bg-card p-4 rounded-lg shadow-sm border border-border">
                <h3 className="font-medium text-foreground mb-1">Guitar</h3>
                <p className="text-sm text-foreground/70">15+ years, electric & acoustic</p>
              </div>
              <div className="bg-card p-4 rounded-lg shadow-sm border border-border">
                <h3 className="font-medium text-foreground mb-1">Learning</h3>
                <p className="text-sm text-foreground/70">Tech, history, philosophy, mycology</p>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex flex-wrap gap-4 justify-center mt-16">
          <Link 
            href="/" 
            className="px-6 py-2.5 rounded-lg bg-gradient-to-r from-primary to-primary/80 text-primary-foreground font-medium hover:opacity-90 transition-opacity duration-200"
          >
            Back to Home
          </Link>
          <Link 
            href="/contact" 
            className="px-6 py-2.5 rounded-lg border border-border text-foreground font-medium hover:bg-accent hover:text-accent-foreground transition-colors duration-200"
          >
            Get In Touch
          </Link>
        </div>
      </div>
    </section>
  );
}
