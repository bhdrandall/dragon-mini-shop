// Component type definitions for the database-driven component system

export interface BaseComponentData {
  id: string;
  type: string;
  order: number;
  isVisible: boolean;
}

// Hero Section Components
export interface HeroBannerData extends BaseComponentData {
  type: 'hero-banner';
  title: string;
  subtitle?: string;
  backgroundType: 'gradient' | 'image' | 'solid';
  backgroundValue: string; // CSS gradient, image URL, or color
  textAlign: 'left' | 'center' | 'right';
  buttons?: ButtonData[];
}

export interface ButtonData {
  text: string;
  href: string;
  variant: 'primary' | 'secondary' | 'outline';
  size: 'sm' | 'md' | 'lg';
}

// Feature/Card Components
export interface FeatureCardData extends BaseComponentData {
  type: 'feature-card';
  title: string;
  description: string;
  icon?: string; // Icon name or URL
  imageUrl?: string;
  backgroundColor?: string;
  textColor?: string;
  linkUrl?: string;
}

export interface FeatureGridData extends BaseComponentData {
  type: 'feature-grid';
  title?: string;
  subtitle?: string;
  columns: 1 | 2 | 3 | 4;
  cards: FeatureCardData[];
}

// Content Components
export interface TextBlockData extends BaseComponentData {
  type: 'text-block';
  content: string; // HTML or Markdown
  textAlign: 'left' | 'center' | 'right';
  maxWidth?: string;
  backgroundColor?: string;
  textColor?: string;
}

export interface ImageBlockData extends BaseComponentData {
  type: 'image-block';
  imageUrl: string;
  alt: string;
  caption?: string;
  width?: string;
  height?: string;
  objectFit: 'cover' | 'contain' | 'fill';
  alignment: 'left' | 'center' | 'right';
}

export interface ImageTextData extends BaseComponentData {
  type: 'image-text';
  imageUrl: string;
  alt: string;
  title: string;
  content: string;
  layout: 'image-left' | 'image-right' | 'image-top';
  imageWidth?: string;
}

// CTA Components
export interface CTABannerData extends BaseComponentData {
  type: 'cta-banner';
  title: string;
  subtitle?: string;
  backgroundColor: string;
  textColor: string;
  buttons: ButtonData[];
}

// Gallery Components
export interface GalleryData extends BaseComponentData {
  type: 'gallery';
  title?: string;
  images: {
    url: string;
    alt: string;
    caption?: string;
  }[];
  columns: 2 | 3 | 4;
  spacing: 'tight' | 'normal' | 'loose';
}

// Product Components
export interface ProductCardData extends BaseComponentData {
  type: 'product-card';
  productId: string;
  showPrice: boolean;
  showDescription: boolean;
  buttonText?: string;
}

export interface ProductGridData extends BaseComponentData {
  type: 'product-grid';
  title?: string;
  category?: string;
  limit?: number;
  columns: 2 | 3 | 4;
  showFilters: boolean;
}

// FAQ Components
export interface FAQItemData extends BaseComponentData {
  type: 'faq-item';
  question: string;
  answer: string;
  isExpanded?: boolean;
}

export interface FAQSectionData extends BaseComponentData {
  type: 'faq-section';
  title?: string;
  category?: string;
  items: FAQItemData[];
}

// Form Components
export interface ContactFormData extends BaseComponentData {
  type: 'contact-form';
  title?: string;
  fields: {
    name: string;
    type: 'text' | 'email' | 'textarea' | 'select';
    label: string;
    placeholder?: string;
    required: boolean;
    options?: string[]; // For select fields
  }[];
  submitText: string;
  successMessage: string;
}

// Blog Components
export interface BlogPostListData extends BaseComponentData {
  type: 'blog-post-list';
  title?: string;
  limit?: number;
  showExcerpt: boolean;
  showDate: boolean;
  showImage: boolean;
}

// Navigation Components
export interface BreadcrumbData extends BaseComponentData {
  type: 'breadcrumb';
  items: {
    label: string;
    href?: string;
  }[];
}

// Reviews Components
export interface ReviewData {
  customerName: string;
  rating: number; // 1-5 stars
  comment: string;
  avatarUrl?: string;
  productName?: string;
}

export interface ReviewsData extends BaseComponentData {
  type: 'reviews';
  title?: string;
  subtitle?: string;
  reviews: ReviewData[];
}

// Union type for all component data
export type ComponentData = 
  | HeroBannerData
  | FeatureCardData
  | FeatureGridData
  | TextBlockData
  | ImageBlockData
  | ImageTextData
  | CTABannerData
  | GalleryData
  | ProductCardData
  | ProductGridData
  | FAQItemData
  | FAQSectionData
  | ContactFormData
  | BlogPostListData
  | BreadcrumbData
  | ReviewsData;

// Section types
export interface SectionData {
  id: string;
  type: 'hero' | 'features' | 'content' | 'cta' | 'gallery' | 'products' | 'faq' | 'blog' | 'contact';
  order: number;
  isVisible: boolean;
  components: ComponentData[];
}

// Page structure
export interface PageData {
  id: string;
  slug: string;
  title: string;
  description?: string;
  isPublished: boolean;
  sections: SectionData[];
}

// Component registry for dynamic rendering
export const COMPONENT_TYPES = {
  'hero-banner': 'Hero Banner',
  'feature-card': 'Feature Card',
  'feature-grid': 'Feature Grid',
  'text-block': 'Text Block',
  'image-block': 'Image Block',
  'image-text': 'Image with Text',
  'cta-banner': 'Call to Action Banner',
  'gallery': 'Image Gallery',
  'product-card': 'Product Card',
  'product-grid': 'Product Grid',
  'faq-item': 'FAQ Item',
  'faq-section': 'FAQ Section',
  'contact-form': 'Contact Form',
  'blog-post-list': 'Blog Post List',
  'breadcrumb': 'Breadcrumb Navigation',
  'reviews': 'Customer Reviews'
} as const;

export const SECTION_TYPES = {
  'hero': 'Hero Section',
  'features': 'Features Section',
  'content': 'Content Section',
  'cta': 'Call to Action Section',
  'gallery': 'Gallery Section',
  'products': 'Products Section',
  'faq': 'FAQ Section',
  'blog': 'Blog Section',
  'contact': 'Contact Section'
} as const;
