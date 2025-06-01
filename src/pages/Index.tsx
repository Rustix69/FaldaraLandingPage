
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProductCard from '@/components/ProductCard';

const Index = () => {
  const heroProducts = [
    {
      name: "Pastel Petal Gift Set",
      ingredient: "Mixed Delights",
      profile: "Sweet" as const,
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=400&fit=crop",
      macroImage: "https://images.unsplash.com/photo-1599599810769-bcde5a160d32?w=400&h=400&fit=crop",
      description: "Elegant assortment in soft-hued presentation boxes",
      price: "₹1,915.00",
      isNew: true
    },
    {
      name: "Florise Gift Set",
      ingredient: "Premium Selection",
      profile: "Sweet" as const,
      image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=400&h=400&fit=crop",
      macroImage: "https://images.unsplash.com/photo-1587049352846-4a222e784d38?w=400&h=400&fit=crop",
      description: "Luxurious floral-inspired gift collection",
      price: "₹5,705.00",
      isNew: true
    },
    {
      name: "Palm Gift Set",
      ingredient: "Tropical Blend",
      profile: "Sweet" as const,
      image: "https://images.unsplash.com/photo-1599599810769-bcde5a160d32?w=400&h=400&fit=crop",
      macroImage: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=400&fit=crop",
      description: "Sustainable palm-inspired luxury packaging",
      price: "₹1,815.00"
    }
  ];

  const products = [
    {
      name: "Decadent Cacao Almonds",
      ingredient: "Almond",
      profile: "Sweet" as const,
      image: "https://images.unsplash.com/photo-1506384379801-42fab5a82b1c?w=400&h=400&fit=crop",
      macroImage: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400&h=400&fit=crop",
      description: "Velvet-roasted Kashmiri almonds enrobed in single-origin Belgian cacao. A slow indulgence, meant for golden evenings and gifting rituals."
    },
    {
      name: "Banarasi Paan Raisins",
      ingredient: "Raisin",
      profile: "Sweet" as const,
      image: "https://images.unsplash.com/photo-1577003811926-53b288a6d355?w=400&h=400&fit=crop",
      macroImage: "https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=400&h=400&fit=crop",
      description: "Aromatic raisins infused with traditional Banarasi paan essence, creating a unique Indian delicacy."
    },
    {
      name: "Wildfire Peri-Peri Cashews",
      ingredient: "Cashew",
      profile: "Savoury" as const,
      image: "https://images.unsplash.com/photo-1506902080509-f6b0f6d0a18e?w=400&h=400&fit=crop",
      macroImage: "https://images.unsplash.com/photo-1587049352846-4a222e784d38?w=400&h=400&fit=crop",
      description: "Premium cashews with a fiery peri-peri coating that ignites the palate with bold, spicy flavors."
    },
    {
      name: "Woodfire BBQ Makhana",
      ingredient: "Makhana",
      profile: "Savoury" as const,
      image: "https://images.unsplash.com/photo-1599599809746-d71d53726ca2?w=400&h=400&fit=crop",
      macroImage: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400&h=400&fit=crop",
      description: "Artisanal fox nuts roasted over wood fire and seasoned with smoky BBQ spices for a gourmet crunch."
    },
    {
      name: "Indulgent Date Noir",
      ingredient: "Date",
      profile: "Sweet" as const,
      image: "https://images.unsplash.com/photo-1564424384077-d7b0de6e1b31?w=400&h=400&fit=crop",
      macroImage: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=400&h=400&fit=crop",
      description: "Luxurious Medjool dates filled with dark chocolate ganache, a sophisticated treat for connoisseurs."
    },
    {
      name: "Spice-Rubbed Rubies",
      ingredient: "Cranberry",
      profile: "Savoury" as const,
      image: "https://images.unsplash.com/photo-1577003810926-53b288a6d355?w=400&h=400&fit=crop",
      macroImage: "https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=400&h=400&fit=crop",
      description: "Dried cranberries enhanced with aromatic Indian spices, creating a perfect sweet-savory balance."
    }
  ];

  return (
    <div className="min-h-screen bg-faldaara-off-white">
      <Header />
      
      {/* Hero Section */}
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

      {/* Featured Products Section */}
      <section className="py-20 bg-faldaara-off-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-faldaara-dark-green mb-4">
              Featured
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {heroProducts.map((product, index) => (
              <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 0.2}s` }}>
                <ProductCard {...product} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brand Story Section */}
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

      {/* Best Sellers Section */}
      <section className="py-20 bg-faldaara-off-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center mb-16">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-faldaara-dark-green">
              Best-Sellers
            </h2>
            <Link 
              to="/products"
              className="font-space text-faldaara-orange hover:text-faldaara-dark-green transition-colors underline text-lg"
            >
              Show All Products
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <ProductCard {...product} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gifting Experience */}
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

      {/* Occasions Section */}
      <section className="py-20 bg-faldaara-cream">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-faldaara-dark-green mb-6">
              Occasions We Serve
            </h2>
            <p className="font-space text-lg text-gray-700 max-w-2xl mx-auto">
              From intimate celebrations to grand festivities, we craft memories for every milestone
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center group animate-fade-in">
              <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-faldaara-orange to-faldaara-dark-green rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <span className="text-3xl">🪔</span>
              </div>
              <h3 className="font-playfair text-2xl font-semibold text-faldaara-dark-green mb-4">Diwali</h3>
              <p className="font-space text-gray-700">
                Illuminate the festival of lights with our traditional yet contemporary gift collections
              </p>
            </div>
            
            <div className="text-center group animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-faldaara-orange to-faldaara-dark-green rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <span className="text-3xl">💍</span>
              </div>
              <h3 className="font-playfair text-2xl font-semibold text-faldaara-dark-green mb-4">Weddings</h3>
              <p className="font-space text-gray-700">
                Celebrate love with our bespoke wedding favor collections and guest gift arrangements
              </p>
            </div>
            
            <div className="text-center group animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-faldaara-orange to-faldaara-dark-green rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <span className="text-3xl">🏢</span>
              </div>
              <h3 className="font-playfair text-2xl font-semibold text-faldaara-dark-green mb-4">Corporate Luxe</h3>
              <p className="font-space text-gray-700">
                Strengthen business relationships with our premium corporate gifting solutions
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
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

      <Footer />
    </div>
  );
};

export default Index;
