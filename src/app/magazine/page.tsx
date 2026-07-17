import Link from "next/link";
import Image from "next/image";

const ARTICLES = [
  {
    slug: "evolution-of-lawn-tennis",
    category: "Heritage",
    title: "The Evolution of Lawn Tennis at Wimbledon",
    desc: "Discover how a Victorian garden party pastime transformed into the world's most prestigious sporting tournament.",
    image: "/images/vintage-tennis.png"
  },
  {
    slug: "golf-sport-of-business",
    category: "Lifestyle",
    title: "Why Golf Became the Sport of Business Leaders",
    desc: "The undeniable connection between the fairway and the boardroom, and why deals are still struck on the 18th hole.",
    image: "/images/golf.png"
  },
  {
    slug: "exclusive-sporting-clubs",
    category: "Culture",
    title: "The World's Most Exclusive Sporting Clubs",
    desc: "A rare glimpse inside the private sanctuaries where royalty, celebrities, and billionaires gather to celebrate.",
    image: "/images/clubhouse.png"
  },
  {
    slug: "polo-sport-of-kings",
    category: "Equestrian",
    title: "Polo: The Sport of Kings and Aristocrats",
    desc: "An inside look at the high-society culture surrounding this majestic game of speed and strategy.",
    image: "/images/polo.png"
  }
];

export default function MagazineIndex() {
  return (
    <div className="min-h-screen bg-luxury-background pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h1 className="font-serif text-5xl md:text-6xl text-luxury-primary mb-6">The Editorial</h1>
          <div className="w-24 h-1 bg-luxury-accent mx-auto mb-6"></div>
          <p className="font-sans text-lg text-luxury-text/70 max-w-2xl mx-auto">
            Curated insights into the luxury lifestyle, historic moments, and the culture of elite sports.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12">
          {ARTICLES.map((article, i) => (
            <Link key={i} href={`/magazine/${article.slug}`} className="group block">
              <div className="aspect-[16/9] relative bg-luxury-text mb-6 overflow-hidden">
                <Image src={article.image} alt={article.title} fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500"></div>
              </div>
              <p className="text-luxury-accent text-sm tracking-widest uppercase mb-3">{article.category}</p>
              <h3 className="font-serif text-3xl text-luxury-primary mb-4 group-hover:text-luxury-accent transition-colors">{article.title}</h3>
              <p className="text-luxury-text/70 font-sans leading-relaxed">{article.desc}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
