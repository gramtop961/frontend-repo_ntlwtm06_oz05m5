import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 lg:py-24 grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full bg-blue-100 text-blue-700 px-3 py-1 text-xs font-semibold">
            Premium Gondola Shelf
          </span>
          <h1 className="mt-4 text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900">
            Elevate your supermarket layout with Rakabadi gondola shelves
          </h1>
          <p className="mt-4 text-slate-600 text-lg">
            Durable steel construction, modular design, and a clean minimalist aesthetic. Built for heavy-duty retail performance with fast installation and flexible configurations.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href="#product" className="inline-flex items-center justify-center rounded-lg bg-blue-600 text-white px-6 py-3 font-semibold shadow hover:bg-blue-700 transition-colors">View Product</a>
            <a href="#contact" className="inline-flex items-center justify-center rounded-lg bg-yellow-400 text-slate-900 px-6 py-3 font-semibold shadow hover:bg-yellow-300 transition-colors">Get a Quote</a>
          </div>
          <div className="mt-6 flex items-center gap-6 text-sm text-slate-600">
            <div className="flex items-center gap-2"><span className="w-2 h-2 bg-blue-600 rounded-full" /> Heavy-Duty</div>
            <div className="flex items-center gap-2"><span className="w-2 h-2 bg-red-500 rounded-full" /> Powder-Coated</div>
            <div className="flex items-center gap-2"><span className="w-2 h-2 bg-yellow-400 rounded-full" /> 5-Year Warranty</div>
          </div>
        </div>
        <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-xl">
          <Spline scene="https://prod.spline.design/0YkL83cS6GvW-7wA/scene.splinecode" style={{ width: '100%', height: '100%' }} />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white/40 via-transparent to-transparent" />
        </div>
      </div>
    </section>
  );
}
