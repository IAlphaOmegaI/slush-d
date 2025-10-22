"use client";
import Image from "next/image";
import { MenuIcon, XIcon } from "@zenncore/icons";
import { Button } from "@zenncore/web/components/button";
import {
  Sheet,
  SheetTrigger,
  SheetPopup,
  SheetClose,
} from "@zenncore/web/components/sheet";
import Link from "next/link";

export const NavigationMenu = () => {
  const routes = [
    { href: "#about", label: "ABOUT" },
    { href: "#tickets", label: "TICKETS" },
    { href: "#program", label: "PROGRAM" },
    { href: "#speakers", label: "SPEAKERS" },
    { href: "#partners", label: "PARTNERS" },
    { href: "#media", label: "MEDIA" },
    { href: "#press", label: "PRESS" },
  ];

  return (
    <header className="-translate-x-1/2 fixed top-4 md:top-12 left-1/2 z-100 w-fit rounded-2xl border border-accent-foreground bg-background/60 p-4 px-8 backdrop-blur-sm">
      <div className="mx-auto flex max-w-7xl items-center gap-24 font-header">
        <Image
          src="/images/logo.svg"
          alt="logo"
          width={240}
          height={100}
          className="w-36 min-w-36"
        />

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 lg:flex">
          {routes.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-foreground text-lg tracking-wide transition-colors hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Mobile Navigation */}
        <Sheet>
          <SheetTrigger className="h-6 w-6 md:hidden">
            <MenuIcon />
          </SheetTrigger>
          <SheetPopup side="right" className="w-80 z-100">
            <div className="flex flex-col gap-6 p-6">
              <div className="flex items-center justify-between">
                <Image
                  src="/images/logo.svg"
                  alt="logo"
                  width={120}
                  height={50}
                  className="w-48 mt-4"
                />
              </div>
              <nav className="flex flex-col gap-2 mt-8 font-header">
                {routes.map((item) => (
                  <Link
                    href={item.href}
                    className="py-2 text-foreground text-2xl tracking-wide transition-colors hover:text-white font-semibold"
                  >
                    <span className="text-foreground-dimmed text-4xl">/</span>
                    {item.label}
                  </Link>
                ))}
              </nav>
            </div>
          </SheetPopup>
        </Sheet>
      </div>
    </header>
  );
};
