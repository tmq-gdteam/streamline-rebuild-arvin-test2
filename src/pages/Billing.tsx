import SEO from '../components/SEO';
import { Link } from 'react-router-dom';

export default function Billing() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Billing",
    "description": "Streamline Billing Dashboard. Start with one product or many."
  };

  return (
    <>
      <SEO 
        title="Billing Dashboard | Streamline"
        description="Streamline Billing Dashboard. Start with one product or many."
        schema={schema}
      />
      
      {/* Quick Dashboard Header */}
      <section className="pt-[120px] pb-[40px] bg-slate-50 border-b border-slate-200">
        <div className="container-fluid max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8">
            <div>
              <p className="text-sm font-bold text-[var(--color-ink-soft)] uppercase tracking-widest mb-2">Dashboard</p>
              <h1 className="text-4xl font-bold text-[var(--color-brand-blue)]">Billing</h1>
            </div>
            <div className="mt-4 md:mt-0">
              <Link to="/your-settings.html" className="text-sm font-bold text-[var(--color-cyan)] hover:underline mr-6">Your Account</Link>
              <Link to="/app-settings.html" className="text-sm font-bold text-[var(--color-cyan)] hover:underline">App Settings</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-[76px] bg-white">
        <div className="container-fluid max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold mb-2">Product</h2>
          <p className="text-lg text-[var(--color-ink-soft)] mb-12">Start with one product or many. Try them free for 30 days and add more at any time.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* MightySip */}
            <Link to="/billing-mightysip.html" className="group block bg-white rounded-3xl p-8 border border-slate-200 hover:shadow-xl transition-all hover:-translate-y-1">
              <h3 className="text-xl font-bold text-red-500 mb-6">MIGHTYSIP</h3>
              <div className="h-40 bg-slate-50 rounded-xl flex items-center justify-center mb-6 overflow-hidden p-4">
                <img src="/images/37-40.png" alt="MightySIP" className="object-contain h-full" />
              </div>
              <p className="text-sm text-[var(--color-ink-soft)] mb-6 h-16">Primary app to act as a web portal for sales agents to connect & communicate with customers</p>
              <div className="inline-block px-4 py-2 bg-red-50 text-red-600 text-xs font-bold rounded-full">FREE TRIAL</div>
            </Link>

            {/* Reach */}
            <Link to="/billing-reach.html" className="group block bg-white rounded-3xl p-8 border border-slate-200 hover:shadow-xl transition-all hover:-translate-y-1">
              <h3 className="text-xl font-bold text-yellow-500 mb-6">REACH</h3>
              <div className="h-40 bg-slate-50 rounded-xl flex items-center justify-center mb-6">
                 <div className="w-20 h-20 bg-yellow-100 rounded-full flex items-center justify-center">
                    <span className="text-yellow-500 font-bold">Icon</span>
                 </div>
              </div>
              <p className="text-sm text-[var(--color-ink-soft)] mb-6 h-16">Secure, private label communication application</p>
              <div className="inline-block px-4 py-2 bg-yellow-50 text-yellow-600 text-xs font-bold rounded-full">FREE TRIAL</div>
            </Link>

            {/* Reach Force */}
            <Link to="/billing-reachforce.html" className="group block bg-white rounded-3xl p-8 border border-slate-200 hover:shadow-xl transition-all hover:-translate-y-1">
              <h3 className="text-xl font-bold text-green-500 mb-6">REACH FORCE</h3>
              <div className="h-40 bg-slate-50 rounded-xl flex items-center justify-center mb-6">
                 <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center">
                    <span className="text-green-500 font-bold">Icon</span>
                 </div>
              </div>
              <p className="text-sm text-[var(--color-ink-soft)] mb-6 h-16">Platform to connect & communicate with customer via multiple channels</p>
              <div className="inline-block px-4 py-2 bg-green-50 text-green-600 text-xs font-bold rounded-full">FREE TRIAL</div>
            </Link>

            {/* TxtConsole */}
            <Link to="/billing-txtconsole.html" className="group block bg-white rounded-3xl p-8 border border-slate-200 hover:shadow-xl transition-all hover:-translate-y-1">
              <h3 className="text-xl font-bold text-red-500 mb-6">TXTCONSOLE</h3>
              <div className="h-40 bg-slate-50 rounded-xl flex items-center justify-center mb-6">
                 <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center">
                    <span className="text-red-500 font-bold">Icon</span>
                 </div>
              </div>
              <p className="text-sm text-[var(--color-ink-soft)] mb-6 h-16">Primary app to act as a web portal for sales agents to connect & communicate with customers</p>
              <div className="inline-block px-4 py-2 bg-red-50 text-red-600 text-xs font-bold rounded-full">FREE TRIAL</div>
            </Link>

            {/* TxtReview */}
            <Link to="/billing-txtreview.html" className="group block bg-white rounded-3xl p-8 border border-slate-200 hover:shadow-xl transition-all hover:-translate-y-1">
              <h3 className="text-xl font-bold text-green-500 mb-6">TXTREVIEW</h3>
              <div className="h-40 bg-slate-50 rounded-xl flex items-center justify-center mb-6">
                 <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center">
                    <span className="text-green-500 font-bold">Icon</span>
                 </div>
              </div>
              <p className="text-sm text-[var(--color-ink-soft)] mb-6 h-16">Automated customer review management</p>
              <div className="inline-block px-4 py-2 bg-green-50 text-green-600 text-xs font-bold rounded-full">FREE TRIAL</div>
            </Link>

            {/* UConnectEdit */}
            <Link to="/billing-uconnectedit1.html" className="group block bg-white rounded-3xl p-8 border border-slate-200 hover:shadow-xl transition-all hover:-translate-y-1">
              <h3 className="text-xl font-bold text-red-500 mb-6">UCONNECTEDIT</h3>
              <div className="h-40 bg-slate-50 rounded-xl flex items-center justify-center mb-6">
                 <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center">
                    <span className="text-red-500 font-bold">Icon</span>
                 </div>
              </div>
              <p className="text-sm text-[var(--color-ink-soft)] mb-6 h-16">Simple and powerful APIs integrate messaging, voice & video, as well as authentication services.</p>
              <div className="inline-block px-4 py-2 bg-red-50 text-red-600 text-xs font-bold rounded-full">FREE TRIAL</div>
            </Link>

            {/* All Streamline Products */}
            <Link to="/billing-mightysip.html" className="col-span-1 md:col-span-2 lg:col-span-3 group block bg-slate-50 rounded-3xl p-8 border border-slate-200 hover:shadow-xl transition-all hover:-translate-y-1">
              <h3 className="text-xl font-bold text-[var(--color-brand-blue)] mb-6">ALL STREAMLINE PRODUCTS</h3>
              <p className="text-lg text-[var(--color-ink-soft)] mb-6 max-w-3xl">Get MightySIP, Reach, Reachforce, TxtConsole, TxtReview and UconnectedIt for all your Business needs.</p>
              <div className="inline-block px-6 py-3 bg-[var(--color-brand-blue)] text-white text-sm font-bold rounded-full">FREE TRIAL</div>
            </Link>

          </div>
        </div>
      </section>
    </>
  );
}
