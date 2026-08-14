import { DetailedServicePage } from "@/components/site/detailed-service-page"
import { pageMetadata } from "@/lib/site-data"
import { detailedServicePages } from "@/lib/detailed-service-pages"

export const metadata = pageMetadata(
  "Fire Hydrant System in Chennai | Aulukya",
  "Aulukya supports fire hydrant system design, supply, installation, and AMC needs for Chennai organizations.",
  "/fire-hydrant-systems-chennai"
)

export default function Page() {
  return <DetailedServicePage content={detailedServicePages.hydrant} />
}
