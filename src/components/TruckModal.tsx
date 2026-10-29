import React from 'react';
import { X, Check, ShieldCheck, ArrowRight } from 'lucide-react';
import { TruckListing } from '../data/inventory';

interface TruckModalProps {
  truck: TruckListing | null;
  onClose: () => void;
  onInquire: (truck: TruckListing) => void;
}

export const TruckModal: React.FC<TruckModalProps> = ({ truck, onClose, onInquire }) => {
  if (!truck) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 lg:p-8 animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-4xl bg-[#0e0e14] border border-red-950/60 rounded-2xl shadow-2xl overflow-hidden my-8"
        role="dialog"
        aria-modal="true"
        aria-labelledby="truck-modal-title"
      >
        {/* Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-[#14141d]/90">
          <div>
            <div className="text-xs uppercase font-bold tracking-wider text-red-500 font-mono">
              Stock #{truck.stockNumber} · VIN: {truck.vin}
            </div>
            <h2 id="truck-modal-title" className="text-xl sm:text-2xl font-black text-white tracking-tight uppercase">
              {truck.year} {truck.make} {truck.model}
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-white rounded-xl bg-slate-800/60 hover:bg-slate-700 transition-colors"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 max-h-[75vh] overflow-y-auto space-y-8">
          {/* Main Showcase Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            {/* Visual Column */}
            <div className="lg:col-span-7 space-y-4">
              <div className="relative rounded-xl overflow-hidden aspect-video bg-slate-900 border border-slate-800">
                <img
                  src={truck.image}
                  alt={`${truck.year} ${truck.make} ${truck.model}`}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-3 left-3 px-3 py-1 text-xs font-bold rounded-md bg-black/80 backdrop-blur-md text-red-300 border border-red-500/40">
                  {truck.condition}
                </div>
              </div>

              {/* Inspection Badge */}
              <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-red-600/10 border border-red-500/30 flex items-center justify-center text-red-400">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-white">Apex Safety Certification</div>
                    <div className="text-xs text-slate-400">
                      {truck.inspectionPointsPassed} out of 190 safety & mechanical checkpoints passed
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-xs font-bold text-emerald-400">Verified Inspection</span>
                </div>
              </div>
            </div>

            {/* Quick Specs Column */}
            <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
              <div>
                <div className="text-xs uppercase tracking-wider text-slate-400 font-bold mb-1">
                  Pricing & Availability
                </div>
                <div className="text-3xl font-black text-white tracking-tight mb-2 font-mono">
                  {typeof truck.price === 'number' ? `$${truck.price.toLocaleString()}` : truck.price}
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Price excludes state taxes, registration fees, and document processing where applicable. Commercial lease and purchase terms available.
                </p>
              </div>

              {/* Spec Highlights Grid */}
              <div className="grid grid-cols-2 gap-3 text-xs">
                <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800">
                  <span className="text-slate-400 block mb-0.5">Odometer</span>
                  <span className="font-bold text-white font-mono tabular-nums">{truck.mileage.toLocaleString()} mi</span>
                </div>
                <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800">
                  <span className="text-slate-400 block mb-0.5">Horsepower</span>
                  <span className="font-bold text-white font-mono tabular-nums">{truck.horsepower} HP</span>
                </div>
                <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800">
                  <span className="text-slate-400 block mb-0.5">Wheelbase</span>
                  <span className="font-bold text-white font-mono tabular-nums">{truck.wheelbase}</span>
                </div>
                <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800">
                  <span className="text-slate-400 block mb-0.5">Axle Ratio</span>
                  <span className="font-bold text-white font-mono tabular-nums">{truck.axleRatio}</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-2 pt-2">
                <button
                  onClick={() => {
                    onClose();
                    onInquire(truck);
                  }}
                  className="w-full py-3.5 px-4 rounded-xl text-xs font-black uppercase tracking-wider text-white bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-500 hover:to-rose-500 shadow-lg shadow-red-600/30 border border-red-500/40 transition-all flex items-center justify-center gap-2"
                >
                  <span>Inquire About This Truck</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <a
                  href="tel:15593442990"
                  className="w-full py-2.5 px-4 rounded-xl text-xs font-bold text-center block text-slate-300 hover:text-white bg-slate-900 border border-slate-800 hover:bg-slate-800 transition-colors"
                >
                  Call Sales Desk: (559) 344-2990
                </a>
              </div>
            </div>
          </div>

          {/* Detailed Engineering Specs Table */}
          <div>
            <h3 className="text-xs uppercase tracking-wider font-bold text-slate-300 mb-4 pb-2 border-b border-slate-800">
              Technical Specifications
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3 text-xs">
              <div className="flex justify-between py-1.5 border-b border-slate-800/60">
                <span className="text-slate-400">Engine Model</span>
                <span className="font-bold text-white">{truck.engine}</span>
              </div>
              <div className="flex justify-between py-1.5 border-b border-slate-800/60">
                <span className="text-slate-400">Transmission</span>
                <span className="font-bold text-white">{truck.transmission}</span>
              </div>
              <div className="flex justify-between py-1.5 border-b border-slate-800/60">
                <span className="text-slate-400">Sleeper Configuration</span>
                <span className="font-bold text-white">{truck.sleeper}</span>
              </div>
              <div className="flex justify-between py-1.5 border-b border-slate-800/60">
                <span className="text-slate-400">Auxiliary Power Unit (APU)</span>
                <span className="font-bold text-white">{truck.apu}</span>
              </div>
              <div className="flex justify-between py-1.5 border-b border-slate-800/60">
                <span className="text-slate-400">Suspension System</span>
                <span className="font-bold text-white">{truck.suspension}</span>
              </div>
              <div className="flex justify-between py-1.5 border-b border-slate-800/60">
                <span className="text-slate-400">Braking Architecture</span>
                <span className="font-bold text-white">{truck.brakes}</span>
              </div>
              <div className="flex justify-between py-1.5 border-b border-slate-800/60">
                <span className="text-slate-400">Tire Spec & Tread</span>
                <span className="font-bold text-white">{truck.tires}</span>
              </div>
              <div className="flex justify-between py-1.5 border-b border-slate-800/60">
                <span className="text-slate-400">Fuel Capacity</span>
                <span className="font-bold text-white">{truck.fuelCapacity}</span>
              </div>
            </div>
          </div>

          {/* Factory Options */}
          <div>
            <h3 className="text-xs uppercase tracking-wider font-bold text-slate-300 mb-3">
              Driver Comfort & Safety Equipment
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              {truck.features.map((feature, idx) => (
                <div key={idx} className="flex items-center gap-2 text-slate-300">
                  <Check className="w-3.5 h-3.5 text-red-500 shrink-0" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-4 bg-[#14141d] border-t border-slate-800 flex items-center justify-between">
          <div className="text-xs text-slate-400">
            Sample inventory specification for demonstration. Subject to physical yard availability.
          </div>
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-bold text-slate-300 hover:text-white bg-slate-800 rounded-lg transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
