
import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import ImageModal from './ImageModal';

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
    <section id={id} className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-glow">{title}</h2>
        <p className="text-lg text-white/70 max-w-3xl mb-10">{description}</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {images.map((image) => (
            <div 
              key={image.id}
              className="group relative overflow-hidden rounded-lg aspect-square cursor-pointer glass-card transition-all duration-300 hover:scale-[1.02]"
              onClick={() => setSelectedImage(image)}
            >
              <img 
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <p className="text-white font-medium text-lg">{image.alt}</p>
              </div>
            </div>
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
