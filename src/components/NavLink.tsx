

interface NavLinkProps {
  href: string;
  label: string;
}

export function NavLink({ href, label }: NavLinkProps) {
  return (
    <a
      href={href}
      className="text-gray-400 hover:text-[#F48024] transition-colors duration-200"
    >
      {label}
    </a>
  );
}