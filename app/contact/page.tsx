import { ContactForm } from "@/components/site/contact-form"
import { Container } from "@/components/site/container"
import { HeroSection } from "@/components/site/hero-section"
import { SectionHeading } from "@/components/site/section-heading"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { pageMetadata } from "@/lib/site-data"

export const metadata = pageMetadata(
  "Contact Aulukya Fire & Safety Solutions",
  "Send an enquiry to Aulukya Fire & Safety Solutions for fire protection, safety equipment, AMC, audits, or Fire NOC consulting support.",
  "/contact"
)

export default function Page() {
  return (
    <>
      <HeroSection
        eyebrow="Contact Us"
        title="Get fire safety support for your workplace."
        description="Share your requirement and the Aulukya team can respond through the company's preferred contact process once details are connected."
        image="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1800&q=80"
      />
      <section className="py-16">
        <Container className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="space-y-4">
            <SectionHeading eyebrow="Enquiry" title="Tell us what you need." />
            <Card className="rounded-lg">
              <CardHeader>
                <CardTitle className="text-xl font-medium">Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm leading-6 text-muted-foreground">
                <p>Phone: To be added once provided by the company.</p>
                <p>Email: To be added once provided by the company.</p>
                <p>Address: To be added once provided by the company.</p>
                <p>Business Hours: To be added once provided by the company.</p>
              </CardContent>
            </Card>
            <Card className="rounded-lg">
              <CardHeader>
                <CardTitle className="text-xl font-medium">Office Location</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid min-h-52 place-items-center rounded-lg border bg-muted/30 p-6 text-center text-sm text-muted-foreground">
                  Google Map will be added after the company provides a verified office location.
                </div>
              </CardContent>
            </Card>
          </div>
          <Card className="rounded-lg">
            <CardHeader>
              <CardTitle className="text-2xl font-medium">Enquiry Form</CardTitle>
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
