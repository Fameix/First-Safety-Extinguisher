import Link from "next/link"
import type { ReactNode } from "react"

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
}: {
  eyebrow?: string
  title: string
  description: string
  primary?: { label: string; href: string }
  secondary?: { label: string; href: string }
  image?: string
  children?: ReactNode
}) {
  return (
    <section className="relative overflow-hidden border-b bg-muted/40">
      {image ? (
        <div
          className="absolute inset-0 bg-cover bg-center opacity-16"
          style={{ backgroundImage: `url(${image})` }}
          aria-hidden="true"
        />
      ) : null}
      <Container className="relative grid min-h-[520px] items-end gap-10 py-16 md:grid-cols-[1.05fr_0.95fr] md:py-20">
        <div className="pb-4">
          {eyebrow ? <p className="text-sm font-medium uppercase text-primary">{eyebrow}</p> : null}
          <h1 className="mt-4 max-w-4xl text-4xl font-medium tracking-normal text-foreground md:text-6xl">
            {title}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">{description}</p>
          {(primary || secondary) ? (
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              {primary ? (
                <Link href={primary.href} className={cn(buttonVariants({ size: "lg" }))}>{primary.label}</Link>
              ) : null}
              {secondary ? (
                <Link href={secondary.href} className={cn(buttonVariants({ variant: "outline", size: "lg" }))}>{secondary.label}</Link>
              ) : null}
            </div>
          ) : null}
        </div>
        <div className="hidden min-h-64 items-end md:flex">{children}</div>
      </Container>
    </section>
  )
}
