import React from 'react';

const servicesList = [
  {
    id: 1,
    name: 'Dental Check-ups',
    icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01',
    desc: 'Comprehensive oral health examination to prevent issues before they start, with digital X-rays and oral cancer screening.',
  },
  {
    id: 2,
    name: 'Scaling & Polishing',
    icon: 'M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z',
    desc: 'Professional cleaning to remove plaque and tartar buildup for a brighter smile and healthier gums.',
  },
  {
    id: 3,
    name: 'Tooth Whitening',
    icon: 'M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5',
    desc: 'Professional-grade whitening treatments that brighten your smile safely, up to 8 shades in a single session.',
  },
  {
    id: 4,
    name: 'Tooth Jewellery',
    icon: 'M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z',
    desc: 'Add a sparkle to your smile with safe and stylish non-invasive tooth jewellery applications.',
  },
  {
    id: 5,
    name: 'Pediatric Dentistry',
    icon: 'M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
    desc: 'Gentle, child-friendly dental care to ensure healthy teeth from a young age in a fun, stress-free environment.',
  },
  {
    id: 6,
    name: 'Orthodontic Treatment',
    icon: 'M4 6h16M4 10h16M4 14h16M4 18h16',
    desc: 'Braces and clear aligner options to straighten teeth and correct bite issues for patients of all ages.',
  },
  {
    id: 7,
    name: 'Dental Implants',
    icon: 'M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z',
    desc: 'Permanent, natural-looking tooth replacement using titanium implants topped with custom porcelain crowns.',
  },
  {
    id: 8,
    name: 'Root Canal Treatment',
    icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z',
    desc: 'Painless single-visit root canal therapy using rotary endodontics to save and restore infected teeth.',
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-sm font-bold text-blue-500 uppercase tracking-widest mb-2">What We Offer</p>
          <h2
            className="text-3xl sm:text-4xl font-extrabold text-slate-800"
            style={{ fontFamily: 'Outfit, sans-serif' }}
          >
            Comprehensive Dental Services
          </h2>
          <div className="section-divider" />
          <p className="text-slate-500 text-base">
            From routine check-ups to complex procedures, we offer a full range of services tailored to your needs.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {servicesList.map((service) => (
            <div
              key={service.id}
              className="service-card bg-white rounded-lg p-6 border border-slate-200 shadow-sm cursor-pointer group"
            >
              {/* Icon */}
              <div className="icon-box mb-5">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d={service.icon}
                  />
                </svg>
              </div>

              <h3 className="text-base font-bold text-slate-800 mb-2 group-hover:text-blue-500 transition-colors">
                {service.name}
              </h3>
              <p className="text-sm text-slate-500 leading-relaxed">
                {service.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Services;
