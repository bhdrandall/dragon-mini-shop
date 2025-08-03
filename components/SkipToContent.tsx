'use client';

import { usePathname } from 'next/navigation';

export default function SkipToContent() {
  const pathname = usePathname();
  
  // Don't show on home page as it has minimal content
  if (pathname === '/') return null;

  return (
    <a
      href="#main-content"
      className="skip-to-content"
    >
      Skip to main content
    </a>
  );
}
