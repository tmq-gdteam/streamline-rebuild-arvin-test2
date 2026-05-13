import SEO from '../components/SEO';
import { Link } from 'react-router-dom';

export default function ForgotPassword() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Forgot Password",
    "description": "Reset your Streamline password."
  };

  return (
    <>
      <SEO 
        title="Forgot Password | Streamline"
        description="Reset your Streamline password."
        schema={schema}
      />
      
      <section className="min-h-screen pt-[96px] pb-[76px] md:pt-[120px] bg-slate-50 flex items-center justify-center relative overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute top-0 left-0 w-full h-[400px] bg-[var(--color-brand-blue)] z-0"></div>
        <div className="absolute top-[200px] right-[-100px] w-96 h-96 bg-[var(--color-cyan)] rounded-full mix-blend-multiply filter blur-3xl opacity-20 z-0"></div>
        
        <div className="container-fluid relative z-10 w-full max-w-md mx-auto">
          <div className="bg-white rounded-3xl shadow-xl border border-slate-200 overflow-hidden">
            <div className="p-8 md:p-12 pb-0 text-center">
               {/* Streamline Logo */}
               <div className="mb-6 flex justify-center">
                 <Link to="/">
                   <img src="/images/streamline-logo.png" alt="Streamline" className="h-[42px] object-contain" />
                 </Link>
               </div>
               
               <h1 className="text-2xl font-bold text-[var(--color-ink)] mb-2 uppercase">Reset Password</h1>
               <p className="text-sm text-[var(--color-ink-soft)] mb-8">
                 Enter your email address below. You'll receive an email with a link to reset your password.
               </p>
            </div>
            
            <div className="p-8 md:p-12 pt-0">
              <form onSubmit={(e) => e.preventDefault()} className="space-y-6">
                <div>
                  <input 
                    type="email" 
                    placeholder="Email Address" 
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:border-[var(--color-brand-blue)]" 
                    required 
                  />
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
