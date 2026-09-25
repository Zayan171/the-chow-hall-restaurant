import React, { useState, useEffect } from 'react';
import { Phone, Menu as MenuIcon, X, MapPin, Clock } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

interface NavbarProps {
  onOpenMenuModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenMenuModal }) => {
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
    { label: 'Menu', href: '#menu' },
    { label: 'About', href: '#about' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'Contact', href: '#location' },
  ];

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <>
      {/* Top Banner Notice */}
      <div className="bg-amber-600/90 text-zinc-950 font-medium text-xs sm:text-sm py-1.5 px-4 text-center tracking-wide border-b border-amber-500/30 flex items-center justify-center gap-4 flex-wrap">
        <span className="flex items-center gap-1.5">
          <MapPin className="w-3.5 h-3.5 text-zinc-950" />
          5706 E Emory Rd #5704, Knoxville, TN
        </span>
        <span className="hidden md:inline-block opacity-40">•</span>
        <span className="flex items-center gap-1.5">
          <Clock className="w-3.5 h-3.5 text-zinc-950" />
          Mon–Fri: 11:00 AM – 8:00 PM
        </span>
        <span className="hidden sm:inline-block opacity-40">•</span>
        <a 
          href={`tel:${RESTAURANT_INFO.phoneRaw}`} 
          className="font-bold underline decoration-zinc-900/50 hover:text-black transition-colors"
        >
          Call (865) 985-2893
        </a>
      </div>

      {/* Main Navbar */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-zinc-950/95 backdrop-blur-md shadow-xl border-b border-zinc-800/80 py-3'
            : 'bg-zinc-950/80 backdrop-blur-sm border-b border-zinc-800/40 py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a 
              href="#home" 
              className="group flex items-center gap-3 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 rounded-lg p-1"
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500 to-amber-700 flex items-center justify-center text-zinc-950 font-black text-xl shadow-lg shadow-amber-500/20 group-hover:scale-105 transition-transform duration-200">
                CH
              </div>
              <div className="flex flex-col">
                <span className="text-xl sm:text-2xl font-black tracking-tight text-white group-hover:text-amber-400 transition-colors uppercase font-display">
                  The Chow Hall
                </span>
                <span className="text-[11px] font-semibold text-zinc-400 uppercase tracking-widest -mt-1">
                  Knoxville, TN
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-8 text-sm font-semibold tracking-wide">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-zinc-300 hover:text-amber-400 transition-colors duration-150 py-1 relative hover:after:w-full after:w-0 after:h-0.5 after:bg-amber-500 after:absolute after:bottom-0 after:left-0 after:transition-all after:duration-200"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Actions (Call Now & Menu Trigger) */}
            <div className="hidden sm:flex items-center gap-3">
              <button
                type="button"
                onClick={onOpenMenuModal}
                className="px-4 py-2 rounded-lg text-sm font-semibold text-zinc-200 bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 hover:border-zinc-600 transition-all shadow-sm"
              >
                Full Menu
              </button>

              <a
                href={`tel:${RESTAURANT_INFO.phoneRaw}`}
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg text-sm font-bold bg-amber-500 hover:bg-amber-400 text-zinc-950 shadow-md shadow-amber-500/20 hover:shadow-amber-500/30 transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0"
                aria-label="Call The Chow Hall at (865) 985-2893"
              >
                <Phone className="w-4 h-4 fill-zinc-950" />
                <span>Call Now</span>
              </a>
            </div>

            {/* Mobile Menu Hamburger Button */}
            <div className="flex items-center gap-2 lg:hidden">
              <a
                href={`tel:${RESTAURANT_INFO.phoneRaw}`}
                className="sm:hidden inline-flex items-center justify-center p-2 rounded-lg bg-amber-500 text-zinc-950 font-bold"
                aria-label="Call restaurant directly"
              >
                <Phone className="w-4 h-4 fill-zinc-950" />
              </a>

              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2.5 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-800/80 focus:outline-none focus:ring-2 focus:ring-amber-500 transition-colors"
                aria-label={mobileMenuOpen ? 'Close menu' : 'Open navigation menu'}
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Menu Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-zinc-900/98 backdrop-blur-xl border-b border-zinc-800 px-4 pt-3 pb-6 space-y-3 mt-3 animate-in fade-in slide-in-from-top-4 duration-200">
            <div className="grid grid-cols-2 gap-2 pb-2 border-b border-zinc-800">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={handleLinkClick}
                  className="px-3 py-2.5 rounded-lg text-base font-medium text-zinc-200 hover:text-amber-400 hover:bg-zinc-800/60 transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="pt-2 flex flex-col gap-2.5">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenMenuModal();
                }}
                className="w-full py-3 px-4 rounded-xl text-center font-bold text-zinc-200 bg-zinc-800 hover:bg-zinc-700 border border-zinc-700 transition-colors"
              >
                View Full Menu
              </button>
              <a
                href={`tel:${RESTAURANT_INFO.phoneRaw}`}
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-bold bg-amber-500 text-zinc-950 shadow-lg shadow-amber-500/25 active:bg-amber-400 transition-colors"
              >
                <Phone className="w-5 h-5 fill-zinc-950" />
                <span>Call (865) 985-2893</span>
              </a>
            </div>

            <div className="pt-2 text-xs text-zinc-400 flex items-center justify-center gap-2">
              <Clock className="w-3.5 h-3.5 text-amber-500" />
              <span>Monday – Friday: 11:00 AM – 8:00 PM</span>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
