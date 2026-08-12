import Image from "next/image"
import Link from "next/link"
import {
  ArrowRight,
  BadgeCheck,
  Check,
  ClipboardCheck,
  Gauge,
  Hammer,
  PackageCheck,
  RefreshCw,
  ShieldCheck,
  Truck,
} from "lucide-react"

import { Container } from "@/components/site/container"
import { FAQAccordion } from "@/components/site/faq-accordion"
import { IconBadge } from "@/components/site/icon-badge"
import { buttonVariants } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { pageMetadata } from "@/lib/site-data"
import { cn } from "@/lib/utils"

export const metadata = pageMetadata(
  "Fire Extinguisher Service in Chennai | Aulukya",
  "Complete fire extinguisher inspection, maintenance, refilling, testing, replacement and supply for Chennai businesses.",
  "/fire-extinguisher-services-chennai"
)

const services = [
  { title: "Inspection", text: "Detailed checks for condition, placement, access and service status.", icon: ClipboardCheck },
  { title: "Maintenance", text: "Preventive service that keeps every unit dependable and ready.", icon: Hammer },
  { title: "Refill", text: "Prompt refilling after discharge or when an extinguisher needs recharging.", icon: RefreshCw },
  { title: "Testing", text: "Pressure and performance checks handled with clear service records.", icon: Gauge },
  { title: "Replacement", text: "Practical recommendations for damaged, expired or unsuitable units.", icon: ShieldCheck },
  { title: "Supply", text: "Workplace-ready extinguishers selected around your site and risk profile.", icon: PackageCheck },
]

const extinguisherTypes = [
  { title: "ABC Dry Powder", text: "For common workplace fire risks across offices, stores and facilities." },
  { title: "CO₂ Extinguishers", text: "A clean-agent option for electrical equipment and sensitive work areas." },
  { title: "Foam Extinguishers", text: "Suitable support for flammable liquid risks when specified for the site." },
]

const faqs = [
  { question: "How often should fire extinguishers be serviced?", answer: "Extinguishers should be visually checked regularly and serviced on a planned schedule based on their condition, environment and applicable requirements. We can help establish a practical maintenance plan for your site." },
  { question: "Do you provide fire extinguisher refilling in Chennai?", answer: "Yes. Aulukya supports extinguisher refilling, servicing and follow-up for businesses and organizations across Chennai." },
  { question: "Can you service all extinguisher types?", answer: "We review the make, type, condition and application of each unit before recommending the appropriate service or replacement path." },
  { question: "Will I receive service documentation?", answer: "Yes. Service scope and recommendations are shared clearly so your team can keep maintenance records current." },
]

function SectionIntro({ eyebrow, title, copy, light = false }: { eyebrow: string; title: string; copy?: string; light?: boolean }) {
  return (
    <div className={cn("max-w-2xl", light && "text-white")}>
      <p className={cn("flex items-center gap-3 text-xs font-bold tracking-[0.2em] uppercase before:h-px before:w-8 before:bg-primary", light ? "text-red-400" : "text-primary")}>{eyebrow}</p>
      <h2 className="mt-4 font-heading text-3xl leading-tight font-semibold tracking-[-0.035em] sm:text-4xl lg:text-5xl">{title}</h2>
      {copy ? <p className={cn("mt-5 text-base leading-7", light ? "text-white/60" : "text-muted-foreground")}>{copy}</p> : null}
    </div>
  )
}

export default function Page() {
  return (
    <>
      <section className="relative isolate -mt-[88px] overflow-hidden bg-zinc-950 pt-[88px] text-white">
        <Container className="grid min-h-[720px] items-center gap-12 py-24 lg:grid-cols-[1.02fr_0.98fr] lg:gap-20 lg:py-32">
          <div className="max-w-3xl">
            <p className="flex items-center gap-3 text-xs font-bold tracking-[0.22em] text-red-400 uppercase before:h-px before:w-10 before:bg-red-500">Fire Extinguisher Services</p>
            <h1 className="mt-6 max-w-3xl font-heading text-5xl leading-[0.98] font-semibold tracking-[-0.05em] sm:text-6xl lg:text-7xl">Fire extinguishers that are <span className="text-red-500">ready when it matters.</span></h1>
            <p className="mt-6 max-w-xl text-base leading-7 text-white/65 sm:text-lg">Inspection, maintenance, refill, testing and supply for businesses that need dependable fire protection on site.</p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link href="/contact" className={cn(buttonVariants({ size: "lg" }), "h-12 rounded-lg px-6")}>Book a Service <ArrowRight aria-hidden="true" /></Link>
              <Link href="tel:+919003012345" className={cn(buttonVariants({ variant: "outline", size: "lg" }), "h-12 rounded-lg border-white/20 bg-white/5 px-6 text-white hover:bg-white hover:text-zinc-950")}>Call Our Team</Link>
            </div>
          </div>
          <div className="relative aspect-[0.92] overflow-hidden rounded-2xl border border-white/10 bg-zinc-900 lg:aspect-[0.9]">
            <Image src="/home-hero-fire-extinguisher.jpeg" alt="Red fire extinguishers ready for service" fill priority sizes="(min-width: 1024px) 46vw, 100vw" className="object-cover" />
            <div className="absolute inset-x-5 bottom-5 rounded-xl border border-white/15 bg-zinc-950/90 p-5 sm:inset-x-7 sm:bottom-7">
              <div className="flex items-center gap-3"><IconBadge className="bg-red-950 text-red-400"><BadgeCheck className="size-5" /></IconBadge><div><p className="font-heading font-semibold">Service-ready equipment</p><p className="mt-1 text-xs text-white/55">Clear checks. Reliable support.</p></div></div>
            </div>
          </div>
        </Container>
        <div className="border-t border-white/10 bg-zinc-950"><Container className="grid grid-cols-2 divide-x divide-white/10 sm:grid-cols-4">{["Inspection", "Refilling", "Testing", "Supply"].map((item) => <div key={item} className="flex items-center justify-center gap-2 px-3 py-4 text-center text-xs font-semibold tracking-[0.14em] text-white/60 uppercase sm:py-5"><Check className="size-4 text-red-500" />{item}</div>)}</Container></div>
      </section>

      <section className="py-20 sm:py-24 lg:py-32"><Container className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-20"><div><SectionIntro eyebrow="Extinguisher care" title="A small piece of equipment with a critical job." copy="A fire extinguisher is only useful when it is correctly selected, accessible and ready to perform. Aulukya gives your team a straightforward service partner for the checks and upkeep that keep fire protection visible and dependable." /><div className="mt-8 grid gap-4 border-t pt-6 sm:grid-cols-2">{["Site-focused recommendations", "Practical service records", "Responsive Chennai support", "Business-ready scheduling"].map((item) => <p key={item} className="flex items-center gap-2 text-sm font-semibold"><Check className="size-4 text-primary" />{item}</p>)}</div></div><div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-muted"><Image src="/about-fire-inspection.png" alt="Technician inspecting fire safety equipment" fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" /></div></Container></section>

      <section className="bg-zinc-950 py-20 text-white sm:py-24 lg:py-32"><Container><SectionIntro light eyebrow="Our extinguisher services" title="Everything your equipment needs to stay ready." copy="From a single workplace unit to a larger managed inventory, we support the full service cycle with clear communication and dependable follow-through." /><div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{services.map(({ title, text, icon: Icon }) => <Card key={title} borderless className="min-h-56 rounded-2xl bg-white/[0.035] p-7 text-white shadow-none ring-1 ring-white/10 transition-colors hover:bg-white/[0.06]"><CardHeader className="p-0"><IconBadge size="md" className="bg-red-950 text-red-500"><Icon className="size-5" /></IconBadge><CardTitle className="mt-6 text-xl text-white">{title}</CardTitle></CardHeader><CardContent className="p-0"><p className="mt-3 text-sm leading-6 text-white/55">{text}</p><Link href="/contact" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-red-400">Discuss this service <ArrowRight className="size-4" /></Link></CardContent></Card>)}</div></Container></section>

      <section className="py-20 sm:py-24 lg:py-32"><Container className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-20"><div><SectionIntro eyebrow="Readiness checklist" title="Before an emergency, check the basics." copy="Use this simple checklist to spot the details that make a difference in a real moment. We can help inspect and maintain the equipment behind it." /><div className="mt-8 grid gap-3">{["Correct extinguisher type for the risk", "Visible, unobstructed and easy to reach", "Pressure gauge in the serviceable range", "Pin, seal, hose and handle in good condition", "Current inspection and service marking", "Team members know where it is and how to use it"].map((item) => <div key={item} className="flex items-center gap-3 rounded-xl border bg-card px-4 py-3 text-sm font-medium"><Check className="size-4 shrink-0 text-primary" />{item}</div>)}</div></div><div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-muted"><Image src="/home-why-fire-safety.png" alt="Fire safety technician working with extinguisher equipment" fill sizes="(min-width: 1024px) 48vw, 100vw" className="object-cover" /></div></Container></section>

      <section className="border-y bg-muted/35 py-20 sm:py-24 lg:py-28"><Container><SectionIntro eyebrow="Our process" title="A clear path from enquiry to service." /><div className="mt-12 grid gap-4 md:grid-cols-4">{["Share your requirement", "Review the equipment", "Service or supply", "Keep it ready"].map((step, index) => <Card key={step} className="rounded-2xl bg-background"><CardHeader><span className="text-sm font-bold text-primary">0{index + 1}</span><CardTitle className="mt-4 text-xl">{step}</CardTitle></CardHeader><CardContent><p className="text-sm leading-6 text-muted-foreground">{["Tell us about your site, inventory or immediate need.", "We understand condition, type, access and maintenance history.", "We complete the agreed work with practical recommendations.", "Your team gets a clearer plan for ongoing readiness."][index]}</p></CardContent></Card>)}</div></Container></section>

      <section className="py-20 sm:py-24 lg:py-32"><Container><div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between"><SectionIntro eyebrow="Extinguisher types" title="The right unit for the right risk." copy="We help you choose suitable equipment for the spaces and risks present at your workplace." /><Link href="/contact" className={cn(buttonVariants({ variant: "outline", size: "lg" }), "h-12 rounded-lg px-6")}>Ask for guidance <ArrowRight /></Link></div><div className="mt-12 grid gap-5 md:grid-cols-3">{extinguisherTypes.map((type, index) => <Card key={type.title} className="overflow-hidden rounded-2xl"><div className="relative h-44 bg-muted"><Image src={index === 0 ? "/home-service-extinguishers.jpeg" : index === 1 ? "/home-hero-equipment.png" : "/home-project-maintenance.jpeg"} alt="" fill sizes="(min-width: 768px) 33vw, 100vw" className="object-cover" /></div><CardHeader><CardTitle className="text-xl">{type.title}</CardTitle></CardHeader><CardContent><p className="text-sm leading-6 text-muted-foreground">{type.text}</p></CardContent></Card>)}</div></Container></section>

      <section className="bg-zinc-950 py-20 text-white sm:py-24 lg:py-28">
        <Container className="flex flex-col gap-12 lg:gap-16">
          <Card borderless className="w-full rounded-2xl bg-primary p-8 text-white shadow-none sm:p-10">
            <CardHeader className="p-0">
              <IconBadge className="bg-white/15 text-white"><Truck className="size-5" /></IconBadge>
              <CardTitle className="mt-7 text-3xl leading-tight text-white sm:text-4xl">Ready to get your extinguishers checked?</CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <p className="mt-5 leading-7 text-white/80">Tell us what your workplace needs and we&apos;ll help you plan the next step.</p>
              <Link href="/contact" className="mt-8 inline-flex h-12 items-center gap-2 rounded-lg bg-white px-6 text-sm font-semibold text-zinc-950 transition-colors hover:bg-zinc-100">Book a Service <ArrowRight className="size-4" /></Link>
            </CardContent>
          </Card>

          <div className="w-full">
            <SectionIntro light eyebrow="Frequently asked" title="Straight answers for safer decisions." />
            <div className="mt-8 w-full">
              <FAQAccordion items={faqs} />
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}
