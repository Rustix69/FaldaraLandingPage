
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import FeaturedProducts from '@/components/FeaturedProducts';
import BrandStory from '@/components/BrandStory';
import BestSellers from '@/components/BestSellers';
import GiftingExperience from '@/components/GiftingExperience';
import OccasionsSection from '@/components/OccasionsSection';
import CallToAction from '@/components/CallToAction';

const Index = () => {
  return (
    <div className="min-h-screen bg-faldaara-off-white">
      <Header />
      <HeroSection />
      <FeaturedProducts />
      {/* <BrandStory /> */}
      <BestSellers />
      <GiftingExperience />
      <OccasionsSection />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default Index;
