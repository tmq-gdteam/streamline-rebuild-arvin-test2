import SEO from '../components/SEO';

export default function Support() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contact Support",
    "description": "Our team is here to help you resolve issues quickly and efficiently. Submit a request and we'll get back to you within 24 hours."
  };

  return (
    <>
      <SEO 
        title="Support | Streamline"
        description="Our team is here to help you resolve issues quickly and efficiently. Submit a request and we'll get back to you within 24 hours."
        schema={schema}
      />
      
      {/* Hero Section */}
      <section className="pt-[96px] pb-[40px] md:pt-[62px] text-center bg-slate-50">
        <div className="container-fluid max-w-4xl mx-auto">
          <div className="text-eyebrow bg-white rounded-full px-3 py-1.5 inline-block mb-4 border border-slate-200">
            <span className="w-2 h-2 rounded-full bg-[var(--color-cyan)] inline-block mr-2"></span>
            Help Center
          </div>
          <h1 className="text-display mb-6">Contact Support</h1>
          <p className="text-subtitle text-[var(--color-ink-soft)] mb-2">
            Our team is here to help you resolve issues quickly and efficiently.
          </p>
          <p className="text-lg text-[var(--color-ink-soft)] mb-8">
            Submit a request and we'll get back to you within 24 hours.
          </p>
        </div>
      </section>

      {/* Support Form Section */}
      <section className="pb-[76px] bg-slate-50">
        <div className="container-fluid max-w-3xl mx-auto">
          <div className="bg-white rounded-3xl shadow-sm border border-slate-200 p-8 md:p-12">
            <h2 className="text-2xl font-bold mb-8">Submit a Support Request</h2>
            
            <form onSubmit={(e) => e.preventDefault()} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <input 
                    type="text" 
                    placeholder="Full Name" 
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:border-[var(--color-brand-blue)]" 
                    required 
                  />
                </div>
                <div>
                  <input 
                    type="email" 
                    placeholder="Email" 
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:border-[var(--color-brand-blue)]" 
                    required 
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <input 
                    type="tel" 
                    placeholder="Phone Number (optional)" 
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:border-[var(--color-brand-blue)]" 
                  />
                  <p className="text-xs text-slate-500 mt-2">If provided, we may contact you regarding your request.</p>
                </div>
                <div>
                  <input 
                    type="text" 
                    placeholder="Company Name (optional)" 
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:border-[var(--color-brand-blue)]" 
                  />
                </div>
              </div>

              <div>
                <select 
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:border-[var(--color-brand-blue)] bg-white"
                  required
                >
                  <option value="">Request Type</option>
                  <option value="Technical Issue">Technical Issue</option>
                  <option value="Billing Question">Billing Question</option>
                  <option value="Account Access">Account Access</option>
                  <option value="API Support">API Support</option>
                  <option value="General Inquiry">General Inquiry</option>
                </select>
              </div>

              <div>
                <input 
                  type="text" 
                  placeholder="Subject" 
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:border-[var(--color-brand-blue)]" 
                  required 
                />
              </div>

              <div>
                <textarea 
                  placeholder="Message" 
                  rows={6}
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:border-[var(--color-brand-blue)] resize-none"
                  required
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

              <button type="submit" className="btn btn-primary w-full py-4 text-lg">Submit Request</button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
