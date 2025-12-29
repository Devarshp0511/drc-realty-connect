import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Search, GitBranch, MessageCircle, Rocket } from "lucide-react";

const HowItWorksSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const steps = [
    {
      icon: Search,
      number: "01",
      title: "Discover",
      description:
        "We understand your brand's requirements, target markets, and expansion goals through detailed consultation.",
    },
    {
      icon: GitBranch,
      number: "02",
      title: "Match",
      description:
        "Our team identifies optimal locations from our extensive network of commercial properties and developer partnerships.",
    },
    {
      icon: MessageCircle,
      number: "03",
      title: "Negotiate",
      description:
        "We facilitate discussions, handle negotiations, and ensure terms that benefit both brands and property owners.",
    },
    {
      icon: Rocket,
      number: "04",
      title: "Launch",
      description:
        "From final agreements to store launch, we support the entire process for a seamless brand opening.",
    },
  ];

  return (
    <section id="how-it-works" className="section-padding bg-primary relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `linear-gradient(30deg, hsl(var(--primary-foreground)) 12%, transparent 12.5%, transparent 87%, hsl(var(--primary-foreground)) 87.5%, hsl(var(--primary-foreground))),
              linear-gradient(150deg, hsl(var(--primary-foreground)) 12%, transparent 12.5%, transparent 87%, hsl(var(--primary-foreground)) 87.5%, hsl(var(--primary-foreground))),
              linear-gradient(30deg, hsl(var(--primary-foreground)) 12%, transparent 12.5%, transparent 87%, hsl(var(--primary-foreground)) 87.5%, hsl(var(--primary-foreground))),
              linear-gradient(150deg, hsl(var(--primary-foreground)) 12%, transparent 12.5%, transparent 87%, hsl(var(--primary-foreground)) 87.5%, hsl(var(--primary-foreground))),
              linear-gradient(60deg, hsla(var(--accent) / 0.3) 25%, transparent 25.5%, transparent 75%, hsla(var(--accent) / 0.3) 75%, hsla(var(--accent) / 0.3)),
              linear-gradient(60deg, hsla(var(--accent) / 0.3) 25%, transparent 25.5%, transparent 75%, hsla(var(--accent) / 0.3) 75%, hsla(var(--accent) / 0.3))`,
            backgroundSize: "80px 140px",
            backgroundPosition: "0 0, 0 0, 40px 70px, 40px 70px, 0 0, 40px 70px",
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
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent/20 text-accent text-sm font-semibold mb-4">
            Our Process
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-primary-foreground mb-6">
            How It <span className="text-gradient-gold">Works</span>
          </h2>
          <p className="text-lg text-primary-foreground/70">
            A streamlined four-step process designed for efficiency and success
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Connecting Line - Desktop */}
          <div className="hidden lg:block absolute top-24 left-[calc(12.5%+28px)] right-[calc(12.5%+28px)] h-0.5 bg-gradient-to-r from-accent/50 via-accent to-accent/50" />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="relative"
              >
                {/* Step Card */}
                <div className="text-center">
                  {/* Icon Circle */}
                  <div className="relative inline-block mb-6">
                    <motion.div
                      animate={isInView ? { scale: [0.8, 1] } : {}}
                      transition={{ delay: index * 0.15 + 0.3, type: "spring" }}
                      className="w-14 h-14 rounded-full bg-accent flex items-center justify-center shadow-gold relative z-10"
                    >
                      <step.icon className="w-7 h-7 text-accent-foreground" />
                    </motion.div>
                    {/* Number Badge */}
                    <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-primary-foreground text-primary text-xs font-bold flex items-center justify-center">
                      {step.number}
                    </span>
                  </div>

                  {/* Content */}
                  <h3 className="font-display font-bold text-xl text-primary-foreground mb-3">
                    {step.title}
                  </h3>
                  <p className="text-primary-foreground/60 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Arrow for mobile/tablet */}
                {index < steps.length - 1 && (
                  <div className="lg:hidden flex justify-center my-6">
                    <svg
                      className="w-6 h-6 text-accent transform rotate-90"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
