import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://theroyalsportsclub.com"),
  title: {
    template: "%s | The Royal Sports Club",
    default: "The Royal Sports Club | A Premium Luxury Web Experience",
  },
  description: "A world-class, premium, luxury-inspired web application dedicated to the world's most prestigious and elite sports.",
  openGraph: {
    title: "The Royal Sports Club",
    description: "Discover the heritage, culture, and prestige of elite luxury sports.",
    url: "https://theroyalsportsclub.com",
    siteName: "The Royal Sports Club",
    images: [
      {
        url: "/images/hero-bg.png",
        width: 1200,
        height: 630,
        alt: "The Royal Sports Club Estate",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Royal Sports Club",
    description: "Discover the heritage, culture, and prestige of elite luxury sports.",
    images: ["/images/hero-bg.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable} h-full`}
    >
      <body className="min-h-full flex flex-col bg-luxury-background text-luxury-text selection:bg-luxury-accent selection:text-white">
        <Navbar />
        <main className="flex-grow pt-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
