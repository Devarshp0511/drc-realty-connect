import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, TrendingUp, Users, FileSearch, Rocket } from "lucide-react";

const ServicesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const services = [
    {
      icon: MapPin,
      title: "Brand-to-Location Matching",
      description:
        "We analyze brand requirements, target demographics, and market potential to identify the perfect commercial properties that align with your growth strategy.",
    },
    {
      icon: TrendingUp,
      title: "Retail Expansion Strategy",
      description:
        "Comprehensive market research and strategic planning to help brands expand efficiently across tier-1, tier-2, and tier-3 cities in India.",
    },
    {
      icon: Users,
      title: "Developer Partnerships",
      description:
        "We connect property developers and complex owners with premium retail brands, ensuring high-quality tenants and maximized occupancy rates.",
    },
    {
      icon: FileSearch,
      title: "Site Evaluation & Feasibility",
      description:
        "Detailed analysis of foot traffic, competition, accessibility, and commercial viability to ensure informed decision-making.",
    },
    {
      icon: Rocket,
      title: "End-to-End Deal Facilitation",
      description:
        "From initial introduction to final agreement, we manage negotiations, documentation, and ensure smooth deal closure for all parties.",
    },
  ];

  return (
    <section id="services" className="section-padding bg-secondary/50 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-accent/5 to-transparent" />
      
      <div ref={ref} className="container-custom relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
            Our Services
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-foreground mb-6">
            Comprehensive Solutions for{" "}
            <span className="text-gradient-gold">Retail Growth</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            From strategic planning to deal closure, we provide end-to-end support 
            for brands and developers seeking successful partnerships.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`group ${index === 4 ? "lg:col-span-1 lg:col-start-2" : ""}`}
            >
              <div className="glass-card rounded-2xl p-8 h-full transition-all duration-300 hover:shadow-premium-lg hover:-translate-y-2 hover:border-accent/30">
                {/* Icon with Background */}
                <div className="relative w-16 h-16 mb-6">
                  <div className="absolute inset-0 bg-accent/10 rounded-2xl rotate-6 group-hover:rotate-12 transition-transform" />
                  <div className="relative w-full h-full rounded-2xl bg-accent/20 flex items-center justify-center">
                    <service.icon className="w-8 h-8 text-accent" />
                  </div>
                </div>

                {/* Content */}
                <h3 className="font-display font-bold text-xl text-foreground mb-3 group-hover:text-accent transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>

                {/* Arrow Indicator */}
                <div className="mt-6 flex items-center gap-2 text-accent opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-sm font-semibold">Learn More</span>
                  <svg
                    className="w-4 h-4 transform group-hover:translate-x-1 transition-transform"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
