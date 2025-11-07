export default function Specs() {
  return (
    <section id="specs" className="bg-blue-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
        <h2 className="text-3xl font-bold text-slate-900">Detailed Specifications</h2>
        <div className="mt-6 grid md:grid-cols-3 gap-6">
          <div className="rounded-lg bg-white p-6 border border-slate-200 shadow-sm">
            <h3 className="font-semibold text-slate-900">Materials</h3>
            <ul className="mt-3 text-sm text-slate-700 space-y-2">
              <li>Cold-rolled steel uprights and shelves</li>
              <li>Powder-coat finish: blue/white/black</li>
              <li>Perforated back panels for pegs/hooks</li>
            </ul>
          </div>
          <div className="rounded-lg bg-white p-6 border border-slate-200 shadow-sm">
            <h3 className="font-semibold text-slate-900">Configurations</h3>
            <ul className="mt-3 text-sm text-slate-700 space-y-2">
              <li>Single, Double, and End Bay options</li>
              <li>Header signage and price rails available</li>
              <li>Corner modules for seamless aisles</li>
            </ul>
          </div>
          <div className="rounded-lg bg-white p-6 border border-slate-200 shadow-sm">
            <h3 className="font-semibold text-slate-900">Warranty & Support</h3>
            <ul className="mt-3 text-sm text-slate-700 space-y-2">
              <li>5-year structural warranty</li>
              <li>Installation guidance & layout planning</li>
              <li>Spare parts and accessories in stock</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
