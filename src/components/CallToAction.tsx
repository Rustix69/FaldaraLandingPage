
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const CallToAction = () => {
  return (
    <section className="py-20 bg-faldaara-off-white text-center">
      <div className="max-w-4xl mx-auto px-4 animate-fade-in">
        <h2 className="font-playfair text-4xl md:text-5xl font-bold text-faldaara-dark-green mb-6">
          Ready to Create Something Beautiful?
        </h2>
        <p className="font-space text-xl text-gray-700 mb-8 leading-relaxed">
          Let us craft a gift that speaks your language of love, celebration, and appreciation
        </p>
        <Button 
          asChild
          className="bg-faldaara-dark-green hover:bg-faldaara-orange text-white font-space text-xl px-12 py-4 rounded-none transition-all duration-300 transform hover:scale-105"
        >
          <Link to="/gifting">Craft a Gift</Link>
        </Button>
      </div>
    </section>
  );
};

export default CallToAction;
