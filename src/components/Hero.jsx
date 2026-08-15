import React from 'react';
import { ArrowRight, Star, Shield, CheckCircle } from 'lucide-react';

const Hero = ({ onBookClick }) => {
  const stats = [
    { value: '15+', label: 'Years of Excellence' },
    { value: '12,000+', label: 'Happy Patients' },
    { value: '98%', label: 'Satisfaction Rate' },
    { value: '4.9★', label: 'Google Rating' },
  ];

  const trustBadges = [
    'Painless Procedures',
    'ISO Certified Clinic',
    'Expert Specialists',
    'Flexible EMI Options',
  ];

  return (
    <section
      id="home"
      className="relative bg-white overflow-hidden pt-10 pb-16 md:pt-16 md:pb-20"
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'linear-gradient(180deg, rgba(239,246,255,0.78) 0%, rgba(255,255,255,0.92) 45%, #ffffff 100%)',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left: Text Content */}
          <div className="space-y-6">
            <span className="hero-badge inline-flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-blue-500 inline-block" />
              Hospital-Grade Dental Care
            </span>

            <h1
              className="text-4xl sm:text-5xl lg:text-[3.25rem] font-extrabold leading-tight text-slate-800"
              style={{ fontFamily: 'Outfit, sans-serif' }}
            >
              Expert Dental Care <span className="text-blue-500">You Can Trust</span>
            </h1>

            <p className="text-slate-500 text-base sm:text-lg leading-relaxed max-w-lg">
              From routine check-ups to advanced cosmetic treatments, our specialists deliver precise care in a calm, modern, and sterilized clinical environment.
            </p>

            {/* Trust badges */}
            <div className="grid grid-cols-2 gap-2.5">
              {trustBadges.map((badge) => (
                <div key={badge} className="flex items-center gap-2 text-sm text-slate-600 font-medium">
                  <CheckCircle className="w-4 h-4 text-blue-500 flex-shrink-0" />
                  <span>{badge}</span>
                </div>
              ))}
            </div>

            {/* CTA Row */}
            <div className="flex flex-wrap gap-4 pt-2">
              <button
                onClick={onBookClick}
                className="btn-primary flex items-center gap-2 text-sm"
              >
                Book Appointment
                <ArrowRight className="w-4 h-4" />
              </button>
              <a
                href="#services"
                className="px-6 py-3 rounded-lg border border-blue-100 text-blue-500 font-bold text-sm hover:bg-blue-50 hover:border-blue-200 transition-all"
              >
                View Our Services
              </a>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 border-t border-slate-200">
              {stats.map((s) => (
                <div key={s.label} className="rounded-lg border border-slate-200 bg-white px-3 py-3 text-center shadow-sm">
                  <p
                    className="text-xl sm:text-2xl font-extrabold text-blue-500"
                    style={{ fontFamily: 'Outfit, sans-serif' }}
                  >
                    {s.value}
                  </p>
                  <p className="text-[11px] text-slate-400 mt-0.5 leading-tight font-medium">{s.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="relative rounded-xl overflow-hidden border border-slate-200 shadow-xl shadow-slate-200/70 bg-white p-2">
              <img
                src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=800&h=900"
                alt="Modern dental clinic operatory"
                className="w-full h-[360px] sm:h-[430px] object-cover rounded-lg"
              />

              <div className="absolute top-6 left-6 bg-white rounded-lg shadow-lg px-4 py-3 flex items-center gap-3 border border-slate-200">
                <div className="w-10 h-10 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center">
                  <Shield className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-800">ISO Certified</p>
                  <p className="text-[10px] text-slate-400">Hospital Grade Safety</p>
                </div>
              </div>

              <div className="absolute bottom-6 right-6 bg-white rounded-lg shadow-lg px-4 py-3 border border-slate-200">
                <div className="flex items-center gap-1.5 text-amber-500 font-bold text-sm">
                  <Star className="w-4 h-4 fill-amber-400" />
                  <span>4.9 / 5.0</span>
                </div>
                <p className="text-[10px] text-slate-400 font-medium mt-0.5">2,400+ Verified Reviews</p>
              </div>

              <div className="absolute top-6 right-6 bg-white rounded-lg shadow-md px-3 py-1.5 flex items-center gap-1.5 border border-slate-200">
                <span className="w-2 h-2 rounded-full bg-blue-500" />
                <span className="text-[11px] font-bold text-slate-700">Open Today</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
