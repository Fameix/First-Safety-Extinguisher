import Link from "next/link"
import type { ReactNode } from "react"
import { ArrowRight, Phone } from "lucide-react"

import { buttonVariants } from "@/components/ui/button"
import { Container } from "@/components/site/container"
import { cn } from "@/lib/utils"

export function HeroSection({
  eyebrow,
  title,
  description,
  primary,
  secondary,
  image,
  children,
  homeStyle = false,
}: {
  eyebrow?: string
  title: ReactNode
  description: string
  primary?: { label: string; href: string }
  secondary?: { label: string; href: string }
  image?: string
  children?: ReactNode
  homeStyle?: boolean
}) {
  if (homeStyle) {
    return (
      <section className="relative isolate -mt-[88px] min-h-[760px] overflow-hidden bg-zinc-950 pt-[88px] text-white lg:min-h-[850px]">
        {image ? (
          <div
            className="absolute inset-0 -z-20 bg-cover bg-center"
            style={{ backgroundImage: `url(${image})` }}
            aria-hidden="true"
          />
        ) : null}
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(9,9,11,0.97)_0%,rgba(9,9,11,0.86)_36%,rgba(9,9,11,0.34)_68%,rgba(9,9,11,0.12)_100%)]" />
        <div className="absolute inset-x-0 bottom-0 -z-10 h-40 bg-gradient-to-t from-zinc-950/90 to-transparent" />

        <Container className="flex min-h-[672px] items-end pt-28 pb-16 sm:pt-32 lg:min-h-[762px] lg:items-center lg:pt-36 lg:pb-20">
          <div className="max-w-3xl animate-in duration-700 fade-in slide-in-from-bottom-4">
            {eyebrow ? (
              <p className="flex items-center gap-3 text-xs font-bold tracking-[0.22em] text-red-400 uppercase before:h-px before:w-10 before:bg-red-500">
                {eyebrow}
              </p>
            ) : null}
            <h1 className="mt-6 max-w-3xl font-heading text-5xl leading-[0.98] font-semibold tracking-[-0.045em] text-balance sm:text-6xl lg:text-7xl xl:text-[5.25rem]">
              {title}
            </h1>
            <p className="mt-6 max-w-xl text-base leading-7 text-white/72 sm:text-lg">
              {description}
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Link
                href={primary?.href ?? "/contact"}
                className={cn(
                  buttonVariants({ size: "lg" }),
                  "h-12 w-full rounded-lg px-6 sm:w-auto"
                )}
              >
                {primary?.label ?? "Book a Free Consultation"}{" "}
                <ArrowRight aria-hidden="true" />
              </Link>
              <Link
                href={secondary?.href ?? "tel:+919003012345"}
                className={cn(
                  buttonVariants({ variant: "outline", size: "lg" }),
                  "h-12 w-full rounded-lg border-white/25 bg-white/5 px-6 text-white backdrop-blur-sm hover:bg-white hover:text-zinc-950 sm:w-auto"
                )}
              >
                <Phone aria-hidden="true" />
                {secondary?.label ?? "Call Us Now"}
              </Link>
            </div>
          </div>
        </Container>
      </section>
    )
  }

  return (
    <section className="relative -mt-[88px] min-h-[760px] overflow-hidden border-b bg-muted/40 pt-[88px] lg:min-h-[850px]">
      {image ? (
        <div
          className="absolute inset-0 bg-cover bg-center opacity-16"
          style={{ backgroundImage: `url(${image})` }}
          aria-hidden="true"
        />
      ) : null}
      <Container className="relative flex min-h-[672px] items-end pt-28 pb-16 sm:pt-32 lg:min-h-[762px] lg:items-center lg:pt-36 lg:pb-20">
        <div className="w-full">
          {eyebrow ? (
            <p className="text-sm font-medium text-primary uppercase">
              {eyebrow}
            </p>
          ) : null}
          <h1 className="mt-4 max-w-4xl text-4xl font-medium tracking-normal text-foreground md:text-6xl">
            {title}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
            {description}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href={primary?.href ?? "/contact"}
              className={cn(buttonVariants({ size: "lg" }))}
            >
              {primary?.label ?? "Book a Free Consultation"}
            </Link>
            <Link
              href={secondary?.href ?? "tel:+919003012345"}
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }),
                "border-white/25 bg-white/5 text-white backdrop-blur-sm hover:bg-white hover:text-zinc-950"
              )}
            >
              <Phone aria-hidden="true" />
              {secondary?.label ?? "Call Us Now"}
            </Link>
          </div>
        </div>
        {children ? (
          <div className="hidden min-h-64 items-end md:flex">{children}</div>
        ) : null}
      </Container>
    </section>
  )
}
