const testimonials = [
  {
    name: "RX",
    role: "Programme Participant",
    content: "I feel more confident now than when I first started. I've learned a lot and feel more comfortable taking on new challenges.",
    avatar: "R",
  },
  {
    name: "ED",
    role: "Programme Participant",
    content: "I've loved meeting women who are in the same shoes as me and realising we are all capable! I've really enjoyed all the sessions!",
    avatar: "E",
  },
  {
    name: "HM",
    role: "Programme Participant",
    content: "I feel a lot better about my future since coming here – everyone encourages and motivates each other. Now I want to run my own business!",
    avatar: "H",
  },
];

export default function Testimonials() {
  return (
    <section className="py-32 px-6 bg-gradient-hero">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-5xl md:text-7xl font-black mb-16 text-center text-foreground">
          What Women Are Saying
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.name} className="bg-white/80 backdrop-blur-sm rounded-3xl p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-gradient-sunrise flex items-center justify-center text-white text-xl font-bold">
                  {testimonial.avatar}
                </div>
                <div>
                  <p className="font-bold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-foreground/60">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-foreground/80 leading-relaxed">{testimonial.content}</p>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12 p-8 rounded-2xl bg-white/60 backdrop-blur-sm border-2 border-primary/10 max-w-3xl mx-auto">
          <p className="text-lg text-foreground/80 italic mb-4">
            "I've loved meeting women who are in the same shoes as me and realising we are all capable!"
          </p>
          <p className="text-sm text-foreground/60">— ED, Programme Participant</p>
        </div>
        <p className="text-center text-sm text-foreground/50 mt-8">
          Real quotes from programme participants
        </p>
      </div>
    </section>
  );
}

