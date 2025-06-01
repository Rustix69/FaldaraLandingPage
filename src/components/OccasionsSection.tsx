
const OccasionsSection = () => {
  return (
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
  );
};

export default OccasionsSection;
