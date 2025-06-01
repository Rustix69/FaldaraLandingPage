
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Phone, Mail, MessageCircle, MapPin, Clock } from 'lucide-react';
import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    occasion: '',
    volume: '',
    customization: '',
    eventDate: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Contact form submitted:', formData);
    // Handle form submission here
  };

  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Call Us",
      details: ["+91 98765 43210", "+91 11 2345 6789"],
      description: "Speak with our gifting consultants"
    },
    {
      icon: <MessageCircle className="w-6 h-6" />,
      title: "WhatsApp",
      details: ["+91 98765 43210"],
      description: "Quick queries and order updates"
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      details: ["hello@faldaara.com", "orders@faldaara.com"],
      description: "Detailed inquiries and support"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Visit Us",
      details: ["123 Heritage Lane", "Pink City, Jaipur 302001"],
      description: "Experience our atelier in person"
    }
  ];

  const locations = [
    {
      city: "Jaipur",
      address: "123 Heritage Lane, Pink City",
      phone: "+91 98765 43210",
      hours: "9:00 AM - 8:00 PM",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop"
    },
    {
      city: "Delhi",
      address: "456 Connaught Place, New Delhi",
      phone: "+91 11 2345 6789",
      hours: "10:00 AM - 9:00 PM",
      image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=400&h=300&fit=crop"
    },
    {
      city: "Mumbai",
      address: "789 Linking Road, Bandra West",
      phone: "+91 22 9876 5432",
      hours: "10:00 AM - 10:00 PM",
      image: "https://images.unsplash.com/photo-1599599810769-bcde5a160d32?w=400&h=300&fit=crop"
    }
  ];

  return (
    <div className="min-h-screen bg-faldaara-off-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-faldaara-cream to-faldaara-light-green/20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="font-playfair text-5xl md:text-6xl font-bold text-faldaara-dark-green mb-6 animate-fade-in">
            Contact Us
          </h1>
          <p className="font-space text-xl text-gray-700 max-w-3xl mx-auto mb-8 leading-relaxed animate-fade-in">
            We're here to help you create the perfect gift experience. Reach out to our team of 
            gifting consultants for personalized assistance with your custom orders.
          </p>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactInfo.map((contact, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-6">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-faldaara-orange to-faldaara-dark-green rounded-full flex items-center justify-center text-white">
                    {contact.icon}
                  </div>
                  <h3 className="font-playfair text-xl font-semibold text-faldaara-dark-green mb-3">
                    {contact.title}
                  </h3>
                  {contact.details.map((detail, i) => (
                    <p key={i} className="font-space text-faldaara-orange font-medium mb-1">
                      {detail}
                    </p>
                  ))}
                  <p className="font-space text-sm text-gray-600 mt-2">
                    {contact.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-faldaara-cream">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-faldaara-dark-green mb-6">
              Get In Touch
            </h2>
            <p className="font-space text-lg text-gray-700">
              Tell us about your gifting needs and we'll create something extraordinary together
            </p>
          </div>
          
          <Card className="animate-fade-in">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="name" className="font-space text-faldaara-dark-green font-medium">
                      Your Name *
                    </Label>
                    <Input
                      type="text"
                      id="name"
                      className="mt-2"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      required
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="email" className="font-space text-faldaara-dark-green font-medium">
                      Email Address *
                    </Label>
                    <Input
                      type="email"
                      id="email"
                      className="mt-2"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      required
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="phone" className="font-space text-faldaara-dark-green font-medium">
                      Phone Number
                    </Label>
                    <Input
                      type="tel"
                      id="phone"
                      className="mt-2"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="occasion" className="font-space text-faldaara-dark-green font-medium">
                      Gifting Occasion
                    </Label>
                    <Select onValueChange={(value) => setFormData({...formData, occasion: value})}>
                      <SelectTrigger className="mt-2">
                        <SelectValue placeholder="Select occasion" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="diwali">Diwali</SelectItem>
                        <SelectItem value="wedding">Wedding</SelectItem>
                        <SelectItem value="corporate">Corporate Event</SelectItem>
                        <SelectItem value="birthday">Birthday</SelectItem>
                        <SelectItem value="anniversary">Anniversary</SelectItem>
                        <SelectItem value="general">General Inquiry</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="volume" className="font-space text-faldaara-dark-green font-medium">
                      Order Volume
                    </Label>
                    <Select onValueChange={(value) => setFormData({...formData, volume: value})}>
                      <SelectTrigger className="mt-2">
                        <SelectValue placeholder="Select volume" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1-10">1-10 pieces</SelectItem>
                        <SelectItem value="11-50">11-50 pieces</SelectItem>
                        <SelectItem value="51-100">51-100 pieces</SelectItem>
                        <SelectItem value="100+">100+ pieces</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div>
                    <Label htmlFor="customization" className="font-space text-faldaara-dark-green font-medium">
                      Customization Requirements
                    </Label>
                    <Select onValueChange={(value) => setFormData({...formData, customization: value})}>
                      <SelectTrigger className="mt-2">
                        <SelectValue placeholder="Select customization" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="none">No customization</SelectItem>
                        <SelectItem value="monogram">Monogram</SelectItem>
                        <SelectItem value="logo">Corporate Logo</SelectItem>
                        <SelectItem value="names">Couple Names</SelectItem>
                        <SelectItem value="custom">Custom Design</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="eventDate" className="font-space text-faldaara-dark-green font-medium">
                    Event Date (if applicable)
                  </Label>
                  <Input
                    type="date"
                    id="eventDate"
                    className="mt-2"
                    value={formData.eventDate}
                    onChange={(e) => setFormData({...formData, eventDate: e.target.value})}
                  />
                </div>
                
                <div>
                  <Label htmlFor="message" className="font-space text-faldaara-dark-green font-medium">
                    Message
                  </Label>
                  <Textarea
                    id="message"
                    rows={4}
                    className="mt-2"
                    placeholder="Tell us about your requirements, preferences, or any questions you have..."
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                  />
                </div>
                
                <Button 
                  type="submit"
                  className="w-full bg-faldaara-dark-green hover:bg-faldaara-orange text-white font-space text-lg py-3 rounded-none transition-all duration-300"
                >
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Locations */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-faldaara-dark-green mb-6">
              Visit Our Ateliers
            </h2>
            <p className="font-space text-lg text-gray-700">
              Experience the Faldaara difference in person at our boutique locations
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {locations.map((location, index) => (
              <Card key={index} className="overflow-hidden group hover:shadow-xl transition-all duration-300 animate-fade-in" style={{ animationDelay: `${index * 0.2}s` }}>
                <div className="relative overflow-hidden">
                  <img 
                    src={location.image} 
                    alt={`Faldaara ${location.city}`}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <CardContent className="p-6">
                  <h3 className="font-playfair text-xl font-semibold text-faldaara-dark-green mb-3">
                    {location.city} Atelier
                  </h3>
                  <div className="space-y-2 text-sm font-space text-gray-600">
                    <div className="flex items-center space-x-2">
                      <MapPin size={16} />
                      <span>{location.address}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Phone size={16} />
                      <span>{location.phone}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock size={16} />
                      <span>{location.hours}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* WhatsApp Integration */}
      <section className="py-20 bg-gradient-to-r from-faldaara-dark-green to-amber-900 text-faldaara-off-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="animate-fade-in">
            <MessageCircle size={48} className="mx-auto mb-6 text-gold" />
            <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-6">
              WhatsApp Concierge
            </h2>
            <p className="font-space text-xl mb-8 leading-relaxed">
              Get instant assistance from our gifting experts. Chat with us on WhatsApp for 
              quick queries, order updates, and personalized recommendations.
            </p>
            <Button 
              className="bg-green-600 hover:bg-green-700 text-white font-space text-lg px-8 py-3 rounded-none transition-all duration-300 transform hover:scale-105"
            >
              Start WhatsApp Chat
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
