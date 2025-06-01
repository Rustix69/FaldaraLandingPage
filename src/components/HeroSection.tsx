
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center bg-gradient-to-br from-faldaara-cream to-faldaara-off-white overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <img 
          src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1920&h=1080&fit=crop" 
          alt="Luxury dry fruits"
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4 animate-fade-in">
        <div className="mb-6">
          <p className="text-faldaara-dark-green font-space text-lg tracking-wider uppercase mb-4">
            Explore exquisite packaging and experience innovative
          </p>
          <p className="text-faldaara-dark-green font-space text-lg tracking-wider">
            confectioneries waiting to be discovered at the Faldaara Boutique
          </p>
        </div>
        
        <h1 className="font-playfair text-6xl md:text-7xl lg:text-8xl font-bold text-faldaara-dark-green mb-6 leading-tight">
          Faldaara
        </h1>
        
        <p className="font-playfair text-2xl md:text-3xl text-faldaara-orange mb-4">
          Gourmet Dry Fruit Atelier
        </p>
        
        <p className="font-space text-xl text-faldaara-dark-green mb-8 max-w-2xl mx-auto leading-relaxed">
          Artisanal confections. Crafted to order. Gifted with meaning.
        </p>
        
        <Button 
          asChild
          className="bg-faldaara-orange hover:bg-faldaara-dark-green text-white font-space text-lg px-8 py-3 rounded-none transition-all duration-300 transform hover:scale-105"
        >
          <Link to="/products">FIND A BOUTIQUE</Link>
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;
