import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ArrowRight, Lock, Zap, CreditCard } from 'lucide-react';
import heroImage from '@/assets/hero-image.jpg';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-pastel pt-20">
      <div className="absolute inset-0 opacity-20">
        <Image 
          src={heroImage} 
          alt="Empowering women together" 
          fill
          style={{ objectFit: 'cover' }}
          priority
        />
      </div>
      
      {/* Dark overlay for better text contrast */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-transparent"></div>
      
      <div className="container relative z-10 mx-auto px-6 py-32 text-center">
        <div className="max-w-4xl mx-auto space-y-10 animate-fade-in">
          {/* Coming Soon Badge */}
          <div className="inline-block px-4 py-2 rounded-full bg-gradient-sunrise text-white text-sm font-semibold mb-4">
            Coming Soon
          </div>

          <h1 className="text-6xl md:text-8xl font-black tracking-tight text-white leading-[1.1] drop-shadow-lg">
            Growth begins with {" "}
            <span className="inline-block bg-gradient-sunrise bg-clip-text text-transparent">
              U
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto font-medium drop-shadow-md">
            We're building something special. Be the first to know when we launch — join our waitlist and help shape the future of women's empowerment.
          </p>
          
          {/* Trust badges */}
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6 text-sm md:text-base text-white/80 pt-4">
            <div className="flex items-center gap-2">
              <Lock className="w-5 h-5 text-white" />
              <span className="font-medium">100% Private</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="w-5 h-5 text-white" />
              <span className="font-medium">Just 5 Minutes a Day</span>
            </div>
            <div className="flex items-center gap-2">
              <CreditCard className="w-5 h-5 text-white" />
              <span className="font-medium">Free to Use</span>
            </div>
          </div>
          
          {/* Waitlist Form */}
          <div className="max-w-md mx-auto pt-6">
            <form className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 rounded-lg border-2 border-border focus:border-primary focus:outline-none text-foreground placeholder:text-foreground/50"
                required
              />
              <Button type="submit" size="lg" className="group min-w-[160px]">
                Join Waitlist
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </form>
            <p className="text-sm text-foreground/60 text-center mt-4">
              Be the first to access empwrU when we launch
            </p>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}

