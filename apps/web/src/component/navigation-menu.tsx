import Image from "next/image";

export const NavigationMenu = () => {
  return (
    <header className="-translate-x-1/2 fixed top-12 left-1/2 z-100 w-fit rounded-2xl border border-accent-foreground bg-background/60 p-4 px-8 backdrop-blur-sm">
      <div className="mx-auto flex max-w-7xl items-center gap-24 font-header">
        <Image
          src="/images/logo.svg"
          alt="logo"
          width={240}
          height={100}
          className="w-36 min-w-36"
        />
        <nav className="flex items-center gap-8">
          <a
            href="#about"
            className=" text-foreground text-lg tracking-wide transition-colors hover:text-white"
          >
            ABOUT
          </a>
          <a
            href="#tickets"
            className=" text-foreground text-lg tracking-wide transition-colors hover:text-white"
          >
            TICKETS
          </a>
          <a
            href="#program"
            className=" text-foreground text-lg tracking-wide transition-colors hover:text-white"
          >
            PROGRAM
          </a>
          <a
            href="#speakers"
            className=" text-foreground text-lg tracking-wide transition-colors hover:text-white"
          >
            SPEAKERS
          </a>
          <a
            href="#partners"
            className=" text-foreground text-lg tracking-wide transition-colors hover:text-white"
          >
            PARTNERS
          </a>
          <a
            href="#media"
            className=" text-foreground text-lg tracking-wide transition-colors hover:text-white"
          >
            MEDIA
          </a>
          <a
            href="#press"
            className=" text-foreground text-lg tracking-wide transition-colors hover:text-white"
          >
            PRESS
          </a>
        </nav>
      </div>
    </header>
  );
};
