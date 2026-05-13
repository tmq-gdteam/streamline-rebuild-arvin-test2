import IndustryTemplate from '../components/IndustryTemplate';

export default function FoodServiceHospitality() {
  const useCases = [
    {
      subIndustry: "Food - Distributors",
      benefit: "Improved Communications",
      useCase: "Allow customers to quickly and conveniently adjust orders on a recorded platform. Having documentation of the change in writing helps to reduce costly miscommunications."
    },
    {
      subIndustry: "Fast Food",
      benefit: "Increased Revenues",
      useCase: "Imagine your customers being able to text their order in, pay for it and be alerted when it is ready for pick up without ever stepping foot in a line. Happy customers and more orders per second mean more revenues."
    },
    {
      subIndustry: "Restaurants",
      benefit: "Be the Go-to Place for Take-out and /or Delivery in your neighborhood",
      useCase: "Do you have customers that always order the same thing almost every time they order? Give those and others the ability to order by text and eliminate lengthy hold times and having to repeat themselves."
    },
    {
      subIndustry: "Hospitality",
      benefit: "Increased Usage Rate",
      useCase: "Speak your client's language both figuratively and literally by allowing patrons to communicate requests over the channel they prefer and in their native language. Did you know that we have an auto-translation feature which can translate 21 different languages?"
    }
  ];

  return (
    <IndustryTemplate 
      title="Food Service and Hospitality Sectors"
      description="Personalize your database & gain your edge for your industry today."
      schemaDescription="Food Service and Hospitality use cases. Improve communications, increase revenues, and enhance the guest experience with Streamline."
      useCases={useCases}
    />
  );
}
