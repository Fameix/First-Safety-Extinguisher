import { CalInline } from "@/components/site/cal-inline"
import { Container } from "@/components/site/container"
import { pageMetadata } from "@/lib/site-data"

export const metadata = pageMetadata(
  "Book a Free Fire Safety Consultation | Aulukya",
  "Schedule a free consultation with Aulukya Fire & Safety Solutions.",
  "/book-consultation"
)

export default function Page() {
  return (
    <section className="section-surface py-14 sm:py-20">
      <Container>
        <div className="mx-auto mb-10 max-w-2xl text-center">
          <p className="text-xs font-semibold tracking-[0.28em] text-primary uppercase">
            Free Consultation
          </p>
          <h1 className="mt-4 text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">
            Choose a time that works for you.
          </h1>
          <p className="mt-4 leading-7 text-muted-foreground">
            Book a consultation with our team to discuss your fire and safety
            requirements.
          </p>
        </div>
        <CalInline />
      </Container>
    </section>
  )
}
