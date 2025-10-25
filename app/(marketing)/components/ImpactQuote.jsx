export default function ImpactQuote() {
  return (
    <section className="py-20 px-6 bg-gradient-to-r from-pastel-purple/20 via-pastel-pink/20 to-pastel-peach/20">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center">
          <svg className="w-16 h-16 mx-auto mb-6 text-primary/30" fill="currentColor" viewBox="0 0 32 32">
            <path d="M10 8c-3.3 0-6 2.7-6 6v10h8V14h-4c0-2.2 1.8-4 4-4V8zm14 0c-3.3 0-6 2.7-6 6v10h8V14h-4c0-2.2 1.8-4 4-4V8z" />
          </svg>
          <blockquote className="text-2xl md:text-3xl font-semibold text-foreground leading-relaxed mb-6">
            "I feel more confident now than when I first started. I've learned a lot and feel more comfortable taking on new challenges."
          </blockquote>
          <cite className="text-lg text-foreground/60 not-italic">— RX, Programme Participant</cite>
        </div>
      </div>
    </section>
  );
}

