import Image from "next/image";
import { Footer } from "@/component/footer";
import { NavigationMenu } from "@/component/navigation-menu";
import { cn } from "@zenncore/utils";
import Link from "next/link";

export default () => {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <NavigationMenu />
      <section className="relative min-h-[90vh] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/banner.png"
            alt="hero"
            fill
            className="object-cover"
          />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-8 pt-24 sm:pt-48">
          <div className="max-w-5xl">
            <Image
              src="/images/logo.svg"
              alt="logo"
              width={690}
              height={100}
              className="w-full h-auto max-w-lg sm:max-w-none"
            />
            <h3 className="mt-2 font-medium font-header text-3xl sm:text-5xl lg:text-7xl">
              30 OCTOBER 2025
            </h3>

            <div className="mt-10 sm:mt-20 flex flex-col sm:flex-row gap-4 sm:gap-8">
              <div className="group relative overflow-hidden rounded-2xl font-header">
                <div className="absolute left-0 z-20 h-full w-1/2 bg-gradient-to-r from-background to-background/0" />
                <div className="relative rounded-2xl border border-accent-foreground bg-gradient-to-br from-background to-black px-8 py-8 backdrop-blur-sm">
                  <div className="bg-gradient-to-r from-foreground to-gray-300 bg-clip-text font-black text-2xl sm:text-3xl lg:text-5xl text-transparent">
                    300+ <br /> ATTENDEES
                  </div>
                </div>
              </div>
              <div className="group relative overflow-hidden rounded-2xl font-header">
                <div className="absolute left-0 z-20 h-full w-1/2 bg-gradient-to-r from-background to-background/0" />
                <div className="relative rounded-2xl border-2 border-accent-foreground bg-gradient-to-br from-background to-black px-8 py-8 backdrop-blur-sm">
                  <div className="bg-gradient-to-r from-foreground to-gray-300 bg-clip-text font-black text-2xl sm:text-3xl lg:text-5xl text-transparent">
                    ICONIC <br /> SPEAKERS
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <section className="relative mt-24 overflow-hidden bg-background/80 bg-gradient-to-r py-4 backdrop-blur-sm">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent" />
          <div className="animate-scroll whitespace-nowrap font-bold font-header text-lg sm:text-2xl lg:text-3xl text-foreground">
            NOTHING NORMAL EVER CHANGED A DAMN THING. • NOTHING NORMAL EVER
            CHANGED A DAMN THING. • NOTHING NORMAL EVER CHANGED A DAMN THING. •
          </div>
        </section>
      </section>

      {/* Tickets Section - Exact Design Match */}
      <section id="tickets" className="bg-background py-32">
        <div className="mx-auto max-w-7xl px-8">
          <div className="mb-16 flex items-center justify-between md:flex-row flex-col gap-4">
            <div className="relative">
              <div className="absolute left-0 z-20 h-full w-1/2 bg-gradient-to-r from-background to-background/0" />
              <h2 className="mb-2 font-bold font-header text-5xl">
                TICKETS TO <br />
                TIRANA SLUSH'D 2025
              </h2>
            </div>
            <div className="rounded-2xl border border-accent-foreground bg-background-dimmed px-6 py-4 text-right w-full md:w-auto">
              <p className="mb-3 font-header font-regular">75% tickets sold</p>
              <div className="flex gap-1">
                {/* Progress bar segments */}
                {Array.from({ length: 20 }, (_, i) => (
                  <div
                    key={i}
                    className={`h-8 w-3 rounded-sm border border-accent-foreground ${
                      i < 15
                        ? i < 5
                          ? "bg-gradient-to-t from-green-500 to-green-400"
                          : i < 10
                          ? "bg-gradient-to-t from-yellow-500 to-yellow-400"
                          : i < 13
                          ? "bg-gradient-to-t from-orange-500 to-orange-400"
                          : "bg-gradient-to-t from-red-500 to-red-400"
                        : "bg-accent"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
            {tickets.map(({ name, price, benefits }, index) => (
              <div className="flex h-180 flex-col gap-6 rounded-xl border border-accent-foreground bg-background-dimmed p-4 font-header">
                <div className="text-center">
                  <div
                    className={cn(
                      "mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br shadow-lg",
                      index === 0 && "from-pink-500 to-red-500",
                      index === 1 && "from-blue-500 to-purple-500",
                      index === 2 && "from-green-500 to-teal-500",
                      index === 3 && "from-yellow-500 to-orange-500"
                    )}
                  >
                    <span className="font-bold text-foreground text-xl">S</span>
                  </div>
                  <div className="font-bold font-foreground font-header text-3xl text-foreground">
                    {price}€
                  </div>
                </div>
                <div
                  className={cn(
                    "rounded-lg bg-gradient-to-r px-4 py-2 text-foreground",
                    index === 0 && "from-pink-500 to-red-500",
                    index === 1 && "from-blue-500 to-purple-500",
                    index === 2 && "from-green-500 to-teal-500",
                    index === 3 && "from-yellow-500 to-orange-500"
                  )}
                >
                  <h3 className="text-center font-bold font-header">{name}</h3>
                </div>
                <ul className="space-y-2 text-foreground text-sm">
                  {benefits.map((benefit) => (
                    <li key={benefit}>• {benefit}</li>
                  ))}
                </ul>
                <button
                  type="button"
                  className="mt-auto w-full rounded-lg border border-accent-foreground bg-background-rich py-3 font-medium font-header hover:cursor-pointer"
                >
                  Buy now
                </button>
              </div>
            ))}
          </div>

          <p className="mt-8 text-center text-foreground-dimmed text-sm">
            May be limited in availability, or require a separate application or
            registration process.
          </p>
        </div>
      </section>

      {/* Second Photo Section - Network Visualization Background */}
      <section className="relative overflow-hidden py-32">
        {/* Network visualization background */}
        <div className="absolute inset-0 opacity-40">
          {/* Digital network lines */}
          <div className="absolute inset-0">
            {/* Horizontal lines */}
            <div className="absolute top-1/4 right-0 left-0 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent" />
            <div className="absolute top-1/2 right-0 left-0 h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent" />
            <div className="absolute top-3/4 right-0 left-0 h-px bg-gradient-to-r from-transparent via-green-400 to-transparent" />

            {/* Vertical lines */}
            <div className="absolute top-0 bottom-0 left-1/4 w-px bg-gradient-to-b from-transparent via-purple-400 to-transparent" />
            <div className="absolute top-0 bottom-0 left-1/2 w-px bg-gradient-to-b from-transparent via-cyan-400 to-transparent" />
            <div className="absolute top-0 bottom-0 left-3/4 w-px bg-gradient-to-b from-transparent via-blue-400 to-transparent" />

            {/* Intersection points */}
            <div className="absolute top-1/4 left-1/4 h-3 w-3 rounded-full bg-cyan-400 blur-sm" />
            <div className="absolute top-1/4 left-1/2 h-3 w-3 rounded-full bg-blue-400 blur-sm" />
            <div className="absolute top-1/4 left-3/4 h-3 w-3 rounded-full bg-green-400 blur-sm" />

            <div className="absolute top-1/2 left-1/4 h-3 w-3 rounded-full bg-purple-400 blur-sm" />
            <div className="absolute top-1/2 left-1/2 h-4 w-4 rounded-full bg-white blur-sm" />
            <div className="absolute top-1/2 left-3/4 h-3 w-3 rounded-full bg-cyan-400 blur-sm" />

            <div className="absolute top-3/4 left-1/4 h-3 w-3 rounded-full bg-green-400 blur-sm" />
            <div className="absolute top-3/4 left-1/2 h-3 w-3 rounded-full bg-blue-400 blur-sm" />
            <div className="absolute top-3/4 left-3/4 h-3 w-3 rounded-full bg-purple-400 blur-sm" />
          </div>
        </div>

        <div className="mx-auto flex max-w-7xl flex-col gap-24 px-8">
          <div className="relative">
            <div className="absolute left-0 z-20 h-full w-1/2 bg-gradient-to-r from-background to-background/0" />
            <h2 className="mb-2 font-bold font-header text-5xl">
              THE CORE OF THE STARTUP <br />
              ECOSYSTEM UNDER ONE ROOF
            </h2>
          </div>

          <div className="mx-auto mb-16 grid max-w-4xl grid-cols-1 gap-8 md:grid-cols-2">
            <div className="relative rounded-lg border border-accent-foreground bg-background-rich p-8 font-header">
              <h3 className="mb-4 font-bold font-header text-3xl text-foreground">
                $400,000 IN FUNDS
              </h3>
              <p className="text-foreground-dimmed leading-relaxed">
                See who's attending, and step into an investor crowd denser than
                in Silicon Valley: one VC per two founders, and the world's
                largest AUM under one roof
              </p>
            </div>

            <div className="relative rounded-lg border border-accent-foreground bg-background-rich p-8 font-header">
              <h3 className="mb-4 font-bold font-header text-3xl text-foreground">
                ICONIC SPEAKERS
              </h3>
              <p className="text-foreground-dimmed leading-relaxed">
                Hear tangible company-building insights from top founders,
                operators, and investors across four stages
              </p>
            </div>

            <div className="relative rounded-lg border border-accent-foreground bg-background-rich p-8 font-header">
              <h3 className="mb-4 font-bold font-header text-3xl text-foreground">
                20,000+ MEETINGS
              </h3>
              <p className="text-foreground-dimmed leading-relaxed">
                Access 400+ meeting tables at the heart of the venue through our
                in-house built Meeting Tool
              </p>
            </div>

            <div className="relative rounded-lg border border-accent-foreground bg-background-rich p-8 font-header">
              <h3 className="mb-4 font-bold font-header text-3xl text-foreground">
                LEGENDARY ACTIVITIES
              </h3>
              <p className="text-foreground-dimmed leading-relaxed">
                Take part in Helsinki-wide Slush Week side events hosted by our
                partners and the startup community
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto flex max-w-7xl flex-col gap-24 px-8">
        <div className="relative">
          <div className="absolute left-0 z-20 h-full w-1/2 bg-gradient-to-r from-background to-background/0" />
          <h2 className="mb-2 font-bold font-header text-5xl">
            THE PARTNERS <br />
            BEHIND THIS
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {speakers.map((speaker) => (
            <div key={speaker.name} className="flex flex-col gap-4 p-4">
              <div className="relative w-full relative">
                <div className="-skew-x-3 h-100 w-full transform bg-gradient-to-br from-yellow-400 via-orange-500 to-red-600 shadow-2xl" />

                <Image
                  src={speaker.image}
                  alt="team member"
                  fill
                  className="absolute inset-0 bg-black/30 object-cover"
                />
              </div>

              <div className="flex flex-col">
                <h3 className="capitalize font-semibold font-header text-lg text-foreground-dimmed">
                  {speaker.title}
                </h3>
                <h3 className="mb-4 font-bold font-header text-3xl text-foreground">
                  {speaker.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto flex max-w-7xl flex-col gap-24 px-8 py-32">
        <div className="relative">
          <div className="absolute left-0 z-20 h-full w-1/2 bg-gradient-to-r from-background to-background/0" />
          <h2 className="mb-2 font-bold font-header text-5xl">
            INVESTORS AT <br />
            TIRANA SLUSH'D 2025
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {investors.map((investor) => (
            <Link
              key={investor.href}
              href={investor.href}
              className="flex flex-col gap-4 p-4 items-center justify-center"
            >
              <Image
                src={investor.image}
                alt="investor"
                width={300}
                height={300}
              />
            </Link>
          ))}
        </div>
      </section>
      {/* <section className="mx-auto flex max-w-7xl flex-col gap-24 px-8 py-32">
        <div className="relative">
          <div className="absolute left-0 z-20 h-full w-1/2 bg-gradient-to-r from-background to-background/0" />
          <h2 className="mb-2 font-bold font-header text-5xl">
            COMMUNITY PARTNERS AT <br />
            TIRANA SLUSH'D 2025
          </h2>
        </div>
        <div className="grid grid-cols-3 gap-8">
          {investors.map((investor) => (
            <Link
              key={investor.href}
              href={investor.href}
              className="flex flex-col gap-4 p-4"
            >
              <Image
                src={investor.image}
                alt="investor"
                width={300}
                height={300}
              />
            </Link>
          ))}
        </div>
      </section> */}

      <section className="bg-background py-32">
        <div className="mx-auto max-w-7xl px-8">
          <h2 className="relative mb-20 bg-gradient-to-r from-white to-gray-400 bg-clip-text font-bold font-header text-5xl text-transparent">
            <div className="absolute left-0 z-20 h-full w-1/2 bg-gradient-to-r from-background to-background/0" />
            LATEST EVENT NEWS & BLOGS
          </h2>

          <div className="space-y-12">
            {/* Blog 1: Image left, text right */}
            <div className="flex flex-col items-center gap-8 lg:flex-row">
              <div className="lg:w-1/2">
                <div className="relative">
                  <div className="-skew-x-3 h-80 w-full transform bg-gradient-to-br from-green-400 via-teal-500 to-blue-600 shadow-2xl" />
                  <div className="absolute inset-0 bg-black/30" />
                </div>
              </div>
              <div className="lg:w-1/2">
                <h3 className="mb-4 font-bold font-header text-3xl text-foreground">
                  WHAT SETS SLUSH'D APART FROM OTHER TECH EVENTS?
                </h3>
                <p className="text-gray-400 text-lg">Expand+</p>
              </div>
            </div>

            {/* Blog 2: Text left, image right */}
            <div className="flex flex-col items-center gap-8 lg:flex-row-reverse">
              <div className="lg:w-1/2">
                <div className="relative">
                  <div className="h-80 w-full skew-x-3 transform bg-gradient-to-br from-purple-400 via-pink-500 to-red-500 shadow-2xl" />
                  <div className="absolute inset-0 bg-black/30" />
                </div>
              </div>
              <div className="lg:w-1/2">
                <h3 className="mb-4 font-bold font-header text-3xl text-foreground">
                  WHAT COUNTRIES ARE REPRESENTED AT SLUSH'D?
                </h3>
                <p className="text-gray-400 text-lg">Expand+</p>
              </div>
            </div>

            {/* Blog 3: Image left, text right */}
            <div className="flex flex-col items-center gap-8 lg:flex-row">
              <div className="lg:w-1/2">
                <div className="relative">
                  <div className="-skew-x-3 h-80 w-full transform bg-gradient-to-br from-yellow-400 via-orange-500 to-red-600 shadow-2xl" />
                  <div className="absolute inset-0 bg-black/30" />
                </div>
              </div>
              <div className="lg:w-1/2">
                <h3 className="mb-4 font-bold font-header text-3xl text-foreground">
                  WHAT INDUSTRIES ARE REPRESENTED AT SLUSH'D?
                </h3>
                <p className="text-gray-400 text-lg">Expand+</p>
              </div>
            </div>

            {/* Blog 4: Text left, image right */}
            <div className="flex flex-col items-center gap-8 lg:flex-row-reverse">
              <div className="lg:w-1/2">
                <div className="relative">
                  <div className="h-80 w-full skew-x-3 transform bg-gradient-to-br from-blue-400 via-indigo-500 to-purple-600 shadow-2xl" />
                  <div className="absolute inset-0 bg-black/30" />
                </div>
              </div>
              <div className="lg:w-1/2">
                <h3 className="mb-4 font-bold text-3xl text-white">
                  I DON'T USUALLY ATTEND LARGE-SCALE EVENTS, HOW IS SLUSH'D
                  DIFFERENT?
                </h3>
                <p className="text-gray-400 text-lg">Expand+</p>
              </div>
            </div>

            {/* Blog 5: Image left, text right */}
            <div className="flex flex-col items-center gap-8 lg:flex-row">
              <div className="lg:w-1/2">
                <div className="relative">
                  <div className="-skew-x-3 h-80 w-full transform bg-gradient-to-br from-teal-400 via-cyan-500 to-blue-600 shadow-2xl" />
                  <div className="absolute inset-0 bg-black/30" />
                </div>
              </div>
              <div className="lg:w-1/2">
                <h3 className="mb-4 font-bold font-header text-3xl text-foreground">
                  HOW DOES SLUSH'D ENSURE HIGH RELEVANCE OF ATTENDEES?
                </h3>
                <p className="text-gray-400 text-lg">Expand+</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

const tickets = [
  {
    name: "Startup",
    price: 395.0,
    benefits: [
      "2-day access to Slush 2025",
      "Meeting Tool with 400+ pre-bookable tables",
      "Activity Tool with 600+ side-events",
      "Mentoring, Investor Office Hours, Stage talks",
      "Founders Day and startup-only Side Events",
    ],
  },
  {
    name: "Enterprise",
    price: 1000.0,
    benefits: [
      "2-day access to Slush 2025",
      "Meeting Tool with 400+ pre-bookable tables",
      "Activity Tool with 600+ side-events",
      "Mentoring, Investor Office Hours, Stage talks",
      "Founders Day and startup-only Side Events",
    ],
  },
  {
    name: "Visitor",
    price: 100.0,
    benefits: [
      "1-day access to Slush 2025",
      "Meeting Tool with 400+ pre-bookable tables",
      "Activity Tool with 600+ side-events",
      "Mentoring, Investor Office Hours, Stage talks",
      "Founders Day and startup-only Side Events",
    ],
  },
  {
    name: "Student",
    price: 50.0,
    benefits: [
      "1-day access to Slush 2025",
      "Meeting Tool with 400+ pre-bookable tables",
      "Activity Tool with 600+ side-events",
      "Mentoring, Investor Office Hours, Stage talks",
      "Founders Day and startup-only Side Events",
    ],
  },
];

const speakers = [
  {
    name: "MARGARITA KHARTANOVICH",
    title: "Principle: STARTUP ECOSYSTEM BUILDER",
    image: "/images/speakers/partner-10.png",
  },
  {
    name: "LINN-CECILIE LINNEMANN",
    title: "Senior Partner: LUMO LABS VC",
    image: "/images/speakers/partner-13.png",
  },
  {
    name: "JULIENT COUSTARY",
    title: "CO-FOUNDER: FIL ROUGE CAPITAL",
    image: "/images/speakers/partner-2.png",
  },
  {
    name: "DANIEL UUISTALO",
    title: "Investor: 4IMPACT CAPITAL",
    image: "/images/speakers/partner-12.png",
  },
  {
    name: "WALID O. EL CHEICK",
    title: "BSV VENTURES",
    image: "/images/speakers/partner-11.png",
  },
  {
    name: "ELI ZHABEVSKA",
    title: "SOUTH CENTRAL VENTURES",
    image: "/images/speakers/partner-9.png",
  },
  {
    name: "JONI RAKIPI",
    title: "INVESTOR CONNECT PROGRAM: ETH Zürich",
    image: "/images/speakers/partner-7.png",
  },
  {
    name: "TAI TRAN",
    title: "HEAD OF INVESTOR RELATIONS AND CO-FOUNDER: SLUSH'D TIRANA",
    image: "/images/speakers/partner-8.png",
  },
  {
    name: "OSKARI ESKOLA",
    title: "CEO: BEEHEALTHY",
    image: "/images/speakers/partner-14.png",
  },
  {
    name: "TARUN SHARMA",
    title: "NOKIA VENTURES",
    image: "/images/speakers/partner-19.png",
  },
  {
    name: "ARJETA PUCA",
    title: "CEO: TIMAK",
    image: "/images/speakers/partner-17.png",
  },
  {
    name: "FRANCESKA KORANCE",
    title: "COMMUNITY OFFICER: EIT ALBANIA",
    image: "/images/speakers/partner-15.png",
  },
  {
    name: "SANJA MITROVISKA",
    title: "FOUNDER: FOUNDER GAMES",
    image: "/images/speakers/partner-16.png",
  },
  {
    name: "ANTTI RAHIKKA",
    title: "DIRECTOR: BUSINESS FINLAND",
    image: "/images/speakers/partner-1.png",
  },
  {
    name: "DELINA IBRAHIMAJ",
    title: "MINISTER: MINISTRY OF ECONOMY AND INNOVATION",
    image: "/images/speakers/partner-3.png",
  },
  {
    name: "ADAM DURICA",
    title: "INVESTMENT MANAFER: ZERO ONE HUNDRED",
    image: "/images/speakers/partner-5.png",
  },
  {
    name: "ARBJAN MAZNIKU",
    title: "-",
    image: "/images/speakers/partner-6.png",
  },
  {
    name: "RUMEN ILIEV",
    title: "PARTNER: LAUNCHHUB VENTURES",
    image: "/images/speakers/partner-4.png",
  },
];

const investors = [
  {
    href: "https://www.lumolabs.vc/",
    image: "/images/investors/investor-1.png",
  },
  {
    href: "https://launchhub.com/",
    image: "/images/investors/investor-2.png",
  },
  {
    href: "https://adriaticinvestors.com/",
    image: "/images/investors/investor-3.png",
  },
  {
    href: "https://bsv.ventures/",
    image: "/images/investors/investor-4.png",
  },
  {
    href: "https://4impact.vc/",
    image: "/images/investors/investor-5.png",
  },
  {
    href: "https://sc-ventures.com/",
    image: "/images/investors/investor-6.png",
  },
  {
    href: "https://0100.vc/",
    image: "/images/investors/investor-7.png",
  },
];
