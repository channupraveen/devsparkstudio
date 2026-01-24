import Layout from "../components/layout/Layout";
import HeroSection from "../components/home/HeroSection";
import ProblemSolutionSection from "../components/home/ProblemSolutionSection";
import ServicesSection from "../components/home/ServicesSection";
import ProcessSection from "../components/home/ProcessSection";
import IntegrationsSection from "../components/home/IntegrationsSection";
import TeamSection from "../components/home/TeamSection";
import TestimonialsSection from "../components/home/TestimonialsSection";
import FAQSection from "../components/home/FAQSection";
import CTASection from "../components/home/CTASection";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <ProblemSolutionSection />
      <ServicesSection />
      <ProcessSection />
      <IntegrationsSection />
      <TeamSection />
      <TestimonialsSection />
      <FAQSection />
      <CTASection />
    </Layout>
  );
};

export default Index;