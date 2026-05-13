import SEO from '../components/SEO';
import { Link } from 'react-router-dom';
import CustomerAndIntegrations from '../components/CustomerAndIntegrations';

export default function CognitiveApps() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Cognitive Apps",
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "All",
    "description": "Streamline's solid and automated apps help carry out and deliver intelligent communication solutions."
  };

  const apps = [
    {
      name: "AlloAllo",
      desc: ["Consumer-based secure, multi-channel communication app for Android, iOS & the web", "Easily gather and save data to database"]
    },
    {
      name: "EngageForce",
      desc: ["Business process automation CRM for Customer Service, Sales & Mktg, & Logistics", "Improved operational efficiency with reduced turnaround times as well as quality and consistency in output & data tracking"]
    },
    {
      name: "iLocalBuzz",
      desc: ["Business promotion through customer reviews & review segregation", "An easy way for businesses get their customers to submit a review about the store they were just in through text message"]
    },
    {
      name: "iOrderByText",
      desc: ["Concierge, full order management via text messaging", "Conveniently take orders thru SMS to drive more revenues with less waiting time, more efficiency & more satisfied customers"]
    },
    {
      name: "MightySIP",
      desc: ["An app that allows to set up small or large businesses with phone lines + PBX", "Handle thousands of concurrent channel media on a standard pc with language versatility"]
    },
    {
      name: "REACH",
      desc: ["Secure, private label communication application", "Send instant messages, do live video sharing and file transfer within a single device across any interconnected networks"]
    },
    {
      name: "ReachForce",
      desc: ["Platform to connect & communicate with customer via multiple channels", "Better messaging system using rich features with group chat and data sharing among participants in various channels"]
    },
    {
      name: "ReachForce One",
      desc: ["Streamlined enterprise edition with high volume throughput capability", "Enhanced analytics and reporting features"]
    },
    {
      name: "TextingRights",
      desc: ["Securing messaging of a business' existing number/s", "Transform existing landlines for business or personal use & make them smarter with SMS, MMS, & even conversation tracking"]
    },
    {
      name: "TextYourOrders",
      desc: ["Increase order frequency and repeat customers through text orders", "Automated re-ordering and confirmation flows"]
    },
    {
      name: "TheFaceChat",
      desc: ["Platform for communicating face-to-face that works on Android, iOS, & the web", "Conveniently engage and interact using enhanced chat services done face to face"]
    },
    {
      name: "txtAds",
      desc: ["Precisely targeted ad delivery", "Enables you to find the right customers through text who may be interested in buying your products or services"]
    },
    {
      name: "txtConsole",
      desc: ["Primary app to act as a web portal for sales agents to connect & communicate with customers", "Manage your workforce efficiently & share valuable deals, offers or promotions to customers"]
    },
    {
      name: "txtReferrals",
      desc: ["Automated customer referral program", "Establish your reputation with more referred prospects & more close sales"]
    },
    {
      name: "txtReview",
      desc: ["Automated customer review management", "Helps gain and maintain the credibility for your company through automated review filters"]
    },
    {
      name: "txtRewards",
      desc: ["Automated customer loyalty", "Fast & efficient way to send rewards and incentives through text"]
    },
    {
      name: "Yippier",
      desc: ["Business chat platform", "Personalized and proactive engagement in real-time"]
    }
  ];

  return (
    <>
      <SEO 
        title="Cognitive Apps | Products"
        description="Streamline's solid and automated apps help carry out and deliver intelligent communication solutions."
        schema={schema}
      />
      
      {/* 1. Attract Attention (Hero Section) */}
      <section className="pt-[96px] pb-[76px] overflow-hidden md:pt-[62px]">
        <div className="container-narrow text-center">
          <div className="inline-block text-eyebrow bg-[#eef4ff] rounded-full px-3 py-1.5 mb-4">
            <span className="w-2 h-2 rounded-full bg-[var(--color-purple)] inline-block mr-2"></span>
            Products
          </div>
          <h1 className="text-display mb-6">Cognitive Apps</h1>
          <p className="text-subtitle text-[var(--color-ink-soft)] max-w-[800px] mx-auto mb-8">
            Streamline's solid and automated apps help carry out and deliver intelligent communication solutions that doesn't give only one advantage for each channel but also helps in achieving your goals with full visibility and in an organized manner.
          </p>
          <div className="flex justify-center gap-4 mb-6">
            <Link to="/signup.html" className="btn btn-primary w-full sm:w-auto">Start Free Trial</Link>
            <a href="#apps-grid" className="btn btn-secondary w-full sm:w-auto">
              Explore Apps ↓
            </a>
          </div>
        </div>
      </section>

      {/* 2. Build Interest (Grid Section) */}
      <section id="apps-grid" className="section-pad bg-[var(--color-surface-blue)]">
        <div className="container-fluid grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {apps.map((app, index) => (
            <div key={index} className="p-[34px] border border-[rgba(231,237,248,0.92)] rounded-[var(--radius)] bg-white shadow-[var(--shadow-sm)] hover:-translate-y-1 transition-transform flex flex-col h-full">
              <div className="w-12 h-12 bg-[#f0f4f8] rounded-xl flex items-center justify-center mb-6 text-[var(--color-brand-blue)] font-bold text-xl">
                {app.name.charAt(0)}
              </div>
              <h3 className="text-h3 mb-4">{app.name}</h3>
              <ul className="space-y-3 flex-grow">
                {app.desc.map((bullet, i) => (
                  <li key={i} className="flex items-start gap-2 text-[var(--color-ink-soft)] text-sm">
                    <span className="text-[var(--color-cyan)] mt-0.5">•</span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 pt-4 border-t border-[var(--color-line)]">
                <Link to="/demo.html" className="text-[var(--color-brand-blue)] font-medium text-sm hover:underline flex items-center gap-1">
                  Learn more <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section-pad">
        <div className="container-fluid grid grid-cols-1 lg:grid-cols-2 items-center gap-[72px]">
          <div className="max-w-[480px]">
            <h2 className="text-h2 mb-[18px]">Developer Access</h2>
            <p className="text-subtitle text-[var(--color-ink-soft)] mb-6">
              As your business' capabilities expand, this final stack takes you even further by enabling you to do more and be more. Here, your developers establish and stay connected while utilizing our cognitive operating systems & all the digital channels in making innovations.
            </p>
            <div className="space-y-4">
              <div className="bg-white p-4 rounded-xl shadow-sm border border-[var(--color-line)]">
                <h4 className="font-bold text-[var(--color-brand-blue)] mb-1">iConnectedIT / UconnectedIT (API Platform)</h4>
                <p className="text-sm text-[var(--color-ink-soft)] mb-0">Simple and powerful APIs integrate messaging, voice & video, as well as authentication services for a secure user activity.</p>
              </div>
              <div className="bg-white p-4 rounded-xl shadow-sm border border-[var(--color-line)]">
                <h4 className="font-bold text-[var(--color-cyan)] mb-1">Community Service</h4>
                <p className="text-sm text-[var(--color-ink-soft)] mb-0">WorldFreeMessage - send text messages for free to anyone around the world via a web interface.</p>
              </div>
            </div>
          </div>
          <div className="relative min-h-[400px]" aria-hidden="true">
            <div className="absolute right-[20px] top-[34px] w-[460px] h-[380px] rounded-[42%_58%_52%_48%/45%_38%_62%_55%] bg-[linear-gradient(145deg,rgba(232,239,255,0.92),rgba(246,249,255,0.92))] drop-shadow-[0_30px_80px_rgba(59,91,168,0.12)]"></div>
            <div className="absolute inset-0 grid place-items-center">
              <div className="w-[300px] h-[300px] bg-white rounded-2xl shadow-[var(--shadow-sm)] border border-[var(--color-line)] p-6 flex flex-col gap-4">
                <div className="w-full bg-slate-900 rounded text-green-400 font-mono text-xs p-4 flex-grow relative overflow-hidden">
                  <div><span className="text-blue-400">const</span> api = <span className="text-yellow-300">new</span> StreamlineAPI();</div>
                  <div className="mt-2">api.connect(&#123;</div>
                  <div className="ml-4">channel: <span className="text-orange-300">'sms'</span>,</div>
                  <div className="ml-4">secure: <span className="text-purple-400">true</span></div>
                  <div>&#125;);</div>
                  <div className="mt-4"><span className="text-gray-500">// Ready to build</span></div>
                </div>
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
