
import React, { useEffect } from 'react';
import { X } from 'lucide-react';
import { ImageType } from './Gallery';

interface ImageModalProps {
  image: ImageType;
  onClose: () => void;
}

const ImageModal = ({ image, onClose }: ImageModalProps) => {
  useEffect(() => {
    // Prevent scrolling when modal is open
    document.body.style.overflow = 'hidden';
    
    // Add escape key listener
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    
    return () => {
      // Restore scrolling when modal is closed
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleEsc);
    };
  }, [onClose]);

  return (
    <div 
      className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 md:p-10"
      onClick={onClose}
    >
      <div 
        className="relative max-w-7xl max-h-[90vh] w-full"
        onClick={e => e.stopPropagation()}
      >
        <button 
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/50 hover:bg-black/80 transition-colors"
          onClick={onClose}
        >
          <X className="h-6 w-6" />
        </button>
        
        <div className="w-full h-full flex flex-col md:flex-row glass-card p-4 md:p-6 rounded-xl">
          <div className="flex-1 overflow-hidden rounded-lg">
            <img 
              src={image.src} 
              alt={image.alt} 
              className="w-full h-full object-contain"
            />
          </div>
          
          <div className="w-full md:w-64 pt-4 md:pt-0 md:pl-6">
            <h3 className="text-xl font-bold mb-2">{image.alt}</h3>
            <p className="text-white/60 text-sm mb-4">Category: {image.category}</p>
            <p className="text-white/80">
              Captured with precision and care, this stunning {image.category.toLowerCase()} 
              image showcases the incredible beauty of our universe.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageModal;
