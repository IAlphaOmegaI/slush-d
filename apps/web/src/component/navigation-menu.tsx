"use client";
import { MenuIcon } from "@zenncore/icons";
import {
  Sheet,
  SheetPopup,
  SheetTrigger,
} from "@zenncore/web/components/sheet";
import Image from "next/image";

export const NavigationMenu = () => {
  const routes = [
    { href: "#about", label: "ABOUT" },
    { href: "#tickets", label: "TICKETS" },
    { href: "#speakers", label: "SPEAKERS" },
    { href: "#partners", label: "PARTNERS" },
    { href: "#media", label: "MEDIA" },
    { href: "#agenda", label: "AGENDA" },
  ];

  return (
    <header className="-translate-x-1/2 fixed top-4 left-1/2 z-100 w-fit rounded-2xl border border-accent-foreground bg-background/60 p-4 px-8 backdrop-blur-sm md:top-12">
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
          <SheetPopup side="right" className="z-100 w-80">
            <div className="flex flex-col gap-6 p-6">
              <div className="flex items-center justify-between">
                <Image
                  src="/images/logo.svg"
                  alt="logo"
                  width={120}
                  height={50}
                  className="mt-4 w-48"
                />
              </div>
              <nav className="mt-8 flex flex-col gap-2 font-header">
                {routes.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className="py-2 font-semibold text-2xl text-foreground tracking-wide transition-colors hover:text-white"
                  >
                    <span className="text-4xl text-foreground-dimmed">/</span>
                    {item.label}
                  </a>
                ))}
              </nav>
            </div>
          </SheetPopup>
        </Sheet>
      </div>
    </header>
  );
};
