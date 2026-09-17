import Link from "next/link"

import { DetailedServicePage } from "@/components/site/detailed-service-page"
import { pageMetadata } from "@/lib/site-data"
import { detailedServicePages } from "@/lib/detailed-service-pages"

export const metadata = pageMetadata(
  "Safety PPE Supplier Chennai | Aulukya",
  "Aulukya is a safety PPE supplier in Chennai, supplying workplace and industrial safety equipment for business requirements.",
  "/safety-ppe-chennai"
)

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Safety PPE",
  serviceType: "Safety PPE",
  url: "https://aulukyafires.com/safety-ppe-chennai",
  description:
    "Aulukya supplies workplace safety PPE selected around your people, operations and specific workplace risks.",
  provider: {
    "@type": "LocalBusiness",
    name: "AULUKYA FIRE & SAFETY SOLUTIONS",
    url: "https://aulukyafires.com/",
  },
  areaServed: {
    "@type": "City",
    name: "Chennai",
  },
}

const internalLinkClassName = "font-bold text-foreground no-underline"

export default function Page() {
  const ppeContent = detailedServicePages.ppe
  const content = {
    ...ppeContent,
    intro: {
      ...ppeContent.intro,
      description: (
        <>
          {ppeContent.intro.description} For a broader review of workplace
          hazards and safety gaps, explore our{" "}
          <Link href="/fire-audits-chennai" className={internalLinkClassName}>
            Fire Audits
          </Link>
          .
        </>
      ),
    },
    services: {
      ...ppeContent.services,
      description: (
        <>
          {ppeContent.services.description} PPE can also form part of a wider
          protection plan alongside{" "}
          <Link
            href="/fire-extinguisher-services-chennai"
            className={internalLinkClassName}
          >
            Fire Extinguisher Services
          </Link>
          ,{" "}
          <Link
            href="/fire-alarm-systems-chennai"
            className={internalLinkClassName}
          >
            Fire Alarm Systems
          </Link>
          , and{" "}
          <Link
            href="/fire-hydrant-systems-chennai"
            className={internalLinkClassName}
          >
            Fire Hydrant Systems
          </Link>
          .
        </>
      ),
    },
    process: ppeContent.process.map((step, index) => {
      if (index === 0) {
        return {
          ...step,
          text: (
            <>
              {step.text} Where statutory approval planning is involved, our{" "}
              <Link
                href="/fire-noc-consulting-chennai"
                className={internalLinkClassName}
              >
                Fire NOC Consulting
              </Link>{" "}
              can support the wider compliance process.
            </>
          ),
        }
      }

      return step
    }),
    feature: {
      ...ppeContent.feature,
      description: (
        <>
          {ppeContent.feature.description} Pairing suitable PPE with planned{" "}
          <Link
            href="/fire-safety-amc-chennai"
            className={internalLinkClassName}
          >
            Fire Safety AMC
          </Link>{" "}
          can support wider workplace readiness.
        </>
      ),
    },
  } as unknown as typeof ppeContent

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceJsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <DetailedServicePage content={content} />
    </>
  )
}
