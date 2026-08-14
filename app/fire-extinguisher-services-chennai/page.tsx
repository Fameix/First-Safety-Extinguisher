import Image from "next/image"
import Link from "next/link"
import {
  ArrowRight,
  ClipboardCheck,
  Headset,
  ShieldCheck,
  Target,
  MessageSquare,
  SearchCheck,
  Phone,
  Wrench,
} from "lucide-react"

import { Container } from "@/components/site/container"
import { CTASection } from "@/components/site/cta-section"
import { FAQShowcase } from "@/components/site/faq-showcase"
import { IconBadge } from "@/components/site/icon-badge"
import { ReadinessChecklist } from "@/components/site/readiness-checklist"
import { buttonVariants } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { BOOKING_URL } from "@/lib/booking"
import { pageMetadata } from "@/lib/site-data"
import { cn } from "@/lib/utils"

export const metadata = pageMetadata(
  "Fire Extinguisher Service in Chennai | Aulukya",
  "Complete fire extinguisher inspection, maintenance, refilling, testing, replacement and supply for Chennai businesses.",
  "/fire-extinguisher-services-chennai"
)

const services = [
  {
    title: "Inspection",
    text: "Regular inspection to ensure extinguishers are accessible, properly mounted, clearly identified and ready for use.",
    image: "/images/services/extinguisher/inspection.png",
  },
  {
    title: "Maintenance",
    text: "Professional maintenance to keep fire extinguishers reliable, functional and in good working condition.",
    image: "/images/services/extinguisher/maintenance.png",
  },
  {
    title: "Refill",
    text: "Timely refilling of extinguishing agents to restore protection after use or when required.",
    image: "/images/services/extinguisher/refill.png",
  },
  {
    title: "Testing",
    text: "Routine testing and pressure checks to help ensure fire extinguishers perform safely and effectively.",
    image: "/images/services/extinguisher/testing.png",
  },
  {
    title: "Replacement",
    text: "Replacement of damaged, expired or unreliable extinguishers with suitable fire protection equipment.",
    image: "/images/services/extinguisher/replacement.png",
  },
  {
    title: "Supply",
    text: "Reliable supply of fire extinguishers selected to match your workplace and fire protection requirements.",
    image: "/images/services/extinguisher/supply.png",
  },
]

const extinguisherTypes = [
  {
    title: "ABC Dry Powder",
    text: "For common workplace fire risks across offices, stores and facilities.",
  },
  {
    title: "CO₂ Extinguishers",
    text: "A clean-agent option for electrical equipment and sensitive work areas.",
  },
  {
    title: "Foam Extinguishers",
    text: "Suitable support for flammable liquid risks when specified for the site.",
  },
]

const faqs = [
  {
    question: "How often should fire extinguishers be serviced?",
    answer:
      "Extinguishers should be visually checked regularly and serviced on a planned schedule based on their condition, environment and applicable requirements. We can help establish a practical maintenance plan for your site.",
  },
  {
    question: "Do you provide fire extinguisher refilling in Chennai?",
    answer:
      "Yes. Aulukya supports extinguisher refilling, servicing and follow-up for businesses and organizations across Chennai.",
  },
  {
    question: "Can you service all extinguisher types?",
    answer:
      "We review the make, type, condition and application of each unit before recommending the appropriate service or replacement path.",
  },
  {
    question: "Will I receive service documentation?",
    answer:
      "Yes. Service scope and recommendations are shared clearly so your team can keep maintenance records current.",
  },
]

function SectionIntro({
  eyebrow,
  title,
  copy,
  light = false,
}: {
  eyebrow: string
  title: string
  copy?: string
  light?: boolean
}) {
  return (
    <div className={cn("max-w-2xl", light && "text-zinc-950")}>
      <p
        className={cn(
          "flex items-center gap-3 text-xs font-bold tracking-[0.2em] uppercase before:h-px before:w-8 before:bg-primary",
          light ? "text-red-400" : "text-primary"
        )}
      >
        {eyebrow}
      </p>
      <h2 className="mt-4 font-heading text-3xl leading-tight font-semibold tracking-[-0.035em] sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {copy ? (
        <p
          className={cn(
            "mt-5 text-base leading-7",
            light ? "text-zinc-600" : "text-muted-foreground"
          )}
        >
          {copy}
        </p>
      ) : null}
    </div>
  )
}

export default function Page() {
  return (
    <>
      <section className="relative isolate -mt-[88px] min-h-[760px] overflow-hidden bg-zinc-950 pt-[88px] text-white lg:min-h-[850px]">
        <Image
          src="/fire-extinguisher-services-hero.png"
          alt="Red fire extinguishers ready for service"
          fill
          priority
          sizes="100vw"
          className="-z-20 object-cover object-[72%_center] sm:object-[65%_center] lg:object-center"
        />
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(9,9,11,0.97)_0%,rgba(9,9,11,0.86)_36%,rgba(9,9,11,0.34)_68%,rgba(9,9,11,0.12)_100%)]" />
        <div className="absolute inset-x-0 bottom-0 -z-10 h-40 bg-gradient-to-t from-zinc-950/90 to-transparent" />

        <Container className="flex min-h-[672px] items-start pt-[195px] pb-16 sm:pt-[195px] lg:min-h-[762px] lg:pt-[250px] lg:pb-20">
          <div className="max-w-3xl animate-in duration-700 fade-in slide-in-from-bottom-4">
            <p className="flex items-center gap-3 text-xs font-bold tracking-[0.22em] text-red-400 uppercase before:h-px before:w-10 before:bg-red-500">
              Fire Extinguisher Services
            </p>
            <h1 className="mt-6 max-w-3xl font-heading text-5xl leading-[0.98] font-semibold tracking-[-0.045em] text-balance sm:text-6xl lg:text-7xl xl:text-[5.25rem]">
              Fire extinguishers that are{" "}
              <span className="text-red-500">ready when it matters.</span>
            </h1>
            <p className="mt-6 max-w-xl text-base leading-7 text-white/72 sm:text-lg">
              Inspection, maintenance, refill, testing and supply for businesses
              that need dependable fire protection on site.
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
          <div>
            <SectionIntro
              eyebrow="Extinguisher care"
              title="A small piece of equipment with a critical job."
              copy="A fire extinguisher is only useful when it is correctly selected, accessible and ready to perform. Aulukya gives your team a straightforward service partner for the checks and upkeep that keep fire protection visible and dependable."
            />
            <div className="mt-10 grid gap-x-8 gap-y-6 sm:grid-cols-1 md:grid-cols-2">
              {[
                { title: "Site-focused recommendations", icon: ShieldCheck },
                { title: "Responsive Chennai support", icon: Headset },
                { title: "Practical service records", icon: ClipboardCheck },
                { title: "Business-ready scheduling", icon: Target },
              ].map(({ title, icon: Icon }) => (
                <div
                  key={title}
                  className="flex w-full min-w-0 items-center gap-4 text-left text-sm leading-6 font-medium text-zinc-900 sm:text-base"
                >
                  <IconBadge size="lg" className="shadow-sm">
                    <Icon className="size-5" aria-hidden="true" />
                  </IconBadge>
                  <span>{title}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-muted">
            <Image
              src="/about-fire-inspection.png"
              alt="Technician inspecting fire safety equipment"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        </Container>
      </section>

      <section className="section-surface-alt py-20 text-zinc-950 sm:py-24 lg:py-32">
        <Container>
          <SectionIntro
            light
            eyebrow="Fire extinguisher services"
            title="Our Fire Extinguisher Services"
            copy="Reliable fire extinguisher services to keep your workplace protected, compliant and ready when it matters."
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map(({ title, text, image }) => (
              <Card
                key={title}
                borderless
                className="min-h-56 rounded-2xl border border-zinc-200 bg-white p-7 text-zinc-950 shadow-sm transition-colors hover:border-red-200"
              >
                <CardHeader className="p-0">
                  <div className="relative size-16">
                    <Image
                      src={image}
                      alt={`${title} 3D illustration`}
                      fill
                      sizes="64px"
                      className="object-contain"
                    />
                  </div>
                  <CardTitle className="mt-6 text-xl text-zinc-950">
                    {title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <p className="mt-3 text-sm leading-6 text-zinc-600">{text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      <section className="section-surface py-20 sm:py-24 lg:py-32">
        <Container>
          <ReadinessChecklist />
        </Container>
      </section>

      <section className="section-surface-alt py-20 text-zinc-950 sm:py-24 lg:py-28">
        <Container>
          <div className="max-w-4xl">
            <SectionIntro
              eyebrow="Our process"
              title="A clear path from enquiry to service."
            />
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:mt-16 lg:grid-cols-4 lg:items-stretch">
            {[
              "Share your requirement",
              "Review the equipment",
              "Service or supply",
              "Keep it ready",
            ].map((step, index) => {
              const icons = [
                MessageSquare,
                SearchCheck,
                Wrench,
                ShieldCheck,
              ] as const
              const Icon = icons[index]
              const stepNumber = String(index + 1).padStart(2, "0")

              return (
                <Card
                  key={step}
                  borderless
                  className="group relative flex h-full min-h-[20rem] flex-col justify-between overflow-hidden rounded-[1.5rem] border border-zinc-200 bg-white px-7 py-7 shadow-none transition-colors duration-300 hover:border-red-200 sm:min-h-[21rem] lg:px-8 lg:py-8"
                >
                  <span className="absolute top-5 right-5 text-[clamp(3.5rem,9vw,6rem)] font-semibold tracking-[-0.08em] text-zinc-950/[0.05] select-none">
                    {stepNumber}
                  </span>
                  <div className="relative z-10 flex h-full flex-col">
                    <div className="flex size-14 items-center justify-center rounded-full bg-red-50 text-red-600">
                      <Icon className="size-5" aria-hidden="true" />
                    </div>
                    <div className="mt-auto pt-20">
                      <h3 className="font-heading text-[1.45rem] leading-tight font-semibold tracking-[-0.04em] text-zinc-950 lg:text-[1.55rem]">
                        {step}
                      </h3>
                      <p className="mt-4 max-w-sm text-sm leading-7 text-zinc-600">
                        {
                          [
                            "Tell us about your site, inventory or immediate need.",
                            "We understand condition, type, access and maintenance history.",
                            "We complete the agreed work with practical recommendations.",
                            "Your team gets a clearer plan for ongoing readiness.",
                          ][index]
                        }
                      </p>
                    </div>
                  </div>
                </Card>
              )
            })}
          </div>
        </Container>
      </section>

      <section className="section-surface py-16">
        <Container>
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-6xl">
              <div className="flex items-center gap-3">
                <span className="h-px w-8 bg-[#d50707]" aria-hidden="true" />
                <p className="text-xs font-bold tracking-[0.25em] text-[#d50707] uppercase">
                  EXTINGUISHER TYPES
                </p>
              </div>
              <h2 className="mt-5 font-heading text-4xl leading-none font-semibold tracking-[-0.04em] text-zinc-950 sm:text-5xl lg:text-[4rem]">
                The right unit for the right risk.
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-7 text-muted-foreground">
                We help you choose suitable equipment for the spaces and risks
                present at your workplace.
              </p>
            </div>

            <Link
              href="/contact"
              className={cn(
                buttonVariants({ size: "lg" }),
                "h-12 rounded-2xl bg-[#d50707] px-6 text-white shadow-none hover:bg-[#b80505]"
              )}
            >
              Ask for guidance <ArrowRight aria-hidden="true" />
            </Link>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:mt-16 xl:grid-cols-3">
            {extinguisherTypes.map((type, index) => (
              <Link
                key={type.title}
                href="/contact"
                className="group block h-full focus-visible:outline-none"
              >
                <div className="relative isolate h-full min-h-[320px] overflow-hidden rounded-[24px] bg-white text-white shadow-[0_24px_50px_-30px_rgba(0,0,0,0.25)] transition-transform duration-300 ease-out group-hover:-translate-y-1 group-hover:shadow-[0_28px_58px_-28px_rgba(0,0,0,0.3)] group-focus-visible:ring-2 group-focus-visible:ring-[#d50707] group-focus-visible:ring-offset-4 group-focus-visible:ring-offset-white">
                  <div className="absolute inset-0 bg-muted">
                    <Image
                      src={
                        index === 0
                          ? "/home-service-extinguishers.jpeg"
                          : index === 1
                            ? "/home-hero-equipment.png"
                            : "/home-project-maintenance.jpeg"
                      }
                      alt={type.title}
                      fill
                      sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
                      className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.035]"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent" />
                  <div className="relative flex h-full min-w-0 flex-col justify-end p-6 sm:p-7">
                    <div className="flex h-full flex-col justify-end">
                      <h3 className="font-heading text-2xl leading-tight font-semibold tracking-tight text-white sm:text-[2rem]">
                        {type.title}
                      </h3>
                      <p className="mt-2 text-sm leading-6 text-white/88">
                        {type.text}
                      </p>
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
        description="We're here to help you keep what matters safe with clear, responsible fire safety support in Chennai."
        label="Call Us Today"
        href="/contact"
      />
      <FAQShowcase items={faqs} />
    </>
  )
}
