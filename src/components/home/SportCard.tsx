"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface SportCardProps {
  title: string;
  description: string;
  image: string;
  link: string;
  delay?: number;
}

export default function SportCard({ title, description, image, link, delay = 0 }: SportCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, delay }}
      className="group bg-white flex flex-col h-full shadow-sm hover:shadow-xl transition-shadow duration-500"
    >
      <div className="relative h-64 md:h-80 w-full overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>
      <div className="p-8 flex flex-col flex-grow border-b-2 border-transparent group-hover:border-luxury-accent transition-colors duration-500">
        <h3 className="font-serif text-3xl text-luxury-primary mb-4">{title}</h3>
        <p className="font-sans text-luxury-text/70 mb-8 flex-grow leading-relaxed">
          {description}
        </p>
        <Link
          href={link}
          className="inline-flex items-center text-luxury-accent uppercase tracking-widest font-medium text-sm hover:text-luxury-primary transition-colors"
        >
          Read More
          <ArrowRight className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </motion.div>
  );
}
