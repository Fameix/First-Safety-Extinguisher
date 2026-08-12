import Link from "next/link"
import Image from "next/image"
import {
  ArrowRight,
  Building2,
  Check,
  Factory,
  GraduationCap,
  HeartPulse,
  Hotel,
  House,
  Search,
  ShieldCheck,
  ShoppingBag,
  Wrench,
  Warehouse,
} from "lucide-react"

import { Container } from "@/components/site/container"
import { IconBadge } from "@/components/site/icon-badge"
import { buttonVariants } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { pageMetadata } from "@/lib/site-data"
import { cn } from "@/lib/utils"

const title = "Fire Safety Solutions for Industries in Chennai | Aulukya"
const description =
  "Reliable fire safety solutions in Chennai, including fire protection services, equipment, maintenance and compliance support for every workplace."

export const metadata = pageMetadata(title, description, "/industries")

const industries = [
  {
    title: "Commercial Buildings",
    description:
      "Fire protection solutions for offices and commercial spaces, helping protect people, property and daily business operations.",
    icon: Building2,
    image: "/home-service-extinguishers.jpeg",
  },
  {
    title: "Industrial Facilities",
    description:
      "Reliable fire safety support for industrial workplaces, covering essential equipment, maintenance and compliance requirements.",
    icon: Factory,
    image: "/home-service-hydrant.jpeg",
  },
  {
    title: "Retail & Shopping",
    description:
      "Practical fire protection for retail stores and shopping spaces, helping safeguard customers, employees and property.",
    icon: ShoppingBag,
    image: "/home-service-alarm.jpeg",
  },
  {
    title: "Educational Institutions",
    description:
      "Fire safety solutions for schools and colleges, supporting safer learning environments with equipment and compliance support.",
    icon: GraduationCap,
    image: "/home-service-audit.jpeg",
  },
  {
    title: "Healthcare Facilities",
    description:
      "Reliable fire protection for hospitals and clinics, with suitable equipment, maintenance and compliance support.",
    icon: HeartPulse,
    image: "/home-service-ppe.jpeg",
  },
  {
    title: "Residential & Apartments",
    description:
      "Fire safety support for apartments and residential buildings, helping protect residents, common areas and property.",
    icon: House,
    image: "/home-service-amc.jpeg",
  },
  {
    title: "Hospitality",
    description:
      "Fire protection solutions for hotels and restaurants, helping safeguard guests, employees and property with reliable support.",
    icon: Hotel,
    image: "/home-service-noc.jpeg",
  },
  {
    title: "Warehouses & Logistics",
    description:
      "Fire safety solutions for warehouses and logistics facilities, helping protect stored goods, infrastructure and operations.",
    icon: Warehouse,
    image: "/home-service-hydrant.jpeg",
  },
] as const

const approachSteps = [
  {
    number: "01",
    label: "UNDERSTAND",
    description:
      "We assess your workplace, operations and specific fire safety requirements.",
    icon: Search,
  },
  {
    number: "02",
    label: "PROTECT",
    description:
      "We recommend practical fire protection equipment and solutions designed around your environment.",
    icon: ShieldCheck,
  },
  {
    number: "03",
    label: "MAINTAIN",
    description:
      "We provide ongoing maintenance and compliance support to keep your fire protection reliable.",
    icon: Wrench,
  },
] as const

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
      <section className="relative isolate -mt-[88px] overflow-hidden bg-zinc-950 pt-[88px] text-white">
        <Image
          src="/home-hero-banner-new.png"
          alt="Fire protection systems and workplace safety equipment"
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
              INDUSTRIES WE SERVE
            </p>
            <h1 className="mt-6 max-w-3xl font-heading text-5xl leading-[0.98] font-semibold tracking-[-0.045em] text-balance sm:text-6xl lg:text-7xl xl:text-[5.25rem]">
              Fire Safety Solutions for Every{" "}
              <span className="text-red-500">Workplace.</span>
            </h1>
            <p className="mt-6 max-w-xl text-base leading-7 text-white/72 sm:text-lg">
              Reliable fire protection, installation, maintenance and
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
                Talk to Our Team <ArrowRight aria-hidden="true" />
              </Link>
            </div>
          </div>
        </Container>

      </section>

      <section className="py-20 sm:py-24 lg:py-32">
        <Container className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-20">
          <div className="relative order-1 aspect-[4/3] overflow-hidden rounded-2xl bg-muted lg:order-2">
            <Image
              src="/about-fire-inspection.png"
              alt="A fire safety technician inspecting a fire hose reel and extinguisher system"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
            <div className="absolute bottom-5 left-5 rounded-xl bg-zinc-950 px-5 py-4 text-white shadow-2xl sm:bottom-7 sm:left-7">
              <p className="font-heading text-3xl font-semibold text-red-500">
                15+
              </p>
              <p className="mt-1 text-xs font-semibold tracking-[0.16em] text-white/70 uppercase">
                Years experience
              </p>
            </div>
          </div>
          <div className="order-2 lg:order-1">
            <SectionIntro
              eyebrow="BUILT FOR YOUR INDUSTRY"
              title="Fire Protection Shaped Around Your Workplace."
              copy="Every industry has different safety requirements. We provide practical fire safety solutions designed around your workplace, operations and compliance needs."
            />
            <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3 border-t pt-6 text-sm font-semibold">
              <span className="flex items-center gap-2">
                <Check className="size-4 text-primary" /> Practical guidance
              </span>
              <span className="flex items-center gap-2">
                <Check className="size-4 text-primary" /> Responsive support
              </span>
            </div>
            <Link
              href="/contact"
              className={cn(
                buttonVariants({ size: "lg" }),
                "mt-8 h-12 rounded-lg px-6"
              )}
            >
              Talk to Our Team <ArrowRight aria-hidden="true" />
            </Link>
          </div>
        </Container>
      </section>

      <section className="bg-zinc-950 py-20 text-white sm:py-24 lg:py-32">
        <Container>
          <div className="max-w-4xl">
            <p className="flex items-center gap-3 text-xs font-bold tracking-[0.2em] text-primary uppercase before:h-px before:w-8 before:bg-primary">
              Our Industries
            </p>
            <h2 className="mt-4 font-heading text-3xl leading-tight font-semibold tracking-[-0.03em] text-white sm:text-4xl lg:text-5xl lg:whitespace-nowrap">
              Safety Solutions for Diverse Business Environments.
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-7 text-white/60">
              Practical fire protection shaped around each workplace, its people and its operations.
            </p>
          </div>

          <div className="mt-12 grid auto-rows-fr gap-5 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4 lg:gap-6">
            {industries.map((industry) => {
              const Icon = industry.icon
              return (
                <Card
                  borderless
                  key={industry.title}
                  className="group relative flex h-full min-h-[20rem] flex-col overflow-hidden rounded-2xl bg-white/[0.035] px-7 pt-[26px] pb-7 text-white shadow-none transition-colors duration-300 hover:bg-white/[0.055] sm:min-h-[21rem] lg:px-8 lg:pt-[26px] lg:pb-8"
                >
                  <Image
                    src={industry.image}
                    alt=""
                    fill
                    sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover opacity-0 transition-all duration-500 group-hover:scale-105 group-hover:opacity-30"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/75 to-zinc-950/20 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  <div className="relative z-10 flex min-h-0 w-full flex-1 flex-col items-start justify-center gap-5 pt-[10px]">
                    <IconBadge
                      size="md"
                      className="bg-[#2a0707]/70 text-red-500 shadow-[inset_0_1px_0_rgba(255,255,255,0.03)]"
                    >
                      <Icon className="size-5" aria-hidden="true" />
                    </IconBadge>
                    <h3 className="font-heading text-xl font-semibold tracking-tight">
                      {industry.title}
                    </h3>
                    <p className="min-h-[7.5rem] text-sm leading-6 text-white/55 line-clamp-5">
                      {industry.description}
                    </p>
                  </div>
                </Card>
              )
            })}
          </div>
        </Container>
      </section>

      <section className="bg-white py-20 text-zinc-950 sm:py-24 lg:py-28">
        <Container>
          <div className="max-w-4xl">
            <p className="flex items-center gap-3 text-xs font-bold tracking-[0.2em] text-primary uppercase before:h-px before:w-8 before:bg-primary">
              Our Approach
            </p>
            <h2 className="mt-4 font-heading text-3xl leading-tight font-semibold tracking-[-0.03em] text-zinc-950 sm:text-4xl lg:text-5xl">
              The Right Protection Starts With Understanding Your Workplace.
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-7 text-zinc-600">
              We consider your environment, operations and safety requirements
              to provide practical solutions that are easier to maintain and
              manage.
            </p>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-3 lg:mt-16">
            {approachSteps.map((step) => {
              const Icon = step.icon ?? Check

              return (
                <Card
                  borderless
                  key={step.number}
                  className="group relative flex h-full min-h-[20rem] flex-col justify-between overflow-hidden rounded-2xl border border-zinc-200 bg-white px-7 py-7 shadow-none transition-all duration-300 hover:-translate-y-1 hover:border-red-200 hover:shadow-[0_18px_40px_rgba(225,13,13,0.08)] sm:min-h-[22rem] lg:px-8 lg:py-8"
                >
                  <span className="absolute right-5 top-5 text-[clamp(4rem,10vw,6.5rem)] font-semibold tracking-[-0.06em] text-zinc-950/[0.05] select-none">
                    {step.number}
                  </span>
                  <div className="relative z-10 flex h-full flex-col">
                    <IconBadge
                      size="md"
                      className="bg-white text-red-600 ring-1 ring-red-200 transition-colors duration-300 group-hover:bg-red-50 group-hover:ring-red-300"
                    >
                      <Icon className="size-5" aria-hidden="true" />
                    </IconBadge>
                    <div className="mt-auto pt-20">
                      <h3 className="text-sm font-semibold tracking-[0.22em] text-red-600 uppercase">
                        {step.label}
                      </h3>
                      <p className="mt-4 max-w-sm text-sm leading-7 text-zinc-600">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </Card>
              )
            })}
          </div>
        </Container>
      </section>

      <section className="relative overflow-hidden bg-[linear-gradient(90deg,#060000_0%,#170000_26%,#2b0000_56%,#6b0404_78%,#f01313_100%)] text-white">
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_36%),linear-gradient(180deg,rgba(255,255,255,0.03),transparent_28%)]"
        />
        <div className="relative mx-auto flex min-h-[300px] max-w-6xl flex-col items-center justify-center px-4 py-16 text-center sm:px-6 lg:px-8 lg:py-20">
          <p className="text-[11px] font-semibold uppercase tracking-[0.42em] text-[#ff5a4f]">
            LET&apos;S PROTECT WHAT MATTERS
          </p>
          <h2 className="mt-5 max-w-5xl text-4xl font-semibold tracking-[-0.04em] text-balance sm:text-5xl md:text-6xl lg:text-[4.25rem] lg:leading-[0.95]">
            Find the Right Fire Safety Solution for Your Industry.
          </h2>
          <p className="mt-6 max-w-3xl text-sm leading-7 text-white/88 sm:text-base">
            Talk to our team about fire protection, maintenance and compliance support.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-flex h-12 items-center gap-3 rounded-lg bg-[#e10d0d] px-6 text-sm font-semibold text-white shadow-[0_0_0_1px_rgba(255,255,255,0.06),0_14px_30px_rgba(0,0,0,0.25)] transition-transform duration-200 hover:-translate-y-0.5 hover:bg-[#f51515] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80 focus-visible:ring-offset-2 focus-visible:ring-offset-[#320000]"
          >
            Request a Consultation <ArrowRight className="size-4" aria-hidden="true" />
          </Link>
        </div>
      </section>
    </>
  )
}
