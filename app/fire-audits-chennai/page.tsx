import { DetailedServicePage } from "@/components/site/detailed-service-page"
import { pageMetadata } from "@/lib/site-data"
import { detailedServicePages } from "@/lib/detailed-service-pages"

export const metadata = pageMetadata(
  "Fire Audit Services in Chennai | Aulukya",
  "Aulukya provides fire audit and fire risk assessment support for businesses and organizations in Chennai.",
  "/fire-audits-chennai"
)

export default function Page() {
  return <DetailedServicePage content={detailedServicePages.audits} />
}
