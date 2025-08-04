import { PageService } from '@/lib/page-service';
import { PageRenderer } from '@/components/dynamic/PageRenderer';
import { notFound } from 'next/navigation';

export default async function Home() {
  const pageData = await PageService.getPageBySlug('home');
  
  if (!pageData) {
    notFound();
  }

  return <PageRenderer pageData={pageData} />;
}
