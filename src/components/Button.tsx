import React from 'react';
import { LucideIcon } from 'lucide-react';

interface ButtonProps {
  variant?: 'primary' | 'secondary';
  children: React.ReactNode;
  icon?: LucideIcon;
  href?: string;
  className?: string;
}

export function Button({ variant = 'primary', children, icon: Icon, href, className = '' }: ButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center px-6 py-2.5 rounded-md font-medium transition-all duration-200';
  const variants = {
    primary: 'bg-[#F48024] hover:bg-[#DA6F1C] text-white',
    secondary: 'border border-[#F48024] text-[#F48024] hover:bg-[#F48024]/10',
  };

  const Component = href ? 'a' : 'button';
  const props = href ? { href } : {};

  return (
    <Component
      {...props}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {Icon && <Icon className="w-5 h-5 mr-2" />}
      {children}
    </Component>
  );
}