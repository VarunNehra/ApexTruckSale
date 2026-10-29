import React from 'react';
import apexLogo from '../assets/images/Apex Truck Sale Chrome Logo.png';

interface ApexLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'hero';
}

export const ApexLogo: React.FC<ApexLogoProps> = ({
  className = '',
  size = 'md',
}) => {
  const heightClass =
    size === 'sm'
      ? 'h-10 sm:h-12'
      : size === 'md'
      ? 'h-14 sm:h-16'
      : size === 'lg'
      ? 'h-20 sm:h-24'
      : 'h-28 sm:h-36 md:h-44';

  return (
    <div className={`relative inline-flex items-center justify-center group ${className}`}>
      <img
        src={apexLogo}
        alt="Apex Truck Sale"
        className={`${heightClass} w-auto object-contain transition-transform duration-300 group-hover:scale-105 drop-shadow-[0_6px_20px_rgba(220,38,38,0.35)]`}
      />
    </div>
  );
};
