import Hero from "@/components/home/Hero";
import SportCard from "@/components/home/SportCard";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      
      {/* Luxury Sports Grid */}
      <section className="py-24 md:py-32 bg-luxury-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 md:mb-24">
            <h2 className="font-serif text-4xl md:text-5xl text-luxury-primary mb-6">Prestigious Traditions</h2>
            <div className="w-24 h-1 bg-luxury-accent mx-auto mb-6"></div>
            <p className="font-sans text-luxury-text/70 max-w-2xl mx-auto text-lg">
              Explore the culture, etiquette, and rich history of the world's most elite sporting disciplines.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
            <SportCard
              title="Golf"
              description="From the historic links of St Andrews to the manicured perfection of Augusta National, discover the ultimate gentleman's game."
              image="/images/golf.png"
              link="/sports/golf"
              delay={0.1}
            />
            <SportCard
              title="Polo"
              description="The sport of kings. Experience the thundering hooves, elite equestrian skill, and the high-society culture surrounding this majestic game."
              image="/images/polo.png"
              link="/sports/polo"
              delay={0.2}
            />
            <SportCard
              title="Lawn Tennis"
              description="Pristine white attire, perfectly cut grass courts, and a heritage of sportsmanship. Step into the timeless world of traditional tennis."
              image="/images/tennis.png"
              link="/sports/lawn-tennis"
              delay={0.3}
            />
          </div>
        </div>
      </section>

      {/* The Magazine Preview Section */}
      <section className="py-24 bg-luxury-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b border-white/20 pb-8">
              <div>
                <h2 className="font-serif text-4xl md:text-5xl mb-4">The Editorial</h2>
                <p className="font-sans text-luxury-secondary/70 text-lg max-w-xl">Curated insights into the luxury lifestyle, historic moments, and the culture of elite sports.</p>
              </div>
              <Link href="/magazine" className="mt-8 md:mt-0 inline-block px-6 py-3 border border-luxury-accent text-luxury-accent hover:bg-luxury-accent hover:text-white transition-colors tracking-widest uppercase text-sm">
                Read All Articles
              </Link>
           </div>
           
           <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Feature Article */}
              <Link href="/magazine/evolution-of-lawn-tennis" className="group block">
                <div className="aspect-[4/3] bg-luxury-text mb-6 relative overflow-hidden">
                   <Image src="/images/vintage-tennis.png" alt="Wimbledon Heritage" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                   <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent z-10 transition-colors duration-500"></div>
                </div>
                <p className="text-luxury-accent text-sm tracking-widest uppercase mb-3">Heritage</p>
                <h3 className="font-serif text-3xl mb-4 group-hover:text-luxury-accent transition-colors">The Evolution of Lawn Tennis at Wimbledon</h3>
                <p className="text-luxury-secondary/70 font-sans leading-relaxed">Discover how a Victorian garden party pastime transformed into the world's most prestigious sporting tournament while fiercely protecting its traditions.</p>
              </Link>
              
              <div className="space-y-12">
                <Link href="/magazine/golf-sport-of-business" className="group flex flex-col sm:flex-row gap-6 block">
                  <div className="w-full sm:w-1/3 aspect-square bg-luxury-text relative overflow-hidden flex-shrink-0">
                    <Image src="/images/golf.png" alt="Golf Lifestyle" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                  </div>
                  <div>
                    <p className="text-luxury-accent text-sm tracking-widest uppercase mb-2">Lifestyle</p>
                    <h3 className="font-serif text-xl mb-3 group-hover:text-luxury-accent transition-colors">Why Golf Became the Sport of Business Leaders</h3>
                    <p className="text-luxury-secondary/70 font-sans text-sm line-clamp-3">The undeniable connection between the fairway and the boardroom, and why the most important deals are still struck on the 18th hole.</p>
                  </div>
                </Link>
                
                <Link href="/magazine/exclusive-sporting-clubs" className="group flex flex-col sm:flex-row gap-6 block">
                  <div className="w-full sm:w-1/3 aspect-square bg-luxury-text relative overflow-hidden flex-shrink-0">
                    <Image src="/images/clubhouse.png" alt="Private Clubhouse" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                  </div>
                  <div>
                    <p className="text-luxury-accent text-sm tracking-widest uppercase mb-2">Culture</p>
                    <h3 className="font-serif text-xl mb-3 group-hover:text-luxury-accent transition-colors">The World's Most Exclusive Sporting Clubs</h3>
                    <p className="text-luxury-secondary/70 font-sans text-sm line-clamp-3">A rare glimpse inside the private sanctuaries where royalty, celebrities, and billionaires gather to celebrate their sporting passions.</p>
                  </div>
                </Link>
              </div>
           </div>
        </div>
      </section>
    </div>
  );
}
