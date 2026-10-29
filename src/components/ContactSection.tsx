import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, ArrowRight, CheckCircle2, AlertCircle } from 'lucide-react';

interface ContactSectionProps {
  onExploreTrucks: () => void;
  onSellTruck: () => void;
  onRequestRoadside: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  onExploreTrucks,
  onSellTruck,
  onRequestRoadside
}) => {
  const [formData, setFormData] = useState({
    name: '',
    businessName: '',
    phone: '',
    email: '',
    serviceRequired: 'Semi-Truck Purchase Inquiry',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [contactTicket, setContactTicket] = useState('');

  const services = [
    'Semi-Truck Purchase Inquiry',
    'Sell / Trade Fleet Equipment',
    'Commercial Truck Tires (Fleet / Single)',
    'Roadside Assistance Inquiry',
    'Financing & Commercial Leasing',
    'Other General Inquiries'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errorMsg) setErrorMsg('');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.phone.trim() || !formData.email.trim()) {
      setErrorMsg('Please provide your name, phone number, and email.');
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      const ticket = `APX-MSG-${Math.floor(1000 + Math.random() * 9000)}`;
      setContactTicket(ticket);
      setIsSuccess(true);
    }, 700);
  };

  const handleReset = () => {
    setFormData({
      name: '',
      businessName: '',
      phone: '',
      email: '',
      serviceRequired: 'Semi-Truck Purchase Inquiry',
      message: ''
    });
    setIsSuccess(false);
    setErrorMsg('');
  };

  return (
    <section id="contact" className="py-24 bg-[#07070a] border-t border-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Headline */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-xs font-bold tracking-widest uppercase text-red-500 mb-2">
            Get in Touch
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight uppercase">
            LET'S GET YOUR BUSINESS MOVING.
          </h2>
          <p className="text-slate-400 mt-4 text-sm sm:text-base leading-relaxed">
            Reach out to our sales team, tire technicians, or dispatch desk. We are here to keep your freight rolling.
          </p>
        </div>

        {/* 2-Column Contact Info + Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-20">
          {/* Left Column: Official Details & Hours */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 sm:p-7 rounded-2xl bg-[#0e0e13] border border-slate-800 shadow-xl space-y-6">
              <h3 className="text-lg font-black text-white tracking-tight uppercase">
                Dealership & Operations Headquarters
              </h3>

              <div className="space-y-4 text-xs sm:text-sm text-slate-300">
                {/* Phone */}
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-red-600/10 border border-red-500/30 flex items-center justify-center text-red-500 shrink-0 mt-0.5">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-slate-400 block text-xs">Direct Commercial Phone</span>
                    <a href="tel:15593442990" className="font-bold text-white hover:text-red-400 transition-colors font-mono">
                      (559) 344-2990
                    </a>
                    <span className="block text-slate-500 text-[11px]">Fresno Sales Office: 3712 W Franklin Ave, Fresno, CA 93706</span>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-red-600/10 border border-red-500/30 flex items-center justify-center text-red-500 shrink-0 mt-0.5">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-slate-400 block text-xs">Email Correspondence</span>
                    <a href="mailto:info@apextrucksales.com" className="font-bold text-white hover:text-red-400 transition-colors">
                      info@apextrucksales.com
                    </a>
                    <span className="block text-slate-500 text-[11px]">Emergency Dispatch: dispatch@apextrucksales.com</span>
                  </div>
                </div>

                {/* Physical Location */}
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-red-600/10 border border-red-500/30 flex items-center justify-center text-red-500 shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-slate-400 block text-xs">Physical Yard & Showroom</span>
                    <span className="font-bold text-white block">
                      3712 W Franklin Ave
                    </span>
                    <span className="text-slate-400 text-xs">
                      Fresno, CA 93706
                    </span>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start gap-3 pt-2 border-t border-slate-800">
                  <div className="w-8 h-8 rounded-lg bg-red-600/10 border border-red-500/30 flex items-center justify-center text-red-500 shrink-0 mt-0.5">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-slate-400 block text-xs">Business & Dispatch Hours</span>
                    <span className="font-bold text-white block">
                      Sales & Yard: Mon–Fri 8:00 AM – 6:00 PM EST
                    </span>
                    <span className="text-slate-400 text-xs block">
                      Saturday: 9:00 AM – 2:00 PM EST · Sunday: Closed
                    </span>
                    <span className="text-red-400 text-xs font-bold block mt-1">
                      Roadside Dispatch Hotline: Monitored 24/7 on designated routes
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl bg-[#0e0e13] border border-slate-800 shadow-2xl">
              {isSuccess ? (
                <div className="py-8 text-center space-y-4 animate-in fade-in duration-200">
                  <div className="w-14 h-14 rounded-2xl bg-red-600/20 text-red-400 border border-red-500/40 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-black text-white tracking-tight uppercase">Message Dispatched Successfully</h3>
                  <p className="text-xs text-slate-300 max-w-md mx-auto leading-relaxed">
                    Thank you, <span className="text-white font-bold">{formData.name}</span>. Your inquiry regarding <span className="text-red-400 font-bold">{formData.serviceRequired}</span> has been logged under reference <span className="font-mono text-red-400 font-bold">{contactTicket}</span>.
                  </p>
                  <p className="text-xs text-slate-400">
                    An Apex representative will respond directly via phone or email during standard operating hours.
                  </p>
                  <button
                    onClick={handleReset}
                    className="px-5 py-2 text-xs font-bold text-slate-300 hover:text-white bg-slate-800 rounded-xl transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="border-b border-slate-800 pb-3">
                    <h3 className="text-lg font-black text-white tracking-tight uppercase">Direct Sales & Inquiry Form</h3>
                    <p className="text-xs text-slate-400 mt-0.5">
                      Send a message to receive pricing, financing pre-qualification, or fleet specifications.
                    </p>
                  </div>

                  {errorMsg && (
                    <div className="p-3 rounded-lg bg-red-950/60 border border-red-500/40 text-red-200 text-xs flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 shrink-0 text-red-400" />
                      <span>{errorMsg}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-bold text-slate-300 mb-1">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="John Miller"
                        required
                        className="w-full px-3 py-2.5 text-xs bg-slate-950 text-white rounded-xl border border-slate-800 focus:outline-none focus:border-red-500"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-300 mb-1">
                        Business Name (Optional)
                      </label>
                      <input
                        type="text"
                        name="businessName"
                        value={formData.businessName}
                        onChange={handleInputChange}
                        placeholder="Miller Logistics LLC"
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
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="(555) 000-0000"
                        required
                        className="w-full px-3 py-2.5 text-xs bg-slate-950 text-white rounded-xl border border-slate-800 focus:outline-none focus:border-red-500"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-300 mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="john@example.com"
                        required
                        className="w-full px-3 py-2.5 text-xs bg-slate-950 text-white rounded-xl border border-slate-800 focus:outline-none focus:border-red-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-300 mb-1">
                      Service Required
                    </label>
                    <select
                      name="serviceRequired"
                      value={formData.serviceRequired}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2.5 text-xs bg-slate-950 text-white rounded-xl border border-slate-800 focus:outline-none focus:border-red-500"
                    >
                      {services.map((srv) => (
                        <option key={srv} value={srv}>
                          {srv}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-300 mb-1">
                      Message / Request Details
                    </label>
                    <textarea
                      name="message"
                      rows={3}
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Please share specific requirements, quantities, tractor models, or delivery timetables..."
                      className="w-full px-3 py-2 text-xs bg-slate-950 text-white rounded-xl border border-slate-800 focus:outline-none focus:border-red-500"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 px-6 rounded-xl text-xs font-black uppercase tracking-wider text-white bg-gradient-to-r from-red-600 via-rose-600 to-red-700 hover:from-red-500 hover:to-rose-500 shadow-xl shadow-red-600/30 border border-red-500/40 transition-all flex items-center justify-center gap-2 group disabled:opacity-50"
                  >
                    <span>{isSubmitting ? 'Sending Request...' : 'Submit Inquiry'}</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Final CTA Banner */}
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-[#14080a] via-[#1a0e10] to-[#14080a] border border-red-600/40 text-center shadow-2xl relative overflow-hidden">
          <div className="max-w-2xl mx-auto space-y-4">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight uppercase">
              READY TO MAKE YOUR NEXT MOVE?
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Explore inventory, request a commercial trade valuation, or coordinate roadside assistance with one click.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-3">
              <button
                onClick={onExploreTrucks}
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl text-xs font-black uppercase tracking-wider text-white bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-500 hover:to-rose-500 shadow-lg shadow-red-600/30 border border-red-400/50 transition-all"
              >
                Explore Trucks
              </button>
              <button
                onClick={onSellTruck}
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl text-xs font-bold uppercase tracking-wider text-white bg-slate-900 hover:bg-slate-800 border border-slate-800 transition-all"
              >
                Sell Your Truck
              </button>
              <button
                onClick={onRequestRoadside}
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl text-xs font-bold uppercase tracking-wider text-red-400 bg-slate-900 hover:bg-slate-800 border border-red-600/40 transition-all"
              >
                Request Assistance
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
