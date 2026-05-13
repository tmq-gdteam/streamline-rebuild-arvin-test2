import IndustryTemplate from '../components/IndustryTemplate';

export default function MedicalHealthcare() {
  const useCases = [
    {
      subIndustry: "Doctors - Specialist",
      benefit: "Doctors - Spend More Time with Patients and Less Time on the Phone",
      useCase: "Increase workflow efficiency by allowing customers to contact your office quickly and conveniently via text messaging."
    },
    {
      subIndustry: "Doctors - Optometrists",
      benefit: "Increased Sales",
      useCase: "Coordinate automatic reminders for scheduling routine check-ups or reordering corrective supplies."
    },
    {
      subIndustry: "Doctors - Dentists",
      benefit: "Get New Patients",
      useCase: "Everyone is looking for a good dentist. Market to your most loyal clients with referral based incentive programs."
    },
    {
      subIndustry: "Drug Manufacturers",
      benefit: "Centralize Public Relations Centers and Reduce Costs",
      useCase: "Auto translation allows the public to ask questions in their native tongue and your customer service representatives to get the message in the language of choice, thus reducing costs by centralizing resources."
    },
    {
      subIndustry: "Hospitals",
      benefit: "Keep your Doctors, Nurses, and Patients Happy with a Seamless Communication System",
      useCase: "Our telecommunications solution for hospitals lets Doctors spend more time with their patients and less time with patient-related administrative tasks by properly routing patient concerns to the correct department."
    },
    {
      subIndustry: "Medical Supply Companies",
      benefit: "Create End to End Supply Chain Visibility",
      useCase: "Ensure proper use of your medical devices by giving healthcare providers across the globe immediate access to automated responses to commonly asked questions as well as questions which require the attention of an agent via any channel."
    },
    {
      subIndustry: "Pharmacies",
      benefit: "Enhance Patient Experience",
      useCase: "Automate notifications when your patients when their prescriptions are ready to reduce or eliminate wait times."
    }
  ];

  return (
    <IndustryTemplate 
      title="Medical and Healthcare Sector"
      description="Personalize your database & gain your edge for your industry today."
      schemaDescription="Medical and Healthcare Sector use cases. Increase workflow efficiency, enhance patient experience, and reduce costs with Streamline."
      useCases={useCases}
    />
  );
}
