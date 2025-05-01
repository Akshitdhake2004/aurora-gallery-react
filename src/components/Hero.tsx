
import React from 'react';
import { Star, Cloud } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background stars */}
      <div className="absolute inset-0 z-0">
        {[...Array(20)].map((_, i) => (
          <Star
            key={i}
            className="absolute text-white opacity-70 animate-pulse-gentle"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              fontSize: `${Math.random() * 10 + 5}px`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${Math.random() * 3 + 2}s`,
            }}
          />
        ))}
      </div>
      
      {/* Hero content */}
      <div className="container mx-auto px-4 z-10 text-center">
        <div className="relative">
          <Cloud className="absolute -top-20 left-1/2 transform -translate-x-1/2 w-40 h-40 text-space-purple/20 animate-float" />
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-glow">
            Explore the Universe
          </h1>
          <p className="text-xl md:text-2xl text-white/80 max-w-2xl mx-auto mb-10">
            A stunning collection of cosmic wonders, northern lights and mirror deserts.
          </p>
          <button className="bg-space-purple hover:bg-space-deepPurple text-white px-8 py-4 rounded-full text-lg font-medium transition-colors">
            Begin the Journey
          </button>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-white/50 flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
