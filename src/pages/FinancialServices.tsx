import IndustryTemplate from '../components/IndustryTemplate';

export default function FinancialServices() {
  const useCases = [
    {
      subIndustry: "Banking",
      benefit: "Improved Customer Service",
      useCase: "Allow clients to access information about their accounts and complete routine tasks via any channel."
    },
    {
      subIndustry: "Credit Card - Processors",
      benefit: "New Sales Channels",
      useCase: "Process credit purchases over an easily accessed mobile system."
    },
    {
      subIndustry: "Credit Card - Issuers",
      benefit: "Improved Accessibility",
      useCase: "Let prospective borrowers apply over the phone via our automated system."
    },
    {
      subIndustry: "Financial Service Consulting",
      benefit: "Improved Communications",
      useCase: "Reduce miscommunications and enforce compliance policies by communicating via different channels."
    },
    {
      subIndustry: "Loans - Auto",
      benefit: "Increased Conversion Rates",
      useCase: "Let prospective customers be alerted as they move through the auto loan process."
    },
    {
      subIndustry: "Loan - Mortgages",
      benefit: "More Qualified Buyers",
      useCase: "Make it convenient for home buyers to do business with you by letting them apply for a home loan through our automated system."
    }
  ];

  return (
    <IndustryTemplate 
      title="Financial Services"
      description="Personalize your database & gain your edge for your industry today."
      schemaDescription="Financial Services use cases. Improve customer service, open new sales channels, and increase conversion rates with Streamline."
      useCases={useCases}
    />
  );
}
