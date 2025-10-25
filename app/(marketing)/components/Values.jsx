import { Sparkles, Heart, Users, Rocket, Shield, Globe, Gem, Eye } from 'lucide-react';

const values = [
  {
    title: "Empowerment",
    description: "We inspire women to own their journey, trust their abilities, and step boldly towards their goals.",
    icon: Sparkles,
  },
  {
    title: "Belief",
    description: "We encourage women to believe in themselves and their potential.",
    icon: Heart,
  },
  {
    title: "Connection",
    description: "We create spaces where women feel seen, supported, and inspired through authentic human connection.",
    icon: Users,
  },
  {
    title: "Innovation",
    description: "We embrace creativity and technology to make personal development accessible and engaging.",
    icon: Rocket,
  },
  {
    title: "Integrity",
    description: "We act with honesty, transparency, and respect — building trust through everything we do.",
    icon: Shield,
  },
  {
    title: "Inclusivity & Equity",
    description: "We champion diversity and fairness, ensuring all women have equal access to opportunity and support.",
    icon: Globe,
  },
  {
    title: "Strength",
    description: "We cultivate resilience, courage, and composure — empowering women to stand strong through challenge.",
    icon: Gem,
  },
  {
    title: "Self-Awareness",
    description: "We encourage reflection, openness, and authenticity — helping women lead with truth and purpose.",
    icon: Eye,
  },
];

export default function Values() {
  return (
    <section className="py-32 px-6 bg-gradient-hero">
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-5xl md:text-7xl font-black mb-16 text-center text-foreground">
          Our Values
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <div 
                key={index}
                className="p-6 rounded-2xl bg-white/80 backdrop-blur-sm border-2 border-white/50 hover:border-primary/30 transition-all hover:shadow-glow"
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-sunrise flex items-center justify-center mb-3">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-foreground">{value.title}</h3>
                <p className="text-sm text-foreground/70 leading-relaxed">{value.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
