import React from 'react';
import Image from 'next/image';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  showText?: boolean;
}

export default function Logo({ size = 'md', showText = true }: LogoProps) {
  const sizes = {
    sm: { dimension: 40, text: 'text-xl' },
    md: { dimension: 48, text: 'text-2xl' },
    lg: { dimension: 64, text: 'text-4xl' },
  };

  const currentSize = sizes[size];

  return (
    <div className="flex items-center gap-2">
      {/* Logo Image */}
      <div className="relative" style={{ width: currentSize.dimension, height: currentSize.dimension }}>
        <Image
          src="/images/logodev.png"
          alt="Devhive Logo"
          fill
          className="object-contain"
          priority
        />
      </div>

      {/* Text */}
      {showText && (
        <span className={`${currentSize.text} font-bold bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent`}>
          Devhive
        </span>
      )}
    </div>
  );
}