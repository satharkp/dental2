import React from 'react';
import { Phone, Mail, MapPin, Share2, Link2, Send } from 'lucide-react';

const Footer = ({ onBookClick }) => {
  const quickLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Services', href: '#services' },
    { label: 'About Us', href: '#about' },
    { label: 'Our Doctors', href: '#doctors' },
    { label: 'Feedback', href: '#feedback' },
    { label: 'Contact Us', href: '#contact' },
  ];

  const services = [
    'Dental Check-ups',
    'Scaling & Polishing',
    'Tooth Whitening',
    'Dental Implants',
    'Root Canal',
    'Pediatric Dentistry',
  ];

  return (
    <footer className="bg-white text-slate-600 border-t border-slate-200">
      {/* Top CTA Banner */}
      <div className="py-12 bg-blue-50 border-b border-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2
            className="text-2xl sm:text-3xl font-extrabold text-slate-800 mb-3"
            style={{ fontFamily: 'Outfit, sans-serif' }}
          >
            Ready for Your Healthiest Smile?
          </h2>
          <p className="text-slate-500 mb-6 text-sm max-w-md mx-auto">
            Book your consultation today and take the first step toward expert, painless dental care.
          </p>
          <button
            onClick={onBookClick}
            className="inline-flex items-center gap-2 bg-white text-blue-500 hover:bg-blue-100 font-bold text-sm px-7 py-3 rounded-lg transition-all border border-blue-100 shadow-sm"
          >
            Book Appointment Now
          </button>
        </div>
      </div>

      {/* Main Footer Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand col */}
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 rounded-lg bg-blue-100 text-blue-500 flex items-center justify-center shadow-sm">
                <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <span className="text-xl font-extrabold text-slate-800" style={{ fontFamily: 'Outfit, sans-serif' }}>
                Smart<span className="text-blue-500">Dental</span>
              </span>
            </div>
            <p className="text-sm text-slate-500 leading-relaxed mb-5">
              Your trusted specialist dental clinic offering expert, painless care using the latest technology.
            </p>

            {/* Social */}
            <div className="flex items-center gap-3">
            {[Share2, Link2, Send].map((Icon, idx) => (
                <button
                  key={idx}
                  className="w-9 h-9 rounded-lg bg-slate-50 hover:bg-blue-50 text-slate-500 hover:text-blue-500 border border-slate-200 flex items-center justify-center transition-all"
                >
                  <Icon className="w-4 h-4" />
                </button>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-bold text-slate-800 uppercase tracking-widest mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm text-slate-500 hover:text-blue-500 transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-bold text-slate-800 uppercase tracking-widest mb-4">Our Services</h4>
            <ul className="space-y-2">
              {services.map((s) => (
                <li key={s}>
                  <span className="text-sm text-slate-500 hover:text-blue-500 transition-colors cursor-pointer">
                    {s}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-bold text-slate-800 uppercase tracking-widest mb-4">Contact Info</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm text-slate-500">
                <MapPin className="w-4 h-4 text-blue-400 mt-0.5 flex-shrink-0" />
                <span>742 Evergreen Terrace, Suite 400, Beverly Hills, CA 90210</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-slate-500">
                <Phone className="w-4 h-4 text-blue-400 flex-shrink-0" />
                <span>+1 (800) 555-SMILE</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-slate-500">
                <Mail className="w-4 h-4 text-blue-400 flex-shrink-0" />
                <span>care@smartdental.com</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Divider + Bottom Bar */}
        <div className="border-t border-slate-200 mt-12 pt-7 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500 text-center md:text-left">
          <p>© {new Date().getFullYear()} SmartDental Clinic. All rights reserved.</p>
          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2">
            <a href="#" className="hover:text-blue-500">Privacy Policy</a>
            <a href="#" className="hover:text-blue-500">Terms of Service</a>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="hover:text-blue-500 transition-colors font-semibold"
            >
              ↑ Back to Top
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
