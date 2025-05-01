
import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import ImageModal from './ImageModal';
import { Separator } from '@/components/ui/separator';
import { motion } from 'framer-motion';

interface GalleryProps {
  title: string;
  description: string;
  images: ImageType[];
  id: string;
}

export interface ImageType {
  id: string;
  src: string;
  alt: string;
  category: string;
}

const Gallery = ({ title, description, images, id }: GalleryProps) => {
  const [selectedImage, setSelectedImage] = useState<ImageType | null>(null);

  return (
    <section id={id} className="py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-glow tracking-tight">
            <span className="bg-gradient-to-r from-white via-space-purple to-space-blue bg-clip-text text-transparent">
              {title}
            </span>
          </h2>
          <Separator className="w-24 h-1 bg-space-purple mb-6 rounded-full" />
          <p className="text-lg text-white/70 leading-relaxed">{description}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {images.map((image, index) => (
            <motion.div 
              key={image.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-xl aspect-square cursor-pointer glass-card transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(155,135,245,0.2)]"
              onClick={() => setSelectedImage(image)}
            >
              <img 
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <p className="text-white font-medium text-xl mb-1">{image.alt}</p>
                <p className="text-white/70 text-sm">{image.category}</p>
              </div>
              <div className="absolute top-4 right-4 bg-black/30 backdrop-blur-md text-xs text-white px-3 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {image.category}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      
      {selectedImage && (
        <ImageModal image={selectedImage} onClose={() => setSelectedImage(null)} />
      )}
    </section>
  );
};

export default Gallery;
