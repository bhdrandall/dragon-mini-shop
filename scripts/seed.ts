import 'dotenv/config';
import { prisma } from '../lib/db';
import { seedPages } from '../lib/seed-data';

async function main() {
  console.log('🌱 Starting database seed...');

  // Clear existing data
  await prisma.component.deleteMany();
  await prisma.section.deleteMany();
  await prisma.page.deleteMany();
  await prisma.product.deleteMany();
  await prisma.blogPost.deleteMany();
  await prisma.fAQ.deleteMany();


  console.log('🗑️  Cleared existing data');

  // Seed pages
  for (const pageData of seedPages) {
    const page = await prisma.page.create({
      data: {
        slug: pageData.slug,
        title: pageData.title,
        description: pageData.description,
        isPublished: pageData.isPublished,
        sections: {
          create: pageData.sections.map(section => ({
            type: section.type,
            order: section.order,
            isVisible: section.isVisible,
            components: {
              create: section.components.map(component => ({
                type: component.type,
                order: component.order,
                isVisible: component.isVisible,
                data: component
              }))
            }
          }))
        }
      }
    });
    console.log(`📄 Created page: ${page.title} (${page.slug})`);
  }

  // Seed sample products
  const sampleProducts = [
    {
      name: 'Ancient Dragon Miniature',
      description: 'Highly detailed ancient red dragon perfect for boss encounters',
      price: 29.99,
      category: 'miniatures',
      imageUrl: '/api/placeholder/300/300',
      isAvailable: true
    },
    {
      name: 'Dungeon Terrain Set',
      description: 'Complete dungeon terrain set with walls, doors, and accessories',
      price: 49.99,
      category: 'terrain',
      imageUrl: '/api/placeholder/300/300',
      isAvailable: true
    },
    {
      name: 'Hero Party Pack',
      description: 'Set of 4 customizable hero miniatures',
      price: 19.99,
      category: 'miniatures',
      imageUrl: '/api/placeholder/300/300',
      isAvailable: true
    },
    {
      name: 'Custom Character Design',
      description: 'Fully custom miniature designed from your specifications',
      price: 79.99,
      category: 'custom',
      imageUrl: '/api/placeholder/300/300',
      isAvailable: true
    }
  ];

  for (const productData of sampleProducts) {
    const product = await prisma.product.create({ data: productData });
    console.log(`🛍️  Created product: ${product.name}`);
  }

  // Seed sample blog posts
  const sampleBlogPosts = [
    {
      title: 'Getting Started with 3D Printed Miniatures',
      slug: 'getting-started-3d-printed-miniatures',
      content: '<p>Welcome to the world of 3D printed miniatures! In this guide, we\'ll cover everything you need to know...</p>',
      excerpt: 'A comprehensive guide for beginners entering the world of 3D printed miniatures.',
      imageUrl: '/api/placeholder/600/400',
      isPublished: true
    },
    {
      title: 'Painting Tips for Resin Miniatures',
      slug: 'painting-tips-resin-miniatures',
      content: '<p>Resin miniatures require special care when painting. Here are our top tips...</p>',
      excerpt: 'Expert tips and techniques for painting high-quality resin miniatures.',
      imageUrl: '/api/placeholder/600/400',
      isPublished: true
    },
    {
      title: 'Custom Miniature Design Process',
      slug: 'custom-miniature-design-process',
      content: '<p>Ever wondered how we create custom miniatures? Let\'s take you behind the scenes...</p>',
      excerpt: 'A behind-the-scenes look at our custom miniature design and creation process.',
      imageUrl: '/api/placeholder/600/400',
      isPublished: true
    }
  ];

  for (const postData of sampleBlogPosts) {
    const post = await prisma.blogPost.create({ data: postData });
    console.log(`📝 Created blog post: ${post.title}`);
  }

  // Seed sample FAQs
  const sampleFAQs = [
    {
      question: 'What materials do you use for printing?',
      answer: 'We use high-quality resin for our miniatures, which provides excellent detail and durability. For terrain pieces, we may use PLA or PETG depending on the size and requirements.',
      category: 'printing',
      order: 1
    },
    {
      question: 'How long does shipping take?',
      answer: 'Standard shipping takes 3-5 business days within the US. International shipping varies by location but typically takes 7-14 business days.',
      category: 'shipping',
      order: 2
    },
    {
      question: 'Do you offer custom miniatures?',
      answer: 'Yes! We specialize in custom miniatures. You can provide us with artwork, descriptions, or even rough sketches, and our team will create a unique miniature just for you.',
      category: 'orders',
      order: 3
    },
    {
      question: 'What scales do you print in?',
      answer: 'We primarily print in 28mm scale (standard for D&D and Pathfinder), but we can also print in 15mm, 32mm, and other scales upon request.',
      category: 'printing',
      order: 4
    }
  ];

  for (const faqData of sampleFAQs) {
    const faq = await prisma.fAQ.create({ data: faqData });
    console.log(`❓ Created FAQ: ${faq.question.substring(0, 50)}...`);
  }

  console.log('✅ Database seeded successfully!');
}

main()
  .catch((e) => {
    console.error('❌ Error seeding database:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
