import { DetailedServicePage } from "@/components/site/detailed-service-page"
import { pageMetadata } from "@/lib/site-data"
import { detailedServicePages } from "@/lib/detailed-service-pages"

export const metadata = pageMetadata(
  "Safety PPE Supplier in Chennai | Aulukya",
  "Aulukya supports workplace safety PPE requirements for businesses and organizations in Chennai.",
  "/safety-ppe-chennai"
)

export default function Page() {
  return <DetailedServicePage content={detailedServicePages.ppe} />
}
