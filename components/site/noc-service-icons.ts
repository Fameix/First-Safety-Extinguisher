import { createLucideIcon } from "lucide-react"

export const RequirementReviewIcon = createLucideIcon("RequirementReview", [
  ["path", { d: "M9 5h6", key: "title" }],
  ["path", { d: "M9 9h4", key: "line" }],
  ["path", { d: "M5 5h.01", key: "dot-one" }],
  ["path", { d: "M5 9h.01", key: "dot-two" }],
  ["path", { d: "M14 2H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h6", key: "document" }],
  ["circle", { cx: "16", cy: "16", r: "4", key: "lens" }],
  ["path", { d: "m19 19 3 3", key: "handle" }],
])

export const DocumentationSupportIcon = createLucideIcon(
  "DocumentationSupport",
  [
    [
      "path",
      {
        d: "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z",
        key: "document",
      },
    ],
    ["path", { d: "M14 2v6h6", key: "fold" }],
    ["path", { d: "m8 15 2.5 2.5L16 12", key: "check" }],
  ]
)

export const SafetyAssessmentIcon = createLucideIcon("SafetyAssessment", [
  [
    "path",
    { d: "M20 13c0 5-3.5 7.5-8 9-4.5-1.5-8-4-8-9V5l8-3 8 3Z", key: "shield" },
  ],
  ["path", { d: "m8.5 12 2.25 2.25L15.5 9.5", key: "check" }],
])

export const ComplianceGuidanceIcon = createLucideIcon("ComplianceGuidance", [
  [
    "path",
    {
      d: "M15 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V9Z",
      key: "certificate",
    },
  ],
  ["path", { d: "M15 3v6h6", key: "fold" }],
  ["path", { d: "m7.5 15 2 2 4-4", key: "check" }],
])

export const NocSupportIcon = createLucideIcon("NocSupport", [
  [
    "path",
    {
      d: "M15 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V9Z",
      key: "document",
    },
  ],
  ["path", { d: "M15 3v6h6", key: "fold" }],
  ["circle", { cx: "12", cy: "15", r: "3.5", key: "seal" }],
  ["path", { d: "m10.5 15 1 1 2-2", key: "check" }],
])

export const FollowUpSupportIcon = createLucideIcon("FollowUpSupport", [
  ["path", { d: "M4 13a8 8 0 0 1 16 0", key: "headband" }],
  [
    "path",
    { d: "M4 13v4a2 2 0 0 0 2 2h1v-7H6a2 2 0 0 0-2 1Z", key: "left-ear" },
  ],
  ["path", { d: "M20 13v4a2 2 0 0 1-2 2h-1", key: "right-ear" }],
  ["path", { d: "M14 21h2a4 4 0 0 0 4-4v-5h-3v5", key: "microphone" }],
  ["path", { d: "m9 14 1.5 1.5L14 12", key: "check" }],
])
