import Link from 'next/link';
import Image from 'next/image';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-luxury-background flex flex-col items-center justify-center p-4">
      <div className="max-w-2xl w-full bg-white p-12 md:p-20 shadow-2xl border-t-4 border-luxury-accent text-center relative overflow-hidden">
        {/* Subtle background decoration */}
        <div className="absolute -top-24 -right-24 w-64 h-64 border border-luxury-accent/10 rounded-full"></div>
        <div className="absolute -bottom-24 -left-24 w-64 h-64 border border-luxury-accent/10 rounded-full"></div>

        <h1 className="font-serif text-8xl text-luxury-primary mb-6 relative z-10">404</h1>
        <div className="w-16 h-1 bg-luxury-accent mx-auto mb-8 relative z-10"></div>
        <h2 className="font-serif text-3xl text-luxury-primary mb-6 relative z-10">Page Not Found</h2>
        
        <p className="font-sans text-luxury-text/70 mb-12 text-lg leading-relaxed relative z-10">
          We offer our sincerest apologies. The correspondence or page you are seeking cannot be located within the club's archives. It may have been relocated or perhaps never existed.
        </p>

        <Link 
          href="/" 
          className="inline-block bg-luxury-primary text-luxury-accent uppercase tracking-widest text-sm font-medium py-4 px-10 hover:bg-luxury-text hover:text-white transition-colors relative z-10"
        >
          Return to the Estate
        </Link>
      </div>
    </div>
  );
}
