import { useState } from 'react';
import { ShoppingCart, Phone, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navLink = (
    <ul className="flex flex-col md:flex-row md:items-center gap-6 text-sm font-medium">
      <li><a href="#home" className="text-slate-700 hover:text-blue-700">Home</a></li>
      <li><a href="#product" className="text-slate-700 hover:text-blue-700">Product</a></li>
      <li><a href="#specs" className="text-slate-700 hover:text-blue-700">Specs</a></li>
      <li><a href="#contact" className="text-slate-700 hover:text-blue-700">Contact</a></li>
    </ul>
  );

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-lg bg-blue-600 flex items-center justify-center">
            <ShoppingCart className="text-white" size={18} />
          </div>
          <span className="text-lg font-semibold tracking-tight text-slate-900">Rakabadi Store</span>
        </a>

        <nav className="hidden md:block">
          {navLink}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <a href="#contact" className="inline-flex items-center gap-2 rounded-lg bg-yellow-400 text-slate-900 px-4 py-2 text-sm font-semibold shadow hover:bg-yellow-300 transition-colors">
            <Phone size={16} /> Contact Sales
          </a>
        </div>

        <button aria-label="Menu" className="md:hidden p-2 rounded-lg border border-slate-200" onClick={() => setOpen(!open)}>
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-slate-200 px-4 py-4 bg-white">
          {navLink}
          <a href="#contact" className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-yellow-400 text-slate-900 px-4 py-2 text-sm font-semibold shadow hover:bg-yellow-300 transition-colors">
            <Phone size={16} /> Contact Sales
          </a>
        </div>
      )}
    </header>
  );
}
