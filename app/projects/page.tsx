import Image from "next/image"
import Link from "next/link"

import { Container } from "@/components/site/container"
import { buttonVariants } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { pageMetadata } from "@/lib/site-data"
import { cn } from "@/lib/utils"

const projects = [
  {
    title: "Fire Alarm Installation",
    location: "Commercial Building, Chennai",
    image: "/home-project-alarm.jpeg",
  },
  {
    title: "Hydrant System Works",
    location: "Industrial Facility, Tamil Nadu",
    image: "/home-project-pipes.jpeg",
  },
  {
    title: "Maintenance Service",
    location: "Business Campus, Chennai",
    image: "/home-project-maintenance.jpeg",
  },
]

export const metadata = pageMetadata(
  "Projects | Aulukya Fire & Safety Solutions",
  "Explore recent fire safety projects by Aulukya Fire & Safety Solutions across Chennai and surrounding areas.",
  "/projects"
)

export default function Page() {
  return (
    <>
      <section className="relative -mt-[88px] min-h-[760px] overflow-hidden bg-background pt-[88px] lg:min-h-[850px]">
        <Container className="flex min-h-[672px] items-end pt-28 pb-16 sm:pt-32 lg:min-h-[762px] lg:items-center lg:pt-36 lg:pb-20">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold tracking-[0.18em] text-primary uppercase">
              PROJECTS
            </p>
            <h1 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
              Our Recent Projects
            </h1>
            <p className="mt-4 text-base leading-7 text-muted-foreground">
              A small selection of recent fire safety work, including alarm
              systems, hydrant systems and ongoing maintenance support.
            </p>
          </div>
        </Container>
      </section>
      <section className="section-surface py-16">
        <Container>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {projects.map((project) => (
              <Card key={project.title} className="overflow-hidden rounded-lg">
                <div className="relative aspect-[4/3]">
                  <Image
                    src={project.image}
                    alt={`${project.title} - ${project.location}`}
                    fill
                    sizes="(min-width: 1280px) 33vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <CardContent className="p-5">
                  <h2 className="text-lg font-semibold">{project.title}</h2>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {project.location}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="mt-8">
            <Link
              href="/contact"
              className={cn(buttonVariants(), "inline-flex")}
            >
              Contact Us <span className="ml-2">-&gt;</span>
            </Link>
          </div>
        </Container>
      </section>
    </>
  )
}
