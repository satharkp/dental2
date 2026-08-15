import React, { useState } from 'react';
import { Calculator, Shield, CheckCircle2, ArrowRight, CreditCard } from 'lucide-react';

const procedures = [
  { id: 'whitening', name: 'Laser Teeth Whitening', basePrice: 299, insuranceCovers: 0 },
  { id: 'aligners', name: 'Invisalign® Aligners', basePrice: 1999, insuranceCovers: 600 },
  { id: 'implants', name: '3D Dental Implant & Crown', basePrice: 1299, insuranceCovers: 500 },
  { id: 'rootcanal', name: 'Painless Root Canal & Crown', basePrice: 650, insuranceCovers: 350 },
  { id: 'veneers', name: 'Porcelain Veneer (Per Tooth)', basePrice: 599, insuranceCovers: 0 },
  { id: 'cleaning', name: 'Ultrasonic Scaling & Polishing', basePrice: 120, insuranceCovers: 100 },
];

const CostEstimator = ({ onOpenBooking }) => {
  const [selectedProcedures, setSelectedProcedures] = useState(['whitening']);
  const [hasInsurance, setHasInsurance] = useState('partial');
  const [emiMonths, setEmiMonths] = useState(12);

  const toggleProcedure = (id) => {
    if (selectedProcedures.includes(id)) {
      if (selectedProcedures.length > 1) {
        setSelectedProcedures(selectedProcedures.filter(p => p !== id));
      }
    } else {
      setSelectedProcedures([...selectedProcedures, id]);
    }
  };

  const grossTotal = selectedProcedures.reduce((sum, id) => {
    const item = procedures.find(p => p.id === id);
    return sum + (item ? item.basePrice : 0);
  }, 0);

  const insuranceDiscount = selectedProcedures.reduce((sum, id) => {
    const item = procedures.find(p => p.id === id);
    if (!item) return sum;
    if (hasInsurance === 'full') return sum + item.insuranceCovers;
    if (hasInsurance === 'partial') return sum + Math.round(item.insuranceCovers * 0.5);
    return sum;
  }, 0);

  const netTotal = Math.max(grossTotal - insuranceDiscount, 0);
  const monthlyEmi = Math.round(netTotal / emiMonths);

  return (
    <section id="estimator" className="py-20 bg-[#020617] relative overflow-hidden">
      {/* Glow Backdrop */}
      <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-blue-400 text-xs font-semibold uppercase tracking-wider">
            <Calculator className="w-3.5 h-3.5" />
            Hospital Billing Transparency
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-white tracking-tight">
            Treatment Cost & <span className="text-gradient-cyan">Insurance Estimator</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-400 font-light">
            Select your clinical procedures below to estimate hospital costs, insurance coverage, and 0% EMI monthly options.
          </p>
        </div>

        {/* Calculator Grid */}
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Controls */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Step 1: Select Procedures */}
            <div className="glass-panel p-6 rounded-3xl border border-slate-800 space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-base font-bold font-heading text-white flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-blue-600/20 text-blue-400 text-xs font-bold flex items-center justify-center border border-blue-500/30">1</span>
                  Select Required Procedures
                </h3>
                <span className="text-xs text-slate-400">Multi-selection supported</span>
              </div>

              <div className="grid sm:grid-cols-2 gap-3">
                {procedures.map((proc) => {
                  const isSelected = selectedProcedures.includes(proc.id);
                  return (
                    <button
                      key={proc.id}
                      onClick={() => toggleProcedure(proc.id)}
                      className={`p-3.5 rounded-2xl text-left transition-all border flex items-center justify-between ${
                        isSelected
                          ? 'bg-slate-900 border-blue-500 text-white shadow-lg shadow-blue-500/10'
                          : 'bg-slate-900/40 border-slate-800 text-slate-400 hover:text-slate-200'
                      }`}
                    >
                      <div>
                        <p className="text-xs font-bold">{proc.name}</p>
                        <p className="text-[11px] text-blue-400 font-semibold mt-0.5">${proc.basePrice}</p>
                      </div>
                      <div className={`w-5 h-5 rounded-lg border flex items-center justify-center ${isSelected ? 'bg-blue-600 border-blue-500 text-white' : 'border-slate-700'}`}>
                        {isSelected && <CheckCircle2 className="w-3.5 h-3.5 stroke-[3]" />}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Insurance & Payment Plan options */}
            <div className="grid sm:grid-cols-2 gap-6">
              
              {/* Insurance option */}
              <div className="glass-panel p-6 rounded-3xl border border-slate-800 space-y-3">
                <h3 className="text-sm font-bold font-heading text-white flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-sky-500/20 text-sky-400 text-xs font-bold flex items-center justify-center border border-sky-500/30">2</span>
                  Dental Insurance Status
                </h3>
                <div className="space-y-2">
                  {[
                    { id: 'partial', label: 'Standard Health Insurance (Cigna, MetLife)' },
                    { id: 'full', label: 'Comprehensive VIP Medical Coverage' },
                    { id: 'none', label: 'Self-Pay / Private Payment' },
                  ].map((opt) => (
                    <button
                      key={opt.id}
                      onClick={() => setHasInsurance(opt.id)}
                      className={`w-full p-2.5 rounded-xl text-xs font-medium text-left border transition-all ${
                        hasInsurance === opt.id
                          ? 'bg-slate-900 border-blue-400 text-white font-bold'
                          : 'bg-slate-900/40 border-slate-800 text-slate-400 hover:text-slate-200'
                      }`}
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* EMI Tenure */}
              <div className="glass-panel p-6 rounded-3xl border border-slate-800 space-y-3">
                <h3 className="text-sm font-bold font-heading text-white flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-indigo-500/20 text-indigo-400 text-xs font-bold flex items-center justify-center border border-indigo-500/30">3</span>
                  0% Interest EMI Tenure
                </h3>
                <div className="grid grid-cols-3 gap-2">
                  {[6, 12, 18].map((m) => (
                    <button
                      key={m}
                      onClick={() => setEmiMonths(m)}
                      className={`p-3 rounded-xl text-center text-xs font-bold border transition-all ${
                        emiMonths === m
                          ? 'bg-slate-900 border-indigo-400 text-white shadow-lg'
                          : 'bg-slate-900/40 border-slate-800 text-slate-400 hover:text-slate-200'
                      }`}
                    >
                      {m} Months
                    </button>
                  ))}
                </div>
                <p className="text-[10px] text-slate-400 text-center font-light pt-1">
                  *0% interest available with major medical cards & CareCredit.
                </p>
              </div>

            </div>

          </div>

          {/* Right Summary Display Card */}
          <div className="lg:col-span-5">
            <div className="glass-panel p-8 rounded-3xl border border-slate-800 shadow-2xl relative overflow-hidden space-y-6">
              
              <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                <div>
                  <span className="text-xs font-bold text-blue-400 uppercase tracking-wider">Hospital Estimate Summary</span>
                  <h3 className="text-xl font-bold font-heading text-white mt-0.5">Billing Calculation</h3>
                </div>
                <div className="p-2 rounded-xl bg-blue-600/10 border border-blue-500/30 text-blue-400">
                  <CreditCard className="w-5 h-5" />
                </div>
              </div>

              {/* Calculation Rows */}
              <div className="space-y-3 text-xs">
                <div className="flex items-center justify-between text-slate-400">
                  <span>Gross Procedure Total ({selectedProcedures.length} items):</span>
                  <span className="font-semibold text-slate-200">${grossTotal.toLocaleString()}</span>
                </div>
                
                <div className="flex items-center justify-between text-blue-300">
                  <span className="flex items-center gap-1">
                    <Shield className="w-3.5 h-3.5 text-blue-400" /> Estimated Insurance Discount:
                  </span>
                  <span className="font-semibold">-${insuranceDiscount.toLocaleString()}</span>
                </div>

                <div className="pt-3 border-t border-slate-800 flex items-center justify-between text-sm">
                  <span className="font-bold text-white">Estimated Out-of-Pocket Net:</span>
                  <span className="text-xl font-extrabold font-heading text-white">${netTotal.toLocaleString()}</span>
                </div>
              </div>

              {/* Highlighted EMI Box */}
              <div className="p-4 rounded-2xl bg-gradient-to-br from-slate-900 to-blue-950/60 border border-blue-500/30 shadow-inner space-y-1">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-slate-300 font-semibold">Flexible 0% EMI Option</span>
                  <span className="text-[10px] bg-blue-600/20 text-blue-300 font-bold px-2 py-0.5 rounded-full border border-blue-500/30">NO HIDDEN CHARGES</span>
                </div>
                <div className="flex items-baseline gap-1 pt-1">
                  <span className="text-3xl font-extrabold font-heading text-gradient-cyan">${monthlyEmi}</span>
                  <span className="text-xs text-slate-400">/ month for {emiMonths} months</span>
                </div>
              </div>

              {/* Action Button */}
              <button
                onClick={() => onOpenBooking({ service: 'General Consultation', note: `Calculator Estimate: $${netTotal}` })}
                className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-blue-600 to-sky-500 text-white font-bold text-sm hover:from-blue-500 hover:to-sky-400 transition-all flex items-center justify-center gap-2 shadow-lg shadow-blue-600/25 active:scale-95"
              >
                Schedule Free Price Consultation
                <ArrowRight className="w-4 h-4" />
              </button>

              <p className="text-[10px] text-center text-slate-400 font-light">
                *Final hospital billing is subject to diagnosis and insurance pre-authorization.
              </p>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default CostEstimator;
