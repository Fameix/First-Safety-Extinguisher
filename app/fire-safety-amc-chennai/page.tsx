import { DetailedServicePage } from "@/components/site/detailed-service-page"
import { pageMetadata } from "@/lib/site-data"
import { detailedServicePages } from "@/lib/detailed-service-pages"
import Link from "next/link"
import { Children, cloneElement, isValidElement, type ReactNode } from "react"

export const metadata = pageMetadata(
  "Fire Safety AMC Chennai | Aulukya",
  "Aulukya provides fire safety AMC Chennai services, including inspection, testing, servicing, and maintenance for extinguishers, alarms, and hydrants.",
  "/fire-safety-amc-chennai"
)

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Fire Safety AMC",
  serviceType: "Fire Safety AMC",
  url: "https://aulukyafires.com/fire-safety-amc-chennai",
  description:
    "Aulukya provides planned inspection, testing, maintenance and servicing for essential fire safety equipment in Chennai.",
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

const amcIntro =
  "Our fire safety maintenance in Chennai helps businesses care for essential equipment through planned inspections, testing, servicing and AMC support."

const internalLinkClassName = "font-bold text-foreground no-underline"

function linkAmcServices(node: ReactNode): ReactNode {
  if (!isValidElement<{ children?: ReactNode; copy?: ReactNode }>(node)) {
    return node
  }

  const children = Children.map(node.props.children, linkAmcServices)
  if (node.props.copy === amcIntro) {
    return cloneElement(
      node,
      {
        copy: (
          <>
            {amcIntro} Coverage can include{" "}
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
      children
    )
  }

  return cloneElement(node, undefined, children)
}

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceJsonLd).replace(/</g, "\\u003c"),
        }}
      />
      {linkAmcServices(
        DetailedServicePage({ content: detailedServicePages.amc })
      )}
    </>
  )
}
