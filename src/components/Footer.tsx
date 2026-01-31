import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";
import { config, formatAddress } from "@/lib/config";
import { Logo } from "@/components/Logo";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-footer text-footer-foreground">
      <div className="container mx-auto py-14 lg:py-20 px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Link 
              to="/" 
              className="inline-flex items-center gap-3 font-serif text-xl font-bold text-footer-foreground mb-6 hover:opacity-90 transition-opacity"
            >
              <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center border border-white/10">
                <Logo size={22} variant="light" className="shrink-0" />
              </div>
              <span>{config.companyName}</span>
            </Link>
            <p className="text-footer-foreground/70 mb-8 max-w-sm leading-relaxed">
              {config.industry} Solutions Provider committed to A2P 10DLC compliance.
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-white/5 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                  <MapPin className="h-4 w-4 text-footer-foreground/70" />
                </div>
                <span className="text-sm text-footer-foreground/70">{formatAddress()}</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-white/5 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="h-4 w-4 text-footer-foreground/70" />
                </div>
                <a 
                  href={`tel:${config.contact.phoneRaw}`}
                  className="text-sm text-footer-foreground/80 hover:text-footer-foreground transition-colors"
                >
                  {config.contact.phone}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-white/5 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="h-4 w-4 text-footer-foreground/70" />
                </div>
                <a 
                  href={`mailto:${config.contact.email}`}
                  className="text-sm text-footer-foreground/80 hover:text-footer-foreground transition-colors"
                >
                  {config.contact.email}
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-serif font-semibold text-footer-foreground mb-6 text-lg">Quick Links</h3>
            <nav className="flex flex-col gap-3" aria-label="Footer quick links">
              <Link 
                to="/" 
                className="text-sm text-footer-foreground/80 hover:text-footer-foreground transition-colors w-fit"
              >
                Home
              </Link>
              <Link 
                to="/sms-optin" 
                className="text-sm text-footer-foreground/80 hover:text-footer-foreground transition-colors w-fit"
              >
                SMS Opt-in
              </Link>
              <Link 
                to="/contact" 
                className="text-sm text-footer-foreground/80 hover:text-footer-foreground transition-colors w-fit"
              >
                Contact Us
              </Link>
            </nav>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-serif font-semibold text-footer-foreground mb-6 text-lg">Legal</h3>
            <nav className="flex flex-col gap-3" aria-label="Footer legal links">
              <Link 
                to="/privacy-policy" 
                className="text-sm text-footer-foreground/80 hover:text-footer-foreground transition-colors w-fit"
              >
                Privacy Policy
              </Link>
              <Link 
                to="/terms" 
                className="text-sm text-footer-foreground/80 hover:text-footer-foreground transition-colors w-fit"
              >
                Terms of Service
              </Link>
            </nav>
            <div className="mt-6 inline-flex items-center gap-2 px-3 py-1.5 bg-white/5 rounded-full">
              <div className="w-2 h-2 bg-success rounded-full" />
              <span className="text-xs text-footer-foreground/60">A2P 10DLC & TCPA Compliant</span>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 lg:mt-16 pt-8 text-center">
          <p className="text-sm text-footer-foreground/50">
            © {currentYear} {config.companyName}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
