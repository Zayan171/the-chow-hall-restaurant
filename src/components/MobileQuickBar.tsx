import React from 'react';
import { Phone, Navigation, Utensils } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

interface MobileQuickBarProps {
  onOpenMenuModal: () => void;
}

export const MobileQuickBar: React.FC<MobileQuickBarProps> = ({ onOpenMenuModal }) => {
  return (
    <div className="fixed bottom-0 inset-x-0 z-40 sm:hidden bg-zinc-950/95 backdrop-blur-lg border-t border-zinc-800 p-2.5 px-3 shadow-2xl">
      <div className="grid grid-cols-3 gap-2">
        <button
          type="button"
          onClick={onOpenMenuModal}
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-200 active:bg-zinc-800 text-xs font-semibold"
        >
          <Utensils className="w-4 h-4 text-amber-400 mb-0.5" />
          <span>Menu</span>
        </button>

        <a
          href={RESTAURANT_INFO.googleMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-200 active:bg-zinc-800 text-xs font-semibold"
        >
          <Navigation className="w-4 h-4 text-amber-400 mb-0.5" />
          <span>Directions</span>
        </a>

        <a
          href={`tel:${RESTAURANT_INFO.phoneRaw}`}
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-amber-500 text-zinc-950 active:bg-amber-400 text-xs font-black shadow-md shadow-amber-500/20"
        >
          <Phone className="w-4 h-4 fill-zinc-950 mb-0.5" />
          <span>Call Now</span>
        </a>
      </div>
    </div>
  );
};
