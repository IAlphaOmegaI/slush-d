import { cn } from "@zenncore/utils";
import Image from "next/image";
import Link from "next/link";
import { Footer } from "@/component/footer";
import { NavigationMenu } from "@/component/navigation-menu";
import { Radient } from "@/component/radient";
import { Spotlight } from "@/component/spotlight";
import { Button } from "@zenncore/web/components/button";

export default () => {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <NavigationMenu />
      <section className="relative h-screen min-h-screen overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/banner.png"
            alt="hero"
            fill
            className="object-cover"
          />
        </div>

        <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col justify-between px-4 pt-24 pb-24 sm:px-8 sm:pt-48">
          <div className="max-w-5xl">
            <Image
              src="/images/logo.svg"
              alt="logo"
              width={690}
              height={100}
              className="h-auto w-full max-w-lg sm:max-w-none"
            />
            <h3 className="mt-2 font-header font-medium text-3xl sm:text-5xl lg:text-7xl">
              30 OCTOBER 2025
            </h3>
          </div>
          <div className="mt-20 flex flex-col gap-4 sm:mt-auto sm:flex-row sm:gap-8">
            <div className="group relative overflow-hidden rounded-2xl font-header">
              <div className="absolute left-0 z-20 h-full w-1/2 bg-gradient-to-r from-background to-background/0" />
              <div className="relative rounded-2xl border border-accent-foreground bg-gradient-to-br from-background to-black px-8 py-8 backdrop-blur-sm">
                <div className="bg-gradient-to-r from-foreground to-gray-300 bg-clip-text font-black text-2xl text-transparent sm:text-3xl lg:text-5xl">
                  300+ <br /> ATTENDEES
                </div>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-2xl font-header">
              <div className="absolute left-0 z-20 h-full w-1/2 bg-gradient-to-r from-background to-background/0" />
              <div className="relative rounded-2xl border-2 border-accent-foreground bg-gradient-to-br from-background to-black px-8 py-8 backdrop-blur-sm">
                <div className="bg-gradient-to-r from-foreground to-gray-300 bg-clip-text font-black text-2xl text-transparent sm:text-3xl lg:text-5xl">
                  ICONIC <br /> SPEAKERS
                </div>
              </div>
            </div>
          </div>
        </div>

        <section className="absolute right-0 bottom-0 left-0 overflow-hidden bg-background/80 bg-gradient-to-r py-4 backdrop-blur-sm">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent" />
          <div className="flex animate-scroll whitespace-nowrap font-bold font-header text-foreground text-lg sm:text-2xl lg:text-3xl">
            <span className="inline-block pr-8">
              NOTHING NORMAL EVER CHANGED A DAMN THING. • NOTHING NORMAL EVER
              CHANGED A DAMN THING. • NOTHING NORMAL EVER CHANGED A DAMN THING.
              •
            </span>
            <span className="inline-block pr-8">
              NOTHING NORMAL EVER CHANGED A DAMN THING. • NOTHING NORMAL EVER
              CHANGED A DAMN THING. • NOTHING NORMAL EVER CHANGED A DAMN THING.
              •
            </span>
          </div>
        </section>
      </section>

      <section id="tickets" className="bg-background py-16">
        <div className="mx-auto max-w-7xl px-8">
          <div className="mb-16 flex flex-col items-center justify-between gap-4 md:flex-row">
            <div className="relative">
              <div className="absolute left-0 z-20 h-full w-1/2 bg-gradient-to-r from-background to-background/0 opacity-80" />
              <h2 className="mb-2 font-bold font-header text-3xl md:text-5xl">
                TICKETS TO <br />
                TIRANA SLUSH'D 2025
              </h2>
            </div>
            <div className="w-full rounded-2xl border border-accent-foreground bg-background-dimmed px-6 py-4 text-right md:w-auto">
              <p className="mb-3 font-header font-regular">75% tickets sold</p>
              <div className="flex gap-1">
                {/* Progress bar segments */}
                {Array.from({ length: 20 }, (_, index) => (
                  <div
                    // biome-ignore lint/suspicious/noArrayIndexKey: no better key
                    key={index}
                    className={`h-8 w-3 rounded-sm border border-accent-foreground ${
                      index < 15
                        ? index < 5
                          ? "bg-gradient-to-t from-green-500 to-green-400"
                          : index < 10
                          ? "bg-gradient-to-t from-yellow-500 to-yellow-400"
                          : index < 13
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
            {tickets.map(({ name, price, benefits, cta, href }, index) => (
              <div className="group relative flex h-140 flex-col gap-6 overflow-hidden rounded-xl border border-accent-foreground bg-background-dimmed p-4 font-header transition-all hover:border-opacity-80">
                {/* Animated radial gradient overlay */}
                <div
                  className="pointer-events-none absolute inset-0 animate-radial-pulse rounded-xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  style={{
                    background:
                      index === 0
                        ? "radial-gradient(circle at 50% 50%, rgba(236, 72, 153, 0.4), rgba(239, 68, 68, 0.4), transparent 70%)"
                        : index === 1
                        ? "radial-gradient(circle at 50% 50%, rgba(59, 130, 246, 0.4), rgba(168, 85, 247, 0.4), transparent 70%)"
                        : index === 2
                        ? "radial-gradient(circle at 50% 50%, rgba(34, 197, 94, 0.4), rgba(20, 184, 166, 0.4), transparent 70%)"
                        : "radial-gradient(circle at 50% 50%, rgba(234, 179, 8, 0.4), rgba(249, 115, 22, 0.4), transparent 70%)",
                  }}
                />

                <div className="relative z-10 text-center">
                  <div
                    className={cn(
                      "mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br shadow-lg transition-transform group-hover:scale-110",
                      index === 0 && "from-pink-500 to-red-500",
                      index === 1 && "from-blue-500 to-purple-500",
                      index === 2 && "from-green-500 to-teal-500",
                      index === 3 && "from-yellow-500 to-orange-500"
                    )}
                  >
                    <span className="font-bold text-foreground text-xl">S</span>
                  </div>
                  <div className="font-bold font-foreground font-body text-3xl text-foreground">
                    {price}€
                  </div>
                </div>
                <div
                  className={cn(
                    "relative z-10 rounded-lg bg-gradient-to-r px-4 py-2 text-foreground",
                    index === 0 && "from-pink-500 to-red-500",
                    index === 1 && "from-blue-500 to-purple-500",
                    index === 2 && "from-green-500 to-teal-500",
                    index === 3 && "from-yellow-500 to-orange-500"
                  )}
                >
                  <h3 className="text-center font-bold font-header">{name}</h3>
                </div>
                <ul className="relative z-10 space-y-2 text-foreground text-sm">
                  {benefits.map((benefit) => (
                    <li key={benefit}>• {benefit}</li>
                  ))}
                </ul>
                <Link href={href}>
                  <Button
                    className={cn(
                      "w-full font-header mt-auto",
                      index === 0 && "from-pink-500 to-red-500 border-pink-500",
                      index === 1 &&
                        "from-blue-500 to-purple-500 border-blue-500",
                      index === 2 &&
                        "from-green-500 to-teal-500 border-green-500",
                      index === 3 &&
                        "from-yellow-500 to-orange-500 border-yellow-500"
                    )}
                  >
                    {cta ?? "Buy now"}
                  </Button>
                </Link>
              </div>
            ))}
          </div>

          <p className="mt-8 text-center text-foreground-dimmed text-sm font-header">
            May be limited in availability, or require a separate application or
            registration process.
          </p>
        </div>
      </section>

      <section className="relative overflow-hidden py-16">
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
            <h2 className="mb-2 font-bold font-header text-3xl md:text-5xl">
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

      <section
        className="mx-auto flex max-w-7xl flex-col gap-24 px-8 relative"
        id="speakers"
      >
        <Radient className="translate-x-1/2 right-1/2 bottom-1/2 -translate-y-1/2 from-[#ddff00]/30 to-[#ddff00]/0" />
        <Radient className="-translate-x-1/2 left-1/2 top-1/2 translate-y-1/2 from-[#00ffee]/30 to-[#00ffee]/0" />
        <div className="relative">
          <div className="absolute left-0 z-20 h-full w-1/2 bg-gradient-to-r from-background to-background/0 opacity-80" />
          <h2 className="mb-2 font-bold font-header text-3xl md:text-5xl">
            THE SPEAKERS <br />
            AT TIRANA SLUSH'D 2025
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3" id="speakers">
          {speakers
            .sort((a, b) => a.index - b.index)
            .map((speaker, index) => (
              <div
                // biome-ignore lint/suspicious/noArrayIndexKey: no better key
                key={index}
                className="flex flex-col gap-4 p-4 group"
              >
                <div className="relative w-full">
                  <div className="-skew-x-3 aspect-square w-full transform bg-gradient-to-br from-yellow-400 via-orange-500 to-red-600 shadow-2xl" />
                  <Image
                    src={speaker.image}
                    alt="team member"
                    fill
                    className="absolute inset-0 w-full object-contain grayscale"
                  />
                  <div className="size-full font-header p-4 absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 size-full bg-black/80">
                    {speaker.description}
                  </div>
                </div>

                <div className="flex flex-col">
                  <h3 className="font-header text-foreground-dimmed capitalize">
                    {speaker.title}
                  </h3>
                  <h3 className="mb-4 font-bold font-header text-2xl text-foreground">
                    {speaker.name}
                  </h3>
                </div>
              </div>
            ))}
        </div>
      </section>

      <section className="mx-auto flex max-w-7xl flex-col gap-12 px-8 py-16 relative">
        <Spotlight className="h-40 min-h-40" />
        <div className="relative">
          <div className="absolute left-0 z-20 h-full w-1/2 bg-gradient-to-r from-background to-background/0 opacity-80" />
          <h2 className="mb-2 font-bold font-header text-3xl md:text-5xl">
            INVESTORS AT <br />
            <Image
              src="/images/logo.svg"
              alt="logo"
              className="inline-block"
              width={320}
              height={100}
            />{" "}
            2025
          </h2>
        </div>
        <Link
          href={investors[0].href}
          className="flex flex-col items-center justify-center gap-4 p-4 w-full h-64"
        >
          <Image
            src={investors[0].image}
            alt="investor"
            width={300}
            height={300}
          />
          <h3 className="text-foreground-dimmed text-lg font-header text-secondary  uppercase">
            Our Lead Investor of the 300K Investment Fund
          </h3>
        </Link>
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-5">
          {investors.slice(1).map((investor, index) => (
            <Link
              // biome-ignore lint/suspicious/noArrayIndexKey: no better key
              key={index}
              href={investor.href}
              className="flex flex-col items-center justify-center gap-4 p-4 w-full h-44"
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
      <section
        className="mx-auto flex max-w-7xl flex-col gap-12 px-8 py-16"
        id="partners"
      >
        <div className="relative">
          <div className="absolute left-0 z-20 h-full w-1/2 bg-gradient-to-r from-background to-background/0 opacity-80" />
          <h2 className="mb-2 font-bold font-header text-3xl md:text-5xl">
            STRATEGIC PARTNERS OF <br />
            <Image
              src="/images/logo.svg"
              alt="logo"
              className="inline-block"
              width={320}
              height={100}
            />{" "}
            2025
          </h2>
          <h3 className="text-green-400 md:text-lg font-header">
            Shaping impact through strategic partnership.
          </h3>
        </div>
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-5">
          {partners.map((partner, index) => (
            <Link
              // biome-ignore lint/suspicious/noArrayIndexKey: no better key
              key={index}
              href={partner.href}
              className="flex flex-col items-center justify-center gap-4 p-4 w-full h-44"
            >
              <Image
                src={partner.image}
                alt="investor"
                width={300}
                height={300}
              />
            </Link>
          ))}
        </div>
      </section>
      <section className="mx-auto flex max-w-7xl flex-col gap-12 px-8 py-16">
        <div className="relative">
          <div className="absolute left-0 z-20 h-full w-1/2 bg-gradient-to-r from-background to-background/0 opacity-80" />
          <h2 className="mb-2 font-bold font-header text-3xl md:text-5xl">
            COMMUNITY PARTNERS OF <br />
            <Image
              src="/images/logo.svg"
              alt="logo"
              className="inline-block"
              width={320}
              height={100}
            />{" "}
            2025
          </h2>
          <h3 className="text-secondary text-lg  font-header pl-1">
            Bridging ecosystems through community power.
          </h3>
        </div>
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-5 relative">
          <Radient className="translate-x-1/2 right-0 top-0 from-secondary/30 to-secondary/0" />
          {community.map((partner, index) => (
            <Link
              // biome-ignore lint/suspicious/noArrayIndexKey: no better key
              key={index}
              href={partner.href}
              className="flex flex-col items-center justify-center gap-4 p-4 w-full h-44"
            >
              <Image
                src={partner.image}
                alt="investor"
                width={300}
                height={300}
                className="brightness-0 invert"
              />
            </Link>
          ))}
        </div>
      </section>
      <section className="mx-auto flex max-w-7xl flex-col gap-12 px-8 py-16 relative">
        <div className="relative">
          <div className="absolute left-0 z-20 h-full w-1/2 bg-gradient-to-r from-background to-background/0 opacity-80" />
          <h2 className="mb-2 font-bold font-header text-3xl md:text-5xl">
            GROWTH PARTNERS OF <br />
            <Image
              src="/images/logo.svg"
              alt="logo"
              className="inline-block"
              width={320}
              height={100}
            />{" "}
            2025
          </h2>
          <h3 className="text-secondary text-lg pl-1  font-header">
            Empowering ideas through meaningful support.
          </h3>
        </div>
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-5">
          {growth.map((partner, index) => (
            <Link
              // biome-ignore lint/suspicious/noArrayIndexKey: no better key
              key={index}
              href={partner.href}
              className="flex flex-col items-center justify-center gap-4 p-4 w-full h-44"
            >
              <Image
                src={partner.image}
                alt="investor"
                width={300}
                height={300}
                className="brightness-0 invert"
              />
            </Link>
          ))}
        </div>
      </section>
      <section className="mx-auto flex max-w-7xl flex-col gap-12 px-8 py-16 relative">
        <Radient className="translate-x-1/2 right-1/2 bottom-0 translate-y-1/2 from-primary/30 to-primary/0" />
        <div className="relative">
          <div className="absolute left-0 z-20 h-full w-1/2 bg-gradient-to-r from-background to-background/0 opacity-80" />
          <h2 className="mb-2 font-bold font-header text-3xl md:text-5xl">
            OUR ESTIMEED <br />
            SPONSORS
          </h2>
          <h3 className="text-green-400 md:text-lg  font-header">
            Dring innovation through shared ambition.
          </h3>
        </div>
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-5">
          {sponsors.map((partner, index) => (
            <Link
              // biome-ignore lint/suspicious/noArrayIndexKey: no better key
              key={index}
              href={partner.href}
              className="flex flex-col items-center justify-center gap-4 p-4 w-full h-44"
            >
              <Image
                src={partner.image}
                alt="investor"
                width={300}
                height={300}
                className="brightness-0 invert"
              />
            </Link>
          ))}
        </div>
      </section>
      <section
        className="mx-auto flex max-w-7xl flex-col gap-12 px-8 py-16"
        id="media"
      >
        <div className="relative">
          <div className="absolute left-0 z-20 h-full w-1/2 bg-gradient-to-r from-background to-background/0 opacity-80" />
          <h2 className="mb-2 font-bold font-header text-3xl md:text-5xl">
            OUR PRESS <br />
            PARTNERS
          </h2>
          <h3 className="text-secondary text-lg pl-1  font-header">
            Bringing innovation through shared ambition.
          </h3>
        </div>
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-5">
          {media.map((partner, index) => (
            <Link
              // biome-ignore lint/suspicious/noArrayIndexKey: no better key
              key={index}
              href={partner.href}
              className="flex flex-col items-center justify-center gap-4 p-4 w-full h-44 max-h-44"
            >
              <Image
                src={partner.image}
                alt="investor"
                width={300}
                height={300}
                className="brightness-0 invert"
              />
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-background py-16">
        <div className="mx-auto max-w-7xl px-8">
          <h2 className="relative mb-20 bg-gradient-to-r from-white to-gray-400 bg-clip-text font-bold font-header text-5xl text-transparent">
            <div className="absolute left-0 z-20 h-full w-1/2 bg-gradient-to-r from-background to-background/0 opacity-80" />
            LATEST EVENT NEWS & BLOGS
          </h2>

          <div className="space-y-12">
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
                <p className="text-gray-400 text-lg font-header">Expand+</p>
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
                <p className="text-gray-400 text-lg font-header">Expand+</p>
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
                <p className="text-gray-400 text-lg font-header">Expand+</p>
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
                <h3 className="mb-4 font-bold text-3xl text-white font-header">
                  I DON'T USUALLY ATTEND LARGE-SCALE EVENTS, HOW IS SLUSH'D
                  DIFFERENT?
                </h3>
                <p className="text-gray-400 text-lg font-header">Expand+</p>
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

      <section id="agenda" className="bg-background py-16 relative">
        <Radient className="translate-x-1/2 right-1/2 top-0 from-[#00ffee]/20 to-[#00ffee]/0" />
        <div className="mx-auto max-w-7xl px-8">
          <div className="relative mb-16">
            <div className="absolute left-0 z-20 h-full w-1/2 bg-gradient-to-r from-background to-background/0 opacity-80" />
            <h2 className="mb-4 font-bold font-header text-5xl">
              EVENT AGENDA <br />
              <Image
                src="/images/logo.svg"
                alt="logo"
                className="inline-block"
                width={320}
                height={100}
              />{" "}
              2025
            </h2>
            <p className="text-foreground-dimmed text-lg">
              Your complete guide to two days of innovation, networking, and
              inspiration
            </p>
          </div>

          <div className="mb-12">
            <div className="relative mb-4">
              <div className="absolute left-0 z-20 h-full w-1/2 bg-gradient-to-r from-background to-background/0 opacity-80" />
              <h2 className="mb-4 font-bold font-header text-3xl">
                WEDNESDAY, OCTOBER 29 - INVESTOR DAY
              </h2>
            </div>
            <div className="rounded-xl border border-accent-foreground bg-background-dimmed p-6">
              <div className="flex flex-col gap-4 md:flex-row md:items-start md:gap-8">
                <div className="font-header text-2xl font-bold text-foreground md:min-w-[120px] tabular-nums">
                  19:00 - 22:00
                </div>
                <div className="flex-1">
                  <h4 className="mb-2 font-header font-bold text-xl text-foreground">
                    Dinner with Investors
                  </h4>
                  <p className="text-foreground-dimmed">
                    Sky Tower, Tirana • By invitation only
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="relative mb-4">
              <div className="absolute left-0 z-20 h-full w-1/2 bg-gradient-to-r from-background to-background/0 opacity-80" />
              <h2 className="font-bold font-header text-3xl">
                THURSDAY, OCTOBER 30, 2025 - MAIN EVENT
              </h2>
              <p className="text-foreground text-2xl mb-4  tabular-nums">
                09:30 - 19:00
              </p>
            </div>

            <div className="space-y-4 relative">
              <Radient className="-translate-x-1/2 left-0 -bottom-full translate-y-full from-secondary/30 to-secondary/0" />
              {agenda.map((item, index) => (
                <div
                  // biome-ignore lint/suspicious/noArrayIndexKey: no better key
                  key={index}
                  className="rounded-xl border border-accent-foreground bg-background-dimmed p-6 transition-all hover:border-accent-foreground/60 hover:bg-background-rich"
                >
                  <div className="flex flex-col gap-4 md:flex-row md:items-start md:gap-8 font-header">
                    <div className="font-header text-2xl font-bold text-foreground md:min-w-[120px]  tabular-nums">
                      {item.time}
                    </div>
                    <div className="flex-1">
                      <h4 className="mb-2 font-header font-bold text-xl text-foreground">
                        {item.title}
                      </h4>
                      {item.moderator && (
                        <p className="mb-2 text-foreground-dimmed">
                          <span className="font-semibold font-body">
                            Moderator:
                          </span>{" "}
                          {item.moderator}
                        </p>
                      )}
                      {item.speakers && (
                        <p className="mb-2 text-foreground-dimmed">
                          <span className="font-semibold  font-body">
                            Speakers:
                          </span>{" "}
                          {item.speakers}
                        </p>
                      )}
                      {item.panelists && (
                        <p className="mb-2 text-foreground-dimmed">
                          <span className="font-semibold  font-body">
                            Panelists:
                          </span>{" "}
                          {item.panelists}
                        </p>
                      )}
                      {item.description && (
                        <p className="mt-2 text-foreground-dimmed text-sm leading-relaxed">
                          {item.description}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* After Party */}
          <div className="relative mb-4 mt-16">
            <div className="absolute left-0 z-20 h-full w-1/2 bg-gradient-to-r from-background to-background/0 opacity-80" />
            <h2 className="font-bold font-header text-3xl">
              AFTER PARTY & NETWORKING
            </h2>
            <p className="text-foreground text-2xl mb-4 font-header">
              18:30 onwards
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

const agenda = [
  {
    time: "09:00 – 09:30",
    title: "Registration & Networking",
    description:
      "Ambient music, welcome coffee and networking among participants.",
  },
  {
    time: "09:30 – 09:35",
    title: "Official Opening with Video",
    speakers: "Boralda Minaj, Enxhi Minaj, Tai Tran",
    description:
      "Official Slush video recap: history, energy Tirana Slush'D & Slush Main Event",
  },
  {
    time: "09:35 – 09:38",
    title: "Narrative Stories – Last Year's Winners",
    speakers: "Jona Dodaj (Bliss.al), Arber Kadia (Patoko)",
    description:
      "Stories of passion, innovation, and resilience from last year's winners.",
  },
  {
    time: "09:50 – 10:10",
    title: "Opening Remarks",
    speakers: "Edi Rama, Delina Ibrahimaj, Arbjan Mazniku, Ekaterina Solovova",
    description:
      "Welcoming remarks from key partners and supporters of Tirana Slush'D.",
  },
  {
    time: "10:30 – 10:55",
    title: "Panel 1: Albania, the Next Rising Star",
    moderator: "Brenton Bënja",
    panelists:
      "Arjan Ymeri (Startup Albania), Laura Saro (AIDA), Sebastian (GIZ/EU4Innovation), Peter Vesterbacka",
    description:
      "The Albanian startup ecosystem is transitioning into a new phase, from ideation to building structures and securing real investments.",
  },
  {
    time: "11:30 – 11:50",
    title: "Fireside Chat – Born Global",
    moderator: "Enxhi Minaj",
    speakers: "Oskari Eskola (CEO, BeeHealthy)",
    description:
      "An inspiring example of how healthcare innovation can emerge from a small market and go global.",
  },
  {
    time: "11:50 – 12:10",
    title: "HealthTech: Building the Next Generation of HealthTech Founders",
    moderator: "Margarita Khartanovich",
    panelists:
      "Julia Hoxha (Zana), Michele Biring-Pani (Barleti Medical Group), Fation Losha (DigitSapiens)",
    description:
      "Exploring the future of healthcare technology and innovation.",
  },
  {
    time: "12:10 – 12:35",
    title: "DeepTech 101: How Science-Based Startups Shape the Future",
    moderator: "Eelis Lehtinen",
    panelists:
      "Franceska Korance (EIT Hub), Joni Rakipi (ETH Zurich), Mateo de Bardeci (DeepPSY)",
    description:
      "What is DeepTech and why is it important? What are the key steps in founding a DeepTech startup?",
  },
  {
    time: "12:35 – 13:00",
    title: "From Zero to One: The Story of Albania's First Venture Investment",
    moderator: "Daniel Uusitalo (4Impact VC)",
    speakers:
      "Julien Coustaury (Fil Rouge Capital), Gentjan Zotaj (AILend), Briseida Gjoza (ConsciESG)",
    description: "The journey of Albania's pioneering venture investments.",
  },
  {
    time: "13:00 – 13:15",
    title: "Lunch Break",
    description: "Refreshments and networking opportunity.",
  },
  {
    time: "13:15 – 13:35",
    title: "Startup Mindset: How to Win as a Founder",
    speakers: "Walid O El Ceikh (BSV Ventures)",
    description:
      "Essential insights on developing the right mindset for startup success.",
  },
  {
    time: "13:35 – 14:00",
    title: "She Built It – Women Leading the Tech Revolution",
    moderator: "Marjana Prifti Skenduli (AI Albania)",
    panelists:
      "Arjeta Puca (TIMAK), Linda Shomo (EasyPay), Sanja Mitrovska (Founders Game)",
    description:
      "Five women who have made it possible – inspiration, leadership and innovation in action.",
  },
  {
    time: "14:00 – 14:20",
    title: "Inside the VC Mind: What We Really Look for in Founders",
    moderator: "Tai Tran",
    panelists:
      "Linn-Cecilie Linnemann (LUMO Labs VC), Eli Zhabevska (South Central Ventures), Shefqet Avdullahu, Adam Durica (Zero One Hundred)",
    description:
      "Direct insights from venture capitalists on what makes founders investable.",
  },
  {
    time: "14:20 – 14:45",
    title: "FinTech Albania 2025 Panel",
    moderator: "Marko Ruokolainen (Signicat)",
    panelists:
      "Deivis Shomo (EasyPay), Elton Collaku (Union/Western Union), Idlir Ahmeti (Paysera), Rumen Iliev (LaunchHub Ventures)",
    description:
      "The future of financial technology in Albania and the region.",
  },
  {
    time: "14:45 – 14:50",
    title: "Break",
  },
  {
    time: "14:50 – 15:35",
    title: "Final Pitch Competition (First 5 Startups)",
    description: "Founders present their dreams to the world of investments.",
  },
  {
    time: "15:35 – 15:40",
    title: "Break",
  },
  {
    time: "15:40 – 16:25",
    title: "Final Pitch Competition (Last 5 Startups)",
    description: "The second half of the pitch competition continues.",
  },
  {
    time: "16:25 – 16:45",
    title: "Funded or Ghosted: The Startup Funding Game of the Next Decade",
    moderator: "Margarita Khartanovich",
    description: "Exploring the evolving landscape of startup funding.",
  },
  {
    time: "16:30 – 16:50",
    title: "Artistic Performance",
    description: "10-minute break with live artistic performance.",
  },
  {
    time: "16:50 – 18:00",
    title: "Awards Ceremony & Closing",
    speakers: "Antti Rahikka",
    description:
      "Announcement of winners: Investor Prize (€300,000), 7 tickets to Slush Finland, and unconditional Prize (€30,000). Thanks from organizers and jury.",
  },
];

const tickets = [
  {
    name: "Startup",
    price: 50,
    benefits: [
      "2-day access to Slush 2025",
      "Meeting Tool with 400+ pre-bookable tables",
      "Activity Tool with 600+ side-events",
      "Mentoring, Investor Office Hours, Stage talks",
      "Founders Day and startup-only Side Events",
    ],
    href: "https://eventa.al/events/afda1ca3-2385-4b1a-99fc-b39f77b39efa?ticketCode=M25719X",
  },
  {
    name: "Investor",
    price: 100.0,
    benefits: [
      "2-day access to Slush 2025",
      "Meeting Tool with 400+ pre-bookable tables",
      "Activity Tool with 600+ side-events",
      "Mentoring, Investor Office Hours, Stage talks",
      "Founders Day and startup-only Side Events",
    ],
    href: "https://eventa.al/events/afda1ca3-2385-4b1a-99fc-b39f77b39efa",
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
    href: "https://eventa.al/events/afda1ca3-2385-4b1a-99fc-b39f77b39efa",
  },
  {
    name: "Student",
    price: 10.0,
    benefits: [
      "1-day access to Slush 2025",
      "Meeting Tool with 400+ pre-bookable tables",
      "Activity Tool with 600+ side-events",
      "Mentoring, Investor Office Hours, Stage talks",
      "Founders Day and startup-only Side Events",
    ],
    href: "https://www.eventbrite.com/e/tirana-slushd-2025-tickets-1034699250180",
    cta: "Apply",
  },
];

const speakers = [
  {
    name: "MARGARITA KHARTANOVICH",
    title: "Principle: STARTUP ECOSYSTEM BUILDER",
    image: "/images/speakers/speaker-25.png",
    description:
      "With nearly 20 years of experience in technology and media communications, Margarita Khartanovich is passionate about building ambitious and impactful projects. Her expertise spans PR, journalism, digital marketing, investor relations, and venture-building. As a co-founder, team leader, and ecosystem operator, Margarita thrives in multi-stakeholder environments, collaborating with diverse teams to bring ideas to life. Driven by a desire to positively impact industries and lives, she specializes in simplifying complex concepts and delivering tangible results through innovation.",
    index: 7,
  },
  {
    name: "LINN-CECILIE LINNEMANN",
    title: "Senior Partner: LUMO LABS VC",
    image: "/images/speakers/speaker-10.png",
    description:
      "Linn-Cecilie is a serial entrepreneur, investor, and impact leader with over two decades of experience building companies, shaping strategies, and driving innovation across climate, health, and education. As Senior Partner at LUMO Labs VC, she backs founders using deep tech, AI, and data-driven solutions to tackle urbanization’s most pressing challenges, from sustainability to healthcare. Previously CEO of Katapult Group, she scaled one of Europe’s most influential impact VCs, mobilizing capital toward climate-positive technologies.",
    index: 3,
  },
  {
    name: "PETER VESTERBACKA",
    title: "FOUNDER & INVESTOR: THE MIGHTY EAGLE",
    image: "/images/speakers/speaker-17.png",
    description:
      "Peter Vesterbacka is a Finnish entrepreneur and innovator best known as the co-founder of Slush, one of the world’s leading startup events, and as the creator of the mobile game Angry Birds during his time at Rovio. Renowned for his visionary approach and bold ideas, Vesterbacka has played a key role in promoting Finland’s startup ecosystem and fostering global entrepreneurship. He continues to champion education, innovation, and cross-border collaboration through various ventures and initiatives.",
    index: 4,
  },
  {
    name: "JULIEN COUSTARY",
    title: "CO-FOUNDER: FIL ROUGE CAPITAL",
    image: "/images/speakers/speaker-3.png",
    description:
      "Julien bridges telecommunications innovation, operational excellence, and venture capital, founding Fil Rouge Capital to back bold founders across emerging markets with both capital and hands-on guidance. His perspective is shaped by two decades of telecom leadership across four continents—from pioneering mobile networks in Haiti, Slovenia, and the Solomon Islands to co-founding a Y Combinator-backed startup in Silicon Valley. As a Y Combinator alum (S11) who scaled operations in some of the world's most challenging markets, he combines deep operational expertise with investor discipline.",
    index: 2,
  },
  {
    name: "JULIA HOXHA",
    title: "FOUNDER & CEO: ZANA",
    image: "/images/speakers/speaker-30.jpg",
    description:
      "Julia Hoxha is the Co-founder and CEO of Zana, an AI-driven health technology company based in Germany that develops conversational AI solutions for healthcare. With over 15 years of experience at the intersection of technology, data, and health, she also leads the Health Working Group at the German AI Association and serves as Chair of the Board at Rubicon. Julia’s academic background includes a Doctorate in Computer Science from the Karlsruhe Institute of Technology and research experience at Columbia University in medical informatics.",
    index: 13,
  },
  {
    name: "DANIEL UUISTALO",
    title: "Investor: 4IMPACT CAPITAL",
    image: "/images/speakers/speaker-7.png",
    description:
      "Investor at 4impact Capital, a European early-stage venture capital firm focused on purpose-driven digital technology startups. Daniel brings in experience across venture capital, management consulting, and risk management. Previously at Helen Ventures, he worked on investments in energy, mobility, and decarbonization, preparing investment cases and collaborating with C-suite and board-level decision-makers. With a multidisciplinary background from consulting and startup ecosystems, Daniel combines analytic approach and international experience to help founders scale transformative tech4good ventures.",
    index: 8,
  },
  {
    name: "WALID O. EL CHEICK",
    title: "BSV VENTURES",
    image: "/images/speakers/speaker-12.png",
    description:
      "Walid is a Venture Partner at Baltic Sandbox Ventures, operating from our Helsinki office. He is responsible for portfolio support and business development coaching. As a pitching coach and startup mentor, he has worked in dozens of accelerators, incubators, and universities. Walid is the author of the 'Pitching For Life' ebook (500k downloads), which he has used to coach over 125k participants. He is active in the startup ecosystem in Finland and Europe, attending conferences as a guest speaker, panelist and pitching judge.",
    index: 6,
  },
  {
    name: "ELI ZHABEVSKA",
    title: "SOUTH CENTRAL VENTURES",
    image: "/images/speakers/speaker-27.png",
    description:
      "Eli is a finance professional turned venture investor, bringing over a decade of experience in banking regulation, risk management, and financial analysis to her role as Principal at South Central Ventures. Having shaped financial sector policy and supervised banks under EU and Basel frameworks, she now channels that expertise into sourcing, evaluating, and supporting high-potential startups across the Western Balkans. Passionate about fostering entrepreneurship in emerging markets, Eli partners with founders to strengthen their strategies, scale their businesses, and position regional innovations for global impact.",
    index: 5,
  },
  {
    name: "JONI RAKIPI",
    title: "INVESTOR CONNECT PROGRAM: ETH Zürich",
    image: "/images/speakers/speaker-7.png",
    description:
      "Joni bridges deeptech innovation, venture capital, and academia, leading ETH Zürich’s Investor Connect program to connect groundbreaking spin-offs with investors while advising founders on their path from lab to market. His perspective is shaped by venture experience at Plug and Play, driving startup–corporate collaborations at Roche, and guiding one of Europe’s most vibrant student entrepreneurship communities as President of the ETH Entrepreneur Club. With a background in engineering and product innovation, he thrives at the intersection of technology and strategy, passionate about enabling breakthrough science to scale globally and empowering the next wave of deeptech entrepreneurs.",
    index: 16,
  },
  {
    name: "TAI TRAN",
    title: "HEAD OF INVESTOR RELATIONS AND CO-FOUNDER: SLUSH'D TIRANA",
    image: "/images/speakers/speaker-28.png",
    description:
      "Tai Tran is recognized for his contributions to building the innovation and startup ecosystem in Finland and the Nordics. With a strong focus on supporting early-stage startups, he has played a crucial role in fostering innovation throughout the region. As a dynamic young entrepreneur, Tai is committed to empowering emerging founders and bridging the gap between ideas and impact. His deep insights into the startup landscape, along with extensive hands-on experience, make him a valuable asset to Slush D Tirana. Tai will join as a moderator during the event.",
    index: 18,
  },
  {
    name: "OSKARI ESKOLA",
    title: "CEO: BEEHEALTHY",
    image: "/images/speakers/speaker-8.png",
    description:
      "Oskari is a growth-driven leader at the intersection of healthcare and technology, serving as CEO of BeeHealthy, the leading digital patient engagement platform across EMEA. With a career spanning strategy consulting, private equity, and senior executive roles, he has scaled digital health services internationally, led expansion into new markets, and steered innovation within one of Europe’s largest healthcare groups. Previously with Bain & Company, Tele2, and Triton, Oskari brings a sharp strategic lens to building businesses and a passion for transforming healthcare delivery through scalable, patient-centered technology.",
    index: 0,
  },
  {
    name: "LINDA SHOMO",
    title: "FOUNDER & CEO: EASYPAY ALBANIA",
    image: "/images/speakers/speaker-14.png",
    description:
      "Linda Shomo is the Founder and CEO of EasyPay, Albania’s leading fintech company and a pioneer in digital payments and financial inclusion. For nearly two decades, she has driven innovation in electronic payment systems, empowering both banked and unbanked populations with accessible, secure, and real-time financial services. Linda also serves as Country Ambassador for the European Women Payments Network (EWPN) and chairs the Digital Business Committee at the American Chamber of Commerce in Albania.",
    index: 19,
  },
  {
    name: "ARJETA PUCA",
    title: "CEO: TIMAK",
    index: 22,
    image: "/images/speakers/speaker-23.jpg",
    description:
      "Arjeta Puca is the CEO and Founder of TIMAK, an Albanian engineering company specializing in emergency and military vehicles, pile driver machines, and truck superstructures. As the first woman military vehicle producer in the region, she has redefined innovation and leadership in a traditionally male-dominated industry.",
  },
  {
    name: "ARJAN YMERI",
    title: "GENERAL DIRECTOR: STARTUP ALBANIA",
    index: 23,
    image: "/images/speakers/speaker-31.jpg",
    description:
      "Arjan Ymeri is the Director General of Startup Albania, leading national efforts to grow and strengthen Albania’s startup ecosystem. With extensive experience in innovation management, digital transformation, and business strategy, he has been instrumental in connecting entrepreneurs, researchers, and corporations to drive technological progress.",
  },
  {
    name: "MICHELE BIRING-PANI",
    title: "BUSINESS DEVELOPMENT DIRECTOR: BARLETI MEDICAL GROUP",
    index: 23,
    image: "/images/speakers/speaker-26.jpg",
    description:
      "Michele Biring-Pani is a seasoned healthcare and non-profit leader with over 15 years of experience, currently serving as Business Development Director at Barleti Medical Group. She drives innovation across an ecosystem that includes a university, healthcare providers, a research institute, and startups. Passionate about improving healthcare accessibility in the Balkans, Michele uses her expertise and regional connections to create lasting impact.",
  },
  {
    name: "MATEO DEBARDECI",
    title: "FOUNDER & CEO: DEEPPSY",
    image: "/images/speakers/speaker-32.png",
    index: 20,
    description:
      "Mateo bridges cutting-edge neurotechnology, psychiatric research, and entrepreneurship, leading DeepPsy, a deep-tech startup, as Co-Founder and Co-CEO to revolutionize psychiatric treatment through data-driven EEG and ECG analysis. His perspective is shaped by deep academic research at University of Zurich and Ludwig-Maximilians-Universität München, where he published groundbreaking work on deep learning applications in mental health, alongside hands-on experience in medical device regulations and quality standards.",
  },
  {
    name: "MARJANA PRIFTI SKENDULI",
    title: "FOUNDER: AI ALBANIA",
    image: "/images/speakers/speaker-20.jpg",
    index: 21,
    description:
      "Dr. Marjana Prifti Skenduli is a Postdoctoral Researcher in Quantum AI/ML at the University of Bari and the Founder & CEO of AI Albania, the country’s first center for excellence in artificial intelligence. With over a decade of experience in academia, research, and technology, she also serves as an AI & Education Expert for the Council of Europe, Red Teamer at OpenAI, and Awards Committee Chair at ACM-W Global. Her work focuses on explainable AI, large language models, and quantum machine learning, bridging scientific research with policy and ethics.",
  },
  {
    name: "GENTJAN ZOTAJ",
    title: "CO-FOUNDER: AI LAND",
    image: "/images/speakers/speaker-22.png",
    index: 21,
    description:
      "Founder of Ailend.io, Frutza.com, Greenleaf - Business Solutions and Consulting, and Gregtech.io, Genti brings together expertise in finance, technology, and analytics.  These are companies that provide services in the RegTech, FinTech, and e-commerce domains in Europe, the USA, and Asia.  Before starting his entrepreneurship journey 10 years ago, his professional life developed through projects delivered for some of the leading banking groups in Europe, such as Unicredit, Raiffeisen Group, Sber Bank Europe, Erste Group and more.",
  },
  {
    name: "FRANCESKA KORANCE",
    title: "COMMUNITY OFFICER: EIT ALBANIA",
    image: "/images/speakers/speaker-1.png",
    description:
      "Franceska is directing Build Green Group Albania to transform grassroots environmental activism into a regionally recognized platform for research and sustainable innovation. Her perspective is shaped by over a decade in the NGO sector, complemented by academic research at POLIS University and collaboration with leading international organizations such as GIZ, UNIDO, and the World Bank. As EIT Community Officer for Albania, she facilitates critical partnerships between Albanian and EU innovation stakeholders. ",
    index: 11,
  },
  {
    name: "SANJA MITROVISKA",
    title: "FOUNDER: FOUNDER GAMES",
    image: "/images/speakers/speaker-13.png",
    description:
      "Sanja Mitrovska is the Founder of The Founder Games and CEO of Networker, dedicated to empowering entrepreneurs in emerging markets to think globally and act boldly. Through Networker, she has helped startups in North Macedonia secure over €3 million in early-stage investments, while also achieving a Guinness World Record for organizing the world’s longest business pitch marathon. With The Founder Games — the first entrepreneurial reality show in the region — Sanja is redefining how founders learn, grow, and connect.",
    index: 17,
  },
  {
    name: "ANTTI RAHIKKA",
    title: "DIRECTOR FOR CEE: BUSINESS FINLAND",
    image: "/images/speakers/speaker-6.png",
    description:
      "Antti Rahikka is Director for Central and Eastern Europe at Business Finland, driving innovation and international growth for Finnish startups and companies. He focuses on strategic partnerships and market expansion in the region, supporting tech and sustainability-driven ventures.",
    index: 10,
  },
  {
    name: "DELINA IBRAHIMAJ",
    title: "MINISTER: MINISTRY OF ECONOMY AND INNOVATION",
    image: "/images/speakers/speaker-5.jpg",
    description:
      "Delina Ibrahimaj is an accomplished economist and public leader currently serving as Albania’s Minister of State for Entrepreneurship and Business Climate. With a career spanning over two decades across public administration and finance, she has held key roles including Minister of Finance and Economy, Director General of the Tax Authority, and Director General of INSTAT. Her experience also extends to the Bank of Albania, where she specialized in GDP and labor market analysis.",
    index: 1,
  },

  {
    name: "BRISEIDA GJOZA",
    title: "FOUNDER & CEO: CONSCIESG",
    image: "/images/speakers/speaker-14.png",
    description:
      "Briseida Gjoza is the Founder and CEO of ConsciESG, a fintech pioneering predictive ESG scores that generate financial alpha. With a background in corporate leadership, politics, and sustainable business strategy, she brings a unique blend of strategic vision and hands-on execution to the future of finance and sustainability.",
    index: 9,
  },
  {
    name: "ADAM DURICA",
    title: "INVESTMENT MANAFER: ZERO ONE HUNDRED",
    image: "/images/speakers/speaker-4.png",
    description:
      "Adam Ďurica is an Investment Manager at Zero One Hundred, specializing in early‑stage investments across Emerging and Central Europe.  THE ORG +1  He leads deals end‑to‑end, advises portfolio companies, and co‑leads the Zero One Hundred Academy, a program that empowers aspiring VC investors.",
    index: 14,
  },
  // {
  //   name: "ARBJAN MAZNIKU",
  //   title: "-",
  //   image: "/images/speakers/speaker-6.png",
  //   description:
  //     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
  // },
  {
    name: "IDLIR AHMATI",
    title: "FOUNDER & CEO: PAYSERA ALBANIA",
    index: 25,
    image: "/images/speakers/speaker-24.jpg",
    description:
      "Idlir Ahmati is the Founder and CEO of Paysera Albania, a leading fintech company revolutionizing digital payments and financial accessibility in the country. With over 15 years of experience across finance, telecommunications, and technology, he has held executive roles at Kredo.al, Pay and Go, and iMoto Albania, as well as advisory positions in the private sector.",
  },
  {
    name: "SHEFQET AVDULLAU",
    title: "ANGEL INVESTOR, ADVISOR AND MENTOR",
    index: 25,
    image: "/images/speakers/speaker-18.jpg",
    description:
      "Shefqet Avdullau is an angel investor, board advisor, and mentor with a portfolio of 15 startup investments and two successful exits across the U.S. and U.K. A former software engineer turned serial entrepreneur, he has founded, scaled, and exited multiple ventures before focusing on investing in disruptive technologies. His investment interests span Fintech, Adtech, and Healthtech, primarily targeting B2B SaaS and AI-driven innovations.",
  },
  {
    name: "DEIVIS SHOMO",
    title: "CHEIF COMMERCIAL OFFICER: EASYPAY ALBANIA",
    index: 25,
    image: "/images/speakers/speaker-16.jpg",
    description:
      "Deivis Shomo is the Chief Commercial Officer at EasyPay, Albania’s pioneering fintech company, where he drives strategic growth and innovation in digital financial services. Based in Vienna, he is also the Co-founder and CFO of CityRiddler, a tourism-tech startup creating personalized city experiences through interactive riddles. A member of the Sigma Squared Society, Deivis is part of a global network of young founders shaping the future of entrepreneurship.",
  },
  {
    name: "BRENTON BËNJA",
    title: "FOUNDER & EDITOR IN CHIEF: GEEKROOM ALBANIA",
    index: 25,
    image: "/images/speakers/speaker-11.jpg",
    description:
      "Brenton Bënja is the Founder and Editor-in-Chief of Geek Room Albania, the country’s leading digital platform for technology news and insights. Since 2016, he has built Geek Room into a trusted source with over 110,000 followers, delivering daily articles and videos on the latest in gadgets, software, and emerging tech trends. Alongside his entrepreneurial work, Brenton serves as Web and Social Media Manager at the European Union Delegation to Albania, bringing strategic communication expertise to international initiatives.",
  },
  {
    name: "ELTON ÇOLLAKU",
    title: "CEO: FINANCIAL UNION ALBANIA",
    index: 25,
    image: "/images/speakers/speaker-21.jpg",
    description:
      "Elton Collaku is the CEO of Financial Union Tirana (UFT), the exclusive agent of Western Union in Albania since 1995, also operating across Kosovo, North Macedonia, Switzerland, and Croatia. With over 18 years of leadership at the helm, he has driven UFT’s growth into one of the region’s most trusted financial service providers, offering fast, safe, and reliable money transfer solutions.",
  },
  {
    name: "LAURA SARO",
    title: "EXECUTIVE DIRECTOR: AIDA",
    image: "/images/speakers/speaker-2.jpg",
    index: 15,
    description:
      "As the driving force behind the AIDA - Albanian Investment Development Agency, Laura has passionately championed Albania as a top investment destination. Her innovative strategies and unwavering dedication have sparked significant economic growth and attracted investors from around the globe.",
  },
  {
    name: "RUMEN ILIEV",
    title: "PARTNER: LAUNCHHUB VENTURES",
    image: "/images/speakers/speaker-15.png",
    description:
      "Rumen Iliev is a Partner at LAUNCHub Ventures, a leading seed fund dedicated to empowering entrepreneurs across the SEE & CEE regions. He works closely with ambitious founders, helping them scale innovative businesses and navigate the challenges of early-stage growth. Before joining LAUNCHub, Rumen built a diverse career: he started in a SME then moved to a couple of multinational corporations, later founded his own consultancy, and eventually transitioned into venture capital.  Footnote: speaks several slavic languages but can not write code.",
    index: 12,
  },
];

const investors = [
  {
    href: "https://www.filrougecapital.com/",
    image: "/images/investors/investor-8.png",
  },
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
] as const;

const partners = [
  {
    href: "https://www.startupalbania.gov.al/",
    image: "/images/partners/partner-1.png",
  },
  {
    href: "https://www.euforinnovation.al/",
    image: "/images/partners/partner-2.png",
  },
];
const community = [
  {
    href: "https://www.businessfinland.fi/",
    image: "/images/partners/partner-3.png",
  },
  {
    href: "https://www.netherlandsandyou.nl/",
    image: "/images/partners/partner-4.png",
  },
  {
    href: "https://www.foundersgames.al/",
    image: "/images/partners/partner-5.png",
  },

  {
    href: "https://www.protik.org/",
    image: "/images/partners/partner-7.png",
  },
  {
    href: "https://www.aida.al/",
    image: "/images/partners/partner-8.png",
  },
  {
    href: "https://www.een.eu/",
    image: "/images/partners/partner-9.png",
  },
];

const growth = [
  {
    href: "https://www.upay.al/",
    image: "/images/partners/partner-17.png",
  },
  {
    href: "https://www.visitluxembourg.com/",
    image: "/images/partners/partner-14.svg",
  },
  {
    href: "https://www.eebrd.com/",
    image: "/images/partners/partner-16.png",
  },
  {
    href: "https://www.eebrd.com/",
    image: "/images/partners/partner-15.png",
  },

  {
    href: "https://www.wbif.eu/wb-edif",
    image: "/images/partners/partner-18.png",
  },
  {
    href: "https://www.eit-ris.eu/al/",
    image: "/images/partners/partner-6.png",
  },
];

const sponsors = [
  {
    href: "https://www.swissep.al/",
    image: "/images/partners/partner-12.svg",
  },
  {
    href: "https://www.juniorachievments.al/",
    image: "/images/partners/partner-11.webp",
  },
  {
    href: "https://www.easypay.al/",
    image: "/images/partners/partner-13.svg",
  },
  {
    href: "https://digitsapiens.com/",
    image: "/images/partners/partner-19.png",
  },
];

const media = [
  {
    href: "https://geekroom.al/en/",
    image: "/images/partners/partner-20.png",
  },
  {
    href: "https://www.euronews.com/",
    image: "/images/partners/partner-21.svg",
  },
];
