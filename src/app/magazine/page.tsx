import Link from "next/link";
import Image from "next/image";

const ARTICLES = [
  {
    slug: "architectural-genius-st-andrews",
    category: "Heritage",
    title: "The Architectural Genius of St Andrews: A Study in Strategic Patience",
    desc: "Discover how the natural contours of the Scottish coastline created the most formidable test of strategic intellect.",
    image: "/images/magazine-golf.png"
  },
  {
    slug: "polo-and-the-art-of-war",
    category: "Strategy",
    title: "Polo and the Art of War: What Business Leaders Learn from the Pitch",
    desc: "The undeniable connection between a 6th-century Persian cavalry training exercise and modern corporate strategy.",
    image: "/images/magazine-polo.png"
  },
  {
    slug: "psychology-of-white-wimbledon",
    category: "Culture",
    title: "The Psychology of White: Decoding Wimbledon's Uncompromising Etiquette",
    desc: "A rare glimpse into the sociological power of strict dress codes in an era of absolute casualness.",
    image: "/images/magazine-tennis.png"
  },
  {
    slug: "billionaire-syndicates-americas-cup",
    category: "Innovation",
    title: "Wind and Wealth: The Billionaire Syndicates Behind the America's Cup",
    desc: "How the oldest international sporting trophy became the world's most expensive and secretive technological arms race.",
    image: "/images/yachting.png"
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
