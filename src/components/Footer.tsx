
import React from 'react';
import { Star, Instagram, Twitter, Facebook } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

const Footer = () => {
  return (
    <footer className="relative border-t border-white/10 py-16 mt-10 overflow-hidden">
      {/* Background blur elements */}
      <div className="absolute bottom-0 left-1/4 w-64 h-64 rounded-full bg-space-purple/10 blur-3xl -z-10"></div>
      <div className="absolute top-0 right-1/4 w-72 h-72 rounded-full bg-space-blue/10 blur-3xl -z-10"></div>

      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center mb-12">
          <div className="flex items-center gap-2 mb-6">
            <Star className="h-8 w-8 text-space-purple" />
            <h2 className="text-2xl font-bold text-white tracking-tight">Cosmic Gallery</h2>
          </div>
          
          <p className="text-white/60 text-center max-w-md mb-8">
            Discover the beauty of our universe through stunning imagery of galaxies, northern lights, and mirror deserts.
          </p>
          
          <div className="flex items-center gap-6">
            <SocialLink href="#" icon={<Instagram className="h-5 w-5" />} />
            <SocialLink href="#" icon={<Twitter className="h-5 w-5" />} />
            <SocialLink href="#" icon={<Facebook className="h-5 w-5" />} />
          </div>
        </div>
        
        <Separator className="bg-white/10 my-8" />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h4 className="text-white font-medium mb-4">About Us</h4>
            <ul className="space-y-2">
              <FooterLink href="#">Our Mission</FooterLink>
              <FooterLink href="#">Photographers</FooterLink>
              <FooterLink href="#">Careers</FooterLink>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-medium mb-4">Resources</h4>
            <ul className="space-y-2">
              <FooterLink href="#">Help Center</FooterLink>
              <FooterLink href="#">License Info</FooterLink>
              <FooterLink href="#">Contact Us</FooterLink>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-medium mb-4">Legal</h4>
            <ul className="space-y-2">
              <FooterLink href="#">Privacy Policy</FooterLink>
              <FooterLink href="#">Terms of Service</FooterLink>
              <FooterLink href="#">Copyright</FooterLink>
            </ul>
          </div>
        </div>
        
        <div className="text-sm text-white/40 text-center mt-12">
          © 2025 Cosmic Gallery. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

const SocialLink = ({ href, icon }: { href: string, icon: React.ReactNode }) => {
  return (
    <a 
      href={href} 
      className="text-white/70 hover:text-white transition-colors p-2 hover:bg-white/5 rounded-full"
    >
      {icon}
    </a>
  );
};

const FooterLink = ({ href, children }: { href: string, children: React.ReactNode }) => {
  return (
    <li>
      <a href={href} className="text-white/60 hover:text-white text-sm transition-colors">
        {children}
      </a>
    </li>
  );
};

export default Footer;
