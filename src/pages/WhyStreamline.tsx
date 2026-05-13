import SEO from '../components/SEO';
import { Link } from 'react-router-dom';

export default function WhyStreamline() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Why Streamline",
    "description": "Gain Quick, Efficient, & Immediate Results. All-Out Business Impact For Success."
  };

  const stories = [
    {
      name: "7-Eleven",
      quote: "Since we make it a point to give our customers the most convenient experience, Streamline truly helped us achieve that goal.",
      link: "/use-case.html"
    },
    {
      name: "The Home Depot",
      quote: "Thanks Streamline! We've seen amazing results already. Streamline is the most valuable business resource we have EVER encountered.",
      link: "/use-case.html"
    },
    {
      name: "Lincoln Properties",
      quote: "There has been a direct correlation between our new Streamline services and our increased occupancy rate.",
      link: "/use-case.html"
    },
    {
      name: "Waldorf Astoria Resorts",
      quote: "Streamline has updated our communication. We are now in the 21st century.",
      link: "/use-case.html"
    },
    {
      name: "Montgomery Medical",
      quote: "Streamline has significantly improved the communication between our patients and their doctors.",
      link: "/use-case.html"
    },
    {
      name: "Do It Best",
      quote: "Streamline has simplified the way we do business. We never knew that home improvement services can improve further if you have the best tool to assist you.",
      link: "/use-case.html"
    },
    {
      name: "Select",
      quote: "Tracking employees is not that hard anymore and communication with them and the customers improved a lot ever since I learned about Streamline.",
      link: "/use-case.html"
    }
  ];

  const benefits = [
    { title: "Modern, Intuitive Communication Channels", desc: "Efficient Interactive Customer Engagement", icon: "💬" },
    { title: "Intelligent Communication Operating System", desc: "Smart Communication System that translates over 50 languages", icon: "🧠" },
    { title: "Custom Designed Solutions", desc: "Tailored, highly personalized programs", icon: "⚙️" },
    { title: "Integrations", desc: "Single Unified Data Source", icon: "🔌" },
    { title: "Consultations", desc: "Multi-channel Consultation on Services", icon: "🤝" },
    { title: "Customer Support", desc: "Convenient Tracking & Customer Assistance", icon: "🎧" },
    { title: "Employee Assistance", desc: "Employee Assistance & Education", icon: "👥" },
    { title: "Loyalty Guide", desc: "Purchase Monitoring and Brand Advocacy Programs", icon: "⭐" },
    { title: "Pricing", desc: "Flexible Plans To Suit Your Needs", icon: "💰" }
  ];

  return (
    <>
      <SEO 
        title="Why Streamline"
        description="Gain Quick, Efficient, & Immediate Results. All-Out Business Impact For Success."
        schema={schema}
      />
      
      {/* 1. Attract Attention (Hero Section) */}
      <section className="pt-[96px] pb-[76px] overflow-hidden md:pt-[62px]">
        <div className="container-narrow text-center">
          <h1 className="text-display mb-6">Gain Quick, Efficient, & Immediate Results</h1>
          <p className="text-subtitle text-[var(--color-ink-soft)] max-w-[800px] mx-auto mb-8">
            All-Out Business Impact For Success. Explore why industry leaders trust Streamline for their communication needs.
          </p>
        </div>
      </section>

      {/* 2. Build Interest (Stories) */}
      <section className="section-pad bg-[var(--color-surface-blue)]">
        <div className="container-narrow text-center mb-16">
          <h2 className="text-h2 mb-4">Streamline Stories</h2>
          <p className="text-subtitle text-[var(--color-ink-soft)]">
            Client stories inspired by Streamline to transform their business through an all-around platforms solution.
          </p>
        </div>

        <div className="container-fluid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Featured Story */}
          <div className="md:col-span-2 lg:col-span-3 bg-[var(--color-brand-blue)] rounded-2xl p-8 text-white flex flex-col md:flex-row items-center gap-8 mb-4 shadow-xl">
            <div className="flex-1">
              <h3 className="text-3xl font-bold mb-4">{stories[0].name}</h3>
              <p className="text-xl opacity-90 italic mb-6">"{stories[0].quote}"</p>
              <Link to={stories[0].link} className="inline-block bg-white text-[var(--color-brand-blue)] px-6 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors">
                Read Story
              </Link>
            </div>
            <div className="w-full md:w-1/3 aspect-video bg-white/10 rounded-xl grid place-items-center border border-white/20">
              <span className="text-6xl font-black opacity-50">7E</span>
            </div>
          </div>

          {/* Other Stories */}
          {stories.slice(1).map((story, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl border border-[var(--color-line)] shadow-sm hover:shadow-md transition-shadow flex flex-col">
              <div className="w-12 h-12 bg-[#eef4ff] text-[var(--color-brand-blue)] rounded-xl flex items-center justify-center font-bold mb-6">
                {story.name.charAt(0)}
              </div>
              <h4 className="text-xl font-bold mb-3">{story.name}</h4>
              <p className="text-[var(--color-ink-soft)] italic flex-grow mb-6">"{story.quote}"</p>
              <Link to={story.link} className="text-[var(--color-brand-blue)] font-bold flex items-center gap-2 group">
                Read this story
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* 2. Build Interest (Benefits Grid) */}
      <section className="section-pad">
        <div className="container-narrow text-center mb-16">
          <h2 className="text-h2 mb-4">Saving you money, time, and quite a few grey hairs!</h2>
        </div>

        <div className="container-fluid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex flex-col items-center text-center p-6">
              <div className="text-5xl mb-4">{benefit.icon}</div>
              <h6 className="font-bold text-lg mb-2 text-[var(--color-ink)]">{benefit.title}</h6>
              <p className="text-[var(--color-ink-soft)]">{benefit.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Guide to Action */}
      <section className="section-pad bg-[var(--color-brand-blue)] text-white text-center">
        <div className="container-narrow">
          <h3 className="text-h2 mb-8 text-white">Streamline More, Worry Less</h3>
          <Link to="/signup.html" className="btn bg-white text-[var(--color-brand-blue)] hover:bg-gray-100">
            Experience Streamline Now
          </Link>
        </div>
      </section>
    </>
  );
}
