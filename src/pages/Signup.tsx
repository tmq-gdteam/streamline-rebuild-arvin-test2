import SEO from '../components/SEO';
import { Link } from 'react-router-dom';

export default function Signup() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Sign Up",
    "description": "Sign Up with Streamline today. Try Streamline for FREE and Experience the Difference."
  };

  return (
    <>
      <SEO 
        title="Sign Up | Streamline"
        description="Sign Up with Streamline today. Try Streamline for FREE and Experience the Difference."
        schema={schema}
      />
      
      <section className="min-h-screen pt-[96px] pb-[76px] md:pt-[120px] bg-slate-50 flex items-center justify-center relative overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute top-0 left-0 w-full h-[400px] bg-[var(--color-brand-blue)] z-0"></div>
        <div className="absolute top-[200px] right-[-100px] w-96 h-96 bg-[var(--color-cyan)] rounded-full mix-blend-multiply filter blur-3xl opacity-20 z-0"></div>
        
        <div className="container-fluid relative z-10 w-full max-w-lg mx-auto">
          <div className="bg-white rounded-3xl shadow-xl border border-slate-200 overflow-hidden">
            <div className="p-8 md:p-12 text-center bg-slate-100 border-b border-slate-200">
               <div className="mb-6 flex justify-center">
                 <Link to="/">
                   <img src="/images/streamline-logo.png" alt="Streamline" className="h-[42px] object-contain" />
                 </Link>
               </div>
               <h1 className="text-4xl font-bold text-[var(--color-brand-blue)] mb-2 uppercase tracking-tight">Sign Up With Us Today</h1>
               <p className="text-[var(--color-ink-soft)] font-bold">Try Streamline for FREE and Experience the Difference..</p>
            </div>
            
            <div className="p-8 md:p-12">
              <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input 
                    type="text" 
                    placeholder="First Name" 
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:border-[var(--color-brand-blue)]" 
                    required
                  />
                  <input 
                    type="text" 
                    placeholder="Last Name" 
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:border-[var(--color-brand-blue)]" 
                    required
                  />
                </div>
                <div>
                  <input 
                    type="text" 
                    placeholder="Company Name" 
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:border-[var(--color-brand-blue)]" 
                  />
                </div>
                <div>
                  <input 
                    type="email" 
                    placeholder="Email Address" 
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
                  <input 
                    type="password" 
                    placeholder="Password" 
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:border-[var(--color-brand-blue)]" 
                    required 
                  />
                </div>
                <div className="mb-6">
                  <input 
                    type="password" 
                    placeholder="Retype Password" 
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:border-[var(--color-brand-blue)]" 
                    required 
                  />
                </div>
                
                <div className="bg-slate-50 p-4 rounded-lg border border-slate-200 mt-6 mb-6">
                  <p className="font-bold text-sm mb-2 text-[var(--color-ink)]">SMS Communication Authorization (Optional)</p>
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input type="checkbox" className="mt-1" />
                    <span className="text-xs text-slate-600">
                      By providing my phone number and checking this box, I agree to receive SMS messages from <em className="not-italic font-bold">Streamline</em> for account updates, alerts, and support.<br/><br/>
                      <span className="text-slate-400">Consent is not a condition of purchase. Msg & data rates may apply. Reply STOP to cancel or HELP for help.</span>
                    </span>
                  </label>
                </div>
                
                <button type="submit" className="btn btn-primary w-full py-4 text-lg tracking-wider">GET STARTED FOR FREE</button>
              </form>
              
              <div className="mt-8 text-center text-sm font-bold text-[var(--color-ink-soft)] border-t border-slate-100 pt-8">
                Already have an account? <Link to="/login.html" className="text-[var(--color-cyan)] hover:underline ml-1">Log In</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
