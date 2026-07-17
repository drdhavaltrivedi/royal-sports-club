import FaqAccordion from "@/components/ui/FaqAccordion";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "About The Society | Heritage & Exclusivity",
  description: "Learn about the core values of The Royal Sports Club: Curated Knowledge, an Invite-Only Network, and Absolute Digital Exclusivity for global leaders.",
  keywords: ["elite society values", "private networking club", "invite-only community", "high society digital sanctuary", "aristocratic traditions"],
};

const aboutFaqs = [
  { question: "How does one join the community?", answer: "Membership is strictly invite-only. Prospective members must be nominated by a current peer within our private network and pass a rigorous vetting process ensuring alignment with our core values." },
  { question: "What does membership include?", answer: "Members gain access to an exclusive digital society, connecting with high-net-worth individuals and thought leaders globally. You also receive unrestricted access to our meticulously curated archives of elite sports history, strategies, and lifestyle insights." },
  { question: "Is this a physical club?", answer: "No. The Royal Sports Club is a borderless, digital sanctuary. We transcend physical location to unite a global community of elite individuals who share a passion for aristocratic traditions and world-class sporting heritage." },
  { question: "How can I network with other members?", answer: "Upon acceptance, members are granted access to our private, encrypted networking channels and are invited to exclusive, members-only digital summits and bespoke global events." }
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-luxury-background pt-32 pb-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h1 className="font-serif text-5xl md:text-6xl text-luxury-primary mb-6">About The Society</h1>
          <div className="w-24 h-1 bg-luxury-accent mx-auto mb-6"></div>
        </div>

        <div className="prose prose-lg max-w-none text-luxury-text/80 mb-20">
          <p className="font-sans text-center text-xl max-w-3xl mx-auto leading-relaxed italic mb-12">
            "We are not merely enthusiasts of sport; we are a global society united by the artistry, discipline, and aristocratic spirit of human competition."
          </p>

          <div className="grid md:grid-cols-3 gap-8 mt-16 text-center">
            <div>
              <h3 className="font-serif text-2xl text-luxury-primary mb-4">Knowledge</h3>
              <p className="font-sans text-luxury-text/70 text-sm leading-relaxed">Curating the definitive historical archives and strategic insights of the world's most prestigious games.</p>
            </div>
            <div>
              <h3 className="font-serif text-2xl text-luxury-primary mb-4">Network</h3>
              <p className="font-sans text-luxury-text/70 text-sm leading-relaxed">Connecting a highly vetted, invite-only community of global leaders, innovators, and aristocrats.</p>
            </div>
            <div>
              <h3 className="font-serif text-2xl text-luxury-primary mb-4">Exclusivity</h3>
              <p className="font-sans text-luxury-text/70 text-sm leading-relaxed">Maintaining an absolute digital sanctuary away from the public eye, where minds and mindsets align.</p>
            </div>
          </div>
        </div>

        <div className="border-t border-luxury-border/30 pt-16 mb-20">
          <h2 className="font-serif text-3xl text-luxury-primary mb-8 text-center">Membership</h2>
          <p className="font-sans text-lg text-luxury-text/80 leading-relaxed text-center max-w-2xl mx-auto mb-8">
            Access to The Royal Sports Club is strictly invite-only. We are a private network of high-net-worth individuals dedicated to preserving the heritage of elite sports while forging unparalleled global connections.
          </p>
        </div>

        <div className="border-t border-luxury-border/30 pt-16">
          <h2 className="font-serif text-3xl text-luxury-primary mb-12 text-center">Frequently Asked Questions</h2>
          <FaqAccordion items={aboutFaqs} />
        </div>
      </div>
    </div>
  );
}
