import IndustryTemplate from '../components/IndustryTemplate';

export default function ServiceIndustries() {
  const useCases = [
    {
      subIndustry: "Auto - Service & Repair",
      benefit: "Manage Appointment Scheduling",
      useCase: "Sending out appointment reminders to clients 24-72 hours in advance of their appointments reduces no-shows and our 2-way communication platform allows for rescheduling in the event of a conflict."
    },
    {
      subIndustry: "Beauty & Skincare",
      benefit: "Target Marketing to Increase Sales Instantly",
      useCase: "Send promotions to a subset of your clients based on specials you know they prefer and get instant appointments."
    },
    {
      subIndustry: "Cable & Television",
      benefit: "Retain Customers",
      useCase: "Resolving issues conveniently via text message can ease the frustration of customers that are considering services with the competition."
    },
    {
      subIndustry: "Child Care",
      benefit: "Direct Contact",
      useCase: "Text messaging and chat allows guardians to communicate quickly and discretely."
    },
    {
      subIndustry: "Health & Fitness",
      benefit: "Strengthen Relationships",
      useCase: "Retain your brand, while allowing personal trainers to be personal. Routing texts through your business' mainline allow client conversations and trends to be monitored."
    },
    {
      subIndustry: "Insurance - Health",
      benefit: "Reduced Customer Service Costs",
      useCase: "Use our Artificial Intelligence to allow patients to set up appointments seamlessly via any channel. This will free your call center operators to deal with more complex issues."
    },
    {
      subIndustry: "Insurance - Life",
      benefit: "Strengthen Relationships",
      useCase: "Let clients send you images of what they have in mind and send them pictures back on what you have in stock."
    },
    {
      subIndustry: "Insurance - Property & Casualty",
      benefit: "Increase Efficiency",
      useCase: "Sending pictures via MMS, email or chat provides the clarity that may not be expressed in voice calls."
    },
    {
      subIndustry: "Logistics - Dispatch and Delivery",
      benefit: "Proactive Dispatch and Delivery Solutions",
      useCase: "Get real-time alerts when delivery tasks have been completed by your drivers so that dispatch remains as proactive as possible."
    },
    {
      subIndustry: "Logistics - Tracking & Updates",
      benefit: "Real-Time Logistics Tracking",
      useCase: "Control and manage your driver's workflow by monitoring routes in real time using GPS tracking solutions."
    },
    {
      subIndustry: "Rental - Automobile",
      benefit: "Strengthen Relationships",
      useCase: "Allowing consumers to request rental cars, report issues or seek instructions via fast channels while on the go will appeal to your client's busy lifestyle, and the historical conversation log will mitigate communication errors."
    },
    {
      subIndustry: "Rental- Commercial Equipment",
      benefit: "Increases Equipment Rentals",
      useCase: "Ease of access and rapid responses will create repeat business from satisfied customers."
    },
    {
      subIndustry: "Self Storage",
      benefit: "Emergency Notification",
      useCase: "Broadcast a single message to all customers in the event of an emergency."
    },
    {
      subIndustry: "Utilities & Energy",
      benefit: "Enhanced Employee Communication Saves You Money",
      useCase: "On-site photos provide valuable field information to off-site managers and experts."
    }
  ];

  return (
    <IndustryTemplate 
      title="Service Industries"
      description="Personalize your database & gain your edge for your industry today."
      schemaDescription="Service Industries use cases. Manage appointment scheduling, reduce customer service costs, and increase efficiency with Streamline."
      useCases={useCases}
    />
  );
}
