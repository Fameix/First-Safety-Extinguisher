import Image from "next/image"
import Link from "next/link"
import {
  ArrowRight,
  Award,
  Check,
  Phone,
  ShieldCheck,
  Sparkles,
} from "lucide-react"

import { Container } from "@/components/site/container"
import { CTASection } from "@/components/site/cta-section"
import { IconBadge } from "@/components/site/icon-badge"
import { IndustriesSection } from "@/components/site/industries-section"
import { buttonVariants } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { BOOKING_URL } from "@/lib/booking"
import { companyName, pageMetadata, siteUrl } from "@/lib/site-data"
import { cn } from "@/lib/utils"

const title = "Aulukya Fire & Safety Solutions | Fire Safety Company in Chennai"
const description =
  "Aulukya Fire & Safety Solutions is a fire safety company in Chennai providing fire safety solutions, fire extinguisher supply, fire alarm system installation, hydrant systems, AMC, audits and Fire NOC consulting."

export const metadata = {
  ...pageMetadata(title, description),
  openGraph: {
    ...pageMetadata(title, description).openGraph,
    images: [
      {
        url: "/home-hero-banner-new.png",
        width: 1871,
        height: 840,
        alt: "Aulukya Fire & Safety Solutions in Chennai",
      },
    ],
  },
  twitter: {
    ...pageMetadata(title, description).twitter,
    images: ["/home-hero-banner-new.png"],
  },
}

type Service = {
  title: string
  text: string
  href: string
  image: string
}

const services: Service[] = [
  {
    title: "Fire Extinguishers",
    text: "Sales, refilling and servicing for workplaces and buildings.",
    href: "/fire-extinguisher-services-chennai",
    image: "/service-fire-extinguisher.png",
  },
  {
    title: "Fire Alarm Systems",
    text: "Fire alarm system installation, testing and maintenance.",
    href: "/fire-alarm-systems-chennai",
    image: "/service-fire-alarm-system.png",
  },
  {
    title: "Hydrant Systems",
    text: "Design, supply, installation and AMC support.",
    href: "/fire-hydrant-systems-chennai",
    image: "/service-hydrant-system.png",
  },
  {
    title: "Safety PPE",
    text: "Practical safety gear for day-to-day workplace protection.",
    href: "/safety-ppe-chennai",
    image: "/service-safety-ppe.png",
  },
  {
    title: "AMC Services",
    text: "Scheduled maintenance for fire protection equipment.",
    href: "/fire-safety-amc-chennai",
    image: "/home-service-amc-3d.png",
  },
  {
    title: "Fire Audits",
    text: "Fire risk assessments and compliance-focused audits.",
    href: "/fire-audits-chennai",
    image: "/fire-audits.png",
  },
  {
    title: "Fire NOC Consulting",
    text: "Documentation and approval support for Fire NOC needs.",
    href: "/fire-noc-consulting-chennai",
    image: "/home-service-fire-noc-3d.png",
  },
]

const benefits = [
  {
    title: "Experienced Professionals",
    text: "A practical team focused on safe, compliant execution.",
    icon: ShieldCheck,
  },
  {
    title: "Quality Products",
    text: "Reliable equipment selected for real-world performance.",
    icon: Award,
  },
  {
    title: "Reliable Service",
    text: "Responsive support, installation and maintenance you can count on.",
    icon: Sparkles,
  },
  {
    title: "Compliance First",
    text: "Fire safety work aligned to applicable standards and approvals.",
    icon: Check,
  },
]

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: companyName,
  url: siteUrl,
  image: `${siteUrl}/home-hero-banner-new.png`,
  description,
  telephone: "+91 90030 12345",
  email: "info@aulukyafiresafety.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Pallavaram",
    addressRegion: "Tamil Nadu",
    addressCountry: "IN",
  },
  areaServed: ["Chennai", "Tamil Nadu"],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Fire Safety Services in Chennai",
    itemListElement: services.map((service) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: service.title,
        url: `${siteUrl}${service.href}`,
      },
    })),
  },
}

function SectionIntro({
  eyebrow,
  title,
  copy,
  align = "left",
}: {
  eyebrow: string
  title: string
  copy?: string
  align?: "left" | "center"
}) {
  return (
    <div
      className={cn("max-w-2xl", align === "center" && "mx-auto text-center")}
    >
      <p className="flex items-center gap-3 text-xs font-bold tracking-[0.2em] text-primary uppercase before:h-px before:w-8 before:bg-primary">
        {eyebrow}
      </p>
      <h2 className="mt-4 font-heading text-3xl leading-tight font-semibold tracking-[-0.03em] sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {copy ? (
        <p className="mt-5 text-base leading-7 text-muted-foreground">{copy}</p>
      ) : null}
    </div>
  )
}

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />

      <section className="relative isolate -mt-[88px] min-h-[760px] overflow-hidden bg-zinc-950 pt-[88px] text-white lg:min-h-[850px]">
        <Image
          src="/home-hero-banner-new.png"
          alt="Fire extinguishers, hydrant systems and fire protection equipment"
          fill
          priority
          sizes="100vw"
          className="-z-20 object-cover object-[72%_center] sm:object-[65%_center] lg:object-center"
        />
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(9,9,11,0.97)_0%,rgba(9,9,11,0.86)_36%,rgba(9,9,11,0.34)_68%,rgba(9,9,11,0.12)_100%)]" />
        <div className="absolute inset-x-0 bottom-0 -z-10 h-40 bg-gradient-to-t from-zinc-950/90 to-transparent" />

        <Container className="flex min-h-[672px] items-end pt-28 pb-16 sm:pt-32 lg:min-h-[762px] lg:items-center lg:pt-36 lg:pb-20">
          <div className="max-w-3xl animate-in duration-700 fade-in slide-in-from-bottom-4">
            <p className="flex items-center gap-3 text-xs font-bold tracking-[0.22em] text-red-400 uppercase before:h-px before:w-10 before:bg-red-500">
              Complete Fire &amp; Safety Solutions in Chennai
            </p>
            <h1 className="mt-6 max-w-3xl font-heading text-5xl leading-[0.98] font-semibold tracking-[-0.045em] text-balance sm:text-6xl lg:text-7xl xl:text-[5.25rem]">
              Protecting lives.{" "}
              <span className="text-red-500">Securing futures.</span>
            </h1>
            <p className="mt-6 max-w-xl text-base leading-7 text-white/72 sm:text-lg">
              Dependable fire protection, installation, maintenance and
              compliance support for businesses across Chennai.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Link
                  href={BOOKING_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                className={cn(
                  buttonVariants({ size: "lg" }),
                  "h-12 w-full rounded-lg px-6 sm:w-auto"
                )}
              >
                Book a Free Consultation <ArrowRight aria-hidden="true" />
              </Link>
              <Link
                href="tel:+919003012345"
                className={cn(
                  buttonVariants({ variant: "outline", size: "lg" }),
                  "h-12 w-full rounded-lg border-white/25 bg-white/5 px-6 text-white backdrop-blur-sm hover:bg-white hover:text-zinc-950 sm:w-auto"
                )}
              >
                <Phone aria-hidden="true" /> Call Us Now
              </Link>
            </div>
          </div>
        </Container>

        <div className="absolute inset-x-0 bottom-0 border-t border-white/10 bg-zinc-950/70 backdrop-blur-md">
          <Container className="grid grid-cols-2 sm:grid-cols-4">
            {["Supply", "Installation", "Maintenance", "Compliance"].map(
              (item) => (
                <div
                  key={item}
                  className="flex items-center justify-center gap-2 px-3 py-4 text-center text-xs font-semibold tracking-[0.14em] text-white/70 uppercase sm:py-5"
                >
                  <Check className="size-4 text-red-500" aria-hidden="true" />{" "}
                  {item}
                </div>
              )
            )}
          </Container>
        </div>
      </section>

      <section className="section-surface py-20 sm:py-24 lg:py-32">
        <Container className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-20">
          <div className="relative order-1 aspect-[4/3] overflow-hidden rounded-2xl bg-muted lg:order-2">
            <Image
              src="/about-fire-inspection.png"
              alt="A fire safety technician inspecting a fire hose reel and extinguisher system"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
          <div className="order-2 lg:order-1">
            <SectionIntro
              eyebrow="About Aulukya"
              title="Trusted fire & safety solutions in Chennai"
              copy="Aulukya helps businesses protect people, property and operations with dependable fire protection, safety equipment, installation, maintenance and compliance support."
            />
            <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3 pt-6 text-sm font-semibold">
              <span className="flex items-center gap-2">
                <Check className="size-4 text-primary" /> Practical guidance
              </span>
              <span className="flex items-center gap-2">
                <Check className="size-4 text-primary" /> Responsive support
              </span>
            </div>
            <Link
              href="/about-us"
              className={cn(
                buttonVariants({ size: "lg" }),
                "mt-8 h-12 rounded-lg px-6"
              )}
            >
              About Aulukya <ArrowRight aria-hidden="true" />
            </Link>
          </div>
        </Container>
      </section>

      <section
        id="services"
        className="section-surface-alt py-20 text-zinc-950 sm:py-24 lg:py-32"
      >
        <Container>
          <div className="max-w-4xl">
            <p className="flex items-center gap-3 text-xs font-bold tracking-[0.2em] text-primary uppercase before:h-px before:w-8 before:bg-primary">
              Our Services
            </p>
            <h2 className="mt-4 font-heading text-3xl leading-tight font-semibold tracking-[-0.03em] text-zinc-950 sm:text-4xl lg:text-5xl lg:whitespace-nowrap">
              Complete Fire &amp; Safety Solutions
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-7 text-zinc-600">
              One experienced partner for essential fire protection systems,
              workplace safety and ongoing compliance support.
            </p>
          </div>

          <div className="mt-12 grid auto-rows-fr gap-5 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4 lg:gap-6">
            {services.map((service) => {
              return (
                <Card
                  borderless
                  key={service.title}
                  className={cn(
                    "group relative flex h-full min-h-[20rem] flex-col overflow-hidden rounded-2xl border border-zinc-200 bg-white px-7 pt-[26px] pb-7 text-zinc-950 shadow-sm transition-colors duration-300 hover:border-red-200 sm:min-h-[21rem] lg:px-8 lg:pt-[26px] lg:pb-8"
                  )}
                >
                  <div className="relative z-10 flex min-h-0 w-full flex-1 flex-col pt-[26px]">
                    <div className="relative h-24 w-full">
                      <Image
                        src={service.image}
                        alt={`${service.title} 3D illustration`}
                        fill
                        sizes="(min-width: 1024px) 224px, (min-width: 640px) 50vw, 100vw"
                        className="object-contain object-left"
                      />
                    </div>
                    <h3 className="mt-5 font-heading text-xl font-semibold tracking-tight">
                      {service.title}
                    </h3>
                    <p className="mt-3 line-clamp-2 h-12 text-sm leading-6 text-zinc-600">
                      {service.text}
                    </p>
                    <Link
                      href={service.href}
                      className="mt-auto inline-flex items-center gap-2 pt-6 text-sm font-semibold text-red-400 hover:text-red-300"
                    >
                      Explore service{" "}
                      <ArrowRight
                        className="size-4 transition-transform group-hover:translate-x-1"
                        aria-hidden="true"
                      />
                    </Link>
                  </div>
                </Card>
              )
            })}
          </div>
        </Container>
      </section>

      <section className="section-surface py-20 sm:py-24 lg:py-32">
        <Container className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-20">
          <div className="order-2 lg:order-1">
            <SectionIntro
              eyebrow="Why Choose Aulukya"
              title="Your trusted fire safety partner in Chennai"
              copy="We combine practical experience with a service-first approach to deliver dependable fire safety support for businesses that want clear communication, quality work and long-term peace of mind."
            />
            <div className="mt-9 grid gap-x-8 gap-y-7 sm:grid-cols-2">
              {benefits.map((benefit) => {
                const Icon = benefit.icon

                return (
                <div key={benefit.title} className="pt-5">
                  <div className="flex items-center gap-3">
                    <IconBadge size="sm" className="bg-red-50 text-red-600">
                      <Icon className="size-4" aria-hidden="true" />
                    </IconBadge>
                    <h3 className="font-heading font-semibold">
                      {benefit.title}
                    </h3>
                  </div>
                  <p className="mt-3 text-sm leading-6 text-muted-foreground">
                    {benefit.text}
                  </p>
                </div>
                )
              })}
            </div>
          </div>
          <div className="relative order-1 aspect-[4/3] w-full self-center justify-self-center overflow-hidden rounded-2xl bg-muted lg:order-2 lg:aspect-[1.05/1]">
            <Image
              src="/home-why-fire-safety.png"
              alt="Aulukya fire safety technician inspecting fire protection systems"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover object-center"
            />
          </div>
        </Container>
      </section>

      <IndustriesSection />

      <CTASection
        title="Need reliable fire safety solutions?"
        description="We&apos;re here to help you keep what matters safe with clear, responsible fire safety support in Chennai."
        label="Call Us Today"
        href="/contact"
      />
    </>
  )
}
