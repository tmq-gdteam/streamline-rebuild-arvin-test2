import SEO from '../components/SEO';
import { Link } from 'react-router-dom';

export default function Blogs() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "Streamline Blog",
    "description": "How Streamline Works Through Our Blogs. Gain new insights for your business by getting exclusive access to our knowledge-filled articles."
  };

  const featuredBlog = {
    title: "Top Five Reasons For A Workflow To Fail & How To Avoid Them",
    date: "November 6, 2025",
    description: "Meta copy is used for styling ancillary content, usually in the details panel, that represents details about the content rather than the actual content itself.",
    path: "/blogs/top-five-reasons-for-a-workflow-to-fail-how-to-avoid-them.html"
  };

  const blogs = [
    {
      title: "The Hidden Cost of Disconnected Business Tools (And How to Fix It)",
      date: "August 14, 2025",
      path: "/blogs/the-hidden-cost-of-disconnected-business-tools.html"
    },
    {
      title: "Why Omnichannel Communication Is the Backbone of Modern Business",
      date: "May 29, 2025",
      path: "/blogs/why-omnichannel-communication-is-the-backbone-of-modern-business.html"
    },
    {
      title: "Financial Visibility: Turning Data Into Strategic Advantage",
      date: "January 23, 2025",
      path: "/blogs/financial-visibility-turning-data-into-strategic-advantage.html"
    },
    {
      title: "Why WORDS MATTER In Effective Business Communication",
      date: "December 12, 2024",
      path: "/blogs/why-words-matter-in-effective-business-communication.html"
    },
    {
      title: "Strategies On How To Achieve Our Ultimate Need For Our Voice",
      date: "October 17, 2024",
      path: "/blogs/strategies-on-how-to-achieve-our-ultimate-need-for-our-voice.html"
    },
    {
      title: "Easy Ways To Make Amazing Chatbots Faster",
      date: "January 25, 2024",
      path: "/blogs/easy-ways-to-make-amazing-chatbots-faster.html"
    },
    {
      title: "How To Turn Mistakes About Communicating Change Into Success",
      date: "November 30, 2023",
      path: "/blogs/how-to-turn-mistakes-about-communicating-change-into-success.html"
    },
    {
      title: "Five Of The Best Tactics In Improving Your CRM System",
      date: "July 12, 2023",
      path: "/blogs/five-of-the-best-tactics-in-improving-your-crm-system.html"
    },
    {
      title: "Fascinating Streamline Tactics That Can Help Your Business Grow",
      date: "February 2, 2023",
      path: "/blogs/fascinating-streamline-tactics-that-can-help-your-business-grow.html"
    },
    {
      title: "Lessons About Full Stack System You Need To Learn To Succeed",
      date: "June 15, 2022",
      path: "/blogs/lessons-about-full-stack-system-you-need-to-learn-to-succeed.html"
    },
    {
      title: "Why a Mobile App or Mobile Internet Is What Your Business Needs",
      date: "January 11, 2022",
      path: "/blogs/why-a-mobile-app-or-mobile-internet-is-what-your-business-needs.html"
    },
    {
      title: "Cracking The Code On Successful Data Flow",
      date: "February 9, 2021",
      path: "/blogs/cracking-the-code-on-successful-data-flow.html"
    },
    {
      title: "Your Key To Success: More Engaged Customers",
      date: "June 29, 2020",
      path: "/blogs/your-key-to-success-more-engaged-customers.html"
    },
    {
      title: "How To Grow Your Business With SMS Appointment Reminders",
      date: "January 22, 2020",
      path: "/blogs/how-to-grow-your-business-with-sms-appointment-reminders.html"
    }
  ];

  return (
    <>
      <SEO 
        title="Blog | Streamline"
        description="How Streamline Works Through Our Blogs. Gain new insights for your business by getting exclusive access to our knowledge-filled articles."
        schema={schema}
      />
      
      {/* Hero Section */}
      <section className="pt-[96px] pb-[40px] md:pt-[62px] text-center bg-white">
        <div className="container-fluid max-w-4xl mx-auto">
          <div className="text-eyebrow bg-slate-100 rounded-full px-3 py-1.5 inline-block mb-4">
            <span className="w-2 h-2 rounded-full bg-[var(--color-cyan)] inline-block mr-2"></span>
            Our Blog
          </div>
          <h1 className="text-display mb-6">How Streamline Works Through Our Blogs</h1>
          <p className="text-subtitle text-[var(--color-ink-soft)] mb-8">
            Gain new insights for your business by getting exclusive access to our knowledge-filled articles.
          </p>
        </div>
      </section>

      {/* Featured Blog */}
      <section className="pb-[76px]">
        <div className="container-fluid">
          <Link to={featuredBlog.path} className="block group">
            <div className="bg-slate-100 rounded-3xl overflow-hidden relative min-h-[400px] flex items-end">
               <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-10"></div>
               {/* Placeholder for background image */}
               <div className="absolute inset-0 bg-[var(--color-brand-blue)] group-hover:scale-105 transition-transform duration-500"></div>
               
               <div className="relative z-20 p-8 md:p-12 w-full max-w-3xl text-white">
                 <h2 className="text-3xl md:text-5xl font-bold mb-4 leading-tight group-hover:text-[var(--color-cyan)] transition-colors">{featuredBlog.title}</h2>
                 <div className="text-sm font-bold uppercase tracking-wider mb-4 opacity-80">{featuredBlog.date}</div>
                 <p className="text-lg opacity-90 mb-6">{featuredBlog.description}</p>
                 <div className="inline-flex items-center font-bold text-lg hover:underline decoration-2 underline-offset-4">
                   Read Article <span className="ml-2">→</span>
                 </div>
               </div>
            </div>
          </Link>
        </div>
      </section>

      {/* Search & Pagination Bar */}
      <section className="py-8 bg-slate-50 border-y border-slate-200">
        <div className="container-fluid flex flex-col md:flex-row justify-between items-center gap-6">
          <form className="relative w-full max-w-md" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="text" 
              placeholder="Search Article" 
              className="w-full pl-12 pr-4 py-3 rounded-full border border-slate-300 focus:outline-none focus:border-[var(--color-brand-blue)]"
              required 
            />
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-xl">🔍</span>
          </form>
          
          <div className="flex items-center gap-2 font-bold text-[var(--color-ink)]">
            <Link to="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-[var(--color-brand-blue)] text-white">1</Link>
            <Link to="#" className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-slate-200">2</Link>
            <Link to="#" className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-slate-200">3</Link>
            <Link to="#" className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-slate-200">4</Link>
            <Link to="#" className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-slate-200 text-xl">»</Link>
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="section-pad bg-white">
        <div className="container-fluid">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs.map((blog, index) => (
              <Link key={index} to={blog.path} className="group flex flex-col h-full bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className="h-48 bg-slate-100 flex items-center justify-center overflow-hidden">
                   <div className="w-full h-full bg-slate-200 group-hover:scale-105 transition-transform duration-500 flex items-center justify-center text-4xl">
                     📄
                   </div>
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <h4 className="text-xl font-bold text-[var(--color-ink)] mb-4 flex-grow group-hover:text-[var(--color-brand-blue)] transition-colors line-clamp-3">
                    {blog.title}
                  </h4>
                  <div className="text-sm font-bold text-[var(--color-ink-soft)] uppercase tracking-wider mb-6">
                    {blog.date}
                  </div>
                  <div className="inline-flex items-center font-bold text-[var(--color-brand-blue)] hover:underline decoration-2 underline-offset-4 mt-auto">
                    Read Article <span className="ml-2">→</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Guide to Action */}
      <section className="section-pad text-center bg-[var(--color-brand-blue)] text-white">
        <div className="container-narrow py-8 flex flex-col md:flex-row items-center justify-center gap-8">
          <h3 className="text-h2 text-white m-0">Discover what Streamline can offer</h3>
          <Link to="/signup.html" className="btn bg-white text-[var(--color-brand-blue)] hover:bg-slate-100 border-none">
            Join Our Community
          </Link>
        </div>
      </section>
    </>
  );
}
