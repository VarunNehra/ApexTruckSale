import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TruckInventory } from './components/TruckInventory';
import { SellTruck } from './components/SellTruck';
import { TiresSection } from './components/TiresSection';
import { RoadsideAssistance } from './components/RoadsideAssistance';
import { WhyChooseApex } from './components/WhyChooseApex';
import { HowItWorks } from './components/HowItWorks';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { QuoteModal } from './components/QuoteModal';
import { FloatingActions } from './components/FloatingActions';
import { TruckListing, TireProduct } from './data/inventory';

export default function App() {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [quoteTruck, setQuoteTruck] = useState<TruckListing | null>(null);
  const [quoteTire, setQuoteTire] = useState<TireProduct | null>(null);

  const handleOpenGeneralQuote = () => {
    setQuoteTruck(null);
    setQuoteTire(null);
    setIsQuoteModalOpen(true);
  };

  const handleInquireTruck = (truck: TruckListing) => {
    setQuoteTruck(truck);
    setQuoteTire(null);
    setIsQuoteModalOpen(true);
  };

  const handleInquireTire = (tire?: TireProduct) => {
    setQuoteTruck(null);
    setQuoteTire(tire || null);
    setIsQuoteModalOpen(true);
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#ffffff] text-[#111111] flex flex-col font-sans selection:bg-[#b71c1c]/15 selection:text-[#111111]">
      {/* Sticky Top Navigation */}
      <Navbar onOpenQuote={handleOpenGeneralQuote} />

      <main className="flex-1">
        {/* 1. Hero Section */}
        <Hero
          onExploreTrucks={() => scrollToSection('buy-trucks')}
          onGetRoadside={() => scrollToSection('roadside')}
        />

        {/* 2. Truck Sales & Purchasing */}
        <TruckInventory
          onInquireTruck={handleInquireTruck}
          onNavigateToSell={() => scrollToSection('sell-truck')}
        />

        {/* 3. Sell Your Truck / Direct Fleet Buyout */}
        <SellTruck />

        {/* 4. Commercial Truck Tires */}
        <TiresSection onRequestTireQuote={handleInquireTire} />

        {/* 5. 24/7 Roadside Assistance */}
        <RoadsideAssistance />

        {/* 6. Why Choose Apex */}
        <WhyChooseApex />

        {/* 7. How It Works */}
        <HowItWorks />

        {/* 8. Contact & Lead Generation + Final CTA */}
        <ContactSection
          onExploreTrucks={() => scrollToSection('buy-trucks')}
          onSellTruck={() => scrollToSection('sell-truck')}
          onRequestRoadside={() => scrollToSection('roadside')}
        />
      </main>

      {/* Footer */}
      <Footer />

      {/* Universal Quote Modal */}
      <QuoteModal
        isOpen={isQuoteModalOpen}
        onClose={() => setIsQuoteModalOpen(false)}
        selectedTruck={quoteTruck}
        selectedTire={quoteTire}
      />

      {/* Floating Emergency Roadside & Call Action */}
      <FloatingActions onScrollToRoadside={() => scrollToSection('roadside')} />
    </div>
  );
}
