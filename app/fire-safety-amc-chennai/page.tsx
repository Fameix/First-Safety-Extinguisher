import { DetailedServicePage } from "@/components/site/detailed-service-page"
import { pageMetadata } from "@/lib/site-data"
import { detailedServicePages } from "@/lib/detailed-service-pages"

export const metadata = pageMetadata(
  "Fire Safety AMC in Chennai | Aulukya",
  "Aulukya provides Fire Safety AMC support for fire extinguishers, alarm systems, hydrant systems, and safety equipment.",
  "/fire-safety-amc-chennai"
)

export default function Page() {
  return <DetailedServicePage content={detailedServicePages.amc} />
}
