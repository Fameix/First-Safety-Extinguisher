import Link from "next/link"

import {
  DetailedServicePage,
  type DetailedServiceContent,
} from "@/components/site/detailed-service-page"
import { pageMetadata } from "@/lib/site-data"
import { detailedServicePages } from "@/lib/detailed-service-pages"

export const metadata = pageMetadata(
  "Fire Hydrant System Chennai | Aulukya",
  "Aulukya provides fire hydrant system supply, installation, testing, maintenance, and AMC support for businesses and workplaces in Chennai.",
  "/fire-hydrant-systems-chennai"
)

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Fire Hydrant Systems",
  serviceType: "Fire Hydrant Systems",
  url: "https://aulukyafires.com/fire-hydrant-systems-chennai",
  description:
    "Aulukya provides fire hydrant system supply, installation, testing, maintenance and AMC support for businesses and workplaces across Chennai.",
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

const hydrantContent = {
  ...detailedServicePages.hydrant,
  intro: {
    ...detailedServicePages.hydrant.intro,
    description: (
      <>
        Our fire hydrant installation in Chennai is planned around your
        building, operations and wider fire fighting system needs, including
        coordination with{" "}
        <Link
          href="/fire-alarm-systems-chennai"
          className={internalLinkClassName}
        >
          Fire Alarm Systems
        </Link>{" "}
        and{" "}
        <Link
          href="/fire-extinguisher-services-chennai"
          className={internalLinkClassName}
        >
          Fire Extinguisher Services
        </Link>
        , with inspection and maintenance support to help keep the system ready.
      </>
    ),
  },
  services: {
    ...detailedServicePages.hydrant.services,
    description: (
      <>
        Practical support across system supply, installation, inspection,
        testing, maintenance and{" "}
        <Link href="/fire-safety-amc-chennai" className={internalLinkClassName}>
          Fire Safety AMC
        </Link>{" "}
        in Chennai.
      </>
    ),
  },
  process: detailedServicePages.hydrant.process.map((step, index) => {
    if (index === 0) {
      return {
        ...step,
        text: (
          <>
            We review your building layout, existing system, fire protection
            needs and related{" "}
            <Link href="/safety-ppe-chennai" className={internalLinkClassName}>
              Safety PPE
            </Link>{" "}
            requirements through a practical site assessment. For a broader
            compliance review, explore our{" "}
            <Link href="/fire-audits-chennai" className={internalLinkClassName}>
              Fire Audits
            </Link>
            .
          </>
        ),
      }
    }

    if (index === 1) {
      return {
        ...step,
        text: (
          <>
            We identify practical hydrant solutions suited to your site and
            coordinate system planning with relevant{" "}
            <Link
              href="/fire-noc-consulting-chennai"
              className={internalLinkClassName}
            >
              Fire NOC Consulting
            </Link>{" "}
            requirements.
          </>
        ),
      }
    }

    return step
  }),
} as unknown as DetailedServiceContent

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceJsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <DetailedServicePage content={hydrantContent} />
    </>
  )
}
