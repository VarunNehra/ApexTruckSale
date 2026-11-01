import React, { useState, useEffect } from 'react';
import { Phone, Menu, X, ArrowRight } from 'lucide-react';
import { ApexLogo } from './ApexLogo';

interface NavbarProps {
  onOpenQuote: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenQuote }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Buy a Truck', href: '#buy-trucks' },
    { label: 'Sell Your Truck', href: '#sell-truck' },
    { label: 'Truck Tires', href: '#truck-tires' },
    { label: 'Roadside Assistance', href: '#roadside' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/85 backdrop-blur-md border-b border-black/10 shadow-[0_12px_30px_rgba(0,0,0,0.06)] py-3.5'
            : 'bg-white/75 backdrop-blur-sm border-b border-black/10 py-4 sm:py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-6 lg:gap-8">
          {/* Zone 1: Apex Logo Brand Lockup */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="whitespace-nowrap shrink-0 block"
            aria-label="Apex Truck Sales Home"
          >
            <ApexLogo size="md" />
          </a>

          {/* Zone 2: Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-semibold text-neutral-700">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="hover:text-black transition-colors duration-150 whitespace-nowrap shrink-0 relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-black hover:after:w-full after:transition-all after:duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: Primary Action + Direct Hotline */}
          <div className="hidden sm:flex items-center gap-3.5 shrink-0">
            <a
              href="tel:15593442990"
              className="flex items-center gap-2 text-xs font-semibold text-white transition-colors px-3 py-2 rounded-xl bg-[#111111] border border-black/10"
            >
              <Phone className="w-3.5 h-3.5 text-white" />
              <span className="font-mono">(559) 344-2990</span>
            </a>
            <button
              onClick={onOpenQuote}
              className="px-5 py-2.5 text-xs font-bold tracking-wider uppercase text-white bg-[#b71c1c] rounded-xl border border-[#b71c1c] shadow-[0_12px_24px_rgba(183,28,28,0.25)] hover:-translate-y-0.5 hover:bg-[#8f1414] transition-all whitespace-nowrap shrink-0 flex items-center gap-2"
            >
              <span>Get a Quote</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-black rounded-xl bg-white border border-black/10 shadow-sm focus:outline-none focus:ring-2 focus:ring-black"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden bg-white/95 backdrop-blur-xl pt-24 px-6 pb-8 flex flex-col justify-between overflow-y-auto">
          <div className="flex flex-col gap-4">
            <div className="mb-2">
              <ApexLogo size="sm" />
            </div>
            <div className="text-[11px] uppercase tracking-widest text-neutral-500 font-bold mb-1">
              Menu Navigation
            </div>
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-lg font-semibold text-neutral-800 hover:text-black py-2.5 border-b border-black/10 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex flex-col gap-3 pt-6 border-t border-black/10">
            <a
              href="tel:15593442990"
              className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-black text-white border border-black text-sm font-semibold"
            >
              <Phone className="w-4 h-4 text-white" />
              <span>Call Dispatch: (559) 344-2990</span>
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenQuote();
              }}
              className="w-full py-3.5 px-4 text-center text-xs font-bold tracking-wider uppercase text-white bg-black rounded-xl shadow-[0_10px_24px_rgba(0,0,0,0.12)] border border-black"
            >
              Get a Quote Now
            </button>
          </div>
        </div>
      )}
    </>
  );
};
