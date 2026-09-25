import React from 'react';
import { Phone, Sparkles, ArrowRight, Utensils, Check } from 'lucide-react';
import { FEATURED_MENU_ITEMS, RESTAURANT_INFO } from '../data/restaurantData';

interface FeaturedMenuProps {
  onOpenMenuModal: () => void;
}

export const FeaturedMenu: React.FC<FeaturedMenuProps> = ({ onOpenMenuModal }) => {
  return (
    <section id="menu" className="py-20 lg:py-28 bg-zinc-900 relative">
      {/* Decorative top border accent */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-amber-500/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Honest American Classics</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white uppercase font-display tracking-tight">
            Featured House Favorites
          </h2>

          <p className="text-base sm:text-lg text-zinc-300 font-normal leading-relaxed">
            Cooked hot and fresh to order with generous portions and bold, comforting flavor. Discover our guest-favorite staples below.
          </p>
        </div>

        {/* 4 Verified Food Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {FEATURED_MENU_ITEMS.map((item) => (
            <div
              key={item.id}
              className="group relative flex flex-col bg-zinc-950 rounded-2xl overflow-hidden border border-zinc-800 hover:border-amber-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-amber-500/10 hover:-translate-y-1"
            >
              {/* Image Container with Aspect Ratio */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-zinc-900">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500 ease-out"
                  loading="lazy"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent" />

                {/* Badge */}
                {item.badge && (
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-1 rounded-md bg-zinc-950/80 backdrop-blur-md border border-zinc-700/60 text-[11px] font-bold text-amber-400 tracking-wide uppercase">
                      {item.badge}
                    </span>
                  </div>
                )}

                {/* Verified Price Tag */}
                <div className="absolute bottom-3 right-3">
                  <div className="px-3.5 py-1.5 rounded-xl bg-amber-500 text-zinc-950 font-black text-lg font-display tracking-tight shadow-lg shadow-black/40">
                    {item.price}
                  </div>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-[11px] font-bold text-zinc-400 uppercase tracking-widest">
                      {item.category}
                    </span>
                    <span className="flex items-center gap-1 text-[11px] font-medium text-emerald-400">
                      <Check className="w-3 h-3" />
                      Verified
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white group-hover:text-amber-400 transition-colors font-display">
                    {item.name}
                  </h3>

                  <p className="mt-2 text-sm text-zinc-300 leading-relaxed font-normal line-clamp-3">
                    {item.description}
                  </p>
                </div>

                {/* Card Action */}
                <div className="pt-3 border-t border-zinc-800/80 flex items-center justify-between">
                  <a
                    href={`tel:${RESTAURANT_INFO.phoneRaw}`}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-400 hover:text-amber-300 transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>Order by Phone</span>
                  </a>
                  <span className="text-xs text-zinc-400 font-medium">
                    Fresh to order
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View Full Menu CTA Row */}
        <div className="mt-14 flex flex-col sm:flex-row items-center justify-center gap-4 text-center">
          <button
            type="button"
            onClick={onOpenMenuModal}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl text-base font-bold bg-amber-500 hover:bg-amber-400 text-zinc-950 shadow-xl shadow-amber-500/20 hover:shadow-amber-500/35 transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0"
          >
            <Utensils className="w-5 h-5 fill-zinc-950" />
            <span>View Full Menu</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <a
            href={`tel:${RESTAURANT_INFO.phoneRaw}`}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl text-base font-semibold text-zinc-200 bg-zinc-800/90 hover:bg-zinc-700 border border-zinc-700 transition-all duration-200"
          >
            <Phone className="w-4 h-4 text-amber-400" />
            <span>Call (865) 985-2893 for Specials</span>
          </a>
        </div>

        {/* Reassurance note */}
        <p className="mt-4 text-center text-xs text-zinc-400">
          * Prices and verified items reflect our core staples. Call for current daily specials, beverage selections, and side options.
        </p>

      </div>
    </section>
  );
};
