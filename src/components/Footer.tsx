
import { Link } from 'react-router-dom';
import { Instagram, Facebook, MessageCircle, Linkedin, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-faldaara-dark-green to-amber-900 text-faldaara-off-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Logo Section */}
        <div className="text-center mb-12">
          <div className="font-playfair text-4xl mb-2">
            فلدارا
            <div className="text-lg font-space tracking-wider text-gold">
              Faldaara
            </div>
          </div>
        </div>

        {/* Footer Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {/* Faldaara International */}
          <div>
            <h3 className="font-space font-semibold text-lg mb-6 text-gold">Faldaara International</h3>
            <ul className="space-y-3 font-space text-sm">
              <li><Link to="/about" className="hover:text-gold transition-colors underline">About Us</Link></li>
              <li><Link to="/careers" className="hover:text-gold transition-colors underline">Careers</Link></li>
              <li><Link to="/press" className="hover:text-gold transition-colors underline">Press</Link></li>
              <li><Link to="/contact" className="hover:text-gold transition-colors underline">Contact Us</Link></li>
              <li><Link to="/locations" className="hover:text-gold transition-colors underline">Find us</Link></li>
              <li><Link to="/franchise" className="hover:text-gold transition-colors underline">Franchise Opportunities</Link></li>
            </ul>
          </div>

          {/* Explore */}
          <div>
            <h3 className="font-space font-semibold text-lg mb-6 text-gold">Explore</h3>
            <ul className="space-y-3 font-space text-sm">
              <li><Link to="/products" className="hover:text-gold transition-colors underline">Faldaara Forms</Link></li>
              <li><Link to="/dates" className="hover:text-gold transition-colors underline">Date Varieties</Link></li>
              <li><Link to="/almonds" className="hover:text-gold transition-colors underline">Alva Dates</Link></li>
              <li><Link to="/medjool" className="hover:text-gold transition-colors underline">Medjool Dates</Link></li>
              <li><Link to="/chocolate" className="hover:text-gold transition-colors underline">Single Origin Chocolate</Link></li>
              <li><Link to="/nutrition" className="hover:text-gold transition-colors underline">Nutrition</Link></li>
              <li><Link to="/blog" className="hover:text-gold transition-colors underline">Blog</Link></li>
            </ul>
          </div>

          {/* Shopping Online */}
          <div>
            <h3 className="font-space font-semibold text-lg mb-6 text-gold">Shopping Online</h3>
            <ul className="space-y-3 font-space text-sm">
              <li><Link to="/faq" className="hover:text-gold transition-colors underline">FAQs</Link></li>
              <li><Link to="/shipping" className="hover:text-gold transition-colors underline">Shipping & Delivery</Link></li>
              <li><Link to="/returns" className="hover:text-gold transition-colors underline">Returns</Link></li>
              <li><Link to="/cookie-policy" className="hover:text-gold transition-colors underline">Cookie Policy</Link></li>
            </ul>
          </div>

          {/* Our Brands */}
          <div>
            <h3 className="font-space font-semibold text-lg mb-6 text-gold">Our Brands</h3>
            <ul className="space-y-3 font-space text-sm">
              <li><Link to="/faldaara-boutique" className="hover:text-gold transition-colors underline">Faldaara Boutique</Link></li>
              <li><Link to="/cafe-faldaara" className="hover:text-gold transition-colors underline">Café Faldaara</Link></li>
              <li><Link to="/faldaara-elan" className="hover:text-gold transition-colors underline">Faldaara Élan</Link></li>
            </ul>
          </div>
        </div>

        {/* Social Media Icons */}
        <div className="text-center mb-8">
          <div className="flex justify-center space-x-6">
            <a href="#" className="text-faldaara-off-white hover:text-gold transition-colors">
              <Instagram size={24} />
            </a>
            <a href="#" className="text-faldaara-off-white hover:text-gold transition-colors">
              <Facebook size={24} />
            </a>
            <a href="#" className="text-faldaara-off-white hover:text-gold transition-colors">
              <MessageCircle size={24} />
            </a>
            <a href="#" className="text-faldaara-off-white hover:text-gold transition-colors">
              <Linkedin size={24} />
            </a>
            <a href="#" className="text-faldaara-off-white hover:text-gold transition-colors">
              <Youtube size={24} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-gradient-to-r from-gold-light to-faldaara-light-green text-faldaara-dark-green">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm font-space">
            <div>Terms & Conditions</div>
            <div className="text-center my-2 md:my-0">Security & Privacy Policy</div>
            <div>Copyright © 2025. All rights reserved.</div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
