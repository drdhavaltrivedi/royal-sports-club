import Image from "next/image";

export default function HistoryPage() {
  return (
    <div className="min-h-screen bg-luxury-background pt-32 pb-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h1 className="font-serif text-5xl md:text-6xl text-luxury-primary mb-6">Our Heritage</h1>
          <div className="w-24 h-1 bg-luxury-accent mx-auto mb-6"></div>
          <p className="font-sans text-lg text-luxury-text/70 max-w-2xl mx-auto">
            A legacy forged in tradition, upheld by excellence, and celebrated for generations.
          </p>
        </div>

        <div className="relative aspect-[21/9] w-full mb-16 shadow-xl">
          <Image src="/images/hero-bg.png" alt="Historic Club" fill className="object-cover grayscale hover:grayscale-0 transition-all duration-1000" />
        </div>

        <div className="prose prose-lg prose-luxury max-w-none text-luxury-text/80">
          <p className="font-sans text-lg leading-relaxed mb-8">
            <span className="font-serif text-5xl float-left mr-4 mt-2 leading-none text-luxury-accent">E</span>
            stablished over a century ago, The Royal Sports Club was founded on the principles of sportsmanship, elite competition, and aristocratic tradition. What began as a private gathering of gentleman scholars and nobility has blossomed into a global emblem of sporting luxury.
          </p>
          <p className="font-sans text-lg leading-relaxed mb-8">
            Throughout the decades, our manicured lawns and polished halls have witnessed history in the making. We have hosted monarchs, international dignitaries, and the greatest athletes of their generations. 
          </p>
          
          <h2 className="font-serif text-3xl text-luxury-primary mt-16 mb-8 flex items-center">
            <span className="w-8 h-[1px] bg-luxury-accent mr-4"></span>
            A Timeline of Prestige
          </h2>
          
          <div className="space-y-12 border-l border-luxury-accent/30 pl-8 ml-4">
            <div>
              <h3 className="font-serif text-2xl text-luxury-accent mb-2">1885 - The Founding</h3>
              <p className="font-sans text-luxury-text/70">The club was officially chartered by a consortium of royal dignitaries seeking a private sanctuary for equestrian and racquet sports.</p>
            </div>
            <div>
              <h3 className="font-serif text-2xl text-luxury-accent mb-2">1923 - The Grand Expansion</h3>
              <p className="font-sans text-luxury-text/70">The acquisition of 400 acres allowed for the creation of our championship golf links, designed by the era's most revered architects.</p>
            </div>
            <div>
              <h3 className="font-serif text-2xl text-luxury-accent mb-2">Present Day</h3>
              <p className="font-sans text-luxury-text/70">We continue to operate as the world's most exclusive sporting society, rigorously defending our traditions while setting the standard for modern luxury.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
