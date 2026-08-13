import { DetailedServicePage } from "@/components/site/detailed-service-page"
import { pageMetadata } from "@/lib/site-data"
import { detailedServicePages } from "@/lib/detailed-service-pages"

export const metadata = pageMetadata(
  "Fire Alarm Systems in Chennai | Aulukya",
  "Aulukya supports fire alarm system supply, installation, testing, commissioning, and maintenance in Chennai.",
  "/fire-alarm-systems-chennai"
)

export default function Page() {
  return <DetailedServicePage content={detailedServicePages.alarm} />
}
