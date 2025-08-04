import React from 'react';
import { ComponentData } from '@/lib/component-types';
import { HeroBanner } from './HeroBanner';
import { FeatureCard } from './FeatureCard';
import { FeatureGrid } from './FeatureGrid';
import { TextBlock } from './TextBlock';
import { ImageBlock } from './ImageBlock';
import { ImageText } from './ImageText';
import { CTABanner } from './CTABanner';
import { Gallery } from './Gallery';
import { ProductCard } from './ProductCard';
import { ProductGrid } from './ProductGrid';
import { FAQItem } from './FAQItem';
import { FAQSection } from './FAQSection';
import { ContactForm } from './ContactForm';
import { BlogPostList } from './BlogPostList';
import { Breadcrumb } from './Breadcrumb';

interface ComponentRendererProps {
  component: ComponentData;
}

export function ComponentRenderer({ component }: ComponentRendererProps) {
  if (!component.isVisible) return null;

  switch (component.type) {
    case 'hero-banner':
      return <HeroBanner data={component} />;
    case 'feature-card':
      return <FeatureCard data={component} />;
    case 'feature-grid':
      return <FeatureGrid data={component} />;
    case 'text-block':
      return <TextBlock data={component} />;
    case 'image-block':
      return <ImageBlock data={component} />;
    case 'image-text':
      return <ImageText data={component} />;
    case 'cta-banner':
      return <CTABanner data={component} />;
    case 'gallery':
      return <Gallery data={component} />;
    case 'product-card':
      return <ProductCard data={component} />;
    case 'product-grid':
      return <ProductGrid data={component} />;
    case 'faq-item':
      return <FAQItem data={component} />;
    case 'faq-section':
      return <FAQSection data={component} />;
    case 'contact-form':
      return <ContactForm data={component} />;
    case 'blog-post-list':
      return <BlogPostList data={component} />;
    case 'breadcrumb':
      return <Breadcrumb data={component} />;
    default:
      console.warn(`Unknown component type: ${component.type}`);
      return null;
  }
}
