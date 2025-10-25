import { Smartphone, Handshake, Sparkles } from 'lucide-react';

export default function Approach() {
  return (
    <section id="approach" className="py-32 px-6 bg-white">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-5xl md:text-7xl font-black mb-8 text-center text-foreground">
          Our Approach
        </h2>
        <p className="text-xl md:text-2xl text-foreground/70 mb-16 text-center max-w-4xl mx-auto leading-relaxed">
          At empwrU, innovation and human connection go hand in hand. We design creative, 
          forward-thinking solutions that make personal development more accessible, inclusive, 
          and impactful for women.
        </p>
        
        <div className="space-y-12">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="flex-shrink-0 w-20 h-20 rounded-full bg-gradient-sunrise flex items-center justify-center">
              <Smartphone className="w-10 h-10 text-white" />
            </div>
            <div>
              <h3 className="text-3xl font-bold mb-3 text-foreground">Digital-First Access</h3>
              <p className="text-xl text-foreground/70">
                Our app, online programmes, and community platform allow us to reach and support women wherever they are.
              </p>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="flex-shrink-0 w-20 h-20 rounded-full bg-gradient-sunrise flex items-center justify-center">
              <Handshake className="w-10 h-10 text-white" />
            </div>
            <div>
              <h3 className="text-3xl font-bold mb-3 text-foreground">Human Connection</h3>
              <p className="text-xl text-foreground/70">
                Meaningful in-person experiences — workshops, events, and group programmes that strengthen connection and belonging.
              </p>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="flex-shrink-0 w-20 h-20 rounded-full bg-gradient-sunrise flex items-center justify-center">
              <Sparkles className="w-10 h-10 text-white" />
            </div>
            <div>
              <h3 className="text-3xl font-bold mb-3 text-foreground">Lasting Growth</h3>
              <p className="text-xl text-foreground/70">
                A blended model that builds confidence and wellbeing — both online and in real life.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
