import React, { useState } from 'react';
import { Camera, Maximize2, X, Info } from 'lucide-react';
import { GALLERY_ITEMS, GalleryItem } from '../data/restaurantData';

export const Gallery: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  return (
    <section id="gallery" className="py-20 lg:py-28 bg-zinc-900/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-bold uppercase tracking-wider">
            <Camera className="w-3.5 h-3.5" />
            <span>Food Gallery</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white uppercase font-display tracking-tight">
            Craving Good Comfort Food?
          </h2>

          <p className="text-base sm:text-lg text-zinc-300 font-normal leading-relaxed">
            Take a visual tour of our favorite American classics — from sizzling smashburgers and crispy tenders to loaded platters made for sharing.
          </p>

          {/* Compliance transparency disclaimer */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-lg bg-zinc-950/80 border border-zinc-800 text-zinc-400 text-xs">
            <Info className="w-3.5 h-3.5 text-amber-400 shrink-0" />
            <span>Representative culinary presentation of our American casual menu favorites.</span>
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {GALLERY_ITEMS.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedItem(item)}
              className="group relative aspect-[4/3] rounded-2xl overflow-hidden bg-zinc-950 border border-zinc-800 hover:border-amber-500/60 shadow-lg cursor-pointer transition-all duration-300 hover:shadow-2xl hover:shadow-amber-500/10 hover:-translate-y-1"
              role="button"
              tabIndex={0}
              aria-label={`View ${item.title}`}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  setSelectedItem(item);
                }
              }}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500 ease-out"
                loading="lazy"
              />
              
              {/* Gradient Scrim */}
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/90 via-zinc-950/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

              {/* View Overlay Icon */}
              <div className="absolute top-4 right-4 p-2 rounded-xl bg-zinc-950/70 backdrop-blur-md text-zinc-300 group-hover:text-amber-400 border border-zinc-700/50 opacity-0 group-hover:opacity-100 transition-all duration-200">
                <Maximize2 className="w-4 h-4" />
              </div>

              {/* Card Label */}
              <div className="absolute bottom-4 left-4 right-4 space-y-1">
                <span className="text-[10px] font-bold text-amber-400 uppercase tracking-widest block">
                  {item.category}
                </span>
                <h3 className="text-lg font-bold text-white font-display group-hover:text-amber-300 transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-zinc-300 line-clamp-1">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {selectedItem && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md"
          role="dialog"
          aria-modal="true"
          onClick={() => setSelectedItem(null)}
        >
          <div
            className="relative max-w-3xl w-full bg-zinc-950 border border-zinc-800 rounded-2xl overflow-hidden shadow-2xl animate-in fade-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setSelectedItem(null)}
              className="absolute top-4 right-4 z-10 p-2.5 rounded-full bg-zinc-900/80 text-zinc-300 hover:text-white hover:bg-zinc-800 transition-colors border border-zinc-700"
              aria-label="Close image modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="relative aspect-[16/10] w-full bg-black">
              <img
                src={selectedItem.image}
                alt={selectedItem.title}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="p-6 bg-zinc-950 border-t border-zinc-800">
              <span className="text-xs font-bold text-amber-400 uppercase tracking-widest">
                {selectedItem.category}
              </span>
              <h3 className="text-2xl font-bold text-white font-display mt-1">
                {selectedItem.title}
              </h3>
              <p className="mt-2 text-sm text-zinc-300 leading-relaxed">
                {selectedItem.description}
              </p>
              <div className="mt-4 pt-4 border-t border-zinc-800/80 flex items-center justify-between text-xs text-zinc-400">
                <span>The Chow Hall • 5706 E Emory Rd #5704, Knoxville, TN</span>
                <span className="text-amber-400 font-semibold">Call (865) 985-2893</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
