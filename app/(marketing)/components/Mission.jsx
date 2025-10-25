export default function Mission() {
  return (
    <section id="mission" className="py-32 px-6 bg-gradient-to-b from-white to-pastel-lavender/10">
      <div className="container mx-auto max-w-5xl">
        {/* Mission */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-7xl font-black mb-8 text-foreground">
            Our Mission
          </h2>
          <p className="text-xl md:text-2xl text-foreground/80 leading-relaxed max-w-4xl mx-auto">
            Our mission is to empower women as individuals — helping them believe in themselves, 
            grow in confidence, and realise their potential.
          </p>
        </div>

        {/* Why We Exist */}
        <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 md:p-12 border-2 border-primary/10">
          <h3 className="text-3xl md:text-4xl font-black mb-6 text-foreground text-center">
            Why We Exist
          </h3>
          <div className="space-y-4 text-lg text-foreground/80 leading-relaxed">
            <p>
              Across communities, many women face barriers that hold them back from progressing — 
              a lack of confidence, limited access to opportunity, or systems that don't reflect their realities.
            </p>
            <p className="font-semibold text-foreground">
              We exist to change that.
            </p>
            <p>
              We combine innovation with empathy to create practical solutions that enable women to 
              recognise their strengths, seize opportunities, and thrive in every area of life.
            </p>
            <p className="text-xl font-medium text-primary">
              When women thrive, families, workplaces, and communities thrive too.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

