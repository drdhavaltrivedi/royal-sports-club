import Image from "next/image";

export default function LearnPage() {
  return (
    <div className="min-h-screen bg-luxury-background pt-32 pb-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h1 className="font-serif text-5xl md:text-6xl text-luxury-primary mb-6">Beginner's Guide</h1>
          <div className="w-24 h-1 bg-luxury-accent mx-auto mb-6"></div>
          <p className="font-sans text-lg text-luxury-text/70 max-w-2xl mx-auto">
            Your introduction to the etiquette, attire, and fundamental traditions of elite sports.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <div className="bg-white p-10 shadow-sm border-t-4 border-luxury-accent">
            <h3 className="font-serif text-2xl text-luxury-primary mb-4">Proper Attire</h3>
            <p className="font-sans text-luxury-text/70 leading-relaxed">
              In luxury sports, dress code is not merely a suggestion—it is an unbreakable tradition. For tennis, pristine whites are mandatory. For golf, tailored trousers and collared shirts. Equestrian sports demand polished boots and structured hacking jackets.
            </p>
          </div>
          <div className="bg-white p-10 shadow-sm border-t-4 border-luxury-accent">
            <h3 className="font-serif text-2xl text-luxury-primary mb-4">Clubhouse Etiquette</h3>
            <p className="font-sans text-luxury-text/70 leading-relaxed">
              Mobile phones and business documents are strictly prohibited in the dining and lounge areas. Voices should be kept at a conversational murmur, and gentlemen are expected to remove their hats upon entering.
            </p>
          </div>
        </div>

        <div className="relative aspect-[21/9] w-full mb-16 shadow-xl">
          <Image src="/images/clubhouse.png" alt="Clubhouse Interior" fill className="object-cover" />
        </div>

        <div className="bg-luxury-primary text-white p-12 text-center">
          <h2 className="font-serif text-3xl mb-6">Private Instruction</h2>
          <p className="font-sans text-luxury-secondary/80 max-w-2xl mx-auto mb-8">
            The Royal Sports Club offers private tutelage for beginners wishing to learn the finer points of golf, polo, sailing, and fencing. Our resident professionals provide discreet, world-class coaching.
          </p>
          <button className="px-8 py-3 bg-luxury-accent text-white uppercase tracking-widest text-sm font-medium hover:bg-white hover:text-luxury-primary transition-colors">
            Inquire About Lessons
          </button>
        </div>
      </div>
    </div>
  );
}
