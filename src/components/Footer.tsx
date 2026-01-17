import { motion } from "framer-motion";
import { ArrowUp, Linkedin, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import drcLogo from "@/assets/drclogo-rounded.png";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const footerLinks = {
    company: [
      { label: "About Us", href: "#about" },
      { label: "Our Services", href: "#services" },
      { label: "Success Stories", href: "#stories" },
      { label: "Contact", href: "#contact" },
    ],
    services: [
      { label: "Brand-to-Location Matching", href: "#services" },
      { label: "Retail Expansion Strategy", href: "#services" },
      { label: "Developer Partnerships", href: "#services" },
      { label: "Site Evaluation", href: "#services" },
    ],
    locations: [
      { label: "Ahmedabad", href: "#presence" },
      { label: "Vadodara", href: "#presence" },
      { label: "Pune", href: "#presence" },
      { label: "Surat", href: "#presence" },
      { label: "Mumbai", href: "#presence" },
      { label: "Delhi", href: "#presence" },
      { label: "Indore", href: "#presence" },
      { label: "Bangalore", href: "#presence" },
      { label: "Hyderabad", href: "#presence" },
    ],
  };

  const socialLinks = [
    { icon: Linkedin, href: "https://www.linkedin.com/in/rashmi-patel-46508650?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app", label: "LinkedIn" },
    { icon: Mail, href: "mailto:drc.gujarat@gmail.com", label: "Email" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-primary text-primary-foreground relative overflow-hidden">
      {/* Decorative Top Border */}
      <div className="h-1 bg-gradient-to-r from-accent via-accent/50 to-accent" />

      <div className="container-custom py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <a href="#" className="flex items-center gap-3 mb-6">
              <img 
                src={drcLogo} 
                alt="DRC Corporate Assets" 
                className="h-14 w-auto object-contain rounded-lg drop-shadow-[0_0_15px_rgba(212,175,55,0.5)] hover:drop-shadow-[0_0_25px_rgba(212,175,55,0.7)] transition-all duration-300"
              />
            </a>
            <p className="text-primary-foreground/70 mb-6 max-w-sm">
              India's premier retail real estate connector, bridging top brands with 
              prime commercial developments nationwide.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-lg bg-primary-foreground/10 border border-primary-foreground/20 flex items-center justify-center hover:bg-accent hover:border-accent transition-all duration-300 group"
                >
                  <social.icon className="w-4 h-4 text-primary-foreground group-hover:text-accent-foreground" />
                </a>
              ))}
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-display font-bold text-lg mb-6">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-primary-foreground/70 hover:text-accent transition-colors text-left"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="font-display font-bold text-lg mb-6">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-primary-foreground/70 hover:text-accent transition-colors text-left"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Locations Links */}
          <div>
            <h4 className="font-display font-bold text-lg mb-6">Locations</h4>
            <ul className="space-y-3">
              {footerLinks.locations.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-primary-foreground/70 hover:text-accent transition-colors text-left"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-primary-foreground/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-primary-foreground/60 text-sm text-center sm:text-left">
            © {new Date().getFullYear()} DRC Realty Connect. All rights reserved.
          </p>
          
          <div className="flex items-center gap-6 text-sm text-primary-foreground/60">
            <Link to="/privacy-policy" className="hover:text-accent transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms-of-service" className="hover:text-accent transition-colors">
              Terms of Service
            </Link>
          </div>

          {/* Back to Top */}
          <motion.button
            onClick={scrollToTop}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="w-10 h-10 rounded-lg bg-accent text-accent-foreground flex items-center justify-center shadow-gold hover:shadow-lg transition-shadow"
            aria-label="Back to top"
          >
            <ArrowUp className="w-5 h-5" />
          </motion.button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
