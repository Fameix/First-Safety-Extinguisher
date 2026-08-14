import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { Container } from "@/components/site/container"

export function CTASection({
  title = "Need Reliable Fire Safety Solutions?",
  description = "Talk to Aulukya for practical support across fire protection, safety equipment, maintenance, audits, and Fire NOC consulting.",
  label = "Contact Us",
  href = "/contact",
  external = false,
}: {
  title?: string
  description?: string
  label?: string
  href?: string
  external?: boolean
}) {
  return (
    <section className="relative overflow-hidden border-y border-zinc-100 bg-white text-zinc-950">
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(220,38,38,0.06),transparent_36%)]"
      />
      <Container className="relative flex min-h-[300px] flex-col items-center justify-center py-16 text-center lg:py-20">
        <p className="text-[11px] font-semibold tracking-[0.42em] text-[#ff5a4f] uppercase">
          READY WHEN YOU ARE
        </p>
        <h2 className="mt-5 max-w-none text-4xl font-semibold tracking-[-0.04em] text-balance sm:text-5xl md:text-6xl lg:text-[4.25rem] lg:leading-[0.95]">
          {title}
        </h2>
        <p className="mt-6 max-w-3xl text-sm leading-7 text-zinc-600 sm:text-base">
          {description}
        </p>
        <Link
          href={href}
          target={external ? "_blank" : undefined}
          rel={external ? "noopener noreferrer" : undefined}
          className="mt-8 inline-flex h-12 items-center gap-3 rounded-lg bg-[#e10d0d] px-6 text-sm font-semibold text-white shadow-[0_12px_28px_rgba(225,13,13,0.18)] transition-transform duration-200 hover:-translate-y-0.5 hover:bg-[#c90b0b] focus-visible:ring-2 focus-visible:ring-red-500/50 focus-visible:ring-offset-2 focus-visible:ring-offset-white focus-visible:outline-none"
        >
          {label}
          <ArrowRight className="size-4" aria-hidden="true" />
        </Link>
      </Container>
    </section>
  )
}
