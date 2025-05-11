
import { useEffect } from 'react';
import PageLayout from '@/components/PageLayout';
import Hero from '@/components/Hero';
import VirtueGrid from '@/components/VirtueGrid';
import HowItWorks from '@/components/HowItWorks';
import Testimonials from '@/components/Testimonials';
import CallToAction from '@/components/CallToAction';
import SEO from '@/components/SEO';

const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <PageLayout>
      <SEO 
        title="Taylab - Character-Driven Leadership Development" 
        description="Taylab equips the next generation with the virtues to lead—not just succeed. The definitive system for character-driven leadership development."
      />
      <Hero />
      <VirtueGrid />
      <HowItWorks />
      <Testimonials />
      <CallToAction />
    </PageLayout>
  );
};

export default Index;
