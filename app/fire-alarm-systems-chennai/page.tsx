import { ServicePage } from "@/components/site/service-page"
import { pageMetadata } from "@/lib/site-data"
import { servicePages } from "@/lib/service-pages"

export const metadata = pageMetadata(
  "Fire Alarm Systems in Chennai | Aulukya",
  "Aulukya supports fire alarm system supply, installation, testing, commissioning, and maintenance in Chennai.",
  "/fire-alarm-systems-chennai"
)

export default function Page() {
  return <ServicePage content={servicePages.alarm} />
}
