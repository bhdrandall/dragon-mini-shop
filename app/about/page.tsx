import Link from 'next/link';
import { Montserrat } from "next/font/google";
import Image from 'next/image';
const montserrat = Montserrat({ subsets: ["latin"], weight: ["700"] });

export default function About() {
  return (
    <section className="w-full bg-background text-foreground px-4 py-16">
      <div className="container mx-auto">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row items-center gap-8 mb-16">
          <div className="md:w-1/3 flex flex-col items-center md:items-end text-center md:text-right">
            <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-border shadow-lg mb-6 relative">
              <Image 
                src="/images/profile.jpg" 
                alt="Benjamin Randall" 
                className="object-cover"
                fill
                sizes="192px"
                priority
              />
            </div>
            <h1 className={`${montserrat.className} text-4xl font-bold bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent`}>
              About Me
            </h1>
            <p className="text-primary font-medium mt-2">Full-Stack Developer</p>
          </div>
          
          <div className="md:w-2/3 space-y-4">
            <p className="text-foreground/90 text-lg leading-relaxed">
              I&apos;m a passionate software engineer with expertise in building modern web applications. I thrive on learning new technologies and immersing myself in challenging projects, always striving for technical excellence and creative problem-solving.
            </p>
            <p className="text-foreground/80 leading-relaxed">
              My journey in technology has taken me through various roles, from building public-facing government systems to leading CMS migrations and developing large-scale React applications. I believe in clean, maintainable code and creating intuitive user experiences.
            </p>
          </div>
        </div>

        {/* Skills & Experience */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-2xl font-bold text-foreground mb-6 pb-2 border-b border-border">Skills & Expertise</h2>
            <div className="space-y-6">
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-primary mb-3">Programming Languages</h3>
                  <div className="space-y-3">
                    <div>
                      <div className="flex justify-between text-sm text-foreground/80 mb-1">
                        <span>C# (.NET 8, .NET Core, .NET Framework)</span>
                        <span className="text-primary font-medium">Expert</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div className="bg-primary h-2 rounded-full" style={{ width: '95%' }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-sm text-foreground/80 mb-1">
                        <span>TypeScript/JavaScript (ES6+)</span>
                        <span className="text-primary font-medium">Expert</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div className="bg-primary h-2 rounded-full" style={{ width: '90%' }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-sm text-foreground/80 mb-1">
                        <span>SQL (T-SQL, NoSQL)</span>
                        <span className="text-primary font-medium">Advanced</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div className="bg-primary/80 h-2 rounded-full" style={{ width: '85%' }}></div>
                      </div>
                    </div>
                  </div>
                </div>

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
