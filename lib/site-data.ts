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
    slug: "fire-safety-audit-checklist-workplace",
    title: "Fire Safety Audit Checklist: What Every Workplace Should Know",
    metaTitle: "Fire Safety Audit Checklist for Workplaces | Aulukya",
    metaDescription: "Learn the essential fire safety audit checklist for workplaces, including fire extinguishers, alarms, hydrants, emergency exits and compliance requirements.",
    date: "2026-08-14",
    displayDate: "14 Aug 2026",
    category: "Fire Safety",
    excerpt:
      "Learn the essential checks for extinguishers, alarms, hydrants, emergency exits and records that help keep a workplace prepared.",
    introduction: "A safe workplace starts with a proper understanding of fire risks. A fire safety audit helps businesses identify potential hazards, check the condition of fire protection systems and ensure that safety measures are ready when needed.",
    sections: [
      { heading: "Inspect Fire Extinguishers", content: "Check that fire extinguishers are easily accessible, properly mounted, clearly identified, within their service period, free from visible damage and properly pressurized." },
      { heading: "Check Fire Alarm Systems", content: "Fire alarm systems should be inspected regularly to ensure that smoke detectors, manual call points, alarm sounders and control panels are functioning correctly." },
      { heading: "Inspect Hydrant Systems", content: "For buildings that use hydrant systems, check fire hydrant valves, fire hoses, hose reels, pressure gauges, fire pumps, piping and connections." },
      { heading: "Check Emergency Exits", content: "Emergency exits must remain clearly marked and free from obstruction. Exit routes should be accessible and emergency signage should be visible." },
      { heading: "Review Fire Safety Documentation", content: "Maintain records of equipment inspections, maintenance activities, fire drills, testing reports, service records and compliance documentation." },
      { heading: "Schedule Regular Maintenance", content: "Fire protection equipment should not only be checked after installation. Regular maintenance and Annual Maintenance Contracts help keep systems dependable." },
    ],
    conclusion: "A proper fire safety audit helps businesses identify risks before they become serious problems. Regular inspection, maintenance and compliance checks create a safer and better-prepared workplace.",
    image: "/images/blog/fire-safety-audit.png",
    imageAlt: "Fire safety professional completing a workplace audit",
    tags: ["Fire Safety", "Audit", "Compliance"],
    related: ["/fire-audits-chennai", "/fire-noc-consulting-chennai", "/contact"],
  },
  {
    slug: "fire-alarm-systems-early-detection",
    title: "Fire Alarm Systems: Why Early Detection Matters",
    metaTitle: "Fire Alarm Systems: Importance of Early Detection | Aulukya",
    metaDescription: "Discover how fire alarm systems provide early detection, improve workplace safety and help protect people, property and business operations.",
    date: "2026-08-12",
    displayDate: "12 Aug 2026",
    category: "Fire Alarm Systems",
    excerpt:
      "Discover how reliable fire alarm systems provide early warning and help protect people, property and business operations.",
    introduction: "When a fire starts, every second matters. A reliable fire alarm system helps detect potential fire or smoke conditions early and alerts people inside the building so they can respond appropriately.",
    sections: [
      { heading: "How Fire Alarm Systems Work", content: "A typical fire alarm system may include smoke detectors, heat detectors, manual call points, alarm sounders, fire alarm control panels and visual indicators." },
      { heading: "Why Early Detection Is Important", content: "Early alerts provide occupants with more time to react. Quick detection can help reduce the potential impact on people and property and support business preparedness." },
      { heading: "Where Fire Alarm Systems Are Important", content: "Fire alarm systems can be designed for commercial buildings, offices, industrial facilities, hotels, hospitals, educational institutions, warehouses and residential buildings." },
      { heading: "Importance of Regular Testing", content: "Installation alone is not enough. Fire alarm systems require regular testing and maintenance to ensure detectors, call points, alarms and control panels continue to operate correctly." },
    ],
    conclusion: "A properly designed and maintained fire alarm system is an important part of a complete fire protection strategy. Early detection can make a critical difference in protecting people, property and operations.",
    image: "/images/blog/fire-alarm-systems.png",
    imageAlt: "Technician testing a commercial fire alarm system",
    tags: ["Fire Alarm", "Safety"],
    related: ["/fire-alarm-systems-chennai", "/industries", "/contact"],
  },
  {
    slug: "fire-extinguisher-maintenance-guide",
    title: "Fire Extinguisher Maintenance: A Complete Guide",
    metaTitle: "Fire Extinguisher Maintenance Guide for Businesses | Aulukya",
    metaDescription: "Learn how regular fire extinguisher inspection, servicing and maintenance help businesses keep their fire protection equipment reliable and ready.",
    date: "2026-08-10",
    displayDate: "10 Aug 2026",
    category: "Fire Extinguishers",
    excerpt:
      "Learn how regular inspection, professional servicing and accurate records keep fire extinguishers reliable and ready.",
    introduction: "Fire extinguishers are one of the most accessible first-response fire protection devices in a workplace. However, an extinguisher is only useful when it is properly maintained and ready for operation.",
    sections: [
      { heading: "Check the Extinguisher Condition", content: "Regular inspections should look for physical damage, corrosion, leakage, damaged hoses or nozzles, missing safety pins, pressure issues and unclear labels." },
      { heading: "Check Accessibility", content: "Fire extinguishers should be easy to locate, clearly identified, easily accessible and free from obstruction." },
      { heading: "Why Professional Servicing Matters", content: "Professional servicing helps verify the condition of the extinguisher and identify maintenance requirements that may not be obvious during a basic visual inspection." },
      { heading: "Keep Maintenance Records", content: "Businesses should maintain records of inspection dates, servicing, refilling, testing, replacement and equipment condition." },
      { heading: "When Should an Extinguisher Be Replaced?", content: "Replacement may be required when equipment is damaged, heavily corroded, beyond its usable condition or otherwise unsuitable for continued service." },
    ],
    conclusion: "Regular fire extinguisher inspection and servicing are essential parts of workplace fire protection. Keeping equipment maintained ensures it remains dependable when needed.",
    image: "/images/blog/fire-extinguisher-maintenance.png",
    imageAlt: "Technician inspecting a fire extinguisher pressure gauge",
    tags: ["Maintenance", "Fire Extinguisher"],
    related: ["/fire-extinguisher-services-chennai", "/fire-safety-amc-chennai", "/contact"],
  },
  {
    slug: "how-to-improve-fire-safety-workplace",
    title: "How to Improve Fire Safety in Your Workplace",
    metaTitle: "How to Improve Fire Safety in Your Workplace | Aulukya",
    metaDescription: "Explore practical workplace fire safety measures including fire alarms, extinguishers, emergency exits, training and regular maintenance.",
    date: "2026-08-08",
    displayDate: "8 Aug 2026",
    category: "Workplace Safety",
    excerpt:
      "Explore practical measures for fire risks, protection systems, clear exits, employee training, maintenance and safety audits.",
    introduction: "Workplace fire safety is not limited to installing fire extinguishers. A safer workplace requires the right combination of fire detection, protection equipment, maintenance, employee awareness and emergency preparedness.",
    sections: [
      { heading: "Identify Workplace Fire Risks", content: "Start by identifying possible sources of fire such as electrical equipment, machinery, flammable materials, storage areas, kitchen facilities and improperly maintained equipment." },
      { heading: "Install Appropriate Fire Protection Systems", content: "Depending on the building and its requirements, protection may include fire extinguishers, fire alarm systems, hydrant systems, fire hose reels, sprinkler systems and emergency signage." },
      { heading: "Keep Emergency Exits Clear", content: "Emergency routes should always remain accessible. Exit signs should be clearly visible and evacuation paths should not be blocked." },
      { heading: "Train Employees", content: "Employees should understand basic fire prevention, emergency procedures, evacuation routes, alarm procedures and fire extinguisher awareness." },
      { heading: "Maintain Fire Safety Equipment", content: "Regular inspection and maintenance help ensure fire protection equipment remains operational and dependable." },
      { heading: "Conduct Fire Safety Audits", content: "Periodic audits can help businesses identify gaps in their fire protection arrangements and take corrective action." },
    ],
    conclusion: "Effective workplace fire safety comes from preparation, reliable equipment and consistent maintenance. Businesses that invest in practical fire protection can create safer environments for employees, customers and operations.",
    image: "/images/blog/workplace-fire-safety.png",
    imageAlt: "Office team receiving practical workplace fire safety guidance",
    tags: ["Workplace", "Safety"],
    related: ["/industries", "/fire-safety-amc-chennai", "/contact"],
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
