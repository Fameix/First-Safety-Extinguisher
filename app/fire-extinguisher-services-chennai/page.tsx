import { ServicePage } from "@/components/site/service-page"
import { pageMetadata } from "@/lib/site-data"
import { servicePages } from "@/lib/service-pages"

export const metadata = pageMetadata(
  "Fire Extinguisher Service in Chennai | Aulukya",
  "Aulukya provides fire extinguisher sales, refilling and servicing in Chennai for businesses and organizations.",
  "/fire-extinguisher-services-chennai"
)

export default function Page() {
  return <ServicePage content={servicePages.extinguisher} />
}
