import { Mail, Phone, MapPin } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [sent, setSent] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section id="contact" className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
        <div className="grid lg:grid-cols-2 gap-10">
          <div>
            <h2 className="text-3xl font-bold text-slate-900">Contact Sales</h2>
            <p className="mt-3 text-slate-600">Tell us about your store and we’ll prepare a tailored quote for Rakabadi gondola shelves.</p>

            <div className="mt-6 space-y-4 text-slate-700">
              <div className="flex items-center gap-3"><Phone className="text-blue-600" size={18} /> +62 812-3456-7890</div>
              <div className="flex items-center gap-3"><Mail className="text-blue-600" size={18} /> sales@rakabadi.store</div>
              <div className="flex items-center gap-3"><MapPin className="text-blue-600" size={18} /> Jakarta, Indonesia</div>
            </div>
          </div>

          <div className="rounded-xl border border-slate-200 bg-blue-50/50 p-6">
            {!sent ? (
              <form onSubmit={onSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="sm:col-span-2">
                  <label className="text-sm font-medium text-slate-700">Company / Store Name</label>
                  <input required type="text" className="mt-1 w-full rounded-md border-slate-300 focus:border-blue-500 focus:ring-blue-500" placeholder="e.g., Rakabadi Supermarket" />
                </div>
                <div>
                  <label className="text-sm font-medium text-slate-700">Your Name</label>
                  <input required type="text" className="mt-1 w-full rounded-md border-slate-300 focus:border-blue-500 focus:ring-blue-500" />
                </div>
                <div>
                  <label className="text-sm font-medium text-slate-700">Phone</label>
                  <input required type="tel" className="mt-1 w-full rounded-md border-slate-300 focus:border-blue-500 focus:ring-blue-500" />
                </div>
                <div className="sm:col-span-2">
                  <label className="text-sm font-medium text-slate-700">Email</label>
                  <input required type="email" className="mt-1 w-full rounded-md border-slate-300 focus:border-blue-500 focus:ring-blue-500" />
                </div>
                <div className="sm:col-span-2">
                  <label className="text-sm font-medium text-slate-700">Project Details</label>
                  <textarea rows={4} className="mt-1 w-full rounded-md border-slate-300 focus:border-blue-500 focus:ring-blue-500" placeholder="Aisle lengths, unit heights, number of bays, etc." />
                </div>
                <div className="sm:col-span-2 flex gap-3">
                  <button type="submit" className="inline-flex items-center justify-center rounded-lg bg-blue-600 text-white px-5 py-2.5 font-semibold shadow hover:bg-blue-700 transition-colors">Request Quote</button>
                  <a href="#product" className="inline-flex items-center justify-center rounded-lg bg-yellow-400 text-slate-900 px-5 py-2.5 font-semibold shadow hover:bg-yellow-300 transition-colors">View Product</a>
                </div>
              </form>
            ) : (
              <div className="text-center py-10">
                <h3 className="text-2xl font-semibold text-slate-900">Thanks! Your request was received.</h3>
                <p className="mt-2 text-slate-600">Our team will contact you within 1–2 business days.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
