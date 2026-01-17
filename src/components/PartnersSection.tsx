import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import bataLogo from "@/assets/bata-logo.jpeg";
import burnttoastLogo from "@/assets/burnttoast-logo.png";
import cromaLogo from "@/assets/croma-logo.png";
import lenskartLogo from "@/assets/lenskart-logo.webp";

const PartnersSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Partner logos (using text placeholders for brands)
  const partners = [
    { name: "Zudio", category: "Fashion", logo: null },
    { name: "Croma", category: "Electronics", logo: cromaLogo },
    { name: "Style Union", category: "Fashion", logo: null },
    { name: "Reliance Trends", category: "Fashion", logo: null },
    { name: "Pantaloons", category: "Fashion", logo: null },
    { name: "Lifestyle", category: "Lifestyle", logo: null },
    { name: "Westside", category: "Fashion", logo: null },
    { name: "Netre", category: "Eyewear", logo: null },
    { name: "Lenskart", category: "Eyewear", logo: lenskartLogo },
    { name: "Burnt Toast", category: "Fashion", logo: burnttoastLogo },
    { name: "Walkway", category: "Footwear", logo: null },
    { name: "Bata", category: "Footwear", logo: bataLogo },
    { name: "Relaxo", category: "Footwear", logo: null },
    { name: "Mr. DIY", category: "General-Purpose", logo: null },
    { name: "Reliance Smart", category: "Grocery", logo: null },
    { name: "Star-Bazaar", category: "Grocery", logo: null },
  ];

  // const developers = [
  //   "Phoenix Mills",
  //   "Prestige Group",
  //   "Brigade Group",
  //   "DLF",
  //   "Oberoi Realty",
  //   "Godrej Properties",
  // ];

  return (
    <section id="partners" className="section-padding bg-background relative overflow-hidden">
      <div ref={ref} className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-semibold mb-4">
            Our Partners
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-foreground mb-6">
            Trusted by <span className="text-gradient-gold">Leading Brands</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            We've partnered with India's most recognized retail brands and premium developers
          </p>
        </motion.div>

        {/* Brand Partners */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <h3 className="text-center text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-8">
            Retail Brand Partners
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {partners.map((partner, index) => (
              <motion.div
                key={partner.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: index * 0.05 + 0.3 }}
                className="group"
              >
                <div className="glass-card rounded-xl p-6 h-full flex flex-col items-center justify-center text-center transition-all duration-300 hover:shadow-premium-lg hover:-translate-y-1 hover:border-accent/30">
                  <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors overflow-hidden">
                    {partner.logo ? (
                      <img 
                        src={partner.logo} 
                        alt={`${partner.name} logo`} 
                        className="w-full h-full object-cover rounded-full"
                      />
                    ) : (
                      <span className="text-xl font-display font-bold text-accent">
                        {partner.name.charAt(0)}
                      </span>
                    )}
                  </div>
                  <h4 className="font-semibold text-foreground group-hover:text-accent transition-colors">
                    {partner.name}
                  </h4>
                  <p className="text-xs text-muted-foreground mt-1">{partner.category}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Developer Partners */}
        {/* <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="text-center text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-8">
            Developer Partners
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {developers.map((developer, index) => (
              <motion.div
                key={developer}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: index * 0.05 + 0.5 }}
                className="px-6 py-3 rounded-full bg-primary/5 border border-primary/10 text-foreground font-medium hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300 cursor-default"
              >
                {developer}
              </motion.div>
            ))}
          </div>
        </motion.div> */}
      </div>
    </section>
  );
};

export default PartnersSection;
