import React from 'react';
import { ShieldCheck, Disc, Wrench, Users, Briefcase, Building2 } from 'lucide-react';
import { VALUE_PROPOSITIONS } from '../data/inventory';

export const WhyChooseApex: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'ShieldCheck':
        return <ShieldCheck className="w-6 h-6 text-red-500" />;
      case 'Disc':
        return <Disc className="w-6 h-6 text-red-500" />;
      case 'Wrench':
        return <Wrench className="w-6 h-6 text-red-500" />;
      case 'Users':
        return <Users className="w-6 h-6 text-red-500" />;
      case 'Briefcase':
        return <Briefcase className="w-6 h-6 text-red-500" />;
      case 'Building2':
        return <Building2 className="w-6 h-6 text-red-500" />;
      default:
        return <ShieldCheck className="w-6 h-6 text-red-500" />;
    }
  };

  return (
    <section className="py-24 bg-[#07070a] border-t border-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-xs font-bold tracking-widest uppercase text-red-500 mb-2">
            The Apex Commitment
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight uppercase">
            BUILT ON TRUST. DRIVEN BY PERFORMANCE.
          </h2>
          <p className="text-slate-400 mt-4 text-sm sm:text-base leading-relaxed">
            Modern commercial fleets and independent owner-operators face demanding deadlines. Apex Truck Sales was engineered to eliminate friction across every stage of commercial vehicle ownership.
          </p>
        </div>

        {/* 6 Value Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {VALUE_PROPOSITIONS.map((prop, idx) => (
            <div
              key={idx}
              className="group p-6 rounded-2xl bg-[#0e0e13] border border-slate-800/80 hover:border-red-600/50 transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-red-600/10 flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-slate-950 border border-slate-800 group-hover:border-red-500/40 group-hover:bg-red-600/10 flex items-center justify-center transition-colors mb-5">
                  {getIcon(prop.icon)}
                </div>

                <h3 className="text-lg font-black text-white tracking-tight group-hover:text-red-400 transition-colors mb-2">
                  {prop.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  {prop.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800/60 flex items-center justify-between text-[11px] text-slate-500 font-semibold">
                <span className="font-mono">Pillar 0{idx + 1}</span>
                <span className="text-red-500">Apex Standard</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
