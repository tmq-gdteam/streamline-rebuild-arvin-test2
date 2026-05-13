import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import StreamlineStack from './pages/StreamlineStack';
import InteractiveChannels from './pages/InteractiveChannels';
import CognitiveApps from './pages/CognitiveApps';
import WhyStreamline from './pages/WhyStreamline';
import UseCases from './pages/UseCases';
import RetailWholesale from './pages/RetailWholesale';
import ServiceIndustries from './pages/ServiceIndustries';
import ConstructionRealEstate from './pages/ConstructionRealEstate';
import ConsultingProfessionalServices from './pages/ConsultingProfessionalServices';
import FoodServiceHospitality from './pages/FoodServiceHospitality';
import MedicalHealthcare from './pages/MedicalHealthcare';
import FinancialServices from './pages/FinancialServices';
import GovernmentNonprofits from './pages/GovernmentNonprofits';
import AboutUs from './pages/AboutUs';
import ResourcesMain from './pages/ResourcesMain';
import Blogs from './pages/Blogs';
import ContactUs from './pages/ContactUs';
import Demo from './pages/Demo';
import Faqs from './pages/Faqs';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Support from './pages/Support';
import TermsOfService from './pages/TermsOfService';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Billing from './pages/Billing';
import ForgotPassword from './pages/ForgotPassword';
function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/streamline-stack.html" element={<StreamlineStack />} />
        <Route path="/interactive-channels.html" element={<InteractiveChannels />} />
        <Route path="/cognitive-apps.html" element={<CognitiveApps />} />
        <Route path="/why-streamline.html" element={<WhyStreamline />} />
        <Route path="/use-case.html" element={<UseCases />} />
        <Route path="/retail-and-wholesale-sectors.html" element={<RetailWholesale />} />
        <Route path="/service-industries.html" element={<ServiceIndustries />} />
        <Route path="/construction-contractors-real-estate.html" element={<ConstructionRealEstate />} />
        <Route path="/consulting-professional-services.html" element={<ConsultingProfessionalServices />} />
        <Route path="/food-service-and-hospitality-sectors.html" element={<FoodServiceHospitality />} />
        <Route path="/medical-and-healthcare-sector.html" element={<MedicalHealthcare />} />
        <Route path="/financial-services.html" element={<FinancialServices />} />
        <Route path="/government-nonprofits-and-public-sectors.html" element={<GovernmentNonprofits />} />
        <Route path="/about-us.html" element={<AboutUs />} />
        <Route path="/resources-main.html" element={<ResourcesMain />} />
        <Route path="/blogs.html" element={<Blogs />} />
        <Route path="/contact-us.html" element={<ContactUs />} />
        <Route path="/demo.html" element={<Demo />} />
        <Route path="/faqs.html" element={<Faqs />} />
        <Route path="/login.html" element={<Login />} />
        <Route path="/signup.html" element={<Signup />} />
        <Route path="/forgot-password.html" element={<ForgotPassword />} />
        <Route path="/support.html" element={<Support />} />
        <Route path="/terms-of-service.html" element={<TermsOfService />} />
        <Route path="/privacy-policy.html" element={<PrivacyPolicy />} />
        <Route path="/billing.html" element={<Billing />} />
      </Routes>
    </Layout>
  );
}

export default App;
