import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { dealLocations, getCategoryColor } from "@/data/locations";
import { MapPin, Building2, Calendar } from "lucide-react";

const IndiaMap = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [filter, setFilter] = useState<string>("all");

  const filteredLocations = filter === "all" 
    ? dealLocations 
    : dealLocations.filter(loc => loc.category === filter);

  const categories = [
    { id: "all", label: "All Deals" },
    { id: "fashion", label: "Fashion" },
    { id: "electronics", label: "Electronics" },
    { id: "lifestyle", label: "Lifestyle" },
  ];

  return (
    <section id="presence" className="section-padding bg-secondary/50 relative overflow-hidden">
      <div ref={ref} className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-semibold mb-4">
            Our Presence
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-foreground mb-6">
            Our Footprint Across <span className="text-gradient-gold">India</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Driving retail growth city by city. Explore our successful partnerships nationwide.
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 mb-8"
        >
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilter(cat.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                filter === cat.id
                  ? "bg-accent text-accent-foreground shadow-gold"
                  : "bg-card text-foreground hover:bg-accent/10"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </motion.div>

        {/* Map Visual - Static India Map with Pins */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative rounded-2xl overflow-hidden shadow-premium-lg border border-border bg-card"
        >
          <div className="h-[500px] lg:h-[600px] w-full relative">
            {/* India Map Background */}
            <div className="absolute inset-0 flex items-center justify-center">
              <svg 
                viewBox="0 0 800 800" 
                className="w-full h-full max-w-[600px] opacity-20"
                fill="currentColor"
              >
                <path d="M380 50 L420 50 L450 80 L480 70 L520 90 L540 120 L560 110 L600 130 L620 170 L650 180 L680 220 L700 250 L720 290 L730 330 L720 370 L700 410 L680 450 L650 480 L620 510 L580 540 L540 560 L500 590 L460 620 L420 640 L380 660 L340 670 L300 660 L260 640 L220 610 L180 570 L150 530 L130 480 L120 430 L110 380 L120 330 L140 280 L170 240 L200 200 L240 170 L280 140 L320 110 L360 80 L380 50 Z" 
                      className="text-accent"
                />
              </svg>
            </div>

            {/* Animated Dots for Cities */}
            <div className="absolute inset-0">
              {filteredLocations.map((location, index) => {
                // Convert lat/lng to approximate position on the visual
                const x = ((location.lng - 68) / (98 - 68)) * 100;
                const y = ((35 - location.lat) / (35 - 8)) * 100;
                
                return (
                  <motion.div
                    key={location.id}
                    initial={{ scale: 0, opacity: 0 }}
                    animate={isInView ? { scale: 1, opacity: 1 } : {}}
                    transition={{ delay: 0.5 + index * 0.05, type: "spring" }}
                    className="absolute group cursor-pointer"
                    style={{ left: `${x}%`, top: `${y}%` }}
                  >
                    {/* Pulse Animation */}
                    <div 
                      className="absolute w-8 h-8 rounded-full animate-ping opacity-30"
                      style={{ backgroundColor: getCategoryColor(location.category), left: -12, top: -12 }}
                    />
                    {/* Dot */}
                    <div 
                      className="relative w-4 h-4 rounded-full border-2 border-card shadow-lg transition-transform group-hover:scale-150"
                      style={{ backgroundColor: getCategoryColor(location.category) }}
                    />
                    {/* Tooltip */}
                    <div className="absolute left-6 top-0 opacity-0 group-hover:opacity-100 transition-opacity z-10 pointer-events-none">
                      <div className="bg-card rounded-lg shadow-premium-lg border border-border p-3 min-w-[180px]">
                        <div className="flex items-center gap-2 mb-1">
                          <div 
                            className="w-2 h-2 rounded-full" 
                            style={{ backgroundColor: getCategoryColor(location.category) }}
                          />
                          <span className="font-semibold text-foreground text-sm">{location.brand}</span>
                        </div>
                        <p className="text-xs text-muted-foreground">{location.complex}</p>
                        <p className="text-xs text-muted-foreground">{location.city} • {location.year}</p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Stats Overlay */}
            <div className="absolute bottom-4 left-4 right-4 lg:left-auto lg:right-4 lg:w-auto">
              <div className="glass-card rounded-xl p-4 flex flex-wrap gap-6 justify-center lg:justify-start">
                <div className="text-center">
                  <div className="text-2xl font-display font-bold text-accent">{dealLocations.length}+</div>
                  <div className="text-xs text-muted-foreground">Deals Closed</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-display font-bold text-accent">
                    {new Set(dealLocations.map(l => l.city)).size}
                  </div>
                  <div className="text-xs text-muted-foreground">Cities</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-display font-bold text-accent">
                    {new Set(dealLocations.map(l => l.brand)).size}
                  </div>
                  <div className="text-xs text-muted-foreground">Brands</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Location Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-8">
          {filteredLocations.map((location, index) => (
            <motion.div
              key={location.id}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="glass-card rounded-xl p-4 hover:shadow-premium-lg transition-all hover:-translate-y-1"
            >
              <div className="flex items-center gap-3 mb-3">
                <div 
                  className="w-10 h-10 rounded-lg flex items-center justify-center"
                  style={{ backgroundColor: getCategoryColor(location.category) + "20" }}
                >
                  <span 
                    className="font-display font-bold"
                    style={{ color: getCategoryColor(location.category) }}
                  >
                    {location.brand.charAt(0)}
                  </span>
                </div>
                <div>
                  <span className="font-semibold text-foreground block">{location.brand}</span>
                  <span className="text-xs text-muted-foreground">{location.category}</span>
                </div>
              </div>
              <div className="space-y-1 text-sm">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Building2 className="w-4 h-4 text-accent" />
                  <span>{location.complex}</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <MapPin className="w-4 h-4 text-accent" />
                  <span>{location.city}, {location.state}</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Calendar className="w-4 h-4 text-accent" />
                  <span>{location.year}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndiaMap;
