import React from 'react';
import { ArrowRight, Wrench, Shield, ChevronDown, CheckCircle2, Truck, Disc } from 'lucide-react';
import { motion } from 'motion/react';
import flagshipTruckImage from '../assets/images/apex_red_flagship_truck_1792015370442.jpg';
import { ApexLogo } from './ApexLogo';

interface HeroProps {
  onExploreTrucks: () => void;
  onGetRoadside: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreTrucks, onGetRoadside }) => {
  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-between pt-28 pb-12 overflow-hidden">
      {/* Background Flagship Crimson Semi-Truck with measured gradient scrim */}
      <div className="absolute inset-0 z-0">
        <img
          src={flagshipTruckImage}
          alt="Gleaming crimson red and chrome Class 8 semi-truck on American highway at dusk"
          className="w-full h-full object-cover object-center scale-105 grayscale-[0.75] contrast-125 brightness-75 transform motion-safe:transition-transform motion-safe:duration-1000"
          referrerPolicy="no-referrer"
        />
        {/* Refined black-and-white cinematic scrim */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a]/80 via-[#0a0a0a]/60 to-[#0a0a0a]/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#090909]/90 via-[#090909]/40 to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-10%,rgba(255,255,255,0.22),rgba(255,255,255,0))]" />
      </div>

      {/* Main Content Area */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto py-12 lg:py-16">
        <div className="max-w-3xl">
          {/* Prominent Exact Apex Truck Sale Logo Emblem */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-6 inline-block"
          >
            <ApexLogo size="lg" />
          </motion.div>

          {/* Subtle Tagline kicker */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex items-center gap-2 text-xs font-bold tracking-widest uppercase mb-4"
          >
            <span className="text-white/80">Commercial Dealership & Fleet Support</span>
            <span aria-hidden="true" className="text-white/40">/</span>
            <span className="text-white/70">Powering Every Mile. Driving the Future.</span>
          </motion.div>

          {/* Main Headline with White and Red Chrome Gradient */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-6xl lg:text-7xl font-black text-white tracking-tight leading-[1.06] text-balance mb-6 uppercase"
          >
            YOUR NEXT MILE <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-rose-300 to-white">
              STARTS HERE.
            </span>
          </motion.h1>

          {/* Supporting Text */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg sm:text-xl text-slate-300 leading-relaxed max-w-2xl mb-8"
          >
            Buy trucks. Sell trucks. Find the right tires. Get back on the road. Apex Truck Sales delivers dependable trucking solutions built around your business.
          </motion.p>

          {/* Action CTAs in Apex Red and White */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4"
          >
            <button
              onClick={onExploreTrucks}
              className="px-8 py-4 text-xs font-black uppercase tracking-wider text-white bg-[#b71c1c] rounded-xl shadow-[0_18px_32px_rgba(183,28,28,0.28)] border border-[#b71c1c] hover:-translate-y-0.5 hover:bg-[#8f1414] transition-all flex items-center justify-center gap-3 group"
            >
              <span>Explore Trucks</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={onGetRoadside}
              className="px-8 py-4 text-xs font-bold uppercase tracking-wider text-white bg-black/85 hover:bg-black rounded-xl border border-white/15 shadow-[0_16px_24px_rgba(0,0,0,0.22)] hover:-translate-y-0.5 transition-all flex items-center justify-center gap-3 group"
            >
              <Wrench className="w-4 h-4 text-white group-hover:rotate-12 transition-transform" />
              <span>Get Roadside Help</span>
            </button>
          </motion.div>

          {/* Clean Unboxed Trust Markers */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.45 }}
            className="mt-10 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-slate-300 font-medium"
          >
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-red-500 shrink-0" />
              <span>180+ Point Safety Certification</span>
            </div>
            <span aria-hidden="true" className="hidden sm:inline text-slate-700">·</span>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-red-500 shrink-0" />
              <span>Fast Commercial Trade Valuations</span>
            </div>
            <span aria-hidden="true" className="hidden sm:inline text-slate-700">·</span>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-red-500 shrink-0" />
              <span>Direct Hotline Dispatch Support</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* 4-Column Bottom KPI / Trust Strip */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mt-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-4 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/15 shadow-[0_18px_40px_rgba(0,0,0,0.24)]">
          <div className="p-3.5 sm:p-4 rounded-xl bg-[#b71c1c] text-white border border-[#b71c1c] transition-colors">
            <div className="text-[11px] uppercase tracking-wider text-white/80 font-bold mb-1 flex items-center gap-2">
              <Truck className="w-4 h-4 text-white" />
              <span>Class-8 Trucks</span>
            </div>
            <div className="text-lg sm:text-xl font-black text-white tracking-tight">Inspected Inventory</div>
            <div className="text-xs text-white/80 mt-0.5">Ready for work & haul</div>
          </div>

          <div className="p-3.5 sm:p-4 rounded-xl bg-[#b71c1c] text-white border border-[#b71c1c] transition-colors">
            <div className="text-[11px] uppercase tracking-wider text-white/80 font-bold mb-1 flex items-center gap-2">
              <Shield className="w-4 h-4 text-white" />
              <span>Fleet Valuations</span>
            </div>
            <div className="text-lg sm:text-xl font-black text-white tracking-tight">Same-Day Purchase</div>
            <div className="text-xs text-white/80 mt-0.5">Fair cash appraisals</div>
          </div>

          <div className="p-3.5 sm:p-4 rounded-xl bg-[#b71c1c] text-white border border-[#b71c1c] transition-colors">
            <div className="text-[11px] uppercase tracking-wider text-white/80 font-bold mb-1 flex items-center gap-2">
              <Disc className="w-4 h-4 text-white" />
              <span>Commercial Tires</span>
            </div>
            <div className="text-lg sm:text-xl font-black text-white tracking-tight">Tier-1 Inventory</div>
            <div className="text-xs text-white/80 mt-0.5">Steer, drive & trailer</div>
          </div>

          <div className="p-3.5 sm:p-4 rounded-xl bg-[#b71c1c] text-white border border-[#b71c1c] transition-colors">
            <div className="text-[11px] uppercase tracking-wider text-white/80 font-bold mb-1 flex items-center gap-2">
              <Wrench className="w-4 h-4 text-white" />
              <span>Roadside Dispatch</span>
            </div>
            <div className="text-lg sm:text-xl font-black text-white tracking-tight">Dedicated Support</div>
            <div className="text-xs text-white/80 mt-0.5">(559) 344-2990 direct</div>
          </div>
        </div>

        {/* Subtle Animated Scroll Indicator */}
        <div className="flex justify-center mt-6">
          <a
            href="#buy-trucks"
            className="flex items-center gap-2 text-xs font-semibold text-slate-400 hover:text-red-400 transition-colors"
            aria-label="Scroll down to inventory"
          >
            <span>Scroll to explore</span>
            <ChevronDown className="w-4 h-4 animate-bounce text-red-500" />
          </a>
        </div>
      </div>
    </section>
  );
};
