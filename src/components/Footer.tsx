import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="pt-[66px] pb-[26px] bg-white border-t border-[var(--color-line)]" id="company">
      <div className="container-fluid grid grid-cols-1 md:grid-cols-[1.2fr_repeat(4,1fr)] gap-[44px]">
        <div className="flex flex-col">
          <img src="/images/streamline-logo.png" alt="Streamline" className="w-[138px] mb-[18px]" />
          <p className="text-[var(--color-ink-soft)] mb-0">The intelligent workspace for modern teams.</p>
          <div className="flex gap-[12px] mt-[18px]">
            <a href="#" className="grid place-items-center w-[34px] h-[34px] rounded-full bg-[#eef4ff] text-[var(--color-brand-blue)] font-bold">𝕏</a>
            <a href="#" className="grid place-items-center w-[34px] h-[34px] rounded-full bg-[#eef4ff] text-[var(--color-brand-blue)] font-bold">in</a>
            <a href="#" className="grid place-items-center w-[34px] h-[34px] rounded-full bg-[#eef4ff] text-[var(--color-brand-blue)] font-bold">f</a>
          </div>
        </div>
        
        <div className="flex flex-col">
          <h4 className="text-[14px] font-bold mb-[14px] m-0">Product</h4>
          <Link to="/streamline-stack.html" className="text-[var(--color-muted)] font-bold text-[14px] my-[9px] hover:text-[var(--color-brand-blue)] transition-colors">Features</Link>
          <Link to="/interactive-channels.html" className="text-[var(--color-muted)] font-bold text-[14px] my-[9px] hover:text-[var(--color-brand-blue)] transition-colors">Channels</Link>
          <Link to="/streamline-stack.html" className="text-[var(--color-muted)] font-bold text-[14px] my-[9px] hover:text-[var(--color-brand-blue)] transition-colors">Integrations</Link>
          <Link to="/billing.html" className="text-[var(--color-muted)] font-bold text-[14px] my-[9px] hover:text-[var(--color-brand-blue)] transition-colors">Pricing</Link>
        </div>
        
        <div className="flex flex-col">
          <h4 className="text-[14px] font-bold mb-[14px] m-0">Resources</h4>
          <Link to="/blogs.html" className="text-[var(--color-muted)] font-bold text-[14px] my-[9px] hover:text-[var(--color-brand-blue)] transition-colors">Blog</Link>
          <Link to="/resources-main.html" className="text-[var(--color-muted)] font-bold text-[14px] my-[9px] hover:text-[var(--color-brand-blue)] transition-colors">Guides</Link>
          <Link to="/use-case.html" className="text-[var(--color-muted)] font-bold text-[14px] my-[9px] hover:text-[var(--color-brand-blue)] transition-colors">Case studies</Link>
          <Link to="/support.html" className="text-[var(--color-muted)] font-bold text-[14px] my-[9px] hover:text-[var(--color-brand-blue)] transition-colors">Support</Link>
        </div>
        
        <div className="flex flex-col">
          <h4 className="text-[14px] font-bold mb-[14px] m-0">Company</h4>
          <Link to="/about-us.html" className="text-[var(--color-muted)] font-bold text-[14px] my-[9px] hover:text-[var(--color-brand-blue)] transition-colors">About us</Link>
          <Link to="/contact-us.html" className="text-[var(--color-muted)] font-bold text-[14px] my-[9px] hover:text-[var(--color-brand-blue)] transition-colors">Contact</Link>
          <Link to="/privacy-policy.html" className="text-[var(--color-muted)] font-bold text-[14px] my-[9px] hover:text-[var(--color-brand-blue)] transition-colors">Privacy Policy</Link>
          <Link to="/terms-of-service.html" className="text-[var(--color-muted)] font-bold text-[14px] my-[9px] hover:text-[var(--color-brand-blue)] transition-colors">Terms of Service</Link>
        </div>
        
        <div className="flex flex-col">
          <h4 className="text-[14px] font-bold mb-[14px] m-0">Newsletter</h4>
          <p className="text-[var(--color-ink-soft)] text-sm mb-4">Get ideas for automation, customer engagement, and better operations.</p>
          <form className="flex border border-[var(--color-line)] rounded-[14px] overflow-hidden bg-[#f8fbff]">
            <label className="sr-only" htmlFor="email">Email</label>
            <input id="email" type="email" placeholder="Enter your email" className="w-full border-0 outline-none bg-transparent px-[14px] py-[13px] text-[var(--color-ink)]" />
            <button type="submit" className="w-[48px] border-0 bg-[var(--color-green)] text-white font-black cursor-pointer">→</button>
          </form>
        </div>
      </div>
      
      <div className="container-fluid flex flex-col md:flex-row justify-between gap-[18px] mt-[54px] pt-[26px] border-t border-[var(--color-line)] text-[var(--color-muted)] text-[13px]">
        <span>© 2026 Streamline. All rights reserved.</span>
        <span>Privacy · Terms · Security · Status</span>
      </div>
    </footer>
  );
}
