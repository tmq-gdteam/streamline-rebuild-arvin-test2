import Hero from '../components/Hero';
import FeatureStory from '../components/FeatureStory';
import StatsBand from '../components/StatsBand';
import HowItWorks from '../components/HowItWorks';
import Resources from '../components/Resources';
import CustomerAndIntegrations from '../components/CustomerAndIntegrations';

export default function Home() {
  return (
    <>
      <Hero />
      <FeatureStory />
      <StatsBand />
      <HowItWorks />
      <Resources />
      <CustomerAndIntegrations />
    </>
  );
}
