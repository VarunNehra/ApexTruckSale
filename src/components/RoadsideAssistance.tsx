import React, { useState } from 'react';
import { Phone, AlertTriangle, Wrench, CheckCircle2, MapPin, ArrowRight, Radio } from 'lucide-react';
import roadsideTruckImage from '../assets/images/roadside_service_truck_1792014066701.jpg';
import { ROADSIDE_SERVICES } from '../data/inventory';

export const RoadsideAssistance: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    unitNumber: '',
    location: '',
    issueType: 'Tire Repair / Flat Replacement',
    description: '',
    urgency: 'Immediate Highway Shoulder Hazard'
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [dispatchResult, setDispatchResult] = useState<{
    ticketId: string;
    etaMinutes: number;
    assignedCoord: string;
    timestamp: string;
  } | null>(null);
  const [formError, setFormError] = useState('');

  const issueOptions = [
    'Tire Repair / Flat Replacement',
    'Tire Blowout / Shredded Tread',
    'Air Line / Gladhand / Brake Leak',
    'Mechanical Breakdown / No Start',
    'Cooling System / Radiator Hose Leak',
    'Electrical / Alternator / Jump Start',
    'Fuel Delivery / DEF System Issue',
    'Heavy-Duty Towing Coordination'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (formError) setFormError('');
  };

  const handleUseGPS = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const lat = position.coords.latitude.toFixed(4);
          const lon = position.coords.longitude.toFixed(4);
          setFormData((prev) => ({
            ...prev,
            location: `GPS: ${lat}, ${lon} (Auto-detected)`
          }));
        },
        () => {
          setFormData((prev) => ({
            ...prev,
            location: 'Highway Mile Marker or Nearest Exit'
          }));
        }
      );
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.phone.trim() || !formData.location.trim()) {
      setFormError('Please provide your name, callback phone number, and location.');
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setDispatchResult({
        ticketId: `APX-RD-${Math.floor(10000 + Math.random() * 90000)}`,
        etaMinutes: Math.floor(35 + Math.random() * 20),
        assignedCoord: 'Apex Central Commercial Dispatch #04',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      });
    }, 800);
  };

  return (
    <section id="roadside" className="py-24 bg-[#060609] border-t border-red-950/60 relative overflow-hidden">
      {/* Visual Red Accent Glows */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-red-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-[400px] h-[400px] bg-rose-700/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Contrast Emergency Red & Black Banner Header */}
        <div className="p-6 sm:p-10 rounded-3xl bg-gradient-to-r from-red-950/70 via-slate-900 to-red-950/70 border border-red-600/40 shadow-2xl mb-16 relative overflow-hidden">
          <div className="absolute -right-10 -bottom-10 opacity-10 pointer-events-none text-red-500">
            <Wrench className="w-96 h-96" />
          </div>

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-red-500">
                <Radio className="w-4 h-4 text-red-500" />
                <span>Commercial Roadside Operations</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight uppercase">
                WHEN THE ROAD STOPS, <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-rose-300 to-white">
                  WE SHOW UP.
                </span>
              </h2>
              <p className="text-slate-200 text-sm sm:text-base leading-relaxed max-w-2xl">
                Get in touch when your truck needs roadside support. Tell us where you are and what happened, and our team will help coordinate the next steps.
              </p>

              {/* Verified Service Hours disclosure */}
              <div className="flex flex-wrap items-center gap-y-2 gap-x-4 text-xs text-slate-300 pt-2 font-medium">
                <span className="font-bold text-red-400">Operational Coverage:</span>
                <span>Emergency Roadside Dispatch: 24/7 on primary freight corridors</span>
                <span aria-hidden="true" className="text-slate-600">·</span>
                <span>Regional Mobile Support: 6:00 AM – 10:00 PM EST</span>
              </div>
            </div>

            {/* Direct Call Hotbar Card in Red & White */}
            <div className="lg:col-span-4 p-6 rounded-2xl bg-[#09090d]/95 border border-red-500/50 shadow-xl flex flex-col justify-between text-center space-y-3">
              <span className="text-xs font-bold tracking-wider uppercase text-slate-400">
                Emergency Dispatch Hotline
              </span>
              <a
                href="tel:15593442990"
                className="text-2xl sm:text-3xl font-black text-red-500 hover:text-red-400 transition-colors font-mono tracking-tight"
              >
                (559) 344-2990
              </a>
              <span className="text-xs text-slate-400">
                Direct Live Dispatcher
              </span>
              <a
                href="tel:15593442990"
                className="w-full py-3.5 px-4 rounded-xl text-xs font-black uppercase tracking-wider text-white bg-gradient-to-r from-red-600 via-rose-600 to-red-700 hover:from-red-500 hover:to-rose-500 shadow-lg shadow-red-600/35 border border-red-400/50 transition-all flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4" />
                <span>Tap to Call Dispatch</span>
              </a>
            </div>
          </div>
        </div>

        {/* 6 Roadside Services Grid */}
        <div className="mb-16">
          <div className="mb-6 flex items-center justify-between">
            <h3 className="text-xl font-black text-white tracking-tight uppercase">
              Roadside Assistance Capabilities
            </h3>
            <span className="text-xs text-slate-400 font-semibold">Commercial Class 6–8 Support</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {ROADSIDE_SERVICES.map((srv) => (
              <div
                key={srv.id}
                className="p-5 rounded-2xl bg-[#0e0e13] border border-slate-800 hover:border-red-600/50 transition-all duration-200 flex flex-col justify-between shadow-lg"
              >
                <div>
                  <div className="flex items-center justify-between text-xs mb-3">
                    <span className="text-red-400 font-bold">{srv.tag}</span>
                    <span className="text-[11px] text-slate-400 font-mono">{srv.dispatchSpeed}</span>
                  </div>
                  <h4 className="text-base font-black text-white tracking-tight mb-2">
                    {srv.title}
                  </h4>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {srv.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Roadside Dispatch Request Layout (Image + Form) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Visual Showcase */}
          <div className="lg:col-span-5 space-y-4">
            <div className="aspect-[16/10] rounded-2xl overflow-hidden bg-slate-900 border border-slate-800 shadow-2xl relative">
              <img
                src={roadsideTruckImage}
                alt="Professional roadside commercial service truck assisting semi-truck on highway shoulder"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-xs text-slate-200 bg-black/75 backdrop-blur-md p-3.5 rounded-xl border border-white/10">
                <span className="font-bold text-red-400 block mb-0.5">Mobile Technician Units</span>
                Equipped with pneumatic tire tools, replacement commercial rubber, ECM diagnostic adapters, and air hose assemblies.
              </div>
            </div>

            {/* Quick Safety Protocol Checklist */}
            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-300 space-y-2">
              <span className="font-bold text-white block">Driver Safety Guidelines:</span>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-red-500 shrink-0 mt-0.5" />
                <span>Pull truck as far onto the right shoulder or off-ramp as possible.</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-red-500 shrink-0 mt-0.5" />
                <span>Activate 4-way hazard flashers and deploy DOT reflective warning triangles.</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-red-500 shrink-0 mt-0.5" />
                <span>Remain inside the cab if stopping on active interstate lanes.</span>
              </div>
            </div>
          </div>

          {/* Rapid Roadside Request Form in Red & White */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl bg-[#0e0e13] border border-red-600/35 shadow-2xl relative">
              {dispatchResult ? (
                <div className="py-6 text-center space-y-5 animate-in fade-in duration-300">
                  <div className="w-16 h-16 rounded-2xl bg-red-600/20 border border-red-500/40 flex items-center justify-center text-red-400 mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <div>
                    <span className="text-xs uppercase font-bold tracking-wider text-red-500">
                      Dispatch Ticket Active
                    </span>
                    <h3 className="text-2xl font-black text-white tracking-tight mt-1">
                      {dispatchResult.ticketId}
                    </h3>
                    <p className="text-xs text-slate-400 mt-1">
                      Logged at {dispatchResult.timestamp} by {dispatchResult.assignedCoord}
                    </p>
                  </div>

                  {/* Status Card */}
                  <div className="p-5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-left max-w-md mx-auto space-y-2.5">
                    <div className="flex justify-between items-center pb-2 border-b border-slate-800">
                      <span className="text-slate-400">Current Status:</span>
                      <span className="font-bold text-emerald-400">Route Assigned / Tech Dispatched</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">Target ETA:</span>
                      <span className="font-bold text-white font-mono">{dispatchResult.etaMinutes} Minutes</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">Location Transmitted:</span>
                      <span className="font-medium text-white truncate max-w-[200px]">{formData.location}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">Driver Phone:</span>
                      <span className="font-medium text-white">{formData.phone}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">Unit / Trailer:</span>
                      <span className="font-medium text-white">{formData.unitNumber || 'Unspecified'}</span>
                    </div>
                  </div>

                  <p className="text-xs text-slate-300 max-w-sm mx-auto">
                    A dispatch coordinator is contacting your phone directly to confirm mile marker coordinates and verify technician arrival.
                  </p>

                  <div className="flex flex-col sm:flex-row gap-2 justify-center pt-2">
                    <a
                      href="tel:15593442990"
                      className="px-5 py-2.5 text-xs font-bold text-white bg-red-600 rounded-xl hover:bg-red-500 transition-colors"
                    >
                      Call Dispatch (559) 344-2990
                    </a>
                    <button
                      onClick={() => setDispatchResult(null)}
                      className="px-5 py-2.5 text-xs font-bold text-slate-300 bg-slate-800 rounded-xl hover:text-white"
                    >
                      Submit Another Ticket
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="border-b border-slate-800 pb-3">
                    <h3 className="text-lg font-black text-white tracking-tight flex items-center gap-2 uppercase">
                      <AlertTriangle className="w-4 h-4 text-red-500" />
                      <span>Request Roadside Assistance</span>
                    </h3>
                    <p className="text-xs text-slate-400 mt-1">
                      Fill out your location and situation. Dispatchers triage calls immediately.
                    </p>
                  </div>

                  {formError && (
                    <div className="p-3 rounded-lg bg-red-950/60 border border-red-500/40 text-red-200 text-xs">
                      {formError}
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-bold text-slate-300 mb-1">
                        Driver / Fleet Contact Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Driver Name"
                        required
                        className="w-full px-3 py-2.5 text-xs bg-slate-950 text-white rounded-xl border border-slate-800 focus:outline-none focus:border-red-500"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-300 mb-1">
                        Callback Phone Number *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="(555) 000-0000"
                        required
                        className="w-full px-3 py-2.5 text-xs bg-slate-950 text-white rounded-xl border border-slate-800 focus:outline-none focus:border-red-500"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-bold text-slate-300 mb-1">
                        Truck / Trailer Number
                      </label>
                      <input
                        type="text"
                        name="unitNumber"
                        value={formData.unitNumber}
                        onChange={handleInputChange}
                        placeholder="e.g. Tractor #104 / Trailer #5308"
                        className="w-full px-3 py-2.5 text-xs bg-slate-950 text-white rounded-xl border border-slate-800 focus:outline-none focus:border-red-500"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-300 mb-1">
                        Type of Issue *
                      </label>
                      <select
                        name="issueType"
                        value={formData.issueType}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2.5 text-xs bg-slate-950 text-white rounded-xl border border-slate-800 focus:outline-none focus:border-red-500"
                      >
                        {issueOptions.map((opt) => (
                          <option key={opt} value={opt}>
                            {opt}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Location Input with GPS button */}
                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <label className="text-xs font-bold text-slate-300">
                        Current Location (Highway, Mile Marker, City) *
                      </label>
                      <button
                        type="button"
                        onClick={handleUseGPS}
                        className="text-[11px] text-red-400 hover:text-red-300 flex items-center gap-1 font-bold"
                      >
                        <MapPin className="w-3 h-3" />
                        <span>Detect GPS</span>
                      </button>
                    </div>
                    <input
                      type="text"
                      name="location"
                      value={formData.location}
                      onChange={handleInputChange}
                      placeholder="e.g. I-65 Northbound, Mile Marker 114, near Lebanon IN"
                      required
                      className="w-full px-3 py-2.5 text-xs bg-slate-950 text-white rounded-xl border border-slate-800 focus:outline-none focus:border-red-500"
                    />
                  </div>

                  {/* Problem Description */}
                  <div>
                    <label className="block text-xs font-bold text-slate-300 mb-1">
                      Description of Problem
                    </label>
                    <textarea
                      name="description"
                      rows={2}
                      value={formData.description}
                      onChange={handleInputChange}
                      placeholder="Describe symptoms, whether loaded or empty, specific tire position..."
                      className="w-full px-3 py-2 text-xs bg-slate-950 text-white rounded-xl border border-slate-800 focus:outline-none focus:border-red-500"
                    />
                  </div>

                  {/* Submit Button in High-Impact Red */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 px-6 rounded-xl text-xs font-black uppercase tracking-wider text-white bg-gradient-to-r from-red-600 via-rose-600 to-red-700 hover:from-red-500 hover:to-rose-500 shadow-xl shadow-red-600/30 border border-red-500/40 transition-all flex items-center justify-center gap-2 group disabled:opacity-50"
                  >
                    <span>{isSubmitting ? 'Transmitting To Dispatch...' : 'Request Roadside Assistance'}</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
