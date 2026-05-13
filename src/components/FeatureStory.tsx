export default function FeatureStory() {
  return (
    <section className="py-[42px] pb-[24px]" id="products">
      {/* Story 1 */}
      <div className="container-fluid grid grid-cols-1 lg:grid-cols-2 items-center gap-[36px] lg:gap-[72px] min-h-[440px] lg:min-h-[540px]">
        <div className="relative min-h-[350px] lg:min-h-[520px] scale-[0.78] lg:scale-100 origin-top mb-[-60px] lg:mb-0" aria-hidden="true">
          <div className="absolute left-[20px] top-[34px] w-[460px] h-[380px] rounded-[42%_58%_52%_48%/45%_38%_62%_55%] bg-[linear-gradient(145deg,rgba(232,239,255,0.92),rgba(246,249,255,0.92))] drop-shadow-[0_30px_80px_rgba(59,91,168,0.12)]"></div>
          <div className="absolute inset-0">
            {/* Screen Stack */}
            <div className="absolute top-[112px] left-[118px] w-[260px] h-[170px]">
              <span className="absolute rounded-[20px] bg-white/92 border border-[var(--color-line)] shadow-[var(--shadow-sm)] w-[180px] h-[110px] left-[35px] top-0"></span>
              <span className="absolute rounded-[20px] bg-white/92 border border-[var(--color-line)] shadow-[var(--shadow-sm)] w-[110px] h-[74px] left-0 top-[74px]"></span>
              <span className="absolute rounded-[20px] bg-white/92 border border-[var(--color-line)] shadow-[var(--shadow-sm)] w-[120px] h-[86px] right-0 top-[62px]"></span>
            </div>
            {/* Person */}
            <div className="absolute w-[95px] h-[150px] left-[180px] bottom-[150px] scale-95">
              <div className="absolute left-[40px] top-0 w-[44px] h-[44px] bg-[#ffd6bf] rounded-full shadow-[-9px_-7px_0_#16336f]"></div>
              <div className="absolute left-[28px] top-[44px] w-[68px] h-[88px] bg-[linear-gradient(145deg,#2563eb,#19a6df)] rounded-[32px_32px_16px_16px]"></div>
              <span className="absolute left-[20px] bottom-0 w-[80px] h-[36px] bg-[#17346f] rounded-[18px_18px_6px_6px] -skew-x-[16deg]"></span>
            </div>
            {/* Desk */}
            <div className="absolute h-[16px] w-[370px] bg-[#f6be56] rounded-[8px] left-[88px] bottom-[132px] shadow-[0_90px_0_-82px_#eda23f]">
              <div className="absolute left-[36px] top-[12px] w-[12px] h-[110px] bg-[#f6be56] rounded-[10px]"></div>
              <div className="absolute right-[36px] top-[12px] w-[12px] h-[110px] bg-[#f6be56] rounded-[10px]"></div>
            </div>
          </div>
        </div>
        <div className="max-w-[480px]">
          <div className="grid place-items-center w-[62px] h-[62px] mb-[22px] rounded-[18px] text-[var(--color-brand-blue)] bg-[#eef4ff] text-2xl font-black shadow-[var(--shadow-sm)]">✦</div>
          <p className="text-eyebrow">Automate workflows</p>
          <h2 className="text-h2 mb-[18px]">Save time on repetitive tasks</h2>
          <p className="text-subtitle text-[var(--color-ink-soft)] mb-6">Build intelligent automations that connect messages, reminders, reviews, payments, data collection, and follow-up into one simple operational flow.</p>
          <a className="font-black text-[var(--color-brand-blue)]" href="/why-streamline.html">Learn more →</a>
        </div>
      </div>

      {/* Story 2 (Reverse) */}
      <div className="container-fluid grid grid-cols-1 lg:grid-cols-2 items-center gap-[36px] lg:gap-[72px] min-h-[440px] lg:min-h-[540px] mt-0 lg:mt-[-34px]" id="solutions">
        <div className="max-w-[480px] lg:order-1 order-2">
          <div className="grid place-items-center w-[62px] h-[62px] mb-[22px] rounded-[18px] text-[#0aa978] bg-[#e9fbf4] text-2xl font-black shadow-[var(--shadow-sm)]">⌁</div>
          <p className="text-eyebrow">Collaborate in real time</p>
          <h2 className="text-h2 mb-[18px]">Work together, seamlessly</h2>
          <p className="text-subtitle text-[var(--color-ink-soft)] mb-6">Give teams the visibility they need to manage communication, service requests, customer activity, and business operations without switching between disconnected tools.</p>
          <a className="font-black text-[var(--color-brand-blue)]" href="/interactive-channels.html">Explore channels →</a>
        </div>
        <div className="relative min-h-[350px] lg:min-h-[520px] scale-[0.78] lg:scale-100 origin-top mb-[-60px] lg:mb-0 lg:order-2 order-1" aria-hidden="true">
          <div className="absolute right-[20px] top-[34px] w-[460px] h-[380px] rounded-[42%_58%_52%_48%/45%_38%_62%_55%] bg-[linear-gradient(145deg,rgba(232,239,255,0.92),rgba(246,249,255,0.92))] drop-shadow-[0_30px_80px_rgba(59,91,168,0.12)]"></div>
          <div className="absolute inset-0">
            {/* Dashboard Card */}
            <div className="absolute right-[76px] top-[105px] w-[300px] h-[160px] rounded-[20px] bg-[linear-gradient(180deg,#fff,#f3f7ff)] border border-[var(--color-line)] shadow-[var(--shadow-sm)] after:absolute after:left-[32px] after:right-[32px] after:bottom-[35px] after:h-[52px] after:bg-[linear-gradient(90deg,var(--color-brand-blue)_0_38%,#c9d8f3_38%_52%,var(--color-cyan)_52%_82%,#c9d8f3_82%)] after:rounded-[10px] after:opacity-[0.72]"></div>
            {/* Two People */}
            <div className="absolute bottom-[154px] left-[190px] w-[200px] h-[154px]">
              <span className="absolute bottom-0 w-[82px] h-[136px] rounded-[38px_38px_14px_14px] bg-[var(--color-brand-blue)] before:absolute before:-top-[34px] before:left-[22px] before:w-[40px] before:h-[40px] before:rounded-full before:bg-[#ffd6bf] before:shadow-[-8px_-6px_0_#16336f]"></span>
              <span className="absolute bottom-0 w-[82px] h-[136px] rounded-[38px_38px_14px_14px] bg-[#11b98f] left-[92px] before:absolute before:-top-[34px] before:left-[22px] before:w-[40px] before:h-[40px] before:rounded-full before:bg-[#ffd6bf] before:shadow-[-8px_-6px_0_#16336f]"></span>
            </div>
            {/* Desk */}
            <div className="absolute h-[16px] w-[390px] left-[120px] bg-[#f6be56] rounded-[8px] bottom-[132px] shadow-[0_90px_0_-82px_#eda23f]">
              <div className="absolute left-[36px] top-[12px] w-[12px] h-[110px] bg-[#f6be56] rounded-[10px]"></div>
              <div className="absolute right-[36px] top-[12px] w-[12px] h-[110px] bg-[#f6be56] rounded-[10px]"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Story 3 */}
      <div className="container-fluid grid grid-cols-1 lg:grid-cols-2 items-center gap-[36px] lg:gap-[72px] min-h-[440px] lg:min-h-[540px]">
        <div className="relative min-h-[350px] lg:min-h-[520px] scale-[0.78] lg:scale-100 origin-top mb-[-60px] lg:mb-0" aria-hidden="true">
          <div className="absolute left-[20px] top-[34px] w-[460px] h-[380px] rounded-[42%_58%_52%_48%/45%_38%_62%_55%] bg-[linear-gradient(145deg,rgba(232,239,255,0.92),rgba(246,249,255,0.92))] drop-shadow-[0_30px_80px_rgba(59,91,168,0.12)]"></div>
          <div className="absolute inset-0">
            {/* Analytics Card */}
            <div className="absolute right-[85px] top-[110px] w-[260px] h-[150px] rounded-[20px] bg-white/92 border border-[var(--color-line)] shadow-[var(--shadow-sm)]">
              <b className="absolute bottom-[28px] w-[24px] rounded-t-[10px] bg-[var(--color-brand-blue)] h-[44px] left-[48px]"></b>
              <b className="absolute bottom-[28px] w-[24px] rounded-t-[10px] bg-[var(--color-cyan)] h-[72px] left-[96px]"></b>
              <b className="absolute bottom-[28px] w-[24px] rounded-t-[10px] bg-[var(--color-brand-blue)] h-[104px] left-[144px]"></b>
            </div>
            {/* Person Side */}
            <div className="absolute w-[95px] h-[150px] left-[205px] bottom-[150px] scale-98">
              <div className="absolute left-[40px] top-0 w-[44px] h-[44px] bg-[#ffd6bf] rounded-full shadow-[-9px_-7px_0_#16336f]"></div>
              <div className="absolute left-[28px] top-[44px] w-[68px] h-[88px] bg-[linear-gradient(145deg,#2563eb,#19a6df)] rounded-[32px_32px_16px_16px]"></div>
              <span className="absolute left-[20px] bottom-0 w-[80px] h-[36px] bg-[#17346f] rounded-[18px_18px_6px_6px] -skew-x-[16deg]"></span>
            </div>
            {/* Desk */}
            <div className="absolute h-[16px] w-[370px] bg-[#f6be56] rounded-[8px] left-[88px] bottom-[132px] shadow-[0_90px_0_-82px_#eda23f]">
              <div className="absolute left-[36px] top-[12px] w-[12px] h-[110px] bg-[#f6be56] rounded-[10px]"></div>
              <div className="absolute right-[36px] top-[12px] w-[12px] h-[110px] bg-[#f6be56] rounded-[10px]"></div>
            </div>
          </div>
        </div>
        <div className="max-w-[480px]">
          <div className="grid place-items-center w-[62px] h-[62px] mb-[22px] rounded-[18px] text-[#7657ff] bg-[#f2eeff] text-2xl font-black shadow-[var(--shadow-sm)]">⌘</div>
          <p className="text-eyebrow">Make smarter decisions</p>
          <h2 className="text-h2 mb-[18px]">Turn data into clarity</h2>
          <p className="text-subtitle text-[var(--color-ink-soft)] mb-6">Use connected reporting to understand customer behavior, operational bottlenecks, revenue opportunities, and the workflows that need attention now.</p>
          <a className="font-black text-[var(--color-brand-blue)]" href="/streamline-stack.html">View the stack →</a>
        </div>
      </div>
    </section>
  );
}
