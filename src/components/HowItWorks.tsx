export default function HowItWorks() {
  return (
    <section className="section-pad">
      <div className="container-narrow text-center mb-12">
        <p className="text-eyebrow">How it works</p>
        <h2 className="text-h2 mb-4">Get started in 3 simple steps</h2>
        <p className="text-subtitle text-[var(--color-ink-soft)]">Connect your tools, design the workflow, and let Streamline handle the repetitive work in the background.</p>
      </div>
      <div className="container-fluid grid grid-cols-1 md:grid-cols-3 gap-[26px]">
        <article className="p-[34px] text-center border border-[rgba(231,237,248,0.92)] rounded-[var(--radius)] bg-white/86 shadow-[var(--shadow-sm)]">
          <div className="grid place-items-center w-[68px] h-[68px] mx-auto mb-[24px] rounded-full bg-[#eef4ff] text-[var(--color-brand-blue)] font-black shadow-[inset_0_0_0_10px_#f7faff]">01</div>
          <h3 className="text-h3 mb-2.5">Choose a workflow</h3>
          <p className="text-[var(--color-muted)] mb-0">Start with communication, review, appointment, data, or payment flows designed for modern operators.</p>
        </article>
        
        <article className="p-[34px] text-center border border-[rgba(231,237,248,0.92)] rounded-[var(--radius)] bg-white/86 shadow-[var(--shadow-sm)]">
          <div className="grid place-items-center w-[68px] h-[68px] mx-auto mb-[24px] rounded-full bg-[#eef4ff] text-[var(--color-brand-blue)] font-black shadow-[inset_0_0_0_10px_#f7faff]">02</div>
          <h3 className="text-h3 mb-2.5">Customize with AI</h3>
          <p className="text-[var(--color-muted)] mb-0">Adapt every sequence, message, trigger, and action to match your team, customers, and business rules.</p>
        </article>
        
        <article className="p-[34px] text-center border border-[rgba(231,237,248,0.92)] rounded-[var(--radius)] bg-white/86 shadow-[var(--shadow-sm)]">
          <div className="grid place-items-center w-[68px] h-[68px] mx-auto mb-[24px] rounded-full bg-[#eef4ff] text-[var(--color-brand-blue)] font-black shadow-[inset_0_0_0_10px_#f7faff]">03</div>
          <h3 className="text-h3 mb-2.5">Launch and optimize</h3>
          <p className="text-[var(--color-muted)] mb-0">Monitor performance, improve conversion, and keep teams aligned with unified insights.</p>
        </article>
      </div>
    </section>
  );
}
