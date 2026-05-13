import IndustryTemplate from '../components/IndustryTemplate';

export default function GovernmentNonprofits() {
  const useCases = [
    {
      subIndustry: "Associations - Events",
      benefit: "Increase Event Attendance",
      useCase: "Send invites to your members and encourage them to forward to friends who may also be interested in attending the event. Two-way conversations allow members to get answers to questions that may influence theirs or their friend's decision to attend."
    },
    {
      subIndustry: "Associations - Member Registrations",
      benefit: "Increase Member Registration",
      useCase: "Make it easy to register to become a member or after an event by sending a short code registration to people who are interested in becoming members of your association."
    },
    {
      subIndustry: "Associations - Member Updates",
      benefit: "Increase Member Involvement",
      useCase: "Group broadcast keeps members abreast of association news and updates, which allows your members to be proactive in its initiatives and keep lines of communication open and flowing amongst members."
    },
    {
      subIndustry: "Chambers of Commerce",
      benefit: "Improved Communications",
      useCase: "Send members alerts regarding upcoming meets, dues, or community events."
    },
    {
      subIndustry: "Education - Schools",
      benefit: "Stop Bullying",
      useCase: "Let students disclose real-time occurrences of bullying discreetly and quickly through text messaging so that harassment can stop as soon as possible."
    },
    {
      subIndustry: "Education - Universities & Higher Education",
      benefit: "A Safer Campus",
      useCase: "Notify faculty and students of emergency situations via a platform that is more practical than a phone call and more accessible than an email."
    },
    {
      subIndustry: "Nonprofits - Donations",
      benefit: "Increase Donations Significantly",
      useCase: "Allowing attendees to donate conveniently and quickly to your already existing number in any amount they want increases the likelihood and the number of donations coming in for the cause."
    },
    {
      subIndustry: "Non-Profits - Volunteer Drives",
      benefit: "Volunteer Coordination and Organization",
      useCase: "Use group messaging to provide coordinating instructions to a group of volunteers."
    },
    {
      subIndustry: "Gov. County - Animal Control",
      benefit: "Save Time and Reduce Costs",
      useCase: "Track and monitor sightings of animals in order to reduce the amount of time needed to regain control of the situation."
    },
    {
      subIndustry: "Gov. County - Non-Emergency Police",
      benefit: "Report Suspicious Activity",
      useCase: "Many times citizens will not report activity they see as suspicious for fear of wasting the police department's time. Enabling your non-emergency line to become text capable allows citizens to report activity discreetly and anonymously. Two-way dialogue qualifies whether or not the activity reports should be acted on."
    },
    {
      subIndustry: "Gov. State - Child Protective Services",
      benefit: "Instant Amber Alerts to Entire Communities",
      useCase: "Alert the citizens of communities when a child is in danger by using a fast and fluid channel."
    },
    {
      subIndustry: "Gov. State - Corporation Commission's",
      benefit: "Collect Fees and Penalties",
      useCase: "Get in touch with business owners to get needed documentation in order and to collect fees for registrations that owners may be unaware of owing."
    },
    {
      subIndustry: "Federal - DHS Suspicious Activity Report",
      benefit: "Reduce Terrorist Activities Before they Happen",
      useCase: "DHS Suspicious Activity Reports aid in stopping terrorist activities before they happen. Streamline makes sending these reports easily and does it in real time so that investigators and the like can act on the reports before it is too late."
    },
    {
      subIndustry: "Federal - Social Security Administration",
      benefit: "Increase Collection Efforts",
      useCase: "Let business owners know when they are being penalized and for what so that issues can be resolved in a more timely fashion."
    },
    {
      subIndustry: "Federal - Department of Homeland Security",
      benefit: "Improved Communications",
      useCase: "Allow citizens to report suspicious activity over a quick and silent platform."
    }
  ];

  return (
    <IndustryTemplate 
      title="Government, Nonprofits and Public Sectors"
      description="Personalize your database & gain your edge for your industry today."
      schemaDescription="Government, Nonprofits and Public Sectors use cases. Increase event attendance, volunteer coordination, and citizen communications with Streamline."
      useCases={useCases}
    />
  );
}
