
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Badge } from '@/components/ui/badge';

const About = () => {
  const values = [
    {
      title: "Royal Heritage",
      description: "Rooted in the traditions of Jaipur's royal craftsmanship",
      icon: "👑"
    },
    {
      title: "Artisanal Excellence",
      description: "Every product handcrafted by master artisans",
      icon: "🎨"
    },
    {
      title: "Premium Ingredients",
      description: "Only the finest, ethically sourced ingredients",
      icon: "🌟"
    },
    {
      title: "Made to Order",
      description: "Fresh confections crafted specifically for you",
      icon: "📦"
    }
  ];

  const timeline = [
    {
      year: "1956",
      title: "The Beginning",
      description: "Founded in the heart of Jaipur with a vision to create exceptional dry fruit confections"
    },
    {
      year: "1980",
      title: "Royal Recognition",
      description: "Became the preferred confectioner for Rajasthani royal families"
    },
    {
      year: "2000",
      title: "Modern Innovation",
      description: "Blended traditional techniques with contemporary flavors and presentation"
    },
    {
      year: "2020",
      title: "Digital Transformation",
      description: "Launched our online atelier to bring handcrafted luxury to homes worldwide"
    },
    {
      year: "Today",
      title: "Global Excellence",
      description: "Serving discerning customers across India with bespoke gifting solutions"
    }
  ];

  return (
    <div className="min-h-screen bg-faldaara-off-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-faldaara-cream to-faldaara-light-green/20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="font-playfair text-5xl md:text-6xl font-bold text-faldaara-dark-green mb-6">
                Our World
              </h1>
              <p className="font-space text-xl text-gray-700 mb-8 leading-relaxed">
                At Faldaara, we believe that every gift tells a story. Since 1956, we have been crafting 
                artisanal dry fruit confections that celebrate life's most precious moments with 
                elegance, tradition, and uncompromising quality.
              </p>
              <div className="flex flex-wrap gap-3">
                <Badge className="bg-faldaara-orange text-white font-space px-4 py-2">
                  Heritage Since 1956
                </Badge>
                <Badge className="bg-faldaara-dark-green text-white font-space px-4 py-2">
                  Handcrafted Excellence
                </Badge>
              </div>
            </div>
            
            <div className="animate-scale-in">
              <img 
                src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=600&fit=crop" 
                alt="Faldaara artisans at work"
                className="w-full h-96 object-cover rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-faldaara-dark-green mb-6">
              Our Values
            </h2>
            <p className="font-space text-lg text-gray-700 max-w-2xl mx-auto">
              The principles that guide every creation and every relationship we build
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div 
                key={index} 
                className="text-center group animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-faldaara-orange to-faldaara-dark-green rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl">{value.icon}</span>
                </div>
                <h3 className="font-playfair text-xl font-semibold text-faldaara-dark-green mb-3">
                  {value.title}
                </h3>
                <p className="font-space text-gray-700">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-gradient-to-r from-faldaara-dark-green to-amber-900 text-faldaara-off-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-6">
                The Faldaara Story
              </h2>
              <p className="font-space text-lg mb-6 leading-relaxed">
                Born in the pink city of Jaipur, Faldaara emerged from a simple yet profound belief: 
                that the finest gifts are those crafted with love, skill, and an unwavering commitment to excellence.
              </p>
              <p className="font-space text-lg mb-6 leading-relaxed">
                Our founder, inspired by the intricate artistry of Rajasthani craftsmen, envisioned 
                a brand that would elevate dry fruit confections from simple treats to works of art. 
                Each piece tells the story of our heritage, our passion, and our dedication to creating 
                moments of pure joy.
              </p>
              <p className="font-space text-lg leading-relaxed">
                Today, Faldaara continues this legacy, blending time-honored techniques with 
                contemporary innovation to create confections that are not just delicious, 
                but truly memorable.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-4 animate-scale-in">
              <img 
                src="https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=300&h=300&fit=crop" 
                alt="Traditional craftsmanship"
                className="w-full h-48 object-cover rounded-lg"
              />
              <img 
                src="https://images.unsplash.com/photo-1599599810769-bcde5a160d32?w=300&h=300&fit=crop" 
                alt="Modern presentation"
                className="w-full h-48 object-cover rounded-lg mt-8"
              />
              <img 
                src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=300&fit=crop" 
                alt="Ingredient sourcing"
                className="w-full h-48 object-cover rounded-lg -mt-8"
              />
              <img 
                src="https://images.unsplash.com/photo-1587049352846-4a222e784d38?w=300&h=300&fit=crop" 
                alt="Final products"
                className="w-full h-48 object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-faldaara-cream">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-faldaara-dark-green mb-6">
              Our Journey
            </h2>
            <p className="font-space text-lg text-gray-700">
              Decades of craftsmanship, innovation, and unwavering commitment to excellence
            </p>
          </div>
          
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-faldaara-light-green"></div>
            
            {timeline.map((event, index) => (
              <div 
                key={index} 
                className={`relative mb-12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8 ml-auto'} w-1/2 animate-fade-in`}
                style={{ animationDelay: `${index * 0.3}s` }}
              >
                <div className={`absolute top-0 w-6 h-6 bg-faldaara-orange rounded-full ${index % 2 === 0 ? 'right-0 mr-6' : 'left-0 ml-6'} transform -translate-y-1`}></div>
                
                <div className="bg-faldaara-off-white p-6 rounded-lg shadow-lg">
                  <div className="text-2xl font-playfair font-bold text-faldaara-orange mb-2">
                    {event.year}
                  </div>
                  <h3 className="text-xl font-playfair font-semibold text-faldaara-dark-green mb-3">
                    {event.title}
                  </h3>
                  <p className="font-space text-gray-700">
                    {event.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Behind the Scenes */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-faldaara-dark-green mb-6">
              Behind the Scenes
            </h2>
            <p className="font-space text-lg text-gray-700 max-w-2xl mx-auto">
              Witness the meticulous process that transforms the finest ingredients into extraordinary confections
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center animate-fade-in">
              <img 
                src="https://images.unsplash.com/photo-1506384379801-42fab5a82b1c?w=400&h=300&fit=crop" 
                alt="Ingredient selection"
                className="w-full h-64 object-cover rounded-lg mb-6 shadow-lg"
              />
              <h3 className="font-playfair text-xl font-semibold text-faldaara-dark-green mb-3">
                Ingredient Selection
              </h3>
              <p className="font-space text-gray-700">
                Our sourcing team travels across India to handpick the finest nuts, dried fruits, and spices
              </p>
            </div>
            
            <div className="text-center animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <img 
                src="https://images.unsplash.com/photo-1599599810769-bcde5a160d32?w=400&h=300&fit=crop" 
                alt="Handcrafting process"
                className="w-full h-64 object-cover rounded-lg mb-6 shadow-lg"
              />
              <h3 className="font-playfair text-xl font-semibold text-faldaara-dark-green mb-3">
                Artisanal Crafting
              </h3>
              <p className="font-space text-gray-700">
                Master artisans apply traditional techniques passed down through generations
              </p>
            </div>
            
            <div className="text-center animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <img 
                src="https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=400&h=300&fit=crop" 
                alt="Luxury packaging"
                className="w-full h-64 object-cover rounded-lg mb-6 shadow-lg"
              />
              <h3 className="font-playfair text-xl font-semibold text-faldaara-dark-green mb-3">
                Luxury Presentation
              </h3>
              <p className="font-space text-gray-700">
                Each creation is elegantly presented in our signature packaging, ready for gifting
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
