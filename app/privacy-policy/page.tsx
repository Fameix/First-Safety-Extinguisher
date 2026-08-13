import { Container } from "@/components/site/container"
import { HeroSection } from "@/components/site/hero-section"
import { pageMetadata } from "@/lib/site-data"

export const metadata = pageMetadata(
  "Privacy Policy | Aulukya Fire & Safety Solutions",
  "Privacy policy page for Aulukya Fire & Safety Solutions website enquiries.",
  "/privacy-policy"
)

export default function Page() {
  return (
    <>
      <HeroSection
        eyebrow="Privacy"
        title="Privacy Policy"
        description="This page can be updated with the company's approved privacy policy."
      />
      <section className="section-surface py-16">
        <Container>
          <div className="max-w-3xl text-base leading-8 text-muted-foreground">
          <p>
            Formal privacy policy content has not been provided. This placeholder avoids adding unapproved legal
            terms while keeping the website route available.
          </p>
          </div>
        </Container>
      </section>
    </>
  )
}
