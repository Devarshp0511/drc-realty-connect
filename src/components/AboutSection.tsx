import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Target, Eye, Handshake } from "lucide-react";

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const cards = [
    {
      icon: Target,
      title: "Our Mission",
      description:
        "To seamlessly connect India's top retail brands with prime commercial properties, fostering profitable partnerships that drive growth for all stakeholders.",
    },
    {
      icon: Eye,
      title: "Our Vision",
      description:
        "To become India's most trusted retail real estate connector, transforming how brands expand and developers lease, setting the standard for excellence in the industry.",
    },
    {
      icon: Handshake,
      title: "Our Role",
      description:
        "As the strategic bridge between brands and developers, we identify optimal locations, negotiate favorable terms, and ensure smooth partnerships from conception to launch.",
    },
  ];

  return (
    <section id="about" className="section-padding bg-background relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-50">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 30% 20%, hsl(var(--accent) / 0.05) 0%, transparent 50%),
                             radial-gradient(circle at 70% 80%, hsl(var(--primary) / 0.03) 0%, transparent 50%)`,
          }}
        />
      </div>

      <div ref={ref} className="container-custom relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-semibold mb-4">
            About DRC
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-foreground mb-6">
            Your Trusted Partner in{" "}
            <span className="text-gradient-gold">Retail Real Estate</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            DRC Realty Connect stands at the intersection of retail ambition and commercial opportunity,
            bridging the gap between brands seeking expansion and developers with premium spaces.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group relative"
            >
              <div className="glass-card rounded-2xl p-8 h-full transition-all duration-300 hover:shadow-premium-lg hover:-translate-y-2">
                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
                  <card.icon className="w-7 h-7 text-accent" />
                </div>
                
                {/* Content */}
                <h3 className="font-display font-bold text-xl text-foreground mb-4">
                  {card.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {card.description}
                </p>

                {/* Hover Accent Line */}
                <div className="absolute bottom-0 left-8 right-8 h-1 bg-accent/0 rounded-full group-hover:bg-accent transition-colors" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 p-8 rounded-2xl bg-primary text-primary-foreground"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "8+", label: "Years of Experience" },
              { value: "₹500Cr+", label: "Deals Facilitated" },
              { value: "100%", label: "Client Satisfaction" },
              { value: "Pan-India", label: "Network Coverage" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl sm:text-3xl font-display font-bold text-accent mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-primary-foreground/70">{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
