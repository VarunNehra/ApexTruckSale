import React, { useState } from 'react';
import { UploadCloud, CheckCircle2, ShieldCheck, DollarSign, Clock, ArrowRight, X, AlertCircle } from 'lucide-react';

export const SellTruck: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    makeModel: '',
    year: '',
    mileage: '',
    condition: 'Good - Fleet Maintained',
    askingPrice: '',
    notes: ''
  });

  const [uploadedPhotos, setUploadedPhotos] = useState<Array<{ name: string; size: string; preview: string }>>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [submissionCode, setSubmissionCode] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errorMsg) setErrorMsg('');
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const filesArray = Array.from(e.target.files);
      const newPhotos = filesArray.map((file) => ({
        name: file.name,
        size: `${(file.size / (1024 * 1024)).toFixed(1)} MB`,
        preview: URL.createObjectURL(file)
      }));
      setUploadedPhotos((prev) => [...prev, ...newPhotos]);
    }
  };

  const handleRemovePhoto = (index: number) => {
    setUploadedPhotos((prev) => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName.trim() || !formData.phone.trim() || !formData.email.trim() || !formData.makeModel.trim()) {
      setErrorMsg('Please complete all required fields (Name, Phone, Email, and Truck Details).');
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      const code = `VAL-${Math.floor(100000 + Math.random() * 900000)}`;
      setSubmissionCode(code);
      setIsSuccess(true);
    }, 700);
  };

  const handleReset = () => {
    setFormData({
      fullName: '',
      phone: '',
      email: '',
      makeModel: '',
      year: '',
      mileage: '',
      condition: 'Good - Fleet Maintained',
      askingPrice: '',
      notes: ''
    });
    setUploadedPhotos([]);
    setIsSuccess(false);
    setErrorMsg('');
  };

  return (
    <section id="sell-truck" className="py-24 bg-[#0a0a0e] border-t border-slate-900 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Proposition & Process */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <div className="text-xs font-bold tracking-widest uppercase text-red-500 mb-2">
                Truck Acquisition Program
              </div>
              <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight uppercase text-balance">
                SELL YOUR TRUCK. RECEIVE DIRECT CAPITAL.
              </h2>
              <p className="text-slate-300 mt-4 text-sm sm:text-base leading-relaxed">
                Whether you are upgrading an owner-operator tractor or decommissioning a multi-unit corporate fleet, Apex Truck Sales delivers competitive cash purchase evaluations backed by verified secondary market values.
              </p>
            </div>

            {/* Three key benefits */}
            <div className="space-y-4 pt-2">
              <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-lg bg-red-600/10 border border-red-500/30 flex items-center justify-center text-red-400 shrink-0">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Rapid Same-Day Appraisals</h4>
                  <p className="text-xs text-slate-400 mt-0.5">
                    Submit your spec sheet and receive our formal commercial appraisal proposal within 2–4 business hours.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-lg bg-red-600/10 border border-red-500/30 flex items-center justify-center text-red-400 shrink-0">
                  <DollarSign className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Direct Wire Transfer Funding</h4>
                  <p className="text-xs text-slate-400 mt-0.5">
                    Zero retail consignment waiting. We wire funds directly upon verified title transfer and pre-purchase check.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-lg bg-red-600/10 border border-red-500/30 flex items-center justify-center text-red-400 shrink-0">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Title & Payoff Coordination</h4>
                  <p className="text-xs text-slate-400 mt-0.5">
                    We manage bank lien releases, DOT documentation, and transport coordination seamlessly.
                  </p>
                </div>
              </div>
            </div>

            {/* Call support */}
            <div className="p-4 rounded-xl bg-gradient-to-r from-red-950/30 to-slate-900/80 border border-red-900/40 text-xs text-slate-300">
              <span className="font-bold text-white block mb-1">Prefer to talk with an acquisitions specialist?</span>
              Call direct at <a href="tel:15593442990" className="text-red-400 hover:underline font-bold">(559) 344-2990</a> or email <span className="text-slate-200 font-mono">appraisals@apextrucksales.com</span>.
            </div>
          </div>

          {/* Right Column: Modern Sell-Your-Truck Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl bg-[#0e0e14] border border-slate-800 shadow-2xl relative">
              {isSuccess ? (
                <div className="py-8 text-center space-y-5 animate-in fade-in duration-300">
                  <div className="w-16 h-16 rounded-2xl bg-red-600/20 border border-red-500/40 flex items-center justify-center text-red-400 mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-black text-white tracking-tight uppercase">Valuation Request Received</h3>
                    <p className="text-sm text-slate-300 mt-2 max-w-md mx-auto leading-relaxed">
                      Your truck evaluation package has been logged under appraisal ticket{' '}
                      <span className="font-mono font-bold text-red-400">{submissionCode}</span>.
                    </p>
                  </div>
                  <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 text-xs text-slate-300 max-w-md mx-auto text-left space-y-1.5">
                    <div className="flex justify-between">
                      <span className="text-slate-400">Truck:</span>
                      <span className="font-bold text-white">{formData.year} {formData.makeModel}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">Mileage:</span>
                      <span className="font-bold text-white font-mono">{formData.mileage || 'Not specified'}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">Contact:</span>
                      <span className="font-bold text-white">{formData.phone}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">Estimated Response:</span>
                      <span className="font-bold text-emerald-400">Within 2–4 Business Hours</span>
                    </div>
                  </div>
                  <p className="text-xs text-slate-400 max-w-sm mx-auto">
                    An Apex commercial appraiser will call you shortly to confirm equipment specifics and finalize your valuation offer.
                  </p>
                  <button
                    onClick={handleReset}
                    className="px-6 py-2.5 text-xs font-bold text-slate-300 hover:text-white bg-slate-800 rounded-xl hover:bg-slate-700 transition-colors"
                  >
                    Submit Another Truck
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="border-b border-slate-800 pb-3">
                    <h3 className="text-lg font-black text-white tracking-tight uppercase">Submit Your Truck Details</h3>
                    <p className="text-xs text-slate-400 mt-1">
                      Complete this quick form to receive your formal valuation appraisal.
                    </p>
                  </div>

                  {errorMsg && (
                    <div className="p-3 rounded-lg bg-red-950/60 border border-red-500/40 text-red-200 text-xs flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 shrink-0 text-red-400" />
                      <span>{errorMsg}</span>
                    </div>
                  )}

                  {/* Owner Contact Information */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <div>
                      <label className="block text-xs font-bold text-slate-300 mb-1">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleInputChange}
                        placeholder="John Miller"
                        required
                        className="w-full px-3 py-2.5 text-xs bg-slate-950 text-white rounded-xl border border-slate-800 focus:outline-none focus:border-red-500"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-300 mb-1">
                        Phone Number <span className="text-red-500">*</span>
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
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="john@carrier.com"
                        required
                        className="w-full px-3 py-2.5 text-xs bg-slate-950 text-white rounded-xl border border-slate-800 focus:outline-none focus:border-red-500"
                      />
                    </div>
                  </div>

                  {/* Truck Specifics */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-bold text-slate-300 mb-1">
                        Truck Make & Model <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="makeModel"
                        value={formData.makeModel}
                        onChange={handleInputChange}
                        placeholder="e.g. Peterbilt 579 or Cascadia 126"
                        required
                        className="w-full px-3 py-2.5 text-xs bg-slate-950 text-white rounded-xl border border-slate-800 focus:outline-none focus:border-red-500"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-300 mb-1">
                        Year
                      </label>
                      <input
                        type="number"
                        name="year"
                        value={formData.year}
                        onChange={handleInputChange}
                        placeholder="e.g. 2021"
                        min="1990"
                        max="2026"
                        className="w-full px-3 py-2.5 text-xs bg-slate-950 text-white rounded-xl border border-slate-800 focus:outline-none focus:border-red-500 font-mono"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <div>
                      <label className="block text-xs font-bold text-slate-300 mb-1">
                        Odometer / Mileage
                      </label>
                      <input
                        type="text"
                        name="mileage"
                        value={formData.mileage}
                        onChange={handleInputChange}
                        placeholder="e.g. 285,000 mi"
                        className="w-full px-3 py-2.5 text-xs bg-slate-950 text-white rounded-xl border border-slate-800 focus:outline-none focus:border-red-500 font-mono"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-300 mb-1">
                        Overall Condition
                      </label>
                      <select
                        name="condition"
                        value={formData.condition}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2.5 text-xs bg-slate-950 text-white rounded-xl border border-slate-800 focus:outline-none focus:border-red-500"
                      >
                        <option value="Excellent - Ready to Work">Excellent - Ready to Work</option>
                        <option value="Good - Fleet Maintained">Good - Fleet Maintained</option>
                        <option value="Fair - Normal Commercial Wear">Fair - Normal Commercial Wear</option>
                        <option value="Needs Repairs / Mechanical Work">Needs Repairs / Mechanical Work</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-300 mb-1">
                        Asking Price ($)
                      </label>
                      <input
                        type="text"
                        name="askingPrice"
                        value={formData.askingPrice}
                        onChange={handleInputChange}
                        placeholder="Optional or best offer"
                        className="w-full px-3 py-2.5 text-xs bg-slate-950 text-white rounded-xl border border-slate-800 focus:outline-none focus:border-red-500 font-mono"
                      />
                    </div>
                  </div>

                  {/* Photo Upload Zone */}
                  <div>
                    <label className="block text-xs font-bold text-slate-300 mb-1">
                      Truck Photos & Spec Sheets (Optional)
                    </label>
                    <div className="relative border-2 border-dashed border-slate-700/80 hover:border-red-500/60 rounded-xl p-4 text-center bg-slate-950/60 hover:bg-slate-950 transition-colors">
                      <input
                        type="file"
                        multiple
                        accept="image/*,.pdf"
                        onChange={handleFileChange}
                        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                        id="photo-upload"
                      />
                      <UploadCloud className="w-6 h-6 text-red-500 mx-auto mb-1" />
                      <p className="text-xs text-slate-300">
                        <span className="font-bold text-red-400">Click to browse</span> or drag photos here
                      </p>
                      <p className="text-[11px] text-slate-500 mt-0.5">
                        Exterior walkaround, odometer, tire condition, or maintenance records (PNG, JPG, PDF)
                      </p>
                    </div>

                    {/* Previews */}
                    {uploadedPhotos.length > 0 && (
                      <div className="flex flex-wrap gap-2 mt-3">
                        {uploadedPhotos.map((photo, i) => (
                          <div
                            key={i}
                            className="flex items-center gap-2 px-2.5 py-1.5 rounded-lg bg-slate-850 text-xs text-slate-200 border border-slate-700"
                          >
                            <span className="truncate max-w-[140px]">{photo.name}</span>
                            <span className="text-[10px] text-slate-400">({photo.size})</span>
                            <button
                              type="button"
                              onClick={() => handleRemovePhoto(i)}
                              className="text-slate-400 hover:text-red-400"
                            >
                              <X className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Notes / Comments */}
                  <div>
                    <label className="block text-xs font-bold text-slate-300 mb-1">
                      Additional Engine / Equipment Details
                    </label>
                    <textarea
                      name="notes"
                      rows={2}
                      value={formData.notes}
                      onChange={handleInputChange}
                      placeholder="e.g., Detroit DD15, fresh DOT inspection, recent virgin drive tires, APU hours..."
                      className="w-full px-3 py-2 text-xs bg-slate-950 text-white rounded-xl border border-slate-800 focus:outline-none focus:border-red-500"
                    />
                  </div>

                  {/* Submit Button in Apex Red */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 px-6 rounded-xl text-xs font-black uppercase tracking-wider text-white bg-gradient-to-r from-red-600 via-rose-600 to-red-700 hover:from-red-500 hover:to-rose-500 shadow-xl shadow-red-600/30 border border-red-500/40 transition-all flex items-center justify-center gap-2 group disabled:opacity-50"
                  >
                    <span>{isSubmitting ? 'Evaluating Equipment Data...' : 'Get My Truck Valued'}</span>
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
