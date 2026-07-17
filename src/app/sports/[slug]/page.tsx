import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Check } from "lucide-react";
import { notFound } from "next/navigation";
import { sportsData } from "@/data/sports";
import type { Metadata } from 'next';
import Breadcrumb from "@/components/ui/Breadcrumb";
import FaqAccordion from "@/components/ui/FaqAccordion";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const sport = sportsData[slug];
  
  if (!sport) return {};
  
  return {
    title: sport.name,
    description: sport.intro,
    openGraph: {
      title: `${sport.name} | The Royal Sports Club`,
      description: sport.intro,
      images: [sport.heroImage],
    },
    twitter: {
      card: "summary_large_image",
      title: `${sport.name} | The Royal Sports Club`,
      description: sport.intro,
      images: [sport.heroImage],
    },
  };
}

export default async function SportPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const sport = sportsData[slug];

  if (!sport) {
    notFound();
  }

  return (
    <div className="flex flex-col min-h-screen bg-luxury-background pt-20">
      {/* Hero Banner */}
      <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center">
        <div className="absolute inset-0">
          <Image
            src={sport.heroImage}
            alt={sport.name}
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative z-10 text-center px-4">
          <Link href="/sports" className="inline-flex items-center text-luxury-accent hover:text-white transition-colors mb-6 uppercase tracking-widest text-sm font-medium">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Sports
          </Link>
          <h1 className="font-serif text-5xl md:text-7xl text-white mb-6 drop-shadow-lg">{sport.name}</h1>
          <p className="font-serif italic text-xl text-luxury-secondary/90 max-w-3xl mx-auto">
            {sport.quote}
          </p>
        </div>
      </section>

      {/* Content Sections */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
          
          <Breadcrumb items={[
            { label: 'Home', href: '/' },
            { label: 'Sports', href: '/sports' },
            { label: sport.name, href: `/sports/${sport.slug}` }
          ]} />

          {/* Introduction */}
          <div>
            <p className="font-sans text-2xl text-luxury-primary leading-relaxed text-center font-medium">
              {sport.intro}
            </p>
          </div>

          {/* History */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-serif text-3xl text-luxury-primary mb-8 flex items-center">
                <span className="w-8 h-[1px] bg-luxury-accent mr-4"></span>
                Heritage & History
              </h2>
              <div className="space-y-6">
                {sport.history.map((paragraph, idx) => (
                  <p key={idx} className="font-sans text-lg text-luxury-text/80 leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
            <div className="aspect-[4/5] relative bg-luxury-text shadow-2xl">
              <Image src={sport.heroImage} alt={`${sport.name} history`} fill className="object-cover opacity-80" />
              <div className="absolute inset-0 ring-1 ring-inset ring-luxury-accent/30 m-4"></div>
            </div>
          </div>

          {/* How to Play & Rules */}
          <div className="bg-white p-10 md:p-16 shadow-lg border-t-4 border-luxury-accent">
            <h2 className="font-serif text-3xl text-luxury-primary mb-8 text-center">How It Is Played</h2>
            
            <div className="mb-10">
              <h3 className="font-sans text-luxury-accent uppercase tracking-widest text-sm mb-4 font-semibold">The Objective</h3>
              <p className="font-serif text-xl text-luxury-text/90 italic">{sport.howToPlay.objective}</p>
            </div>
            
            <div>
              <h3 className="font-sans text-luxury-accent uppercase tracking-widest text-sm mb-6 font-semibold">Key Rules</h3>
              <ul className="space-y-6">
                {sport.howToPlay.keyRules.map((rule, idx) => (
                  <li key={idx} className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-6 h-6 rounded-full bg-luxury-background flex items-center justify-center border border-luxury-border/50">
                        <Check className="w-3 h-3 text-luxury-accent" />
                      </div>
                    </div>
                    <p className="ml-4 font-sans text-lg text-luxury-text/80 leading-relaxed">{rule}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Equipment */}
          <div>
            <h2 className="font-serif text-3xl text-luxury-primary mb-8 flex items-center justify-end text-right">
              Equipment & Gear
              <span className="w-8 h-[1px] bg-luxury-accent ml-4"></span>
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {sport.equipment.map((item, idx) => (
                <div key={idx} className="bg-luxury-background border border-luxury-border/30 p-6">
                  <p className="font-sans text-luxury-text/80 leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Etiquette */}
          <div className="text-center border-t border-luxury-border/30 pt-16">
            <h2 className="font-serif text-3xl text-luxury-primary mb-6">The Mark of Prestige: Etiquette</h2>
            <p className="font-sans text-lg text-luxury-text/80 leading-relaxed max-w-3xl mx-auto">
              {sport.etiquette}
            </p>
          </div>

          {/* FAQs */}
          {sport.faqs && sport.faqs.length > 0 && (
            <div className="border-t border-luxury-border/30 pt-16">
              <h2 className="font-serif text-3xl text-luxury-primary mb-12 text-center">Frequently Asked Questions</h2>
              <FaqAccordion items={sport.faqs} />
            </div>
          )}

        </div>
      </section>
    </div>
  );
}
