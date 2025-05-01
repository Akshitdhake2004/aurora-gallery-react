
import React, { useEffect } from 'react';
import { X, Download, Heart, Share } from 'lucide-react';
import { ImageType } from './Gallery';
import { motion, AnimatePresence } from 'framer-motion';

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
    <AnimatePresence>
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 md:p-10"
        onClick={onClose}
      >
        <motion.div 
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className="relative max-w-7xl max-h-[90vh] w-full"
          onClick={e => e.stopPropagation()}
        >
          <button 
            className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/50 hover:bg-black/80 transition-colors text-white/70 hover:text-white"
            onClick={onClose}
          >
            <X className="h-6 w-6" />
          </button>
          
          <div className="w-full h-full flex flex-col md:flex-row backdrop-blur-xl bg-white/5 border border-white/10 p-4 md:p-6 rounded-2xl shadow-[0_0_40px_rgba(0,0,0,0.5)]">
            <div className="flex-1 overflow-hidden rounded-lg">
              <img 
                src={image.src} 
                alt={image.alt} 
                className="w-full h-full object-contain"
              />
            </div>
            
            <div className="w-full md:w-80 pt-6 md:pt-0 md:pl-8">
              <h3 className="text-2xl font-bold mb-2 text-white">{image.alt}</h3>
              <p className="text-space-purple font-medium text-sm uppercase tracking-wide mb-4">
                {image.category}
              </p>
              
              <p className="text-white/80 text-base mb-8">
                Captured with precision and care, this stunning {image.category.toLowerCase()} 
                image showcases the incredible beauty of our universe.
              </p>
              
              <div className="flex gap-3 mb-6">
                <button className="flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 rounded-lg transition-colors">
                  <Heart className="h-4 w-4 text-space-purple" />
                  <span className="text-sm">Like</span>
                </button>
                <button className="flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 rounded-lg transition-colors">
                  <Share className="h-4 w-4 text-space-purple" />
                  <span className="text-sm">Share</span>
                </button>
                <button className="flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 rounded-lg transition-colors">
                  <Download className="h-4 w-4 text-space-purple" />
                  <span className="text-sm">Save</span>
                </button>
              </div>
              
              <div className="text-xs text-white/40">
                Cosmic Gallery © 2025
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ImageModal;
