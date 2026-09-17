import { DetailedServicePage } from "@/components/site/detailed-service-page"
import { pageMetadata } from "@/lib/site-data"
import { detailedServicePages } from "@/lib/detailed-service-pages"

export const metadata = pageMetadata(
  "Fire NOC Consultant Chennai | Aulukya Fire & Safety",
  "Looking for a fire NOC consultant in Chennai? Get practical support with requirement reviews, documentation, compliance preparation and process follow-up.",
  "/fire-noc-consulting-chennai"
)

export default function Page() {
  return <DetailedServicePage content={detailedServicePages.noc} />
}
