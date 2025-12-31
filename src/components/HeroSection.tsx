import { motion } from "framer-motion";
import { ArrowRight, Building2, MapPin, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center bg-hero-gradient overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient Orbs */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 -right-1/4 w-[600px] h-[600px] rounded-full"
          style={{
            background: "radial-gradient(circle, hsl(43 74% 49% / 0.15) 0%, transparent 70%)",
          }}
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -bottom-1/4 -left-1/4 w-[800px] h-[800px] rounded-full"
          style={{
            background: "radial-gradient(circle, hsl(220 56% 30% / 0.3) 0%, transparent 70%)",
          }}
        />
        
        {/* Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(hsl(var(--primary-foreground)) 1px, transparent 1px),
                             linear-gradient(90deg, hsl(var(--primary-foreground)) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="container-custom relative z-10 pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/10 border border-primary-foreground/20 backdrop-blur-sm mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span className="text-sm text-primary-foreground/90 font-medium">
                India's Premier Retail Real Estate Connector
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-display font-bold text-primary-foreground leading-tight mb-6"
            >
              Connecting Brands to{" "}
              <span className="text-gradient-gold">Profitable Locations</span>{" "}
              Across India
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg sm:text-xl text-primary-foreground/70 mb-8 max-w-xl mx-auto lg:mx-0"
            >
              DRC bridges top retail brands with prime commercial developments 
              nationwide, ensuring strategic growth and maximum ROI.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Button
                variant="hero"
                size="xl"
                onClick={() => scrollToSection("#contact")}
                className="group"
              >
                Partner With Us
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button
                variant="hero-outline"
                size="xl"
                onClick={() => scrollToSection("#about")}
              >
                Learn More
              </Button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="grid grid-cols-3 gap-6 mt-12 pt-12 border-t border-primary-foreground/10"
            >
              {[
                { value: "150+", label: "Deals Closed" },
                { value: "50+", label: "Cities Covered" },
                { value: "25+", label: "Brand Partners" },
              ].map((stat, index) => (
                <div key={index} className="text-center lg:text-left">
                  <div className="text-2xl sm:text-3xl font-display font-bold text-accent">
                    {stat.value}
                  </div>
                  <div className="text-sm text-primary-foreground/60">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative hidden lg:block"
          >
            <div className="relative">
              {/* Main Card */}
              <div className="glass-dark rounded-2xl p-8 border border-primary-foreground/10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center">
                    <Building2 className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-primary-foreground text-lg">
                      Strategic Connections
                    </h3>
                    <p className="text-primary-foreground/60 text-sm">
                      Brand-to-Location Matching
                    </p>
                  </div>
                </div>
                
                {/* Sample Deals */}
                <div className="space-y-4">
                  {[
                    { brand: "Zudio", location: "A. Shridhar Complex", city: "Ahmedabad" },
                    { brand: "Croma", location: "Phoenix Mall", city: "Ahmedabad" },
                    { brand: "Style Union", location: "VR Mall", city: "Chennai" },
                  ].map((deal, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.5 + index * 0.1 }}
                      className="flex items-center gap-4 p-4 rounded-xl bg-primary-foreground/5 border border-primary-foreground/10"
                    >
                      <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center">
                        <MapPin className="w-5 h-5 text-accent" />
                      </div>
                      <div className="flex-1">
                        <p className="font-semibold text-primary-foreground text-sm">
                          {deal.brand} → {deal.location}
                        </p>
                        <p className="text-primary-foreground/50 text-xs">{deal.city}</p>
                      </div>
                      <TrendingUp className="w-5 h-5 text-green-400" />
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Floating Badge */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-6 -right-6 px-4 py-2 rounded-full bg-accent text-accent-foreground font-semibold text-sm shadow-gold"
              >
                Trusted Partner
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 rounded-full border-2 border-primary-foreground/30 flex justify-center pt-2"
        >
          <motion.div
            animate={{ opacity: [1, 0, 1], y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1.5 h-3 rounded-full bg-accent"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
