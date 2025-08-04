import { PageData } from './component-types';

export const seedPages: Omit<PageData, 'id'>[] = [
  {
    slug: 'home',
    title: 'Dragon Miniatures 3D Printing Shop',
    description: 'Premium 3D printed miniatures and terrain for tabletop games like D&D, Warhammer, and more.',
    isPublished: true,
    sections: [
      {
        id: 'hero-section',
        type: 'hero',
        order: 1,
        isVisible: true,
        components: [
          {
            id: 'home-hero',
            type: 'hero-banner',
            order: 1,
            isVisible: true,
            title: 'Dragon Miniatures 3D Printing Shop',
            subtitle: 'Premium 3D printed miniatures and terrain for tabletop games like D&D, Warhammer, and more.',
            backgroundType: 'gradient',
            backgroundValue: 'linear-gradient(to right, #312e81, #581c87)',
            textAlign: 'center',
            buttons: []
          }
        ]
      },
      {
        id: 'features-section',
        type: 'features',
        order: 2,
        isVisible: true,
        components: [
          {
            id: 'features-grid',
            type: 'feature-grid',
            order: 1,
            isVisible: true,
            title: '',
            subtitle: '',
            columns: 3,
            cards: [
              {
                id: 'feature-1',
                type: 'feature-card',
                order: 1,
                isVisible: true,
                title: 'High Detail Prints',
                description: 'State-of-the-art resin printers for crisp, detailed miniatures every time.',
                backgroundColor: '#f9fafb',
                textColor: undefined
              },
              {
                id: 'feature-2',
                type: 'feature-card',
                order: 2,
                isVisible: true,
                title: 'Custom Orders',
                description: 'Get your unique character, monster, or terrain piece designed and printed to your specs.',
                backgroundColor: '#f9fafb',
                textColor: undefined
              },
              {
                id: 'feature-3',
                type: 'feature-card',
                order: 3,
                isVisible: true,
                title: 'Fast Shipping',
                description: 'Quick turnaround and secure packaging to get your minis to your table fast.',
                backgroundColor: '#f9fafb',
                textColor: undefined
              }
            ]
          }
        ]
      },
      {
        id: 'cta-section',
        type: 'cta',
        order: 3,
        isVisible: true,
        components: [
          {
            id: 'home-cta',
            type: 'cta-banner',
            order: 1,
            isVisible: true,
            title: 'Ready to Upgrade Your Game?',
            subtitle: 'Explore our shop for the latest miniatures, or request a custom order today!',
            backgroundColor: '#4338ca',
            textColor: '#ffffff',
            buttons: [
              {
                text: 'Shop Now',
                href: '/shop',
                variant: 'primary',
                size: 'lg'
              },
              {
                text: 'Custom Orders',
                href: '/custom-orders',
                variant: 'outline',
                size: 'lg'
              }
            ]
          }
        ]
      }
    ]
  },
  {
    slug: 'about',
    title: 'Our Story',
    description: 'Learn about Dragon Miniatures and our passion for bringing tabletop worlds to life.',
    isPublished: true,
    sections: [
      {
        id: 'about-hero',
        type: 'hero',
        order: 1,
        isVisible: true,
        components: [
          {
            id: 'about-hero-banner',
            type: 'hero-banner',
            order: 1,
            isVisible: true,
            title: 'Our Story',
            subtitle: 'Bringing tabletop worlds to life, one mini at a time',
            backgroundType: 'gradient',
            backgroundValue: 'linear-gradient(to right, #312e81, #581c87)',
            textAlign: 'center',
            buttons: []
          }
        ]
      },
      {
        id: 'about-content',
        type: 'content',
        order: 2,
        isVisible: true,
        components: [
          {
            id: 'mission-section',
            type: 'image-text',
            order: 1,
            isVisible: true,
            imageUrl: '/api/placeholder/400/400',
            alt: 'Dragon Miniatures Workshop',
            title: 'Our Mission',
            content: '<p>At Dragon Miniatures, we believe that every tabletop adventure deserves the highest quality miniatures and terrain. Founded by passionate gamers and makers, we combine cutting-edge 3D printing technology with artistic craftsmanship to bring your imagination to life.</p><p>Whether you\'re a dungeon master looking to surprise your players with a custom dragon, or a painter seeking the perfect miniature for your collection, we\'re here to make your tabletop dreams a reality.</p>',
            layout: 'image-left',
            imageWidth: '400px'
          },
          {
            id: 'values-section',
            type: 'text-block',
            order: 2,
            isVisible: true,
            content: '<h2>Our Values</h2><ul><li><strong>Quality First:</strong> Every miniature is printed with precision and attention to detail</li><li><strong>Customer Focus:</strong> Your satisfaction is our top priority</li><li><strong>Innovation:</strong> We constantly explore new techniques and materials</li><li><strong>Community:</strong> We\'re gamers too, and we understand what you need</li></ul>',
            textAlign: 'left',
            maxWidth: '800px'
          }
        ]
      }
    ]
  },
  {
    slug: 'shop',
    title: 'Shop Miniatures',
    description: 'Browse our collection of high-quality 3D printed miniatures and terrain.',
    isPublished: true,
    sections: [
      {
        id: 'shop-hero',
        type: 'hero',
        order: 1,
        isVisible: true,
        components: [
          {
            id: 'shop-hero-banner',
            type: 'hero-banner',
            order: 1,
            isVisible: true,
            title: 'Shop Miniatures',
            subtitle: 'Discover our collection of premium 3D printed miniatures and terrain',
            backgroundType: 'gradient',
            backgroundValue: 'linear-gradient(to right, #312e81, #581c87)',
            textAlign: 'center',
            buttons: []
          }
        ]
      },
      {
        id: 'shop-products',
        type: 'products',
        order: 2,
        isVisible: true,
        components: [
          {
            id: 'product-grid',
            type: 'product-grid',
            order: 1,
            isVisible: true,
            title: 'Featured Products',
            category: undefined,
            limit: 12,
            columns: 3,
            showFilters: true
          }
        ]
      }
    ]
  },
  {
    slug: 'contact',
    title: 'Contact Us',
    description: 'Get in touch with Dragon Miniatures for questions, custom orders, or support.',
    isPublished: true,
    sections: [
      {
        id: 'contact-hero',
        type: 'hero',
        order: 1,
        isVisible: true,
        components: [
          {
            id: 'contact-hero-banner',
            type: 'hero-banner',
            order: 1,
            isVisible: true,
            title: 'Contact Us',
            subtitle: 'Get in touch for questions, custom orders, or support',
            backgroundType: 'gradient',
            backgroundValue: 'linear-gradient(to right, #312e81, #581c87)',
            textAlign: 'center',
            buttons: []
          }
        ]
      },
      {
        id: 'contact-form-section',
        type: 'contact',
        order: 2,
        isVisible: true,
        components: [
          {
            id: 'main-contact-form',
            type: 'contact-form',
            order: 1,
            isVisible: true,
            title: 'Send us a message',
            fields: [
              {
                name: 'name',
                type: 'text',
                label: 'Your Name',
                placeholder: 'Enter your full name',
                required: true
              },
              {
                name: 'email',
                type: 'email',
                label: 'Email Address',
                placeholder: 'your.email@example.com',
                required: true
              },
              {
                name: 'subject',
                type: 'select',
                label: 'Subject',
                required: true,
                options: ['General Inquiry', 'Custom Order', 'Support', 'Wholesale']
              },
              {
                name: 'message',
                type: 'textarea',
                label: 'Message',
                placeholder: 'Tell us how we can help you...',
                required: true
              }
            ],
            submitText: 'Send Message',
            successMessage: 'Thank you for your message! We\'ll get back to you within 24 hours.'
          }
        ]
      }
    ]
  },
  {
    slug: 'faq',
    title: 'Frequently Asked Questions',
    description: 'Find answers to common questions about our 3D printing services and products.',
    isPublished: true,
    sections: [
      {
        id: 'faq-hero',
        type: 'hero',
        order: 1,
        isVisible: true,
        components: [
          {
            id: 'faq-hero-banner',
            type: 'hero-banner',
            order: 1,
            isVisible: true,
            title: 'Frequently Asked Questions',
            subtitle: 'Find answers to common questions about our services',
            backgroundType: 'gradient',
            backgroundValue: 'linear-gradient(to right, #312e81, #581c87)',
            textAlign: 'center',
            buttons: []
          }
        ]
      },
      {
        id: 'faq-content',
        type: 'faq',
        order: 2,
        isVisible: true,
        components: [
          {
            id: 'main-faq-section',
            type: 'faq-section',
            order: 1,
            isVisible: true,
            title: undefined,
            category: undefined,
            items: [
              {
                id: 'faq-1',
                type: 'faq-item',
                order: 1,
                isVisible: true,
                question: 'What materials do you use for printing?',
                answer: '<p>We use high-quality resin for our miniatures, which provides excellent detail and durability. For terrain pieces, we may use PLA or PETG depending on the size and requirements.</p>',
                isExpanded: false
              },
              {
                id: 'faq-2',
                type: 'faq-item',
                order: 2,
                isVisible: true,
                question: 'How long does shipping take?',
                answer: '<p>Standard shipping takes 3-5 business days within the US. International shipping varies by location but typically takes 7-14 business days.</p>',
                isExpanded: false
              },
              {
                id: 'faq-3',
                type: 'faq-item',
                order: 3,
                isVisible: true,
                question: 'Do you offer custom miniatures?',
                answer: '<p>Yes! We specialize in custom miniatures. You can provide us with artwork, descriptions, or even rough sketches, and our team will create a unique miniature just for you.</p>',
                isExpanded: false
              },
              {
                id: 'faq-4',
                type: 'faq-item',
                order: 4,
                isVisible: true,
                question: 'What scales do you print in?',
                answer: '<p>We primarily print in 28mm scale (standard for D&D and Pathfinder), but we can also print in 15mm, 32mm, and other scales upon request.</p>',
                isExpanded: false
              }
            ]
          }
        ]
      }
    ]
  }
];
