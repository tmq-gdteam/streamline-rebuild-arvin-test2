import IndustryTemplate from '../components/IndustryTemplate';

export default function RetailWholesale() {
  const useCases = [
    {
      subIndustry: "Auto-Dealerships",
      benefit: "Maintain Brand Consistency",
      useCase: "Allow employees to move the conversation to a personal platform, their mobile phones, without leaving your business' proprietary phone system. Using your business phone number keeps the brand consistent and allows your sales managers to track conversations for patterns and efficiencies."
    },
    {
      subIndustry: "Auto-Parts Sales",
      benefit: "Reduce Miscommunications",
      useCase: "Spend less time trying to identify the correct parts or vehicle models and more time with customers by using MMS – a picture is worth a thousand words."
    },
    {
      subIndustry: "Distributors - Equipment",
      benefit: "Streamline Fleet Tracking",
      useCase: "Keep your company running smoothly by giving your customers real-time delivery updates and keeping your drivers on track."
    },
    {
      subIndustry: "Distributors - Parts",
      benefit: "Reduced Operational Costs",
      useCase: "Give customers access to real-time quotes, while also using images to expedite cutting the time it takes to get it to them."
    },
    {
      subIndustry: "Retail - Clothing",
      benefit: "Sales Growth",
      useCase: "Publicize special promotions and respond to clients queries with images of items in stock or on sale."
    },
    {
      subIndustry: "Retail - Electronics",
      benefit: "More Sales Conversions",
      useCase: "Keep customers engaged by eliminating hold times while you search inventories."
    },
    {
      subIndustry: "Retail - Furniture",
      benefit: "Better Customer Engagement = Increased Customer Satisfaction",
      useCase: "Customers looking for furniture are usually looking for items in particular dimensions, color, and design. Let them send you images of what they have in mind and send them pictures back on what you have in stock."
    },
    {
      subIndustry: "Retail - Goods",
      benefit: "Increased Revenues",
      useCase: "Many times customers left to wait on hold looking for a particular item you may carry hang up and call your nearest competitor. Next time, let them text you so that they can be heard and your store can reap the benefits of increased revenues."
    },
    {
      subIndustry: "Retail - National Chains",
      benefit: "Greater Customer Loyalty",
      useCase: "Automate query responses that direct customers to the nearest store that has the desired item in stock."
    }
  ];

  return (
    <IndustryTemplate 
      title="Retail and Wholesale Sectors"
      description="Personalize your database & gain your edge for your industry today."
      schemaDescription="Retail and Wholesale Sectors use cases. Maintain brand consistency, increase revenues, and streamline fleet tracking with Streamline."
      useCases={useCases}
    />
  );
}
