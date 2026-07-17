import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { notFound } from "next/navigation";
import Breadcrumb from "@/components/ui/Breadcrumb";

// Mock data for the magazine articles
const getArticleData = (slug: string) => {
  const articles: Record<string, any> = {
    "architectural-genius-st-andrews": {
      title: "The Architectural Genius of St Andrews: A Study in Strategic Patience",
      category: "Heritage",
      author: "Alistair Sterling",
      date: "July 12, 2026",
      image: "/images/magazine-golf.png",
      content: [
        "Discover how the natural contours of the Scottish coastline created the most formidable test of strategic intellect in the sporting world.",
        "Unlike modern courses sculpted by bulldozers and corporate committees, the Old Course at St Andrews was carved by centuries of wind, rain, and the subtle grazing of sheep. The resulting architecture is a masterclass in risk-reward strategy, forcing the player to constantly calculate probability against ambition.",
        "For the high-net-worth individual, playing St Andrews is less about physical prowess and entirely about emotional regulation. The hidden pot bunkers and double greens do not punish physical errors; they punish impatience. It is the ultimate crucible for the modern leader."
      ]
    },
    "polo-and-the-art-of-war": {
      title: "Polo and the Art of War: What Business Leaders Learn from the Pitch",
      category: "Strategy",
      author: "Eleanor Vance",
      date: "August 5, 2026",
      image: "/images/magazine-polo.png",
      content: [
        "The undeniable connection between a 6th-century Persian cavalry training exercise and the highest echelons of modern corporate strategy.",
        "Polo is unique among sports in that the human athlete is entirely dependent on the physical superiority and synchronization of their 'string' of ponies. A match is not won purely by the swing of the mallet, but by the strategic deployment of equine assets throughout the six chukkas, holding the best horses in reserve for the final, decisive moments.",
        "This resource-management paradigm translates perfectly to global enterprise. The modern CEO, like the high-goal Polo patron, must orchestrate highly volatile, powerful assets in a chaotic, high-speed environment where hesitation results in immediate defeat."
      ]
    },
    "psychology-of-white-wimbledon": {
      title: "The Psychology of White: Decoding Wimbledon's Uncompromising Etiquette",
      category: "Culture",
      author: "Charles Montgomery",
      date: "September 18, 2026",
      image: "/images/magazine-tennis.png",
      content: [
        "A rare glimpse into the sociological and psychological power of strict dress codes in an era of absolute casualness.",
        "At the All England Club, the 'predominantly white' rule is not merely an aesthetic preference; it is a profound psychological equalizer. By stripping away neon logos, personal branding, and flamboyant expression, the Club forces the athlete—and the spectator—to focus entirely on the purity of the physical contest.",
        "In the modern era, where attention is the ultimate currency and personal branding is ubiquitous, Wimbledon's refusal to compromise its visual heritage is the ultimate luxury. True exclusivity is the power to enforce tradition in defiance of commercial trends."
      ]
    },
    "billionaire-syndicates-americas-cup": {
      title: "Wind and Wealth: The Billionaire Syndicates Behind the America's Cup",
      category: "Innovation",
      author: "Victoria Kensington",
      date: "October 2, 2026",
      image: "/images/yachting.png",
      content: [
        "How the oldest international sporting trophy became the world's most expensive and secretive technological arms race.",
        "The America's Cup is no longer merely a sailing regatta; it is a proxy war fought by the world's wealthiest individuals using aerospace engineering, fluid dynamics, and carbon-fiber hydrofoils. Syndicates routinely spend upwards of $100 million for a single campaign.",
        "For the elite patrons backing these vessels, the Cup represents the ultimate test of organizational leadership. It requires assembling a team of world-class engineers, software developers, and tactical sailors, and seamlessly integrating them into a singular, hyper-efficient unit operating on the bleeding edge of physics."
      ]
    }
  };

  return articles[slug] || null;
};

export default async function MagazineArticle({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = getArticleData(slug);

  if (!article) {
    notFound();
  }

  return (
    <div className="flex flex-col min-h-screen bg-luxury-background pt-24 md:pt-32 pb-24">
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Navigation & Meta */}
        <div className="mb-12">
          <Breadcrumb items={[
            { label: 'Home', href: '/' },
            { label: 'Magazine', href: '/magazine' },
            { label: article.category, href: `/magazine` }
          ]} />
          
          <div className="flex items-center space-x-4 mb-6">
            <span className="text-luxury-accent uppercase tracking-widest text-sm font-medium">{article.category}</span>
            <span className="text-luxury-border/50">•</span>
            <span className="text-luxury-text/50 font-sans text-sm">{article.date}</span>
          </div>
          
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-luxury-primary leading-tight mb-8">
            {article.title}
          </h1>
          
          <div className="flex items-center space-x-3 border-t border-b border-luxury-border/30 py-4 mb-12">
            <div className="w-10 h-10 bg-luxury-text rounded-full flex items-center justify-center text-luxury-accent font-serif text-lg">
              {article.author.charAt(0)}
            </div>
            <div>
              <p className="font-serif text-luxury-primary">By {article.author}</p>
              <p className="font-sans text-xs text-luxury-text/50 uppercase tracking-wider">Editorial Team</p>
            </div>
          </div>
        </div>

        {/* Featured Image */}
        <div className="relative aspect-[21/9] w-full mb-16 shadow-xl">
          <Image
            src={article.image}
            alt={article.title}
            fill
            priority
            className="object-cover"
          />
        </div>

        {/* Content */}
        <div className="prose prose-lg prose-luxury max-w-none">
          {article.content.map((paragraph: string, index: number) => (
            <p key={index} className="font-sans text-lg text-luxury-text/80 leading-relaxed mb-8">
              {index === 0 ? (
                <span className="font-serif text-5xl float-left mr-4 mt-2 leading-none text-luxury-accent">
                  {paragraph.charAt(0)}
                </span>
              ) : null}
              {index === 0 ? paragraph.substring(1) : paragraph}
            </p>
          ))}
        </div>
      </article>
    </div>
  );
}
