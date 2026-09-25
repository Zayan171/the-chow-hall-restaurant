import React from 'react';
import { Phone, Navigation, Clock, MapPin } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

export const FinalCTA: React.FC = () => {
  return (
    <section className="relative py-20 lg:py-28 bg-gradient-to-b from-zinc-950 via-zinc-900 to-zinc-950 overflow-hidden">
      {/* Warm Ambient Atmosphere */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-amber-500/15 rounded-full blur-[140px]" />
      </div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
        
        {/* Subtle Brand Tag */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs sm:text-sm font-bold uppercase tracking-wider mb-6">
          <span>The Chow Hall • Knoxville, TN</span>
        </div>

        {/* Exact Required Headline */}
        <h2 className="text-3xl sm:text-5xl md:text-6xl font-black text-white uppercase font-display tracking-tight leading-tight">
          Good Food. Good People. <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-300 to-orange-400">
            Come Hungry.
          </span>
        </h2>

        {/* Supporting Copy */}
        <p className="mt-6 text-base sm:text-xl text-zinc-300 max-w-2xl mx-auto font-normal leading-relaxed">
          Stop by our dining room at 5706 E Emory Rd #5704 or call ahead for hot, fresh takeout prepared with hearty American flavor.
        </p>

        {/* Prominent Call Now Button & Secondary Actions */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5">
          <a
            href={`tel:${RESTAURANT_INFO.phoneRaw}`}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-9 py-5 rounded-2xl text-lg font-black bg-amber-500 hover:bg-amber-400 text-zinc-950 shadow-2xl shadow-amber-500/30 hover:shadow-amber-500/40 transition-all duration-200 transform hover:-translate-y-1 active:translate-y-0"
            aria-label="Call The Chow Hall now at (865) 985-2893"
          >
            <Phone className="w-6 h-6 fill-zinc-950" />
            <span>Call Now: (865) 985-2893</span>
          </a>

          <a
            href={RESTAURANT_INFO.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-5 rounded-2xl text-base font-bold bg-zinc-900 hover:bg-zinc-800 text-zinc-100 border border-zinc-700/80 hover:border-zinc-600 transition-all duration-200"
          >
            <Navigation className="w-5 h-5 text-amber-400" />
            <span>Get Directions</span>
          </a>
        </div>

        {/* Quick Footer Pills */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-6 text-xs text-zinc-400">
          <span className="flex items-center gap-1.5">
            <Clock className="w-4 h-4 text-amber-500" />
            Mon–Fri: 11:00 AM – 8:00 PM
          </span>
          <span className="hidden sm:inline text-zinc-700">•</span>
          <span className="flex items-center gap-1.5">
            <MapPin className="w-4 h-4 text-amber-500" />
            5706 E Emory Rd #5704, Knoxville, TN
          </span>
          <span className="hidden sm:inline text-zinc-700">•</span>
          <span className="text-zinc-300 font-semibold">
            Dine-In & Takeout Available
          </span>
        </div>

      </div>
    </section>
  );
};
