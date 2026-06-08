import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import ScrollProgress from "@/components/scroll-progress";
import ExitIntentModal from "@/components/exit-intent-modal";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Nexovia | Digital Systems That Generate Clients",
    template: "%s | Nexovia"
  },
  description: "We design, build, and automate digital systems for SMEs. Turn your website into a 24/7 client acquisition engine with AI automation, conversion optimization, and custom CRM solutions.",
  keywords: ["digital automation", "AI chatbots", "conversion optimization", "CRM systems", "web development", "SME growth", "lead generation", "business automation", "Next.js", "Stripe integration"],
  authors: [{ name: "Nexovia Team", url: "https://nexovia.io" }],
  creator: "Nexovia",
  publisher: "Nexovia",
  formatDetection: { email: false, address: false, telephone: false },
  metadataBase: new URL("https://nexovia.io"),
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://nexovia.io",
    siteName: "Nexovia",
    title: "Nexovia | Digital Systems That Generate Clients",
    description: "We design, build, and automate digital systems for SMEs. Turn your website into a 24/7 client acquisition engine.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Nexovia - Digital Growth Systems",
        type: "image/png"
      }
    ],
    countryName: "Global"
  },
  twitter: {
    card: "summary_large_image",
    title: "Nexovia | Digital Systems That Generate Clients",
    description: "We design, build, and automate digital systems for SMEs.",
    images: ["/og-image.png"],
    creator: "@nexovia",
    site: "@nexovia"
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1
    }
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code"
  },
  category: "Business & Technology",
  classification: "Business Services",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png"
  },
  manifest: "/site.webmanifest",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Nexovia"
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Nexovia",
              "url": "https://nexovia.io",
              "logo": "https://nexovia.io/logo.png",
              "description": "We design, build, and automate digital systems for SMEs. Turn your website into a 24/7 client acquisition engine.",
              "foundingDate": "2024",
              "founders": [{ "@type": "Person", "name": "Nexovia Team" }],
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "Global",
                "addressLocality": "Remote-First"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "email": "hello@nexovia.io",
                "contactType": "customer service",
                "availableLanguage": ["English", "French"]
              },
              "sameAs": [
                "https://twitter.com/nexovia",
                "https://linkedin.com/company/nexovia",
                "https://github.com/nexovia"
              ]
            })
          }}
        />
      </head>
      <body className={`${inter.variable} ${geistSans.variable} ${geistMono.variable} bg-bg min-h-screen flex flex-col antialiased`}>
        <ScrollProgress />
        <Navbar />
        <main className="flex-1 pt-24">{children}</main>
        <Footer />
      </body>
    </html>
  );
}