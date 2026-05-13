import SEO from '../components/SEO';
import { Link } from 'react-router-dom';

export default function UseCases() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Use Cases",
    "description": "See why more businesses turn to Streamline for a complete communication and integrations solution. Personalize your database & gain your edge for your industry today."
  };

  const industries = [
    { path: '/retail-and-wholesale-sectors.html', label: 'Retail and Wholesale Sectors', icon: '🛍️' },
    { path: '/service-industries.html', label: 'Service Industries', icon: '🛠️' },
    { path: '/construction-contractors-real-estate.html', label: 'Construction, Contractors,\nReal Estate', icon: '🏗️' },
    { path: '/consulting-professional-services.html', label: 'Consulting, Professional Services', icon: '💼' },
    { path: '/food-service-and-hospitality-sectors.html', label: 'Food Service and Hospitality Sectors', icon: '🍽️' },
    { path: '/medical-and-healthcare-sector.html', label: 'Medical and Healthcare Sector', icon: '⚕️' },
    { path: '/financial-services.html', label: 'Financial Services', icon: '🏦' },
    { path: '/government-nonprofits-and-public-sectors.html', label: 'Government, Nonprofits and\nPublic Sectors', icon: '🏛️' }
  ];

  return (
    <>
      <SEO 
        title="Use Cases | Streamline"
        description="See why more businesses turn to Streamline for a complete communication and integrations solution."
        schema={schema}
      />
      
      {/* 1. Attract Attention (Hero Section) */}
      <section className="pt-[96px] pb-[76px] overflow-hidden md:pt-[62px]">
        <div className="container-fluid grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_minmax(420px,1.05fr)] items-center gap-[76px] lg:gap-[36px]">
          <div className="max-w-[650px]">
            <div className="text-eyebrow bg-[#eef4ff] rounded-full px-3 py-1.5 inline-block mb-4">
              <span className="w-2 h-2 rounded-full bg-[var(--color-cyan)] inline-block mr-2"></span>
              Use Cases
            </div>
            <h1 className="text-display mb-6">Acquire, Innovate, & Integrate Effectively</h1>
            <p className="text-subtitle text-[var(--color-ink-soft)] max-w-[600px] mb-8">
              Trusted by The World's Most Respected Brands.
            </p>
          </div>
          
          <div className="relative min-h-[350px] lg:min-h-[420px]" aria-hidden="true">
             <div className="absolute inset-0 bg-slate-100 rounded-3xl border border-slate-200 overflow-hidden flex items-center justify-center">
                <span className="text-6xl">📊</span>
             </div>
          </div>
        </div>
      </section>

      {/* 2. Build Interest (Benefits) */}
      <section className="section-pad bg-[var(--color-surface-blue)]">
        <div className="container-fluid">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-h2 mb-4">See why more businesses turn to Streamline for a complete communication and integrations solution</h2>
            <p className="text-subtitle text-[var(--color-ink-soft)]">
              Personalize your database & gain your edge for your industry today:
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-sm border border-[var(--color-line)]">
              <ul className="flex flex-col gap-6">
                <li className="flex items-start gap-4">
                  <span className="text-2xl mt-1">💰</span>
                  <span className="text-lg text-[var(--color-ink)] font-medium">Get cost savings over traditional voice communication platforms</span>
                </li>
                <li className="flex items-start gap-4">
                  <span className="text-2xl mt-1">🔄</span>
                  <span className="text-lg text-[var(--color-ink)] font-medium">Enhanced customer experience via direct information exchange</span>
                </li>
                <li className="flex items-start gap-4">
                  <span className="text-2xl mt-1">😊</span>
                  <span className="text-lg text-[var(--color-ink)] font-medium">Better employee morale resulting from process enhancements</span>
                </li>
                <li className="flex items-start gap-4">
                  <span className="text-2xl mt-1">📈</span>
                  <span className="text-lg text-[var(--color-ink)] font-medium">Increased sales due to unlimited accessibility and engagement</span>
                </li>
                <li className="flex items-start gap-4">
                  <span className="text-2xl mt-1">🤝</span>
                  <span className="text-lg text-[var(--color-ink)] font-medium">Improved customer satisfaction and loyalty through continued communication</span>
                </li>
              </ul>
            </div>
            
            <p className="mt-8 text-center text-[var(--color-ink-soft)] max-w-3xl mx-auto text-lg leading-relaxed">
              Customer satisfaction, internal logistics, operating plans, process improvements, and revenue streams are some of the many benefits that result from the right engagement strategies via the multichannel communication platform.
            </p>
          </div>
        </div>
      </section>

      {/* 3. Industry Grid */}
      <section className="section-pad">
        <div className="container-fluid">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-subtitle text-[var(--color-ink-soft)]">
              Below are several ways on how to utilize Streamline, its benefits, and its specific applications under each industry:
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {industries.map((industry) => (
              <div key={industry.path} className="flex flex-col h-full bg-white rounded-2xl p-8 border border-[var(--color-line)] shadow-sm hover:shadow-md transition-shadow">
                <div className="text-5xl mb-6">{industry.icon}</div>
                <h4 className="text-xl font-bold text-[var(--color-ink)] mb-6 flex-grow whitespace-pre-line leading-tight">
                  {industry.label}
                </h4>
                <Link to={industry.path} className="btn btn-secondary w-full text-center">
                  Read
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Guide to Action */}
      <section className="section-pad text-center bg-[var(--color-brand-blue)] text-white">
        <div className="container-narrow py-8">
          <h3 className="text-h2 text-white mb-8">Achieve Results Fast to Lead Your Industry Today</h3>
          <Link to="/signup.html" className="btn bg-white text-[var(--color-brand-blue)] hover:bg-slate-100">
            Learn More With Streamline
          </Link>
        </div>
      </section>
    </>
  );
}
