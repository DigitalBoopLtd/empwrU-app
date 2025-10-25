'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: "When will empwrU launch?",
    answer: "We're currently in development and plan to launch soon. Join our waitlist to be the first to know when we're ready!"
  },
  {
    question: "What will empwrU do?",
    answer: "empwrU will be a personal growth platform designed to help women build confidence, set goals, and create lasting habits — in just 5 minutes a day."
  },
  {
    question: "Will my data be safe and private?",
    answer: "Absolutely. Everything U share will stay on your device — we won't collect, store, or share any of your personal data. Privacy is a core value."
  },
  {
    question: "How much will it cost?",
    answer: "empwrU will be free to use. No credit card required, no hidden costs. We believe personal growth tools should be accessible to everyone."
  },
  {
    question: "What happens when I join the waitlist?",
    answer: "U'll be among the first to access empwrU when we launch. We'll send you early access, updates, and the chance to help shape our features."
  },
  {
    question: "Can I unsubscribe from the waitlist?",
    answer: "Of course! U can unsubscribe at any time. Your email will only be used to notify you about empwrU's launch and updates."
  },
  {
    question: "Will empwrU be available on mobile?",
    answer: "Yes! empwrU will work in your browser on any device, and you'll be able to add it to your home screen for an app-like experience."
  },
  {
    question: "How can I help or provide feedback?",
    answer: "We'd love your input! Join the waitlist and we'll reach out to early members for feedback as we build. Your voice matters."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="py-32 px-6 bg-white">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-5xl md:text-7xl font-black mb-16 text-center text-foreground">
          Frequently Asked Questions
        </h2>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="border-2 border-border rounded-2xl overflow-hidden transition-all hover:border-primary/30"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left"
              >
                <h3 className="text-xl font-bold text-foreground pr-8">
                  {faq.question}
                </h3>
                <ChevronDown 
                  className={`w-6 h-6 text-primary flex-shrink-0 transition-transform ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              
              {openIndex === index && (
                <div className="px-6 pb-6">
                  <p className="text-lg text-foreground/70 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-foreground/60 mb-4">
            Still have questions?
          </p>
          <p className="text-lg text-foreground/80">
            We're here to help. Reach out anytime and we'll get back to U within 24 hours.
          </p>
        </div>
      </div>
    </section>
  );
}

