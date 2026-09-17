import { DetailedServicePage } from "@/components/site/detailed-service-page"
import { pageMetadata } from "@/lib/site-data"
import { detailedServicePages } from "@/lib/detailed-service-pages"

export const metadata = pageMetadata(
  "Fire Safety AMC Chennai | Aulukya",
  "Aulukya provides fire safety AMC Chennai services, including inspection, testing, servicing, and maintenance for extinguishers, alarms, and hydrants.",
  "/fire-safety-amc-chennai"
)

export default function Page() {
  return <DetailedServicePage content={detailedServicePages.amc} />
}
