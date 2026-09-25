import React, { useState } from 'react';
import { X, Phone, Utensils, CheckCircle, Info } from 'lucide-react';
import { RESTAURANT_INFO, FEATURED_MENU_ITEMS, MenuItem } from '../data/restaurantData';

interface MenuModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MenuModal: React.FC<MenuModalProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState<'all' | 'burgers' | 'tenders' | 'nachos'>('all');

  if (!isOpen) return null;

  const filteredItems = FEATURED_MENU_ITEMS.filter((item) => {
    if (activeTab === 'burgers') return item.category === 'Burgers';
    if (activeTab === 'tenders') return item.category === 'Tenders & Baskets';
    if (activeTab === 'nachos') return item.category === 'Appetizers & Starters';
    return true;
  });

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-labelledby="menu-modal-title"
    >
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Modal Card */}
      <div className="relative w-full max-w-4xl bg-zinc-900 border border-zinc-700/80 rounded-2xl shadow-2xl overflow-hidden z-10 my-8 max-h-[90vh] flex flex-col">
        {/* Header */}
        <div className="p-5 sm:p-6 border-b border-zinc-800 bg-zinc-950/70 flex items-center justify-between sticky top-0 z-20 backdrop-blur-md">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center">
              <Utensils className="w-5 h-5" />
            </div>
            <div>
              <h2 id="menu-modal-title" className="text-xl sm:text-2xl font-black text-white uppercase font-display">
                The Chow Hall Menu
              </h2>
              <p className="text-xs text-zinc-400">
                Fresh American casual dining in Knoxville • Dine-in & Takeout
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded-xl text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors"
            aria-label="Close menu modal"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Notice Bar */}
        <div className="bg-amber-950/30 border-b border-amber-900/40 px-5 py-2.5 text-xs text-amber-200/90 flex items-center gap-2">
          <Info className="w-4 h-4 text-amber-400 shrink-0" />
          <span>
            Menu items prepared fresh daily. Call ahead at <strong className="text-white">(865) 985-2893</strong> for fast takeout pickup.
          </span>
        </div>

        {/* Content Body */}
        <div className="p-5 sm:p-6 overflow-y-auto space-y-8 flex-1">
          {/* Tab Filters */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 border-b border-zinc-800 scrollbar-none">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold whitespace-nowrap transition-all ${
                activeTab === 'all'
                  ? 'bg-amber-500 text-zinc-950 shadow-sm'
                  : 'bg-zinc-800/80 text-zinc-300 hover:bg-zinc-700'
              }`}
            >
              All Featured Items
            </button>
            <button
              onClick={() => setActiveTab('burgers')}
              className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold whitespace-nowrap transition-all ${
                activeTab === 'burgers'
                  ? 'bg-amber-500 text-zinc-950 shadow-sm'
                  : 'bg-zinc-800/80 text-zinc-300 hover:bg-zinc-700'
              }`}
            >
              Burgers
            </button>
            <button
              onClick={() => setActiveTab('tenders')}
              className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold whitespace-nowrap transition-all ${
                activeTab === 'tenders'
                  ? 'bg-amber-500 text-zinc-950 shadow-sm'
                  : 'bg-zinc-800/80 text-zinc-300 hover:bg-zinc-700'
              }`}
            >
              Chicken Tenders
            </button>
            <button
              onClick={() => setActiveTab('nachos')}
              className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold whitespace-nowrap transition-all ${
                activeTab === 'nachos'
                  ? 'bg-amber-500 text-zinc-950 shadow-sm'
                  : 'bg-zinc-800/80 text-zinc-300 hover:bg-zinc-700'
              }`}
            >
              Loaded Nachos
            </button>
          </div>

          {/* Verified Items List */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-bold text-white uppercase tracking-wider font-display flex items-center gap-2">
                <span>Verified House Staples</span>
                <span className="text-xs bg-emerald-950 text-emerald-300 border border-emerald-800/50 px-2 py-0.5 rounded-full font-sans lowercase">
                  verified prices
                </span>
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {filteredItems.map((item) => (
                <div
                  key={item.id}
                  className="p-4 rounded-xl bg-zinc-950/60 border border-zinc-800 flex gap-4 items-start hover:border-zinc-700 transition-colors"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-20 sm:w-24 sm:h-24 rounded-lg object-cover border border-zinc-800 shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-baseline justify-between gap-2">
                      <h4 className="text-base font-bold text-white truncate font-display">
                        {item.name}
                      </h4>
                      <span className="text-amber-400 font-extrabold text-lg shrink-0 font-display">
                        {item.price}
                      </span>
                    </div>
                    <span className="inline-block text-[11px] font-semibold text-zinc-400 uppercase tracking-wider mb-1">
                      {item.category}
                    </span>
                    <p className="text-xs text-zinc-300 line-clamp-2 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Ordering Information & Callout (Strictly adhering to no invented prices) */}
          <div className="p-5 rounded-xl bg-zinc-950 border border-zinc-800 space-y-3">
            <h4 className="text-base font-bold text-white font-display uppercase tracking-wide flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-amber-500" />
              Sides, Drinks & Daily Specials
            </h4>
            <p className="text-sm text-zinc-300 leading-relaxed">
              We also offer classic sides, cold beverages, and daily blackboard specials. Because seasonal offerings and market ingredients rotate, please call us directly for the full current list of sides and daily items.
            </p>
            <div className="flex items-center gap-2 pt-1 text-xs text-zinc-400">
              <span>• Dine-in Seating Available</span>
              <span>• Takeout & Call-Ahead Ordering</span>
              <span>• Freshly Cooked to Order</span>
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="p-4 sm:p-5 border-t border-zinc-800 bg-zinc-950/80 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="text-xs text-zinc-400 text-center sm:text-left">
            <span>Ready to place your order? </span>
            <span className="text-zinc-200 font-medium">Call ahead for quick pickup!</span>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 sm:flex-none px-4 py-2.5 rounded-xl text-sm font-semibold text-zinc-300 hover:text-white bg-zinc-800 hover:bg-zinc-700 transition-colors"
            >
              Close
            </button>
            <a
              href={`tel:${RESTAURANT_INFO.phoneRaw}`}
              className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl text-sm font-bold bg-amber-500 hover:bg-amber-400 text-zinc-950 shadow-md shadow-amber-500/20 transition-all"
            >
              <Phone className="w-4 h-4 fill-zinc-950" />
              <span>Call (865) 985-2893</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
