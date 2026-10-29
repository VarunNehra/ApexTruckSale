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
            ? 'bg-[#07070a]/92 backdrop-blur-md border-b border-red-950/60 shadow-2xl shadow-black/80 py-3.5'
            : 'bg-transparent border-b border-white/5 py-4 sm:py-5'
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
          <nav className="hidden lg:flex items-center gap-7 text-sm font-semibold text-slate-300">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="hover:text-red-400 transition-colors duration-150 whitespace-nowrap shrink-0 relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-red-500 hover:after:w-full after:transition-all after:duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: Primary Action + Direct Hotline */}
          <div className="hidden sm:flex items-center gap-3.5 shrink-0">
            <a
              href="tel:15593442990"
              className="flex items-center gap-2 text-xs font-semibold text-slate-300 hover:text-white transition-colors px-3 py-2 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-red-600/40"
            >
              <Phone className="w-3.5 h-3.5 text-red-500" />
              <span className="font-mono">(559) 344-2990</span>
            </a>
            <button
              onClick={onOpenQuote}
              className="px-5 py-2.5 text-xs font-bold tracking-wider uppercase text-white bg-gradient-to-r from-red-600 via-rose-600 to-red-700 rounded-xl hover:from-red-500 hover:to-rose-500 shadow-lg shadow-red-600/30 border border-red-400/50 hover:scale-[1.02] active:scale-[0.98] transition-all whitespace-nowrap shrink-0 flex items-center gap-2"
            >
              <span>Get a Quote</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-slate-300 hover:text-white rounded-xl bg-slate-900/80 border border-slate-800 focus:outline-none focus:ring-2 focus:ring-red-500"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden bg-black/95 backdrop-blur-xl pt-24 px-6 pb-8 flex flex-col justify-between overflow-y-auto">
          <div className="flex flex-col gap-4">
            <div className="mb-2">
              <ApexLogo size="sm" />
            </div>
            <div className="text-[11px] uppercase tracking-widest text-slate-500 font-bold mb-1">
              Menu Navigation
            </div>
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-lg font-semibold text-slate-200 hover:text-red-400 py-2.5 border-b border-slate-800/60 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex flex-col gap-3 pt-6 border-t border-slate-800">
            <a
              href="tel:15593442990"
              className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-slate-900 text-red-400 border border-red-900/40 text-sm font-semibold"
            >
              <Phone className="w-4 h-4 text-red-500" />
              <span>Call Dispatch: (559) 344-2990</span>
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenQuote();
              }}
              className="w-full py-3.5 px-4 text-center text-xs font-bold tracking-wider uppercase text-white bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-500 hover:to-rose-500 rounded-xl shadow-lg shadow-red-600/30 border border-red-500/40"
            >
              Get a Quote Now
            </button>
          </div>
        </div>
      )}
    </>
  );
};
