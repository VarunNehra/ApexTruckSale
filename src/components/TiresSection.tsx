import React, { useState, useMemo } from 'react';
import { Disc, ShieldCheck, CheckCircle2, ArrowRight, Calculator, AlertCircle } from 'lucide-react';
import { TIRE_INVENTORY, TireProduct } from '../data/inventory';

interface TiresSectionProps {
  onRequestTireQuote: (tire?: TireProduct) => void;
}

export const TiresSection: React.FC<TiresSectionProps> = ({ onRequestTireQuote }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  // Calculator / inquiry state
  const [calcSize, setCalcSize] = useState('295/75R22.5');
  const [calcPosition, setCalcPosition] = useState('Steer Tires');
  const [calcQuantity, setCalcQuantity] = useState(8);
  const [calcContactName, setCalcContactName] = useState('');
  const [calcPhone, setCalcPhone] = useState('');
  const [calcSubmitted, setCalcSubmitted] = useState(false);
  const [calcTicket, setCalcTicket] = useState('');
  const [calcError, setCalcError] = useState('');

  const categories = [
    'All',
    'Steer Tires',
    'Drive Tires',
    'Trailer Tires',
    'All-Position Tires',
    'All-Season Commercial Tires',
    'Highway and Long-Haul Tires',
    'Heavy-Duty Truck Tires'
  ];

  const filteredTires = useMemo(() => {
    if (selectedCategory === 'All') return TIRE_INVENTORY;
    return TIRE_INVENTORY.filter((t) => t.category === selectedCategory);
  }, [selectedCategory]);

  const estimatedUnitAvg = 560;
  const estimatedSubtotal = calcQuantity * estimatedUnitAvg;

  const handleCalculatorSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!calcContactName.trim() || !calcPhone.trim()) {
      setCalcError('Please provide your name and phone number for quote dispatch.');
      return;
    }
    const code = `TIRE-${Math.floor(10000 + Math.random() * 90000)}`;
    setCalcTicket(code);
    setCalcSubmitted(true);
    setCalcError('');
  };

  return (
    <section id="truck-tires" className="py-24 bg-[#07070a] border-t border-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-xs font-bold tracking-widest uppercase text-red-500 mb-2">
            Heavy-Duty Commercial Rubber
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight uppercase">
            BUILT FOR THE ROAD AHEAD.
          </h2>
          <p className="text-slate-400 mt-4 text-sm sm:text-base leading-relaxed">
            Find dependable commercial truck tires for long hauls, regional routes, and demanding working conditions.
          </p>
        </div>

        {/* Hero Product Spotlight Row */}
        <div className="mb-16 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-[#0e0e13] via-[#161620] to-[#0e0e13] border border-red-950/50 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Visual spotlight */}
            <div className="lg:col-span-5 relative">
              <div className="aspect-[4/3] rounded-xl overflow-hidden bg-slate-900 border border-slate-800">
                <img
                  src="/src/assets/images/commercial_truck_tire_1792014067130.jpg"
                  alt="Commercial heavy-duty steer tire in studio setting"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>

            {/* Explanatory spotlight copy */}
            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center gap-2 text-xs text-red-400 font-bold uppercase tracking-wider">
                <span>Tier-1 Commercial Casing</span>
                <span aria-hidden="true" className="text-slate-600">·</span>
                <span>SmartWay Verified Efficiency</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                Premium Low Rolling Resistance & High-Traction Tread
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Tires are among your highest operational costs per mile. Apex Truck Sales supplies fleets and owner-operators with high-efficiency steer, drive, and trailer tires engineered to resist irregular shoulder wear and withstand multi-life retreading.
              </p>

              {/* Unboxed Metadata Specs */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800">
                  <span className="text-[11px] text-slate-400 block">Common Sizes</span>
                  <span className="font-bold text-white font-mono text-xs">295/75R22.5 · 11R22.5</span>
                </div>
                <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800">
                  <span className="text-[11px] text-slate-400 block">Ply Rating</span>
                  <span className="font-bold text-white font-mono text-xs">14PR / 16PR Range H</span>
                </div>
                <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800">
                  <span className="text-[11px] text-slate-400 block">Tread Depth</span>
                  <span className="font-bold text-white font-mono text-xs">Up to 30/32" Lug</span>
                </div>
                <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800">
                  <span className="text-[11px] text-slate-400 block">Casings</span>
                  <span className="font-bold text-white font-mono text-xs">Multi-Life Verified</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 text-xs scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-2 font-bold rounded-lg whitespace-nowrap shrink-0 transition-all ${
                selectedCategory === cat
                  ? 'bg-red-600 text-white shadow-md shadow-red-600/30'
                  : 'bg-slate-900 text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Tire Product Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {filteredTires.map((tire) => (
            <div
              key={tire.id}
              className="rounded-2xl bg-[#0e0e13] border border-slate-800/80 hover:border-red-600/50 transition-all duration-300 p-5 flex flex-col justify-between shadow-xl"
            >
              <div>
                {/* Brand & Category header */}
                <div className="flex items-center justify-between text-xs mb-2">
                  <span className="text-slate-400 font-bold uppercase">{tire.brand}</span>
                  {tire.smartWay && (
                    <span className="text-[11px] text-emerald-400 font-semibold">SmartWay</span>
                  )}
                </div>

                <h3 className="text-base font-black text-white tracking-tight mb-1">
                  {tire.model}
                </h3>

                <div className="text-xs text-red-400 font-bold mb-3">
                  {tire.category}
                </div>

                {/* Tire Specifications Unboxed */}
                <div className="space-y-1.5 text-xs text-slate-300 font-mono tabular-nums mb-4 pb-3 border-b border-slate-800">
                  <div className="flex justify-between">
                    <span className="text-slate-400 font-sans">Size:</span>
                    <span className="font-bold text-white">{tire.size}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400 font-sans">Ply / Load:</span>
                    <span className="font-bold text-white">{tire.plyRating} ({tire.loadRange})</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400 font-sans">Tread Depth:</span>
                    <span className="font-bold text-white">{tire.treadDepth}</span>
                  </div>
                </div>

                <p className="text-xs text-slate-400 leading-relaxed mb-4 line-clamp-2">
                  {tire.description}
                </p>
              </div>

              {/* Price & Action */}
              <div className="pt-2 border-t border-slate-800/60">
                <div className="flex items-baseline justify-between mb-3">
                  <span className="text-[11px] text-slate-400">Sample Starting:</span>
                  <span className="text-lg font-black text-white font-mono tabular-nums">
                    ${tire.pricePerUnit} <span className="text-xs text-slate-400 font-normal">/ unit</span>
                  </span>
                </div>

                <button
                  onClick={() => onRequestTireQuote(tire)}
                  className="w-full py-2.5 px-3 rounded-xl text-xs font-bold text-white bg-slate-900 hover:bg-red-600 border border-slate-800 hover:border-red-500 transition-all flex items-center justify-center gap-1.5"
                >
                  <span>Request Pricing</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Clear Notice */}
        <div className="text-center text-xs text-slate-500 mb-16">
          Sample tire catalog with industry-standard commercial profiles. Contact our tire center for live wholesale tier inventory and volume carrier accounts.
        </div>

        {/* Interactive "Find the Right Tire" Inquiry Form */}
        <div className="p-6 sm:p-8 rounded-2xl bg-[#0a0a0e] border border-slate-800 shadow-2xl">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-800">
              <div className="w-10 h-10 rounded-xl bg-red-600/10 border border-red-500/30 flex items-center justify-center text-red-400 shrink-0">
                <Calculator className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl font-black text-white tracking-tight uppercase">
                  Find the Right Tire & Get Volume Pricing
                </h3>
                <p className="text-xs text-slate-400 mt-0.5">
                  Select your axle configuration and quantity for an instant commercial rate estimate.
                </p>
              </div>
            </div>

            {calcSubmitted ? (
              <div className="py-6 text-center space-y-4 animate-in fade-in duration-200">
                <div className="w-12 h-12 rounded-xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-black text-white uppercase">Tire Rate Inquiry Submitted</h4>
                <p className="text-xs text-slate-300 max-w-md mx-auto">
                  Your tire estimate for <span className="font-bold text-white">{calcQuantity} units ({calcSize})</span> has been submitted under request ticket <span className="font-mono text-red-400 font-bold">{calcTicket}</span>.
                </p>
                <div className="text-xs text-slate-400">
                  Our commercial tire warehouse team will contact <span className="text-white font-medium">{calcPhone}</span> with confirmed brand availability and mount/delivery scheduling.
                </div>
                <button
                  onClick={() => setCalcSubmitted(false)}
                  className="px-5 py-2 text-xs font-bold text-slate-300 bg-slate-800 rounded-lg hover:text-white"
                >
                  Configure Another Order
                </button>
              </div>
            ) : (
              <form onSubmit={handleCalculatorSubmit} className="space-y-4">
                {calcError && (
                  <div className="p-3 rounded-lg bg-red-950/60 border border-red-500/40 text-red-200 text-xs flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 shrink-0 text-red-400" />
                    <span>{calcError}</span>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div>
                    <label className="block text-xs font-bold text-slate-300 mb-1">Tire Size</label>
                    <select
                      value={calcSize}
                      onChange={(e) => setCalcSize(e.target.value)}
                      className="w-full px-3 py-2.5 text-xs bg-slate-950 text-white rounded-xl border border-slate-800 focus:outline-none focus:border-red-500"
                    >
                      <option value="295/75R22.5">295/75R22.5 (Standard Low-Pro)</option>
                      <option value="11R22.5">11R22.5 (Standard Semi)</option>
                      <option value="11R24.5">11R24.5 (Tall Semi)</option>
                      <option value="275/80R22.5">275/80R22.5 (Low-Pro Alternate)</option>
                      <option value="255/70R22.5">255/70R22.5 (Drop Deck)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-300 mb-1">Axle Position / Type</label>
                    <select
                      value={calcPosition}
                      onChange={(e) => setCalcPosition(e.target.value)}
                      className="w-full px-3 py-2.5 text-xs bg-slate-950 text-white rounded-xl border border-slate-800 focus:outline-none focus:border-red-500"
                    >
                      <option value="Steer Tires">Steer Axle (2 Tires)</option>
                      <option value="Drive Tires">Drive Tandem Axles (8 Tires)</option>
                      <option value="Trailer Tires">Trailer Tandem Axles (8 Tires)</option>
                      <option value="All-Position Tires">All-Position / Mixed</option>
                      <option value="Full Rig 18-Wheeler">Full 18-Wheeler Package</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-300 mb-1">
                      Quantity: <span className="font-mono text-red-400 font-bold">{calcQuantity} Units</span>
                    </label>
                    <input
                      type="range"
                      min="2"
                      max="36"
                      step="2"
                      value={calcQuantity}
                      onChange={(e) => setCalcQuantity(Number(e.target.value))}
                      className="w-full accent-red-600 cursor-pointer h-2 bg-slate-800 rounded-lg mt-2.5"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  <div>
                    <label className="block text-xs font-bold text-slate-300 mb-1">Contact Name *</label>
                    <input
                      type="text"
                      placeholder="Your or Company Name"
                      value={calcContactName}
                      onChange={(e) => setCalcContactName(e.target.value)}
                      required
                      className="w-full px-3 py-2.5 text-xs bg-slate-950 text-white rounded-xl border border-slate-800 focus:outline-none focus:border-red-500"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-300 mb-1">Phone Number *</label>
                    <input
                      type="tel"
                      placeholder="(555) 000-0000"
                      value={calcPhone}
                      onChange={(e) => setCalcPhone(e.target.value)}
                      required
                      className="w-full px-3 py-2.5 text-xs bg-slate-950 text-white rounded-xl border border-slate-800 focus:outline-none focus:border-red-500"
                    />
                  </div>
                </div>

                {/* Estimate Preview Bar */}
                <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-between text-xs">
                  <div>
                    <span className="text-slate-400 block text-[11px]">Estimated Fleet Price ({calcQuantity} tires):</span>
                    <span className="font-black text-white text-base font-mono tabular-nums">
                      ~${estimatedSubtotal.toLocaleString()}
                    </span>
                    <span className="text-[10px] text-slate-500 ml-2">(Excludes local FET & mount disposal)</span>
                  </div>
                  <button
                    type="submit"
                    className="py-2.5 px-5 rounded-xl text-xs font-black uppercase tracking-wider text-white bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-500 hover:to-rose-500 shadow-md shadow-red-600/30 border border-red-500/40 transition-all flex items-center gap-1.5"
                  >
                    <span>Request Formal Quote</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
