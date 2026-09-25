/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { FeaturedMenu } from './components/FeaturedMenu';
import { About } from './components/About';
import { Gallery } from './components/Gallery';
import { Reviews } from './components/Reviews';
import { LocationHours } from './components/LocationHours';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { MenuModal } from './components/MenuModal';
import { MobileQuickBar } from './components/MobileQuickBar';

export default function App() {
  const [isMenuModalOpen, setIsMenuModalOpen] = useState(false);

  const openMenuModal = () => setIsMenuModalOpen(true);
  const closeMenuModal = () => setIsMenuModalOpen(false);

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 flex flex-col font-sans selection:bg-amber-500 selection:text-zinc-950 pb-16 sm:pb-0">
      {/* 1. Navbar */}
      <Navbar onOpenMenuModal={openMenuModal} />

      <main className="flex-grow">
        {/* 2. Hero */}
        <Hero onOpenMenuModal={openMenuModal} />

        {/* 3. Featured Menu */}
        <FeaturedMenu onOpenMenuModal={openMenuModal} />

        {/* 4. About The Restaurant */}
        <About />

        {/* 5. Food Gallery */}
        <Gallery />

        {/* 6. Reviews */}
        <Reviews />

        {/* 7. Location & Hours */}
        <LocationHours />

        {/* 8. Final CTA */}
        <FinalCTA />
      </main>

      {/* 9. Footer */}
      <Footer onOpenMenuModal={openMenuModal} />

      {/* Full Menu Interactive Modal */}
      <MenuModal isOpen={isMenuModalOpen} onClose={closeMenuModal} />

      {/* Mobile Floating Action Bar for Quick Call & Directions */}
      <MobileQuickBar onOpenMenuModal={openMenuModal} />
    </div>
  );
}
