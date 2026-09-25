import React from 'react';
import { Users, Heart, UtensilsCrossed, ShieldCheck, MapPin, Phone } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 lg:py-28 bg-zinc-950 relative overflow-hidden">
      {/* Subtle ambient lighting */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-amber-600/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Authentic imagery composite */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden border border-zinc-800 shadow-2xl bg-zinc-900">
              <img
                src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1000&q=80"
                alt="Warm and welcoming casual dining atmosphere"
                className="w-full h-[400px] sm:h-[480px] object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/90 via-zinc-950/20 to-transparent" />

              {/* Overlaid community banner */}
              <div className="absolute bottom-6 left-6 right-6 p-5 rounded-2xl bg-zinc-900/90 backdrop-blur-md border border-zinc-700/80">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0">
                    <Heart className="w-5 h-5 text-amber-400 fill-amber-400/20" />
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-base font-display">
                      Proudly Serving Knoxville
                    </h3>
                    <p className="text-xs text-zinc-300">
                      A neighborhood gathering place built on good food & friendly hospitality.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Accent badge */}
            <div className="hidden sm:flex absolute -top-5 -right-5 p-4 rounded-2xl bg-zinc-900 border border-zinc-700 shadow-xl items-center gap-3">
              <div className="p-2.5 rounded-xl bg-amber-500 text-zinc-950 font-bold">
                <Users className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs text-zinc-400 font-semibold uppercase tracking-wider">Locals' Choice</p>
                <p className="text-sm font-bold text-white">Casual Dining Comfort</p>
              </div>
            </div>
          </div>

          {/* Right Column: Warm introduction */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-bold uppercase tracking-wider">
              <Users className="w-3.5 h-3.5" />
              <span>About The Chow Hall</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white uppercase font-display tracking-tight leading-tight">
              A Welcoming Spot For Our Knoxville Community
            </h2>

            <div className="space-y-4 text-zinc-300 text-base sm:text-lg leading-relaxed font-normal">
              <p>
                At <strong className="text-white font-semibold">The Chow Hall</strong>, our purpose is simple: serve honest, satisfying American comfort food in a casual, warm, and friendly environment where everyone feels right at home.
              </p>
              <p>
                Whether you're stopping by on your lunch break, picking up dinner for the family on the way home, or gathering with coworkers, we take pride in preparing every burger, crispy chicken tender basket, and hot platter fresh to order.
              </p>
              <p>
                We believe a great neighborhood restaurant is defined by good people, consistent quality, generous portions, and heartfelt local hospitality.
              </p>
            </div>

            {/* Value Pillars Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="p-4 rounded-xl bg-zinc-900/60 border border-zinc-800">
                <div className="flex items-center gap-2.5 mb-1.5">
                  <UtensilsCrossed className="w-4 h-4 text-amber-400" />
                  <h3 className="text-sm font-bold text-white uppercase font-display">
                    Cooked Fresh To Order
                  </h3>
                </div>
                <p className="text-xs text-zinc-400 leading-normal">
                  Hot meals made when you order, ensuring every bite is flavorful and satisfying.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-zinc-900/60 border border-zinc-800">
                <div className="flex items-center gap-2.5 mb-1.5">
                  <ShieldCheck className="w-4 h-4 text-amber-400" />
                  <h3 className="text-sm font-bold text-white uppercase font-display">
                    Casual & Welcoming
                  </h3>
                </div>
                <p className="text-xs text-zinc-400 leading-normal">
                  A relaxed, family-friendly diner vibe where you can kick back and enjoy good conversation.
                </p>
              </div>
            </div>

            {/* Quick Action Links */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <a
                href={RESTAURANT_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-bold text-amber-400 hover:text-amber-300 transition-colors"
              >
                <MapPin className="w-4 h-4" />
                <span>Visit Us at 5706 E Emory Rd</span>
              </a>
              <span className="text-zinc-600 hidden sm:inline">•</span>
              <a
                href={`tel:${RESTAURANT_INFO.phoneRaw}`}
                className="inline-flex items-center gap-2 text-sm font-bold text-zinc-300 hover:text-white transition-colors"
              >
                <Phone className="w-4 h-4 text-amber-400" />
                <span>Call (865) 985-2893</span>
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
