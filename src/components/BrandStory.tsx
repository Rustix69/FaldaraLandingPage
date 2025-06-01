
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const BrandStory = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-faldaara-cream to-faldaara-light-green/20 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="w-full h-full bg-[url('data:image/svg+xml,%3Csvg width=\"40\" height=\"40\" viewBox=\"0 0 40 40\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"%23D86E28\" fill-opacity=\"0.1\"%3E%3Cpath d=\"M20 20c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10zm10 0c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10z\"/%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-faldaara-dark-green mb-6">
              Illuminating Collections
            </h2>
            <p className="font-space text-lg text-faldaara-dark-green mb-6 leading-relaxed">
              GIFT THE LUXURY WONDERS FROM
            </p>
            <p className="font-space text-lg text-faldaara-dark-green mb-8 leading-relaxed">
              FALDAARA'S TRADITIONAL CONFECTIONERIES
            </p>
            <p className="font-space text-lg text-gray-700 mb-8 leading-relaxed">
              Rooted in the royal heritage of Jaipur, Faldaara reimagines festive gifting with handcrafted dry fruit creations for life's finest moments.
            </p>
            <Button 
              asChild
              className="border-2 border-faldaara-dark-green text-faldaara-dark-green bg-transparent hover:bg-faldaara-dark-green hover:text-white font-space px-8 py-3 rounded-none transition-all duration-300"
            >
              <Link to="/products">SHOP NEW ARRIVALS</Link>
            </Button>
          </div>
          
          <div className="animate-scale-in">
            <img 
              src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=600&fit=crop" 
              alt="Artisanal preparation"
              className="w-full h-96 object-cover rounded-lg shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandStory;
