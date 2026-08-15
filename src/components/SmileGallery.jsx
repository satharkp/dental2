import React, { useState, useRef } from 'react';
import { SlidersHorizontal, ArrowLeftRight, Calendar } from 'lucide-react';

const galleryItems = [
  {
    id: 'whitening',
    title: 'Laser Teeth Whitening',
    duration: '45 Minutes Single Visit',
    shades: '8 Shades Brighter',
    doctor: 'Dr. Sophia Patel',
    before: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=800&h=600',
    after: 'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&q=80&w=800&h=600',
    details: 'Discolored enamel restored to brilliant natural white using Philips Zoom! zero-sensitivity laser gel.'
  },
  {
    id: 'invisalign',
    title: 'Invisalign® Clear Aligners',
    duration: '7 Months Treatment Time',
    shades: 'Complete Bite Alignment',
    doctor: 'Dr. Sarah Jenkins',
    before: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80&w=800&h=600',
    after: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&q=80&w=800&h=600',
    details: 'Severe crowding and open bite corrected discreetly using 3D custom clear aligner trays.'
  },
  {
    id: 'veneers',
    title: '3D Porcelain Veneers Makeover',
    duration: '2 Appointments',
    shades: 'Custom Natural Porcelain',
    doctor: 'Dr. Sophia Patel',
    before: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=800&h=600',
    after: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=800&h=600',
    details: 'Handcrafted ultra-thin ceramic veneers placed to fix uneven length, chips, and stubborn discoloration.'
  }
];

const SmileGallery = ({ onOpenBooking }) => {
  const [activeItem, setActiveItem] = useState(galleryItems[0]);
  const [sliderPos, setSliderPos] = useState(50);
  const containerRef = useRef(null);

  const handleMove = (clientX) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    let percentage = (x / rect.width) * 100;
    if (percentage < 5) percentage = 5;
    if (percentage > 95) percentage = 95;
    setSliderPos(percentage);
  };

  const handleTouchMove = (e) => {
    handleMove(e.touches[0].clientX);
  };

  const handleMouseMove = (e) => {
    if (e.buttons === 1) {
      handleMove(e.clientX);
    }
  };

  return (
    <section id="gallery" className="py-20 bg-[#020617] relative overflow-hidden">
      {/* Background Lighting */}
      <div className="absolute top-1/2 right-10 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-blue-400 text-xs font-semibold uppercase tracking-wider">
            <SlidersHorizontal className="w-3.5 h-3.5" />
            Verified Case Studies
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-white tracking-tight">
            Interactive <span className="text-gradient-cyan">Before & After</span> Results
          </h2>
          <p className="text-base sm:text-lg text-slate-400 font-light">
            Drag the slider across the images below to explore real clinical results achieved at our hospital.
          </p>
        </div>

        {/* Gallery Selector Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          {galleryItems.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                setActiveItem(item);
                setSliderPos(50);
              }}
              className={`px-5 py-2.5 rounded-xl text-xs font-bold transition-all duration-300 ${
                activeItem.id === item.id
                  ? 'bg-gradient-to-r from-blue-600 to-sky-500 text-white shadow-lg shadow-blue-600/25 scale-105'
                  : 'bg-slate-900/80 text-slate-300 hover:text-white border border-slate-800'
              }`}
            >
              {item.title}
            </button>
          ))}
        </div>

        {/* Main Interactive Drag Comparison Slider Container */}
        <div className="grid lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Drag Slider Display */}
          <div className="lg:col-span-8">
            <div
              ref={containerRef}
              onMouseMove={handleMouseMove}
              onTouchMove={handleTouchMove}
              onClick={(e) => handleMove(e.clientX)}
              className="relative h-[380px] sm:h-[460px] rounded-3xl overflow-hidden glass-panel border border-slate-700/80 shadow-2xl cursor-col-resize select-none touch-none"
            >
              {/* After Image (Background) */}
              <img
                src={activeItem.after}
                alt="After transformation"
                className="absolute inset-0 w-full h-full object-cover filter brightness-105"
              />
              <span className="absolute top-4 right-4 bg-blue-600 text-white text-xs font-black px-3 py-1 rounded-full shadow-lg z-10 uppercase tracking-wider">
                AFTER (Clinical Result)
              </span>

              {/* Before Image (Clipped Foreground) */}
              <div
                className="absolute inset-y-0 left-0 overflow-hidden"
                style={{ width: `${sliderPos}%` }}
              >
                <img
                  src={activeItem.before}
                  alt="Before transformation"
                  className="absolute inset-0 w-full h-full object-cover filter grayscale contrast-125 max-w-none"
                  style={{ width: containerRef.current ? `${containerRef.current.clientWidth}px` : '100%' }}
                />
                <span className="absolute top-4 left-4 bg-slate-950/90 text-slate-300 text-xs font-bold px-3 py-1 rounded-full border border-slate-700 z-10 uppercase tracking-wider">
                  BEFORE Treatment
                </span>
              </div>

              {/* Draggable Divider Line & Handle */}
              <div
                className="absolute inset-y-0 w-1 bg-gradient-to-b from-blue-400 via-sky-400 to-indigo-400 shadow-[0_0_15px_rgba(59,130,246,0.8)] z-20 pointer-events-none"
                style={{ left: `${sliderPos}%` }}
              >
                <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-slate-950 border-2 border-blue-400 text-blue-400 flex items-center justify-center shadow-xl">
                  <ArrowLeftRight className="w-5 h-5 animate-pulse" />
                </div>
              </div>

              {/* Bottom Instruction Prompt */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 glass-panel px-4 py-1.5 rounded-full text-[11px] text-slate-300 border border-white/10 z-10 flex items-center gap-1.5 pointer-events-none">
                <SlidersHorizontal className="w-3.5 h-3.5 text-blue-400" />
                Drag left or right to compare
              </div>

            </div>
          </div>

          {/* Right Treatment Details Sidebar */}
          <div className="lg:col-span-4 space-y-6">
            <div className="glass-panel p-6 rounded-3xl border border-slate-800 shadow-xl space-y-4">
              <div>
                <span className="text-xs font-semibold text-blue-400 uppercase tracking-wider">Clinical Case Report</span>
                <h3 className="text-2xl font-bold font-heading text-white mt-1">{activeItem.title}</h3>
                <p className="text-xs text-slate-400 mt-1">Lead Surgeon: {activeItem.doctor}</p>
              </div>

              <p className="text-xs text-slate-300 leading-relaxed font-light">
                {activeItem.details}
              </p>

              <div className="space-y-2 pt-2 border-t border-slate-800/80">
                <div className="flex items-center justify-between text-xs py-1.5 px-3 rounded-xl bg-slate-900/60 border border-slate-800">
                  <span className="text-slate-400">Treatment Duration:</span>
                  <span className="font-bold text-white">{activeItem.duration}</span>
                </div>
                <div className="flex items-center justify-between text-xs py-1.5 px-3 rounded-xl bg-slate-900/60 border border-slate-800">
                  <span className="text-slate-400">Shade Improvement:</span>
                  <span className="font-bold text-blue-400">{activeItem.shades}</span>
                </div>
              </div>

              <button
                onClick={() => onOpenBooking({ service: activeItem.title })}
                className="w-full py-3 rounded-xl bg-gradient-to-r from-blue-600 to-sky-500 text-white font-bold text-xs hover:from-blue-500 hover:to-sky-400 transition-all flex items-center justify-center gap-2 shadow-lg shadow-blue-600/25"
              >
                <Calendar className="w-4 h-4" />
                Book Consultation
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default SmileGallery;
