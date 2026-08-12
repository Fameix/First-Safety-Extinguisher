import type { ServicePageContent } from "@/components/site/service-page"

export const servicePages: Record<string, ServicePageContent> = {
  extinguisher: {
    title: "Fire Extinguisher Services in Chennai",
    keyword: "Fire Extinguisher Service in Chennai",
    description:
      "Aulukya provides fire extinguisher sales, refilling, and servicing in Chennai for businesses and organizations.",
    image:
      "https://images.unsplash.com/photo-1601049676869-702ea24cfd58?auto=format&fit=crop&w=1800&q=80",
    sections: [
      {
        title: "Service Overview",
        text: "Fire extinguishers remain one of the most visible and essential fire safety assets in a workplace. Aulukya supports businesses with extinguisher supply, refilling, servicing, and maintenance needs.",
      },
      {
        title: "Fire Extinguisher Sales",
        text: "Aulukya supports organizations that need suitable fire extinguisher solutions for workplace fire safety requirements.",
      },
      {
        title: "Fire Extinguisher Refilling",
        text: "Refilling support helps keep fire extinguishers ready for use after discharge or when maintenance requirements indicate refilling is needed.",
      },
      {
        title: "Fire Extinguisher Servicing",
        text: "Servicing support helps identify visible condition issues, access concerns, and maintenance needs before equipment is required in an emergency.",
      },
      {
        title: "Types of Fire Extinguishers",
        text: "Aulukya can support common workplace fire extinguisher requirements based on the client need shared during enquiry.",
        points: ["Workplace extinguisher supply", "Refilling support", "Servicing support", "Maintenance coordination"],
      },
      {
        title: "Why Maintenance Matters",
        text: "Regular maintenance helps organizations keep fire extinguishers accessible, identifiable, and ready for operational fire safety needs.",
      },
    ],
    process: ["Enquiry review", "Site or requirement discussion", "Service support", "Follow-up guidance"],
    faqs: [
      {
        question: "Does Aulukya provide fire extinguisher refilling in Chennai?",
        answer: "Yes. Aulukya provides fire extinguisher refilling support for businesses and organizations in Chennai.",
      },
      {
        question: "Can extinguisher services be connected with AMC?",
        answer: "Yes. Fire extinguisher servicing can be discussed along with Fire Safety AMC requirements.",
      },
    ],
    related: [
      { label: "Fire Alarm Systems", href: "/fire-alarm-systems-chennai" },
      { label: "Hydrant Systems", href: "/fire-hydrant-systems-chennai" },
      { label: "Fire Safety AMC", href: "/fire-safety-amc-chennai" },
      { label: "Contact Us", href: "/contact" },
    ],
  },
  alarm: {
    title: "Fire Alarm Systems in Chennai",
    keyword: "Fire Alarm Systems in Chennai",
    description:
      "Fire alarm system supply, fire alarm installation Chennai support, testing, commissioning, and maintenance for business environments.",
    image:
      "https://images.unsplash.com/photo-1581092921461-7031e6f3ec61?auto=format&fit=crop&w=1800&q=80",
    sections: [
      { title: "Service Overview", text: "Aulukya supports fire alarm system Chennai requirements for organizations that need early warning and practical safety readiness." },
      { title: "System Supply", text: "Supply support is based on the client requirement and the fire alarm system needs discussed during enquiry." },
      { title: "Installation", text: "Fire alarm installation Chennai support helps organizations implement alarm systems in appropriate workplace areas." },
      { title: "Testing & Commissioning", text: "Testing and commissioning support helps confirm the installed system is checked before operational use." },
      { title: "Maintenance", text: "Fire alarm maintenance Chennai support helps businesses keep alarm systems under periodic review." },
      { title: "Benefits", text: "Fire alarm systems support early warning, faster response, and better safety awareness across workplace environments." },
      { title: "Applications", text: "Fire alarm systems may be relevant for offices, industrial facilities, warehouses, retail spaces, institutions, and apartments." },
    ],
    process: ["Requirement review", "Installation planning", "Testing support", "Maintenance discussion"],
    faqs: [
      { question: "Does Aulukya support fire alarm installation?", answer: "Yes. Aulukya provides fire alarm installation support in Chennai based on business requirements." },
      { question: "Is maintenance available for fire alarm systems?", answer: "Yes. Fire alarm maintenance can be included as part of ongoing safety support." },
    ],
    related: [
      { label: "Fire Extinguisher Services", href: "/fire-extinguisher-services-chennai" },
      { label: "Fire Audits", href: "/fire-audits-chennai" },
      { label: "Industries", href: "/industries" },
      { label: "Contact Us", href: "/contact" },
    ],
  },
  hydrant: {
    title: "Fire Hydrant System in Chennai",
    keyword: "Fire Hydrant System in Chennai",
    description:
      "Aulukya supports fire hydrant system design, supply, installation, and AMC needs for Chennai businesses and organizations.",
    image:
      "https://images.unsplash.com/photo-1518623489648-a173ef7824f3?auto=format&fit=crop&w=1800&q=80",
    sections: [
      { title: "Service Overview", text: "Hydrant systems support organized fire response planning in larger commercial, storage, and industrial environments." },
      { title: "Design", text: "Aulukya supports hydrant system planning based on project requirements shared by the client." },
      { title: "Supply", text: "Supply support is aligned with the hydrant system needs discussed during consultation." },
      { title: "Installation", text: "Installation support helps businesses implement hydrant systems as part of broader fire protection planning." },
      { title: "AMC", text: "AMC support helps keep hydrant systems under regular maintenance review." },
      { title: "System Components", text: "Component support is addressed based on the actual project and equipment requirements provided by the client." },
      { title: "Benefits", text: "Hydrant systems support fire response readiness in facilities where water-based fire protection infrastructure is required." },
      { title: "Applications", text: "Hydrant systems may be relevant for industrial facilities, warehouses, commercial buildings, and larger properties." },
    ],
    process: ["Requirement discussion", "System planning", "Supply and installation", "AMC support"],
    faqs: [
      { question: "Does Aulukya provide hydrant system AMC?", answer: "Yes. Aulukya supports AMC requirements for fire hydrant systems in Chennai." },
      { question: "Can hydrant systems be reviewed during a fire audit?", answer: "Yes. Hydrant system condition and maintenance needs can be part of audit support where relevant." },
    ],
    related: [
      { label: "Fire Safety AMC", href: "/fire-safety-amc-chennai" },
      { label: "Fire Audits", href: "/fire-audits-chennai" },
      { label: "Fire NOC Consulting", href: "/fire-noc-consulting-chennai" },
      { label: "Contact Us", href: "/contact" },
    ],
  },
  ppe: {
    title: "Safety PPE Supplier in Chennai",
    keyword: "Safety PPE Supplier in Chennai",
    description:
      "Aulukya supports workplace safety PPE requirements for organizations in Chennai.",
    image:
      "https://images.unsplash.com/photo-1581093458791-9d42f0f2b4d6?auto=format&fit=crop&w=1800&q=80",
    sections: [
      { title: "PPE Introduction", text: "Safety PPE helps organizations support safer daily operations and reduce exposure to workplace risks." },
      { title: "PPE Categories", text: "Aulukya supports safety PPE requirements confirmed by the company and discussed during client enquiry.", points: ["Safety equipment support", "Workplace PPE support"] },
      { title: "Applications", text: "PPE may be relevant for industrial, commercial, storage, institutional, and maintenance environments." },
      { title: "Why PPE Matters", text: "PPE supports safer work practices when selected and used as part of a broader workplace safety approach." },
    ],
    faqs: [
      { question: "Does Aulukya supply safety PPE in Chennai?", answer: "Yes. Aulukya supports safety PPE requirements for Chennai organizations." },
      { question: "Is a full PPE catalog available online?", answer: "A detailed product catalog has not been provided, so requirements can be discussed through the enquiry form." },
    ],
    related: [
      { label: "Industries", href: "/industries" },
      { label: "Fire Audits", href: "/fire-audits-chennai" },
      { label: "Contact Us", href: "/contact" },
    ],
  },
  amc: {
    title: "Fire Safety AMC in Chennai",
    keyword: "Fire Safety AMC in Chennai",
    description:
      "Aulukya provides Fire Safety AMC support for fire extinguishers, alarm systems, hydrant systems, and safety equipment.",
    image:
      "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1800&q=80",
    sections: [
      { title: "What is Fire Safety AMC?", text: "Fire Safety AMC is planned maintenance support for fire and safety systems that need periodic attention." },
      { title: "What We Maintain", text: "Aulukya supports maintenance for fire extinguishers, fire alarm systems, hydrant systems, and safety equipment.", points: ["Fire extinguishers", "Fire alarm systems", "Hydrant systems", "Safety equipment"] },
      { title: "AMC Process", text: "AMC support begins with understanding the installed systems and maintenance needs at the client site." },
      { title: "Benefits", text: "AMC helps organizations keep essential fire safety systems reviewed and service needs visible." },
      { title: "Who Needs AMC?", text: "AMC may be useful for offices, industrial facilities, warehouses, retail locations, institutions, and apartments." },
    ],
    process: ["Asset review", "Maintenance plan", "Scheduled support", "Service follow-up"],
    faqs: [
      { question: "Can AMC include multiple fire safety systems?", answer: "Yes. AMC requirements can cover confirmed equipment such as extinguishers, alarm systems, hydrant systems, and safety equipment." },
      { question: "Does Aulukya provide AMC in Chennai?", answer: "Yes. Aulukya provides Fire Safety AMC support in Chennai." },
    ],
    related: [
      { label: "Fire Extinguisher Services", href: "/fire-extinguisher-services-chennai" },
      { label: "Fire Alarm Systems", href: "/fire-alarm-systems-chennai" },
      { label: "Hydrant Systems", href: "/fire-hydrant-systems-chennai" },
      { label: "Contact Us", href: "/contact" },
    ],
  },
  audits: {
    title: "Fire Audit Services in Chennai",
    keyword: "Fire Audit Services in Chennai",
    description:
      "Aulukya provides fire audit and fire risk assessment support for businesses and organizations in Chennai.",
    image:
      "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1800&q=80",
    sections: [
      { title: "What is a Fire Audit?", text: "A fire audit reviews workplace fire safety readiness, visible risks, maintenance needs, and improvement areas." },
      { title: "Fire Risk Assessment", text: "Risk assessment support helps identify conditions that may need attention for safer operations." },
      { title: "What We Inspect", text: "Inspection scope is based on the site and confirmed fire safety systems available for review.", points: ["Fire extinguishers", "Fire alarm systems", "Hydrant systems", "Safety equipment"] },
      { title: "Audit Process", text: "The audit process includes site review, observations, discussion, and practical guidance based on the findings." },
      { title: "Benefits", text: "Fire audits help organizations understand gaps, maintenance priorities, and fire safety improvement opportunities." },
    ],
    process: ["Scope discussion", "Site review", "Observation summary", "Improvement guidance"],
    faqs: [
      { question: "Does Aulukya conduct fire audits in Chennai?", answer: "Yes. Aulukya supports fire audits and fire risk assessment needs in Chennai." },
      { question: "Does this page claim regulatory certification?", answer: "No. Certification claims are not included because no specific certification information was provided." },
    ],
    related: [
      { label: "Fire Safety AMC", href: "/fire-safety-amc-chennai" },
      { label: "Fire NOC Consulting", href: "/fire-noc-consulting-chennai" },
      { label: "Industries", href: "/industries" },
      { label: "Contact Us", href: "/contact" },
    ],
  },
  noc: {
    title: "Fire NOC Consultant in Chennai",
    keyword: "Fire NOC Consultant in Chennai",
    description:
      "Aulukya provides consulting support and documentation support for Fire NOC related requirements in Chennai.",
    image:
      "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1800&q=80",
    sections: [
      { title: "What is Fire NOC?", text: "Fire NOC is connected to fire safety documentation and approval processes that may apply to certain business or building requirements." },
      { title: "Consulting Support", text: "Aulukya provides consulting support to help clients understand Fire NOC related requirements." },
      { title: "Documentation Support", text: "Documentation support helps organize information required for Fire NOC related processes." },
      { title: "Process", text: "The process begins with understanding the client's requirement, available documents, and site-related context." },
      { title: "Benefits", text: "Consulting support helps businesses approach Fire NOC requirements with clearer preparation and coordination." },
    ],
    process: ["Requirement review", "Document discussion", "Consulting support", "Follow-up coordination"],
    faqs: [
      { question: "Does Aulukya guarantee Fire NOC approval?", answer: "No. Aulukya provides consulting and documentation support; approval guarantees are not claimed." },
      { question: "Can Fire NOC consulting connect with audits?", answer: "Yes. Fire audit support can be discussed where it is relevant to the client's Fire NOC preparation needs." },
    ],
    related: [
      { label: "Fire Audits", href: "/fire-audits-chennai" },
      { label: "Fire Safety AMC", href: "/fire-safety-amc-chennai" },
      { label: "About Aulukya", href: "/about-us" },
      { label: "Contact Us", href: "/contact" },
    ],
  },
}
