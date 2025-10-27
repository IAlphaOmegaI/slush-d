import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Geist } from "next/font/google";
import type { CSSProperties } from "react";
import { ThemeProvider } from "@/context/theme";

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
});

const knockout = localFont({
  src: [
    {
      path: "../../../public/fonts/Knockout/bold.otf",
      weight: "800",
      style: "normal",
    },
    {
      path: "../../../public/fonts/Knockout/medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../../public/fonts/Knockout/normal.ttf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-knockout",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Tirana Slush'D - Edition II | October 30, 2025",
    template: "%s | Tirana Slush'D",
  },
  description:
    "Tirana Slush'D is one of the largest startup events coming from Helsinki, Finland to Albania. On October 30, 2025 at Innovation Hub, Piramida Tirana. Platform for networking, investments and international partnerships.",
  keywords: [
    "Tirana Slush'D",
    "startup",
    "innovation",
    "technology",
    "investment",
    "Tirana",
    "Albania",
    "Slush",
    "Helsinki",
    "Finland",
    "Innovation Hub",
    "Piramida",
    "entrepreneurship",
    "investors",
    "pitch competition",
    "networking",
    "partnership",
    "startup ecosystem",
    "information technology",
    "diaspora",
    "Balkans",
    "Europe",
    "venture capital",
    "angel investors",
    "tech conference",
    "startup event",
    "business networking",
    "international collaboration",
  ],
  authors: [{ name: "ELimitless Technology" }],
  creator: "ELimitless Technology",
  publisher: "Tirana Slush'D",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://tiranaslushd.org"),
  alternates: {
    canonical: "/",
    languages: {
      "sq-AL": "/sq",
      "en-US": "/en",
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://tiranaslushd.org",
    siteName: "Tirana Slush'D",
    title: "Tirana Slush'D - Edition II | October 30, 2025",
    description:
      "One of the largest startup events coming from Helsinki, Finland to Albania. Platform for networking, investments and international partnerships.",
    images: [
      {
        url: "/images/banner.png",
        width: 1200,
        height: 630,
        alt: "Tirana Slush'D - Edition II",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tirana Slush'D - Edition II | October 30, 2025",
    description:
      "One of the largest startup events coming from Helsinki, Finland to Albania.",
    images: ["/images/banner.png"],
    creator: "@tiranaslushd",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
  category: "technology",
  classification: "Startup Event",
  other: {
    "event:start_time": "2025-10-30T09:00:00+02:00",
    "event:end_time": "2025-10-30T18:00:00+02:00",
    "event:location": "Innovation Hub, Piramida Tirana",
    "event:organizer": "ELimitless Technology",
    "event:contact": "boralda.minaj@tiranaslushd.org",
    "event:phone": "+355 69 40 729 45",
  },
};

export default ({ children }: LayoutProps<"/">) => {
  return (
    <html lang="en" suppressHydrationWarning>
      <ThemeProvider>
        <body
          className={`${geist.variable} ${knockout.variable} root isolate h-screen w-screen overflow-hidden overflow-y-auto overflow-x-hidden bg-background font-body text-foreground antialiased transition-colors duration-300`}
          style={
            {
              "--font-header": "var(--font-knockout)",
              "--font-body": "var(--font-geist)",
            } as CSSProperties
          }
        >
          {children}
        </body>
      </ThemeProvider>
    </html>
  );
};
