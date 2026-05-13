import SEO from '../components/SEO';
import { Link } from 'react-router-dom';

export default function PrivacyPolicy() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Privacy Policy",
    "description": "Streamline Privacy Policy"
  };

  return (
    <>
      <SEO 
        title="Privacy Policy | Streamline"
        description="Streamline Privacy Policy"
        schema={schema}
      />
      
      {/* Hero Section */}
      <section className="pt-[96px] pb-[40px] md:pt-[62px] text-center bg-slate-50 border-b border-slate-200">
        <div className="container-fluid max-w-4xl mx-auto">
          <h1 className="text-display mb-6 uppercase tracking-tight">Privacy Policy</h1>
          <p className="text-lg font-bold text-[var(--color-ink-soft)] mb-2">
            Effective Date: March 2, 2026
          </p>
          <p className="text-lg text-[var(--color-ink-soft)] max-w-3xl mx-auto">
            This Privacy Policy explains how <strong>Streamline VA Corporation</strong> (“we”, “us”, “our”) collects, uses, discloses, and protects your information when you use our website and Services.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-[76px] bg-white">
        <div className="container-fluid max-w-4xl mx-auto">
          <div className="prose prose-lg max-w-none text-[var(--color-ink)] prose-headings:text-[var(--color-brand-blue)] prose-h2:text-2xl prose-h2:font-bold prose-h2:mt-12 prose-h2:mb-6 prose-h3:text-xl prose-h3:font-bold prose-h3:mt-8 prose-h3:mb-4 prose-p:mb-6 prose-li:mb-2 prose-ul:mb-6 prose-ul:list-disc prose-ul:pl-6">
            
            <h2>1. Information We Collect</h2>
            
            <h3>a) Information You Provide Directly</h3>
            <ul>
              <li>Contact info (name, email, phone)</li>
              <li>Company name, job title</li>
              <li>Billing information</li>
              <li>Messages, preferences</li>
            </ul>
            <p>This includes data you enter into sign-up forms, demo requests, profile settings, communication preferences, or support tickets.</p>
            
            <h3>b) Automatically Collected Information</h3>
            <ul>
              <li>IP address</li>
              <li>Device information</li>
              <li>Browser type</li>
              <li>Usage analytics</li>
            </ul>
            
            <h2>2. How We Use Your Information</h2>
            <p>We use personal information to:</p>
            <ul>
              <li>Provide and improve the Services</li>
              <li>Communicate with you</li>
              <li>Personalize content and offers</li>
              <li>Process payments</li>
              <li>Detect fraud or security issues</li>
            </ul>
            
            <h2>3. SMS and Communications</h2>
            <p>By providing your phone number and opting into SMS, you consent to receive text messages and calls as described during signup. These may include:</p>
            <ul>
              <li>Transactional messages (account alerts)</li>
              <li>Service notifications</li>
              <li>Marketing messages</li>
            </ul>
            <p>You may withdraw consent at any time by replying STOP, or contacting support. Messaging frequency varies; message/data rates may apply.</p>
            <p>This consent is separate from other agreements. (Compliant with TCPA/CTIA guidelines.)</p>
            
            <h2>4. Sharing of Your Information</h2>
            <p>We may share your information with:</p>
            <ul>
              <li>Service providers (hosting, billing)</li>
              <li>Business partners under contract</li>
              <li>Legal authorities if required by law</li>
            </ul>
            <p>We do not sell your personal information to third parties.</p>
            
            <h2>5. Cookies and Tracking</h2>
            <p>We use cookies and tracking technologies to analyze trends, administer the Site, track user movements, and gather demographic information.</p>
            <p>You can disable cookies via your browser settings.</p>
            
            <h2>6. Data Security</h2>
            <p>We implement reasonable administrative, physical, and technical safeguards to protect personal information.</p>
            
            <h2>7. International Transfers</h2>
            <p>Data may be transferred to and processed in countries outside your jurisdiction, including the U.S. All data transfers comply with applicable laws.</p>
            
            <h2>8. Children's Privacy</h2>
            <p>We do not knowingly collect information from persons under 13. If you learn your child's data was provided, contact us so we can delete it.</p>
            
            <h2>9. Your Rights</h2>
            <p>Subject to applicable laws, you may:</p>
            <ul>
              <li>Access or request deletion of personal info</li>
              <li>Update or correct inaccuracies</li>
              <li>Opt out of marketing</li>
            </ul>
            <p>Residents of certain jurisdictions (e.g., California) have additional privacy rights.</p>
            
            <h2>10. Changes to This Policy</h2>
            <p>We may update this Policy. We'll post changes at <a href="https://hellostreamline.com/privacy-policy" className="text-[var(--color-cyan)] hover:underline">https://hellostreamline.com/privacy-policy</a>.</p>
            
            <h2>11. Contact Us</h2>
            <p>If you have questions about this Policy, email: <strong>privacy@hellostreamline.com</strong> (or your official support email).</p>
            
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
