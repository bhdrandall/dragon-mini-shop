import { prisma } from './db';
import { PageData, SectionData, ComponentData } from './component-types';

export class PageService {
  // Get a page with all its sections and components
  static async getPageBySlug(slug: string): Promise<PageData | null> {
    const page = await prisma.page.findUnique({
      where: { slug, isPublished: true },
      include: {
        sections: {
          where: { isVisible: true },
          orderBy: { order: 'asc' },
          include: {
            components: {
              where: { isVisible: true },
              orderBy: { order: 'asc' }
            }
          }
        }
      }
    });

    if (!page) return null;

    return {
      id: page.id,
      slug: page.slug,
      title: page.title,
      description: page.description,
      isPublished: page.isPublished,
      sections: page.sections.map(section => ({
        id: section.id,
        type: section.type as any,
        order: section.order,
        isVisible: section.isVisible,
        components: section.components.map((component: any) => ({
          ...component.data as ComponentData,
          id: component.id,
          type: component.type,
          order: component.order,
          isVisible: component.isVisible
        }))
      }))
    };
  }

  // Get all published pages
  static async getAllPages(): Promise<PageData[]> {
    const pages = await prisma.page.findMany({
      where: { isPublished: true },
      include: {
        sections: {
          where: { isVisible: true },
          orderBy: { order: 'asc' },
          include: {
            components: {
              where: { isVisible: true },
              orderBy: { order: 'asc' }
            }
          }
        }
      },
      orderBy: { updatedAt: 'desc' }
    });

    return pages.map((page: any) => ({
      id: page.id,
      slug: page.slug,
      title: page.title,
      description: page.description,
      isPublished: page.isPublished,
      sections: page.sections.map(section => ({
        id: section.id,
        type: section.type as any,
        order: section.order,
        isVisible: section.isVisible,
        components: section.components.map((component: any) => ({
          ...component.data as ComponentData,
          id: component.id,
          type: component.type,
          order: component.order,
          isVisible: component.isVisible
        }))
      }))
    }));
  }

  // Create a new page
  static async createPage(pageData: Omit<PageData, 'id'>) {
    return await prisma.page.create({
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
  }

  // Update a page
  static async updatePage(id: string, pageData: Partial<PageData>) {
    return await prisma.page.update({
      where: { id },
      data: {
        title: pageData.title,
        description: pageData.description,
        isPublished: pageData.isPublished
      }
    });
  }

  // Delete a page
  static async deletePage(id: string) {
    return await prisma.page.delete({
      where: { id }
    });
  }
}

export class SectionService {
  // Add a section to a page
  static async addSection(pageId: string, sectionData: Omit<SectionData, 'id' | 'components'>) {
    return await prisma.section.create({
      data: {
        pageId,
        type: sectionData.type,
        order: sectionData.order,
        isVisible: sectionData.isVisible
      }
    });
  }

  // Update a section
  static async updateSection(id: string, sectionData: Partial<SectionData>) {
    return await prisma.section.update({
      where: { id },
      data: {
        type: sectionData.type,
        order: sectionData.order,
        isVisible: sectionData.isVisible
      }
    });
  }

  // Delete a section
  static async deleteSection(id: string) {
    return await prisma.section.delete({
      where: { id }
    });
  }
}

export class ComponentService {
  // Add a component to a section
  static async addComponent(sectionId: string, componentData: ComponentData) {
    const { id, ...data } = componentData;
    return await prisma.component.create({
      data: {
        sectionId,
        type: componentData.type,
        order: componentData.order,
        isVisible: componentData.isVisible,
        data: data
      }
    });
  }

  // Update a component
  static async updateComponent(id: string, componentData: Partial<ComponentData>) {
    const { id: componentId, ...data } = componentData;
    return await prisma.component.update({
      where: { id },
      data: {
        type: componentData.type,
        order: componentData.order,
        isVisible: componentData.isVisible,
        data: data
      }
    });
  }

  // Delete a component
  static async deleteComponent(id: string) {
    return await prisma.component.delete({
      where: { id }
    });
  }
}

// Additional services for other models
export class ProductService {
  static async getAllProducts() {
    return await prisma.product.findMany({
      where: { isAvailable: true },
      orderBy: { createdAt: 'desc' }
    });
  }

  static async getProductsByCategory(category: string) {
    return await prisma.product.findMany({
      where: { category, isAvailable: true },
      orderBy: { createdAt: 'desc' }
    });
  }

  static async getProductById(id: string) {
    return await prisma.product.findUnique({
      where: { id }
    });
  }
}

export class BlogService {
  static async getAllPosts() {
    return await prisma.blogPost.findMany({
      where: { isPublished: true },
      orderBy: { createdAt: 'desc' }
    });
  }

  static async getPostBySlug(slug: string) {
    return await prisma.blogPost.findUnique({
      where: { slug, isPublished: true }
    });
  }
}

export class FAQService {
  static async getAllFAQs() {
    return await prisma.fAQ.findMany({
      where: { isVisible: true },
      orderBy: { order: 'asc' }
    });
  }

  static async getFAQsByCategory(category: string) {
    return await prisma.fAQ.findMany({
      where: { category, isVisible: true },
      orderBy: { order: 'asc' }
    });
  }
}
