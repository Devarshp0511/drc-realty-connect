import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const PartnersSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Partner logos (using text placeholders for brands)
  const partners = [
    { name: "Zudio", category: "Fashion" },
    { name: "Croma", category: "Electronics" },
    { name: "Style Union", category: "Fashion" },
    { name: "Reliance Trends", category: "Fashion" },
    // { name: "Max Fashion", category: "Fashion" },
    { name: "Pantaloons", category: "Fashion" },
    { name: "Lifestyle", category: "Lifestyle" },
    { name: "Westside", category: "Fashion" },
    { name: "Netre", category: "Eyewear" },
    { name: "Lenskart", category: "Eyewear" },
    { name: "Burnt Toast", category: "Fashion" },
    { name: "Walkway", category: "Footwear" },
    { name: "Bata", category: "Footwear" },
    { name: "Relaxo", category: "Footwear" },
    { name: "Mr. DIY", category: "General-Purpose" },
  { name: "Reliance Smart", category: "Grocery" },
    { name: "Star-Bazaar", category: "Grocery" },







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
                  <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                    <span className="text-xl font-display font-bold text-accent">
                      {partner.name.charAt(0)}
                    </span>
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

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-8 flex-wrap justify-center">
            {[
              { icon: "🏆", text: "Industry Leaders" },
              { icon: "🤝", text: "Trusted Partnerships" },
              { icon: "📈", text: "Proven Results" },
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-2 text-muted-foreground">
                <span className="text-2xl">{item.icon}</span>
                <span className="font-medium">{item.text}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PartnersSection;
