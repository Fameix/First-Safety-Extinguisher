import { DetailedServicePage } from "@/components/site/detailed-service-page"
import { pageMetadata } from "@/lib/site-data"
import { detailedServicePages } from "@/lib/detailed-service-pages"

export const metadata = pageMetadata(
  "Fire Alarm System Chennai | Aulukya",
  "Aulukya supplies, installs, tests, commissions, maintains, and provides AMC support for fire alarm systems in Chennai.",
  "/fire-alarm-systems-chennai"
)

export default function Page() {
  return <DetailedServicePage content={detailedServicePages.alarm} />
}
