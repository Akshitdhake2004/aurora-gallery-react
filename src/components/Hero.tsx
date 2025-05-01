
import React from 'react';
import { Star, Cloud, ArrowDown } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Animated background stars */}
      <div className="absolute inset-0 z-0">
        {[...Array(50)].map((_, i) => (
          <Star
            key={i}
            className="absolute text-white animate-pulse-gentle"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              fontSize: `${Math.random() * 10 + 5}px`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${Math.random() * 3 + 2}s`,
              opacity: Math.random() * 0.7 + 0.3,
            }}
          />
        ))}
      </div>
      
      {/* Dynamic glow orbs */}
      <div className="absolute inset-0 z-0">
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full blur-3xl"
            style={{
              top: `${20 + Math.random() * 60}%`,
              left: `${20 + Math.random() * 60}%`,
              width: `${Math.random() * 300 + 200}px`,
              height: `${Math.random() * 300 + 200}px`,
              background: i % 2 === 0 ? 'rgba(155, 135, 245, 0.15)' : 'rgba(30, 174, 219, 0.1)',
              transform: 'translate(-50%, -50%)',
              animation: `float ${Math.random() * 10 + 10}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>
      
      {/* Hero content */}
      <div className="container mx-auto px-4 z-10 text-center">
        <div className="relative">
          <Cloud className="absolute -top-20 left-1/2 transform -translate-x-1/2 w-40 h-40 text-space-purple/20 animate-float" />
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight text-glow">
            <span className="bg-gradient-to-r from-white via-space-purple to-space-blue bg-clip-text text-transparent">Explore the Universe</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/80 max-w-2xl mx-auto mb-10 leading-relaxed">
            A stunning collection of cosmic wonders, northern lights and mirror deserts captured in perfect detail.
          </p>
          <button className="bg-space-purple hover:bg-space-deepPurple text-white px-8 py-4 rounded-full text-lg font-medium transition-all transform hover:scale-105 hover:shadow-[0_0_20px_rgba(155,135,245,0.5)] flex items-center gap-2 mx-auto">
            <span>Begin the Journey</span>
            <ArrowDown className="h-5 w-5 animate-bounce" />
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
