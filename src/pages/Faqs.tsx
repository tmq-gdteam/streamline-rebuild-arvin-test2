import { useState } from 'react';
import SEO from '../components/SEO';
import { Link } from 'react-router-dom';

export default function Faqs() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What exactly is Streamline?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Streamline is a Cognitive Interaction Operating System that unifies messaging, voice, video, social, and workflow automation into one centralized platform. It helps businesses manage communication, collaboration, and operations without juggling multiple disconnected tools."
        }
      }
      // Schema could be expanded, but we'll keep it concise here
    ]
  };

  const faqs = [
    {
      question: "What exactly is Streamline?",
      answer: "Streamline is a Cognitive Interaction Operating System that unifies messaging, voice, video, social, and workflow automation into one centralized platform. It helps businesses manage communication, collaboration, and operations without juggling multiple disconnected tools."
    },
    {
      question: "How is Streamline different from traditional communication tools?",
      answer: "Traditional tools focus on one channel (just messaging or just VoIP). Streamline connects every interaction - across voice, SMS, video, social, and internal workflows - into one intelligent system powered by automation and cognitive logic. It's not just communication. It's operational infrastructure."
    },
    {
      question: "Who is Streamline built for?",
      answer: "Streamline supports:\n• Sales teams\n• Logistics & operations\n• Marketing departments\n• Customer support teams\n• Financial management teams\n• Enterprise organizations\n• Growing SMBs\n\nIf your business relies on communication to operate - Streamline is built for you."
    },
    {
      question: "Is this a CRM?",
      answer: "No - but it integrates seamlessly with your CRM. Streamline enhances your CRM by powering real-time conversations, automated workflows, messaging intelligence, and cross-channel interaction tracking."
    },
    {
      question: "What communication channels does Streamline support?",
      answer: "Streamline supports:\n• SMS / MMS\n• SIP & VoIP Calling\n• Video communication\n• Social messaging\n• Fax\n• Internal team messaging\n• File & asset sharing\n\nAll inside one interface."
    },
    {
      question: "Do my customers need to download an app?",
      answer: "No. Your customers communicate through standard channels (SMS, voice, social, etc.). No app installation required."
    },
    {
      question: "Can I keep my existing phone numbers?",
      answer: "Yes. You can port existing numbers or provision new ones directly through Streamline."
    },
    {
      question: "Does Streamline support VoIP and SIP?",
      answer: "Yes. Streamline supports SIP/VoIP infrastructure and integrates with carrier-grade systems."
    },
    {
      question: "Can departments share the same number?",
      answer: "Yes. You can route, assign, and automate conversations across departments with workflow logic and role-based access."
    },
    {
      question: "What is the Cognitive Interaction Operating System?",
      answer: "It's Streamline's intelligence layer. It connects communication events to workflows, automation rules, decision trees, and operational triggers - turning conversations into automated actions."
    },
    {
      question: "Can I automate workflows?",
      answer: "Yes. You can build custom automation flows for:\n• Lead routing\n• Customer support escalation\n• Payment reminders\n• Appointment confirmations\n• Internal task assignment\n• Logistics updates\n• Marketing follow-ups"
    },
    {
      question: "Does Streamline support AI?",
      answer: "Yes. AI can be integrated for:\n• Smart routing\n• Response automation\n• Interaction insights\n• Predictive workflow triggers\n• Data classification"
    },
    {
      question: "Can I build custom modules?",
      answer: "Yes. With Developer Access and APIs, you can build and extend custom modules on top of the platform."
    },
    {
      question: "Is Streamline secure?",
      answer: "Yes. Streamline is built with enterprise-grade security, encryption protocols, and controlled access permissions."
    },
    {
      question: "Is this carrier-grade infrastructure?",
      answer: "Yes. Streamline operates on reliable, scalable infrastructure designed for high-volume business communication."
    },
    {
      question: "Does Streamline support role-based permissions?",
      answer: "Yes. Admins can define user roles, access levels, and department-based permissions."
    },
    {
      question: "How does Streamline improve productivity?",
      answer: "By consolidating tools, automating repetitive tasks, and centralizing communication, teams reduce manual work and increase operational speed."
    },
    {
      question: "Can Streamline help with brand awareness and customer loyalty?",
      answer: "Yes. Streamline enables consistent cross-channel engagement, automated follow-ups, and measurable interaction tracking - strengthening customer relationships."
    },
    {
      question: "Is this suitable for non-profits or public sector?",
      answer: "Yes. Streamline supports nonprofits, education institutions, logistics networks, and public notification use cases."
    },
    {
      question: "Can this be used for emergency notifications?",
      answer: "Yes. Bulk messaging, routing logic, and automation workflows allow for emergency and high-priority communications."
    },
    {
      question: "How much does Streamline cost?",
      answer: "Pricing depends on:\n• Channels used\n• Volume of communication\n• Automation complexity\n• Number of users\n• Infrastructure needs\n\nYou can start with a 30-day free trial."
    },
    {
      question: "Is there a contract?",
      answer: "Flexible plans are available. Enterprise contracts are customized based on scale and requirements."
    },
    {
      question: "How long does implementation take?",
      answer: "Basic setups can be live quickly. Complex enterprise implementations vary depending on integrations and workflow customization."
    },
    {
      question: "Do you offer onboarding and training?",
      answer: "Yes. Streamline offers onboarding support and training resources to ensure smooth deployment."
    },
    {
      question: "Do you offer APIs?",
      answer: "Yes. Streamline provides developer APIs for building custom applications and integrations."
    },
    {
      question: "Can Streamline integrate with existing systems?",
      answer: "Yes. It integrates with CRMs, logistics tools, marketing platforms, and internal databases."
    },
    {
      question: "Is it scalable for large enterprises?",
      answer: "Yes. The infrastructure is designed to scale from small teams to large distributed organizations."
    },
    {
      question: "What kind of support do you offer?",
      answer: "Support options include:\n• Email support\n• Live support (based on plan)\n• Onboarding guidance\n• Developer documentation"
    },
    {
      question: "What industries use Streamline?",
      answer: "Industries include:\n• Retail\n• Logistics\n• Healthcare\n• Finance\n• Marketing agencies\n• Customer service organizations\n• Non-profits"
    },
    {
      question: "Why choose Streamline over combining multiple tools?",
      answer: "Because fragmented tools create fragmented workflows.\n\nStreamline replaces:\n• Separate messaging platforms\n• Standalone VoIP systems\n• Disconnected workflow tools\n• Manual routing processes\n\nWith one unified operating layer."
    }
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <SEO 
        title="FAQs | Streamline"
        description="Frequently Asked Questions about Streamline."
        schema={schema}
      />
      
      {/* Hero Section */}
      <section className="pt-[96px] pb-[40px] md:pt-[62px] text-center bg-slate-50">
        <div className="container-fluid max-w-4xl mx-auto">
          <h1 className="text-display mb-6">FREQUENTLY ASKED QUESTIONS</h1>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="pb-[76px] bg-slate-50">
        <div className="container-fluid max-w-3xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className={`bg-white border rounded-xl overflow-hidden transition-all duration-300 ${openIndex === index ? 'border-[var(--color-brand-blue)] shadow-md' : 'border-slate-200 hover:border-slate-300'}`}
              >
                <button 
                  className="w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none"
                  onClick={() => toggleFaq(index)}
                >
                  <h4 className={`text-lg font-bold pr-8 ${openIndex === index ? 'text-[var(--color-brand-blue)]' : 'text-[var(--color-ink)]'}`}>
                    {faq.question}
                  </h4>
                  <span className={`text-2xl transition-transform duration-300 ${openIndex === index ? 'rotate-180 text-[var(--color-brand-blue)]' : 'text-slate-400'}`}>
                    ↓
                  </span>
                </button>
                
                <div 
                  className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-96 py-5 border-t border-slate-100' : 'max-h-0 py-0'}`}
                >
                  <div className="text-[var(--color-ink-soft)] whitespace-pre-line leading-relaxed">
                    {faq.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#00e5ff] text-center">
        <div className="container-fluid flex flex-col md:flex-row items-center justify-center gap-8">
          <h3 className="text-3xl font-bold text-[var(--color-brand-blue)]">Can't find the answer that you're looking for?</h3>
          <Link to="/signup.html" className="btn bg-[var(--color-brand-blue)] text-white hover:bg-blue-900 border-none px-8 py-4 text-lg">
            GET STREAMLINED
          </Link>
        </div>
      </section>
    </>
  );
}
