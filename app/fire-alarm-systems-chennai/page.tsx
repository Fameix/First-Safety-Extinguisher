import Link from "next/link"
import type { ReactNode } from "react"

import { DetailedServicePage } from "@/components/site/detailed-service-page"
import { pageMetadata } from "@/lib/site-data"
import { detailedServicePages } from "@/lib/detailed-service-pages"

export const metadata = pageMetadata(
  "Fire Alarm System Chennai | Aulukya",
  "Aulukya supplies, installs, tests, commissions, maintains, and provides AMC support for fire alarm systems in Chennai.",
  "/fire-alarm-systems-chennai"
)

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Fire Alarm Systems",
  serviceType: "Fire Alarm Systems",
  url: "https://aulukyafires.com/fire-alarm-systems-chennai",
  description:
    "Aulukya provides fire alarm system services in Chennai, helping protect people, property and operations through reliable early warning.",
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

const contextualCopy = (content: ReactNode) => content as unknown as string

const internalLinkClassName = "font-bold text-foreground no-underline"

export default function Page() {
  const alarmContent = detailedServicePages.alarm
  const content = {
    ...alarmContent,
    intro: {
      ...alarmContent.intro,
      description: contextualCopy(
        <>
          {alarmContent.intro.description} For broader site protection, alarms
          can work alongside{" "}
          <Link
            href="/fire-extinguisher-services-chennai"
            className={internalLinkClassName}
          >
            Fire Extinguisher Services
          </Link>{" "}
          and{" "}
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
    services: {
      ...alarmContent.services,
      items: alarmContent.services.items.map((item) =>
        item.title === "AMC Support"
          ? {
              ...item,
              text: contextualCopy(
                <>
                  {item.text} Explore our{" "}
                  <Link
                    href="/fire-safety-amc-chennai"
                    className={internalLinkClassName}
                  >
                    Fire Safety AMC
                  </Link>{" "}
                  support for coordinated upkeep across your site.
                </>
              ),
            }
          : item
      ),
    },
    feature: {
      ...alarmContent.feature,
      description: contextualCopy(
        <>
          {alarmContent.feature.description} Complement these system controls
          with{" "}
          <Link href="/safety-ppe-chennai" className={internalLinkClassName}>
            Safety PPE
          </Link>{" "}
          suited to workplace activities and hazards.
        </>
      ),
    },
    faqs: alarmContent.faqs.map((faq) => {
      if (faq.question === "How often should fire alarm systems be tested?") {
        return {
          ...faq,
          answer: contextualCopy(
            <>
              {faq.answer} Our{" "}
              <Link
                href="/fire-audits-chennai"
                className={internalLinkClassName}
              >
                Fire Audits
              </Link>{" "}
              can also help identify site-specific gaps and priorities.
            </>
          ),
        }
      }

      if (
        faq.question ===
        "Can you install fire alarm systems for existing buildings?"
      ) {
        return {
          ...faq,
          answer: contextualCopy(
            <>
              {faq.answer} Where approvals are involved, our{" "}
              <Link
                href="/fire-noc-consulting-chennai"
                className={internalLinkClassName}
              >
                Fire NOC Consulting
              </Link>{" "}
              service can support the wider compliance process.
            </>
          ),
        }
      }

      return faq
    }),
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
