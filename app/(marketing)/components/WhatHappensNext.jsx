import { Check } from 'lucide-react';

const steps = [
  {
    step: "1",
    title: "Join the Waitlist",
    description: "Register your interest with just your email. No commitment required.",
    time: "30 seconds"
  },
  {
    step: "2",
    title: "Get Early Access",
    description: "Be among the first to access empwrU when we launch.",
    time: "Coming soon"
  },
  {
    step: "3",
    title: "Shape the Future",
    description: "Early members help influence features and priorities.",
    time: "Your voice matters"
  }
];

export default function WhatHappensNext() {
  return (
    <section className="py-24 px-6 bg-white border-t-2 border-primary/10">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h3 className="text-3xl md:text-4xl font-black mb-4 text-foreground">
            What Happens When U Join the Waitlist?
          </h3>
          <p className="text-lg text-foreground/70">
            No surprises. Here's exactly what to expect.
          </p>
        </div>

        <div className="space-y-6">
          {steps.map((item, index) => (
            <div 
              key={index}
              className="flex gap-6 items-start p-6 rounded-2xl bg-gradient-to-r from-pastel-purple/5 to-pastel-pink/5 border border-primary/10"
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-sunrise flex items-center justify-center text-white font-black text-xl">
                {item.step}
              </div>
              <div className="flex-1">
                <div className="flex items-start justify-between gap-4 mb-2">
                  <h4 className="text-xl font-bold text-foreground">{item.title}</h4>
                  <span className="text-sm font-medium text-primary whitespace-nowrap">{item.time}</span>
                </div>
                <p className="text-foreground/70">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 p-6 rounded-2xl bg-primary/5 border border-primary/10">
          <div className="flex items-start gap-3">
            <Check className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
            <div>
              <p className="text-lg font-semibold text-foreground mb-2">
                No commitment, just early access
              </p>
              <p className="text-foreground/70">
                Join the waitlist for free. Unsubscribe anytime. Your email will only be used to notify you when we launch.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

