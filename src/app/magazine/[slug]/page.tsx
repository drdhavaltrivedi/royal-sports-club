import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { notFound } from "next/navigation";
import Breadcrumb from "@/components/ui/Breadcrumb";

// Mock data for the magazine articles
const getArticleData = (slug: string) => {
  const articles: Record<string, any> = {
    "evolution-of-lawn-tennis": {
      title: "The Evolution of Lawn Tennis at Wimbledon",
      category: "Heritage",
      author: "Edward Harrington",
      date: "July 12, 2026",
      image: "/images/vintage-tennis.png",
      content: [
        "Discover how a Victorian garden party pastime transformed into the world's most prestigious sporting tournament while fiercely protecting its traditions.",
        "The All England Croquet Club was founded in 1868, but it wasn't until 1877 that the first Lawn Tennis Championship was held. Since then, the pristine grass courts have witnessed the evolution of a sport that marries grace with immense physical power.",
        "Despite the passage of time and the modernization of the game, Wimbledon has stubbornly, and beautifully, held onto its roots. The strict all-white dress code, the lack of sponsor advertising around the courts, and the royal patronage all contribute to an atmosphere that feels entirely separate from the commercialized modern world."
      ]
    },
    "golf-sport-of-business": {
      title: "Why Golf Became the Sport of Business Leaders",
      category: "Lifestyle",
      author: "Victoria Sterling",
      date: "August 5, 2026",
      image: "/images/golf.png",
      content: [
        "The undeniable connection between the fairway and the boardroom, and why the most important deals are still struck on the 18th hole.",
        "Golf requires patience, strategy, and emotional control—traits highly valued in the corporate world. A four-hour round provides a unique environment for executives to bond, assess character, and build trust away from the pressures of the office.",
        "Historically, country clubs served as the epicenters of local commerce and networking. Today, while business has gone global, the tradition of cementing a partnership over a meticulously manicured 18-hole course remains a hallmark of corporate luxury."
      ]
    },
    "exclusive-sporting-clubs": {
      title: "The World's Most Exclusive Sporting Clubs",
      category: "Culture",
      author: "Charles Montgomery",
      date: "September 18, 2026",
      image: "/images/clubhouse.png",
      content: [
        "A rare glimpse inside the private sanctuaries where royalty, celebrities, and billionaires gather to celebrate their sporting passions.",
        "Beyond the iron gates and long driveways lie institutions where membership cannot simply be bought—it must be earned or inherited. Clubs like Augusta National or the Royal Yacht Squadron have admission criteria that are notoriously opaque, creating an aura of supreme exclusivity.",
        "Inside, the dark mahogany panels and leather armchairs have absorbed the whispers of world leaders and titans of industry. These clubs offer more than just world-class sporting facilities; they offer a timeless sanctuary from the public eye."
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
