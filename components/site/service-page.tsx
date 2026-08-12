import Link from "next/link"

import { Container } from "@/components/site/container"
import { CTASection } from "@/components/site/cta-section"
import { FAQAccordion } from "@/components/site/faq-accordion"
import { HeroSection } from "@/components/site/hero-section"
import { SectionHeading } from "@/components/site/section-heading"
import { Badge } from "@/components/ui/badge"
import { buttonVariants } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { cn } from "@/lib/utils"

export type ServicePageContent = {
  title: string
  description: string
  keyword: string
  image: string
  sections: Array<{ title: string; text: string; points?: string[] }>
  process?: string[]
  faqs: Array<{ question: string; answer: string }>
  related: Array<{ label: string; href: string }>
}

export function ServicePage({ content }: { content: ServicePageContent }) {
  return (
    <>
      <HeroSection
        eyebrow={content.keyword}
        title={content.title}
        description={content.description}
        primary={{ label: "Get a Consultation", href: "/contact" }}
        secondary={{ label: "View All Services", href: "/services" }}
        image={content.image}
      />
      <section className="py-16">
        <Container className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr]">
          <aside className="space-y-4">
            <Badge variant="secondary">Service Overview</Badge>
            <h2 className="text-3xl font-medium tracking-normal">What Aulukya supports</h2>
            <p className="text-sm leading-6 text-muted-foreground">
              Each service is delivered with a focus on safety, quality, reliable support, and practical compliance needs.
            </p>
          </aside>
          <div className="grid gap-4">
            {content.sections.map((section) => (
              <Card key={section.title} className="rounded-lg">
                <CardHeader>
                  <CardTitle className="text-xl font-medium">{section.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="leading-7 text-muted-foreground">{section.text}</p>
                  {section.points ? (
                    <ul className="mt-5 grid gap-2 text-sm text-muted-foreground sm:grid-cols-2">
                      {section.points.map((point) => (
                        <li key={point} className="rounded-md border bg-muted/30 p-3">
                          {point}
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </section>
      {content.process ? (
        <section className="border-y bg-muted/30 py-16">
          <Container>
            <SectionHeading eyebrow="Process" title="A clear service process from enquiry to support." />
            <div className="mt-10 grid gap-4 md:grid-cols-4">
              {content.process.map((step, index) => (
                <Card key={step} className="rounded-lg">
                  <CardHeader>
                    <Badge variant="secondary" className="w-fit">
                      Step {index + 1}
                    </Badge>
                    <CardTitle className="text-lg font-medium">{step}</CardTitle>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </Container>
        </section>
      ) : null}
      <section className="py-16">
        <Container className="grid gap-10 lg:grid-cols-[1fr_0.8fr]">
          <div>
            <SectionHeading eyebrow="FAQ" title="Common questions" />
            <div className="mt-6">
              <FAQAccordion items={content.faqs} />
            </div>
          </div>
          <Card className="h-fit rounded-lg">
            <CardHeader>
              <CardTitle className="text-xl font-medium">Related services</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-3">
              {content.related.map((link) => (
                <Link key={link.href} href={link.href} className={cn(buttonVariants({ variant: "outline" }), "justify-start")}>
                  {link.label}
                </Link>
              ))}
            </CardContent>
          </Card>
        </Container>
      </section>
      <CTASection />
    </>
  )
}
