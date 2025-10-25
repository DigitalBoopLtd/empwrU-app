'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export default function StickyCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show sticky CTA after scrolling 800px (past hero)
      setIsVisible(window.scrollY > 800);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-sm border-t-2 border-primary/10 shadow-lg animate-fade-in">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between gap-4">
          <div className="hidden md:block">
            <p className="font-bold text-foreground">Don't miss out on early access</p>
            <p className="text-sm text-foreground/60">Join the waitlist now</p>
          </div>
          <div className="flex gap-3 w-full md:w-auto">
            <Button asChild size="lg" className="flex-1 md:flex-none group">
              <a href="#hero" className="flex items-center justify-center">
                Join Waitlist
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

