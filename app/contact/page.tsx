import { Clock3, Mail, MapPin, Phone } from "lucide-react"

import { ContactForm } from "@/components/site/contact-form"
import { Container } from "@/components/site/container"
import { HeroSection } from "@/components/site/hero-section"
import { IconBadge } from "@/components/site/icon-badge"
import { SectionHeading } from "@/components/site/section-heading"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { pageMetadata } from "@/lib/site-data"

export const metadata = pageMetadata(
  "Contact Aulukya Fire & Safety Solutions",
  "Send an enquiry to Aulukya Fire & Safety Solutions for fire protection, safety equipment, AMC, audits, or Fire NOC consulting support.",
  "/contact"
)

const contactItems = [
  { label: "Phone", value: "+91 90030 12345", icon: Phone },
  { label: "Email", value: "info@aulukyafiresafety.com", icon: Mail },
  { label: "Address", value: "Pallavaram, Chennai", icon: MapPin },
  {
    label: "Business Hours",
    value: "Mon – Sat, 9:00 AM – 6:00 PM",
    icon: Clock3,
  },
]

export default function Page() {
  return (
    <>
      <HeroSection
        eyebrow="CONTACT US"
        title={
          <>
            <span className="block whitespace-nowrap">
              Get fire safety support
            </span>
            <span className="block whitespace-nowrap">
              for <span className="text-red-500">your workplace.</span>
            </span>
          </>
        }
        description="Share your requirement and the Aulukya team can respond through the company's preferred contact process once details are connected."
        image="/contact-us-hero-banner.png"
        homeStyle
      />
      <section className="section-surface py-16">
        <Container className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="space-y-4">
            <SectionHeading eyebrow="Enquiry" title="Tell us what you need." />
            <Card className="rounded-lg">
              <CardHeader>
                <CardTitle className="text-xl font-medium">
                  Contact Information
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-5">
                  {contactItems.map((item) => {
                    const Icon = item.icon

                    return (
                      <li className="flex items-center gap-4" key={item.label}>
                        <IconBadge size="sm">
                          <Icon aria-hidden="true" />
                        </IconBadge>
                        <div className="min-w-0">
                          <p className="font-medium text-foreground">
                            {item.label}
                          </p>
                          <p className="mt-0.5 text-sm leading-5 break-words text-muted-foreground">
                            {item.value}
                          </p>
                        </div>
                      </li>
                    )
                  })}
                </ul>
              </CardContent>
            </Card>
            <Card className="rounded-lg">
              <CardHeader>
                <CardTitle className="text-xl font-medium">
                  Office Location
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div
                  className="relative grid min-h-52 overflow-hidden rounded-lg border bg-muted/30 p-6 text-center"
                  style={{
                    backgroundImage:
                      "linear-gradient(32deg, transparent 46%, color-mix(in oklab, var(--border) 55%, transparent) 47%, color-mix(in oklab, var(--border) 55%, transparent) 49%, transparent 50%), linear-gradient(148deg, transparent 46%, color-mix(in oklab, var(--border) 45%, transparent) 47%, color-mix(in oklab, var(--border) 45%, transparent) 49%, transparent 50%)",
                    backgroundSize: "80px 64px",
                  }}
                >
                  <div className="relative m-auto flex max-w-xs flex-col items-center rounded-lg border bg-background/95 px-6 py-5 shadow-sm">
                    <IconBadge className="mb-3" size="md">
                      <MapPin aria-hidden="true" />
                    </IconBadge>
                    <p className="font-medium text-foreground">
                      Pallavaram, Chennai
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Office Location
                    </p>
                    <p className="mt-3 text-xs leading-5 text-muted-foreground">
                      Aulukya Fire &amp; Safety Solutions
                      <br />
                      Pallavaram, Chennai, Tamil Nadu
                    </p>
                    <span className="mt-3 rounded-full bg-red-50 px-2.5 py-1 text-[11px] font-medium text-red-600">
                      Temporary location preview
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          <Card className="rounded-lg">
            <CardHeader>
              <CardTitle className="text-2xl font-medium">
                Enquiry Form
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ContactForm />
            </CardContent>
          </Card>
        </Container>
      </section>
    </>
  )
}
