import Image from "next/image"

import { Container } from "@/components/site/container"
import { Card } from "@/components/ui/card"

const industries = [
  {
    title: "Commercial Buildings",
    description:
      "Fire protection solutions for offices and commercial spaces, helping protect people, property and daily business operations.",
    image: "/commercial-buildings.png",
  },
  {
    title: "Industrial Facilities",
    description:
      "Reliable fire safety support for industrial workplaces, covering essential equipment, maintenance and compliance requirements.",
    image: "/industrial-facilities.png",
  },
  {
    title: "Retail & Shopping",
    description:
      "Practical fire protection for retail stores and shopping spaces, helping safeguard customers, employees and property.",
    image: "/retail-shopping.png",
  },
  {
    title: "Educational Institutions",
    description:
      "Fire safety solutions for schools and colleges, supporting safer learning environments with equipment and compliance support.",
    image: "/educational-institutions.png",
  },
  {
    title: "Healthcare Facilities",
    description:
      "Reliable fire protection for hospitals and clinics, with suitable equipment, maintenance and compliance support.",
    image: "/healthcare-facilities.png",
  },
  {
    title: "Residential & Apartments",
    description:
      "Fire safety support for apartments and residential buildings, helping protect residents, common areas and property.",
    image: "/residential-buildings.png",
  },
  {
    title: "Hospitality",
    description:
      "Fire protection solutions for hotels and restaurants, helping safeguard guests, employees and property with reliable support.",
    image: "/hotels-hospitality.png",
  },
  {
    title: "Warehouses & Logistics",
    description:
      "Fire safety solutions for warehouses and logistics facilities, helping protect stored goods, infrastructure and operations.",
    image: "/warehouses-logistics.png",
  },
] as const

export function IndustriesSection() {
  return (
    <section className="section-surface-alt py-20 text-zinc-950 sm:py-24 lg:py-32">
      <Container>
        <div className="max-w-4xl">
          <p className="flex items-center gap-3 text-xs font-bold tracking-[0.2em] text-primary uppercase before:h-px before:w-8 before:bg-primary">
            Our Industries
          </p>
          <h2 className="mt-4 font-heading text-3xl leading-tight font-semibold tracking-[-0.03em] text-zinc-950 sm:text-4xl lg:text-5xl lg:whitespace-nowrap">
            Safety Solutions for Diverse Business Environments.
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-7 text-zinc-600">
            Practical fire protection shaped around each workplace, its people
            and its operations.
          </p>
        </div>

        <div className="mt-12 grid auto-rows-fr gap-5 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4 lg:gap-6">
          {industries.map((industry) => {
            return (
              <Card
                borderless
                key={industry.title}
                className="group flex h-full flex-col overflow-hidden rounded-2xl border border-zinc-200 bg-white p-0 text-zinc-950 shadow-sm transition-colors duration-300 hover:border-red-200"
              >
                <div className="relative aspect-[4/3] w-full shrink-0 overflow-hidden bg-zinc-100">
                  <Image
                    src={industry.image}
                    alt={`${industry.title} fire safety solutions`}
                    fill
                    sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col px-7 py-7 lg:px-8 lg:py-8">
                  <h3 className="font-heading text-xl font-semibold tracking-tight">
                    {industry.title}
                  </h3>
                  <p className="mt-4 text-sm leading-6 text-zinc-600">
                    {industry.description}
                  </p>
                </div>
              </Card>
            )
          })}
        </div>
      </Container>
    </section>
  )
}
