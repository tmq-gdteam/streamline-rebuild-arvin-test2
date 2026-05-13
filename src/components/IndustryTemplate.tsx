import SEO from './SEO';
import { Link, useLocation } from 'react-router-dom';

const INDUSTRIES = [
  { path: '/retail-and-wholesale-sectors.html', label: 'Retail and Wholesale Sectors', icon: '🛍️' },
  { path: '/service-industries.html', label: 'Service Industries', icon: '🛠️' },
  { path: '/construction-contractors-real-estate.html', label: 'Construction, Contractors, Real Estate', icon: '🏗️' },
  { path: '/consulting-professional-services.html', label: 'Consulting, Professional Services', icon: '💼' },
  { path: '/food-service-and-hospitality-sectors.html', label: 'Food Service and Hospitality Sectors', icon: '🍽️' },
  { path: '/medical-and-healthcare-sector.html', label: 'Medical and Healthcare Sector', icon: '⚕️' },
  { path: '/financial-services.html', label: 'Financial Services', icon: '🏦' },
  { path: '/government-nonprofits-and-public-sectors.html', label: 'Government, Nonprofits and Public Sectors', icon: '🏛️' }
];

interface UseCaseItem {
  subIndustry: string;
  benefit: string;
  useCase: string;
}

interface IndustryTemplateProps {
  title: string;
  description?: string;
  schemaDescription: string;
  useCases: UseCaseItem[];
}

export default function IndustryTemplate({ title, description, schemaDescription, useCases }: IndustryTemplateProps) {
  const location = useLocation();

  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": title,
    "description": schemaDescription
  };

  return (
    <>
      <SEO 
        title={`${title} | Use Cases`}
        description={schemaDescription}
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
              Trusted by The World's Most Respected Brands. {description}
            </p>
          </div>
          
          <div className="relative min-h-[350px] lg:min-h-[420px]" aria-hidden="true">
             <div className="absolute inset-0 bg-slate-100 rounded-3xl border border-slate-200 overflow-hidden flex items-center justify-center">
                <span className="text-6xl">🏢</span>
             </div>
          </div>
        </div>
      </section>

      {/* 2. Build Interest (Sidebar + Content) */}
      <section className="section-pad bg-[var(--color-surface-blue)]">
        <div className="container-fluid grid grid-cols-1 lg:grid-cols-4 gap-8">
          
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl p-4 shadow-sm border border-[var(--color-line)] sticky top-[100px]">
              <h3 className="font-bold text-lg mb-4 px-4 text-[var(--color-ink)]">Industries</h3>
              <nav className="flex flex-col gap-1">
                {INDUSTRIES.map((industry) => {
                  const isActive = location.pathname === industry.path;
                  return (
                    <Link 
                      key={industry.path} 
                      to={industry.path}
                      className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-colors text-sm font-medium ${
                        isActive 
                          ? 'bg-[var(--color-brand-blue)] text-white' 
                          : 'text-[var(--color-ink-soft)] hover:bg-slate-50 hover:text-[var(--color-brand-blue)]'
                      }`}
                    >
                      <span className="text-lg">{industry.icon}</span>
                      {industry.label}
                    </Link>
                  );
                })}
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-sm border border-[var(--color-line)]">
              <h2 className="text-h2 mb-8 text-[var(--color-brand-blue)] border-b border-[var(--color-line)] pb-6">
                {title}
              </h2>
              
              <div className="flex flex-col gap-8">
                {useCases.map((uc, index) => (
                  <div key={index} className="flex flex-col gap-3">
                    <h3 className="text-xl font-bold text-[var(--color-ink)]">{uc.subIndustry}</h3>
                    <div className="bg-slate-50 rounded-xl p-5 border border-slate-100 flex flex-col gap-4">
                      <div className="flex items-start gap-3">
                        <span className="text-[var(--color-cyan)] mt-1">✓</span>
                        <div>
                          <span className="font-bold text-[var(--color-ink)] block mb-1">Benefit</span>
                          <span className="text-[var(--color-ink-soft)]">{uc.benefit}</span>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <span className="text-[var(--color-brand-blue)] mt-1">▶</span>
                        <div>
                          <span className="font-bold text-[var(--color-ink)] block mb-1">Use Case</span>
                          <span className="text-[var(--color-ink-soft)]">{uc.useCase}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 3. Guide to Action */}
      <section className="section-pad text-center">
        <div className="container-narrow">
          <h3 className="text-h2 mb-8">Achieve Results Fast to Lead Your Industry Today</h3>
          <Link to="/signup.html" className="btn btn-primary">
            Learn More With Streamline
          </Link>
        </div>
      </section>
    </>
  );
}
