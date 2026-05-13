import { Link } from 'react-router-dom';

export default function CustomerAndIntegrations() {
  return (
    <>
      <section className="section-pad pb-0">
        <div className="container-fluid grid grid-cols-1 md:grid-cols-[1fr_0.7fr] items-center gap-[36px] md:gap-[46px] p-[28px] md:p-[48px] border border-[rgba(231,237,248,0.92)] rounded-[22px] md:rounded-[var(--radius)] bg-white/86 shadow-[var(--shadow-sm)]">
          <div>
            <p className="text-eyebrow">Our customer</p>
            <h2 className="text-h2 mb-[18px]">Loved by teams at 7‑Eleven</h2>
            <p className="text-subtitle text-[var(--color-ink-soft)] mb-6">“Since we make it a point to give our customers the most convenient experience, Streamline truly helped us achieve that goal.”</p>
            <Link className="font-black text-[var(--color-brand-blue)]" to="/use-case.html">Read the case study →</Link>
          </div>
          <div className="justify-self-center w-[170px] md:w-[220px] h-[170px] md:h-[220px] grid place-items-center rounded-[28px] bg-[linear-gradient(145deg,white,#f1f6ff)] shadow-[var(--shadow-sm)]">
            <img src="/images/711-logo.png" alt="7-Eleven logo" className="max-w-[150px]" />
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-fluid grid grid-cols-1 md:grid-cols-[0.9fr_1.1fr] items-center gap-[36px] md:gap-[46px] p-[28px] md:p-[48px] border border-[rgba(231,237,248,0.92)] rounded-[22px] md:rounded-[var(--radius)] bg-white/86 shadow-[var(--shadow-sm)]">
          <div>
            <p className="text-eyebrow">Integrates with your favorite tools</p>
            <h2 className="text-h2 mb-[18px]">Connect Acme with the tools you already use</h2>
            <p className="text-subtitle text-[var(--color-ink-soft)] mb-6">Make Streamline part of your operational stack and keep every system moving together.</p>
            <Link className="font-black text-[var(--color-brand-blue)]" to="/resources-main.html">Browse integrations →</Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-[18px]" aria-hidden="true">
            <span className="grid place-items-center min-h-[86px] rounded-[20px] bg-white border border-[var(--color-line)] text-[var(--color-brand-blue)] text-[30px] font-black shadow-[var(--shadow-sm)]">S</span>
            <span className="grid place-items-center min-h-[86px] rounded-[20px] bg-white border border-[var(--color-line)] text-[var(--color-brand-blue)] text-[30px] font-black shadow-[var(--shadow-sm)]">G</span>
            <span className="grid place-items-center min-h-[86px] rounded-[20px] bg-white border border-[var(--color-line)] text-[var(--color-brand-blue)] text-[30px] font-black shadow-[var(--shadow-sm)]">T</span>
            <span className="grid place-items-center min-h-[86px] rounded-[20px] bg-white border border-[var(--color-line)] text-[var(--color-brand-blue)] text-[30px] font-black shadow-[var(--shadow-sm)]">N</span>
            <span className="grid place-items-center min-h-[86px] rounded-[20px] bg-white border border-[var(--color-line)] text-[var(--color-brand-blue)] text-[30px] font-black shadow-[var(--shadow-sm)]">Z</span>
          </div>
        </div>
      </section>

      <section className="py-[30px] pb-[78px]">
        <div className="container-fluid relative overflow-hidden rounded-[22px] md:rounded-[28px] p-[28px] md:p-[42px_48px] text-white bg-[linear-gradient(135deg,#1337b8_0%,#1555e8_48%,#266bff_100%)] shadow-[0_28px_80px_rgba(26,77,218,0.25)] flex flex-col md:flex-row items-start md:items-center justify-between gap-[28px]">
          <div className="absolute w-[210px] h-[210px] left-[-80px] top-[-90px] rounded-full bg-white/10"></div>
          <div className="absolute w-[280px] h-[280px] right-[-100px] bottom-[-140px] rounded-full bg-white/10"></div>
          
          <div className="relative z-10">
            <h2 className="mb-[6px] text-[clamp(28px,3vw,38px)] leading-[1.08] tracking-[-0.045em] font-black">Ready to get started?</h2>
            <p className="mb-0 text-white/80 text-[19px]">Join thousands of teams already using Streamline to work smarter and achieve more.</p>
          </div>
          <div className="relative z-10 flex flex-wrap gap-[14px]">
            <Link className="btn btn-light" to="/signup.html">Get Started Free</Link>
            <Link className="btn btn-outline-light" to="/demo.html">Explore Streamline</Link>
          </div>
        </div>
      </section>
    </>
  );
}
