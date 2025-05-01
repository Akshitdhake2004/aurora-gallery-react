
import React from 'react';
import { Star, Moon, Sun, Images } from 'lucide-react';
import { cn } from '@/lib/utils';

const Navbar = () => {
  return (
    <nav className="fixed w-full top-0 z-50 backdrop-blur-md bg-black/20 border-b border-white/10">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Star className="h-6 w-6 text-space-purple animate-pulse-gentle" />
          <h1 className="text-xl font-bold text-white">Cosmic Gallery</h1>
        </div>
        
        <div className="hidden md:flex items-center gap-8">
          <NavLink href="#galaxies" icon={<Moon className="h-4 w-4" />}>
            Galaxies
          </NavLink>
          <NavLink href="#northern-lights" icon={<Sun className="h-4 w-4" />}>
            Northern Lights
          </NavLink>
          <NavLink href="#deserts" icon={<Images className="h-4 w-4" />}>
            Mirror Deserts
          </NavLink>
        </div>
        
        <button className="glass-card px-4 py-2 rounded-full text-sm flex items-center gap-2 hover:bg-white/10 transition-colors">
          <Images className="h-4 w-4" />
          <span className="hidden md:inline">Explore</span>
        </button>
      </div>
    </nav>
  );
};

interface NavLinkProps {
  href: string;
  icon?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}

const NavLink = ({ href, icon, children, className }: NavLinkProps) => {
  return (
    <a
      href={href}
      className={cn(
        "text-sm text-white/80 hover:text-white flex items-center gap-2 transition-colors",
        className
      )}
    >
      {icon}
      <span>{children}</span>
    </a>
  );
};

export default Navbar;
