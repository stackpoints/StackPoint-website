import { Twitter, MessageCircle, MessagesSquare } from 'lucide-react';
import { SocialLink } from './SocialLink';
import { NavLink } from './NavLink';

export function Footer() {
  const socialLinks = [
    {
      icon: Twitter,
      href: "https://twitter.com/StackPointsApp",
      label: "Twitter"
    },
    {
      icon: MessageCircle,
      href: "https://t.me/StackPointsApp",
      label: "Telegram"
    },
    {
      icon: MessagesSquare,
      href: "https://discord.gg/stackpointsapp",
      label: "Discord"
    }
  ];

  const navLinks = [
    { href: "#about", label: "About" },
    { href: "#tokenomics", label: "Tokenomics" },
    { href: "#rewards", label: "Rewards" },
    { href: "#roadmap", label: "Roadmap" }
  ];

  return (
    <footer className="bg-[#404040]/50 backdrop-blur-sm border-t border-white/10 py-8">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex flex-col items-center space-y-8">
          {/* Navigation Links */}
          <nav className="flex flex-wrap justify-center gap-6">
            {navLinks.map((link) => (
              <NavLink key={link.href} {...link} />
            ))}
          </nav>

          {/* Social Links */}
          <div className="flex justify-center space-x-6">
            {socialLinks.map((link) => (
              <SocialLink key={link.label} {...link} />
            ))}
          </div>

          {/* Copyright */}
          <div className="text-center text-sm text-gray-400">
            <p>© {new Date().getFullYear()} StackPoints. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}