import React, { useState } from 'react';
import { X, Shield, CheckCircle2, ArrowRight } from 'lucide-react';

const BookingModal = ({ isOpen, onClose }) => {
  const [form, setForm] = useState({ name: '', phone: '', email: '', service: 'Dental Check-up', doctor: 'Dr. Sarah Jenkins', date: '', time: '10:00 AM' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1000);
  };

  const handleClose = () => {
    setSubmitted(false);
    setForm({ name: '', phone: '', email: '', service: 'Dental Check-up', doctor: 'Dr. Sarah Jenkins', date: '', time: '10:00 AM' });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-start sm:items-center justify-center p-3 sm:p-4 overflow-y-auto">
      {/* Backdrop */}
      <div className="fixed inset-0 bg-slate-950/55 backdrop-blur-sm" onClick={handleClose} />

      {/* Modal */}
      <div className="relative w-full max-w-md bg-white rounded-lg shadow-2xl overflow-hidden z-10 my-4 sm:my-8 border border-slate-200">

        <div className="h-1.5 w-full bg-blue-200" />

        <div className="p-5 sm:p-7">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-xl font-extrabold text-slate-800" style={{ fontFamily: 'Outfit, sans-serif' }}>
                Book Appointment
              </h3>
              <p className="text-xs text-slate-400 mt-0.5">Fill in your details to confirm your slot</p>
            </div>
            <button
              onClick={handleClose}
              className="p-2 rounded-lg bg-slate-100 text-slate-500 hover:bg-slate-200 hover:text-slate-700 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {submitted ? (
            <div className="py-8 text-center space-y-4">
              <div className="w-14 h-14 rounded-full flex items-center justify-center mx-auto border-2 border-blue-200 bg-blue-50">
                <CheckCircle2 className="w-8 h-8 text-blue-600" />
              </div>
              <h4 className="text-lg font-bold text-slate-800">Appointment Confirmed!</h4>
              <div className="bg-slate-50 rounded-lg p-4 text-left text-xs space-y-2 border border-slate-200">
                <div className="flex flex-col sm:flex-row sm:justify-between gap-0.5"><span className="text-slate-400">Patient</span><span className="font-semibold text-slate-700 break-words">{form.name}</span></div>
                <div className="flex flex-col sm:flex-row sm:justify-between gap-0.5"><span className="text-slate-400">Doctor</span><span className="font-semibold text-blue-600 break-words">{form.doctor}</span></div>
                <div className="flex flex-col sm:flex-row sm:justify-between gap-0.5"><span className="text-slate-400">Service</span><span className="font-semibold text-slate-700 break-words">{form.service}</span></div>
                <div className="flex flex-col sm:flex-row sm:justify-between gap-0.5"><span className="text-slate-400">Date & Time</span><span className="font-semibold text-slate-700 break-words">{form.date || 'TBD'} • {form.time}</span></div>
              </div>
              <p className="text-xs text-slate-400">A confirmation SMS & email has been sent to you.</p>
              <button onClick={handleClose} className="btn-primary text-sm">Done</button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-bold text-slate-400 uppercase tracking-wide mb-1">Service</label>
                  <select
                    value={form.service}
                    onChange={(e) => setForm({ ...form, service: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2.5 text-xs text-slate-700 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100"
                  >
                    <option>Dental Check-up</option>
                    <option>Scaling & Polishing</option>
                    <option>Tooth Whitening</option>
                    <option>Dental Implants</option>
                    <option>Root Canal</option>
                    <option>Pediatric Care</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[11px] font-bold text-slate-400 uppercase tracking-wide mb-1">Doctor</label>
                  <select
                    value={form.doctor}
                    onChange={(e) => setForm({ ...form, doctor: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2.5 text-xs text-slate-700 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100"
                  >
                    <option>Dr. Sarah Jenkins</option>
                    <option>Dr. Michael Chen</option>
                    <option>Dr. Emily Rodriguez</option>
                    <option>Dr. James Wilson</option>
                  </select>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-bold text-slate-400 uppercase tracking-wide mb-1">Date</label>
                  <input
                    type="date"
                    required
                    value={form.date}
                    onChange={(e) => setForm({ ...form, date: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2.5 text-xs text-slate-700 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-bold text-slate-400 uppercase tracking-wide mb-1">Time</label>
                  <select
                    value={form.time}
                    onChange={(e) => setForm({ ...form, time: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2.5 text-xs text-slate-700 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100"
                  >
                    <option>09:00 AM – 10:00 AM</option>
                    <option>10:30 AM – 11:30 AM</option>
                    <option>02:00 PM – 03:00 PM</option>
                    <option>04:30 PM – 05:30 PM</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-bold text-slate-400 uppercase tracking-wide mb-1">Full Name</label>
                <input
                  type="text"
                  required
                  placeholder="John Smith"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-2.5 text-sm text-slate-700 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100 placeholder:text-slate-300"
                />
              </div>

              <div className="grid sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-bold text-slate-400 uppercase tracking-wide mb-1">Phone</label>
                  <input
                    type="tel"
                    required
                    placeholder="+1 555 000 0000"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2.5 text-xs text-slate-700 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100 placeholder:text-slate-300"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-bold text-slate-400 uppercase tracking-wide mb-1">Email</label>
                  <input
                    type="email"
                    required
                    placeholder="john@example.com"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2.5 text-xs text-slate-700 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100 placeholder:text-slate-300"
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="btn-primary w-full flex items-center justify-center gap-2 text-sm mt-2"
              >
                {loading ? (
                  <span className="flex items-center gap-2">
                    <span className="w-4 h-4 rounded-full border-2 border-white border-t-transparent animate-spin" />
                    Confirming…
                  </span>
                ) : (
                  <>Confirm Appointment <ArrowRight className="w-4 h-4" /></>
                )}
              </button>

              <div className="flex items-center justify-center gap-1.5 text-[10px] text-slate-400">
                <Shield className="w-3 h-3 text-blue-400" />
                HIPAA-compliant. Your data is fully protected.
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
