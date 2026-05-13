import SEO from '../components/SEO';
import { Link } from 'react-router-dom';
import CustomerAndIntegrations from '../components/CustomerAndIntegrations';

export default function StreamlineStack() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Streamline Stack",
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "All",
    "description": "Communicate, Collaborate, Engage, and Automate Workflows Conveniently With Streamline"
  };

  return (
    <>
      <SEO 
        title="Streamline Stack | Products"
        description="Explore the full spectrum of Streamline digital communication solutions organized in stacks according to value."
        schema={schema}
      />
      
      {/* 1. Attract Attention (Hero Section) */}
      <section className="pt-[96px] pb-[76px] overflow-hidden md:pt-[62px]">
        <div className="container-fluid grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_minmax(420px,1.05fr)] items-center gap-[76px] lg:gap-[36px]">
          <div className="max-w-[650px]">
            <div className="text-eyebrow bg-[#eef4ff] rounded-full px-3 py-1.5">
              <span className="w-2 h-2 rounded-full bg-[var(--color-green)] block"></span>
              Products
            </div>
            <h1 className="text-display mb-6">Organize, Automate, Take Control</h1>
            <p className="text-subtitle text-[var(--color-ink-soft)] max-w-[600px] mb-8">
              Redefine Communication and Interactions. Go beyond basic communication by getting your advantage via a comprehensive, high-end, and diverse spectrum of digital solutions.
            </p>
            <div className="flex flex-wrap gap-4 mb-6">
              <Link to="/signup.html" className="btn btn-primary w-full sm:w-auto">Start Free Trial</Link>
              <Link to="/demo.html" className="btn btn-secondary w-full sm:w-auto">
                <span className="text-[var(--color-brand-blue)]">▶</span> See it in action
              </Link>
            </div>
          </div>
          
          <div className="relative min-h-[350px] lg:min-h-[520px] scale-[0.78] lg:scale-100 origin-top mb-[-60px] lg:mb-0" aria-hidden="true">
            <div className="absolute right-0 top-[20px] w-[520px] h-[430px] rounded-[42%_58%_52%_48%/45%_38%_62%_55%] bg-[linear-gradient(145deg,rgba(232,239,255,0.92),rgba(246,249,255,0.92))] drop-shadow-[0_30px_80px_rgba(59,91,168,0.12)]"></div>
            {/* Visual placeholder representing the stack */}
            <div className="absolute inset-0 grid place-items-center">
               <div className="w-[300px] h-[300px] border-[12px] border-white rounded-[24px] bg-[linear-gradient(160deg,#f7fbff,#dff1ff)] shadow-[0_24px_70px_rgba(18,47,105,0.14)] relative">
                  <div className="absolute -top-[40px] -left-[40px] w-[180px] h-[120px] bg-white rounded-xl shadow-lg border border-[var(--color-line)]"></div>
                  <div className="absolute top-[40px] -right-[60px] w-[220px] h-[80px] bg-white rounded-xl shadow-lg border border-[var(--color-line)]"></div>
                  <div className="absolute -bottom-[20px] -left-[20px] w-[240px] h-[100px] bg-white rounded-xl shadow-lg border border-[var(--color-line)]"></div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Build Interest (Features) */}
      <section className="section-pad bg-[var(--color-surface-blue)]">
        <div className="container-narrow text-center mb-16">
          <p className="text-eyebrow">The Foundation</p>
          <h2 className="text-h2 mb-4">THE STREAMLINE STACK</h2>
          <p className="text-subtitle text-[var(--color-ink-soft)]">Communicate, Collaborate, Engage, and Automate Workflows Conveniently With Streamline</p>
        </div>

        <div className="container-fluid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[26px]">
          <div className="p-[34px] border border-[rgba(231,237,248,0.92)] rounded-[var(--radius)] bg-white shadow-[var(--shadow-sm)] hover:-translate-y-1 transition-transform">
            <h3 className="text-h3 mb-2.5 text-[var(--color-brand-blue)]">Cognitive O/S</h3>
            <p className="text-[var(--color-ink-soft)] mb-0">The foundation where everything is built on. Similar to the first step on a staircase, holding the base for automation.</p>
          </div>
          <div className="p-[34px] border border-[rgba(231,237,248,0.92)] rounded-[var(--radius)] bg-white shadow-[var(--shadow-sm)] hover:-translate-y-1 transition-transform">
            <h3 className="text-h3 mb-2.5 text-[var(--color-cyan)]">Cognitive Apps</h3>
            <p className="text-[var(--color-ink-soft)] mb-0">Products or smart apps built under each channel using the cognitive O/S to drive loyalty and engagement.</p>
          </div>
          <div className="p-[34px] border border-[rgba(231,237,248,0.92)] rounded-[var(--radius)] bg-white shadow-[var(--shadow-sm)] hover:-translate-y-1 transition-transform">
            <h3 className="text-h3 mb-2.5 text-[var(--color-green)]">Interactivity Channels</h3>
            <p className="text-[var(--color-ink-soft)] mb-0">Messaging, voice, video, social and sharing - including all their subchannels for communication.</p>
          </div>
          <div className="p-[34px] border border-[rgba(231,237,248,0.92)] rounded-[var(--radius)] bg-white shadow-[var(--shadow-sm)] hover:-translate-y-1 transition-transform">
            <h3 className="text-h3 mb-2.5 text-[var(--color-purple)]">Developer Access</h3>
            <p className="text-[var(--color-ink-soft)] mb-0">Developers connect to Cognitive O/S & all our digital channels to build their own custom applications.</p>
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-fluid grid grid-cols-1 lg:grid-cols-2 items-center gap-[72px]">
          <div className="relative min-h-[400px]" aria-hidden="true">
            <div className="absolute left-[20px] top-[34px] w-[460px] h-[380px] rounded-[42%_58%_52%_48%/45%_38%_62%_55%] bg-[linear-gradient(145deg,rgba(232,239,255,0.92),rgba(246,249,255,0.92))] drop-shadow-[0_30px_80px_rgba(59,91,168,0.12)]"></div>
            <div className="absolute inset-0 grid place-items-center">
              <div className="w-[300px] h-[200px] bg-white rounded-2xl shadow-[var(--shadow-sm)] border border-[var(--color-line)] p-6">
                <div className="w-12 h-12 bg-[#eef4ff] rounded-lg mb-4 text-[var(--color-brand-blue)] grid place-items-center font-bold text-xl">OS</div>
                <div className="h-2 bg-gray-100 rounded mb-2 w-3/4"></div>
                <div className="h-2 bg-gray-100 rounded w-1/2"></div>
              </div>
            </div>
          </div>
          <div className="max-w-[480px]">
            <p className="text-eyebrow">Cognitive Interaction Operating System</p>
            <h2 className="text-h2 mb-[18px]">The brain behind the automation</h2>
            <p className="text-subtitle text-[var(--color-ink-soft)] mb-6">
              Our cognitive interaction operating system is the engine behind building, nurturing, and engaging business relationships in an organized and automated way. Features include Routing, Presence, Contextual Recognition, and Hybrid Smart Response.
            </p>
            <ul className="space-y-2 text-[var(--color-ink-soft)] font-medium">
              <li>✓ Routing & Presence</li>
              <li>✓ Consumer Facing Perspectives & Business Facing Performance Tracking</li>
              <li>✓ Contextual Recognition</li>
              <li>✓ Hybrid Smart Response</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section-pad bg-[#fbfdff]">
        <div className="container-fluid grid grid-cols-1 lg:grid-cols-2 items-center gap-[72px]">
          <div className="max-w-[480px] order-2 lg:order-1">
            <p className="text-eyebrow">Interactivity Channels</p>
            <h2 className="text-h2 mb-[18px]">Connect across all formats</h2>
            <p className="text-subtitle text-[var(--color-ink-soft)] mb-6">
              Next to establishing the foundation is the part where communication and interaction takes place. All activities are undertaken according to the customers' preference or the business' convenience.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded-xl shadow-sm border border-[var(--color-line)]">
                <h4 className="font-bold text-[var(--color-brand-blue)] mb-1">Messaging</h4>
                <p className="text-sm text-[var(--color-ink-soft)] mb-0">Chat, SMS, OTT, Push</p>
              </div>
              <div className="bg-white p-4 rounded-xl shadow-sm border border-[var(--color-line)]">
                <h4 className="font-bold text-[var(--color-cyan)] mb-1">Voice</h4>
                <p className="text-sm text-[var(--color-ink-soft)] mb-0">Calls, Fax, Memos</p>
              </div>
              <div className="bg-white p-4 rounded-xl shadow-sm border border-[var(--color-line)]">
                <h4 className="font-bold text-[var(--color-green)] mb-1">Video</h4>
                <p className="text-sm text-[var(--color-ink-soft)] mb-0">Video Calls, Webinars</p>
              </div>
              <div className="bg-white p-4 rounded-xl shadow-sm border border-[var(--color-line)]">
                <h4 className="font-bold text-[var(--color-purple)] mb-1">Social</h4>
                <p className="text-sm text-[var(--color-ink-soft)] mb-0">Posting, Commenting</p>
              </div>
            </div>
          </div>
          <div className="relative min-h-[400px] order-1 lg:order-2" aria-hidden="true">
            <div className="absolute right-[20px] top-[34px] w-[460px] h-[380px] rounded-[42%_58%_52%_48%/45%_38%_62%_55%] bg-[linear-gradient(145deg,rgba(232,239,255,0.92),rgba(246,249,255,0.92))] drop-shadow-[0_30px_80px_rgba(59,91,168,0.12)]"></div>
            <div className="absolute inset-0 grid place-items-center">
              <div className="grid grid-cols-2 gap-4">
                <div className="w-[140px] h-[140px] bg-white rounded-2xl shadow-[var(--shadow-sm)] border border-[var(--color-line)] grid place-items-center text-4xl">💬</div>
                <div className="w-[140px] h-[140px] bg-white rounded-2xl shadow-[var(--shadow-sm)] border border-[var(--color-line)] grid place-items-center text-4xl">📞</div>
                <div className="w-[140px] h-[140px] bg-white rounded-2xl shadow-[var(--shadow-sm)] border border-[var(--color-line)] grid place-items-center text-4xl">📹</div>
                <div className="w-[140px] h-[140px] bg-white rounded-2xl shadow-[var(--shadow-sm)] border border-[var(--color-line)] grid place-items-center text-4xl">🔗</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Guide to Action */}
      <CustomerAndIntegrations />
    </>
  );
}
