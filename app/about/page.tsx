import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
import { PageRenderer } from '@/components/dynamic/PageRenderer';
import { notFound } from 'next/navigation';

export default async function About() {
  const pageData = await prisma.page.findFirst({ where: { slug: 'about' } });
  
  if (!pageData) {
    notFound();
  }

  return <PageRenderer pageData={pageData} />;
}
