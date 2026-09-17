import { DetailedServicePage } from "@/components/site/detailed-service-page"
import { pageMetadata } from "@/lib/site-data"
import { detailedServicePages } from "@/lib/detailed-service-pages"

export const metadata = pageMetadata(
  "Safety PPE Supplier Chennai | Aulukya",
  "Aulukya is a safety PPE supplier in Chennai, supplying workplace and industrial safety equipment for business requirements.",
  "/safety-ppe-chennai"
)

export default function Page() {
  return <DetailedServicePage content={detailedServicePages.ppe} />
}
