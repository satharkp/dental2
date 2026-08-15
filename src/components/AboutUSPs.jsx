import React from 'react';
import { CheckCircle, Award, Shield, Heart, Zap, Clock } from 'lucide-react';

const uspList = [
  {
    icon: Zap,
    title: 'Painless Laser Technology',
    desc: 'We use WaterLase® hydro-photonics — zero drills, zero vibration, zero anxiety. Most procedures require no needles.',
  },
  {
    icon: Shield,
    title: 'Hospital-Grade Sterilization',
    desc: 'Every instrument is sterilized using Class-B autoclave cycles with bio-indicator tracking, certified daily.',
  },
  {
    icon: Award,
    title: 'Board-Certified Specialists',
    desc: 'Our entire faculty holds internationally recognized qualifications from top dental universities worldwide.',
  },
  {
    icon: Heart,
    title: 'Patient-First Philosophy',
    desc: 'Comfort, transparency, and trust are at the core of everything we do — from consultation to aftercare.',
  },
  {
    icon: Clock,
    title: '24/7 Emergency Unit',
    desc: 'Dental pain doesn\'t wait. Our emergency team is on-call around the clock for urgent care and trauma.',
  },
  {
    icon: CheckCircle,
    title: 'Transparent 0% EMI Pricing',
    desc: 'Receive an itemized cost estimate before any procedure starts. We offer interest-free EMI with leading banks.',
  },
];

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid lg:grid-cols-2 gap-14 items-center">

          {/* Left: Image Stack */}
          <div className="relative">
            <div className="relative grid grid-cols-2 gap-4">
              <img
                src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=500&h=600"
                alt="Dental clinic operatory"
                className="rounded-lg shadow-lg object-cover w-full h-64 sm:h-80 border border-slate-200"
              />
              <div className="flex flex-col gap-4">
                <img
                  src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80&w=400&h=280"
                  alt="Dentist with patient"
                  className="rounded-lg shadow-lg object-cover w-full h-36 sm:h-44 border border-slate-200"
                />
                <div
                  className="rounded-lg p-5 flex flex-col items-center justify-center text-center shadow-sm border border-blue-100 bg-blue-50"
                >
                  <p className="text-3xl font-extrabold text-blue-500" style={{ fontFamily: 'Outfit, sans-serif' }}>18+</p>
                  <p className="text-sm text-slate-500 font-medium mt-0.5">Years of<br />Clinical Excellence</p>
                </div>
              </div>
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-4 left-8 bg-white rounded-lg shadow-lg px-5 py-3 border border-slate-200 flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center">
                <Shield className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <p className="text-xs font-extrabold text-slate-800">ISO & JCI Accredited</p>
                <p className="text-[10px] text-slate-400">Internationally Certified</p>
              </div>
            </div>
          </div>

          {/* Right: About Content */}
          <div className="space-y-7">
            <div>
              <p className="text-sm font-bold text-blue-500 uppercase tracking-widest mb-2">About Our Clinic</p>
              <h2
                className="text-3xl sm:text-4xl font-extrabold text-slate-800 leading-tight"
                style={{ fontFamily: 'Outfit, sans-serif' }}
              >
                Why Choose SmartDental for Your Oral Health?
              </h2>
              <div className="section-divider" style={{ margin: '1rem 0' }} />
              <p className="text-slate-500 leading-relaxed">
                At SmartDental, we combine advanced clinical technology with compassionate patient care. Our ISO-certified facility features the latest 3D imaging, laser treatment suites, and a team of internationally qualified specialists dedicated to your oral health.
              </p>
            </div>

            {/* USP Grid */}
            <div className="grid sm:grid-cols-2 gap-4">
              {uspList.map((usp) => {
                const Icon = usp.icon;
                return (
                  <div
                    key={usp.title}
                    className="usp-card bg-slate-50 rounded-lg p-4 border border-slate-200 shadow-sm flex gap-3 items-start"
                  >
                    <div className="w-10 h-10 rounded-lg bg-white border border-blue-100 flex items-center justify-center text-blue-500 flex-shrink-0 mt-0.5">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-slate-800 mb-0.5">{usp.title}</h4>
                      <p className="text-xs text-slate-500 leading-relaxed">{usp.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default About;
