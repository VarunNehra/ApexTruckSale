import React, { useState } from 'react';
import { Phone, Mail, MapPin, X } from 'lucide-react';
import { ApexLogo } from './ApexLogo';

export const Footer: React.FC = () => {
  const [legalModal, setLegalModal] = useState<'privacy' | 'terms' | null>(null);

  const handleScroll = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#050508] border-t border-red-950/40 text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 mb-12">
          {/* Brand Info with Apex Logo */}
          <div className="lg:col-span-4 space-y-4">
            <ApexLogo size="md" />
            <p className="text-xs text-slate-400 leading-relaxed max-w-sm pt-1">
              Apex Truck Sales provides dependable commercial vehicle solutions: Class-8 tractor sales, direct purchase appraisals, commercial tires, and rapid roadside assistance.
            </p>
            <div className="text-[11px] text-slate-500 font-mono">
              USDOT & Commercial Motor Vehicle Equipment Specialist · Fresno, CA
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Navigation
            </h4>
            <ul className="space-y-2">
              <li>
                <button onClick={() => handleScroll('#home')} className="hover:text-red-400 transition-colors">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => handleScroll('#buy-trucks')} className="hover:text-red-400 transition-colors">
                  Buy a Truck
                </button>
              </li>
              <li>
                <button onClick={() => handleScroll('#sell-truck')} className="hover:text-red-400 transition-colors">
                  Sell Your Truck
                </button>
              </li>
              <li>
                <button onClick={() => handleScroll('#truck-tires')} className="hover:text-red-400 transition-colors">
                  Commercial Tires
                </button>
              </li>
              <li>
                <button onClick={() => handleScroll('#roadside')} className="hover:text-red-400 transition-colors">
                  Roadside Assistance
                </button>
              </li>
              <li>
                <button onClick={() => handleScroll('#contact')} className="hover:text-red-400 transition-colors">
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Services & Inventory */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Commercial Offerings
            </h4>
            <ul className="space-y-2">
              <li>
                <span className="text-slate-300">Freightliner Cascadia Sleepers</span>
              </li>
              <li>
                <span className="text-slate-300">Peterbilt 579 UltraLoft Tractors</span>
              </li>
              <li>
                <span className="text-slate-300">Kenworth T680 Next Gen Units</span>
              </li>
              <li>
                <span className="text-slate-300">Volvo VNL 860 Globetrotter</span>
              </li>
              <li>
                <span className="text-slate-300">Commercial Steer, Drive & Trailer Tires</span>
              </li>
              <li>
                <span className="text-slate-300">Mobile On-Highway Tire Mounting</span>
              </li>
            </ul>
          </div>

          {/* Direct Contact */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Direct Contact
            </h4>
            <div className="space-y-2 text-xs">
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-red-500" />
                <a href="tel:15593442990" className="hover:text-red-400 transition-colors font-bold text-white font-mono">
                  (559) 344-2990
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-red-500" />
                <a href="mailto:info@apextrucksales.com" className="hover:text-red-400 transition-colors">
                  info@apextrucksales.com
                </a>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-red-500 shrink-0 mt-0.5" />
                <span>3712 W Franklin Ave, Fresno, CA 93706</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar with Copyright & Legal Links */}
        <div className="pt-8 border-t border-slate-900/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <div>
            © {new Date().getFullYear()} Apex Truck Sales. All rights reserved. Powering Every Mile. Driving the Future.
          </div>
          <div className="flex items-center gap-4">
            <button
              onClick={() => setLegalModal('privacy')}
              className="hover:text-slate-300 transition-colors underline"
            >
              Privacy Policy
            </button>
            <span>·</span>
            <button
              onClick={() => setLegalModal('terms')}
              className="hover:text-slate-300 transition-colors underline"
            >
              Terms & Conditions
            </button>
          </div>
        </div>
      </div>

      {/* Legal Dialog Modal */}
      {legalModal && (
        <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-[#0e0e13] border border-slate-800 rounded-2xl max-w-lg w-full p-6 text-slate-300 space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-slate-800">
              <h3 className="text-base font-bold text-white">
                {legalModal === 'privacy' ? 'Privacy Policy' : 'Terms & Conditions'}
              </h3>
              <button
                onClick={() => setLegalModal(null)}
                className="p-1 rounded text-slate-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="text-xs space-y-3 max-h-64 overflow-y-auto leading-relaxed text-slate-400">
              {legalModal === 'privacy' ? (
                <>
                  <p>
                    Apex Truck Sales respects the confidentiality of commercial carriers and owner-operators. Contact information, truck VINs, and spec sheets submitted through our forms are utilized exclusively to prepare purchase valuations, quotation packages, and dispatch roadside assistance.
                  </p>
                  <p>
                    We do not sell, rent, or trade client phone numbers or email addresses to third-party telemarketers.
                  </p>
                </>
              ) : (
                <>
                  <p>
                    All commercial vehicle listings, specifications, and tire descriptions are provided for commercial purchasing consideration. Stated vehicle availability is subject to physical yard delivery and inspection clearance.
                  </p>
                  <p>
                    Emergency roadside service coordination is conducted according to regional technician availability and weather conditions on designated freight corridors.
                  </p>
                </>
              )}
            </div>
            <div className="pt-2 text-right">
              <button
                onClick={() => setLegalModal(null)}
                className="px-4 py-2 bg-slate-800 text-white rounded-lg text-xs hover:bg-slate-700"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
};
