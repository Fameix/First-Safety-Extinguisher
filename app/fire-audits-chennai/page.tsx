import { DetailedServicePage } from "@/components/site/detailed-service-page"
import { pageMetadata } from "@/lib/site-data"
import { detailedServicePages } from "@/lib/detailed-service-pages"

export const metadata = pageMetadata(
  "Fire Safety Audit Chennai | Aulukya Fire & Safety",
  "Fire safety audit Chennai services for businesses, including workplace inspection, risk assessment, compliance-gap review and practical recommendations.",
  "/fire-audits-chennai"
)

export default function Page() {
  return <DetailedServicePage content={detailedServicePages.audits} />
}
