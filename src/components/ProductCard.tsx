
import { useState } from 'react';
import { Badge } from '@/components/ui/badge';

interface ProductCardProps {
  name: string;
  ingredient: string;
  profile: 'Sweet' | 'Savoury';
  image: string;
  macroImage: string;
  description: string;
  price?: string;
  isNew?: boolean;
}

const ProductCard = ({ name, ingredient, profile, image, macroImage, description, price, isNew }: ProductCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="group relative bg-faldaara-off-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {isNew && (
        <Badge className="absolute top-4 left-4 z-10 bg-faldaara-orange text-white font-space text-xs">
          New
        </Badge>
      )}
      
      <div className="relative h-80 overflow-hidden">
        <img 
          src={isHovered ? macroImage : image} 
          alt={name}
          className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      
      <div className="p-6">
        <div className="mb-2">
          <Badge 
            variant="outline" 
            className={`text-xs font-space ${
              profile === 'Sweet' 
                ? 'border-faldaara-orange text-faldaara-orange' 
                : 'border-faldaara-dark-green text-faldaara-dark-green'
            }`}
          >
            {profile}
          </Badge>
        </div>
        
        <h3 className="font-playfair text-xl font-semibold text-faldaara-dark-green mb-2 group-hover:text-faldaara-orange transition-colors">
          {name}
        </h3>
        
        <p className="text-sm text-gray-600 font-space mb-3 leading-relaxed">
          {description}
        </p>
        
        <div className="flex justify-between items-center">
          <span className="text-sm font-space text-faldaara-dark-green">
            Base: <span className="font-medium">{ingredient}</span>
          </span>
          {price && (
            <span className="font-space font-semibold text-faldaara-orange">
              From {price}
            </span>
          )}
        </div>
        
        {isHovered && (
          <div className="mt-4 animate-fade-in">
            <button className="w-full bg-faldaara-dark-green text-white font-space py-2 px-4 rounded hover:bg-faldaara-orange transition-colors duration-300">
              Gift With Elegance
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
