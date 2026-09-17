import { DetailedServicePage } from "@/components/site/detailed-service-page"
import Link from "next/link"
import { pageMetadata } from "@/lib/site-data"
import { detailedServicePages } from "@/lib/detailed-service-pages"

export const metadata = pageMetadata(
  "Fire Safety Audit Chennai | Aulukya Fire & Safety",
  "Fire safety audit Chennai services for businesses, including workplace inspection, risk assessment, compliance-gap review and practical recommendations.",
  "/fire-audits-chennai"
)

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Fire Safety Audits",
  serviceType: "Fire Safety Audits",
  url: "https://aulukyafires.com/fire-audits-chennai",
  description:
    "A practical fire safety audit in Chennai to identify workplace risks, compliance gaps and clear opportunities for improvement.",
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

export default function Page() {
  const auditContent = detailedServicePages.audits
  const internalLinkClassName = "font-bold text-foreground no-underline"

  const content = {
    ...auditContent,
    intro: {
      ...auditContent.intro,
      description: (
        <>
          Our fire audit services in Chennai review workplace conditions,
          including existing{" "}
          <Link
            href="/fire-extinguisher-services-chennai"
            className={internalLinkClassName}
          >
            fire extinguisher services
          </Link>
          ,{" "}
          <Link
            href="/fire-alarm-systems-chennai"
            className={internalLinkClassName}
          >
            fire alarm systems
          </Link>{" "}
          and{" "}
          <Link
            href="/fire-hydrant-systems-chennai"
            className={internalLinkClassName}
          >
            fire hydrant systems
          </Link>
          , to identify practical improvements and compliance gaps.
        </>
      ) as unknown as string,
    },
    services: {
      ...auditContent.services,
      items: auditContent.services.items.map((item) => {
        if (item.title === "Risk Identification") {
          return {
            ...item,
            text: (
              <>
                Our fire risk assessment in Chennai identifies visible hazards,
                including gaps in workplace{" "}
                <Link
                  href="/safety-ppe-chennai"
                  className={internalLinkClassName}
                >
                  safety PPE
                </Link>
                , and areas requiring attention.
              </>
            ) as unknown as string,
          }
        }

        if (item.title === "Compliance Review") {
          return {
            ...item,
            text: (
              <>
                We review fire safety compliance in Chennai workplaces,
                identify gaps against applicable requirements and flag when{" "}
                <Link
                  href="/fire-noc-consulting-chennai"
                  className={internalLinkClassName}
                >
                  Fire NOC consulting
                </Link>{" "}
                may be useful.
              </>
            ) as unknown as string,
          }
        }

        if (item.title === "Follow-up Support") {
          return {
            ...item,
            text: (
              <>
                Ongoing support, including a suitable{" "}
                <Link
                  href="/fire-safety-amc-chennai"
                  className={internalLinkClassName}
                >
                  fire safety AMC
                </Link>
                , can help address identified fire safety requirements.
              </>
            ) as unknown as string,
          }
        }

        return item
      }),
    },
  }

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
