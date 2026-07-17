import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

interface BreadcrumbProps {
  items: { label: string; href: string }[];
}

export default function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav className="flex items-center space-x-2 text-sm font-sans tracking-widest uppercase mb-8">
      {items.map((item, index) => (
        <div key={item.href} className="flex items-center">
          {index === items.length - 1 ? (
            <span className="text-luxury-accent font-medium">{item.label}</span>
          ) : (
            <>
              <Link href={item.href} className="text-luxury-text/50 hover:text-luxury-primary transition-colors">
                {item.label}
              </Link>
              <ChevronRight className="w-4 h-4 mx-2 text-luxury-border/50" />
            </>
          )}
        </div>
      ))}
    </nav>
  );
}
