import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronRight } from "lucide-react";
import { config } from "@/lib/config";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/Logo";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/sms-optin", label: "SMS Opt-in" },
  { href: "/contact", label: "Contact" },
  { href: "/privacy-policy", label: "Privacy" },
  { href: "/terms", label: "Terms" },
];

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const handleToggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleCloseMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className="bg-header text-header-foreground sticky top-0 z-50 border-b border-white/10 shadow-sm">
      <div className="container mx-auto">
        <div className="flex items-center justify-between h-14 lg:h-16">
          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-center gap-2.5 group"
            aria-label="Go to home page"
          >
            <div className="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center group-hover:scale-105 transition-transform border border-primary/20">
              <Logo size={20} variant="primary" className="shrink-0" />
            </div>
            <div className="hidden sm:block">
              <span className="font-serif text-base font-bold text-header-foreground leading-none block">
                {config.companyName.split(' ')[0]}
              </span>
              <span className="text-xs text-header-foreground/70 leading-none">
                {config.companyName.split(' ').slice(1).join(' ')}
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1" aria-label="Main navigation">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.href;
              return (
                <Link
                  key={link.href}
                  to={link.href}
                  className={`relative px-3 py-2 text-sm font-medium transition-colors duration-200 rounded-md
                    ${isActive 
                      ? "text-header-foreground" 
                      : "text-header-foreground/80 hover:text-header-foreground hover:bg-white/5"
                    }`}
                  aria-current={isActive ? "page" : undefined}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-primary rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-3">
            <Button asChild size="sm" className="h-9 px-4 text-sm font-medium">
              <Link to="/sms-optin">
                Get Updates
                <ChevronRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={handleToggleMenu}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        <div 
          className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isOpen ? "max-h-[400px] pb-6" : "max-h-0"
          }`}
        >
          <nav 
            className="flex flex-col gap-1 pt-4 border-t border-white/10"
            aria-label="Mobile navigation"
          >
            {navLinks.map((link) => {
              const isActive = location.pathname === link.href;
              return (
                <Link
                  key={link.href}
                  to={link.href}
                  onClick={handleCloseMenu}
                  className={`px-4 py-3 rounded-lg text-sm font-medium transition-colors duration-200
                    ${isActive 
                      ? "bg-white/10 text-header-foreground" 
                      : "text-header-foreground/80 hover:text-header-foreground hover:bg-white/5"
                    }`}
                  aria-current={isActive ? "page" : undefined}
                >
                  {link.label}
                </Link>
              );
            })}
            <div className="px-4 pt-3 mt-2 border-t border-white/10">
              <Button asChild className="w-full h-11">
                <Link to="/sms-optin" onClick={handleCloseMenu}>
                  Get SMS Updates
                  <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};
