import Image from "next/image";
export const Footer = () => {
  return (
    <footer className="bg-background-dimmed py-20">
      <div className="mx-auto max-w-7xl px-8">
        <div className="mb-16 grid grid-cols-1 gap-12 lg:grid-cols-4">
          <div>
            <h3 className="mb-6 font-bold font-header text-foreground text-lg tracking-wide">
              BUY TICKETS
            </h3>
            <p className="mb-8 text-foreground text-lg">
              See what the buzz is all about and join us in Helsinki for Slush
              2025
            </p>
          </div>

          <div>
            <h3 className="mb-6 font-bold font-header text-foreground text-lg tracking-wide">
              STORY OF SLUSH
            </h3>
            <p className="mb-8 text-foreground text-lg">
              On a mission to help & create founders to change the world
            </p>

            <h3 className="mb-6 font-bold font-header text-foreground text-lg tracking-wide">
              STAY CONNECTED
            </h3>
            <p className="mb-8 text-foreground text-lg">
              Sign up for our newsletter
            </p>
          </div>

          {/* Column 3: POLICIES AND TERMS */}
          <div>
            <h3 className="mb-6 font-bold font-header text-foreground text-lg tracking-wide">
              POLICIES AND TERMS
            </h3>
            <p className="text-foreground text-lg">
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
                <button
                  type="button"
                  className="rounded border border-accent-foreground bg-background-rich px-4 py-2 font-bold font-header text-foreground transition-colors hover:bg-gray-800"
                >
                  Startup
                </button>
                <button
                  type="button"
                  className="rounded border border-accent-foreground bg-background-rich px-4 py-2 font-bold font-header text-foreground transition-colors hover:bg-gray-800"
                >
                  Investor
                </button>
                <button
                  type="button"
                  className="rounded border border-accent-foreground bg-background-rich px-4 py-2 font-bold font-header text-foreground transition-colors hover:bg-gray-800"
                >
                  Media
                </button>
                <button
                  type="button"
                  className="rounded border border-accent-foreground bg-background-rich px-4 py-2 font-bold font-header text-foreground transition-colors hover:bg-gray-800"
                >
                  Other
                </button>
              </div>
              <button
                type="button"
                className="rich-gray-900 w-full rounded border border-accent-foreground px-4 py-3 font-bold font-header font-semibold text-foreground transition-colors hover:bg-gray-800"
              >
                Sign up
              </button>
            </div>
          </div>
        </div>

        {/* Bottom border */}
        <div className="mb-8 h-px bg-accent-foreground" />

        {/* Copyright */}
        <div className="flex items-center justify-between">
          <Image src="/images/logo.svg" alt="logo" width={240} height={100} />
          <p className="text-foreground-dimmed">
            © 2025 TIRANA SLUSH'D. ALL RIGHTS RESERVED.
          </p>
        </div>
      </div>
    </footer>
  );
};
