import SEO from '../components/SEO';

export default function Demo() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Request a Demo",
    "description": "Request a demo of Streamline to see how it can transform your business communication and workflows."
  };

  return (
    <>
      <SEO 
        title="Demo | Streamline"
        description="Request a demo of Streamline to see how it can transform your business communication and workflows."
        schema={schema}
      />
      
      <section className="min-h-screen pt-[96px] pb-[76px] md:pt-[120px] bg-slate-50 flex items-center justify-center relative overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute top-0 left-0 w-full h-[400px] bg-[var(--color-brand-blue)] z-0"></div>
        <div className="absolute top-[200px] right-[-100px] w-96 h-96 bg-[var(--color-cyan)] rounded-full mix-blend-multiply filter blur-3xl opacity-20 z-0"></div>
        
        <div className="container-fluid relative z-10 w-full max-w-lg mx-auto">
          <div className="bg-white rounded-3xl shadow-xl border border-slate-200 overflow-hidden">
            <div className="p-8 md:p-12 text-center bg-slate-100 border-b border-slate-200">
               <h1 className="text-display text-[var(--color-brand-blue)] m-0">Demo</h1>
               <p className="text-[var(--color-ink-soft)] mt-2">See Streamline in action</p>
            </div>
            
            <div className="p-8 md:p-12">
              <form onSubmit={(e) => e.preventDefault()} className="space-y-6">
                <div>
                  <input 
                    type="text" 
                    placeholder="Your Name" 
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:border-[var(--color-brand-blue)]" 
                    required
                  />
                </div>
                <div>
                  <input 
                    type="email" 
                    placeholder="Company Email Address" 
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:border-[var(--color-brand-blue)]" 
                    required 
                  />
                </div>
                <div>
                  <input 
                    type="tel" 
                    placeholder="Phone Number" 
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:border-[var(--color-brand-blue)]" 
                    required 
                  />
                </div>
                
                <div>
                  <p className="text-sm font-bold text-[var(--color-ink)] mb-2">Give us an overview of what you would like to see in the demo:</p>
                  <textarea 
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:border-[var(--color-brand-blue)] resize-none"
                  ></textarea>
                </div>
                
                <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
                  <p className="font-bold text-sm mb-2 text-[var(--color-ink)]">SMS Communication Authorization (Optional)</p>
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input type="checkbox" className="mt-1" />
                    <span className="text-xs text-slate-600">
                      By providing my phone number and checking this box, I agree to receive SMS messages from <em className="not-italic font-bold">Streamline</em> for account updates, alerts, and support.<br/><br/>
                      <span className="text-slate-400">Consent is not a condition of purchase. Msg & data rates may apply. Reply STOP to cancel or HELP for help.</span>
                    </span>
                  </label>
                </div>
                
                <button type="submit" className="btn btn-primary w-full py-4 text-lg tracking-wider">SUBMIT</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
