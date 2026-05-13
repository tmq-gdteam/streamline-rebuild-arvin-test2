import SEO from '../components/SEO';
import { Link } from 'react-router-dom';

export default function Login() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Login",
    "description": "Log in to your Streamline account."
  };

  return (
    <>
      <SEO 
        title="Login | Streamline"
        description="Log in to your Streamline account."
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
               <div className="mb-8 flex justify-center">
                 <Link to="/">
                   <img src="/images/streamline-logo.png" alt="Streamline" className="h-[42px] object-contain" />
                 </Link>
               </div>
            </div>
            
            <div className="p-8 md:p-12 pt-4">
              <form onSubmit={(e) => e.preventDefault()} className="space-y-6">
                <div>
                  <input 
                    type="email" 
                    placeholder="Email" 
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
                
                <div className="flex items-center justify-between">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" className="w-4 h-4 text-[var(--color-brand-blue)] rounded border-slate-300 focus:ring-[var(--color-brand-blue)]" />
                    <span className="text-sm font-bold text-[var(--color-ink-soft)]">Remember Me</span>
                  </label>
                  <Link to="/forgot-password.html" className="text-sm font-bold text-[var(--color-cyan)] hover:underline">
                    Forgot your password?
                  </Link>
                </div>
                
                <button type="submit" className="btn btn-primary w-full py-4 text-lg tracking-wider">SIGN IN</button>
              </form>
              
              <div className="mt-8 text-center text-sm font-bold text-[var(--color-ink-soft)] border-t border-slate-100 pt-8">
                Don't have an account? <Link to="/signup.html" className="text-[var(--color-cyan)] hover:underline ml-1">Sign Up</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
