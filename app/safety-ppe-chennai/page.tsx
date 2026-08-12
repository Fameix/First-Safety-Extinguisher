import { ServicePage } from "@/components/site/service-page"
import { pageMetadata } from "@/lib/site-data"
import { servicePages } from "@/lib/service-pages"

export const metadata = pageMetadata(
  "Safety PPE Supplier in Chennai | Aulukya",
  "Aulukya supports workplace safety PPE requirements for businesses and organizations in Chennai.",
  "/safety-ppe-chennai"
)

export default function Page() {
  return <ServicePage content={servicePages.ppe} />
}
