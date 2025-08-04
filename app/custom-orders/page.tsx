import { Montserrat } from "next/font/google";
import { FaUpload, FaRuler, FaPalette, FaDollarSign, FaClock, FaCheck } from "react-icons/fa";
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

const montserrat = Montserrat({ subsets: ["latin"], weight: ["700"] });

const features = [
  {
    icon: <FaUpload className="w-8 h-8 text-indigo-600" />,
    title: "Easy File Upload",
    description: "Simply upload your 3D model file or describe your idea in detail."
  },
  {
    icon: <FaRuler className="w-8 h-8 text-indigo-600" />,
    title: "Custom Sizing",
    description: "Get your miniatures printed in the exact scale you need for your game."
  },
  {
    icon: <FaPalette className="w-8 h-8 text-indigo-600" />,
    title: "Material Options",
    description: "Choose from various resin types to match your painting and durability needs."
  },
  {
    icon: <FaDollarSign className="w-8 h-8 text-indigo-600" />,
    title: "Competitive Pricing",
    description: "Get a free quote with no obligation before proceeding with your order."
  },
  {
    icon: <FaClock className="w-8 h-8 text-indigo-600" />,
    title: "Fast Turnaround",
    description: "Most custom orders are completed within 7-10 business days."
  },
  {
    icon: <FaCheck className="w-8 h-8 text-indigo-600" />,
    title: "Quality Guarantee",
    description: "We ensure every custom print meets our high standards for quality and detail."
  }
];

const faqs = [
  {
    question: "What file formats do you accept for custom prints?",
    answer: "We accept most common 3D file formats including .stl, .obj, and .3mf. For best results, we recommend using .stl files with proper wall thickness and manifold geometry."
  },
  {
    question: "Can you help me design a custom miniature?",
    answer: "Yes! Our team includes talented 3D modelers who can bring your character or concept to life. Additional design fees will apply based on the complexity of the model."
  },
  {
    question: "What&apos;s the maximum size for custom prints?",
    answer: "Our printers can accommodate models up to 200mm x 125mm x 200mm (LxWxH). For larger pieces, we can print in sections that you can assemble."
  },
  {
    question: "Do you offer bulk discounts for large orders?",
    answer: "Absolutely! We offer volume discounts for orders of 10+ identical models. Contact us directly for a custom quote on bulk orders."
  }
];

export default function CustomOrdersPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-indigo-900 to-purple-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className={`${montserrat.className} text-4xl md:text-5xl font-bold mb-6`}>
            Custom 3D Printed Miniatures &amp; Terrain
          </h1>
          <p className="text-xl text-indigo-100 max-w-3xl mx-auto">
            Bring your unique vision to life with our professional 3D printing services for tabletop gaming and collectibles.
          </p>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">How It Works</h2>
            <div className="w-24 h-1 bg-indigo-600 mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-indigo-100 dark:bg-indigo-900/30 rounded-full flex items-center justify-center text-indigo-600 dark:text-indigo-400 text-2xl font-bold mx-auto mb-4">1</div>
              <h3 className="text-xl font-semibold mb-2">Submit Your Request</h3>
              <p className="text-gray-600 dark:text-gray-300">Upload your 3D model or describe what you need in the form below.</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-indigo-100 dark:bg-indigo-900/30 rounded-full flex items-center justify-center text-indigo-600 dark:text-indigo-400 text-2xl font-bold mx-auto mb-4">2</div>
              <h3 className="text-xl font-semibold mb-2">Get a Quote</h3>
              <p className="text-gray-600 dark:text-gray-300">We&apos;ll review your request and provide a free quote within 24 hours.</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-indigo-100 dark:bg-indigo-900/30 rounded-full flex items-center justify-center text-indigo-600 dark:text-indigo-400 text-2xl font-bold mx-auto mb-4">3</div>
              <h3 className="text-xl font-semibold mb-2">Print &amp; Ship</h3>
              <p className="text-gray-600 dark:text-gray-300">Once approved, we&apos;ll print and ship your custom order.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why Choose Our Custom Service</h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              We combine cutting-edge 3D printing technology with expert craftsmanship to bring your ideas to life.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {features.map((feature, index) => (
              <div key={index} className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900/30 rounded-lg flex items-center justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Order Form */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
            <div className="p-8 md:p-10">
              <h2 className="text-2xl font-bold mb-6">Request a Custom Order</h2>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Full Name</label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:text-white"
                      placeholder="Your name"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Email</label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:text-white"
                      placeholder="your.email@example.com"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="project-type" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Project Type</label>
                  <select
                    id="project-type"
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:text-white"
                    required
                  >
                    <option value="">Select project type</option>
                    <option value="miniature">Custom Miniature</option>
                    <option value="terrain">Terrain Piece</option>
                    <option value="character">Character Model</option>
                    <option value="scenery">Scenery/Base</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="description" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Project Description</label>
                  <textarea
                    id="description"
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:text-white"
                    placeholder="Please describe your project in as much detail as possible..."
                    required
                  ></textarea>
                </div>
                
                <div className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">File Upload (Optional)</div>
                <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 dark:border-gray-600 border-dashed rounded-lg">
                  <div className="space-y-1 text-center">
                    <FaUpload className="mx-auto h-12 w-12 text-gray-400" />
                    <div className="flex text-sm text-gray-600 dark:text-gray-400">
                      <label className="relative cursor-pointer bg-white dark:bg-gray-800 rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none">
                        <span>Upload a file</span>
                        <input id="file-upload" name="file-upload" type="file" className="sr-only" />
                      </label>
                      <p className="pl-1">or drag and drop</p>
                    </div>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      STL, OBJ, 3MF up to 50MB
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="terms"
                      name="terms"
                      type="checkbox"
                      className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                      required
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label htmlFor="terms" className="font-medium text-gray-700 dark:text-gray-300">
                      I agree to the <Link href="/terms" className="text-indigo-600 hover:text-indigo-500">Terms of Service</Link> and <Link href="/privacy" className="text-indigo-600 hover:text-indigo-500">Privacy Policy</Link>
                    </label>
                  </div>
                </div>
                
                <div>
                  <button
                    type="submit"
                    className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Submit Request
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-600 dark:text-gray-300">
              Have questions? We&apos;ve got answers about our custom order process.
            </p>
          </div>
          
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{faq.question}</h3>
                <p className="mt-2 text-gray-600 dark:text-gray-300">{faq.answer}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Still have questions? We&apos;re here to help!
            </p>
            <a
              href="/contact"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
