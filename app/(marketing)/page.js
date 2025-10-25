import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Mission from './components/Mission';
import ImpactQuote from './components/ImpactQuote';
import Values from './components/Values';
import Approach from './components/Approach';
import Testimonials from './components/Testimonials';
import WhatHappensNext from './components/WhatHappensNext';
import FAQ from './components/FAQ';
import CTA from './components/CTA';
import Footer from './components/Footer';
import StickyCTA from './components/StickyCTA';

export const metadata = {
  title: 'empwrU - Growth begins with U',
  description: 'Where innovation meets empowerment. We help women believe in themselves, grow in confidence, and realize their potential.',
  keywords: 'women empowerment, personal growth, daily habits, goal setting, privacy-first',
};

export default function LandingPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Mission />
      <ImpactQuote />
      <Values />
      <Approach />
      <Testimonials />
      <WhatHappensNext />
      <FAQ />
      <CTA />
      <Footer />
      <StickyCTA />
    </div>
  );
}

