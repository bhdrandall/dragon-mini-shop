'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function ProfileImage() {
  const [imageSrc, setImageSrc] = useState('/images/profile.jpg');
  const [altText, setAltText] = useState('Portrait of Benjamin Randall');

  const handleError = () => {
    setImageSrc('/images/placeholder-profile.jpg');
    setAltText('Placeholder profile image');
  };

  return (
    <div className="relative w-40 h-40 rounded-full overflow-hidden border-4 border-white shadow-lg mb-6 group">
      <Image 
        src={imageSrc}
        alt={altText}
        width={160}
        height={160}
        className="object-cover transition-transform duration-500 group-hover:scale-105"
        priority
        onError={handleError}
      />
      <div 
        className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" 
        aria-hidden="true"
      />
    </div>
  );
}
