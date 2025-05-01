
import React, { useState, useEffect } from 'react';
import { Star, Moon, Sun, Images, Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={cn(
      "fixed w-full top-0 z-50 transition-all duration-300",
      isScrolled 
        ? "backdrop-blur-xl bg-black/50 py-3" 
        : "bg-transparent py-5"
    )}>
      <div className="container mx-auto px-4 flex items-center justify-between">
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
        
        <div className="flex items-center gap-4">
          <button className="backdrop-blur-md bg-white/5 hover:bg-white/10 border border-white/10 px-4 py-2 rounded-full text-sm flex items-center gap-2 transition-all hover:shadow-[0_0_15px_rgba(155,135,245,0.3)]">
            <Images className="h-4 w-4 text-space-purple" />
            <span className="hidden md:inline">Explore</span>
          </button>
          
          <button 
            className="md:hidden backdrop-blur-md bg-white/5 p-2 rounded-full"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full backdrop-blur-xl bg-black/80 border-t border-white/10">
          <div className="container mx-auto px-4 py-6 flex flex-col space-y-4">
            <MobileNavLink href="#galaxies" icon={<Moon className="h-5 w-5" />}>
              Galaxies
            </MobileNavLink>
            <MobileNavLink href="#northern-lights" icon={<Sun className="h-5 w-5" />}>
              Northern Lights
            </MobileNavLink>
            <MobileNavLink href="#deserts" icon={<Images className="h-5 w-5" />}>
              Mirror Deserts
            </MobileNavLink>
          </div>
        </div>
      )}
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
        "text-sm text-white/80 hover:text-white flex items-center gap-2 transition-colors relative group",
        className
      )}
    >
      <span className="text-space-purple group-hover:animate-pulse-gentle">{icon}</span>
      <span>{children}</span>
      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-space-purple group-hover:w-full transition-all duration-300"></span>
    </a>
  );
};

const MobileNavLink = ({ href, icon, children }: NavLinkProps) => {
  return (
    <a
      href={href}
      className="flex items-center gap-3 text-white/80 hover:text-white p-2 transition-colors"
      onClick={() => {}}
    >
      <span className="text-space-purple">{icon}</span>
      <span className="text-base">{children}</span>
    </a>
  );
};

export default Navbar;
