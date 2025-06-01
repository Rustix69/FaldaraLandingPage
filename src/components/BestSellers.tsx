
import { Link } from 'react-router-dom';
import ProductCard from '@/components/ProductCard';
import { products } from '@/data/products';

const BestSellers = () => {
  return (
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
  );
};

export default BestSellers;
