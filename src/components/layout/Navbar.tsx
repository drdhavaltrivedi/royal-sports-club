"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Search, Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const SPORTS = [
  "Golf", "Polo", "Lawn Tennis", "Horse Racing",
  "Sailing", "Yachting", "Croquet", "Fencing",
  "Rowing", "Archery", "Falconry", "Shooting"
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [sportsMenuOpen, setSportsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-luxury-primary/95 backdrop-blur-md shadow-md py-4"
          : "bg-luxury-primary py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2 group">
          <div className="w-8 h-8 md:w-10 md:h-10 border border-luxury-accent flex items-center justify-center rounded-sm transition-transform duration-500 group-hover:rotate-45">
            <span className="text-luxury-accent font-serif text-xl md:text-2xl transition-transform duration-500 group-hover:-rotate-45">R</span>
          </div>
          <span className="font-serif text-white text-xl md:text-2xl tracking-widest hidden sm:block">
            THE ROYAL
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8 text-luxury-secondary text-sm tracking-widest font-medium uppercase">
          <div
            className="relative"
            onMouseEnter={() => setSportsMenuOpen(true)}
            onMouseLeave={() => setSportsMenuOpen(false)}
          >
            <button className="flex items-center hover:text-luxury-accent transition-colors py-2">
              Sports <ChevronDown className="ml-1 w-4 h-4" />
            </button>
            <AnimatePresence>
              {sportsMenuOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute top-full left-1/2 -translate-x-1/2 w-[600px] bg-luxury-background text-luxury-text shadow-xl border border-luxury-border/30 mt-2 p-8 grid grid-cols-3 gap-6"
                >
                  {SPORTS.map((sport) => (
                    <Link
                      key={sport}
                      href={`/sports/${sport.toLowerCase().replace(/ /g, "-")}`}
                      className="text-left font-serif text-luxury-text hover:text-luxury-accent transition-colors border-b border-transparent hover:border-luxury-accent pb-1"
                    >
                      {sport}
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          <Link href="/magazine" className="hover:text-luxury-accent transition-colors">Magazine</Link>
          <Link href="/history" className="hover:text-luxury-accent transition-colors">History</Link>
          <Link href="/learn" className="hover:text-luxury-accent transition-colors">Learn</Link>
          <Link href="/about" className="hover:text-luxury-accent transition-colors">About</Link>
          <Link href="/contact" className="hover:text-luxury-accent transition-colors">Contact</Link>
        </nav>

        {/* Right Actions */}
        <div className="flex items-center space-x-4">
          <button className="text-luxury-secondary hover:text-luxury-accent transition-colors">
            <Search className="w-5 h-5" />
          </button>
          <button
            className="md:hidden text-luxury-secondary"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden bg-luxury-primary border-t border-luxury-accent/20 overflow-hidden"
          >
            <div className="px-4 py-6 space-y-4 text-luxury-secondary text-sm tracking-widest uppercase">
              <Link href="/sports" className="block pb-2 border-b border-luxury-secondary/10">Sports</Link>
              <Link href="/magazine" className="block pb-2 border-b border-luxury-secondary/10">Magazine</Link>
              <Link href="/history" className="block pb-2 border-b border-luxury-secondary/10">History</Link>
              <Link href="/learn" className="block pb-2 border-b border-luxury-secondary/10">Learn</Link>
              <Link href="/about" className="block pb-2 border-b border-luxury-secondary/10">About</Link>
              <Link href="/contact" className="block pb-2 border-b border-luxury-secondary/10">Contact</Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
