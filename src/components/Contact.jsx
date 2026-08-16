import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle2 } from 'lucide-react';

const Contact = () => {
  const [form, setForm] = useState({ name: '', phone: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setForm({ name: '', phone: '', email: '', message: '' });
    }, 3500);
  };

  const infoItems = [
    {
      icon: MapPin,
      label: 'Our Clinic',
      value: '742 Evergreen Terrace, Suite 400\nBeverly Hills, CA 90210',
      sub: 'Free parking available',
      color: 'bg-blue-50 border-blue-100 text-blue-600',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+1 (800) 555-SMILE\nEmergency: +1 (800) 555-9111',
      sub: '24/7 emergency hotline',
      color: 'bg-blue-50 border-blue-100 text-blue-500',
    },
    {
      icon: Mail,
      label: 'Email',
      value: 'care@smartdental.com\nconcierge@smartdental.com',
      sub: 'Reply within 2 hours',
      color: 'bg-blue-50 border-blue-100 text-blue-500',
    },
    {
      icon: Clock,
      label: 'Opening Hours',
      value: 'Mon – Sat: 8:00 AM – 8:00 PM\nSun: Emergency Only',
      sub: 'Walk-ins welcome',
      color: 'bg-blue-50 border-blue-100 text-blue-600',
    },
  ];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-sm font-bold text-blue-500 uppercase tracking-widest mb-2">Get In Touch</p>
          <h2
            className="text-3xl sm:text-4xl font-extrabold text-slate-800"
            style={{ fontFamily: 'Outfit, sans-serif' }}
          >
            Contact Us
          </h2>
          <div className="section-divider" />
          <p className="text-slate-500 text-base">
            Have a question or ready to book? Reach out to our team and we'll respond promptly.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-10 items-start">

          {/* Left: Info Cards */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {infoItems.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.label} className="bg-slate-50 border border-slate-200 rounded-lg p-5 hover:shadow-sm hover:border-blue-200 transition-all">
                  <div className={`w-10 h-10 rounded-lg border flex items-center justify-center mb-3 ${item.color}`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-wide mb-1">{item.label}</p>
                  <p className="text-sm font-semibold text-slate-700 whitespace-pre-line leading-relaxed">{item.value}</p>
                  <p className="text-[11px] text-blue-500 font-semibold mt-1">{item.sub}</p>
                </div>
              );
            })}
          </div>

          {/* Right: Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-slate-50 border border-slate-200 rounded-lg p-6 sm:p-8 shadow-sm">
              <h3 className="text-xl font-extrabold text-slate-800 mb-1" style={{ fontFamily: 'Outfit, sans-serif' }}>
                Send Us a Message
              </h3>
              <p className="text-xs text-slate-400 mb-6">
                Fill in your details below and our team will respond within 2 hours.
              </p>

              {submitted ? (
                <div className="py-10 text-center space-y-3">
                  <div className="w-14 h-14 rounded-full bg-blue-100 border border-blue-200 text-blue-600 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="text-lg font-bold text-slate-800">Message Sent!</h4>
                  <p className="text-sm text-slate-500">Thank you, {form.name || 'friend'}! Our team will be in touch shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-wide mb-1">Full Name</label>
                      <input
                        type="text"
                        required
                        placeholder="John Smith"
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className="w-full bg-white border border-slate-200 rounded-lg px-4 py-2.5 text-sm text-slate-800 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100 placeholder:text-slate-300"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-wide mb-1">Phone</label>
                      <input
                        type="tel"
                        placeholder="+1 (555) 000-0000"
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        className="w-full bg-white border border-slate-200 rounded-lg px-4 py-2.5 text-sm text-slate-800 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100 placeholder:text-slate-300"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-wide mb-1">Email Address</label>
                    <input
                      type="email"
                      required
                      placeholder="john@example.com"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full bg-white border border-slate-200 rounded-lg px-4 py-2.5 text-sm text-slate-800 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100 placeholder:text-slate-300"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-wide mb-1">Message</label>
                    <textarea
                      required
                      rows={4}
                      placeholder="How can we help you?"
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="w-full bg-white border border-slate-200 rounded-lg px-4 py-2.5 text-sm text-slate-800 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100 placeholder:text-slate-300 resize-none"
                    />
                  </div>

                  <button type="submit" className="btn-primary flex items-center justify-center gap-2 text-sm w-full">
                    <Send className="w-4 h-4" />
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>
        {/* Google Maps Location Embed */}
        <div className="max-w-5xl mx-auto mt-12 rounded-2xl overflow-hidden shadow-lg border border-slate-200">
          <iframe 
            title="Clinic Location Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3913.4357778550186!2d75.7958933!3d11.2294156!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba6593450942475%3A0xc3c5f4b505963953!2sNaduvattam%2C%20Kozhikode%2C%20Kerala!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
            width="100%" 
            height="320" 
            style={{ border: 0 }} 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

      </div>
    </section>
  );
};

export default Contact;
