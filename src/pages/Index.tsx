import Layout from "../components/layout/Layout";
import HeroSection from "../components/home/HeroSection";
import ProblemSolutionSection from "../components/home/ProblemSolutionSection";
import ServicesSection from "../components/home/ServicesSection";
import ProcessSection from "../components/home/ProcessSection";
import IntegrationsSection from "../components/home/IntegrationsSection";
import TestimonialsSection from "../components/home/TestimonialsSection";
import FAQSection from "../components/home/FAQSection";
import CTASection from "../components/home/CTASection";

const Index = () => {
  return (
    <Layout>
      {/* Page Sections - Optimized order for conversions */}
      {/* 1. Hero - Hook visitors with value proposition */}
      <HeroSection />
      
      {/* 2. Problem/Solution - Show you understand their pain */}
      <ProblemSolutionSection />
      
      {/* 3. Services - What you offer */}
      <ServicesSection />
      
      {/* 4. Why Choose Us + Testimonials - Build trust */}
      <TestimonialsSection />
      
      {/* 5. Portfolio + Technologies - Prove capabilities */}
      <IntegrationsSection />
      
      {/* 6. Process - How you work */}
      <ProcessSection />
      
      {/* 7. FAQ - Address objections */}
      <FAQSection />
      
      {/* 8. CTA - Convert visitors */}
      <CTASection />
    </Layout>
  );
};

export default Index;
