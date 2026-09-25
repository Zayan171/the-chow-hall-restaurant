import React, { useState } from 'react';
import { MapPin, Clock, Phone, Navigation, Copy, Check, ExternalLink, AlertCircle } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

export const LocationHours: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(RESTAURANT_INFO.address.full);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="location" className="py-20 lg:py-28 bg-zinc-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-bold uppercase tracking-wider">
            <MapPin className="w-3.5 h-3.5" />
            <span>Find Us & Contact</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white uppercase font-display tracking-tight">
            Location & Hours
          </h2>

          <p className="text-base sm:text-lg text-zinc-300 font-normal leading-relaxed">
            Conveniently located on E Emory Rd in Knoxville. Drop by for dine-in or call ahead to order hot takeout ready for pickup.
          </p>
        </div>

        {/* 2-Column Grid: Details on Left, Map on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          
          {/* Left Column: Cards for Address, Hours, Contact */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            
            {/* Address Card */}
            <div className="p-6 rounded-2xl bg-zinc-950 border border-zinc-800 shadow-xl">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2.5 rounded-xl bg-amber-500/10 text-amber-400 border border-amber-500/20">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white uppercase font-display">
                      Restaurant Address
                    </h3>
                    <span className="text-xs text-zinc-400">Knoxville, Tennessee</span>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={handleCopyAddress}
                  className="p-2 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-zinc-400 hover:text-white border border-zinc-800 transition-colors text-xs flex items-center gap-1.5"
                  title="Copy address"
                  aria-label="Copy restaurant address"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400 text-[11px] font-semibold">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span className="text-[11px] font-medium">Copy</span>
                    </>
                  )}
                </button>
              </div>

              <div className="mt-2 text-zinc-200 font-semibold text-lg leading-snug">
                The Chow Hall <br />
                <span className="text-white text-xl font-bold font-display">
                  {RESTAURANT_INFO.address.street}
                </span> <br />
                <span className="text-zinc-300 text-base font-normal">
                  {RESTAURANT_INFO.address.city}, {RESTAURANT_INFO.address.state} {RESTAURANT_INFO.address.zip}
                </span>
              </div>

              <div className="mt-5 pt-4 border-t border-zinc-800/80 flex flex-wrap items-center gap-3">
                <a
                  href={RESTAURANT_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold bg-amber-500 hover:bg-amber-400 text-zinc-950 transition-colors shadow-md shadow-amber-500/20"
                >
                  <Navigation className="w-4 h-4 fill-zinc-950" />
                  <span>Get Directions</span>
                </a>

                <a
                  href={`tel:${RESTAURANT_INFO.phoneRaw}`}
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold text-zinc-200 bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 transition-colors"
                >
                  <Phone className="w-4 h-4 text-amber-400" />
                  <span>Call Now</span>
                </a>
              </div>
            </div>

            {/* Hours Card (Strictly adhering to: Monday-Friday: 11:00 AM - 8:00 PM; Do not invent weekend hours) */}
            <div className="p-6 rounded-2xl bg-zinc-950 border border-zinc-800 shadow-xl flex-1 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2.5 rounded-xl bg-amber-500/10 text-amber-400 border border-amber-500/20">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white uppercase font-display">
                      Hours of Operation
                    </h3>
                    <span className="text-xs text-zinc-400">Regular Dining & Takeout</span>
                  </div>
                </div>

                <div className="space-y-3">
                  {/* Monday - Friday (Known hours) */}
                  <div className="p-3.5 rounded-xl bg-zinc-900/80 border border-amber-500/20 flex items-center justify-between">
                    <div>
                      <span className="text-sm font-bold text-white">Monday – Friday</span>
                      <p className="text-[11px] text-emerald-400 font-semibold flex items-center gap-1">
                        <span className="w-2 h-2 rounded-full bg-emerald-400 inline-block" />
                        Regular Service
                      </p>
                    </div>
                    <span className="text-sm sm:text-base font-extrabold text-amber-400 font-display">
                      11:00 AM – 8:00 PM
                    </span>
                  </div>

                  {/* Saturday & Sunday Note (Do not invent weekend hours) */}
                  <div className="p-3.5 rounded-xl bg-zinc-900/40 border border-zinc-800 flex items-center justify-between">
                    <div>
                      <span className="text-sm font-medium text-zinc-300">Saturday & Sunday</span>
                      <p className="text-[11px] text-zinc-400">Weekend schedule varies</p>
                    </div>
                    <a
                      href={`tel:${RESTAURANT_INFO.phoneRaw}`}
                      className="text-xs font-semibold text-amber-400 hover:underline"
                    >
                      Call to Confirm
                    </a>
                  </div>
                </div>
              </div>

              {/* Informational Callout */}
              <div className="mt-4 pt-3 border-t border-zinc-800 text-xs text-zinc-400 flex items-start gap-2">
                <AlertCircle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>
                  Hours may adjust on holidays. For current daily specials and weekend schedule, call <strong className="text-zinc-200">(865) 985-2893</strong>.
                </span>
              </div>
            </div>

            {/* Direct Phone Bar */}
            <div className="p-4 rounded-xl bg-gradient-to-r from-amber-600/20 to-amber-500/10 border border-amber-500/30 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-amber-500 text-zinc-950 font-bold">
                  <Phone className="w-4 h-4 fill-zinc-950" />
                </div>
                <div>
                  <p className="text-xs text-amber-300 font-semibold uppercase tracking-wider">Direct Line</p>
                  <p className="text-base font-bold text-white font-display">(865) 985-2893</p>
                </div>
              </div>
              <a
                href={`tel:${RESTAURANT_INFO.phoneRaw}`}
                className="px-4 py-2 rounded-lg bg-amber-500 hover:bg-amber-400 text-zinc-950 text-xs font-bold transition-colors"
              >
                Call Now
              </a>
            </div>

          </div>

          {/* Right Column: Embedded Map / Location Presentation */}
          <div className="lg:col-span-7 flex flex-col">
            <div className="relative rounded-2xl overflow-hidden border border-zinc-800 shadow-2xl bg-zinc-950 flex-1 min-h-[380px] lg:min-h-full flex flex-col">
              
              {/* Map Toolbar / Header */}
              <div className="p-4 bg-zinc-950/90 border-b border-zinc-800 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                  <span className="text-xs font-bold text-zinc-200">
                    The Chow Hall • Knoxville, TN
                  </span>
                </div>
                
                <a
                  href={RESTAURANT_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-400 hover:text-amber-300 transition-colors"
                >
                  <span>Open in Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

              {/* Map Iframe */}
              <div className="relative flex-1 w-full min-h-[340px]">
                <iframe
                  title="The Chow Hall Location Map"
                  src={RESTAURANT_INFO.googleMapsEmbed}
                  className="w-full h-full border-0 absolute inset-0 filter contrast-[1.05] brightness-95"
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

              {/* Bottom Quick Action Strip */}
              <div className="p-4 bg-zinc-950 border-t border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-zinc-400">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-amber-500" />
                  <span>5706 E Emory Rd #5704, Knoxville, TN 37938</span>
                </div>
                <div className="flex items-center gap-2">
                  <a
                    href={RESTAURANT_INFO.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-bold text-amber-400 hover:underline"
                  >
                    Get Driving Directions →
                  </a>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
