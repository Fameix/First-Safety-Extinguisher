import Link from "next/link"
import Image from "next/image"
import {
  ArrowRight,
  Check,
  Search,
  Phone,
  ShieldCheck,
  Wrench,
} from "lucide-react"

import { Container } from "@/components/site/container"
import { CTASection } from "@/components/site/cta-section"
import { IconBadge } from "@/components/site/icon-badge"
import { IndustriesSection } from "@/components/site/industries-section"
import { buttonVariants } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { BOOKING_URL } from "@/lib/booking"
import { pageMetadata } from "@/lib/site-data"
import { cn } from "@/lib/utils"

const title = "Fire Safety Solutions for Industries in Chennai | Aulukya"
const description =
  "Reliable fire safety solutions in Chennai, including fire protection services, equipment, maintenance and compliance support for every workplace."

export const metadata = pageMetadata(title, description, "/industries")

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
      <section className="relative isolate -mt-[88px] min-h-[760px] overflow-hidden bg-zinc-950 pt-[88px] text-white lg:min-h-[850px]">
        <Image
          src="/industries-hero-banner.png"
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
              Reliable fire protection, installation, maintenance and compliance
              support for businesses across Chennai.
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
      </section>

      <section className="section-surface py-20 sm:py-24 lg:py-32">
        <Container className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-20">
          <div className="relative order-1 aspect-[4/3] overflow-hidden rounded-2xl bg-muted lg:order-2">
            <Image
              src="/industries-workplace-fire-protection.png"
              alt="A fire safety technician inspecting a fire hose reel and extinguisher system"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
          <div className="order-2 lg:order-1">
            <SectionIntro
              eyebrow="BUILT FOR YOUR INDUSTRY"
              title="Fire Protection Shaped Around Your Workplace."
              copy="Every industry has different safety requirements. We provide practical fire safety solutions designed around your workplace, operations and compliance needs."
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
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                buttonVariants({ size: "lg" }),
                "mt-8 h-12 rounded-lg px-6"
              )}
            >
              Book a Free Consultation <ArrowRight aria-hidden="true" />
            </Link>
          </div>
        </Container>
      </section>

      <IndustriesSection />

      <section className="section-surface py-20 text-zinc-950 sm:py-24 lg:py-28">
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
                  <span className="absolute top-5 right-5 text-[clamp(4rem,10vw,6.5rem)] font-semibold tracking-[-0.06em] text-zinc-950/[0.05] select-none">
                    {step.number}
                  </span>
                  <div className="relative z-10 flex h-full flex-col">
                    <IconBadge
                      size="md"
                      className="transition-colors duration-300 group-hover:bg-red-50"
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

      <CTASection
        title="Find the Right Fire Safety Solution for Your Industry."
        description="Talk to our team about fire protection, maintenance and compliance support."
        label="Book a Free Consultation"
        href={BOOKING_URL}
        external
      />
    </>
  )
}
