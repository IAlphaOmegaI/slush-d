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
  title: "zenncore",
  description: "A modern React UI library with Tailwind CSS support",
};

export default ({ children }: LayoutProps<"/">) => {
  return (
    <html lang="en" suppressHydrationWarning>
      <ThemeProvider>
        <body
          className={`${geist.variable} ${knockout.variable} root isolate h-screen w-screen overflow-hidden overflow-y-auto overflow-x-hidden bg-background font-body text-foreground antialiased transition-colors duration-300`}
          style={
            {
              "--font-accent": "var(--font-geist-mono)",
              "--font-header": "var(--font-neue-power)",
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
