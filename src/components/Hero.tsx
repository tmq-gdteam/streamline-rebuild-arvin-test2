export default function Hero() {
  return (
    <section className="pt-[96px] pb-[76px] overflow-hidden md:pt-[62px]">
      <div className="container-fluid grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_minmax(420px,1.05fr)] items-center gap-[76px] lg:gap-[36px]">
        <div className="max-w-[650px]">
          <div className="text-eyebrow bg-[#eef4ff] rounded-full px-3 py-1.5">
            <span className="w-2 h-2 rounded-full bg-[var(--color-green)] block"></span>
            AI-powered business workspace
          </div>
          <h1 className="text-display mb-6">Work Smarter. Achieve More.</h1>
          <p className="text-subtitle text-[var(--color-ink-soft)] max-w-[600px] mb-8">
            Attract, build, and connect with Streamline to simplify communication, automate workflows, and keep every customer relationship moving forward.
          </p>
          
          <div className="flex flex-wrap gap-4 mb-6">
            <a href="/signup.html" className="btn btn-primary w-full sm:w-auto">Get Started Free</a>
            <a href="/demo.html" className="btn btn-secondary w-full sm:w-auto">
              <span className="text-[var(--color-brand-blue)]">▶</span> Book a Demo
            </a>
          </div>
          
          <div className="flex flex-col sm:flex-row flex-wrap gap-2.5 sm:gap-[22px] text-[var(--color-muted)] font-bold text-sm" aria-label="Trial benefits">
            <span>✓ No credit card required</span>
            <span>✓ 14-day free trial</span>
            <span>✓ Cancel anytime</span>
          </div>
        </div>
        
        <div className="relative min-h-[350px] lg:min-h-[520px] scale-[0.78] lg:scale-100 origin-top mb-[-60px] lg:mb-0" aria-hidden="true">
          <div className="absolute right-0 top-[20px] w-[520px] h-[430px] rounded-[42%_58%_52%_48%/45%_38%_62%_55%] bg-[linear-gradient(145deg,rgba(232,239,255,0.92),rgba(246,249,255,0.92))] drop-shadow-[0_30px_80px_rgba(59,91,168,0.12)]"></div>
          <div className="absolute inset-0">
            {/* Monitor */}
            <div className="absolute right-[78px] top-[112px] w-[240px] h-[165px] border-[12px] border-white rounded-[24px] bg-[linear-gradient(160deg,#f7fbff,#dff1ff)] shadow-[0_24px_70px_rgba(18,47,105,0.14)]">
              <div className="h-[20px] rounded-t-[14px] bg-[rgba(37,99,235,0.12)]"></div>
              <div className="absolute left-[28px] bottom-[34px] w-[140px] h-[70px] border-l-[3px] border-b-[3px] border-[#c9d8f3]">
                <div className="absolute left-[12px] top-[28px] w-[110px] h-[48px] border-t-[5px] border-r-[5px] border-[var(--color-brand-blue)] rounded-[6px] -skew-y-[24deg]"></div>
              </div>
              <div className="absolute right-[24px] top-[58px] grid gap-2">
                <i className="block w-[42px] h-[9px] rounded-full bg-[#b7c8ee]"></i>
                <i className="block w-[42px] h-[9px] rounded-full bg-[#b7c8ee]"></i>
                <i className="block w-[42px] h-[9px] rounded-full bg-[#b7c8ee]"></i>
              </div>
              <div className="absolute left-[87px] bottom-[calc(-58px-12px)] w-[48px] h-[48px] bg-[#dbe6fb] rounded-b-[12px]"></div>
            </div>
            
            {/* Person Back */}
            <div className="absolute w-[95px] h-[150px] left-[215px] bottom-[148px]">
              <div className="absolute left-[40px] top-0 w-[44px] h-[44px] bg-[#ffd6bf] rounded-full shadow-[-9px_-7px_0_#16336f]"></div>
              <div className="absolute left-[28px] top-[44px] w-[68px] h-[88px] bg-[linear-gradient(145deg,#2563eb,#19a6df)] rounded-[32px_32px_16px_16px]"></div>
              <span className="absolute left-[20px] bottom-0 w-[80px] h-[36px] bg-[#17346f] rounded-[18px_18px_6px_6px] -skew-x-[16deg]"></span>
            </div>
            
            {/* Person Front */}
            <div className="absolute w-[95px] h-[150px] left-[146px] bottom-[148px]">
              <div className="absolute left-[40px] top-0 w-[44px] h-[44px] bg-[#ffd6bf] rounded-full shadow-[-9px_-7px_0_#16336f]"></div>
              <div className="absolute left-[28px] top-[44px] w-[68px] h-[88px] bg-[linear-gradient(145deg,#2563eb,#19a6df)] rounded-[32px_32px_16px_16px]"></div>
              <span className="absolute left-[20px] bottom-0 w-[80px] h-[36px] bg-[#17346f] rounded-[18px_18px_6px_6px] -skew-x-[16deg]"></span>
            </div>
            
            {/* Desk */}
            <div className="absolute h-[16px] w-[370px] bg-[#f6be56] rounded-[8px] left-[88px] bottom-[132px] shadow-[0_90px_0_-82px_#eda23f]">
              <div className="absolute left-[36px] top-[12px] w-[12px] h-[110px] bg-[#f6be56] rounded-[10px]"></div>
              <div className="absolute right-[36px] top-[12px] w-[12px] h-[110px] bg-[#f6be56] rounded-[10px]"></div>
            </div>
            
            {/* Plant */}
            <div className="absolute right-[28px] bottom-[144px] w-[58px] h-[95px]">
              <div className="absolute bottom-[28px] left-[30px] w-[7px] h-[68px] bg-[#20b486] rounded-full shadow-[-20px_18px_0_-1px_#20b486,21px_10px_0_-1px_#20b486] rotate-[8deg]"></div>
              <div className="absolute bottom-0 left-[15px] w-[35px] h-[30px] bg-[#e1efff] rounded-[8px]"></div>
            </div>
            
            {/* Floating Cards */}
            <div className="absolute right-[310px] top-[70px] grid place-items-center w-[62px] h-[62px] rounded-[18px] bg-white/92 border border-[rgba(231,237,248,0.92)] shadow-[0_12px_30px_rgba(18,47,105,0.08)] text-[var(--color-brand-blue)] font-black">99%</div>
            <div className="absolute right-[74px] top-[60px] grid place-items-center w-[62px] h-[62px] rounded-[18px] bg-white/92 border border-[rgba(231,237,248,0.92)] shadow-[0_12px_30px_rgba(18,47,105,0.08)] text-[#10b981] font-black">✓</div>
            <div className="absolute right-[12px] top-[182px] grid place-items-center w-[62px] h-[62px] rounded-[18px] bg-white/92 border border-[rgba(231,237,248,0.92)] shadow-[0_12px_30px_rgba(18,47,105,0.08)] text-[var(--color-brand-blue)] font-black">↗</div>
          </div>
        </div>
      </div>
    </section>
  );
}
