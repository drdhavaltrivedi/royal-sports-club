"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-bg.png"
          alt="The Royal Sports Club Estate"
          fill
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-white mb-6 leading-tight drop-shadow-lg">
            Where Tradition <br className="hidden md:block" /> Meets Excellence
          </h1>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
        >
          <p className="font-sans text-lg md:text-xl text-luxury-secondary/90 mb-10 max-w-2xl mx-auto leading-relaxed drop-shadow-md">
            Discover the world's most prestigious sporting traditions—from the manicured greens of championship golf to the regal elegance of polo and the timeless courts of Wimbledon.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6"
        >
          <Link
            href="/sports"
            className="px-8 py-4 bg-luxury-primary text-luxury-accent font-medium tracking-widest uppercase border border-luxury-accent hover:bg-luxury-accent hover:text-white transition-all duration-300 shadow-xl"
          >
            Explore Sports
          </Link>
          <Link
            href="/history"
            className="px-8 py-4 bg-transparent text-white font-medium tracking-widest uppercase border border-white hover:bg-white hover:text-luxury-primary transition-all duration-300 shadow-xl"
          >
            Learn History
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
