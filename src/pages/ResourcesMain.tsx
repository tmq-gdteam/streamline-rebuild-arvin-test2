import SEO from '../components/SEO';
import { Link } from 'react-router-dom';

export default function ResourcesMain() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Resources - Main",
    "description": "Achieve Success Today With More Possibilities For The Future. Trust, Learn, Support."
  };

  return (
    <>
      <SEO 
        title="Resources | Streamline"
        description="Achieve Success Today With More Possibilities For The Future."
        schema={schema}
      />
      
      {/* Hero Section */}
      <section className="pt-[96px] pb-[40px] md:pt-[62px] text-center bg-white">
        <div className="container-fluid max-w-4xl mx-auto">
          <div className="text-eyebrow bg-slate-100 rounded-full px-3 py-1.5 inline-block mb-4">
            <span className="w-2 h-2 rounded-full bg-[var(--color-cyan)] inline-block mr-2"></span>
            Resources
          </div>
          <h1 className="text-display mb-6">TRUST, LEARN, SUPPORT</h1>
          <p className="text-subtitle text-[var(--color-ink-soft)] mb-8">
            Achieve Success Today With More Possibilities For The Future
          </p>
        </div>
      </section>

      {/* Secondary Hero */}
      <section className="py-[40px] bg-[var(--color-brand-blue)] text-white text-center">
        <div className="container-fluid max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold mb-4">Go Beyond What You Can Do</h2>
          <p className="text-xl italic mb-4">Act now and take the lead today.</p>
          <p className="text-lg text-slate-300">
            Because you deserve only the best and the latest updates for your business, expect nothing less for your ways to achieve great success.
          </p>
        </div>
      </section>

      {/* Questions & Community */}
      <section className="section-pad bg-slate-50">
        <div className="container-fluid">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16 items-center">
            <div className="order-2 md:order-1 bg-white p-12 rounded-3xl border border-slate-200 shadow-sm text-center md:text-left">
              <h3 className="text-3xl font-bold text-[#666] mb-6">Got Questions?</h3>
              <p className="text-lg text-[var(--color-ink-soft)] mb-8">
                Here are advices and answers from the Streamline Team<br /><br />
                Still looking for more?<br />Simply click the button below and talk to any of our experts.
              </p>
              <Link to="/faqs.html" className="btn btn-primary">LEARN MORE &gt;</Link>
            </div>
            <div className="order-1 md:order-2 bg-slate-200 rounded-3xl min-h-[300px] flex items-center justify-center">
              <span className="text-6xl">❓</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="bg-slate-200 rounded-3xl min-h-[300px] flex items-center justify-center">
              <span className="text-6xl">👥</span>
            </div>
            <div className="bg-white p-12 rounded-3xl border border-slate-200 shadow-sm text-center md:text-left">
              <h3 className="text-3xl font-bold text-[#888] mb-6">Join our Community</h3>
              <p className="text-lg text-[var(--color-ink-soft)] mb-8">
                Be part of the conversation online and don't get left behind. Engage with experts in the community, follow interesting people, join groups for discussion and share files personally or in public.
              </p>
              <Link to="/signup.html" className="btn btn-primary">Join our forum</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Support Form */}
      <section className="section-pad bg-[var(--color-brand-blue)] text-white">
        <div className="container-fluid grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="bg-white/10 rounded-3xl min-h-[400px] flex items-center justify-center">
             <span className="text-6xl">🎧</span>
          </div>
          <div>
            <h3 className="text-3xl font-bold mb-4">We got your back 24/7/365</h3>
            <p className="text-lg text-slate-300 mb-8">
              We'll take each step with you from setting up your system up to a very successful mastery of the platform.<br /><br />
              Connect with us via the following ways below:
            </p>
            
            <form className="bg-white rounded-2xl p-6 md:p-8 text-[var(--color-ink)]" onSubmit={(e) => e.preventDefault()}>
              <div className="space-y-4 mb-6">
                <input type="text" placeholder="Name" className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:border-[var(--color-brand-blue)]" />
                <input type="text" placeholder="Name of Company: Optional" className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:border-[var(--color-brand-blue)]" />
                <input type="tel" placeholder="Phone Number" className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:border-[var(--color-brand-blue)]" />
                <input type="email" placeholder="Email Address" className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:border-[var(--color-brand-blue)]" />
                <textarea placeholder="Short Message" rows={4} className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:border-[var(--color-brand-blue)]"></textarea>
              </div>
              
              <div className="bg-slate-50 p-4 rounded-lg mb-6 border border-slate-200">
                <p className="font-bold text-sm mb-2">SMS Communication Authorization (Optional)</p>
                <label className="flex items-start gap-3 cursor-pointer">
                  <input type="checkbox" className="mt-1" />
                  <span className="text-xs text-slate-600">
                    By providing my phone number and checking this box, I agree to receive SMS messages from Streamline for account updates, alerts, and support.<br/><br/>
                    <span className="text-slate-400">Consent is not a condition of purchase. Msg & data rates may apply. Reply STOP to cancel or HELP for help.</span>
                  </span>
                </label>
              </div>
              
              <button type="submit" className="btn btn-primary w-full">Submit</button>
            </form>
          </div>
        </div>
      </section>

      {/* Articles Worth Reading */}
      <section className="section-pad text-center">
        <div className="container-fluid max-w-3xl mx-auto mb-16">
          <h2 className="text-h2 mb-4">Articles Worth Reading</h2>
          <p className="text-xl font-bold mb-4">See how Streamline can transform your business by talking with us over a cup of coffee</p>
          <p className="text-lg text-[var(--color-ink-soft)] mb-8">
            With over a hundred useful insights to gain, discover everything you need to know -- from innovative communication up to successful integration of interactions.
          </p>
          <Link to="/contact-us.html" className="btn btn-primary">Contact Us &gt;</Link>
        </div>

        {/* Ebooks */}
        <div className="container-fluid grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16 text-left">
          <div className="bg-slate-100 p-12 rounded-3xl h-full flex flex-col justify-center">
            <h3 className="text-3xl font-bold text-[#222] mb-6">Ebooks</h3>
            <p className="text-lg text-[var(--color-ink-soft)]">
              Learn more about Streamline and all its features & processes as well as how it can be applied to your specific industry so you can take the lead.
            </p>
          </div>
          <div className="bg-slate-200 rounded-3xl min-h-[300px] flex items-center justify-center">
            <span className="text-6xl">📚</span>
          </div>
        </div>

        {/* Ebook Download Form */}
        <div className="container-fluid max-w-2xl mx-auto bg-white p-8 rounded-3xl shadow-lg border border-slate-200 relative -mt-8 mb-24 z-10">
          <p className="text-lg font-bold mb-6">Know more on how STREAMLINE can help your business by getting a copy of our the latest FREE Ebook.</p>
          <form className="flex flex-col sm:flex-row gap-4" onSubmit={(e) => e.preventDefault()}>
            <input type="email" placeholder="Email Address" className="flex-grow px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:border-[var(--color-brand-blue)]" required />
            <button type="submit" className="btn btn-primary whitespace-nowrap">DOWNLOAD NOW</button>
          </form>
        </div>
      </section>

      {/* Mid CTA */}
      <section className="py-12 bg-[#00e5ff] text-[var(--color-brand-blue)] text-center">
        <div className="container-fluid flex flex-col md:flex-row items-center justify-center gap-8">
          <h3 className="text-2xl font-bold max-w-md">Show us what you can do with Streamline by subscribing today.</h3>
          <Link to="/signup.html" className="btn bg-[var(--color-brand-blue)] text-white hover:bg-blue-900 border-none">I WANT THIS</Link>
        </div>
      </section>

      {/* Infographics */}
      <section className="section-pad bg-slate-50">
        <div className="container-fluid grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-24 text-left">
          <div className="order-2 md:order-1 bg-slate-200 rounded-3xl min-h-[300px] flex items-center justify-center">
            <span className="text-6xl">📊</span>
          </div>
          <div className="order-1 md:order-2 bg-white p-12 rounded-3xl border border-slate-200 shadow-sm h-full flex flex-col justify-center">
            <h3 className="text-3xl font-bold text-[#444] mb-6">Infographics</h3>
            <p className="text-lg text-[var(--color-ink-soft)]">
              Discover Relevant Facts and Concepts through our Illustrated Infographics & learn concepts crucial for your success.
            </p>
          </div>
        </div>
      </section>

      {/* Another Mid CTA */}
      <section className="py-12 bg-[#00e5ff] text-[var(--color-brand-blue)] text-center">
        <div className="container-fluid flex flex-col md:flex-row items-center justify-center gap-8">
          <h3 className="text-2xl font-bold max-w-lg">Explore facts and stats in the real world that you can apply to your business!</h3>
          <Link to="/signup.html" className="btn bg-[var(--color-brand-blue)] text-white hover:bg-blue-900 border-none">TAKE ME THERE</Link>
        </div>
      </section>

      {/* Download Infographic Form */}
      <section className="section-pad text-center">
        <div className="container-fluid max-w-3xl mx-auto">
          <h2 className="text-h2 mb-12">Download Infographic for Free</h2>
          <form className="text-left bg-white rounded-3xl p-8 border border-slate-200 shadow-sm" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <input type="text" placeholder="First Name" className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:border-[var(--color-brand-blue)]" />
              <input type="text" placeholder="Last Name" className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:border-[var(--color-brand-blue)]" />
            </div>
            <div className="space-y-4 mb-6">
              <input type="text" placeholder="Company" className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:border-[var(--color-brand-blue)]" />
              <input type="email" placeholder="Email" className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:border-[var(--color-brand-blue)]" />
              <input type="tel" placeholder="Phone Number" className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:border-[var(--color-brand-blue)]" />
            </div>
            
            <div className="bg-slate-50 p-4 rounded-lg mb-8 border border-slate-200">
              <p className="font-bold text-sm mb-2">SMS Communication Authorization (Optional)</p>
              <label className="flex items-start gap-3 cursor-pointer">
                <input type="checkbox" className="mt-1" />
                <span className="text-xs text-slate-600">
                  By providing my phone number and checking this box, I agree to receive SMS messages from Streamline for account updates, alerts, and support.<br/><br/>
                  <span className="text-slate-400">Consent is not a condition of purchase. Msg & data rates may apply. Reply STOP to cancel or HELP for help.</span>
                </span>
              </label>
            </div>
            
            <div className="text-center">
               <button type="submit" className="btn btn-primary w-full md:w-auto px-12">DOWNLOAD NOW</button>
            </div>
          </form>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-pad text-center bg-[var(--color-brand-blue)] text-white">
        <div className="container-narrow py-8 flex flex-col md:flex-row items-center justify-center gap-8">
          <h3 className="text-h2 text-white m-0">Gain More With New Insights</h3>
          <Link to="/signup.html" className="btn bg-[var(--color-cyan)] text-[var(--color-brand-blue)] hover:bg-teal-300 border-none">
            SEE WHAT'S NEXT
          </Link>
        </div>
      </section>
    </>
  );
}
