
import ProductCard from '@/components/ProductCard';
import { heroProducts } from '@/data/products';

const FeaturedProducts = () => {
  return (
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
  );
};

export default FeaturedProducts;
