import IndustryTemplate from '../components/IndustryTemplate';

export default function ConstructionRealEstate() {
  const useCases = [
    {
      subIndustry: "Construction Services",
      benefit: "Greater Customer Loyalty",
      useCase: "An ongoing log allows clients to track progress without the burden of regular phone calls."
    },
    {
      subIndustry: "Contractor - Electrical",
      benefit: "Enhanced Employee Communications",
      useCase: "Your electrician is on the job site and needs help. On-site photos provide valuable field information to off-site managers and experts. He spends minutes fixing the problem instead of hours."
    },
    {
      subIndustry: "Contractor - Heating & Air Conditioning",
      benefit: "Employee Time Management Solutions",
      useCase: "Real-time GPS Tracking allows you to dispatch employees to geographically appropriate jobs."
    },
    {
      subIndustry: "Contractor - Plumbing",
      benefit: "Expedited Emergency Resolution",
      useCase: "Connect customers automatically and instantaneously to plumbers working holidays for expedited service requests during emergencies."
    },
    {
      subIndustry: "Contractor - Landscaping",
      benefit: "Clearer Communication",
      useCase: "Allow customers to convey design ideas through photo messaging."
    },
    {
      subIndustry: "Real Estate - Residential - Sales",
      benefit: "Improved Client Relations",
      useCase: "Transition from voice to text without leaving your firm's proprietary phone line."
    },
    {
      subIndustry: "Real Estate - Residential - Management",
      benefit: "Reduce Operating Costs",
      useCase: "Allow your tenants to engage with you quickly and conveniently about maintenance issues before minor issues become major headaches."
    },
    {
      subIndustry: "Real Estate - Commercial - Leasing",
      benefit: "Reduce Commercial Vacancies by Qualifying Prospective Tenants",
      useCase: "Qualify prospective tenants by making basic information about the premises available to persons looking to lease commercial spaces automatically using artificial intelligence mechanisms."
    },
    {
      subIndustry: "RE Services - Facilities Management",
      benefit: "Reduced Labor Costs",
      useCase: "Use videos of maintenance issues to expedite evaluations and manage the deployment of resources."
    },
    {
      subIndustry: "RE Service - Home Owner Associations",
      benefit: "Improved Internal Communications",
      useCase: "Allow members to quickly and conveniently convey property upkeep issues."
    },
    {
      subIndustry: "Utilities & Energy",
      benefit: "Enhanced Employee Communication Saves You Money",
      useCase: "On-site photos provide valuable field information to off-site managers and experts."
    }
  ];

  return (
    <IndustryTemplate 
      title="Construction, Contractors, Real Estate"
      description="Personalize your database & gain your edge for your industry today."
      schemaDescription="Construction, Contractors, and Real Estate use cases. Improve client relations, reduce operating costs, and enhance employee communications with Streamline."
      useCases={useCases}
    />
  );
}
