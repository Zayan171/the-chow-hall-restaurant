import React from 'react';
import { Phone, UtensilsCrossed, Star, MapPin, Clock, ArrowRight, ShieldCheck } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

interface HeroProps {
  onOpenMenuModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenMenuModal }) => {
  return (
    <section id="home" className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-zinc-950 pt-8 pb-16 lg:py-24">
      {/* Background Ambience & Subtle Grid Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-500/10 rounded-full blur-[130px]" />
        <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-orange-600/10 rounded-full blur-[120px]" />
        <div className="absolute inset-0 bg-[radial-gradient(#27272a_1px,transparent_1px)] [background-size:24px_24px] opacity-20" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headlines & Actionable CTAs */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left space-y-6">
            
            {/* Trust Pill / Rating Badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-zinc-900/90 border border-amber-500/30 text-zinc-200 text-xs sm:text-sm font-semibold shadow-inner">
              <span className="flex items-center text-amber-400">
                <Star className="w-4 h-4 fill-amber-400 text-amber-400 inline" />
                <span className="ml-1 text-white font-bold">{RESTAURANT_INFO.rating.score}</span>
                <span className="text-zinc-400 font-normal">/5</span>
              </span>
              <span className="text-zinc-600">•</span>
              <span className="text-zinc-300">~{RESTAURANT_INFO.rating.reviewCount} Google Reviews</span>
              <span className="text-zinc-600 hidden sm:inline">•</span>
              <span className="text-amber-400 font-medium hidden sm:inline">Knoxville, TN</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-white uppercase font-display leading-[1.08]">
                Real Food. <br className="hidden sm:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-300 to-orange-400">
                  Hearty Portions.
                </span> <br />
                The Chow Hall.
              </h1>
              <p className="text-lg sm:text-xl text-zinc-300 max-w-2xl font-normal leading-relaxed">
                Welcome to Knoxville's go-to casual American dining spot. Serving freshly prepared burgers, hand-breaded chicken tenders, loaded nachos, and honest comfort favorites.
              </p>
            </div>

            {/* Key CTAs */}
            <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto pt-2">
              <a
                href={`tel:${RESTAURANT_INFO.phoneRaw}`}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl text-base font-bold bg-amber-500 hover:bg-amber-400 text-zinc-950 shadow-xl shadow-amber-500/25 hover:shadow-amber-500/40 transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <Phone className="w-5 h-5 fill-zinc-950" />
                <span>Call Now: (865) 985-2893</span>
              </a>

              <a
                href="#menu"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl text-base font-bold bg-zinc-900 hover:bg-zinc-800 text-zinc-100 border border-zinc-700/80 hover:border-zinc-600 transition-all duration-200"
              >
                <UtensilsCrossed className="w-5 h-5 text-amber-400" />
                <span>Explore Menu</span>
                <ArrowRight className="w-4 h-4 text-zinc-400" />
              </a>
            </div>

            {/* Quick Highlights / Operational Details */}
            <div className="pt-4 border-t border-zinc-800/80 w-full grid grid-cols-2 sm:grid-cols-3 gap-4 text-left">
              <div className="flex items-start gap-2.5">
                <div className="p-2 rounded-lg bg-zinc-900 text-amber-400 border border-zinc-800 shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs text-zinc-400 font-medium">Location</p>
                  <p className="text-xs sm:text-sm font-semibold text-zinc-200 leading-snug">
                    5706 E Emory Rd #5704
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <div className="p-2 rounded-lg bg-zinc-900 text-amber-400 border border-zinc-800 shrink-0">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs text-zinc-400 font-medium">Mon – Fri Hours</p>
                  <p className="text-xs sm:text-sm font-semibold text-zinc-200 leading-snug">
                    11:00 AM – 8:00 PM
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-2.5 col-span-2 sm:col-span-1">
                <div className="p-2 rounded-lg bg-zinc-900 text-emerald-400 border border-zinc-800 shrink-0">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs text-zinc-400 font-medium">Service Style</p>
                  <p className="text-xs sm:text-sm font-semibold text-zinc-200 leading-snug">
                    Dine-In & Takeout
                  </p>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Visual Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Decorative Frame Glow */}
              <div className="absolute -inset-1.5 bg-gradient-to-tr from-amber-500/40 via-orange-500/30 to-zinc-800 rounded-3xl blur-lg opacity-70 group-hover:opacity-100 transition duration-1000" />
              
              {/* Main Visual Container */}
              <div className="relative rounded-2xl overflow-hidden border border-zinc-800 bg-zinc-900 shadow-2xl aspect-[4/3] sm:aspect-[4/3] lg:aspect-[5/4]">
                <img
                  src="https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=1200&q=85"
                  alt="Delicious American double cheeseburger with fresh toppings and crispy bacon"
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700 ease-out"
                  loading="eager"
                  fetchPriority="high"
                />
                
                {/* Gradient vignette for legibility */}
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/90 via-zinc-950/20 to-transparent" />

                {/* Overlaid Badges on Image */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none">
                  <span className="px-3 py-1.5 rounded-lg bg-zinc-950/80 backdrop-blur-md border border-zinc-700/60 text-xs font-bold text-amber-400 tracking-wide uppercase">
                    Fresh Off The Grill
                  </span>
                  <span className="px-3 py-1.5 rounded-lg bg-amber-500 text-zinc-950 text-xs font-black tracking-wider uppercase shadow-md">
                    Knoxville Favorite
                  </span>
                </div>

                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-zinc-950/85 backdrop-blur-md border border-zinc-800/80 flex items-center justify-between">
                  <div>
                    <h3 className="text-white font-bold text-sm sm:text-base font-display">
                      Bacon Cheese Burger
                    </h3>
                    <p className="text-xs text-zinc-400">
                      Melted cheese, crispy bacon & fresh fixings
                    </p>
                  </div>
                  <div className="text-right">
                    <span className="text-amber-400 font-extrabold text-lg sm:text-xl font-display">
                      $9.29
                    </span>
                    <p className="text-[10px] text-zinc-500 uppercase tracking-wider">
                      Verified price
                    </p>
                  </div>
                </div>

              </div>

              {/* Floating secondary badge */}
              <div className="absolute -bottom-6 -left-4 sm:-left-6 p-3.5 sm:p-4 rounded-2xl bg-zinc-900/95 backdrop-blur-md border border-zinc-700/80 shadow-2xl flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center font-bold text-lg">
                  ★
                </div>
                <div>
                  <div className="flex items-center gap-1">
                    <span className="text-white font-black text-sm">4.9 Star Rating</span>
                  </div>
                  <p className="text-xs text-zinc-400">~570 Verified Google Reviews</p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
