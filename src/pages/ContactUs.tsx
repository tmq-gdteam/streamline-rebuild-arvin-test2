import SEO from '../components/SEO';

export default function ContactUs() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contact Us",
    "description": "Ways To Get in Touch. Want to Learn More? Let's talk about how Streamline can transform your business over a cup of coffee.."
  };

  return (
    <>
      <SEO 
        title="Contact Us | Streamline"
        description="Ways To Get in Touch. Want to Learn More? Let's talk about how Streamline can transform your business over a cup of coffee.."
        schema={schema}
      />
      
      {/* Hero Section */}
      <section className="pt-[96px] pb-[40px] md:pt-[62px] text-center bg-slate-50">
        <div className="container-fluid max-w-4xl mx-auto">
          <div className="text-eyebrow bg-white rounded-full px-3 py-1.5 inline-block mb-4 border border-slate-200">
            <span className="w-2 h-2 rounded-full bg-[var(--color-cyan)] inline-block mr-2"></span>
            Contact Us
          </div>
          <h1 className="text-display mb-6">Ways To Get in Touch</h1>
          <p className="text-subtitle text-[var(--color-ink-soft)] mb-2">
            Want to Learn More?
          </p>
          <p className="text-lg text-[var(--color-ink-soft)] mb-8">
            Let's talk about how Streamline can transform your business over a cup of coffee..
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="pb-[76px] bg-slate-50">
        <div className="container-fluid max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-0 bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-200">
            
            {/* Left side: Form */}
            <div className="p-8 md:p-12 bg-white">
              <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
              <p className="text-[var(--color-ink-soft)] mb-8">
                To request more information, arrange a demonstration, or customize a service plan:
              </p>
              
              <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
                <input 
                  type="text" 
                  placeholder="Name" 
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:border-[var(--color-brand-blue)]" 
                />
                <input 
                  type="email" 
                  placeholder="Email" 
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:border-[var(--color-brand-blue)]" 
                  required 
                />
                <textarea 
                  placeholder="Message" 
                  rows={6}
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:border-[var(--color-brand-blue)] resize-none"
                ></textarea>
                <button type="submit" className="btn btn-primary w-full">Submit</button>
              </form>
            </div>

            {/* Right side: Contact Info */}
            <div className="p-8 md:p-12 bg-[var(--color-brand-blue)] text-white flex flex-col justify-center">
              <h2 className="text-2xl font-bold mb-8">Reach Us & Take The Lead</h2>
              
              <div className="mb-8">
                <h3 className="font-bold text-lg mb-2 text-[var(--color-cyan)]">Find Us</h3>
                <p className="opacity-90">2001 Clayton Road, 2nd Floor, Concord CA 94520</p>
              </div>

              <div className="w-full h-px bg-white/20 mb-8"></div>

              <div className="mb-8">
                <h3 className="font-bold text-lg mb-2 text-[var(--color-cyan)]">Talk to an expert.</h3>
                <div className="space-y-2 opacity-90">
                  <a href="tel:(866)995-2898" className="block hover:text-[var(--color-cyan)] transition-colors">(866) 995-2898</a>
                  <a href="tel:(571)789-1040" className="block hover:text-[var(--color-cyan)] transition-colors">(571) 789-1040</a>
                  <a href="tel:(510)479-0721" className="block hover:text-[var(--color-cyan)] transition-colors">(510) 479-0721</a>
                </div>
              </div>

              <div className="w-full h-px bg-white/20 mb-8"></div>

              <div>
                <h3 className="font-bold text-lg mb-2 text-[var(--color-cyan)]">Email Us Today!</h3>
                <a href="mailto:info@streamline.com" className="opacity-90 hover:text-[var(--color-cyan)] transition-colors">info@streamline.com</a>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
