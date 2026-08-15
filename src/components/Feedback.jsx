import React, { useState } from 'react';
import { CheckCircle2, MessageSquare, Send, Star } from 'lucide-react';

const feedbackItems = [
  {
    name: 'Anika Rao',
    treatment: 'Routine Check-up',
    note: 'The clinic felt calm and organized. The doctor explained every step clearly and the appointment started on time.',
  },
  {
    name: 'James Carter',
    treatment: 'Root Canal Treatment',
    note: 'Clean facility, gentle care, and clear aftercare instructions. The whole team made a stressful visit feel manageable.',
  },
  {
    name: 'Meera Thomas',
    treatment: 'Pediatric Dentistry',
    note: 'My daughter was nervous before we arrived, but the staff were patient and kind. We left with a very good experience.',
  },
];

const Feedback = () => {
  const [form, setForm] = useState({ name: '', treatment: '', feedback: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setForm({ name: '', treatment: '', feedback: '' });
    }, 3000);
  };

  return (
    <section id="feedback" className="py-16 sm:py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <p className="text-sm font-bold text-blue-500 uppercase tracking-widest mb-2">Patient Feedback</p>
          <h2
            className="text-3xl sm:text-4xl font-extrabold text-slate-800"
            style={{ fontFamily: 'Outfit, sans-serif' }}
          >
            What Our Patients Say
          </h2>
          <div className="section-divider" />
          <p className="text-slate-500 text-base">
            Honest experiences from patients who visited our clinic for everyday and specialist dental care.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-6 lg:gap-8 items-start">
          <div className="lg:col-span-7 bg-white rounded-lg border border-slate-200 shadow-sm overflow-hidden">
            <div className="grid grid-cols-3 border-b border-slate-200 bg-blue-50/60">
              <div className="p-4 text-center border-r border-blue-100">
                <p className="text-2xl font-extrabold text-slate-800" style={{ fontFamily: 'Outfit, sans-serif' }}>4.9</p>
                <p className="text-[11px] text-slate-500 font-semibold">Average Rating</p>
              </div>
              <div className="p-4 text-center border-r border-blue-100">
                <p className="text-2xl font-extrabold text-slate-800" style={{ fontFamily: 'Outfit, sans-serif' }}>2.4k</p>
                <p className="text-[11px] text-slate-500 font-semibold">Reviews</p>
              </div>
              <div className="p-4 text-center">
                <p className="text-2xl font-extrabold text-slate-800" style={{ fontFamily: 'Outfit, sans-serif' }}>98%</p>
                <p className="text-[11px] text-slate-500 font-semibold">Satisfaction</p>
              </div>
            </div>

            <div className="divide-y divide-slate-100">
              {feedbackItems.map((item) => (
                <article key={item.name} className="p-5 sm:p-6">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
                    <div>
                      <h3 className="text-sm font-bold text-slate-800">{item.name}</h3>
                      <p className="text-xs text-blue-500 font-semibold mt-0.5">{item.treatment}</p>
                    </div>
                    <div className="flex items-center gap-1 text-amber-400">
                      {[...Array(5)].map((_, index) => (
                        <Star key={index} className="w-4 h-4 fill-amber-400" />
                      ))}
                    </div>
                  </div>
                  <p className="text-sm text-slate-600 leading-relaxed mt-3">{item.note}</p>
                </article>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5 bg-white rounded-lg border border-slate-200 p-5 sm:p-6 shadow-sm">
            <div className="flex items-start gap-3 mb-5">
              <div className="w-10 h-10 rounded-lg bg-blue-50 border border-blue-100 text-blue-500 flex items-center justify-center">
                <MessageSquare className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-extrabold text-slate-800" style={{ fontFamily: 'Outfit, sans-serif' }}>
                  Share Your Feedback
                </h3>
                <p className="text-xs text-slate-400">Your comments help us improve patient care.</p>
              </div>
            </div>

            {submitted ? (
              <div className="py-10 text-center">
                <div className="w-14 h-14 rounded-full bg-blue-50 border border-blue-100 text-blue-500 flex items-center justify-center mx-auto mb-3">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="text-base font-bold text-slate-800">Feedback Received</h4>
                <p className="text-sm text-slate-500 mt-1">Thank you for sharing your experience.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-wide mb-1">Full Name</label>
                  <input
                    type="text"
                    required
                    placeholder="Your name"
                    value={form.name}
                    onChange={(event) => setForm({ ...form, name: event.target.value })}
                    className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-2.5 text-sm text-slate-800 focus:outline-none focus:border-blue-300 focus:ring-2 focus:ring-blue-100 placeholder:text-slate-300"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-wide mb-1">Treatment</label>
                  <input
                    type="text"
                    placeholder="Dental check-up, whitening, braces..."
                    value={form.treatment}
                    onChange={(event) => setForm({ ...form, treatment: event.target.value })}
                    className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-2.5 text-sm text-slate-800 focus:outline-none focus:border-blue-300 focus:ring-2 focus:ring-blue-100 placeholder:text-slate-300"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-wide mb-1">Feedback</label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Tell us about your visit"
                    value={form.feedback}
                    onChange={(event) => setForm({ ...form, feedback: event.target.value })}
                    className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-2.5 text-sm text-slate-800 focus:outline-none focus:border-blue-300 focus:ring-2 focus:ring-blue-100 placeholder:text-slate-300 resize-none"
                  />
                </div>

                <button type="submit" className="btn-primary w-full flex items-center justify-center gap-2 text-sm">
                  <Send className="w-4 h-4" />
                  Submit Feedback
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feedback;
