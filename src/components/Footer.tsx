import React from 'react';
import { Phone, MapPin, Clock, ArrowUp, Star } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

interface FooterProps {
  onOpenMenuModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenMenuModal }) => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Featured Menu', href: '#menu' },
    { label: 'About Us', href: '#about' },
    { label: 'Food Gallery', href: '#gallery' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'Location & Hours', href: '#location' },
  ];

  return (
    <footer className="bg-zinc-950 border-t border-zinc-800/80 text-zinc-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          
          {/* Brand Col */}
          <div className="lg:col-span-4 space-y-4">
            <a href="#home" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-amber-500 flex items-center justify-center text-zinc-950 font-black text-xl shadow-lg shadow-amber-500/20">
                CH
              </div>
              <span className="text-2xl font-black text-white uppercase font-display tracking-tight">
                {RESTAURANT_INFO.name}
              </span>
            </a>

            <p className="text-sm text-zinc-300 leading-relaxed">
              Knoxville's neighborhood casual American restaurant. Serving freshly prepared burgers, crispy tenders, and loaded favorites in a warm, welcoming atmosphere.
            </p>

            <div className="inline-flex items-center gap-2 p-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-xs">
              <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
              <span className="text-white font-bold">{RESTAURANT_INFO.rating.score} Stars</span>
              <span className="text-zinc-500">•</span>
              <span className="text-zinc-400">~{RESTAURANT_INFO.rating.reviewCount} Google Reviews</span>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider font-display">
              Quick Navigation
            </h3>
            <ul className="space-y-2.5 text-sm">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="hover:text-amber-400 transition-colors inline-block py-0.5"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <button
                  type="button"
                  onClick={onOpenMenuModal}
                  className="text-amber-400 hover:text-amber-300 font-semibold transition-colors py-0.5"
                >
                  View Full Menu Modal →
                </button>
              </li>
            </ul>
          </div>

          {/* Hours & Schedule */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider font-display">
              Hours
            </h3>
            <div className="space-y-2 text-sm">
              <div>
                <p className="font-semibold text-zinc-200">Mon – Fri</p>
                <p className="text-xs text-amber-400 font-bold">11:00 AM – 8:00 PM</p>
              </div>
              <div className="pt-2">
                <p className="font-semibold text-zinc-300">Saturday & Sunday</p>
                <p className="text-xs text-zinc-400">Please call ahead</p>
              </div>
            </div>
          </div>

          {/* Contact & Location Info */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider font-display">
              Contact & Location
            </h3>
            <div className="space-y-3 text-sm">
              <a
                href={RESTAURANT_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-2.5 group hover:text-white transition-colors"
              >
                <MapPin className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                <span className="group-hover:underline">
                  {RESTAURANT_INFO.address.street} <br />
                  {RESTAURANT_INFO.address.city}, {RESTAURANT_INFO.address.state} {RESTAURANT_INFO.address.zip}
                </span>
              </a>

              <a
                href={`tel:${RESTAURANT_INFO.phoneRaw}`}
                className="flex items-center gap-2.5 text-zinc-200 font-semibold hover:text-amber-400 transition-colors"
              >
                <Phone className="w-4 h-4 text-amber-500 shrink-0" />
                <span>{RESTAURANT_INFO.phone}</span>
              </a>

              <div className="pt-2">
                <a
                  href={`tel:${RESTAURANT_INFO.phoneRaw}`}
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-zinc-950 font-bold text-xs transition-colors shadow-md"
                >
                  <Phone className="w-3.5 h-3.5 fill-zinc-950" />
                  <span>Call to Order</span>
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="mt-14 pt-8 border-t border-zinc-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-400">
          <p>© {currentYear} {RESTAURANT_INFO.name}. All rights reserved.</p>

          <div className="flex items-center gap-6">
            <span className="hidden sm:inline">Knoxville, Tennessee Casual Dining</span>
            <button
              type="button"
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 text-zinc-400 hover:text-amber-400 transition-colors p-1"
              aria-label="Back to top of page"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
