import { Montserrat } from "next/font/google";
import { FaChevronDown } from "react-icons/fa";

const montserrat = Montserrat({ subsets: ["latin"], weight: ["700"] });

const faqs = [
  {
    question: "What scale are your miniatures?",
    answer: "Our miniatures are primarily designed for 28mm scale, which is the standard for most tabletop games like Dungeons & Dragons and Warhammer. We also offer some models in 32mm and 54mm scales. The scale of each product is clearly listed in its description."
  },
  {
    question: "Are the miniatures pre-painted?",
    answer: "Most of our miniatures come unpainted, allowing you to customize them to your preference. However, we do offer a professional painting service for select models. Look for the 'Pre-Painted' option in the product details if available."
  },
  {
    question: "What materials do you use for printing?",
    answer: "We use high-quality resin for all our 3D printed miniatures. Our standard material is a high-detail resin that captures fine details while remaining durable. For terrain pieces, we may use a more robust resin or FDM printing where appropriate."
  },
  {
    question: "Do you offer custom prints?",
    answer: "Yes! We love bringing custom designs to life. You can submit your 3D model files through our Custom Orders page, and our team will review them for printability. We can also work with you to design custom miniatures from scratch."
  },
  {
    question: "Do you sell STL files?",
    answer: "Yes, we offer digital STL files for many of our designs. These can be found in our 'Bundles & STL Packs' section. When you purchase an STL file, you'll receive a download link to access your files immediately after purchase."
  },
  {
    question: "What are your shipping options and delivery times?",
    answer: "We offer standard and express shipping options. Standard shipping typically takes 3-5 business days for processing and 5-10 business days for delivery. Express shipping reduces delivery time to 2-3 business days after processing. International shipping is available with varying delivery times."
  },
  {
    question: "What is your return policy?",
    answer: "We offer a 30-day money-back guarantee on all our products. If you're not satisfied with your purchase, you can return it in its original condition for a full refund. Custom prints and digital downloads are non-refundable unless defective."
  },
  {
    question: "How should I care for my resin miniatures?",
    answer: "Resin miniatures are durable but should be handled with care. Store them in a cool, dry place away from direct sunlight. When painting, prime them first with a suitable primer. For cleaning, use mild soap and water – avoid harsh chemicals that could damage the resin."
  },
  {
    question: "Do you offer bulk discounts for game stores or groups?",
    answer: "Absolutely! We offer special pricing for retailers, gaming groups, and event organizers. Please contact our wholesale department at wholesale@dragonminiatures.com for more information on bulk pricing and reseller programs."
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept all major credit cards (Visa, Mastercard, American Express, Discover), PayPal, and Apple Pay. For wholesale orders, we can also arrange bank transfers."
  }
];

export default function FAQPage() {
  return (
    <div className="min-h-screen bg-background text-foreground py-12">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className={`${montserrat.className} text-4xl md:text-5xl font-bold mb-4`}>
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Find answers to common questions about our products, ordering process, and more.
          </p>
        </div>

        {/* FAQ Section */}
        <div className="max-w-4xl mx-auto">
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden">
                <div className="p-6 cursor-pointer flex justify-between items-center">
                  <h3 className="text-lg font-semibold">{faq.question}</h3>
                  <FaChevronDown className="text-indigo-600 dark:text-indigo-400 transition-transform" />
                </div>
                <div className="px-6 pb-6 pt-0 text-gray-600 dark:text-gray-300">
                  <p>{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Contact CTA */}
          <div className="mt-16 bg-indigo-50 dark:bg-indigo-900/30 rounded-xl p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Still have questions?</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
              Our team is here to help! Contact us and we'll get back to you as soon as possible.
            </p>
            <a 
              href="/contact" 
              className="inline-block px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg transition-colors"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
