import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-32 pb-20">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link 
              to="/" 
              className="inline-flex items-center gap-2 text-accent hover:text-accent/80 transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Link>

            <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-8">
              Terms of Service
            </h1>

            <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
              <p className="text-lg">
                <strong>Effective Date:</strong> {new Date().toLocaleDateString('en-IN', { month: 'long', day: 'numeric', year: 'numeric' })}
              </p>

              <section className="space-y-4">
                <h2 className="text-2xl font-display font-bold text-foreground">1. Acceptance of Terms</h2>
                <p>
                  By accessing or using DRC Realty Connect's website and services, you agree to be bound by 
                  these Terms of Service. If you do not agree to these terms, please do not use our services.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-display font-bold text-foreground">2. Description of Services</h2>
                <p>
                  DRC Realty Connect provides retail real estate consulting and connection services, including:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Brand-to-location matching services</li>
                  <li>Retail expansion strategy consulting</li>
                  <li>Developer partnership facilitation</li>
                  <li>Site evaluation and analysis</li>
                </ul>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-display font-bold text-foreground">3. User Responsibilities</h2>
                <p>When using our services, you agree to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Provide accurate and complete information</li>
                  <li>Use our services only for lawful purposes</li>
                  <li>Not interfere with or disrupt our services</li>
                  <li>Respect the confidentiality of information shared during business discussions</li>
                </ul>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-display font-bold text-foreground">4. Intellectual Property</h2>
                <p>
                  All content on this website, including text, graphics, logos, and images, is the property 
                  of DRC Realty Connect and is protected by applicable intellectual property laws. You may 
                  not reproduce, distribute, or create derivative works without our prior written consent.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-display font-bold text-foreground">5. Limitation of Liability</h2>
                <p>
                  DRC Realty Connect provides information and connection services but does not guarantee 
                  specific outcomes. We are not liable for:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Business decisions made based on our recommendations</li>
                  <li>Third-party actions or agreements</li>
                  <li>Market fluctuations or property value changes</li>
                  <li>Any indirect, incidental, or consequential damages</li>
                </ul>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-display font-bold text-foreground">6. Confidentiality</h2>
                <p>
                  Both parties agree to maintain the confidentiality of proprietary information shared 
                  during the course of our business relationship. This includes but is not limited to 
                  business plans, financial information, and strategic objectives.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-display font-bold text-foreground">7. Termination</h2>
                <p>
                  We reserve the right to terminate or suspend access to our services at our discretion, 
                  without notice, for conduct that we believe violates these Terms of Service or is 
                  harmful to other users, us, or third parties.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-display font-bold text-foreground">8. Governing Law</h2>
                <p>
                  These Terms of Service shall be governed by and construed in accordance with the laws 
                  of India. Any disputes arising from these terms shall be subject to the exclusive 
                  jurisdiction of the courts in Ahmedabad, Gujarat.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-display font-bold text-foreground">9. Changes to Terms</h2>
                <p>
                  We may update these Terms of Service from time to time. We will notify users of any 
                  material changes by posting the new Terms on this page with an updated effective date.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-display font-bold text-foreground">10. Contact Information</h2>
                <p>
                  For questions about these Terms of Service, please contact us at:
                </p>
                <p>
                  <strong>Email:</strong> <a href="mailto:drc.gujarat@gmail.com" className="text-accent hover:underline">drc.gujarat@gmail.com</a><br />
                  <strong>Phone:</strong> +91 98250 98250
                </p>
              </section>
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default TermsOfService;
