import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function CTASection({
  title = "Need Reliable Fire Safety Solutions?",
  description = "Talk to Aulukya for practical support across fire protection, safety equipment, maintenance, audits, and Fire NOC consulting.",
  label = "Contact Us",
  href = "/contact",
}: {
  title?: string
  description?: string
  label?: string
  href?: string
}) {
  return (
    <section className="relative overflow-hidden bg-[linear-gradient(90deg,#060000_0%,#170000_26%,#2b0000_56%,#6b0404_78%,#f01313_100%)] text-white">
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_36%),linear-gradient(180deg,rgba(255,255,255,0.03),transparent_28%)]"
      />
      <div className="relative mx-auto flex min-h-[300px] max-w-6xl flex-col items-center justify-center px-4 py-16 text-center sm:px-6 lg:px-8 lg:py-20">
        <p className="text-[11px] font-semibold uppercase tracking-[0.42em] text-[#ff5a4f]">
          READY WHEN YOU ARE
        </p>
        <h2 className="mt-5 max-w-5xl text-4xl font-semibold tracking-[-0.04em] text-balance sm:text-5xl md:text-6xl lg:text-[4.25rem] lg:leading-[0.95]">
          {title}
        </h2>
        <p className="mt-6 max-w-3xl text-sm leading-7 text-white/88 sm:text-base">
          {description}
        </p>
        <Link
          href={href}
          className="mt-8 inline-flex h-12 items-center gap-3 rounded-lg bg-[#e10d0d] px-6 text-sm font-semibold text-white shadow-[0_0_0_1px_rgba(255,255,255,0.06),0_14px_30px_rgba(0,0,0,0.25)] transition-transform duration-200 hover:-translate-y-0.5 hover:bg-[#f51515] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80 focus-visible:ring-offset-2 focus-visible:ring-offset-[#320000]"
        >
          {label}
          <ArrowRight className="size-4" aria-hidden="true" />
        </Link>
      </div>
    </section>
  )
}
