import { LucideIcon } from 'lucide-react';

interface SocialLinkProps {
  icon: LucideIcon;
  href: string;
  label: string;
}

export function SocialLink({ icon: Icon, href, label }: SocialLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-gray-400 hover:text-[#F48024] transition-colors duration-200"
      aria-label={label}
    >
      <Icon className="w-6 h-6" />
    </a>
  );
}