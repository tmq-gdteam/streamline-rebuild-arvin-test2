import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 py-4 bg-white/78 backdrop-blur-[18px] border-b border-[var(--color-line)]" id="top">
      <nav className="container-shell min-h-[58px] px-3 md:px-4 py-0 flex items-center justify-between gap-7 border border-[rgba(231,237,248,0.82)] rounded-[18px] bg-white/90 shadow-[0_16px_48px_rgba(8,26,68,0.06)]" aria-label="Primary navigation">
        <Link className="flex-shrink-0" to="/" aria-label="Streamline home">
          <img src="/images/streamline-logo.png" alt="Streamline" className="w-[120px] md:w-[142px] h-auto" />
        </Link>
        
        <button 
          className="xl:hidden border-0 bg-transparent text-2xl text-[var(--color-ink)] p-2" 
          aria-label="Open navigation" 
          type="button"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
        
        <div className={`flex-col xl:flex-row xl:flex items-center gap-4 absolute xl:static top-[80px] left-4 right-4 bg-white xl:bg-transparent p-4 xl:p-0 rounded-[18px] xl:rounded-none shadow-md xl:shadow-none z-50 ${isOpen ? 'flex' : 'hidden'}`}>
          <Link to="/streamline-stack.html" className="text-sm font-bold text-[#435274] hover:text-[var(--color-brand-blue)] transition-colors">Products</Link>
          <Link to="/interactive-channels.html" className="text-sm font-bold text-[#435274] hover:text-[var(--color-brand-blue)] transition-colors">Solutions</Link>
          <Link to="/why-streamline.html" className="text-sm font-bold text-[#435274] hover:text-[var(--color-brand-blue)] transition-colors">Why Streamline</Link>
          <Link to="/use-case.html" className="text-sm font-bold text-[#435274] hover:text-[var(--color-brand-blue)] transition-colors">Use Cases</Link>
          <Link to="/blogs.html" className="text-sm font-bold text-[#435274] hover:text-[var(--color-brand-blue)] transition-colors">Blog</Link>
          <Link to="/resources-main.html" className="text-sm font-bold text-[#435274] hover:text-[var(--color-brand-blue)] transition-colors">Resources</Link>
          <Link to="/about-us.html" className="text-sm font-bold text-[#435274] hover:text-[var(--color-brand-blue)] transition-colors">About</Link>
          <Link to="/contact-us.html" className="text-sm font-bold text-[#435274] hover:text-[var(--color-brand-blue)] transition-colors">Contact</Link>
          
          <div className="flex xl:hidden flex-col w-full gap-4 pt-4 border-t border-[var(--color-line)]">
            <Link className="text-sm font-bold text-[#435274] text-center" to="/login.html">Sign in</Link>
            <Link className="btn btn-primary btn-small w-full text-center" to="/signup.html">Get Started</Link>
          </div>
        </div>

        <div className="hidden xl:flex items-center gap-5">
          <Link className="text-sm font-bold text-[#435274] hover:text-[var(--color-brand-blue)] transition-colors" to="/login.html">Sign in</Link>
          <Link className="btn btn-primary btn-small whitespace-nowrap" to="/signup.html">Get Started</Link>
        </div>
      </nav>
    </header>
  );
}
