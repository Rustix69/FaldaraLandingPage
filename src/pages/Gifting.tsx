
import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Gifting = () => {
  const [formData, setFormData] = useState({
    occasion: '',
    volume: '',
    boxStyle: '',
    personalization: '',
    message: '',
    eventDate: '',
    contactName: '',
    contactEmail: '',
    contactPhone: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
  };

  const customizationExamples = [
    {
      title: "Corporate Branding",
      image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=400&h=300&fit=crop",
      description: "Elegant boxes featuring your company logo and brand colors"
    },
    {
      title: "Wedding Monograms",
      image: "https://images.unsplash.com/photo-1599599810769-bcde5a160d32?w=400&h=300&fit=crop",
      description: "Romantic couple initials with traditional Indian motifs"
    },
    {
      title: "Festival Collections",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop",
      description: "Seasonal designs celebrating Diwali, Holi, and other festivities"
    }
  ];

  const testimonials = [
    {
      name: "Rajesh Sharma",
      company: "Tata Industries",
      text: "Faldaara transformed our corporate gifting. The attention to detail and personalization exceeded our expectations.",
      rating: 5
    },
    {
      name: "Priya & Arjun",
      occasion: "Wedding",
      text: "Our wedding guests still talk about the beautiful Faldaara gift boxes. Truly memorable and elegant.",
      rating: 5
    },
    {
      name: "Meera Patel",
      company: "Event Planner",
      text: "I've worked with many gifting companies, but Faldaara's quality and service are unmatched.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-faldaara-off-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-faldaara-cream to-faldaara-light-green/20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="font-playfair text-5xl md:text-6xl font-bold text-faldaara-dark-green mb-6 animate-fade-in">
            Custom Gifting
          </h1>
          <p className="font-space text-xl text-gray-700 max-w-3xl mx-auto mb-8 leading-relaxed animate-fade-in">
            Create bespoke gift experiences that reflect your unique story. From intimate celebrations to grand corporate events, 
            we craft personalized confections that leave lasting impressions.
          </p>
        </div>
      </section>

      {/* Customization Examples */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-faldaara-dark-green mb-6">
              Personalization Gallery
            </h2>
            <p className="font-space text-lg text-gray-700 max-w-2xl mx-auto">
              Discover the art of personalization through our curated collection of custom gift experiences
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {customizationExamples.map((example, index) => (
              <Card key={index} className="overflow-hidden group hover:shadow-xl transition-all duration-300 animate-fade-in" style={{ animationDelay: `${index * 0.2}s` }}>
                <div className="relative overflow-hidden">
                  <img 
                    src={example.image} 
                    alt={example.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <CardHeader>
                  <CardTitle className="font-playfair text-xl text-faldaara-dark-green">
                    {example.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="font-space text-gray-600">
                    {example.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Customization Form */}
      <section className="py-20 bg-faldaara-cream">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-faldaara-dark-green mb-6">
              Start Your Custom Journey
            </h2>
            <p className="font-space text-lg text-gray-700">
              Tell us about your vision, and we'll bring it to life with our artisanal touch
            </p>
          </div>
          
          <Card className="animate-fade-in">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="occasion" className="font-space text-faldaara-dark-green font-medium">
                      Occasion *
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
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div>
                    <Label htmlFor="volume" className="font-space text-faldaara-dark-green font-medium">
                      Order Volume *
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
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="boxStyle" className="font-space text-faldaara-dark-green font-medium">
                      Box Style
                    </Label>
                    <Select onValueChange={(value) => setFormData({...formData, boxStyle: value})}>
                      <SelectTrigger className="mt-2">
                        <SelectValue placeholder="Select box style" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="classic">Classic Elegance</SelectItem>
                        <SelectItem value="royal">Royal Heritage</SelectItem>
                        <SelectItem value="modern">Modern Luxury</SelectItem>
                        <SelectItem value="traditional">Traditional Rajasthani</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div>
                    <Label htmlFor="personalization" className="font-space text-faldaara-dark-green font-medium">
                      Personalization Type
                    </Label>
                    <Select onValueChange={(value) => setFormData({...formData, personalization: value})}>
                      <SelectTrigger className="mt-2">
                        <SelectValue placeholder="Select personalization" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="monogram">Monogram</SelectItem>
                        <SelectItem value="logo">Corporate Logo</SelectItem>
                        <SelectItem value="names">Couple Names</SelectItem>
                        <SelectItem value="message">Custom Message</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="eventDate" className="font-space text-faldaara-dark-green font-medium">
                      Event Date
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
                    <Label htmlFor="contactName" className="font-space text-faldaara-dark-green font-medium">
                      Your Name *
                    </Label>
                    <Input
                      type="text"
                      id="contactName"
                      className="mt-2"
                      value={formData.contactName}
                      onChange={(e) => setFormData({...formData, contactName: e.target.value})}
                      required
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="contactEmail" className="font-space text-faldaara-dark-green font-medium">
                      Email Address *
                    </Label>
                    <Input
                      type="email"
                      id="contactEmail"
                      className="mt-2"
                      value={formData.contactEmail}
                      onChange={(e) => setFormData({...formData, contactEmail: e.target.value})}
                      required
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="contactPhone" className="font-space text-faldaara-dark-green font-medium">
                      Phone Number
                    </Label>
                    <Input
                      type="tel"
                      id="contactPhone"
                      className="mt-2"
                      value={formData.contactPhone}
                      onChange={(e) => setFormData({...formData, contactPhone: e.target.value})}
                    />
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="message" className="font-space text-faldaara-dark-green font-medium">
                    Special Requirements
                  </Label>
                  <Textarea
                    id="message"
                    rows={4}
                    className="mt-2"
                    placeholder="Tell us about your vision, dietary preferences, or any special requirements..."
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                  />
                </div>
                
                <Button 
                  type="submit"
                  className="w-full bg-faldaara-dark-green hover:bg-faldaara-orange text-white font-space text-lg py-3 rounded-none transition-all duration-300"
                >
                  Submit Custom Request
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Client Testimonials */}
      <section className="py-20 bg-faldaara-off-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-faldaara-dark-green mb-6">
              Client Stories
            </h2>
            <p className="font-space text-lg text-gray-700">
              Hear from those who have experienced the Faldaara difference
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="text-center animate-fade-in" style={{ animationDelay: `${index * 0.2}s` }}>
                <CardContent className="p-6">
                  <div className="flex justify-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i} className="text-faldaara-orange text-xl">★</span>
                    ))}
                  </div>
                  <p className="font-space text-gray-700 mb-4 italic">
                    "{testimonial.text}"
                  </p>
                  <h4 className="font-playfair text-lg font-semibold text-faldaara-dark-green">
                    {testimonial.name}
                  </h4>
                  <p className="font-space text-sm text-faldaara-orange">
                    {testimonial.company || testimonial.occasion}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Gifting;
