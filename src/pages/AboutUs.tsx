import SEO from '../components/SEO';
import { Link } from 'react-router-dom';

export default function AboutUs() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "name": "About Us",
    "description": "Explore The Streamline Dynamics. Manage Your Business With The Streamline Difference."
  };

  const leaders = [
    {
      company: "Optima Inc.",
      name: "Monica L. Morrison",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400&h=400",
      socials: ['linkedin', 'twitter', 'email', 'phone']
    },
    {
      company: "WhiteBox Ltd.",
      name: "Anne E. Miles",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400&h=400",
      socials: ['linkedin', 'twitter', 'email', 'phone']
    },
    {
      company: "RST Builders Co.",
      name: "Jayson R. Hauser",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400&h=400",
      socials: ['linkedin', 'twitter', 'email', 'phone']
    }
  ];

  return (
    <>
      <SEO 
        title="About Us | Streamline"
        description="Communication is the core for a great business. We help personalize every business who wants to get and stay on top."
        schema={schema}
      />
      
      {/* 1. Attract Attention (Hero Section) */}
      <section className="pt-[96px] pb-[76px] overflow-hidden md:pt-[62px] text-center bg-[#eef4ff]">
        <div className="container-fluid max-w-4xl mx-auto">
          <div className="text-eyebrow bg-white rounded-full px-3 py-1.5 inline-block mb-4">
            <span className="w-2 h-2 rounded-full bg-[var(--color-cyan)] inline-block mr-2"></span>
            About Us
          </div>
          <h1 className="text-display mb-6">Explore The Streamline Dynamics</h1>
          <p className="text-subtitle text-[var(--color-ink-soft)] mb-8">
            Manage Your Business With The Streamline Difference
          </p>
        </div>
      </section>

      {/* 2. Build Interest (Our Story) */}
      <section className="section-pad">
        <div className="container-fluid max-w-4xl mx-auto text-center">
          <h2 className="text-h2 text-[var(--color-brand-blue)] mb-4">Communication is the core for a great business.</h2>
          <h3 className="text-xl font-bold mb-8 text-[var(--color-ink)]">We help personalize every business who wants to get and stay on top.</h3>
          
          <div className="text-lg text-[var(--color-ink-soft)] space-y-6 text-left">
            <p>
              Streamline fuses together all the channels for communication and integrate products for sales, marketing & customer service into one platform. Thus, helping businesses avoid the hassles of a complex communication system and have real conversations and interactions that creates real and meaningful connections.
            </p>
            <p>
              Designed to feel like the apps & processes you use every day, Streamline lets you interact with consumers, suppliers, and your team anywhere they may be: on your website, through your apps, across social media, via SMS and even through email.
            </p>
            <p>
              Today, there is a growing number of individuals using Streamline to connect with billions of other people worldwide. Streamline is expanding its teams and continuously extending its reach and developing its network on a global scale.
            </p>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="section-pad bg-slate-50">
        <div className="container-fluid">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-h2 mb-4">Streamline Leadership Team</h2>
            <p className="text-lg text-[var(--color-ink-soft)]">
              We take pride as the leading multi-channel platform provider to the Fortune 500 clients. Streamline is continuously progressing under the guidance and leadership of some of the excellent minds, high-valued and experienced executives in the business.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {leaders.map((leader, i) => (
              <div key={i} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-200">
                <div className="bg-[var(--color-brand-blue)] text-white text-center py-3 font-bold">
                  {leader.company}
                </div>
                <img src={leader.image} alt={leader.name} className="w-full h-64 object-cover" />
                <div className="p-6 text-center">
                  <h4 className="text-xl font-bold mb-4">{leader.name}</h4>
                  <div className="flex justify-center gap-3">
                    {leader.socials.map((social, j) => (
                      <div key={j} className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 hover:text-[var(--color-brand-blue)] hover:bg-blue-50 cursor-pointer transition-colors">
                        <span className="sr-only">{social}</span>
                        <div className="w-4 h-4 bg-current" style={{ maskImage: 'url(/images/about-us-05.svg)', maskSize: 'contain', maskRepeat: 'no-repeat', maskPosition: 'center' }}></div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Connection & Recognitions */}
      <section className="section-pad">
        <div className="container-fluid max-w-4xl mx-auto text-center mb-24">
          <h2 className="text-h2 mb-4">Connect Internationally With Our Global Teams</h2>
          <p className="text-lg text-[var(--color-ink-soft)] mb-8">
            Streamline welcomes you to a vast network of establishments and organizations to help you build connections and develop a trusting relationship with investors, partners and clients at a global scale. This opens up new opportunities for your business to be recognized in the international market.
          </p>
          <Link to="/contact-us.html" className="btn btn-primary">Learn More</Link>
        </div>

        <div className="container-fluid grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-24">
          <div>
            <h2 className="text-h2 text-[var(--color-brand-blue)] mb-4">Recognitions From Prestigious Organizations</h2>
            <p className="text-lg text-[var(--color-ink-soft)] mb-8">
              Never go wrong with the products and services that Streamline offers as they are not only trusted by the Fortune 500 companies but is recognized as well by international organizations for efforts in helping businesses thrive despite the tight competition in the international market.
            </p>
            <Link to="/contact-us.html" className="btn btn-primary">Learn More</Link>
          </div>
          <div className="bg-slate-100 rounded-3xl min-h-[300px] flex items-center justify-center p-8">
            <span className="text-6xl">🏆</span>
          </div>
        </div>

        <div className="container-fluid grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1 bg-slate-100 rounded-3xl min-h-[300px] flex items-center justify-center p-8">
            <span className="text-6xl">🤝</span>
          </div>
          <div className="order-1 md:order-2">
            <h2 className="text-h2 mb-4">Partners</h2>
            <p className="text-lg text-[var(--color-ink-soft)] mb-8">
              Get to know the companies who have trusted us over the years and discover how they became part of our growing family here at Streamline as our loyal partners.
            </p>
            <Link to="/contact-us.html" className="btn btn-primary">Learn More</Link>
          </div>
        </div>
      </section>

      {/* Awards */}
      <section className="section-pad bg-[#1a1f36] text-white text-center">
        <div className="container-fluid max-w-4xl mx-auto">
          <h2 className="text-h2 mb-16">Awards & Achievements</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center text-left">
            <div className="bg-white/10 rounded-3xl p-12 min-h-[300px] flex items-center justify-center">
               <span className="text-6xl">🌍</span>
            </div>
            <div>
              <h3 className="text-3xl font-bold mb-4">Asia Pacific</h3>
              <p className="text-lg text-slate-300 mb-8">
                Recognized across the Asia Pacific region for outstanding contribution to business communications and enterprise integration solutions.
              </p>
              <div className="flex gap-4">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">🏅</div>
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">🏅</div>
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">🏅</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Guide to Action */}
      <section className="section-pad text-center bg-[var(--color-brand-blue)] text-white">
        <div className="container-narrow py-8">
          <h3 className="text-h2 text-white mb-8">Meet the loyal Streamline partners!</h3>
          <Link to="/signup.html" className="btn bg-[var(--color-cyan)] text-[var(--color-brand-blue)] hover:bg-teal-300 border-none">
            BE PART OF OUR TEAM
          </Link>
        </div>
      </section>
    </>
  );
}
