import { DetailedServicePage } from "@/components/site/detailed-service-page"
import { pageMetadata } from "@/lib/site-data"
import { detailedServicePages } from "@/lib/detailed-service-pages"

export const metadata = pageMetadata(
  "Fire Hydrant System Chennai | Aulukya",
  "Aulukya provides fire hydrant system supply, installation, testing, maintenance, and AMC support for businesses and workplaces in Chennai.",
  "/fire-hydrant-systems-chennai"
)

export default function Page() {
  return <DetailedServicePage content={detailedServicePages.hydrant} />
}
