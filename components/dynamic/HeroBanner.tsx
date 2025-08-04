import React from 'react';
import Link from 'next/link';
import { Montserrat } from "next/font/google";
import { HeroBannerData, ButtonData } from '@/lib/component-types';

const montserrat = Montserrat({ subsets: ["latin"], weight: ["700"] });

interface HeroBannerProps {
  data: HeroBannerData;
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
    outline: "border-2 border-white text-white hover:bg-white/10"
  };

  const classes = `${baseClasses} ${sizeClasses[button.size]} ${variantClasses[button.variant]}`;

  return (
    <Link href={button.href} className={classes}>
      {button.text}
    </Link>
  );
}

export function HeroBanner({ data }: HeroBannerProps) {
  const getBackgroundStyle = () => {
    switch (data.backgroundType) {
      case 'gradient':
        return { background: data.backgroundValue };
      case 'image':
        return { 
          backgroundImage: `url(${data.backgroundValue})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        };
      case 'solid':
        return { backgroundColor: data.backgroundValue };
      default:
        return { background: 'linear-gradient(to right, #312e81, #581c87)' };
    }
  };

  const textAlignClass = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right'
  };

  return (
    <section 
      className="relative text-white py-20"
      style={getBackgroundStyle()}
    >
      <div className={`container mx-auto px-4 ${textAlignClass[data.textAlign]}`}>
        <h1 className={`${montserrat.className} text-4xl md:text-5xl font-bold mb-6`}>
          {data.title}
        </h1>
        {data.subtitle && (
          <p className="text-xl text-indigo-100 max-w-3xl mx-auto mb-8">
            {data.subtitle}
          </p>
        )}
        {data.buttons && data.buttons.length > 0 && (
          <div className="flex flex-wrap justify-center gap-4">
            {data.buttons.map((button, index) => (
              <Button key={index} button={button} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
