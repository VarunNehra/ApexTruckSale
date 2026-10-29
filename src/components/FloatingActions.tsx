import React, { useState, useEffect } from 'react';
import { Phone, Wrench, ChevronUp } from 'lucide-react';

interface FloatingActionsProps {
  onScrollToRoadside: () => void;
}

export const FloatingActions: React.FC<FloatingActionsProps> = ({ onScrollToRoadside }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-5 right-5 z-40 flex items-center gap-2">
      {/* Rapid Roadside Trigger */}
      <button
        onClick={onScrollToRoadside}
        className="px-3.5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider text-white bg-slate-950/90 hover:bg-red-600 border border-red-500/50 shadow-2xl backdrop-blur-md transition-all flex items-center gap-2 hover:scale-105 active:scale-95"
        title="Quick Roadside Dispatch"
      >
        <Wrench className="w-3.5 h-3.5 text-red-500" />
        <span className="hidden sm:inline">Roadside Dispatch</span>
      </button>

      {/* Direct Call hotline in Apex Red */}
      <a
        href="tel:15593442990"
        className="w-10 h-10 rounded-xl bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-500 hover:to-rose-500 text-white flex items-center justify-center shadow-lg shadow-red-600/35 border border-red-400/50 hover:scale-105 active:scale-95 transition-all"
        title="Call (559) 344-2990"
        aria-label="Call Apex Direct Dispatch"
      >
        <Phone className="w-4 h-4" />
      </a>

      {/* Back to top button */}
      <button
        onClick={handleScrollTop}
        className="w-10 h-10 rounded-xl bg-slate-900/80 hover:bg-slate-800 text-slate-300 hover:text-white flex items-center justify-center border border-slate-800 shadow-lg transition-all"
        title="Back to Top"
        aria-label="Back to top"
      >
        <ChevronUp className="w-4 h-4" />
      </button>
    </div>
  );
};
