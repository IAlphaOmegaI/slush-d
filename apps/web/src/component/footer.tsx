import Image from "next/image";
import { Button } from "@zenncore/web/components/button";

export const Footer = () => {
  return (
    <footer className="bg-background-dimmed py-20">
      <div className="mx-auto max-w-7xl px-8">
        <div className="mb-16 grid grid-cols-1 gap-12 lg:grid-cols-4">
          <div>
            <h3 className="mb-6 font-bold font-header text-foreground text-lg tracking-wide">
              BUY TICKETS
            </h3>
            <p className="mb-8 text-foreground text-lg  font-header">
              See what the buzz is all about and join us in Helsinki for Slush
              2025
            </p>
          </div>

          <div>
            <h3 className="mb-6 font-bold font-header text-foreground text-lg tracking-wide">
              STORY OF SLUSH
            </h3>
            <p className="mb-8 text-foreground text-lg  font-header">
              On a mission to help & create founders to change the world
            </p>

            <h3 className="mb-6 font-bold font-header text-foreground text-lg tracking-wide">
              STAY CONNECTED
            </h3>
            <p className="mb-8 text-foreground text-lg  font-header">
              Sign up for our newsletter
            </p>
          </div>

          {/* Column 3: POLICIES AND TERMS */}
          <div>
            <h3 className="mb-6 font-bold font-header text-foreground text-lg tracking-wide">
              POLICIES AND TERMS
            </h3>
            <p className="text-foreground text-lg font-header">
              Log in or sign up for a free account
            </p>
          </div>

          {/* Column 4: ORGANIZED BY */}
          <div>
            <h3 className="mb-6 font-bold font-header text-foreground text-lg tracking-wide">
              ORGANIZED BY
            </h3>
            <div className="space-y-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full rounded border border-accent-foreground bg-background-dimmed px-4 py-3 text-foreground focus:border-white focus:outline-none"
              />
              <p className="text-foreground text-lg">Who are you?</p>
              <div className="grid grid-cols-2 gap-2">
                <Button color="neutral" className="w-full  font-header">
                  Startup
                </Button>
                <Button color="neutral" className="w-full  font-header">
                  Investor
                </Button>
                <Button color="neutral" className="w-full  font-header">
                  Media
                </Button>
                <Button color="neutral" className="w-full  font-header">
                  Other
                </Button>
              </div>
              <Button
                type="button"
                color="primary"
                className="w-full  font-header"
              >
                Sign up
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom border */}
        <div className="mb-8 h-px bg-accent-foreground" />

        {/* Copyright */}
        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
          <Image src="/images/logo.svg" alt="logo" width={240} height={100} />
          <p className="text-foreground-dimmed font-header">
            © 2025 TIRANA SLUSH'D. ALL RIGHTS RESERVED.
          </p>
        </div>
      </div>
    </footer>
  );
};
