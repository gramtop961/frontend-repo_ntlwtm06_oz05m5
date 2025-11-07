import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductShowcase from './components/ProductShowcase';
import Specs from './components/Specs';
import Contact from './components/Contact';

function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm">© {new Date().getFullYear()} Rakabadi Store. All rights reserved.</p>
        <div className="flex items-center gap-4 text-sm">
          <a href="#product" className="hover:text-white">Product</a>
          <a href="#specs" className="hover:text-white">Specs</a>
          <a href="#contact" className="hover:text-white">Contact</a>
        </div>
      </div>
    </footer>
  );
}

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <main>
        <Hero />
        <ProductShowcase />
        <Specs />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
