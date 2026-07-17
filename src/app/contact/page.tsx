export default function ContactPage() {
  return (
    <div className="min-h-screen bg-luxury-background pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-16 lg:gap-24">
          
          <div>
            <h1 className="font-serif text-5xl md:text-6xl text-luxury-primary mb-6">Contact Us</h1>
            <div className="w-16 h-1 bg-luxury-accent mb-10"></div>
            
            <p className="font-sans text-lg text-luxury-text/80 leading-relaxed mb-12">
              For membership inquiries, private event bookings, or media requests, please contact the Club Concierge. Discretion is assured.
            </p>

            <div className="space-y-8 font-sans">
              <div>
                <h3 className="text-luxury-accent tracking-widest uppercase text-sm mb-2 font-medium">The Estate</h3>
                <p className="text-luxury-text/80">1885 Royal Heritage Drive<br/>Windsor, Berkshire<br/>United Kingdom</p>
              </div>
              
              <div>
                <h3 className="text-luxury-accent tracking-widest uppercase text-sm mb-2 font-medium">Concierge</h3>
                <p className="text-luxury-text/80">+44 (0) 20 7946 0199<br/>concierge@royalsportsclub.com</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-10 md:p-12 shadow-xl border border-luxury-border/20">
            <h3 className="font-serif text-3xl text-luxury-primary mb-8">Send an Inquiry</h3>
            <form className="space-y-6">
              <div>
                <label className="block text-sm tracking-widest uppercase text-luxury-text/60 mb-2">Full Name</label>
                <input type="text" className="w-full bg-luxury-background/50 border border-luxury-border/30 px-4 py-3 focus:outline-none focus:border-luxury-accent transition-colors" />
              </div>
              <div>
                <label className="block text-sm tracking-widest uppercase text-luxury-text/60 mb-2">Email Address</label>
                <input type="email" className="w-full bg-luxury-background/50 border border-luxury-border/30 px-4 py-3 focus:outline-none focus:border-luxury-accent transition-colors" />
              </div>
              <div>
                <label className="block text-sm tracking-widest uppercase text-luxury-text/60 mb-2">Message</label>
                <textarea rows={5} className="w-full bg-luxury-background/50 border border-luxury-border/30 px-4 py-3 focus:outline-none focus:border-luxury-accent transition-colors resize-none"></textarea>
              </div>
              <button type="submit" className="w-full bg-luxury-primary text-luxury-accent uppercase tracking-widest text-sm font-medium py-4 hover:bg-luxury-text hover:text-white transition-colors">
                Send Correspondence
              </button>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
}
