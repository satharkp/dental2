import React, { useState } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight, CheckCircle2, Award } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Marcus Vance',
    role: 'Tech Executive',
    procedure: 'Invisalign & Laser Whitening',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200&h=200',
    quote: 'I had severe dental anxiety from childhood trauma. Dr. Sarah Jenkins and her clinical team completely changed my perspective. The laser procedure was 100% pain-free and the hospital VIP suite made the hour fly by!',
    verified: 'Verified Patient'
  },
  {
    id: 2,
    name: 'Elena Rostova',
    role: 'Fashion Designer',
    procedure: '3D Porcelain Veneers',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200&h=200',
    quote: 'Dr. Sophia Patel is an incredible specialist. My custom veneers look so natural! The 3D intraoral scanner preview gave me total peace of mind before starting the procedure.',
    verified: 'Verified Patient'
  },
  {
    id: 3,
    name: 'David Sterling',
    role: 'Architect',
    procedure: 'Single-Visit Dental Implant',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200&h=200',
    quote: 'I lost a tooth in a cycling accident. AuraDental got me into their 24/7 emergency unit, and Dr. Rodriguez placed a computer-guided implant same-day. The 0% EMI payment plan was seamless.',
    verified: 'Verified Patient'
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const activeItem = testimonials[currentIndex];

  return (
    <section className="py-20 bg-[#020617] relative overflow-hidden">
      {/* Lighting */}
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-blue-400 text-xs font-semibold uppercase tracking-wider">
            <Award className="w-3.5 h-3.5" />
            Verified Patient Experiences
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-white tracking-tight">
            Trusted by Over <span className="text-gradient-cyan">15,000 Patient Smiles</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-400 font-light">
            Read authentic reviews from patients who transformed their oral health at AuraDental Hospital Studio.
          </p>
        </div>

        {/* Carousel Showcase */}
        <div className="max-w-4xl mx-auto">
          <div className="glass-panel p-8 sm:p-12 rounded-3xl border border-slate-800 shadow-2xl relative">
            
            {/* Top Quote Icon */}
            <div className="w-12 h-12 rounded-2xl bg-blue-600/10 border border-blue-500/30 text-blue-400 flex items-center justify-center mb-6">
              <Quote className="w-6 h-6" />
            </div>

            {/* Quote Body */}
            <p className="text-lg sm:text-xl text-slate-200 leading-relaxed font-light italic mb-8">
              "{activeItem.quote}"
            </p>

            {/* Patient Footer Info */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-6 border-t border-slate-800">
              <div className="flex items-center gap-4">
                <img
                  src={activeItem.image}
                  alt={activeItem.name}
                  className="w-14 h-14 rounded-2xl object-cover border-2 border-blue-500/40 shadow-lg"
                />
                <div>
                  <h4 className="text-base font-bold font-heading text-white">{activeItem.name}</h4>
                  <p className="text-xs text-slate-400 font-medium">{activeItem.role} • <span className="text-blue-400">{activeItem.procedure}</span></p>
                  <div className="flex items-center gap-1 text-blue-300 text-[11px] mt-0.5 font-semibold">
                    <CheckCircle2 className="w-3.5 h-3.5 text-blue-400" /> {activeItem.verified}
                  </div>
                </div>
              </div>

              {/* Star Rating & Nav Controls */}
              <div className="flex items-center justify-between sm:justify-end gap-6">
                <div className="flex items-center gap-1 text-amber-400">
                  {[...Array(activeItem.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={prevTestimonial}
                    className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-blue-400 transition-colors"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={nextTestimonial}
                    className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-blue-400 transition-colors"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default Testimonials;
