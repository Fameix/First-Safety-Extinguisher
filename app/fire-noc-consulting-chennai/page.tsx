import { ServicePage } from "@/components/site/service-page"
import { pageMetadata } from "@/lib/site-data"
import { servicePages } from "@/lib/service-pages"

export const metadata = pageMetadata(
  "Fire NOC Consultant in Chennai | Aulukya",
  "Aulukya provides consulting support and documentation support for Fire NOC related requirements in Chennai.",
  "/fire-noc-consulting-chennai"
)

export default function Page() {
  return <ServicePage content={servicePages.noc} />
}
