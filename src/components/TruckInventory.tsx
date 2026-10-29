import React, { useState, useMemo } from 'react';
import { Filter, Search, RotateCcw, ArrowRight, Eye, ShieldCheck, Gauge, Zap } from 'lucide-react';
import { TRUCK_INVENTORY, TruckListing } from '../data/inventory';
import { TruckModal } from './TruckModal';

interface TruckInventoryProps {
  onInquireTruck: (truck: TruckListing) => void;
  onNavigateToSell: () => void;
}

export const TruckInventory: React.FC<TruckInventoryProps> = ({ onInquireTruck, onNavigateToSell }) => {
  const [selectedMake, setSelectedMake] = useState<string>('All');
  const [selectedCondition, setSelectedCondition] = useState<string>('All');
  const [priceFilter, setPriceFilter] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeModalTruck, setActiveModalTruck] = useState<TruckListing | null>(null);

  const makes = ['All', 'Freightliner', 'Peterbilt', 'Kenworth', 'Volvo', 'Mack', 'International'];
  const conditions = ['All', 'Pre-Owned Certified', 'Fleet Maintained', 'Work Ready'];

  const filteredTrucks = useMemo(() => {
    return TRUCK_INVENTORY.filter((truck) => {
      // Make filter
      if (selectedMake !== 'All' && truck.make.toLowerCase() !== selectedMake.toLowerCase()) {
        return false;
      }
      // Condition filter
      if (selectedCondition !== 'All' && truck.condition !== selectedCondition) {
        return false;
      }
      // Price filter
      if (priceFilter === 'under-120') {
        if (typeof truck.price !== 'number' || truck.price >= 120000) return false;
      } else if (priceFilter === '120-140') {
        if (typeof truck.price !== 'number' || truck.price < 120000 || truck.price > 140000) return false;
      } else if (priceFilter === 'over-140') {
        if (typeof truck.price !== 'number' || truck.price <= 140000) return false;
      }
      // Search query
      if (searchQuery.trim() !== '') {
        const q = searchQuery.toLowerCase();
        const matches =
          truck.make.toLowerCase().includes(q) ||
          truck.model.toLowerCase().includes(q) ||
          truck.engine.toLowerCase().includes(q) ||
          truck.stockNumber.toLowerCase().includes(q) ||
          truck.vin.toLowerCase().includes(q) ||
          truck.year.toString().includes(q);
        if (!matches) return false;
      }
      return true;
    });
  }, [selectedMake, selectedCondition, priceFilter, searchQuery]);

  const handleResetFilters = () => {
    setSelectedMake('All');
    setSelectedCondition('All');
    setPriceFilter('All');
    setSearchQuery('');
  };

  return (
    <section id="buy-trucks" className="py-24 bg-[#07070a] border-t border-slate-900 relative">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-red-600/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-80 h-80 bg-rose-700/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="text-xs font-bold tracking-widest uppercase text-red-500 mb-2">
              Commercial Fleet Inventory
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight uppercase">
              THE RIGHT TRUCK. THE RIGHT DEAL.
            </h2>
            <p className="text-slate-400 mt-3 max-w-2xl text-sm sm:text-base leading-relaxed">
              Browse our inspected commercial Class-8 inventory or contact our acquisition desk to sell or trade your current tractors.
            </p>
          </div>

          {/* Quick link to sell */}
          <div className="shrink-0">
            <button
              onClick={onNavigateToSell}
              className="px-5 py-2.5 text-xs font-bold tracking-wide uppercase text-red-400 hover:text-white bg-slate-900 hover:bg-slate-800 rounded-xl border border-red-900/50 hover:border-red-500 transition-all flex items-center gap-2"
            >
              <span>Have a truck to sell?</span>
              <ArrowRight className="w-3.5 h-3.5 text-red-500" />
            </button>
          </div>
        </div>

        {/* Filter Controls Bar */}
        <div className="p-4 sm:p-5 rounded-2xl bg-[#0e0e13] border border-slate-800/80 mb-10 shadow-xl space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
            {/* Search Input */}
            <div className="md:col-span-4 relative">
              <Search className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                placeholder="Search make, model, engine, stock #..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 text-xs bg-slate-950 text-white placeholder-slate-500 rounded-xl border border-slate-800 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-colors"
              />
            </div>

            {/* Price Filter Dropdown */}
            <div className="md:col-span-3">
              <select
                value={priceFilter}
                onChange={(e) => setPriceFilter(e.target.value)}
                className="w-full px-3 py-2.5 text-xs bg-slate-950 text-slate-200 rounded-xl border border-slate-800 focus:outline-none focus:border-red-500 transition-colors"
              >
                <option value="All">All Price Tiers</option>
                <option value="under-120">Under $120,000</option>
                <option value="120-140">$120,000 – $140,000</option>
                <option value="over-140">Over $140,000</option>
              </select>
            </div>

            {/* Condition Filter Dropdown */}
            <div className="md:col-span-3">
              <select
                value={selectedCondition}
                onChange={(e) => setSelectedCondition(e.target.value)}
                className="w-full px-3 py-2.5 text-xs bg-slate-950 text-slate-200 rounded-xl border border-slate-800 focus:outline-none focus:border-red-500 transition-colors"
              >
                {conditions.map((c) => (
                  <option key={c} value={c}>
                    {c === 'All' ? 'All Conditions' : c}
                  </option>
                ))}
              </select>
            </div>

            {/* Reset Button */}
            <div className="md:col-span-2 flex justify-end">
              <button
                onClick={handleResetFilters}
                className="w-full md:w-auto px-4 py-2.5 text-xs font-semibold text-slate-400 hover:text-white bg-slate-900 hover:bg-slate-800 rounded-xl border border-slate-800 flex items-center justify-center gap-1.5 transition-colors"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Reset</span>
              </button>
            </div>
          </div>

          {/* Make Segmented Filter Row (Buttons) */}
          <div className="pt-2 border-t border-slate-800/60 flex items-center gap-2 overflow-x-auto pb-1 text-xs">
            <span className="text-slate-400 font-bold whitespace-nowrap shrink-0 mr-1 flex items-center gap-1 uppercase text-[11px]">
              <Filter className="w-3.5 h-3.5 text-red-500" /> Make:
            </span>
            {makes.map((make) => (
              <button
                key={make}
                onClick={() => setSelectedMake(make)}
                className={`px-3.5 py-1.5 font-bold rounded-lg whitespace-nowrap shrink-0 transition-all ${
                  selectedMake === make
                    ? 'bg-red-600 text-white shadow-md shadow-red-600/30'
                    : 'bg-slate-950 text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800'
                }`}
              >
                {make}
              </button>
            ))}
          </div>
        </div>

        {/* Truck Listings Grid */}
        {filteredTrucks.length === 0 ? (
          <div className="p-12 text-center rounded-2xl bg-[#0e0e13] border border-slate-800">
            <p className="text-slate-300 font-bold mb-2">No matching commercial trucks found</p>
            <p className="text-xs text-slate-500 mb-4">
              Try adjusting your filter parameters or contact our procurement specialists for incoming yard deliveries.
            </p>
            <button
              onClick={handleResetFilters}
              className="px-5 py-2 text-xs font-bold text-red-400 bg-slate-900 border border-slate-800 rounded-xl hover:bg-slate-800 transition-colors"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredTrucks.map((truck) => (
              <div
                key={truck.id}
                className="group rounded-2xl bg-[#0e0e13] border border-slate-800/80 hover:border-red-600/50 transition-all duration-300 overflow-hidden shadow-xl hover:shadow-2xl hover:shadow-red-600/10 flex flex-col justify-between"
              >
                <div>
                  {/* Image Container */}
                  <div className="relative aspect-[16/10] bg-slate-900 overflow-hidden">
                    <img
                      src={truck.image}
                      alt={`${truck.year} ${truck.make} ${truck.model}`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0e0e13] via-transparent to-black/30" />

                    {/* Stock number & Condition label */}
                    <div className="absolute top-3 left-3 flex items-center gap-2 text-xs">
                      <span className="px-2.5 py-1 rounded-md bg-black/80 backdrop-blur-md text-white font-mono border border-white/10 font-bold">
                        {truck.stockNumber}
                      </span>
                    </div>
                    <div className="absolute top-3 right-3">
                      <span className="px-2.5 py-1 rounded-md bg-red-950/80 backdrop-blur-md text-red-300 text-xs font-bold border border-red-500/40">
                        {truck.condition}
                      </span>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-5">
                    {/* Make / Model / Year Title */}
                    <div className="flex items-start justify-between gap-2 mb-1.5">
                      <h3 className="text-lg font-black text-white tracking-tight group-hover:text-red-400 transition-colors">
                        {truck.year} {truck.make} {truck.model}
                      </h3>
                    </div>

                    <div className="text-xs text-slate-400 font-medium mb-4 line-clamp-1">
                      {truck.trim}
                    </div>

                    {/* Unboxed Metadata with clean typographic separators (Zero-Pill Discipline) */}
                    <div className="flex items-center flex-wrap gap-2 text-xs text-slate-300 font-mono tabular-nums mb-4 pb-4 border-b border-slate-800/60 font-semibold">
                      <span>{truck.mileage.toLocaleString()} mi</span>
                      <span aria-hidden="true" className="text-slate-600">·</span>
                      <span>{truck.horsepower} HP</span>
                      <span aria-hidden="true" className="text-slate-600">·</span>
                      <span className="font-sans">{truck.sleeper.split(' ')[0]} Sleeper</span>
                    </div>

                    {/* Powertrain highlights */}
                    <div className="space-y-1.5 text-xs text-slate-300 mb-5">
                      <div className="flex items-center gap-2">
                        <Zap className="w-3.5 h-3.5 text-red-500 shrink-0" />
                        <span className="truncate">{truck.engine}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Gauge className="w-3.5 h-3.5 text-red-500 shrink-0" />
                        <span className="truncate">{truck.transmission}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card Footer with Price and Actions */}
                <div className="p-5 pt-0 border-t border-slate-800/60 mt-auto">
                  <div className="flex items-baseline justify-between mb-4 pt-3">
                    <span className="text-xs text-slate-400">Offered At</span>
                    <span className="text-xl font-black text-white font-mono tabular-nums tracking-tight">
                      {typeof truck.price === 'number' ? `$${truck.price.toLocaleString()}` : truck.price}
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <button
                      onClick={() => setActiveModalTruck(truck)}
                      className="py-2.5 px-3 rounded-xl text-xs font-bold text-slate-200 bg-slate-900 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 transition-colors flex items-center justify-center gap-1.5"
                    >
                      <Eye className="w-3.5 h-3.5 text-slate-400" />
                      <span>View Details</span>
                    </button>
                    <button
                      onClick={() => onInquireTruck(truck)}
                      className="py-2.5 px-3 rounded-xl text-xs font-bold uppercase tracking-wider text-white bg-red-600 hover:bg-red-500 shadow-md shadow-red-600/25 border border-red-500/40 transition-all flex items-center justify-center gap-1.5"
                    >
                      <span>Inquire Now</span>
                      <ArrowRight className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Disclaimer */}
        <div className="mt-8 text-center text-xs text-slate-500 max-w-xl mx-auto">
          Sample commercial inventory shown for demonstration. Apex Truck Sales sources and certifies Peterbilt, Freightliner, Kenworth, Volvo, Mack, and International Class-8 tractors.
        </div>
      </div>

      {/* Full Truck Details Modal */}
      <TruckModal
        truck={activeModalTruck}
        onClose={() => setActiveModalTruck(null)}
        onInquire={(t) => {
          setActiveModalTruck(null);
          onInquireTruck(t);
        }}
      />
    </section>
  );
};
