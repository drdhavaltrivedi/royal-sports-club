import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-luxury-text text-luxury-secondary py-16 md:py-24 border-t-4 border-luxury-accent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 border border-luxury-accent flex items-center justify-center rounded-sm">
                <span className="text-luxury-accent font-serif text-2xl">R</span>
              </div>
              <span className="font-serif text-2xl tracking-widest">THE ROYAL</span>
            </div>
            <p className="text-luxury-secondary/70 font-sans text-sm leading-relaxed mb-6">
              Where tradition meets excellence. Discover the world's most prestigious sporting traditions.
            </p>
            <div className="flex space-x-4 font-sans text-xs tracking-widest uppercase">
              <a href="#" className="text-luxury-secondary/50 hover:text-luxury-accent transition-colors">IN</a>
              <a href="#" className="text-luxury-secondary/50 hover:text-luxury-accent transition-colors">TW</a>
              <a href="#" className="text-luxury-secondary/50 hover:text-luxury-accent transition-colors">YT</a>
              <a href="#" className="text-luxury-secondary/50 hover:text-luxury-accent transition-colors">FB</a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-serif text-lg text-luxury-accent mb-6 tracking-wide">Luxury Sports</h4>
            <ul className="space-y-3 text-sm font-sans text-luxury-secondary/80">
              <li><Link href="/sports/golf" className="hover:text-luxury-accent transition-colors">Golf</Link></li>
              <li><Link href="/sports/polo" className="hover:text-luxury-accent transition-colors">Polo</Link></li>
              <li><Link href="/sports/lawn-tennis" className="hover:text-luxury-accent transition-colors">Lawn Tennis</Link></li>
              <li><Link href="/sports/horse-racing" className="hover:text-luxury-accent transition-colors">Horse Racing</Link></li>
              <li><Link href="/sports/sailing" className="hover:text-luxury-accent transition-colors">Sailing</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-lg text-luxury-accent mb-6 tracking-wide">Discover</h4>
            <ul className="space-y-3 text-sm font-sans text-luxury-secondary/80">
              <li><Link href="/magazine" className="hover:text-luxury-accent transition-colors">The Magazine</Link></li>
              <li><Link href="/history" className="hover:text-luxury-accent transition-colors">Our History</Link></li>
              <li><Link href="/learn" className="hover:text-luxury-accent transition-colors">Beginner's Guide</Link></li>
              <li><Link href="/about" className="hover:text-luxury-accent transition-colors">About the Club</Link></li>
              <li><Link href="/contact" className="hover:text-luxury-accent transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-serif text-lg text-luxury-accent mb-6 tracking-wide">The Newsletter</h4>
            <p className="text-luxury-secondary/70 font-sans text-sm mb-4">
              Subscribe to receive exclusive editorial content and club updates.
            </p>
            <form className="flex flex-col space-y-3">
              <input
                type="email"
                placeholder="Your email address"
                className="bg-transparent border border-luxury-secondary/20 px-4 py-3 text-sm focus:outline-none focus:border-luxury-accent transition-colors placeholder:text-luxury-secondary/30"
              />
              <button
                type="submit"
                className="bg-luxury-accent text-white px-4 py-3 text-sm font-medium tracking-widest uppercase hover:bg-luxury-accent/90 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-luxury-secondary/10 flex flex-col md:flex-row justify-between items-center text-xs text-luxury-secondary/50 font-sans">
          <p>&copy; {new Date().getFullYear()} The Royal Sports Club. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacy" className="hover:text-luxury-accent transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-luxury-accent transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
