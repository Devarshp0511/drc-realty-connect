import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Quote, ArrowRight, TrendingUp, Users, MapPin } from "lucide-react";

const SuccessStoriesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const stories = [
    {
      brand: "Zudio",
      complex: "A. Shridhar Complex",
      city: "Ahmedabad",
      quote:
        "DRC identified the perfect location for our Ahmedabad expansion. The footfall exceeded our projections by 40% in the first quarter.",
      author: "Retail Expansion Head",
      stats: [
        { label: "Footfall Increase", value: "+40%" },
        { label: "Time to Launch", value: "45 Days" },
      ],
    },
    {
      brand: "Croma",
      complex: "Phoenix Marketcity",
      city: "Mumbai",
      quote:
        "The team at DRC understood our specific requirements and matched us with a premium location that aligned perfectly with our brand positioning.",
      author: "Business Development Manager",
      stats: [
        { label: "ROI Achievement", value: "120%" },
        { label: "Store Size", value: "8,000 sq ft" },
      ],
    },
    {
      brand: "Style Union",
      complex: "Select Citywalk",
      city: "Delhi NCR",
      quote:
        "From initial discussion to store opening, DRC handled everything seamlessly. Their network and expertise are unmatched in the industry.",
      author: "Regional Director",
      stats: [
        { label: "Deal Closure", value: "30 Days" },
        { label: "Brand Visibility", value: "+65%" },
      ],
    },
  ];

  return (
    <section className="section-padding bg-secondary/50 relative overflow-hidden">
      <div ref={ref} className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-semibold mb-4">
            Success Stories
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-foreground mb-6">
            Real Results, Real <span className="text-gradient-gold">Impact</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Discover how DRC has helped leading brands find their perfect retail locations
          </p>
        </motion.div>

        {/* Stories Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {stories.map((story, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group"
            >
              <div className="glass-card rounded-2xl p-8 h-full flex flex-col transition-all duration-300 hover:shadow-premium-lg hover:-translate-y-2">
                {/* Brand Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                      <span className="font-display font-bold text-accent text-lg">
                        {story.brand.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-foreground">
                        {story.brand}
                      </h3>
                      <div className="flex items-center gap-1 text-xs text-muted-foreground">
                        <MapPin className="w-3 h-3" />
                        {story.city}
                      </div>
                    </div>
                  </div>
                  <Quote className="w-8 h-8 text-accent/20" />
                </div>

                {/* Quote */}
                <blockquote className="text-muted-foreground leading-relaxed mb-6 flex-1">
                  "{story.quote}"
                </blockquote>

                {/* Author */}
                <div className="text-sm text-foreground font-medium mb-6">
                  — {story.author}, {story.brand}
                </div>

                {/* Location Tag */}
                <div className="flex items-center gap-2 mb-6 p-3 rounded-lg bg-primary/5">
                  <MapPin className="w-4 h-4 text-accent" />
                  <span className="text-sm text-foreground font-medium">
                    {story.complex}
                  </span>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-4 pt-6 border-t border-border">
                  {story.stats.map((stat, statIndex) => (
                    <div key={statIndex} className="text-center">
                      <div className="text-lg font-display font-bold text-accent">
                        {stat.value}
                      </div>
                      <div className="text-xs text-muted-foreground">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-12"
        >
          <p className="text-muted-foreground mb-4">
            Want to be our next success story?
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-accent font-semibold hover:underline group"
          >
            Get in Touch
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default SuccessStoriesSection;
