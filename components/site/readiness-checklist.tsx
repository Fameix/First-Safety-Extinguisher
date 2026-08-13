"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { ClipboardCheck, Gauge, Headset, MapPin, ShieldCheck } from "lucide-react"

import { IconBadge } from "@/components/site/icon-badge"
import { cn } from "@/lib/utils"

export type ChecklistItem = {
  text: string
  icon?: typeof ShieldCheck
  image: string
}

const defaultChecklist: ChecklistItem[] = [
  {
    text: "Correct extinguisher type for the risk",
    icon: ShieldCheck,
    image: "/home-hero-equipment.png",
  },
  {
    text: "Visible, unobstructed and easy to reach",
    icon: MapPin,
    image: "/home-hero-fire-extinguisher.jpeg",
  },
  {
    text: "Pressure gauge in the serviceable range",
    icon: Gauge,
    image: "/home-service-extinguishers.jpeg",
  },
  {
    text: "Pin, seal, hose and handle in good condition",
    icon: ClipboardCheck,
    image: "/home-project-maintenance.jpeg",
  },
  {
    text: "Current inspection and service marking",
    icon: ClipboardCheck,
    image: "/home-service-audit.jpeg",
  },
  {
    text: "Team members know where it is and how to use it",
    icon: Headset,
    image: "/home-hero-fire-extinguisher.jpeg",
  },
]

export function ReadinessChecklist({
  items = defaultChecklist,
  eyebrow = "Readiness checklist",
  title = "Before an emergency, check the basics.",
}: {
  items?: ChecklistItem[]
  eyebrow?: string
  title?: string
}) {
  const [activeIndex, setActiveIndex] = useState(0)
  const [supportsHover, setSupportsHover] = useState(false)

  useEffect(() => {
    const media = window.matchMedia("(hover: hover) and (pointer: fine)")
    const update = () => setSupportsHover(media.matches)

    update()
    media.addEventListener("change", update)

    return () => media.removeEventListener("change", update)
  }, [])

  return (
    <div className="grid gap-12 lg:grid-cols-2 lg:items-stretch lg:gap-20">
      <div className="flex h-full flex-col">
        <div className="max-w-2xl">
          <p className="flex items-center gap-3 text-xs font-bold tracking-[0.2em] uppercase before:h-px before:w-8 before:bg-primary text-primary">
            {eyebrow}
          </p>
          <h2 className="mt-4 font-heading text-3xl leading-tight font-semibold tracking-[-0.035em] sm:text-4xl lg:text-5xl">
            {title}
          </h2>
        </div>

        <div className="mt-8 grid flex-1 gap-4">
          {items.map(({ text, icon }, index) => {
            const Icon = icon ?? [ShieldCheck, MapPin, Gauge, ClipboardCheck, ClipboardCheck, Headset][index % 6]
            const isActive = index === activeIndex
            return (
              <button
                key={text}
                type="button"
                onClick={() => setActiveIndex(index)}
                onMouseEnter={() => {
                  if (supportsHover) setActiveIndex(index)
                }}
                className={cn(
                  "flex w-full items-center gap-3 rounded-xl border border-transparent px-1 py-1 text-left text-sm font-medium text-foreground/80 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/30 focus-visible:ring-offset-2",
                  isActive && "bg-red-50/60 text-foreground"
                )}
              >
                <IconBadge size="sm" className={cn("transition-colors", isActive ? "bg-red-100 text-red-600" : "bg-red-50 text-red-600")}>
                  <Icon className="size-5" aria-hidden="true" />
                </IconBadge>
                <span>{text}</span>
              </button>
            )
          })}
        </div>
      </div>

      <div className="relative h-full min-h-[420px] overflow-hidden rounded-2xl bg-muted">
        {items.map(({ text, image }, index) => (
          <Image
            key={image}
            src={image}
            alt={text}
            fill
            sizes="(min-width: 1024px) 48vw, 100vw"
            className={cn(
              "object-cover transition-opacity duration-500 ease-in-out",
              index === activeIndex ? "opacity-100" : "opacity-0"
            )}
            priority={index === 0}
          />
        ))}
      </div>
    </div>
  )
}
