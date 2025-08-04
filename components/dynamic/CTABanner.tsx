import React from 'react';
import Link from 'next/link';
import { CTABannerData, ButtonData } from '@/lib/component-types';

interface CTABannerProps {
  data: CTABannerData;
}

function Button({ button }: { button: ButtonData }) {
  const baseClasses = "font-bold rounded-lg transition-colors duration-200";
  const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg"
  };
  
  const variantClasses = {
    primary: "bg-white text-indigo-700 hover:bg-gray-100",
    secondary: "bg-indigo-600 text-white hover:bg-indigo-700",
    outline: "border-2 border-current hover:bg-current/10"
  };

  const classes = `${baseClasses} ${sizeClasses[button.size]} ${variantClasses[button.variant]}`;

  return (
    <Link href={button.href} className={classes}>
      {button.text}
    </Link>
  );
}

export function CTABanner({ data }: CTABannerProps) {
  const bannerStyle = {
    backgroundColor: data.backgroundColor,
    color: data.textColor
  };

  return (
    <section className="py-16" style={bannerStyle}>
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">
          {data.title}
        </h2>
        {data.subtitle && (
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            {data.subtitle}
          </p>
        )}
        <div className="flex flex-wrap justify-center gap-4">
          {data.buttons.map((button, index) => (
            <Button key={index} button={button} />
          ))}
        </div>
      </div>
    </section>
  );
}
