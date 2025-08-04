import React from 'react';
import { PageData, SectionData } from '@/lib/component-types';
import { ComponentRenderer } from './ComponentRenderer';

interface PageRendererProps {
  pageData: PageData;
}

interface SectionRendererProps {
  section: SectionData;
}

function SectionRenderer({ section }: SectionRendererProps) {
  if (!section.isVisible) return null;

  return (
    <div className={`page-section section-${section.type}`} data-section-id={section.id}>
      {section.components
        .filter(component => component.isVisible)
        .sort((a, b) => a.order - b.order)
        .map(component => (
          <ComponentRenderer key={component.id} component={component} />
        ))}
    </div>
  );
}

export function PageRenderer({ pageData }: PageRendererProps) {
  return (
    <div className="min-h-screen bg-background text-foreground" data-page-slug={pageData.slug}>
      {pageData.sections
        .filter(section => section.isVisible)
        .sort((a, b) => a.order - b.order)
        .map(section => (
          <SectionRenderer key={section.id} section={section} />
        ))}
    </div>
  );
}
