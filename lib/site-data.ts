import type { Metadata } from "next"

export const siteUrl = "https://aulukya-fire-safety.example"
export const companyName = "AULUKYA FIRE & SAFETY SOLUTIONS"
export const shortName = "Aulukya"
export const socialLinks = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/",
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/",
  },
]

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about-us" },
  { label: "Services", href: "/services" },
  { label: "Industries", href: "/industries" },
  { label: "Projects", href: "/projects" },
  { label: "Blog", href: "/blog" },
  { label: "Contact Us", href: "/contact" },
]

export const services = [
  {
    title: "Fire Extinguisher Services",
    href: "/fire-extinguisher-services-chennai",
    keyword: "Fire Extinguisher Service in Chennai",
    description:
      "Sales, refilling, servicing, and maintenance support for fire extinguishers used by businesses and organizations.",
  },
  {
    title: "Fire Alarm Systems",
    href: "/fire-alarm-systems-chennai",
    keyword: "Fire Alarm Systems in Chennai",
    description:
      "Fire alarm system supply, installation, testing, commissioning, and maintenance support.",
  },
  {
    title: "Hydrant Systems",
    href: "/fire-hydrant-systems-chennai",
    keyword: "Fire Hydrant System in Chennai",
    description:
      "Design, supply, installation, and AMC support for hydrant systems in commercial and industrial settings.",
  },
  {
    title: "Safety PPE",
    href: "/safety-ppe-chennai",
    keyword: "Safety PPE Supplier in Chennai",
    description:
      "Safety personal protective equipment support for workplace fire and safety requirements.",
  },
  {
    title: "Fire Safety AMC",
    href: "/fire-safety-amc-chennai",
    keyword: "Fire Safety AMC in Chennai",
    description:
      "Planned maintenance support for fire extinguishers, alarm systems, hydrant systems, and safety equipment.",
  },
  {
    title: "Fire Audits",
    href: "/fire-audits-chennai",
    keyword: "Fire Audit Services in Chennai",
    description:
      "Professional fire safety audits and risk assessment support for safer workplaces.",
  },
  {
    title: "Fire NOC Consulting",
    href: "/fire-noc-consulting-chennai",
    keyword: "Fire NOC Consultant in Chennai",
    description:
      "Consulting and documentation support for Fire NOC related requirements.",
  },
]

export const industries = [
  "Manufacturing & Industrial Facilities",
  "Commercial Buildings & Offices",
  "Warehouses & Storage",
  "Retail & Showrooms",
  "Educational Institutions",
  "Residential / Apartments",
]

export const blogPosts = [
  {
    slug: "fire-extinguisher-maintenance-for-workplaces",
    title: "Fire Extinguisher Maintenance for Safer Workplaces",
    date: "2026-08-10",
    category: "Maintenance",
    excerpt:
      "A practical look at why routine extinguisher checks, refilling, and servicing matter for business fire readiness.",
    image:
      "https://images.unsplash.com/photo-1601049676869-702ea24cfd58?auto=format&fit=crop&w=1600&q=80",
    related: ["/fire-extinguisher-services-chennai", "/fire-safety-amc-chennai", "/contact"],
  },
  {
    slug: "fire-alarm-systems-for-commercial-buildings",
    title: "Fire Alarm Systems for Commercial Buildings",
    date: "2026-08-10",
    category: "Fire Alarms",
    excerpt:
      "How fire alarm installation, testing, and maintenance support early warning and safer building operations.",
    image:
      "https://images.unsplash.com/photo-1581092921461-7031e6f3ec61?auto=format&fit=crop&w=1600&q=80",
    related: ["/fire-alarm-systems-chennai", "/industries", "/contact"],
  },
  {
    slug: "preparing-for-a-fire-safety-audit",
    title: "Preparing for a Fire Safety Audit",
    date: "2026-08-10",
    category: "Audits",
    excerpt:
      "What organizations can review before a fire audit and how professional inspection support helps identify gaps.",
    image:
      "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1600&q=80",
    related: ["/fire-audits-chennai", "/fire-noc-consulting-chennai", "/contact"],
  },
]

export function pageMetadata(title: string, description: string, path = "/"): Metadata {
  const url = `${siteUrl}${path}`

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: companyName,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  }
}
