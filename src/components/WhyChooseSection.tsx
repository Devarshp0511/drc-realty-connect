import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Network, Brain, Shield, Zap, BarChart3, HeartHandshake } from "lucide-react";

const WhyChooseSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const reasons = [
    {
      icon: Network,
      title: "Strong Network",
      description: "Access to 1000+ commercial properties and 50+ developer partnerships across India.",
    },
    {
      icon: Brain,
      title: "Market Expertise",
      description: "Deep understanding of retail dynamics, consumer behavior, and location analytics.",
    },
    {
      icon: Shield,
      title: "Trusted Partnerships",
      description: "Long-standing relationships with leading brands and respected developers.",
    },
    {
      icon: Zap,
      title: "Faster Closures",
      description: "Streamlined processes that reduce deal timelines by up to 40%.",
    },
    {
      icon: BarChart3,
      title: "Higher ROI",
      description: "Strategic location matching that maximizes footfall and revenue potential.",
    },
    {
      icon: HeartHandshake,
      title: "End-to-End Support",
      description: "Dedicated team support from initial consultation to store launch.",
    },
  ];

  return (
    <section className="section-padding bg-background relative overflow-hidden">
      {/* Background Gradient */}
      <div 
        className="absolute inset-0"
        style={{
          background: `radial-gradient(ellipse at 80% 50%, hsl(var(--accent) / 0.08) 0%, transparent 50%),
                       radial-gradient(ellipse at 20% 80%, hsl(var(--primary) / 0.05) 0%, transparent 50%)`,
        }}
      />

      <div ref={ref} className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-semibold mb-4">
              Why Choose DRC
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-foreground mb-6">
              The DRC <span className="text-gradient-gold">Advantage</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              With years of experience and a proven track record, DRC brings unmatched value 
              to every partnership. We're not just connectors — we're growth partners.
            </p>

            {/* Feature List */}
            <div className="space-y-4">
              {[
                "Proprietary database of commercial properties",
                "In-depth market research and analytics",
                "Dedicated relationship managers",
                "Transparent and ethical dealings",
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: index * 0.1 + 0.3 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                    <svg className="w-3 h-3 text-accent" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-foreground font-medium">{feature}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Cards Grid */}
          <div className="grid sm:grid-cols-2 gap-4">
            {reasons.map((reason, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <div className="glass-card rounded-xl p-6 h-full transition-all duration-300 hover:shadow-premium-lg hover:-translate-y-1 hover:border-accent/30">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                    <reason.icon className="w-5 h-5 text-accent" />
                  </div>
                  <h3 className="font-display font-bold text-foreground mb-2 group-hover:text-accent transition-colors">
                    {reason.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {reason.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
