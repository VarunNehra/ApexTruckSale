import React, { useState } from 'react';
import { Truck, DollarSign, Wrench } from 'lucide-react';

export const HowItWorks: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'buy' | 'sell' | 'roadside'>('buy');

  const workflows = {
    buy: {
      title: 'Truck Purchases',
      badge: 'Acquisition Workflow',
      description: 'Find, inspect, and take delivery of work-ready Class-8 sleeper and day cab tractors with straightforward purchase terms.',
      steps: [
        {
          number: '01',
          title: 'Browse Available Trucks',
          description: 'Filter verified pre-owned tractors by make, engine platform, year, and sleeper specs on our live digital showroom.'
        },
        {
          number: '02',
          title: 'Submit an Inquiry',
          description: 'Select your preferred tractor, review comprehensive inspection points, and request a detailed pricing package.'
        },
        {
          number: '03',
          title: 'Connect With Our Sales Team',
          description: 'Discuss commercial financing options, warranty coverage, trade-ins, and schedule nationwide pickup or transport.'
        }
      ]
    },
    sell: {
      title: 'Selling a Truck',
      badge: 'Fleet Decommissioning',
      description: 'Convert equipment equity into working capital through our streamlined appraisal and direct purchase program.',
      steps: [
        {
          number: '01',
          title: 'Share Your Truck Details',
          description: 'Input your tractor year, make, mileage, engine details, and upload walkaround photos via our digital appraisal portal.'
        },
        {
          number: '02',
          title: 'Receive a Purchase Evaluation',
          description: 'Our commercial valuation team analyzes current secondary market values and issues a formal purchase offer within 2–4 hours.'
        },
        {
          number: '03',
          title: 'Discuss the Next Steps',
          description: 'Accept the offer, complete title payoff documentation, and receive direct bank wire disbursement.'
        }
      ]
    },
    roadside: {
      title: 'Roadside Assistance',
      badge: 'Rapid Response Protocol',
      description: 'Get commercial technicians rolling toward your location when mechanical or tire delays threaten freight timetables.',
      steps: [
        {
          number: '01',
          title: 'Submit Your Location and Issue',
          description: 'Dial our direct hotline (559) 344-2990 or transmit your highway mile marker coordinates and mechanical issue via web dispatch.'
        },
        {
          number: '02',
          title: 'Our Team Reviews Your Request',
          description: 'A commercial dispatch coordinator reviews equipment requirements, confirms parts availability, and verifies technician ETA.'
        },
        {
          number: '03',
          title: 'Coordinate Available Assistance',
          description: 'A fully equipped mobile service truck arrives on-site to execute roadside tire replacement, air line repair, or coordinate secure staging.'
        }
      ]
    }
  };

  const currentWorkflow = workflows[activeTab];

  return (
    <section className="py-24 bg-[#0a0a0e] border-t border-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="text-xs font-bold tracking-widest uppercase text-red-500 mb-2">
            Streamlined Operations
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight uppercase">
            HOW IT WORKS.
          </h2>
          <p className="text-slate-400 mt-4 text-sm sm:text-base leading-relaxed">
            Transparent, predictable processes engineered to get commercial drivers and fleet owners back on the road without delays.
          </p>
        </div>

        {/* Service Switcher Tabs */}
        <div className="flex justify-center mb-12">
          <div className="p-1 rounded-2xl bg-slate-950 border border-slate-800 flex items-center gap-1">
            <button
              onClick={() => setActiveTab('buy')}
              className={`px-4 sm:px-6 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${
                activeTab === 'buy'
                  ? 'bg-red-600 text-white shadow-md shadow-red-600/30'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800'
              }`}
            >
              <Truck className="w-4 h-4" />
              <span>Buy a Truck</span>
            </button>

            <button
              onClick={() => setActiveTab('sell')}
              className={`px-4 sm:px-6 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${
                activeTab === 'sell'
                  ? 'bg-red-600 text-white shadow-md shadow-red-600/30'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800'
              }`}
            >
              <DollarSign className="w-4 h-4" />
              <span>Sell Your Truck</span>
            </button>

            <button
              onClick={() => setActiveTab('roadside')}
              className={`px-4 sm:px-6 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${
                activeTab === 'roadside'
                  ? 'bg-red-600 text-white shadow-md shadow-red-600/30'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800'
              }`}
            >
              <Wrench className="w-4 h-4" />
              <span>Roadside Assistance</span>
            </button>
          </div>
        </div>

        {/* Workflow Overview Card */}
        <div className="p-6 sm:p-10 rounded-2xl bg-[#0e0e13] border border-slate-800 shadow-2xl">
          <div className="mb-10 text-center sm:text-left sm:flex items-center justify-between border-b border-slate-800/80 pb-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-red-500">
                {currentWorkflow.badge}
              </span>
              <h3 className="text-2xl font-black text-white tracking-tight mt-1 uppercase">
                {currentWorkflow.title}
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-slate-400 max-w-md mt-2 sm:mt-0 leading-relaxed">
              {currentWorkflow.description}
            </p>
          </div>

          {/* Timeline: Horizontal on Desktop, Vertical on Mobile */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {/* Desktop Connecting Line in Apex Red */}
            <div className="hidden md:block absolute top-7 left-12 right-12 h-0.5 bg-gradient-to-r from-red-600/40 via-red-500/60 to-red-600/40 z-0" />

            {currentWorkflow.steps.map((step, idx) => (
              <div key={idx} className="relative z-10 flex flex-col items-center md:items-start text-center md:text-left">
                {/* Step Circle Indicator */}
                <div className="w-14 h-14 rounded-2xl bg-slate-950 border-2 border-red-500 flex items-center justify-center text-red-400 font-mono font-bold text-lg shadow-lg shadow-red-600/25 mb-5">
                  {step.number}
                </div>

                <h4 className="text-base font-bold text-white tracking-tight mb-2">
                  {step.title}
                </h4>

                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
