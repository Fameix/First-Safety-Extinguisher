import Image from "next/image"
import Link from "next/link"
import {
  ArrowRight,
  Check,
  ClipboardCheck,
  Flame,
  Headset,
  MapPin,
  Play,
  Phone,
  ShieldCheck,
  Sparkles,
  Target,
} from "lucide-react"

import { Container } from "@/components/site/container"
import { CTASection } from "@/components/site/cta-section"
import { IconBadge } from "@/components/site/icon-badge"
import { buttonVariants } from "@/components/ui/button"
import { BOOKING_URL } from "@/lib/booking"
import { pageMetadata } from "@/lib/site-data"
import { cn } from "@/lib/utils"

const title =
  "About Aulukya Fire & Safety Solutions | Fire Safety Company in Chennai"
const description =
  "Chennai-based fire safety company providing fire protection, safety equipment, installation, maintenance and compliance support."

export const metadata = {
  ...pageMetadata(title, description, "/about-us"),
  openGraph: {
    ...pageMetadata(title, description, "/about-us").openGraph,
    images: [
      {
        url: "/about-fire-inspection.png",
        width: 1524,
        height: 1032,
        alt: "Fire safety inspection by Aulukya Fire & Safety Solutions in Chennai",
      },
    ],
  },
}

const services = [
  {
    title: "Practical Expertise",
    icon: ShieldCheck,
  },
  {
    title: "Reliable Support",
    icon: Headset,
  },
  {
    title: "Compliance Focused",
    icon: ClipboardCheck,
  },
] as const

const whatWeDo = [
  {
    title: "Fire protection equipment",
    description:
      "Supply and support for extinguishers and other workplace fire safety equipment.",
  },
  {
    title: "System installation",
    description:
      "Professional installation for fire alarm, hydrant and related protection systems.",
  },
  {
    title: "Maintenance and AMC",
    description:
      "Ongoing servicing that keeps your systems ready and compliant over time.",
  },
  {
    title: "Audits and compliance",
    description:
      "Practical fire safety audits and support for workplace compliance requirements.",
  },
  {
    title: "Fire NOC consulting",
    description:
      "Guidance to help clients navigate fire NOC needs with greater clarity.",
  },
  {
    title: "Safety PPE",
    description:
      "Reliable protective equipment that supports safer work environments.",
  },
  {
    title: "Emergency readiness",
    description:
      "Support for improving preparedness, response and workplace safety awareness.",
  },
  {
    title: "Local fire safety support",
    description:
      "Chennai-focused service for businesses needing consistent, responsive help.",
  },
] as const

const values = [
  {
    title: "Safety First",
    description:
      "We prioritise dependable fire protection outcomes before anything else.",
    icon: ShieldCheck,
  },
  {
    title: "Quality in Execution",
    description:
      "Every installation, inspection and maintenance step is handled with care.",
    icon: Target,
  },
  {
    title: "Reliable Support",
    description:
      "Clients get clear communication, timely follow-up and dependable service.",
    icon: Headset,
  },
  {
    title: "Customer Focus",
    description:
      "We tailor fire safety support around the real needs of each workplace.",
    icon: Check,
  },
] as const

function Eyebrow({
  children,
  light = false,
}: {
  children: React.ReactNode
  light?: boolean
}) {
  return (
    <p
      className={cn(
        "flex items-center gap-3 text-xs font-bold tracking-[0.22em] uppercase before:h-px before:w-8",
        light
          ? "text-red-400 before:bg-red-500"
          : "text-red-700 before:bg-red-700"
      )}
    >
      {children}
    </p>
  )
}

export default function Page() {
  return (
    <>
      <section className="relative isolate -mt-[88px] min-h-[760px] overflow-hidden bg-zinc-950 pt-[88px] text-white lg:min-h-[850px]">
        <Image
          src="/about-us-hero-banner.png"
          alt="Fire protection equipment supplied and serviced by Aulukya in Chennai"
          fill
          priority
          sizes="100vw"
          className="-z-20 object-cover object-center"
        />
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(9,9,11,0.97)_0%,rgba(9,9,11,0.86)_36%,rgba(9,9,11,0.34)_68%,rgba(9,9,11,0.08)_100%)]" />
        <Container className="flex min-h-[672px] items-end pt-28 pb-16 sm:pt-32 lg:min-h-[762px] lg:items-center lg:pt-36 lg:pb-20">
          <div className="max-w-3xl animate-in duration-700 fade-in slide-in-from-bottom-4">
            <p className="flex items-center gap-3 text-xs font-bold tracking-[0.22em] text-red-400 uppercase before:h-px before:w-10 before:bg-red-500">
              ABOUT AULUKYA
            </p>
            <h1 className="mt-6 max-w-3xl font-heading text-5xl leading-[0.98] font-semibold tracking-[-0.045em] text-balance sm:text-6xl lg:text-7xl xl:text-[5.25rem]">
              Fire Safety Built Around{" "}
              <span className="text-red-500">Your Business.</span>
            </h1>
            <p className="mt-6 max-w-xl text-base leading-7 text-white/72 sm:text-lg">
              A Chennai-based fire safety company providing reliable fire
              protection, safety equipment, installation, maintenance and
              compliance support.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <Link
                  href={BOOKING_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                className={cn(
                  buttonVariants({ size: "lg" }),
                  "h-12 rounded-lg px-6"
                )}
              >
                Book a Free Consultation <ArrowRight aria-hidden="true" />
              </Link>
              <Link
                href="tel:+919003012345"
                className={cn(
                  buttonVariants({ variant: "outline", size: "lg" }),
                  "h-12 rounded-lg border-white/25 bg-white/5 px-6 text-white backdrop-blur-sm hover:bg-white hover:text-zinc-950"
                )}
              >
                <Phone aria-hidden="true" /> Call Us Now
              </Link>
            </div>
          </div>
        </Container>
      </section>

      <section className="section-surface py-20 sm:py-24 lg:py-32">
        <Container className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
          <div className="relative aspect-[4/3] overflow-hidden rounded-[1.75rem] bg-zinc-100 shadow-[0_24px_80px_-40px_rgba(0,0,0,0.5)]">
            <Image
              src="/our-company-workplace-fire-protection.png"
              alt="Aulukya technician carrying out a fire safety equipment inspection in Chennai"
              fill
              sizes="(min-width: 1024px) 52vw, 100vw"
              className="object-cover"
            />
          </div>
          <div>
            <Eyebrow>Our company</Eyebrow>
            <h2 className="mt-5 font-heading text-4xl leading-tight font-semibold tracking-[-0.035em] text-zinc-950 sm:text-5xl">
              Fire protection built around real workplace needs.
            </h2>
            <div className="mt-7 max-w-2xl space-y-5 text-base leading-8 text-zinc-600">
              <p>
                Aulukya provides reliable fire safety solutions for businesses
                across Chennai, from equipment and system installation to
                ongoing maintenance and compliance support.
              </p>
              <p>
                We focus on practical, dependable solutions that help workplaces
                stay protected and prepared.
              </p>
            </div>
            <div className="mt-10">
              <div className="grid gap-8 sm:grid-cols-3">
                {services.map((service) => {
                  const Icon = service.icon

                  return (
                    <Link
                      key={service.title}
                      href="/services"
                      className="flex items-center gap-4 text-left text-sm leading-6 font-medium text-zinc-900 transition-colors hover:text-red-700 sm:text-base"
                    >
                      <IconBadge size="lg" className="shadow-sm">
                        <Icon className="size-5" aria-hidden="true" />
                      </IconBadge>
                      <span>{service.title}</span>
                    </Link>
                  )
                })}
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="section-surface-alt py-20 sm:py-24 lg:py-28">
        <Container>
          <div className="max-w-3xl">
            <Eyebrow>What we do</Eyebrow>
            <h2 className="mt-5 font-heading text-4xl leading-tight font-semibold tracking-[-0.035em] text-zinc-950 sm:text-5xl">
              Eight core services delivered with consistent care.
            </h2>
          </div>
          <div className="mt-12 grid gap-0 lg:grid-cols-2">
            {whatWeDo.map((item, index) => (
              <article
                key={item.title}
                className={cn(
                  "py-6 sm:py-7",
                  index % 2 === 0 ? "lg:pr-10" : "lg:pl-10"
                )}
              >
                <div className="flex items-start gap-4">
                  <IconBadge size="sm" className="mt-1">
                    {index % 4 === 0 ? (
                      <Flame className="size-5" aria-hidden="true" />
                    ) : null}
                    {index % 4 === 1 ? (
                      <ShieldCheck className="size-5" aria-hidden="true" />
                    ) : null}
                    {index % 4 === 2 ? (
                      <Target className="size-5" aria-hidden="true" />
                    ) : null}
                    {index % 4 === 3 ? (
                      <Sparkles className="size-5" aria-hidden="true" />
                    ) : null}
                  </IconBadge>
                  <div>
                    <h3 className="font-heading text-2xl font-semibold tracking-[-0.03em] text-zinc-950">
                      {item.title}
                    </h3>
                    <p className="mt-2 max-w-xl text-sm leading-7 text-zinc-600">
                      {item.description}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="section-surface py-20 sm:py-24 lg:py-28">
        <Container>
          <div className="max-w-3xl">
            <Eyebrow>Our purpose</Eyebrow>
            <h2 className="mt-5 max-w-2xl font-heading text-4xl leading-tight font-semibold tracking-[-0.035em] text-zinc-950 sm:text-5xl">
              The purpose behind how we protect.
            </h2>
          </div>
          <div className="mt-12 grid items-stretch gap-6 lg:grid-cols-2 lg:gap-8">
            <article className="flex h-full min-h-0 flex-col overflow-hidden rounded-[1.75rem] border border-zinc-200 bg-white shadow-[0_18px_60px_-42px_rgba(0,0,0,0.35)] lg:min-h-[36rem]">
              <div className="relative h-48 overflow-hidden bg-zinc-100 sm:h-56 lg:h-72">
                <Image
                  src="/mission-card.png"
                  alt="Fire safety service support for businesses in Chennai"
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0)_0%,rgba(255,255,255,0.08)_100%)]" />
              </div>
              <div className="flex min-h-0 flex-1 flex-col px-6 py-6 sm:px-8 sm:py-8">
                <p className="text-[20px] font-bold tracking-[0.24em] text-red-700 uppercase">
                  Mission
                </p>
                <div className="mt-3 h-px w-12 bg-red-600/35" />
                <h3 className="mt-4 font-heading text-[24px] font-semibold tracking-[-0.03em] text-zinc-950 sm:text-[24px]">
                  Make fire safety practical, dependable and easy to act on.
                </h3>
                <p className="mt-5 flex-1 text-base leading-7 text-zinc-600 sm:leading-8">
                  We provide reliable fire protection solutions that help
                  businesses stay prepared, protected and compliant.
                </p>
              </div>
            </article>
            <article className="flex h-full min-h-0 flex-col overflow-hidden rounded-[1.75rem] border border-zinc-200 bg-white shadow-[0_18px_60px_-42px_rgba(0,0,0,0.35)] lg:min-h-[36rem]">
              <div className="relative h-48 overflow-hidden bg-zinc-100 sm:h-56 lg:h-72">
                <Image
                  src="/vision-card.png"
                  alt="Workplace fire safety equipment and readiness"
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0)_0%,rgba(255,255,255,0.08)_100%)]" />
              </div>
              <div className="flex min-h-0 flex-1 flex-col px-6 py-6 sm:px-8 sm:py-8">
                <p className="text-[20px] font-bold tracking-[0.24em] text-red-700 uppercase">
                  Vision
                </p>
                <div className="mt-3 h-px w-12 bg-red-600/35" />
                <h3 className="mt-4 font-heading text-[24px] font-semibold tracking-[-0.03em] text-zinc-950 sm:text-[24px]">
                  Be a trusted fire safety partner for workplaces across
                  Chennai.
                </h3>
                <p className="mt-5 flex-1 text-base leading-7 text-zinc-600 sm:leading-8">
                  We aim to support safer workplaces through reliable service,
                  stronger preparedness and clear guidance on day-to-day fire
                  protection needs.
                </p>
              </div>
            </article>
          </div>
        </Container>
      </section>

      <section className="section-surface-alt overflow-hidden overflow-x-clip py-16 text-zinc-950 sm:py-20 lg:py-24">
        <Container className="max-w-[1440px]">
          <div className="max-w-3xl text-left">
            <Eyebrow light>How we work</Eyebrow>
            <h2 className="mt-4 font-heading text-4xl leading-tight font-semibold tracking-[-0.035em] text-balance text-zinc-950 sm:text-5xl">
              A practical approach to fire safety.
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-7 text-zinc-600 sm:text-lg sm:leading-8">
              We follow a clear, collaborative process to understand your
              requirements, deliver the right solutions and keep your workplace
              protected over time.
            </p>
          </div>

          <div className="mt-8 sm:mt-10">
            <div className="relative aspect-[16/10] min-h-[240px] w-full overflow-hidden rounded-[1.5rem] border border-zinc-200 bg-white shadow-[0_24px_70px_-42px_rgba(0,0,0,0.25)] sm:aspect-[16/9] sm:min-h-[320px] sm:rounded-[2rem] lg:min-h-[380px]">
              <Image
                src="/about-fire-inspection.png"
                alt="Fire safety specialist reviewing workplace protection measures"
                fill
                sizes="(min-width: 1440px) 1376px, (min-width: 1024px) calc(100vw - 2rem), 100vw"
                className="object-cover object-[58%_center] opacity-90"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(9,9,11,0.08)_0%,rgba(9,9,11,0.16)_45%,rgba(9,9,11,0.78)_100%)]" />
              <div className="absolute inset-0 flex items-center justify-center">
                <button
                  type="button"
                  aria-label="Play overview video"
                  className="group flex size-20 items-center justify-center rounded-full border border-white/60 bg-white/70 shadow-[0_18px_50px_-22px_rgba(0,0,0,0.3)] backdrop-blur-md transition duration-300 hover:scale-105 hover:bg-white/90 focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-4 focus-visible:ring-offset-white focus-visible:outline-none sm:size-24"
                >
                  <span className="flex size-14 items-center justify-center rounded-full bg-red-600 text-white shadow-[0_10px_24px_-12px_rgba(220,38,38,0.9)] transition-transform duration-300 group-hover:scale-105 sm:size-16">
                    <Play
                      className="ml-0.5 size-6 fill-current sm:size-7"
                      aria-hidden="true"
                    />
                  </span>
                </button>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="section-surface py-14 text-zinc-950 sm:py-16 lg:py-20">
        <Container className="max-w-[1280px] rounded-[2rem] bg-[#fcfcfd] px-5 py-10 shadow-[0_30px_80px_-50px_rgba(0,0,0,0.18)] ring-1 ring-zinc-100 sm:px-8 sm:py-12 lg:px-12 lg:py-14">
          <div className="mx-auto w-full max-w-6xl text-center">
            <div className="flex justify-center">
              <Eyebrow>CHENNAI FOCUSED</Eyebrow>
            </div>
            <h2 className="mx-auto mt-5 max-w-5xl font-heading text-4xl font-semibold tracking-[-0.045em] text-balance sm:text-5xl lg:text-[4rem] lg:leading-[1.03]">
              Fire safety support, close to your business.
            </h2>
            <p className="mx-auto mt-5 max-w-4xl text-base leading-8 text-zinc-600 sm:text-[1.05rem]">
              Based in Pallavaram, Chennai, we support businesses with
              dependable fire protection, maintenance, audits and compliance
              services.
            </p>

            <div className="relative mx-auto mt-8 w-full max-w-6xl overflow-hidden rounded-[1.6rem] bg-[#fbf2f2] px-5 py-5 text-left shadow-[0_18px_48px_-34px_rgba(220,38,38,0.38)] ring-1 ring-red-100 sm:px-6 sm:py-6">
              <div className="pointer-events-none absolute inset-0">
                <div className="absolute top-5 right-6 h-28 w-28 rounded-full border border-red-200/70" />
                <div className="absolute top-10 right-20 h-16 w-16 rounded-full border border-red-200/60" />
                <svg
                  aria-hidden="true"
                  viewBox="0 0 420 170"
                  className="absolute right-0 bottom-0 h-[8.5rem] w-[21rem] text-red-200/80 sm:h-[9.5rem] sm:w-[24rem]"
                  fill="none"
                >
                  <path
                    d="M38 128 C66 128 86 66 122 66 C158 66 170 96 205 96 C243 96 254 42 297 42 C334 42 348 78 384 78"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeDasharray="4 8"
                  />
                  <path
                    d="M22 150 H398"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                  <path
                    d="M286 150 v-17 h14 v17 M302 150 v-31 h10 v31 M317 150 v-49 h18 v49 M339 150 v-64 h14 v64 M358 150 v-28 h15 v28"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M82 150 v-10 h12 v10 M103 150 v-24 h18 v24 M126 150 v-16 h10 v16"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>

              <div className="relative flex flex-col gap-5 sm:flex-row sm:items-center sm:gap-6">
                <div className="flex shrink-0 items-center justify-center">
                  <div className="relative flex size-20 items-center justify-center rounded-full bg-white/70 shadow-[0_12px_30px_-20px_rgba(220,38,38,0.55)] ring-1 ring-red-100 sm:size-24">
                    <MapPin
                      className="size-9 fill-red-600 text-red-600 sm:size-10"
                      aria-hidden="true"
                    />
                  </div>
                </div>

                <div className="min-w-0 flex-1">
                  <p className="text-xl font-semibold tracking-[-0.03em] text-zinc-950 sm:text-[1.45rem]">
                    Pallavaram, Chennai
                  </p>
                  <div className="mt-3 h-0.5 w-12 rounded-full bg-red-500" />
                  <p className="mt-4 max-w-xl text-sm leading-7 text-zinc-600 sm:text-[0.98rem]">
                    Serving businesses across Chennai with practical, responsive
                    fire safety support.
                  </p>
                </div>

                <div className="absolute top-4 right-4 hidden items-center justify-center sm:flex">
                  <MapPin
                    className="size-5 fill-red-600 text-red-600"
                    aria-hidden="true"
                  />
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="section-surface-alt py-20 text-zinc-950 sm:py-24 lg:py-28">
        <Container>
          <div className="max-w-3xl">
            <Eyebrow light>Our values</Eyebrow>
            <h2 className="mt-5 font-heading text-4xl leading-tight font-semibold tracking-[-0.035em] text-zinc-950 sm:text-5xl">
              Built on values. Driven by responsibility.
            </h2>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-7">
            {values.map((value) => (
              <article
                key={value.title}
                className={cn(
                  "group flex h-full min-h-[16rem] flex-col rounded-2xl border border-zinc-200 bg-white p-7 text-zinc-950 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-red-200 sm:min-h-[17rem] lg:p-8"
                )}
              >
                <div className="flex items-start justify-between gap-4">
                  <IconBadge
                    size="md"
                    className="bg-red-50 text-red-600 shadow-none ring-1 ring-red-100 transition-transform duration-300 group-hover:scale-105"
                  >
                    <value.icon className="size-5" aria-hidden="true" />
                  </IconBadge>
                </div>
                <h3 className="mt-6 font-heading text-2xl font-semibold tracking-[-0.03em] text-zinc-950">
                  {value.title}
                </h3>
                <div className="mt-4 h-px w-12 bg-red-500/40" />
                <p className="mt-4 max-w-sm text-sm leading-7 text-zinc-600">
                  {value.description}
                </p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <CTASection
        title="Build a safer workplace with Aulukya."
        description="Talk to our team about reliable fire protection, maintenance and compliance solutions for your workplace."
        label="Book a Free Consultation"
        href={BOOKING_URL}
        external
      />
    </>
  )
}
