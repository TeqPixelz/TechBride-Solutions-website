import type { Metadata } from "next";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://techbridgesolutions.co.zw"),
  title: {
    default: "TechBridge Solutions | Powering Businesses Through Technology",
    template: "%s | TechBridge Solutions"
  },
  description:
    "TechBridge Solutions provides Starlink internet solutions, CCTV systems, school technology, POS systems, website development, ICT repairs, networking solutions and technical support in Zimbabwe.",
  keywords: [
    "TechBridge Solutions",
    "Starlink installation Zimbabwe",
    "CCTV installation Zimbabwe",
    "school management systems",
    "POS systems",
    "website development Zimbabwe",
    "ICT repairs",
    "networking solutions"
  ],
  openGraph: {
    title: "TechBridge Solutions",
    description: "Powering Businesses Through Technology",
    images: ["/images/techbridge-hero.png"],
    type: "website",
    locale: "en_ZW"
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
