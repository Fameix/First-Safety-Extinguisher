import { DetailedServicePage } from "@/components/site/detailed-service-page"
import Link from "next/link"

import { pageMetadata } from "@/lib/site-data"
import { detailedServicePages } from "@/lib/detailed-service-pages"

export const metadata = pageMetadata(
  "Fire NOC Consultant Chennai | Aulukya Fire & Safety",
  "Looking for a fire NOC consultant in Chennai? Get practical support with requirement reviews, documentation, compliance preparation and process follow-up.",
  "/fire-noc-consulting-chennai"
)

const serviceLinkClassName = "font-bold text-zinc-950 no-underline"

const nocContent = {
  ...detailedServicePages.noc,
  intro: {
    ...detailedServicePages.noc.intro,
    description: (
      <>
        Our Fire NOC assistance in Chennai helps businesses understand the
        requirements relevant to their workplace, review fire safety
        arrangements through a{" "}
        <Link href="/fire-audits-chennai" className={serviceLinkClassName}>
          fire safety audit
        </Link>
        , and prepare the information and documents needed for the applicable
        process.
      </>
    ),
  },
  services: {
    ...detailedServicePages.noc.services,
    description: (
      <>
        Our Fire NOC services in Chennai cover requirement review, documentation
        support, safety assessment, compliance guidance and follow-up through
        the applicable approval process. Where site requirements call for them,
        we can also support{" "}
        <Link
          href="/fire-extinguisher-services-chennai"
          className={serviceLinkClassName}
        >
          fire extinguisher services
        </Link>
        ,{" "}
        <Link
          href="/fire-alarm-systems-chennai"
          className={serviceLinkClassName}
        >
          fire alarm systems
        </Link>
        , and{" "}
        <Link
          href="/fire-hydrant-systems-chennai"
          className={serviceLinkClassName}
        >
          fire hydrant systems
        </Link>
        .
      </>
    ),
  },
  feature: {
    ...detailedServicePages.noc.feature,
    description: (
      <>
        Our consulting support connects site readiness, documentation and
        process guidance so you can approach each step with greater clarity.
        Ongoing readiness can also include{" "}
        <Link href="/fire-safety-amc-chennai" className={serviceLinkClassName}>
          fire safety AMC services
        </Link>{" "}
        and suitable{" "}
        <Link href="/safety-ppe-chennai" className={serviceLinkClassName}>
          safety PPE
        </Link>
        .
      </>
    ),
  },
}

export default function Page() {
  return (
    <DetailedServicePage
      content={nocContent as unknown as typeof detailedServicePages.noc}
    />
  )
}
