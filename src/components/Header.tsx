
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MessageCircle, Search, ShoppingCart, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-faldaara-off-white border-b border-faldaara-light-green/20">
      {/* Top Bar */}
      <div className="border-b border-faldaara-light-green/10 py-2 px-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-sm">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-faldaara-dark-green">
              <Phone size={14} />
              <span className="hidden sm:inline">Call Us</span>
            </div>
            <div className="flex items-center space-x-2 text-faldaara-dark-green">
              <MessageCircle size={14} />
              <span className="hidden sm:inline">WhatsApp</span>
            </div>
            <div className="flex items-center space-x-2 text-faldaara-dark-green">
              <Mail size={14} />
              <span className="hidden sm:inline">Email message</span>
            </div>
          </div>
          
          <div className="text-center font-space text-faldaara-dark-green font-medium">
            A HERITAGE OF EXCELLENCE SINCE 1956
          </div>
          
          <div className="flex items-center space-x-4 text-sm">
            <div className="flex items-center space-x-2">
              <span className="hidden sm:inline">Ship To:</span>
              <span className="text-faldaara-orange font-medium">🇮🇳</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="hidden sm:inline">Currency:</span>
              <span className="text-faldaara-orange font-medium">INR</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="px-4 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-faldaara-dark-green"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Logo */}
          <Link to="/" className="flex-1 lg:flex-none text-center lg:text-left">
            <div className="font-playfair text-3xl text-faldaara-dark-green">
              فلدارا
              <div className="text-sm font-space tracking-wider text-faldaara-orange">
                Faldaara
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link 
              to="/products" 
              className="text-faldaara-orange font-space font-medium hover:text-faldaara-dark-green transition-colors uppercase tracking-wide"
            >
              SHOP
            </Link>
            <Link 
              to="/gifting" 
              className="text-faldaara-dark-green font-space hover:text-faldaara-orange transition-colors uppercase tracking-wide"
            >
              CUSTOM GIFTING
            </Link>
            <Link 
              to="/about" 
              className="text-faldaara-dark-green font-space hover:text-faldaara-orange transition-colors uppercase tracking-wide"
            >
              OUR WORLD
            </Link>
            <Link 
              to="/contact" 
              className="text-faldaara-dark-green font-space hover:text-faldaara-orange transition-colors uppercase tracking-wide"
            >
              CONTACT
            </Link>
          </nav>

          {/* Right Icons */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" className="text-faldaara-dark-green hover:text-faldaara-orange">
              <Search size={20} />
            </Button>
            <Button variant="ghost" size="icon" className="text-faldaara-dark-green hover:text-faldaara-orange">
              <ShoppingCart size={20} />
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="lg:hidden mt-4 pt-4 border-t border-faldaara-light-green/20 animate-fade-in">
            <div className="flex flex-col space-y-4">
              <Link 
                to="/products" 
                className="text-faldaara-orange font-space font-medium uppercase tracking-wide"
                onClick={() => setIsMenuOpen(false)}
              >
                SHOP
              </Link>
              <Link 
                to="/gifting" 
                className="text-faldaara-dark-green font-space uppercase tracking-wide"
                onClick={() => setIsMenuOpen(false)}
              >
                CUSTOM GIFTING
              </Link>
              <Link 
                to="/about" 
                className="text-faldaara-dark-green font-space uppercase tracking-wide"
                onClick={() => setIsMenuOpen(false)}
              >
                OUR WORLD
              </Link>
              <Link 
                to="/contact" 
                className="text-faldaara-dark-green font-space uppercase tracking-wide"
                onClick={() => setIsMenuOpen(false)}
              >
                CONTACT
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
