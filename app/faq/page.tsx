import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

import { Montserrat } from "next/font/google";

const montserrat = Montserrat({ subsets: ["latin"], weight: ["700"] });

const faqs = [
  {
    question: "What materials do you use for your miniatures?",
    answer: "We use high-quality resin for our miniatures, ensuring fine details and durability."
  },
  {
    question: "Can I request a custom miniature?",
    answer: "Absolutely! Visit our Custom Orders page to submit your request."
  },
  {
    question: "How long does shipping take?",
    answer: "Orders are typically processed and shipped within 3-5 business days. Custom orders may take longer."
  },
  {
    question: "Do you ship internationally?",
    answer: "Yes, we ship worldwide. Shipping rates and times vary by destination."
  },
  {
    question: "What if my miniature arrives damaged?",
    answer: "Contact us immediately and we'll replace your item free of charge."
  }
];

export default function FAQPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <section className="relative bg-gradient-to-r from-indigo-900 to-purple-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className={`${montserrat.className} text-4xl md:text-5xl font-bold mb-6`}>
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-indigo-100 max-w-3xl mx-auto">
            Find answers to common questions about our products, orders, and services.
          </p>
        </div>
      </section>
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="space-y-8">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl shadow">
                <h2 className="text-2xl font-bold mb-2 text-indigo-700 dark:text-indigo-300">{faq.question}</h2>
                <p className="text-gray-700 dark:text-gray-300">{faq.answer}</p>
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
