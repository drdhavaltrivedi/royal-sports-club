import SportCard from "@/components/home/SportCard";
import { sportsData } from "@/data/sports";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "The Sports | Aristocratic Heritage & Knowledge",
  description: "Explore our meticulously curated digital archives covering the history, etiquette, and strategy of the world's most prestigious elite sports.",
  keywords: ["luxury sports history", "polo rules", "golf networking", "lawn tennis etiquette", "aristocratic games", "elite sports knowledge"],
};

export default function SportsIndexPage() {
  const sports = Object.values(sportsData);

  return (
    <div className="min-h-screen bg-luxury-background pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h1 className="font-serif text-5xl md:text-6xl text-luxury-primary mb-6">Prestigious Traditions</h1>
          <div className="w-24 h-1 bg-luxury-accent mx-auto mb-6"></div>
          <p className="font-sans text-lg text-luxury-text/70 max-w-2xl mx-auto">
            Explore the culture, etiquette, and rich history of the world's most elite sporting disciplines.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {sports.map((sport, idx) => (
            <SportCard
              key={sport.slug}
              title={sport.name}
              description={sport.intro}
              image={sport.heroImage}
              link={`/sports/${sport.slug}`}
              delay={(idx % 3) * 0.1}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
