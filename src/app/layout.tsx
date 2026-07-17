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
    default: "The Royal Sports Club | A Borderless Digital Sanctuary for HNWIs",
  },
  description: "An exclusive, invite-only digital society connecting global leaders, innovators, and aristocrats over a shared passion for historic, high-society sports.",
  keywords: ["Royal Sports Club", "luxury sports network", "HNWI community", "aristocratic sports", "elite networking", "polo club", "private digital society", "wealth management lifestyle", "exclusive members club"],
  authors: [{ name: "The Royal Sports Club Secretariat" }],
  creator: "The Royal Sports Club",
  publisher: "The Royal Sports Club",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "The Royal Sports Club",
    description: "An exclusive, invite-only digital society connecting global leaders, innovators, and aristocrats over a shared passion for historic, high-society sports.",
    url: "https://theroyalsportsclub.com",
    siteName: "The Royal Sports Club",
    images: [
      {
        url: "/images/hero-bg.png",
        width: 1200,
        height: 630,
        alt: "The Royal Sports Club Digital Society",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Royal Sports Club | Exclusive Digital Society",
    description: "An exclusive, invite-only digital society connecting global leaders over a shared passion for historic, high-society sports.",
    images: ["/images/hero-bg.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
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
