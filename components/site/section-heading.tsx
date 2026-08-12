import { Badge } from "@/components/ui/badge"

export function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow?: string
  title: string
  description?: string
}) {
  return (
    <div className="max-w-3xl">
      {eyebrow ? <Badge variant="secondary">{eyebrow}</Badge> : null}
      <h2 className="mt-4 text-3xl font-medium tracking-normal text-foreground md:text-4xl">{title}</h2>
      {description ? <p className="mt-4 text-base leading-7 text-muted-foreground">{description}</p> : null}
    </div>
  )
}
