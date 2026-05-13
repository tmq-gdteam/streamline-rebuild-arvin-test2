export default function StatsBand() {
  return (
    <section className="section-pad" id="stack">
      <div className="container-fluid">
        <div className="relative overflow-hidden rounded-[28px] p-7 md:p-[62px] text-white bg-[linear-gradient(135deg,#1337b8_0%,#1555e8_48%,#266bff_100%)] shadow-[0_28px_80px_rgba(26,77,218,0.25)]">
          <div className="absolute w-[330px] h-[330px] left-[-120px] top-[-130px] rounded-full bg-white/10"></div>
          <div className="absolute w-[380px] h-[380px] right-[-120px] bottom-[-170px] rounded-full bg-white/10"></div>
          
          <div className="relative z-10 max-w-[720px] text-center mx-auto mb-[42px]">
            <p className="text-eyebrow text-white/80! border border-white/20 px-3 py-1.5 rounded-full inline-flex">The Streamline difference</p>
            <h2 className="text-h2 mb-[18px] text-white">Trusted by professionals and teams worldwide</h2>
            <p className="text-subtitle text-white/80">From local operators to enterprise teams, Streamline helps businesses coordinate work, automate customer journeys, and communicate with confidence.</p>
          </div>
          
          <div className="relative z-10 grid grid-cols-2 lg:grid-cols-4 gap-5">
            <div className="p-[22px] text-center rounded-[20px] bg-white/10 border border-white/15">
              <strong className="block text-[34px] leading-none mb-2 font-black">10k+</strong>
              <span className="text-white/80 font-bold text-[13px]">Active users</span>
            </div>
            <div className="p-[22px] text-center rounded-[20px] bg-white/10 border border-white/15">
              <strong className="block text-[34px] leading-none mb-2 font-black">50k+</strong>
              <span className="text-white/80 font-bold text-[13px]">Messages created</span>
            </div>
            <div className="p-[22px] text-center rounded-[20px] bg-white/10 border border-white/15">
              <strong className="block text-[34px] leading-none mb-2 font-black">99.9%</strong>
              <span className="text-white/80 font-bold text-[13px]">Platform uptime</span>
            </div>
            <div className="p-[22px] text-center rounded-[20px] bg-white/10 border border-white/15">
              <strong className="block text-[34px] leading-none mb-2 font-black">24/7</strong>
              <span className="text-white/80 font-bold text-[13px]">Automation support</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
