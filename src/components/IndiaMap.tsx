import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";
import { dealLocations, getCategoryColor, type DealLocation } from "@/data/locations";
import { MapPin, Building2, Calendar, Tag } from "lucide-react";

// Custom marker icon
const createCustomIcon = (color: string) => {
  return L.divIcon({
    className: "custom-marker",
    html: `
      <div style="
        width: 28px;
        height: 28px;
        background: ${color};
        border: 3px solid white;
        border-radius: 50%;
        box-shadow: 0 4px 12px rgba(0,0,0,0.3);
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        transition: transform 0.2s;
      ">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="white">
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
          <circle cx="12" cy="10" r="3" fill="${color}"/>
        </svg>
      </div>
    `,
    iconSize: [28, 28],
    iconAnchor: [14, 14],
    popupAnchor: [0, -14],
  });
};

// Map controller for animations
const MapController = ({ isInView }: { isInView: boolean }) => {
  const map = useMap();
  
  useEffect(() => {
    if (isInView) {
      // Animate to India center
      map.flyTo([22.5, 78.9], 5, { duration: 1.5 });
    }
  }, [isInView, map]);

  return null;
};

const IndiaMap = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedLocation, setSelectedLocation] = useState<DealLocation | null>(null);
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

        {/* Map Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative rounded-2xl overflow-hidden shadow-premium-lg border border-border"
        >
          <div className="h-[500px] lg:h-[600px] w-full">
            <MapContainer
              center={[22.5, 78.9]}
              zoom={4}
              style={{ height: "100%", width: "100%" }}
              scrollWheelZoom={false}
              className="z-0"
            >
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
                url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
              />
              <MapController isInView={isInView} />
              
              {filteredLocations.map((location) => (
                <Marker
                  key={location.id}
                  position={[location.lat, location.lng]}
                  icon={createCustomIcon(getCategoryColor(location.category))}
                  eventHandlers={{
                    click: () => setSelectedLocation(location),
                  }}
                >
                  <Popup className="custom-popup">
                    <div className="p-2 min-w-[200px]">
                      <div className="flex items-center gap-2 mb-2">
                        <div 
                          className="w-3 h-3 rounded-full" 
                          style={{ backgroundColor: getCategoryColor(location.category) }}
                        />
                        <span className="font-semibold text-foreground">{location.brand}</span>
                      </div>
                      <div className="space-y-1 text-sm text-muted-foreground">
                        <div className="flex items-center gap-2">
                          <Building2 className="w-4 h-4" />
                          <span>{location.complex}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4" />
                          <span>{location.city}, {location.state}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          <span>{location.year}</span>
                        </div>
                      </div>
                    </div>
                  </Popup>
                </Marker>
              ))}
            </MapContainer>
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
        </motion.div>

        {/* Location Cards - Mobile/Tablet View */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-8 lg:hidden">
          {filteredLocations.slice(0, 6).map((location, index) => (
            <motion.div
              key={location.id}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="glass-card rounded-xl p-4"
            >
              <div className="flex items-center gap-2 mb-2">
                <div 
                  className="w-3 h-3 rounded-full" 
                  style={{ backgroundColor: getCategoryColor(location.category) }}
                />
                <span className="font-semibold text-foreground">{location.brand}</span>
              </div>
              <p className="text-sm text-muted-foreground">{location.complex}</p>
              <p className="text-xs text-muted-foreground mt-1">{location.city} • {location.year}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndiaMap;
