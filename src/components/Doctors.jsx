import React from 'react';
import { Star, Calendar, Award, Clock } from 'lucide-react';

const doctorsList = [
  {
    id: 1,
    name: 'Dr. Sarah Jenkins',
    specialty: 'Chief Orthodontist',
    qualification: 'DDS, MS – Harvard Dental',
    experience: '16 yrs experience',
    rating: '4.98',
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=600&h=700',
    bio: 'Pioneered zero-discomfort 3D aligner treatments. Completed over 3,500 smile transformations.',
    next: 'Today at 2:30 PM',
  },
  {
    id: 2,
    name: 'Dr. Michael Chen',
    specialty: 'Pediatric Specialist',
    qualification: 'BDS, MDS – Pediatric Dentistry',
    experience: '12 yrs experience',
    rating: '4.96',
    image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=600&h=700',
    bio: 'Renowned for gentle, fun and fear-free dental visits for children and young adults.',
    next: 'Tomorrow at 10:00 AM',
  },
  {
    id: 3,
    name: 'Dr. Emily Rodriguez',
    specialty: 'Implantologist',
    qualification: 'DDS, PhD – Implantology',
    experience: '14 yrs experience',
    rating: '4.99',
    image: 'https://images.unsplash.com/photo-1594824436951-7f12620565da?auto=format&fit=crop&q=80&w=600&h=700',
    bio: 'Expert in computer-guided keyhole dental implant surgery with a lifetime stability guarantee.',
    next: 'Today at 4:15 PM',
  },
  {
    id: 4,
    name: 'Dr. James Wilson',
    specialty: 'Endodontist',
    qualification: 'DMD, Endodontic Fellow',
    experience: '15 yrs experience',
    rating: '4.95',
    image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=600&h=700',
    bio: 'Dedicated to painless single-visit root canal therapy using high-magnification 3D microscopes.',
    next: 'Tomorrow at 11:30 AM',
  },
];

const Doctors = ({ onBookClick }) => {
  return (
    <section id="doctors" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-sm font-bold text-blue-500 uppercase tracking-widest mb-2">Our Experts</p>
          <h2
            className="text-3xl sm:text-4xl font-extrabold text-slate-800"
            style={{ fontFamily: 'Outfit, sans-serif' }}
          >
            Meet Our Specialists
          </h2>
          <div className="section-divider" />
          <p className="text-slate-500 text-base">
            Our team of experienced and caring professionals is dedicated to providing you with the best dental care possible.
          </p>
        </div>

        {/* Doctors Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7">
          {doctorsList.map((doc) => (
            <div key={doc.id} className="doctor-card bg-white rounded-lg overflow-hidden border border-slate-200 shadow-sm group">

              {/* Photo */}
              <div className="relative h-64 overflow-hidden bg-slate-100">
                <img
                  src={doc.image}
                  alt={doc.name}
                  className="w-full h-full object-cover object-top transition-transform duration-500"
                />

                {/* Rating badge */}
                <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-sm rounded-lg px-2.5 py-1.5 flex items-center gap-1 shadow border border-slate-200">
                  <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  <span className="text-xs font-bold text-slate-800">{doc.rating}</span>
                </div>

                {/* Next available */}
                <div className="absolute bottom-3 left-3 right-3">
                  <div className="bg-white/95 backdrop-blur-sm rounded-lg px-3 py-1.5 flex items-center gap-1.5 shadow border border-slate-200">
                    <Clock className="w-3.5 h-3.5 text-blue-600" />
                    <span className="text-[11px] font-semibold text-slate-700 truncate">Next: {doc.next}</span>
                  </div>
                </div>
              </div>

              {/* Info */}
              <div className="p-5">
                <div className="flex items-start justify-between mb-1">
                  <h3 className="text-base font-extrabold text-slate-800 group-hover:text-blue-500 transition-colors" style={{ fontFamily: 'Outfit, sans-serif' }}>
                    {doc.name}
                  </h3>
                </div>
                <p className="text-xs font-semibold text-blue-500 mb-0.5">{doc.specialty}</p>
                <p className="text-[11px] text-slate-400 mb-2 font-medium">{doc.qualification}</p>
                <p className="text-xs text-slate-500 leading-relaxed mb-4 line-clamp-3">{doc.bio}</p>

                {/* Experience pill */}
                <div className="flex items-center gap-1.5 text-[11px] font-semibold text-slate-600 bg-blue-50 border border-blue-100 px-2.5 py-1 rounded-lg w-fit mb-4">
                  <Award className="w-3.5 h-3.5 text-blue-600" />
                  {doc.experience}
                </div>

                {/* Book button */}
                <button
                  onClick={onBookClick}
                  className="w-full py-2 rounded-lg text-xs font-bold text-blue-500 border border-blue-100 hover:bg-blue-50 hover:border-blue-200 transition-all duration-200 flex items-center justify-center gap-1.5"
                >
                  <Calendar className="w-3.5 h-3.5" />
                  Book Appointment
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Doctors;
