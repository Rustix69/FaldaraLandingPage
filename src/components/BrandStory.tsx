
const BrandStory = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-faldaara-cream to-faldaara-light-green/20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-faldaara-dark-green mb-6">
              A Heritage of Excellence
            </h2>
            <p className="font-space text-lg text-gray-700 mb-6 leading-relaxed">
              Since 1956, Faldaara has been crafting exceptional dry fruit confections in the heart of Jaipur. 
              What began as a family tradition has evolved into an artisanal atelier, where time-honored 
              techniques meet contemporary luxury.
            </p>
            <p className="font-space text-lg text-gray-700 mb-8 leading-relaxed">
              Each creation tells a story of passion, precision, and the pursuit of perfection. 
              Our master craftsmen select only the finest ingredients, transforming them into 
              edible works of art that celebrate life's most precious moments.
            </p>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-faldaara-orange rounded-full"></div>
                <span className="font-space text-gray-700">Heritage craftsmanship since 1956</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-faldaara-orange rounded-full"></div>
                <span className="font-space text-gray-700">Artisanal techniques from Jaipur</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-faldaara-orange rounded-full"></div>
                <span className="font-space text-gray-700">Premium ingredients, ethically sourced</span>
              </div>
            </div>
          </div>
          
          <div className="animate-scale-in">
            <img 
              src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=600&fit=crop" 
              alt="Faldaara heritage craftsmanship"
              className="w-full h-96 object-cover rounded-lg shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandStory;
