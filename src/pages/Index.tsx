import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import WhyChooseSection from "@/components/WhyChooseSection";
import PartnersSection from "@/components/PartnersSection";
import SuccessStoriesSection from "@/components/SuccessStoriesSection";
import CTASection from "@/components/CTASection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <HowItWorksSection />
      <WhyChooseSection />
      <PartnersSection />
      <SuccessStoriesSection />
      <CTASection />
      <ContactSection />
      <Footer />
    </main>
  );
};

export default Index;
