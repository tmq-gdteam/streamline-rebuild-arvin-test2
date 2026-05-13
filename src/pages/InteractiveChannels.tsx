import SEO from '../components/SEO';
import CustomerAndIntegrations from '../components/CustomerAndIntegrations';

export default function InteractiveChannels() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Streamline Solutions",
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "All",
    "description": "Streamline, Optimize, Resolve. Drive Effective Solutions For Your Business Needs"
  };

  const segments = [
    {
      title: "Financial Management",
      desc: "Confidently manage your business' finances and feel secured upon implementing the strategies that works for you.",
      benefits: [
        "Efficiently communicate what your business stands for",
        "Obtain more precise data on customer value",
        "Respond rapidly to customer's needs and variations in the market",
        "Maximize employee productivity",
        "Gain a competitive advantage for your business",
        "Test, demo or run analytics using no capital costs",
        "Help customers create better financial choices & manage their investments",
        "Accelerate delivery and optimize the quality of your products with automation",
        "Get employees and customers to recognize your brand with enhanced user experience",
        "Generate data, runtimes, and workloads instantly"
      ],
      imgPlaceholder: "FM",
      color: "bg-[var(--color-cyan)]"
    },
    {
      title: "Choosing The Right Tool",
      desc: "Get ahead of the competition by integrating everything while implementing tools and modern techniques for your business.",
      benefits: [
        "Lessen human error",
        "Beat the risks brought about by manual processes",
        "Maximize employee productivity and morale",
        "Save valuable staff time to concentrate on value-added activities",
        "Strengthen operating efficiencies that will boost profitability",
        "Gain advantage over competitors that have not automated their processes",
        "Map out process workflows based on employee interviews",
        "Assess information accuracy and compliance exposure",
        "Recognize existing applications and data interdependencies",
        "Perform cost/benefits analysis and identify automation opportunities"
      ],
      imgPlaceholder: "RT",
      color: "bg-[var(--color-purple)]"
    },
    {
      title: "Communication Within Teams and Customers",
      desc: "Let your teams work in unison to achieve the same goal for your business & allow your customers to reach you whenever they want to.",
      benefits: [
        "Agreement on Strategy",
        "Full understanding of Buyer Behavior",
        "Marketing Support on Sales Strategies",
        "Closing the Chasm On Leads",
        "Increase in Sales",
        "Employee Motivation",
        "Successful Financial Management",
        "Successful Decision Making",
        "Strengthened Supplier Relationship",
        "Fast resolution of issues and concerns"
      ],
      imgPlaceholder: "CT",
      color: "bg-[var(--color-green)]"
    },
    {
      title: "Brand Awareness & Customer Loyalty",
      desc: "Establish a solid business foundation with confidence in using the right tools for every aspect of your business.",
      benefits: [
        "Increased Business Growth",
        "Successful Business Strategies",
        "Satisfied Shareholders",
        "Customer Satisfaction",
        "Reduced Employee Turnover",
        "Increased Efficiency",
        "Customer Conversion and Retention",
        "Reduced Costs",
        "Seamless Communication",
        "Constant Success Promotion"
      ],
      imgPlaceholder: "BA",
      color: "bg-[#ffd700]"
    },
    {
      title: "Productivity and Quality",
      desc: "Gain access to various channels & utilize effective automated solutions to enhance the quality of your products & services.",
      benefits: [
        "Boost product quality by using ALICE",
        "Consistency and precision in every output",
        "Speedy processing rates resulting to more production",
        "Enhanced workplace safety & immediate issue resolution",
        "More financial savings with returning customers",
        "Conduct effective reward programs for satisfied customers",
        "Manage activities across different retail channels",
        "Translate ideas into actions for the product and brand",
        "Minimize complexities with streamlined communication",
        "Comprehensive data set on consumer and competitive behavior"
      ],
      imgPlaceholder: "PQ",
      color: "bg-[#ff6b6b]"
    },
    {
      title: "Security",
      desc: "Increase your defenses and reduce risks for security with Streamline.",
      benefits: [
        "Quick access to innovation",
        "Easy to use",
        "Stay updated on the latest technology & solutions",
        "Inspection, diffusion and sweeping of DDoS attacks",
        "High Availability",
        "Data Security",
        "Regulatory Compliance",
        "Secured data exchange",
        "Easy to manage authentication services",
        "Mask phone numbers to protect from hackers & unknown users"
      ],
      imgPlaceholder: "SC",
      color: "bg-[var(--color-brand-blue)]"
    }
  ];

  return (
    <>
      <SEO 
        title="Interactive Channels | Solutions"
        description="Streamline, Optimize, Resolve. Drive Effective Solutions For Your Business Needs."
        schema={schema}
      />
      
      {/* 1. Attract Attention (Hero Section) */}
      <section className="pt-[96px] pb-[76px] overflow-hidden md:pt-[62px]">
        <div className="container-fluid grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_minmax(420px,1.05fr)] items-center gap-[76px] lg:gap-[36px]">
          <div className="max-w-[650px]">
            <div className="text-eyebrow bg-[#eef4ff] rounded-full px-3 py-1.5">
              <span className="w-2 h-2 rounded-full bg-[var(--color-cyan)] block"></span>
              Solutions
            </div>
            <h1 className="text-display mb-6">Streamline, Optimize, Resolve</h1>
            <p className="text-subtitle text-[var(--color-ink-soft)] max-w-[600px] mb-8">
              Drive Effective Solutions For Your Business' Needs. Discover the most innovative approach to craft, develop and organize your enterprise with Streamline.
            </p>
            <div className="flex flex-wrap gap-4 mb-6">
              <a href="/signup.html" className="btn btn-primary w-full sm:w-auto">Start Free Trial</a>
              <a href="/demo.html" className="btn btn-secondary w-full sm:w-auto">
                <span className="text-[var(--color-brand-blue)]">▶</span> See it in action
              </a>
            </div>
          </div>
          
          <div className="relative min-h-[350px] lg:min-h-[520px] scale-[0.78] lg:scale-100 origin-top mb-[-60px] lg:mb-0" aria-hidden="true">
            <div className="absolute right-0 top-[20px] w-[520px] h-[430px] rounded-[42%_58%_52%_48%/45%_38%_62%_55%] bg-[linear-gradient(145deg,rgba(232,239,255,0.92),rgba(246,249,255,0.92))] drop-shadow-[0_30px_80px_rgba(59,91,168,0.12)]"></div>
            <div className="absolute inset-0 grid place-items-center">
               <div className="w-[280px] h-[340px] border-[8px] border-white rounded-[32px] bg-white shadow-[0_24px_70px_rgba(18,47,105,0.14)] relative p-4 flex flex-col gap-3">
                  <div className="w-full h-12 bg-[#f0f4f8] rounded-xl"></div>
                  <div className="w-full h-12 bg-[#f0f4f8] rounded-xl flex items-center px-3 gap-2">
                    <div className="w-6 h-6 rounded-full bg-[var(--color-cyan)]"></div>
                    <div className="w-20 h-2 bg-gray-200 rounded-full"></div>
                  </div>
                  <div className="w-full h-24 bg-[var(--color-brand-blue)] rounded-xl mt-auto opacity-10"></div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Build Interest (Feature Content Sections) */}
      <section className="section-pad bg-[var(--color-surface-blue)]">
        <div className="container-narrow text-center mb-16">
          <p className="text-eyebrow">SIX CHALLENGE SEGMENTS</p>
          <h2 className="text-h2 mb-4">Explore your best options in resolving vital areas of your business</h2>
          <p className="text-subtitle text-[var(--color-ink-soft)]">
            Get the freshest ideas on how to deal with common enterprise problems and explore how much you and your customers can gain from learning new techniques.
          </p>
        </div>

        <div className="container-fluid flex flex-col gap-24">
          {segments.map((segment, index) => (
            <div key={index} className={`grid grid-cols-1 lg:grid-cols-2 items-center gap-[72px] ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
              <div className={`relative min-h-[400px] ${index % 2 !== 0 ? 'lg:order-2' : ''}`} aria-hidden="true">
                <div className="absolute inset-0 grid place-items-center">
                  <div className="w-[300px] h-[300px] rounded-full bg-white shadow-[var(--shadow-sm)] border border-[rgba(231,237,248,0.92)] grid place-items-center relative overflow-hidden">
                    <div className={`absolute -inset-10 opacity-10 ${segment.color} blur-[30px]`}></div>
                    <span className="text-5xl font-bold text-[var(--color-brand-blue)]">{segment.imgPlaceholder}</span>
                  </div>
                </div>
              </div>
              <div className={`max-w-[500px] ${index % 2 !== 0 ? 'lg:order-1' : ''}`}>
                <h3 className="text-h3 mb-[18px]">{segment.title}</h3>
                <p className="text-subtitle text-[var(--color-ink-soft)] mb-6">
                  {segment.desc}
                </p>
                <div>
                  <h4 className="font-bold text-[var(--color-brand-blue)] mb-3 text-sm tracking-wider uppercase">Top 10 Benefits:</h4>
                  <ul className="space-y-2 text-[var(--color-ink-soft)] text-sm">
                    {segment.benefits.slice(0, 5).map((benefit, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-[var(--color-cyan)] mt-0.5">✓</span>
                        <span>{benefit}</span>
                      </li>
                    ))}
                    {/* Only showing first 5 for visual cleanliness, user can expand later if needed */}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Guide to Action */}
      <CustomerAndIntegrations />
    </>
  );
}
