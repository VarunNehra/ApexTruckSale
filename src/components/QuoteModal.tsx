import React, { useState } from 'react';
import { X, CheckCircle2, ArrowRight } from 'lucide-react';
import { TruckListing, TireProduct } from '../data/inventory';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedTruck?: TruckListing | null;
  selectedTire?: TireProduct | null;
}

export const QuoteModal: React.FC<QuoteModalProps> = ({
  isOpen,
  onClose,
  selectedTruck,
  selectedTire
}) => {
  const [quoteType, setQuoteType] = useState<string>(
    selectedTruck ? 'truck' : selectedTire ? 'tire' : 'general'
  );
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [notes, setNotes] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedCode, setSubmittedCode] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim() || !email.trim()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmittedCode(`QT-${Math.floor(100000 + Math.random() * 900000)}`);
    }, 600);
  };

  const handleReset = () => {
    setName('');
    setPhone('');
    setEmail('');
    setCompany('');
    setNotes('');
    setSubmittedCode(null);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4">
      <div className="bg-[#0e0e14] border border-red-950/60 rounded-2xl max-w-lg w-full p-6 sm:p-8 shadow-2xl relative">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl text-slate-400 hover:text-white bg-slate-800/60 hover:bg-slate-700 transition-colors"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {submittedCode ? (
          <div className="py-6 text-center space-y-4">
            <div className="w-14 h-14 rounded-2xl bg-red-600/20 text-red-400 border border-red-500/40 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-black text-white tracking-tight uppercase">Quote Request Dispatched</h3>
            <p className="text-xs text-slate-300 max-w-sm mx-auto leading-relaxed">
              Your formal quote request has been generated under ticket{' '}
              <span className="font-mono text-red-400 font-bold">{submittedCode}</span>.
            </p>
            <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 text-xs text-slate-400 max-w-sm mx-auto">
              An Apex commercial specialist is reviewing inventory allocation and will transmit pricing to <span className="text-white font-medium">{email}</span> shortly.
            </div>
            <button
              onClick={handleReset}
              className="px-6 py-2.5 text-xs font-bold text-white bg-red-600 rounded-xl hover:bg-red-500 transition-colors uppercase tracking-wider"
            >
              Done
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <span className="text-xs font-bold tracking-wider uppercase text-red-500">
                Commercial Pricing Desk
              </span>
              <h3 className="text-2xl font-black text-white tracking-tight mt-0.5 uppercase">
                Request an Official Quote
              </h3>
              <p className="text-xs text-slate-400 mt-1">
                Receive commercial pricing, fleet volume terms, and equipment financing packages.
              </p>
            </div>

            {/* Target Highlight if specific item chosen */}
            {selectedTruck && (
              <div className="p-3 rounded-xl bg-slate-950 border border-red-500/40 text-xs text-slate-300 flex items-center justify-between">
                <div>
                  <span className="text-[11px] text-red-400 block font-bold">Selected Truck:</span>
                  <span className="font-bold text-white">{selectedTruck.year} {selectedTruck.make} {selectedTruck.model}</span>
                  <span className="text-slate-400 ml-2">Stock #{selectedTruck.stockNumber}</span>
                </div>
                <span className="font-mono font-bold text-white">
                  {typeof selectedTruck.price === 'number' ? `$${selectedTruck.price.toLocaleString()}` : selectedTruck.price}
                </span>
              </div>
            )}

            {selectedTire && !selectedTruck && (
              <div className="p-3 rounded-xl bg-slate-950 border border-red-500/40 text-xs text-slate-300 flex items-center justify-between">
                <div>
                  <span className="text-[11px] text-red-400 block font-bold">Selected Tire:</span>
                  <span className="font-bold text-white">{selectedTire.brand} {selectedTire.model}</span>
                  <span className="text-slate-400 ml-2">{selectedTire.size}</span>
                </div>
                <span className="font-mono font-bold text-white">${selectedTire.pricePerUnit} / ea</span>
              </div>
            )}

            {/* Quote Type selector */}
            {!selectedTruck && !selectedTire && (
              <div>
                <label className="block text-xs font-bold text-slate-300 mb-1">
                  Quote Category
                </label>
                <select
                  value={quoteType}
                  onChange={(e) => setQuoteType(e.target.value)}
                  className="w-full px-3 py-2.5 text-xs bg-slate-950 text-white rounded-xl border border-slate-800 focus:outline-none focus:border-red-500"
                >
                  <option value="truck">Commercial Semi-Truck Purchase</option>
                  <option value="sell">Fleet Trade-In / Outright Sale</option>
                  <option value="tire">Heavy-Duty Commercial Tires</option>
                  <option value="roadside">Roadside Support Fleet Program</option>
                  <option value="general">Comprehensive Fleet Account</option>
                </select>
              </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-bold text-slate-300 mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Driver / Fleet Manager"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-3 py-2.5 text-xs bg-slate-950 text-white rounded-xl border border-slate-800 focus:outline-none focus:border-red-500"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-300 mb-1">
                  Company / Carrier Name
                </label>
                <input
                  type="text"
                  placeholder="Optional"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  className="w-full px-3 py-2.5 text-xs bg-slate-950 text-white rounded-xl border border-slate-800 focus:outline-none focus:border-red-500"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-bold text-slate-300 mb-1">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="(555) 000-0000"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full px-3 py-2.5 text-xs bg-slate-950 text-white rounded-xl border border-slate-800 focus:outline-none focus:border-red-500"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-300 mb-1">
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  placeholder="name@company.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3 py-2.5 text-xs bg-slate-950 text-white rounded-xl border border-slate-800 focus:outline-none focus:border-red-500"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-300 mb-1">
                Specific Equipment or Delivery Notes
              </label>
              <textarea
                rows={2}
                placeholder="Mention requested delivery date, financing terms, or tire quantities..."
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                className="w-full px-3 py-2 text-xs bg-slate-950 text-white rounded-xl border border-slate-800 focus:outline-none focus:border-red-500"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3.5 px-6 rounded-xl text-xs font-black uppercase tracking-wider text-white bg-gradient-to-r from-red-600 via-rose-600 to-red-700 hover:from-red-500 hover:to-rose-500 shadow-xl shadow-red-600/30 border border-red-500/40 transition-all flex items-center justify-center gap-2 group disabled:opacity-50"
            >
              <span>{isSubmitting ? 'Generating Official Quote...' : 'Submit Quote Request'}</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <div className="text-center pt-1">
              <a href="tel:15593442990" className="text-[11px] text-slate-400 hover:text-red-400 transition-colors">
                Immediate assistance? Call <span className="font-bold text-white">(559) 344-2990</span>
              </a>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
