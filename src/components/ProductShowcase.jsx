import { CheckCircle2, Package, Layers, Ruler } from 'lucide-react';

const features = [
  { icon: Package, title: 'Modular System', desc: 'Combine bays, add accessories, and reconfigure anytime.' },
  { icon: Layers, title: 'Double/Single Sided', desc: 'Choose gondola or wall units to fit your aisles.' },
  { icon: Ruler, title: 'Adjustable Shelves', desc: '25mm pitch uprights let you tune height per shelf.' },
  { icon: CheckCircle2, title: 'Heavy-Duty Build', desc: 'Thick-gauge steel and powder-coated finish.' },
];

export default function ProductShowcase() {
  return (
    <section id="product" className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <div className="rounded-xl bg-blue-50 p-6 shadow-inner">
            <div className="aspect-[4/3] rounded-lg bg-gradient-to-br from-blue-200 via-white to-blue-100 border border-blue-100 flex items-center justify-center">
              <div className="w-full max-w-md">
                <img src="https://images.unsplash.com/photo-1590086782792-42dd2350140d?q=80&w=1400&auto=format&fit=crop" alt="Gondola shelf product" className="w-full h-auto rounded-md shadow-md" />
              </div>
            </div>
            <div className="mt-4 text-center text-sm text-slate-500">Illustrative photo. Actual product available in custom sizes and colors.</div>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-slate-900">Rakabadi Gondola Shelf</h2>
            <p className="mt-3 text-slate-600">Engineered for supermarkets and retail chains, our gondola system delivers strength, flexibility, and a premium customer-facing presentation. Designed with minimalist lines to keep focus on your products.</p>

            <dl className="mt-6 grid sm:grid-cols-2 gap-5">
              {features.map(({ icon: Icon, title, desc }) => (
                <div key={title} className="rounded-lg border border-slate-200 p-4 bg-white shadow-sm">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-md bg-blue-600/10 text-blue-700 flex items-center justify-center">
                      <Icon size={18} />
                    </div>
                    <div>
                      <dt className="font-semibold text-slate-900">{title}</dt>
                      <dd className="text-sm text-slate-600">{desc}</dd>
                    </div>
                  </div>
                </div>
              ))}
            </dl>

            <div className="mt-8 rounded-xl border border-yellow-300 bg-yellow-50 p-5">
              <h3 className="font-semibold text-slate-900">Standard Specs</h3>
              <ul className="mt-3 grid sm:grid-cols-2 gap-2 text-sm text-slate-700">
                <li>Height: 1200–2400 mm</li>
                <li>Bay width: 900/1200 mm</li>
                <li>Shelf depth: 300–600 mm</li>
                <li>Upright pitch: 25 mm</li>
                <li>Finish: Powder coated</li>
                <li>Load rating: up to 120 kg/shelf</li>
              </ul>
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#contact" className="inline-flex items-center justify-center rounded-lg bg-blue-600 text-white px-5 py-2.5 font-semibold shadow hover:bg-blue-700 transition-colors">Request Pricing</a>
              <a href="#specs" className="inline-flex items-center justify-center rounded-lg border border-slate-300 text-slate-700 px-5 py-2.5 font-semibold hover:bg-slate-50 transition-colors">Detailed Specs</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
