import Link from "next/link"
import {
  ArrowRight,
  BadgeCheck,
  BriefcaseBusiness,
  Flame,
  HardHat,
  ShieldCheck,
  Sparkles,
  SquareActivity,
  TriangleAlert,
} from "lucide-react"

import { Container } from "@/components/site/container"
import { CTASection } from "@/components/site/cta-section"
import { IconBadge } from "@/components/site/icon-badge"
import { HeroSection } from "@/components/site/hero-section"
import { buttonVariants } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { pageMetadata } from "@/lib/site-data"

export const metadata = pageMetadata(
  "Fire Safety Services in Chennai | Aulukya",
  "Explore Aulukya fire safety services in Chennai, including extinguishers, fire alarms, hydrants, PPE, AMC, audits, and Fire NOC consulting.",
  "/services"
)

const serviceCards = [
  {
    title: "Fire Extinguisher Services",
    text: "Sales, refilling and servicing of fire extinguishers.",
    href: "/fire-extinguisher-services-chennai",
    icon: Flame,
  },
  {
    title: "Fire Alarm Systems",
    text: "Supply, installation and maintenance of fire alarm systems.",
    href: "/fire-alarm-systems-chennai",
    icon: SquareActivity,
  },
  {
    title: "Hydrant Systems",
    text: "Design, supply, installation and AMC of hydrant systems.",
    href: "/fire-hydrant-systems-chennai",
    icon: BadgeCheck,
  },
  {
    title: "Safety PPE",
    text: "Personal protective equipment and safety products.",
    href: "/safety-ppe-chennai",
    icon: HardHat,
  },
  {
    title: "Fire Safety AMC",
    text: "Annual maintenance contracts to keep safety systems ready.",
    href: "/fire-safety-amc-chennai",
    icon: Sparkles,
  },
  {
    title: "Fire Audits",
    text: "Fire risk assessment and safety audits for workplaces.",
    href: "/fire-audits-chennai",
    icon: TriangleAlert,
  },
  {
    title: "Fire NOC Consulting",
    text: "Documentation and support for Fire NOC requirements.",
    href: "/fire-noc-consulting-chennai",
    icon: BriefcaseBusiness,
  },
  {
    title: "Compliance Support",
    text: "Helping businesses approach fire safety standards and statutory requirements.",
    href: "/fire-noc-consulting-chennai",
    icon: ShieldCheck,
  },
]

export default function Page() {
  return (
    <>
      <HeroSection
        eyebrow="Services"
        title="Complete Fire & Safety Solutions"
        description="Fire safety services in Chennai for businesses and organizations, delivered through focused support across equipment, systems, maintenance, audits and consulting."
        image="/home-hero-banner.png"
        primary={{ label: "Get a Consultation", href: "/contact" }}
        secondary={{ label: "Back to Home", href: "/" }}
      />
      <section className="py-16">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
              Complete Fire & Safety Solutions Under One Roof
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">Our Services</h2>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {serviceCards.map((service) => {
              const Icon = service.icon
              return (
                <Card key={service.title} className="rounded-lg text-center transition-colors hover:border-primary/40">
                  <CardHeader className="items-center gap-4 pt-8">
                    <IconBadge size="lg" className="size-20">
                      <Icon className="size-9" aria-hidden="true" />
                    </IconBadge>
                    <CardTitle className="max-w-52 text-xl leading-tight">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex min-h-36 flex-col items-center gap-5 pb-8">
                    <p className="max-w-56 text-sm leading-6 text-muted-foreground">{service.text}</p>
                    <Link href={service.href} className="mt-auto inline-flex items-center gap-2 text-sm font-semibold text-primary">
                      Learn More <ArrowRight className="size-4" aria-hidden="true" />
                    </Link>
                  </CardContent>
                </Card>
              )
            })}
          </div>
          <div className="mt-10 flex justify-center">
            <Link href="/contact" className={buttonVariants()}>
              Talk to Our Team <ArrowRight aria-hidden="true" />
            </Link>
          </div>
        </Container>
      </section>
      <CTASection
        title="Need Reliable Fire Safety Solutions?"
        description="Talk to our experts today for your fire safety needs and compliance support."
        label="Contact Us"
        href="/contact"
      />
    </>
  )
}
