import React from 'react';

interface HeroSectionProps {
  title: string;
  subtitle: string;
  backgroundImage?: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({ title, subtitle, backgroundImage }) => {
  return (
    <section 
      className="bg-blue-900 text-white py-16 md:py-24 relative overflow-hidden"
      style={backgroundImage ? { 
        backgroundImage: `linear-gradient(rgba(30, 58, 138, 0.85), rgba(30, 58, 138, 0.9)), url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      } : {}}
      aria-labelledby="hero-heading"
    >
      {/* Skip link para acessibilidade */}
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-white text-blue-900 px-4 py-2 rounded-md z-50">
        Pular para o conteúdo principal
      </a>
      
      <div className="container mx-auto px-4 text-center">
        <h1 
          id="hero-heading"
          className="text-3xl md:text-5xl font-bold mb-4 animate-fade-in"
        >
          {title}
        </h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto animate-fade-in-delay">
          {subtitle}
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
