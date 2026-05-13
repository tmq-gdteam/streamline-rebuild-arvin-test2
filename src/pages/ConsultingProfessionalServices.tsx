import IndustryTemplate from '../components/IndustryTemplate';

export default function ConsultingProfessionalServices() {
  const useCases = [
    {
      subIndustry: "Accounting Firms",
      benefit: "Compliance Monitoring",
      useCase: "Move employee-client text messaging from their personal lines to the firm's proprietary lines."
    },
    {
      subIndustry: "Business Consulting",
      benefit: "Improved Client Relations",
      useCase: "Your business consulting clients expect a personal relationship with their consultants. Give it to them with Streamline while maintaining your firm's image and brand."
    },
    {
      subIndustry: "Law Firms",
      benefit: "Event and Payment Reminders",
      useCase: "Does your client need to be reminded to provide a set of documents or sent a gentle payment reminder? Now you can do this with two dozen keystrokes and one touch of a button."
    },
    {
      subIndustry: "Technology - Consulting",
      benefit: "Be Ahead of the Technological Curve",
      useCase: "Let clients connect with you in the most technologically advanced means available and in doing so you will also become more accessible."
    },
    {
      subIndustry: "Technology - Development",
      benefit: "Be Ahead of the Technological Curve",
      useCase: "Let clients connect with you in the most technologically advanced means available and in doing so you will also become more accessible."
    }
  ];

  return (
    <IndustryTemplate 
      title="Consulting, Professional Services"
      description="Personalize your database & gain your edge for your industry today."
      schemaDescription="Consulting and Professional Services use cases. Improve client relations and maintain compliance with Streamline."
      useCases={useCases}
    />
  );
}
