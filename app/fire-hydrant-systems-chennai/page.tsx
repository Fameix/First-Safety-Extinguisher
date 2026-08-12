import { ServicePage } from "@/components/site/service-page"
import { pageMetadata } from "@/lib/site-data"
import { servicePages } from "@/lib/service-pages"

export const metadata = pageMetadata(
  "Fire Hydrant System in Chennai | Aulukya",
  "Aulukya supports fire hydrant system design, supply, installation, and AMC needs for Chennai organizations.",
  "/fire-hydrant-systems-chennai"
)

export default function Page() {
  return <ServicePage content={servicePages.hydrant} />
}
