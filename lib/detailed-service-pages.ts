import {
  CheckCircle2,
  ClipboardCheck,
  FileCheck2,
  Gauge,
  Glasses,
  Hammer,
  HardHat,
  Headphones,
  PackageCheck,
  RefreshCw,
  SearchCheck,
  ShieldCheck,
  ShieldPlus,
  Siren,
  Wrench,
} from "lucide-react"
import type { CSSProperties } from "react"
import type { DetailedServiceContent } from "@/components/site/detailed-service-page"

const images = {
  alarm: "/home-service-alarm.jpeg",
  hydrant: "/home-service-hydrant.jpeg",
  ppe: "/home-service-ppe.jpeg",
  amc: "/home-service-amc.jpeg",
  audit: "/home-service-audit-new.png",
  noc: "/home-service-noc.jpeg",
  inspect: "/about-fire-inspection.png",
  maintenance: "/home-project-maintenance.jpeg",
}
const icons = [ShieldCheck, Headphones, ClipboardCheck, CheckCircle2]
const highlights = (labels: string[]) =>
  labels.map((title, index) => ({ title, icon: icons[index] }))
type ServiceCard = [
  string,
  string,
  typeof ShieldCheck,
  string?,
  number?,
  number?,
  CSSProperties?,
]
const cards = (items: ServiceCard[]) =>
  items.map(
    ([title, text, icon, image, imageWidth, imageHeight, imageStyle]) => ({
      title,
      text,
      icon,
      image,
      imageWidth,
      imageHeight,
      imageStyle,
    })
  )
const features = (image: string, items: [string, string][]) =>
  items.map(([title, text], index) => ({
    title,
    text,
    image: index === 1 ? images.inspect : image,
  }))

export const detailedServicePages: Record<string, DetailedServiceContent> = {
  alarm: {
    hero: {
      eyebrow: "FIRE ALARM SYSTEMS",
      title: "Early warning when every second",
      accent: "matters.",
      description:
        "Reliable fire alarm systems designed to detect threats early and help protect people, property and operations.",
      image: "/fire-alarm-systems-hero.png",
      imageAlt: "Fire alarm system protecting a workplace",
    },
    intro: {
      eyebrow: "FIRE ALARM CARE",
      title: "A dependable alarm system starts with the right detection.",
      description:
        "We help businesses install, inspect and maintain fire alarm systems designed around their workplace, risk profile and safety requirements.",
      image: "/assets/images/ChatGPT Image Aug 23, 2026, 09_20_25 AM.png",
      imageAlt: "Fire alarm detection equipment",
      highlights: highlights([
        "Site-focused system planning",
        "Responsive service support",
        "Clear testing records",
        "Ongoing alarm readiness",
      ]),
    },
    services: {
      eyebrow: "OUR ALARM SERVICES",
      title: "Complete support for dependable early warning.",
      description:
        "From detection planning to ongoing maintenance, we help keep every part of your alarm system ready to respond.",
      items: cards([
        [
          "Detection",
          "Early detection systems designed to identify smoke, heat and fire risks quickly.",
          Siren,
          "/assets/images/fire_alarm_detection_icon.png",
        ],
        [
          "Installation",
          "Professional installation planned around your building layout and safety requirements.",
          Hammer,
          "/assets/images/fire_alarm_installation_icon.png",
        ],
        [
          "Testing",
          "Regular testing to confirm alarms, detectors and connected devices respond correctly.",
          Gauge,
          "/assets/images/fire_alarm_testing_icon.png",
        ],
        [
          "Maintenance",
          "Ongoing maintenance to keep the system reliable and ready when needed.",
          Wrench,
          "/assets/images/fire_alarm_maintenance_icon.png",
        ],
        [
          "Replacement",
          "Practical replacement support for outdated, damaged or unreliable alarm components.",
          RefreshCw,
          "/assets/images/fire_alarm_replacement_icon.png",
        ],
        [
          "Support",
          "Responsive service support for alarm system issues, servicing and ongoing requirements.",
          Headphones,
          "/assets/images/fire_alarm_support_icon.png",
        ],
      ]),
    },
    checklist: {
      eyebrow: "ALARM READINESS CHECKLIST",
      title: "Before an emergency, check the essentials.",
      items: [
        {
          text: "Detectors are visible and unobstructed",
          image: "/images/services/fire-alarm/checklist-detectors.png",
        },
        {
          text: "Alarm panels show normal system status",
          image: "/images/services/fire-alarm/checklist-alarm-panels.png",
        },
        {
          text: "Manual call points remain accessible",
          image: "/images/services/fire-alarm/checklist-manual-call-points.png",
        },
        {
          text: "Sounders can be heard throughout the site",
          image: "/images/services/fire-alarm/checklist-sounders.png",
        },
        {
          text: "Backup power is checked and serviceable",
          image: "/images/services/fire-alarm/checklist-backup-power.png",
        },
        {
          text: "Testing and maintenance records are current",
          image: "/images/services/fire-alarm/checklist-testing-records.png",
        },
      ],
    },
    process: cards([
      [
        "Site Assessment",
        "We understand your building, occupancy and fire detection requirements.",
        SearchCheck,
      ],
      [
        "System Planning",
        "We recommend suitable detection and alarm solutions for your environment.",
        ClipboardCheck,
      ],
      [
        "Installation & Testing",
        "We install and test the system to ensure reliable operation.",
        Wrench,
      ],
      [
        "Ongoing Readiness",
        "Regular maintenance keeps your fire alarm system dependable.",
        ShieldCheck,
      ],
    ]),
    feature: {
      eyebrow: "DETECTION SOLUTIONS",
      title: "The right detection for every environment.",
      description:
        "We help align alarm components with the spaces, activities and risks across your workplace.",
      items: [
        {
          title: "Smoke Detection",
          text: "Early warning support for offices, common areas and occupied spaces.",
          image: "/images/services/fire-alarm/smoke-detection.png",
        },
        {
          title: "Heat Detection",
          text: "Practical detection for environments where heat sensing is appropriate.",
          image: "/images/services/fire-alarm/heat-detection.png",
        },
        {
          title: "Alarm & Notification",
          text: "Clear audible and visual warning to help occupants respond quickly.",
          image: "/images/services/fire-alarm/alarm-notification.png",
        },
      ],
    },
    faqs: [
      {
        question: "How often should fire alarm systems be tested?",
        answer:
          "Testing should follow a planned schedule based on the system, site conditions and applicable requirements. We can help define the right schedule for your workplace.",
      },
      {
        question: "Can you install fire alarm systems for existing buildings?",
        answer:
          "Yes. We assess the existing building layout and recommend a practical installation approach.",
      },
      {
        question: "Do you provide fire alarm maintenance?",
        answer:
          "Yes. We provide planned inspection, testing and maintenance support.",
      },
      {
        question: "Can you replace damaged alarm components?",
        answer:
          "Yes. We inspect affected components and recommend suitable replacements where required.",
      },
      {
        question: "Will I receive service documentation?",
        answer:
          "Yes. We provide clear records of the service, tests and recommendations completed.",
      },
    ],
    cta: {
      title: "Need reliable fire alarm protection?",
      description:
        "Talk to our team about fire alarm installation, testing and maintenance support.",
    },
  },
  hydrant: {
    hero: {
      eyebrow: "HYDRANT SYSTEMS",
      title: "Reliable water-based protection when it",
      accent: "matters most.",
      description:
        "Hydrant system installation, maintenance and support designed to help businesses stay prepared for fire emergencies.",
      image: "/hydrant-systems-hero.png",
      imageAlt: "Fire hydrant system pipework",
    },
    intro: {
      eyebrow: "HYDRANT SYSTEM CARE",
      title:
        "A reliable hydrant system starts with proper planning and maintenance.",
      description:
        "We support hydrant systems with practical installation, inspection and maintenance services based on your building, operations and fire safety requirements.",
      image: "/assets/images/hydrant-system-care.png",
      imageAlt: "Hydrant installation at a facility",
      highlights: highlights([
        "Site-focused system planning",
        "Pressure and performance checks",
        "Practical service records",
        "Ongoing hydrant readiness",
      ]),
    },
    services: {
      eyebrow: "OUR HYDRANT SERVICES",
      title: "Everything your hydrant system needs to stay ready.",
      description:
        "Practical support across installation, inspection, testing and maintenance.",
      roomyImageSpacing: true,
      items: cards([
        [
          "Installation",
          "Hydrant systems planned and installed around your building and fire protection requirements.",
          Hammer,
          "/assets/images/Installation.png",
          1330,
          1182,
          { height: 62, top: 0, left: -9 },
        ],
        [
          "Inspection",
          "Detailed checks to identify system condition, accessibility and service requirements.",
          SearchCheck,
          "/assets/images/Inspection (3).png",
          1312,
          1199,
          { height: 65, top: 0, left: -3 },
        ],
        [
          "Testing",
          "Pressure and performance testing to help confirm reliable system operation.",
          Gauge,
          "/assets/images/Testing (3).png",
          1536,
          1024,
          { height: 62, top: -1, left: -2 },
        ],
        [
          "Maintenance",
          "Regular servicing to keep hydrant equipment ready for emergency use.",
          Wrench,
          "/assets/images/Maintenance (3).png",
          1536,
          1024,
          { height: 61, top: 0, left: -2 },
        ],
        [
          "Replacement",
          "Replacement support for damaged, worn or unsuitable hydrant components.",
          RefreshCw,
          "/assets/images/Replace.png",
          1536,
          1024,
          { height: 69, top: -3, left: -2 },
        ],
        [
          "Support",
          "Responsive service for ongoing hydrant system maintenance and requirements.",
          Headphones,
          "/assets/images/Support.png",
          1536,
          1024,
          { height: 63, top: -1, left: -18 },
        ],
      ]),
    },
    checklist: {
      eyebrow: "HYDRANT READINESS CHECKLIST",
      title: "Keep every connection ready for response.",
      items: [
        {
          text: "Hydrant points are visible and accessible",
          image: "/hydrant-points-accessible.png",
        },
        {
          text: "Hoses and nozzles are in good condition",
          image: "/hydrant-hoses-nozzles.png",
        },
        {
          text: "Valves operate correctly without leakage",
          image: "/hydrant-valves-no-leakage.png",
        },
        {
          text: "System pressure meets site requirements",
          image: "/hydrant-system-pressure.png",
        },
        {
          text: "Pumps and controls are serviceable",
          image: "/hydrant-pumps-controls.png",
        },
        {
          text: "Inspection and test records are current",
          image: "/hydrant-inspection-records.png",
        },
      ],
    },
    process: cards([
      [
        "Site Assessment",
        "We review your building layout, existing system and fire protection needs.",
        SearchCheck,
      ],
      [
        "System Planning",
        "We identify practical hydrant solutions suited to your site.",
        ClipboardCheck,
      ],
      [
        "Service & Testing",
        "We complete the required installation, servicing or testing.",
        Wrench,
      ],
      [
        "Ongoing Readiness",
        "Regular maintenance helps keep the system dependable.",
        ShieldCheck,
      ],
    ]),
    feature: {
      eyebrow: "HYDRANT SYSTEM SUPPORT",
      title: "Built around dependable water delivery.",
      description:
        "We review the key elements that help a hydrant system perform when needed.",
      items: [
        {
          title: "Hydrant Points",
          text: "Accessible outlets positioned around the fire protection needs of the site.",
          image: "/hydrant-points.png",
        },
        {
          title: "Hose & Accessories",
          text: "Serviceable hoses, nozzles and cabinets ready for emergency use.",
          image: images.inspect,
        },
        {
          title: "Pumps & Pressure",
          text: "Testing support for the pressure and performance behind the system.",
          image: "/pumps-pressure.png",
        },
      ],
    },
    faqs: [
      {
        question: "How often should hydrant systems be tested?",
        answer:
          "Hydrant systems should be tested on a planned schedule appropriate to the site and applicable requirements.",
      },
      {
        question: "Do you maintain existing hydrant systems?",
        answer:
          "Yes. We inspect and maintain existing systems based on their condition and service needs.",
      },
      {
        question: "Can you inspect hydrant system pressure?",
        answer:
          "Yes. Pressure and performance checks can be included in the service scope.",
      },
      {
        question: "Do you provide replacement components?",
        answer:
          "Yes. We can recommend and replace damaged or unsuitable components.",
      },
      {
        question: "Do you provide service documentation?",
        answer:
          "Yes. Clear service and testing records are provided for completed work.",
      },
    ],
    cta: {
      title: "Need dependable hydrant system support?",
      description:
        "Talk to our team about installation, testing and maintenance.",
    },
  },
  ppe: {
    hero: {
      eyebrow: "SAFETY PPE",
      title: "The right protection for every working",
      accent: "environment.",
      description:
        "Workplace safety PPE selected around your people, operations and specific workplace risks.",
      image: "/safety-ppe-hero-banner.png",
      imageAlt: "Personal protective equipment for workplace safety",
    },
    intro: {
      eyebrow: "WORKPLACE PROTECTION",
      title: "Practical PPE for safer everyday work.",
      description:
        "We help businesses identify and supply suitable personal protective equipment based on workplace activities, hazards and safety requirements.",
      image: "/workplace-protection-ppe.png",
      imageAlt: "Workplace personal protective equipment",
      highlights: highlights([
        "Risk-focused recommendations",
        "Support for teams of every size",
        "Practical product selection",
        "Reliable ongoing supply",
      ]),
    },
    services: {
      eyebrow: "OUR PPE SOLUTIONS",
      title: "Protection selected for the work your team does.",
      description:
        "From head to foot, we help supply practical PPE suited to your environment.",
      items: cards([
        [
          "Head Protection",
          "Safety helmets designed to provide dependable protection in demanding work environments.",
          HardHat,
          "/assets/images/01_Head_Protection.png",
        ],
        [
          "Eye Protection",
          "Protective eyewear selected for workplace hazards and operational requirements.",
          Glasses,
          "/assets/images/02_Eye_Protection.png",
        ],
        [
          "Hand Protection",
          "Safety gloves suited to handling, maintenance and workplace protection needs.",
          ShieldPlus,
          "/assets/images/03_Hand_Protection.png",
        ],
        [
          "Foot Protection",
          "Protective footwear selected for safety, comfort and workplace conditions.",
          ShieldCheck,
          "/assets/images/04_Foot_Protection.png",
        ],
        [
          "Body Protection",
          "Safety clothing and protective equipment designed around workplace risks.",
          ShieldPlus,
          "/assets/images/05_Body_Protection.png",
        ],
        [
          "Supply Support",
          "Reliable PPE supply based on your team size, work environment and requirements.",
          PackageCheck,
          "/assets/images/06_Supply_Support.png",
        ],
      ]),
    },
    checklist: {
      eyebrow: "PPE CHECKLIST",
      title: "Make sure protection fits the task.",
      items: [
        {
          text: "PPE matches the identified workplace hazard",
          image: "/images/services/ppe/hazard-appropriate.png",
        },
        {
          text: "Equipment fits the user correctly",
          image: "/images/services/ppe/proper-fit.png",
        },
        {
          text: "Items are clean and free from damage",
          image: "/images/services/ppe/clean-undamaged.png",
        },
        {
          text: "Required protection is readily available",
          image: "/images/services/ppe/readily-available.png",
        },
        {
          text: "Teams understand correct use and care",
          image: "/images/services/ppe/training-correct-use.png",
        },
        {
          text: "Replacement stock is available when needed",
          image: "/images/services/ppe/replacement-stock.png",
        },
      ],
    },
    process: cards([
      [
        "Understand the Risk",
        "We review your workplace activities and safety requirements.",
        SearchCheck,
      ],
      [
        "Recommend PPE",
        "We identify suitable protection for specific workplace risks.",
        ClipboardCheck,
      ],
      [
        "Supply",
        "We provide practical PPE solutions based on your requirements.",
        PackageCheck,
      ],
      [
        "Stay Protected",
        "Ongoing supply support helps your team remain properly equipped.",
        ShieldCheck,
      ],
    ]),
    feature: {
      eyebrow: "PROTECTION CATEGORIES",
      title: "The right equipment for the right risk.",
      description:
        "We help select practical protection across the everyday needs of your workplace.",
      items: features(images.ppe, [
        [
          "Head & Eye",
          "Protection for impact, debris and task-specific exposure.",
        ],
        [
          "Hands & Body",
          "Gloves and protective clothing selected around the work being performed.",
        ],
        [
          "Feet & Visibility",
          "Footwear and high-visibility options for demanding environments.",
        ],
      ]).map((item, index) => ({
        ...item,
        image: [
          "/images/services/ppe/head-eye.png",
          "/images/services/ppe/hands-body.png",
          "/images/services/ppe/feet-visibility.png",
        ][index],
      })),
    },
    faqs: [
      {
        question: "What PPE is suitable for my workplace?",
        answer:
          "Suitable PPE depends on your tasks, hazards and working conditions. We can help review these needs.",
      },
      {
        question: "Can you supply PPE for larger teams?",
        answer:
          "Yes. We support requirements for both small teams and larger workforces.",
      },
      {
        question: "Do you provide different PPE categories?",
        answer:
          "Yes. We support head, eye, hand, foot and body protection categories.",
      },
      {
        question: "Can you recommend PPE based on workplace risks?",
        answer:
          "Yes. Recommendations can be aligned with the activities and risks you identify.",
      },
      {
        question: "Do you support recurring PPE requirements?",
        answer:
          "Yes. We can help with planned repeat supply based on your workplace needs.",
      },
    ],
    cta: {
      title: "Need the right PPE for your workplace?",
      description:
        "Talk to our team about practical safety equipment solutions.",
    },
  },
  amc: {
    hero: {
      eyebrow: "FIRE SAFETY AMC",
      title: "Keep your fire protection ready,",
      accent: "every day.",
      description:
        "Planned fire safety maintenance that helps keep your equipment reliable, compliant and ready for emergencies.",
      image: "/fire-safety-amc-hero.png",
      imageAlt: "Technician maintaining fire safety equipment",
    },
    intro: {
      eyebrow: "FIRE SAFETY MAINTENANCE",
      title: "Ongoing care for dependable fire protection.",
      description:
        "Our AMC support helps businesses maintain essential fire safety equipment through planned inspections, servicing and responsive support.",
      image: "/fire-safety-amc-maintenance.png",
      imageAlt: "Planned fire equipment maintenance",
      highlights: highlights([
        "Planned service schedules",
        "Responsive breakdown support",
        "Clear maintenance records",
        "Multi-system care",
      ]),
    },
    services: {
      eyebrow: "OUR AMC SERVICES",
      title: "Planned support that keeps protection dependable.",
      description:
        "A structured maintenance cycle gives your team clearer visibility and dependable follow-through.",
      items: cards([
        [
          "Inspection",
          "Regular checks to identify equipment condition and service requirements.",
          SearchCheck,
          "/assets/images/inspection-3d.png",
        ],
        [
          "Preventive Maintenance",
          "Planned servicing to reduce avoidable equipment issues and downtime.",
          Wrench,
          "/assets/images/preventive-maintenance-3d.png",
        ],
        [
          "Testing",
          "Routine testing to confirm fire safety systems perform as expected.",
          Gauge,
          "/assets/images/testing-3d.png",
        ],
        [
          "Documentation",
          "Clear service records to help maintain visibility of completed maintenance.",
          FileCheck2,
          "/assets/images/documentation-3d.png",
        ],
        [
          "Breakdown Support",
          "Responsive assistance when fire safety equipment requires attention.",
          Headphones,
          "/assets/images/breakdown-support-3d.png",
        ],
        [
          "AMC Planning",
          "Structured maintenance schedules designed around your workplace needs.",
          ClipboardCheck,
          "/assets/images/amc-planning-3d.png",
        ],
      ]),
    },
    checklist: {
      eyebrow: "MAINTENANCE CHECKLIST",
      title: "Stay ahead of service requirements.",
      items: [
        {
          text: "Equipment inventory is complete and current",
          image: "/Equipment inventory is complete and current.png",
        },
        {
          text: "Service dates are planned and visible",
          image: "/Service dates are planned and visible.png",
        },
        {
          text: "System tests are completed on schedule",
          image: "/System tests are completed on schedule.png",
        },
        {
          text: "Faults and defects are recorded clearly",
          image: "/Faults and defects are recorded clearly.png",
        },
        {
          text: "Corrective work is followed through",
          image: "/Corrective work is followed through.png",
        },
        {
          text: "Maintenance reports remain accessible",
          image: "/Maintenance reports remain accessible.png",
        },
      ],
    },
    process: cards([
      [
        "Assess",
        "We review your fire safety equipment and current maintenance needs.",
        SearchCheck,
      ],
      [
        "Plan",
        "We create a practical maintenance schedule for your workplace.",
        ClipboardCheck,
      ],
      [
        "Maintain",
        "Planned servicing keeps your fire protection equipment reliable.",
        Wrench,
      ],
      [
        "Monitor",
        "Ongoing support helps maintain readiness and service visibility.",
        ShieldCheck,
      ],
    ]),
    feature: {
      eyebrow: "AMC COVERAGE",
      title: "Coordinated care across essential systems.",
      description:
        "A practical AMC can bring key equipment into one clearer maintenance plan.",
      items: [
        {
          title: "Extinguishers",
          text: "Planned inspection and servicing for workplace extinguishers.",
          image: "/images/amc-extinguishers.png",
        },
        {
          title: "Alarm Systems",
          text: "Testing and maintenance support for detection and warning equipment.",
          image: "/images/amc-alarm-systems.png",
        },
        {
          title: "Hydrant Systems",
          text: "Routine checks and servicing for hydrant equipment and components.",
          image: "/images/amc-hydrant-systems.png",
        },
      ],
    },
    faqs: [
      {
        question: "What does a fire safety AMC include?",
        answer:
          "The scope can include planned inspections, testing, preventive maintenance, documentation and service support for agreed equipment.",
      },
      {
        question: "How often will equipment be serviced?",
        answer:
          "The schedule is planned around equipment types, condition, workplace needs and applicable requirements.",
      },
      {
        question: "Can you maintain existing fire safety systems?",
        answer:
          "Yes. We first review the existing systems and define an appropriate maintenance scope.",
      },
      {
        question: "Do you provide service reports?",
        answer:
          "Yes. Clear records are provided for completed maintenance and identified requirements.",
      },
      {
        question: "Can AMC schedules be customized?",
        answer:
          "Yes. The maintenance plan can be structured around your site, equipment and operational needs.",
      },
    ],
    cta: {
      title: "Need reliable fire safety maintenance?",
      description: "Talk to our team about an AMC plan for your workplace.",
    },
  },
  audits: {
    hero: {
      eyebrow: "FIRE AUDITS",
      title: "Know where your workplace stands on",
      accent: "fire safety.",
      description:
        "Practical fire safety audits designed to identify risks, gaps and improvement opportunities across your workplace.",
      image: "/images/services/fire-audits/fire-audits-hero.png",
      imageAlt: "Fire safety audit being conducted",
    },
    intro: {
      eyebrow: "FIRE SAFETY AUDIT",
      title: "A clearer view of your workplace fire safety.",
      description:
        "We review fire safety arrangements, equipment and workplace conditions to help identify practical improvements and compliance gaps.",
      image: images.audit,
      imageAlt: "Workplace fire safety inspection",
      highlights: highlights([
        "Practical site observations",
        "Clear risk identification",
        "Action-focused reporting",
        "Follow-up support",
      ]),
    },
    services: {
      eyebrow: "OUR AUDIT SERVICES",
      title: "A practical review of readiness and risk.",
      description:
        "We examine the workplace and turn observations into clear, useful next steps.",
      items: cards([
        [
          "Site Inspection",
          "We review the workplace, equipment and existing fire safety arrangements.",
          SearchCheck,
          "/images/services/fire-audits/Site Inspection.png",
        ],
        [
          "Risk Identification",
          "We identify visible fire safety risks and areas requiring attention.",
          ShieldPlus,
          "/images/services/fire-audits/risk_identification.png",
        ],
        [
          "Equipment Review",
          "We assess fire safety equipment condition, accessibility and readiness.",
          ClipboardCheck,
          "/images/services/fire-audits/equipment_review.png",
        ],
        [
          "Compliance Review",
          "We identify gaps against applicable fire safety requirements.",
          FileCheck2,
          "/images/services/fire-audits/compliance_review.png",
        ],
        [
          "Audit Report",
          "Clear findings and practical recommendations for improvement.",
          CheckCircle2,
          "/images/services/fire-audits/audit_report.png",
        ],
        [
          "Follow-up Support",
          "Ongoing support to help address identified fire safety requirements.",
          Headphones,
          "/images/services/fire-audits/follow_up_support.png",
        ],
      ]),
    },
    checklist: {
      eyebrow: "AUDIT CHECKLIST",
      title: "Look closely at the foundations of readiness.",
      resetToFirstOnMouseLeave: true,
      items: [
        {
          text: "Escape routes and exits remain clear",
          image: "/images/services/fire-audits/checklist-escape-routes.png",
        },
        {
          text: "Fire equipment is visible and accessible",
          image: "/images/services/fire-audits/checklist-fire-equipment.png",
        },
        {
          text: "Alarm and warning arrangements are reviewed",
          image: "/images/services/fire-audits/checklist-alarm-warning.png",
        },
        {
          text: "Housekeeping and storage risks are considered",
          image:
            "/images/services/fire-audits/checklist-housekeeping-storage.png",
        },
        {
          text: "Maintenance records are available",
          image:
            "/images/services/fire-audits/checklist-maintenance-records.png",
        },
        {
          text: "Responsibilities and response plans are understood",
          image: "/images/services/fire-audits/checklist-response-plans.png",
        },
      ],
    },
    process: cards([
      [
        "Inspect",
        "We review your workplace and fire safety arrangements.",
        SearchCheck,
      ],
      [
        "Identify",
        "We identify fire risks and safety gaps requiring attention.",
        ShieldPlus,
      ],
      [
        "Recommend",
        "We provide practical recommendations to improve fire safety.",
        ClipboardCheck,
      ],
      [
        "Improve",
        "We guide your team toward better fire safety readiness.",
        CheckCircle2,
      ],
    ]),
    feature: {
      eyebrow: "AUDIT FOCUS AREAS",
      title: "A wider view of workplace readiness.",
      description:
        "The audit considers the equipment, conditions and arrangements that shape fire safety performance.",
      items: [
        {
          title: "Workplace Conditions",
          text: "Visible hazards, access, storage and escape arrangements.",
          image: "/images/services/fire-audits/workplace-conditions.png",
        },
        {
          title: "Safety Equipment",
          text: "Condition, placement, accessibility and maintenance status.",
          image: "/images/services/fire-audits/safety-equipment.png",
        },
        {
          title: "Records & Procedures",
          text: "Documentation and practical arrangements supporting ongoing readiness.",
          image: "/images/services/fire-audits/records-and-procedures.png",
        },
      ],
    },
    faqs: [
      {
        question: "What does a fire safety audit include?",
        answer:
          "An audit can include a site review, equipment observations, risk identification, compliance-gap review and practical recommendations.",
      },
      {
        question: "When should a fire safety audit be conducted?",
        answer:
          "Audits are useful periodically and when operations, occupancy, layout or fire safety arrangements change.",
      },
      {
        question: "Will the audit include equipment checks?",
        answer:
          "Yes. The visible condition, accessibility and readiness of relevant fire safety equipment can be reviewed.",
      },
      {
        question: "Do you provide an audit report?",
        answer:
          "Yes. We provide clear findings and practical recommendations following the audit.",
      },
      {
        question: "Can you support corrective actions?",
        answer:
          "Yes. We can discuss support for practical actions identified through the audit.",
      },
    ],
    cta: {
      title: "Need a clearer view of your fire safety?",
      description: "Talk to our team about a practical fire safety audit.",
    },
  },
  noc: {
    hero: {
      eyebrow: "FIRE NOC CONSULTING",
      title: "Clear guidance for fire safety",
      accent: "approvals.",
      description:
        "Practical fire NOC consulting support to help businesses understand requirements, documentation and approval processes.",
      image: "/fire-noc-consulting-hero.png",
      imageAlt: "Fire NOC documentation and consulting",
    },
    intro: {
      eyebrow: "FIRE NOC SUPPORT",
      title: "Navigate fire safety requirements with greater clarity.",
      description:
        "We help businesses understand fire safety requirements and prepare for the documentation, systems and approvals needed for their workplace.",
      image: "/fire-noc-approval.png",
      imageAlt: "Consultation about fire safety requirements",
      highlights: highlights([
        "Requirement-focused guidance",
        "Practical document support",
        "Clear preparation steps",
        "Responsive follow-up",
      ]),
    },
    services: {
      eyebrow: "OUR NOC SERVICES",
      title: "Clearer preparation at every stage.",
      description:
        "We help organize requirements, documentation and practical readiness for the approval process.",
      items: cards([
        [
          "Requirement Review",
          "We review your site and understand the applicable fire safety requirements.",
          SearchCheck,
          "/images/services/noc/requirement-review.png",
        ],
        [
          "Documentation Support",
          "Guidance on the documents and information required for the approval process.",
          FileCheck2,
          "/images/services/noc/documentation-support.png",
        ],
        [
          "Safety Assessment",
          "We identify fire safety requirements that may need attention before submission.",
          ClipboardCheck,
          "/images/services/noc/safety-assessment.png",
        ],
        [
          "Compliance Guidance",
          "Practical guidance to help align your workplace with applicable requirements.",
          ShieldCheck,
          "/images/services/noc/compliance-guidance.png",
        ],
        [
          "NOC Support",
          "Support throughout the fire NOC consulting and approval process.",
          CheckCircle2,
          "/images/services/noc/noc-support.png",
        ],
        [
          "Follow-up Support",
          "Responsive assistance for questions, updates and further requirements.",
          Headphones,
          "/images/services/noc/follow-up-support.png",
        ],
      ]),
    },
    checklist: {
      eyebrow: "NOC PREPARATION CHECKLIST",
      title: "Prepare the essentials with greater clarity.",
      items: [
        {
          text: "Site and project information is available",
          image: "/Site and project information is complete.png",
        },
        {
          text: "Applicable requirements are understood",
          image: "/Applicable fire safety requirements are understood.png",
        },
        {
          text: "Fire safety arrangements are reviewed",
          image: "/Fire safety arrangements are reviewed.png",
        },
        {
          text: "Required documents are identified",
          image: "/Required NOC documents are identified.png",
        },
        {
          text: "Gaps are addressed before proceeding",
          image: "/Gaps are addressed before proceeding.png",
        },
        {
          text: "Updates and follow-up items are tracked",
          image: "/Updates and follow-up items are tracked.png",
        },
      ],
    },
    process: cards([
      [
        "Understand",
        "We review your workplace, project and fire safety requirements.",
        SearchCheck,
      ],
      [
        "Assess",
        "We identify applicable requirements and areas that need attention.",
        ClipboardCheck,
      ],
      [
        "Prepare",
        "We support the required documentation and compliance preparation.",
        FileCheck2,
      ],
      [
        "Proceed",
        "You get clearer guidance for moving through the approval process.",
        CheckCircle2,
      ],
    ]),
    feature: {
      eyebrow: "CONSULTING SUPPORT",
      title: "From requirements to a clearer next step.",
      description:
        "We help connect site readiness, documentation and process guidance.",
      items: [
        {
          title: "Requirement Review",
          text: "A clearer understanding of the fire safety requirements relevant to your site.",
          image: "/fire-noc-requirement-review.png",
        },
        {
          title: "Document Preparation",
          text: "Practical guidance for organizing information and supporting documents.",
          image: "/fire-noc-document-preparation.png",
        },
        {
          title: "Process Support",
          text: "Responsive consulting as questions, updates and further requirements arise.",
          image: "/fire-noc-process-support.png",
        },
      ],
    },
    faqs: [
      {
        question: "What is a Fire NOC?",
        answer:
          "A Fire NOC is an approval associated with applicable fire safety requirements for certain buildings, occupancies or projects.",
      },
      {
        question: "When is Fire NOC required?",
        answer:
          "Requirements vary by building, use, location and applicable authority. We can help you understand the requirements relevant to your project.",
      },
      {
        question: "What documents are generally needed?",
        answer:
          "Document needs vary, but can include site, building, system and fire safety information required for the applicable process.",
      },
      {
        question: "Can you support the Fire NOC process?",
        answer:
          "Yes. We provide consulting, preparation and follow-up support through the process.",
      },
      {
        question: "Do you provide compliance guidance?",
        answer:
          "Yes. We provide practical guidance on identified fire safety requirements and preparation needs.",
      },
    ],
    cta: {
      title: "Need guidance with Fire NOC requirements?",
      description:
        "Talk to our team about fire safety approval and compliance support.",
    },
  },
}
