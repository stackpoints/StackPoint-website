import React from 'react';
import { LucideIcon } from 'lucide-react';

interface CardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  className?: string;
}

export function Card({ icon: Icon, title, description, className = '' }: CardProps) {
  return (
    <div className={`bg-[#404040]/60 backdrop-blur-sm p-8 rounded-lg border border-white/10 hover:border-[#F48024]/50 transition-all duration-300 ${className}`}>
      <Icon className="w-12 h-12 text-[#F48024] mb-4" />
      <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </div>
  );
}