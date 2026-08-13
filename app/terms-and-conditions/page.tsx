import { Container } from "@/components/site/container"
import { HeroSection } from "@/components/site/hero-section"
import { pageMetadata } from "@/lib/site-data"

export const metadata = pageMetadata(
  "Terms & Conditions | Aulukya Fire & Safety Solutions",
  "Terms and conditions page for Aulukya Fire & Safety Solutions.",
  "/terms-and-conditions"
)

export default function Page() {
  return (
    <>
      <HeroSection
        eyebrow="Terms"
        title="Terms & Conditions"
        description="This page can be updated with the company's approved terms and conditions."
      />
      <section className="section-surface py-16">
        <Container>
          <div className="max-w-3xl text-base leading-8 text-muted-foreground">
          <p>
            Formal terms and conditions have not been provided. This placeholder avoids adding unapproved legal
            terms while keeping the website route available.
          </p>
          </div>
        </Container>
      </section>
    </>
  )
}
