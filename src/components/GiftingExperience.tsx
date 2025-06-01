
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const GiftingExperience = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-faldaara-dark-green to-amber-900 text-faldaara-off-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-6">
              The Art of Gifting
            </h2>
            <p className="font-space text-lg mb-6 leading-relaxed">
              Discover our bespoke customization services where each gift tells a unique story. 
              From monogramming to couple names, from corporate branding to traditional motifs.
            </p>
            <ul className="font-space text-lg space-y-3 mb-8">
              <li>• Personalized monogramming</li>
              <li>• Custom corporate branding</li>
              <li>• Traditional Rajasthani motifs</li>
              <li>• Eco-luxury packaging</li>
            </ul>
            <Button 
              asChild
              className="bg-faldaara-orange hover:bg-gold text-white font-space text-lg px-8 py-3 rounded-none transition-all duration-300"
            >
              <Link to="/gifting">Start Customizing</Link>
            </Button>
          </div>
          
          <div className="grid grid-cols-2 gap-4 animate-scale-in">
            <img 
              src="https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=300&h=300&fit=crop" 
              alt="Custom gift box 1"
              className="w-full h-48 object-cover rounded-lg"
            />
            <img 
              src="https://images.unsplash.com/photo-1599599810769-bcde5a160d32?w=300&h=300&fit=crop" 
              alt="Custom gift box 2"
              className="w-full h-48 object-cover rounded-lg mt-8"
            />
            <img 
              src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=300&fit=crop" 
              alt="Custom gift box 3"
              className="w-full h-48 object-cover rounded-lg -mt-8"
            />
            <img 
              src="https://images.unsplash.com/photo-1587049352846-4a222e784d38?w=300&h=300&fit=crop" 
              alt="Custom gift box 4"
              className="w-full h-48 object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default GiftingExperience;
