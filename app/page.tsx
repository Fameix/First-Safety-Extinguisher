import type { LucideIcon } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import {
  ArrowRight,
  Award,
  BadgeCheck,
  BriefcaseBusiness,
  Building2,
  Check,
  Factory,
  Flame,
  HardHat,
  HeartPulse,
  Hospital,
  MapPin,
  Monitor,
  Phone,
  ShieldCheck,
  Sparkles,
  SquareActivity,
  Warehouse,
} from "lucide-react"

import { Container } from "@/components/site/container"
import { CTASection } from "@/components/site/cta-section"
import { IconBadge } from "@/components/site/icon-badge"
import { buttonVariants } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
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
  icon: LucideIcon
  image: string
}

const services: Service[] = [
  {
    title: "Fire Extinguishers",
    text: "Sales, refilling and servicing for workplaces and buildings.",
    href: "/fire-extinguisher-services-chennai",
    icon: Flame,
    image: "/home-service-extinguishers.jpeg",
  },
  {
    title: "Fire Alarm Systems",
    text: "Fire alarm system installation, testing and maintenance.",
    href: "/fire-alarm-systems-chennai",
    icon: SquareActivity,
    image: "/home-service-alarm.jpeg",
  },
  {
    title: "Hydrant Systems",
    text: "Design, supply, installation and AMC support.",
    href: "/fire-hydrant-systems-chennai",
    icon: BadgeCheck,
    image: "/home-service-hydrant.jpeg",
  },
  {
    title: "Safety PPE",
    text: "Practical safety gear for day-to-day workplace protection.",
    href: "/safety-ppe-chennai",
    icon: HardHat,
    image: "/home-service-ppe.jpeg",
  },
  {
    title: "AMC Services",
    text: "Scheduled maintenance for fire protection equipment.",
    href: "/fire-safety-amc-chennai",
    icon: Sparkles,
    image: "/home-service-amc.jpeg",
  },
  {
    title: "Fire Audits",
    text: "Fire risk assessments and compliance-focused audits.",
    href: "/fire-audits-chennai",
    icon: ShieldCheck,
    image: "/home-service-audit.jpeg",
  },
  {
    title: "Fire NOC Consulting",
    text: "Documentation and approval support for Fire NOC needs.",
    href: "/fire-noc-consulting-chennai",
    icon: BriefcaseBusiness,
    image: "/home-service-noc.jpeg",
  },
]

const industries = [
  { label: "Commercial Buildings", icon: Building2 },
  { label: "Industrial Units", icon: Factory },
  { label: "Residential Apartments", icon: HeartPulse },
  { label: "IT & ITES Parks", icon: Monitor },
  { label: "Hospitals", icon: Hospital },
  { label: "Educational Institutions", icon: Award },
  { label: "Warehouses", icon: Warehouse },
  { label: "Malls & Shopping Complexes", icon: SquareActivity },
]

const projects = [
  {
    title: "Fire Alarm Installation",
    location: "Commercial Building, Chennai",
    description:
      "Complete fire alarm system installation including smoke detectors, manual call points, alarm panels and notification devices for reliable early fire detection.",
    services:
      "Fire alarm installation \u00b7 Smoke detection \u00b7 Alarm panel setup \u00b7 Testing & commissioning",
    image: "/project-fire-alarm-installation.jpg",
  },
  {
    title: "Hydrant System Works",
    location: "Industrial Facility, Tamil Nadu",
    description:
      "Complete fire hydrant system design and installation providing reliable water-based fire protection across critical industrial areas.",
    services:
      "Fire hydrant installation \u00b7 Fire piping \u00b7 Hose reel systems \u00b7 Testing & commissioning",
    image: "/project-hydrant-system-works.jpg",
  },
  {
    title: "Fire Safety Maintenance Service",
    location: "Business Campus, Chennai",
    description:
      "Comprehensive fire safety maintenance covering critical equipment and systems to ensure reliable performance and workplace safety.",
    services:
      "Fire safety inspection \u00b7 Preventive maintenance \u00b7 Equipment servicing \u00b7 Safety compliance",
    image: "/project-fire-safety-maintenance.jpg",
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
                href="/contact"
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

        <div className="absolute inset-x-0 bottom-0 bg-zinc-950/65 backdrop-blur-md">
          <Container className="grid grid-cols-2 sm:grid-cols-4">
            {["Supply", "Installation", "Maintenance", "Compliance"].map(
              (item) => (
                <div
                  key={item}
                  className="flex items-center justify-center gap-2 px-3 py-4 text-center text-xs font-semibold tracking-[0.14em] text-white/65 uppercase sm:py-5"
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
        className="bg-zinc-950 py-20 text-white sm:py-24 lg:py-32"
      >
        <Container>
          <div className="max-w-4xl">
            <p className="flex items-center gap-3 text-xs font-bold tracking-[0.2em] text-primary uppercase before:h-px before:w-8 before:bg-primary">
              Our Services
            </p>
            <h2 className="mt-4 font-heading text-3xl leading-tight font-semibold tracking-[-0.03em] text-white sm:text-4xl lg:text-5xl lg:whitespace-nowrap">
              Complete Fire &amp; Safety Solutions
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-7 text-white/60">
              One experienced partner for essential fire protection systems,
              workplace safety and ongoing compliance support.
            </p>
          </div>

          <div className="mt-12 grid auto-rows-fr gap-5 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4 lg:gap-6">
            {services.map((service) => {
              const Icon = service.icon
              return (
                <Card
                  borderless
                  key={service.title}
                  className={cn(
                    "group relative flex h-full min-h-[20rem] flex-col overflow-hidden rounded-2xl bg-white/[0.035] px-7 pt-[26px] pb-7 text-white shadow-none transition-colors duration-300 hover:bg-white/[0.055] sm:min-h-[21rem] lg:px-8 lg:pt-[26px] lg:pb-8"
                  )}
                >
                  <Image
                    src={service.image}
                    alt=""
                    fill
                    sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover opacity-0 transition-all duration-500 group-hover:scale-105 group-hover:opacity-30"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/75 to-zinc-950/20 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  <div className="relative z-10 flex min-h-0 w-full flex-1 flex-col pt-[26px]">
                    <IconBadge
                      size="md"
                      className="bg-[#2a0707]/70 text-red-500 shadow-[inset_0_1px_0_rgba(255,255,255,0.03)]"
                    >
                      <Icon className="size-5" aria-hidden="true" />
                    </IconBadge>
                    <h3 className="mt-6 font-heading text-xl font-semibold tracking-tight">
                      {service.title}
                    </h3>
                    <p className="mt-3 line-clamp-2 h-12 text-sm leading-6 text-white/55">
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

      <section className="section-surface-alt py-20 sm:py-24 lg:py-28">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
            <div>
              <SectionIntro
                eyebrow="Industries We Serve"
                title="Protection built around your environment"
              />
              <p className="mt-5 max-w-lg text-base leading-7 text-muted-foreground">
                Fire safety requirements change with every building and
                operation. We bring practical support to the places where people
                live, work and learn.
              </p>
              <Link
                href="/industries"
                className={cn(
                  buttonVariants({ size: "lg" }),
                  "mt-8 h-12 rounded-lg px-6"
                )}
              >
                View All Industries <ArrowRight aria-hidden="true" />
              </Link>
            </div>
            <div className="grid grid-cols-1 gap-x-6 sm:grid-cols-2 lg:gap-x-10">
              {industries.map((industry) => {
                const Icon = industry.icon
                return (
                  <div
                    key={industry.label}
                    className="flex items-center gap-4 py-5 sm:py-6"
                  >
                    <IconBadge size="sm">
                      <Icon className="size-5" aria-hidden="true" />
                    </IconBadge>
                    <h3 className="text-sm leading-5 font-semibold sm:text-base">
                      {industry.label}
                    </h3>
                  </div>
                )
              })}
            </div>
          </div>
        </Container>
      </section>

      <section
        id="projects"
        className="section-surface overflow-hidden py-20 sm:py-24 lg:py-28"
      >
        <Container>
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-6xl">
              <div className="flex items-center gap-3">
                <span className="h-px w-8 bg-[#d50707]" aria-hidden="true" />
                <p className="text-xs font-bold tracking-[0.25em] text-[#d50707] uppercase">
                  Recent Projects
                </p>
              </div>
              <h2 className="mt-5 font-heading text-4xl leading-none font-semibold tracking-[-0.04em] text-zinc-950 sm:text-5xl lg:text-[4rem] lg:whitespace-nowrap">
                Fire safety, delivered on site
              </h2>
            </div>

            <Link
              href="/projects"
              className={cn(
                buttonVariants({ size: "lg" }),
                "h-12 rounded-2xl bg-[#d50707] px-6 text-white shadow-none hover:bg-[#b80505]"
              )}
            >
              View All Projects <ArrowRight aria-hidden="true" />
            </Link>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3 lg:mt-16">
            {projects.map((project) => (
              <Link
                key={project.title}
                href="/projects"
                className="group block h-full focus-visible:outline-none"
              >
                <div className="relative isolate h-full min-h-[320px] overflow-hidden rounded-[24px] bg-zinc-950 text-white shadow-[0_24px_50px_-30px_rgba(0,0,0,0.45)] transition-transform duration-300 ease-out group-hover:-translate-y-1 group-hover:shadow-[0_28px_58px_-28px_rgba(0,0,0,0.5)] group-focus-visible:ring-2 group-focus-visible:ring-[#d50707] group-focus-visible:ring-offset-4 group-focus-visible:ring-offset-white">
                  <div className="absolute inset-0 bg-muted">
                    <Image
                      src={project.image}
                      alt={`${project.title} - ${project.location}`}
                      fill
                      sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
                      className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.035]"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent" />
                  <div className="relative flex h-full min-w-0 flex-col justify-end p-6 sm:p-7">
                    <div className="flex h-full flex-col justify-end">
                      <h3 className="font-heading text-2xl leading-tight font-semibold tracking-tight text-white sm:text-[2rem]">
                        {project.title}
                      </h3>
                      <p className="mt-2 flex items-start gap-2 text-sm leading-6 text-white/88">
                        <MapPin className="mt-0.5 size-4 shrink-0 text-white/90" />
                        {project.location}
                      </p>
                      <span className="mt-5 flex items-center gap-2 text-sm font-semibold text-white">
                        Explore Project
                        <ArrowRight
                          aria-hidden="true"
                          className="size-4 transition-transform duration-300 group-hover:translate-x-1"
                        />
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <CTASection
        title="Need reliable fire safety solutions?"
        description="We&apos;re here to help you keep what matters safe with clear, responsible fire safety support in Chennai."
        label="Call Us Today"
        href="/contact"
      />
    </>
  )
}
