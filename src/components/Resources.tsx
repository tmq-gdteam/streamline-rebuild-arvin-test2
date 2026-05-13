import { Link } from 'react-router-dom';

export default function Resources() {
  return (
    <section className="section-pad" id="resources">
      <div className="container-fluid p-[28px] md:p-[56px] rounded-[22px] md:rounded-[32px] bg-[linear-gradient(180deg,rgba(246,249,255,0.9),rgba(255,255,255,0.9))] border border-[var(--color-line)] shadow-[var(--shadow-sm)]">
        <div className="text-center container-narrow mb-11">
          <p className="text-eyebrow">Learn and grow</p>
          <h2 className="text-h2 mb-[18px]">Resources to help you do more</h2>
          <p className="text-subtitle text-[var(--color-ink-soft)]">Guides, ideas, and use cases for better communication, connected systems, and customer engagement.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[26px]">
          <article className="overflow-hidden border border-[rgba(231,237,248,0.92)] rounded-[var(--radius)] bg-white/86 shadow-[var(--shadow-sm)]">
            <img src="/images/blog-hidden-cost.webp" alt="Illustration about disconnected business tools" className="w-full h-[178px] object-cover" />
            <div className="p-[24px]">
              <span className="block mb-2.5 text-[var(--color-brand-blue)] uppercase text-[11px] font-black tracking-[0.11em]">Guide</span>
              <h3 className="text-[21px] leading-[1.2] tracking-[-0.02em] font-bold mb-[10px]">The Hidden Cost of Disconnected Business Tools</h3>
              <p className="text-[var(--color-muted)] mb-0">See how fragmented systems slow growth and what to do instead.</p>
              <Link to="/blogs.html" className="inline-flex mt-[18px] text-[var(--color-brand-blue)] font-black">Read guide →</Link>
            </div>
          </article>
          
          <article className="overflow-hidden border border-[rgba(231,237,248,0.92)] rounded-[var(--radius)] bg-white/86 shadow-[var(--shadow-sm)]">
            <img src="/images/blog-omnichannel.webp" alt="Illustration about omnichannel communication" className="w-full h-[178px] object-cover" />
            <div className="p-[24px]">
              <span className="block mb-2.5 text-[var(--color-brand-blue)] uppercase text-[11px] font-black tracking-[0.11em]">Strategy</span>
              <h3 className="text-[21px] leading-[1.2] tracking-[-0.02em] font-bold mb-[10px]">Why Omnichannel Communication Matters</h3>
              <p className="text-[var(--color-muted)] mb-0">Bring customer conversations together across every major channel.</p>
              <Link to="/blogs.html" className="inline-flex mt-[18px] text-[var(--color-brand-blue)] font-black">Read article →</Link>
            </div>
          </article>
          
          <article className="overflow-hidden border border-[rgba(231,237,248,0.92)] rounded-[var(--radius)] bg-white/86 shadow-[var(--shadow-sm)]">
            <img src="/images/blog-financial.webp" alt="Illustration about financial visibility" className="w-full h-[178px] object-cover" />
            <div className="p-[24px]">
              <span className="block mb-2.5 text-[var(--color-brand-blue)] uppercase text-[11px] font-black tracking-[0.11em]">Insights</span>
              <h3 className="text-[21px] leading-[1.2] tracking-[-0.02em] font-bold mb-[10px]">Financial Visibility Turns Data Into Advantage</h3>
              <p className="text-[var(--color-muted)] mb-0">Use better data flow to make confident operational decisions.</p>
              <Link to="/blogs.html" className="inline-flex mt-[18px] text-[var(--color-brand-blue)] font-black">Read insights →</Link>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
