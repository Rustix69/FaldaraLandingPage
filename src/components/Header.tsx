import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MessageCircle, Search, ShoppingCart, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-4 z-50 mx-auto max-w-7xl rounded-full px-4">
      <div className="backdrop-blur-md bg-white/70 border border-faldaara-light-green/10 shadow-sm rounded-full">
        {/* Main Navigation */}
        <div className="px-6 py-3">
          <div className="flex items-center justify-between">
            {/* Mobile Menu Button */}
            <button
              className="lg:hidden text-faldaara-dark-green"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>

            {/* Logo */}
            <Link to="/" className="flex-1 lg:flex-none text-center lg:text-left">
              <div className="font-playfair text-2xl text-faldaara-dark-green">
                فلدارا
                <div className="text-xs font-space tracking-wider text-faldaara-orange">
                  Faldaara
                </div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              <Link 
                to="/products" 
                className="text-faldaara-orange font-space font-medium hover:text-faldaara-dark-green transition-colors uppercase tracking-wide text-sm"
              >
                SHOP
              </Link>
              <Link 
                to="/gifting" 
                className="text-faldaara-dark-green font-space hover:text-faldaara-orange transition-colors uppercase tracking-wide text-sm"
              >
                CUSTOM GIFTING
              </Link>
              <Link 
                to="/about" 
                className="text-faldaara-dark-green font-space hover:text-faldaara-orange transition-colors uppercase tracking-wide text-sm"
              >
                OUR WORLD
              </Link>
              <Link 
                to="/contact" 
                className="text-faldaara-dark-green font-space hover:text-faldaara-orange transition-colors uppercase tracking-wide text-sm"
              >
                CONTACT
              </Link>
            </nav>

            {/* Right Icons */}
            <div className="flex items-center space-x-3">
              <Button variant="ghost" size="icon" className="text-faldaara-dark-green hover:text-faldaara-orange h-8 w-8">
                <Search size={18} />
              </Button>
              <Button variant="ghost" size="icon" className="text-faldaara-dark-green hover:text-faldaara-orange h-8 w-8">
                <ShoppingCart size={18} />
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden px-6 pb-4 animate-fade-in">
            <nav className="mt-2 pt-2 border-t border-faldaara-light-green/10">
              <div className="flex flex-col space-y-3">
                <Link 
                  to="/products" 
                  className="text-faldaara-orange font-space font-medium uppercase tracking-wide text-sm"
                  onClick={() => setIsMenuOpen(false)}
                >
                  SHOP
                </Link>
                <Link 
                  to="/gifting" 
                  className="text-faldaara-dark-green font-space uppercase tracking-wide text-sm"
                  onClick={() => setIsMenuOpen(false)}
                >
                  CUSTOM GIFTING
                </Link>
                <Link 
                  to="/about" 
                  className="text-faldaara-dark-green font-space uppercase tracking-wide text-sm"
                  onClick={() => setIsMenuOpen(false)}
                >
                  OUR WORLD
                </Link>
                <Link 
                  to="/contact" 
                  className="text-faldaara-dark-green font-space uppercase tracking-wide text-sm"
                  onClick={() => setIsMenuOpen(false)}
                >
                  CONTACT
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
