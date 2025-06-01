
import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProductCard from '@/components/ProductCard';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const Products = () => {
  const [filter, setFilter] = useState('All');

  const products = [
    {
      name: "Decadent Cacao Almonds",
      ingredient: "Almond",
      profile: "Sweet" as const,
      image: "https://images.unsplash.com/photo-1506384379801-42fab5a82b1c?w=400&h=400&fit=crop",
      macroImage: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400&h=400&fit=crop",
      description: "Velvet-roasted Kashmiri almonds enrobed in single-origin Belgian cacao. A slow indulgence, meant for golden evenings and gifting rituals.",
      price: "₹2,450.00"
    },
    {
      name: "Banarasi Paan Raisins",
      ingredient: "Raisin",
      profile: "Sweet" as const,
      image: "https://images.unsplash.com/photo-1577003811926-53b288a6d355?w=400&h=400&fit=crop",
      macroImage: "https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=400&h=400&fit=crop",
      description: "Aromatic raisins infused with traditional Banarasi paan essence, creating a unique Indian delicacy.",
      price: "₹1,850.00"
    },
    {
      name: "Wildfire Peri-Peri Cashews",
      ingredient: "Cashew",
      profile: "Savoury" as const,
      image: "https://images.unsplash.com/photo-1506902080509-f6b0f6d0a18e?w=400&h=400&fit=crop",
      macroImage: "https://images.unsplash.com/photo-1587049352846-4a222e784d38?w=400&h=400&fit=crop",
      description: "Premium cashews with a fiery peri-peri coating that ignites the palate with bold, spicy flavors.",
      price: "₹3,200.00"
    },
    {
      name: "Woodfire BBQ Makhana",
      ingredient: "Makhana",
      profile: "Savoury" as const,
      image: "https://images.unsplash.com/photo-1599599809746-d71d53726ca2?w=400&h=400&fit=crop",
      macroImage: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400&h=400&fit=crop",
      description: "Artisanal fox nuts roasted over wood fire and seasoned with smoky BBQ spices for a gourmet crunch.",
      price: "₹1,650.00",
      isNew: true
    },
    {
      name: "Indulgent Date Noir",
      ingredient: "Date",
      profile: "Sweet" as const,
      image: "https://images.unsplash.com/photo-1564424384077-d7b0de6e1b31?w=400&h=400&fit=crop",
      macroImage: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=400&h=400&fit=crop",
      description: "Luxurious Medjool dates filled with dark chocolate ganache, a sophisticated treat for connoisseurs.",
      price: "₹4,100.00"
    },
    {
      name: "Spice-Rubbed Rubies",
      ingredient: "Cranberry",
      profile: "Savoury" as const,
      image: "https://images.unsplash.com/photo-1577003810926-53b288a6d355?w=400&h=400&fit=crop",
      macroImage: "https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=400&h=400&fit=crop",
      description: "Dried cranberries enhanced with aromatic Indian spices, creating a perfect sweet-savory balance.",
      price: "₹2,750.00"
    }
  ];

  const filteredProducts = filter === 'All' 
    ? products 
    : products.filter(product => product.profile === filter);

  return (
    <div className="min-h-screen bg-faldaara-off-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-faldaara-cream to-faldaara-light-green/20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="font-playfair text-5xl md:text-6xl font-bold text-faldaara-dark-green mb-6 animate-fade-in">
            Our Atelier Collection
          </h1>
          <p className="font-space text-xl text-gray-700 max-w-3xl mx-auto mb-8 leading-relaxed animate-fade-in">
            Each creation is handcrafted with the finest ingredients, embodying the essence of royal Jaipur heritage and modern luxury
          </p>
          
          {/* Filter Buttons */}
          <div className="flex justify-center space-x-4 mb-12 animate-fade-in">
            {['All', 'Sweet', 'Savoury'].map((filterOption) => (
              <Button
                key={filterOption}
                onClick={() => setFilter(filterOption)}
                variant={filter === filterOption ? "default" : "outline"}
                className={`font-space px-6 py-2 rounded-none transition-all duration-300 ${
                  filter === filterOption
                    ? 'bg-faldaara-dark-green text-white'
                    : 'border-faldaara-dark-green text-faldaara-dark-green hover:bg-faldaara-dark-green hover:text-white'
                }`}
              >
                {filterOption}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product, index) => (
              <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <ProductCard {...product} />
              </div>
            ))}
          </div>
          
          {filteredProducts.length === 0 && (
            <div className="text-center py-20">
              <p className="font-space text-xl text-gray-600">
                No products found in this category.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Craftsmanship Section */}
      <section className="py-20 bg-gradient-to-r from-faldaara-dark-green to-amber-900 text-faldaara-off-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-6">
                Artisanal Excellence
              </h2>
              <p className="font-space text-lg mb-6 leading-relaxed">
                Every product in our collection represents hours of meticulous craftsmanship. 
                Our master artisans blend traditional techniques with modern innovation to create 
                confections that are as beautiful as they are delicious.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Badge className="bg-faldaara-orange text-white">✓</Badge>
                  <span className="font-space">Hand-selected premium ingredients</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Badge className="bg-faldaara-orange text-white">✓</Badge>
                  <span className="font-space">Traditional Jaipur techniques</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Badge className="bg-faldaara-orange text-white">✓</Badge>
                  <span className="font-space">Made to order freshness</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Badge className="bg-faldaara-orange text-white">✓</Badge>
                  <span className="font-space">Luxury presentation</span>
                </div>
              </div>
            </div>
            
            <div className="animate-scale-in">
              <img 
                src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=600&fit=crop" 
                alt="Artisanal craftsmanship"
                className="w-full h-96 object-cover rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Products;
