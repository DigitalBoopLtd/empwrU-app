import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export default function CTA() {
  return (
    <section className="py-32 px-6 bg-white">
      <div className="container mx-auto max-w-5xl">
        <div className="p-16 md:p-20 rounded-3xl bg-gradient-sunrise text-white text-center">
          <h2 className="text-5xl md:text-7xl font-black mb-8">
            Ready to Join the Movement?
          </h2>
          <p className="text-xl md:text-2xl mb-6 font-medium">
            Be the first to know when empwrU launches. Join our waitlist today.
          </p>
          <p className="text-lg mb-10 text-white/90">
            Early access. No credit card. Just your email and belief in U.
          </p>
          
          {/* Waitlist Form */}
          <div className="max-w-md mx-auto">
            <form className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 rounded-lg border-2 border-white/20 bg-white/10 focus:bg-white/20 focus:border-white focus:outline-none text-white placeholder:text-white/60"
                required
              />
              <Button 
                type="submit"
                variant="secondary" 
                size="lg"
                className="group min-w-[160px] bg-white text-primary hover:bg-white/90"
              >
                Join Waitlist
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
