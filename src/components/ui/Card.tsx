import React from 'react';
import { cn } from '@/lib/utils';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export default function Card({ children, className, hover = true }: CardProps) {
  return (
    <div 
      className={cn(
        'bg-white rounded-2xl p-8 shadow-lg border border-amber-100',
        hover && 'hover:shadow-xl transition transform hover:-translate-y-2',
        className
      )}
    >
      {children}
    </div>
  );
}