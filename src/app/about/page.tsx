export default function AboutPage() {
  return (
    <div className="min-h-screen bg-luxury-background pt-32 pb-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h1 className="font-serif text-5xl md:text-6xl text-luxury-primary mb-6">About The Club</h1>
          <div className="w-24 h-1 bg-luxury-accent mx-auto mb-6"></div>
        </div>

        <div className="prose prose-lg max-w-none text-luxury-text/80 mb-20">
          <p className="font-sans text-center text-xl max-w-3xl mx-auto leading-relaxed italic mb-12">
            "We do not merely play sports; we preserve the artistry, the discipline, and the aristocratic spirit of human competition."
          </p>

          <div className="grid md:grid-cols-3 gap-8 mt-16 text-center">
            <div>
              <h3 className="font-serif text-2xl text-luxury-primary mb-4">Tradition</h3>
              <p className="font-sans text-luxury-text/70 text-sm leading-relaxed">Preserving the historic rules, attire, and decorum of sports as they were originally intended to be played.</p>
            </div>
            <div>
              <h3 className="font-serif text-2xl text-luxury-primary mb-4">Excellence</h3>
              <p className="font-sans text-luxury-text/70 text-sm leading-relaxed">Maintaining immaculate grounds, world-class facilities, and uncompromising standards of service.</p>
            </div>
            <div>
              <h3 className="font-serif text-2xl text-luxury-primary mb-4">Privacy</h3>
              <p className="font-sans text-luxury-text/70 text-sm leading-relaxed">Offering our members an absolute sanctuary away from the public eye and the demands of modern life.</p>
            </div>
          </div>
        </div>

        <div className="border-t border-luxury-border/30 pt-16">
          <h2 className="font-serif text-3xl text-luxury-primary mb-8 text-center">Membership</h2>
          <p className="font-sans text-lg text-luxury-text/80 leading-relaxed text-center max-w-2xl mx-auto mb-8">
            Membership to The Royal Sports Club is strictly by invitation only. Prospective members must be nominated by a current member of standing and approved by the Board of Governors.
          </p>
        </div>
      </div>
    </div>
  );
}
